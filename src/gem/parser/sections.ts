export function section(
  text: string,
  start: string,
  end?: string
) {
  const s = text.indexOf(start);

  if (s === -1) return "";

  const slice = text.substring(s);

  if (!end) return slice;

  const e = slice.indexOf(end);

  if (e === -1) return slice;

  return slice.substring(0, e);
}