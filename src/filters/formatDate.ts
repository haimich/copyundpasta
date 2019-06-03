
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