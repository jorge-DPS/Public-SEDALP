export const getYouTubeVideoId = (
  url: string,
): string | null => {
  try {
    const parsed = new URL(url)

    if (parsed.hostname === 'youtu.be') {
      return parsed.pathname
        .replace('/', '')
        .split('/')[0] || null
    }

    if (
      parsed.hostname.includes('youtube.com')
    ) {
      if (parsed.pathname === '/watch') {
        return parsed.searchParams.get('v')
      }

      const match = parsed.pathname.match(
        /^\/(?:embed|shorts)\/([^/?]+)/,
      )

      return match?.[1] ?? null
    }

    return null
  } catch {
    return null
  }
}

export const getYouTubeEmbedUrl = (
  url: string,
): string | null => {
  const id = getYouTubeVideoId(url)

  if (!id) {
    return null
  }

  return `https://www.youtube-nocookie.com/embed/${id}`
}