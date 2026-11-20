export function assetUrl(path: string): string {
  if (!path || /^(https?:|data:|blob:|mailto:|tel:|#)/.test(path)) {
    return path;
  }

  const base = import.meta.env.BASE_URL || "/";
  const normalizedBase = base.endsWith("/") ? base : `${base}/`;

  if (normalizedBase !== "/" && path.startsWith(normalizedBase)) {
    return path;
  }

  const normalizedPath = path.replace(/^\/+/, "");
  return `${normalizedBase}${normalizedPath}`;
}

