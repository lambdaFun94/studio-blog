import { HexColor } from "@yext/studio";

export interface ParagraphProps {
  value?: string;
  textSize: "xs" | "sm" | "base" | "lg" | "xl" | "2xl";
  fontWeight:
    | "thin"
    | "extralight"
    | "light"
    | "normal"
    | "medium"
    | "semibold"
    | "bold"
    | "extrabold"
    | "black";
  textColor?: HexColor;
}

export const initialProps: ParagraphProps = {
  value: "Paragraph",
  textSize: "base",
  fontWeight: "normal",
  textColor: "#000000",
};

const Paragraph = ({
  value,
  textSize,
  fontWeight,
  textColor,
}: ParagraphProps) => {
  const weightVariants = {
    thin: "font-thin",
    extralight: "font-extralight",
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
    extrabold: "font-extrabold",
    black: "font-black",
  };

  const sizeVariants = {
    xs: "text-xs",
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
  };

  return (
    <p
      aria-labelledby="information-heading"
      className={`${sizeVariants[textSize]} ${weightVariants[fontWeight]}`}
      style={{ color: textColor }}
    >
      {value}
    </p>
  );
};

export default Paragraph;
