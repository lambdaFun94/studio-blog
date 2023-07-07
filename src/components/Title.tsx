export interface TitleProps {
  value: string;
  textSize: "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl";
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
}

export const initialProps: TitleProps = {
  value: "Title",
  textSize: "4xl",
  fontWeight: "medium",
};

const Title = ({ value, textSize, fontWeight }: TitleProps) => {
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
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl",
    "5xl": "text-5xl",
    "6xl": "text-6xl",
  };

  return (
    <div className="not-prose mt-4">
      <h1
        className={`${sizeVariants[textSize]} ${weightVariants[fontWeight]} tracking-tight text-gray-900`}
      >
        {value}
      </h1>
    </div>
  );
};

export default Title;
