export function GetTel(personProps) {
  return <a href={`tel:${personProps.tel}`}>{personProps.tel}</a>;
}
