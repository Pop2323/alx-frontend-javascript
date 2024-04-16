export default function cleanSet(set, startString) {
  let res = '';
  if (!startString || startString.length === 0) return res;
  for (const value of set) {
    if (value && value.startsWith(startString)) {
      res += `${value.slice(startString.length)}-`;
    }
  }
  return res.slice(0, -1);
}
