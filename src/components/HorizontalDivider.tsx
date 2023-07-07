import { HexColor } from "@yext/studio";

export interface HorizontalDividerProps {
  dividerColor: HexColor;
  dividerHeight: "2" | "4" | "6" | "8" | "10";
}

export const initialProps: HorizontalDividerProps = {
  dividerColor: "#000000",
  dividerHeight: "4",
};

const HorizontalDivider = ({
  dividerColor,
  dividerHeight,
}: HorizontalDividerProps) => {
  return (
    <span
      className={`mx-2 h-${dividerHeight} w-0.5 rounded-full`}
      style={{ backgroundColor: dividerColor }}
    />
  );
};

export default HorizontalDivider;
