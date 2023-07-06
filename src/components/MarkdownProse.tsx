import clsx from "clsx";
import { Markdown } from "@yext/react-components";

interface MarkdownProseProps {
  content: string;
}

const MarkdownProse = ({ content }: MarkdownProseProps) => {
  return (
    <div className="prose lg:prose-lg">
      <Markdown content={content} />
    </div>
  );
};

export default MarkdownProse;
