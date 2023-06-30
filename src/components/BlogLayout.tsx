import React from "react";
import Container from "./Container";
import { ComplexImageType, ImageType, Image } from "@yext/pages/components";
import { LexicalRichText } from "@yext/react-components";

interface BlogLayoutProps {
  title: string;
  date: string;
  image?: ComplexImageType | ImageType;
  author: string,
  content: any;
}

const BlogLayout = ({ title, date, image, content, author }: BlogLayoutProps) => {
  return (
    <div className="mx-auto max-w-4xl flex flex-col items-center py-8">
      {image && <Image className="rounded-3xl h-96 my-2" image={image} />}
      <article className="w-full">
        <header className="flex flex-col mb-4">
          <h1 className="mt-6 text-4xl font-bold tracking-tight">
            {title}
          </h1>
          <div className="order-first flex items-center text-zinc-400 dark:text-zinc-500">
            <span>{author}</span>
            <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500 mx-2" />
            <time>{date}</time>
          </div>
        </header>
        <LexicalRichText
          serializedAST={JSON.stringify(content.json)}
        />
      </article>
    </div>
  );
};

export default BlogLayout;
