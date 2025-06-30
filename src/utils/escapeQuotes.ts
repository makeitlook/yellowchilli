export function escapeQuotes(str: string): string {
  return str.replace(/'/g, "&#39;");
}
