
export function formatAsDate(value: string) {
  const d = new Date(value);

  let dd: any = d.getDate();

  if (dd < 10) {
    dd = "0" + dd;
  }

  let mm: any = d.getMonth() + 1;

  if (mm < 10) {
    mm = "0" + mm;
  }

  return `${dd}.${mm}.${d.getFullYear()}`;
}

export function formatAsDateWithTime(value: string) {
  const d = new Date(value);

  let hh: any = d.getHours();

  let mm: any = d.getMinutes();

  if (mm < 10) {
    mm = "0" + mm;
  }

  return formatAsDate(value) + ` ${hh}:${mm} Uhr`;
}