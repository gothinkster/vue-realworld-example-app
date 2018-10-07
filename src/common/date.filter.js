import { default as format } from "date-fns/format";

export default date => {
  return format(new Date(date), "MMMM D, YYYY");
};
