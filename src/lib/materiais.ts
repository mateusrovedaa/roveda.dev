import fs from 'node:fs';
import path from 'node:path';

export interface MaterialFile {
  name: string;
  path: string; // relativo a public/materiais, ex "aula01.html" ou "roteiro/lab01.pdf"
  url: string; // /materiais/aula01.html
  viewUrl: string; // /materiais/aula01.html (viewer) ou /materiais/view/...
  ext: string;
  size: number;
  mtime: string;
  isDir: boolean;
}

const MATERIAIS_DIR = path.join(process.cwd(), 'public', 'materiais');

function formatSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} kB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export function getMateriais(): MaterialFile[] {
  if (!fs.existsSync(MATERIAIS_DIR)) return [];
  const files: MaterialFile[] = [];
  function walk(dir: string, base: string) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.name.startsWith('.')) continue;
      if (entry.name === 'README.md') continue;
      const full = path.join(dir, entry.name);
      const rel = path.join(base, entry.name);
      if (entry.isDirectory()) {
        walk(full, rel);
      } else {
        const stat = fs.statSync(full);
        const ext = path.extname(entry.name).toLowerCase();
        files.push({
          name: entry.name,
          path: rel,
          url: `/materiais/${rel}`,
          viewUrl: `/materiais/${rel}`,
          ext,
          size: stat.size,
          mtime: stat.mtime.toISOString(),
          isDir: false,
        });
      }
    }
  }
  walk(MATERIAIS_DIR, '');
  // ordena por data mais recente primeiro
  files.sort((a, b) => b.mtime.localeCompare(a.mtime));
  return files;
}

export function getMaterialByPath(relPath: string): { content: string; ext: string; stat: fs.Stats } | null {
  const full = path.join(MATERIAIS_DIR, relPath);
  if (!fs.existsSync(full) || fs.statSync(full).isDirectory()) return null;
  const stat = fs.statSync(full);
  const ext = path.extname(full).toLowerCase();
  // para html, lê como texto; para outros, não precisa
  if (ext === '.html' || ext === '.htm' ) {
    const content = fs.readFileSync(full, 'utf-8');
    return { content, ext, stat };
  }
  return { content: '', ext, stat };
}

export function formatSizeHelper(bytes: number) {
  return formatSize(bytes);
}
