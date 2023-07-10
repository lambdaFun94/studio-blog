import { Markdown } from "@yext/react-components";

interface MarkdownContentProps {
  content: string;
}

const MarkdownContent = ({ content }: MarkdownContentProps) => {
  return (
    <div className="prose lg:prose-xl">
      <Markdown content={content} />
    </div>
  );
};

export default MarkdownContent;
