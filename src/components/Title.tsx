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
  return (
    <div className="not-prose mt-4">
      <h1
        className={`text-${textSize} font-${fontWeight} tracking-tight text-gray-900`}
      >
        {value}
      </h1>
    </div>
  );
};

export default Title;
