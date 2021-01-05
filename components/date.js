import { parseISO, format } from "date-fns";

export default function Date({ dateTime }) {
  const parsedDate = parseISO(dateTime);
  return <time dateTime={dateTime}>{format(parsedDate, "LLLL dd, yyyy")}</time>;
}
