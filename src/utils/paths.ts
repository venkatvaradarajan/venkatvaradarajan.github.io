// Public-folder assets referenced by absolute path (e.g. "/resume.pdf") need
// the Pages base path prepended manually — Vite only rewrites references it
// finds in index.html, not string literals inside components.
export function withBase(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}
