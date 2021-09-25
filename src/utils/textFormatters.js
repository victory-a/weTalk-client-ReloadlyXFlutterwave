export function removeEmptySpace(str = "") {
  return str.replace(/\s/g, "");
}

export function removeCommas(str = "") {
  return str.toString().replace(/,/g, "");
}
