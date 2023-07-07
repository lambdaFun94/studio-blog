import { HexColor } from "@yext/studio";
import { formatDate } from "../utils/formatDate";

export interface DateProps {
  date: string;
  textColor: HexColor;
}

export const initialProps: DateProps = {
  date: "2023-06-01",
  textColor: "#000000",
};

const Date = ({ date, textColor }: DateProps) => {
  return <span style={{ color: textColor }}>{formatDate(date)}</span>;
};

export default Date;
