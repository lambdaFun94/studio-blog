import React from "react";
import Container from "./Container";
import { ComplexImageType, ImageType, Image } from "@yext/pages/components";
import { LexicalRichText } from "@yext/react-components";

const ArrowLeftIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

interface BlogLayoutProps {
  title: string;
  date: string;
  image?: ComplexImageType | ImageType;
  author: string,
  content: any;
}

const BlogLayout = ({ title, date, image, content, author }: BlogLayoutProps) => {
  return (
    <>
      <Container className="my-16">
        {image && <Image className="sm:rounded-3xl" image={image} />}
        <div className="mt-4 xl:relative">
          <article>
            <header className="flex flex-col mb-4">
              <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
                {title}
              </h1>
              <div className="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500">
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
      </Container>
    </>
  );
};

export default BlogLayout;
