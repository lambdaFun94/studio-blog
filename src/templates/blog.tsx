import * as React from "react";
import "../index.css";
import {
  GetPath,
  TemplateProps,
  TemplateConfig,
  TemplateRenderProps,
} from "@yext/pages";
import Container from "../components/Container";
import BlogLayout from "../components/BlogLayout";
import Main from "../components/layouts/Main";

export const config: TemplateConfig = {
  stream: {
    $id: "blog",
    fields: [
      "id",
      "name",
      "slug",
      "datePosted",
      "c_coverPhoto",
      "c_body",
      "c_description",
    ],
    filter: {
      entityTypes: ["ce_blog"],
    },
    localization: {
      locales: ["en"],
      primary: false,
    },
  },
};

export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return document.slug;
};

const Blog = ({ document }: TemplateRenderProps) => {
  const { name, datePosted, c_body, c_coverPhoto } = document;

  return (
    <Main>
      <Container>
        <BlogLayout
          title={name}
          date={datePosted}
          content={c_body}
          image={c_coverPhoto}
        />
      </Container>
    </Main>
  );
};

export default Blog;
