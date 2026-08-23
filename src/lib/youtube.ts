export interface YTVideo {
  id: string;
  title: string;
  link: string;
  published: string;
  thumbnail: string;
}

const CHANNEL_ID = "UCSc4UgSe4WiRpnXS23ZrQvg";
const RSS_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;

// Fallback estático - caso o fetch falhe em build (offline/CI sem rede)
const FALLBACK: YTVideo[] = [
  {
    id: "z1pkWx9tACQ",
    title: "Seu primeiro servidor com software livre",
    link: "https://www.youtube.com/watch?v=z1pkWx9tACQ",
    published: "2024-01-15T00:00:00+00:00",
    thumbnail: "https://i.ytimg.com/vi/z1pkWx9tACQ/hqdefault.jpg",
  },
  {
    id: "onmAp1kOVng",
    title: "OPENCODE: AGENTE DE CODIFICAÇÃO SEM LOCK-IN E ABERTO",
    link: "https://www.youtube.com/watch?v=onmAp1kOVng",
    published: "2026-06-22T15:00:00+00:00",
    thumbnail: "https://i.ytimg.com/vi/onmAp1kOVng/hqdefault.jpg",
  },
  {
    id: "s00s_EJ2pm4",
    title: "Pets Vale do Taquari - bastidores",
    link: "https://www.youtube.com/watch?v=s00s_EJ2pm4",
    published: "2023-09-20T00:00:00+00:00",
    thumbnail: "https://i.ytimg.com/vi/s00s_EJ2pm4/hqdefault.jpg",
  },
];

function parseRSS(xml: string): YTVideo[] {
  const entries = [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)];
  const videos: YTVideo[] = [];
  for (const m of entries) {
    const entry = m[1];
    const id = entry.match(/<yt:videoId>([^<]+)<\/yt:videoId>/)?.[1]?.trim();
    const title = entry.match(/<title>([^<]+)<\/title>/)?.[1]?.trim();
    const published = entry.match(/<published>([^<]+)<\/published>/)?.[1]?.trim();
    if (!id || !title) continue;
    // thumbnail pode vir como <media:thumbnail url="..."> - reconstrói se ausente
    const thumbMatch = entry.match(/<media:thumbnail[^>]+url="([^"]+)"/);
    const thumbnail = thumbMatch?.[1] ?? `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
    const link = `https://www.youtube.com/watch?v=${id}`;
    videos.push({ id, title, link, published: published ?? new Date().toISOString(), thumbnail: thumbnail.replace("http://", "https://") });
  }
  return videos;
}

export async function getLatestVideos(limit = 6): Promise<YTVideo[]> {
  try {
    const res = await fetch(RSS_URL, {
      headers: { "User-Agent": "RoveebBot/1.0 (+https://roveeb.com)" },
    });
    if (!res.ok) throw new Error(`RSS ${res.status}`);
    const xml = await res.text();
    const parsed = parseRSS(xml);
    if (parsed.length === 0) throw new Error("empty RSS");
    return parsed.slice(0, limit);
  } catch (err) {
    console.warn("[youtube] RSS fetch falhou, usando fallback:", err instanceof Error ? err.message : String(err));
    return FALLBACK.slice(0, limit);
  }
}
