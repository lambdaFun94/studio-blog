import { HexColor } from "@yext/studio";

export interface SnippetProps {
  text: string;
  textColor: HexColor;
}

export const initialProps: SnippetProps = {
  text: "Snippet",
  textColor: "#000000",
};

const Snippet = ({ text, textColor }: SnippetProps) => {
  return <span style={{ color: textColor }}>{text}</span>;
};

export default Snippet;
