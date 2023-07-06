import * as React from "react";
import "../index.css";
import {
  GetPath,
  TemplateProps,
  TemplateConfig,
  TemplateRenderProps,
  GetHeadConfig,
  HeadConfig,
} from "@yext/pages";
import BlogLayout from "../components/BlogLayout";
import MainLayout from "../components/MainLayout";
import { formatDate } from "../utils/formatDate";
import { Link } from "@yext/pages/components";

export const config: TemplateConfig = {
  stream: {
    $id: "blog",
    fields: [
      "id",
      "name",
      "slug",
      "datePosted",
      "c_coverPhoto",
      "c_blogBody",
      "c_blogAuthor",
      "c_description",
      "c_metaDescription",
      "c_keywords",
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

export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  document,
}): HeadConfig => {
  return {
    title: document.name,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    tags: [
      {
        type: "meta",
        attributes: {
          name: "description",
          content: document.c_metaDescription,
        },
      },
      {
        type: "meta",
        attributes: {
          name: "keywords",
          content: document.c_keywords,
        },
      },
    ],
  };
};

const Blog = ({
  __meta,
  document,
  relativePrefixToRoot,
}: TemplateRenderProps) => {
  const { name, datePosted, c_blogBody, c_coverPhoto, c_blogAuthor } = document;

  return (
    <MainLayout templateData={{ __meta, document }} root={relativePrefixToRoot}>
      <BlogLayout
        title={name}
        date={formatDate(datePosted)}
        content={c_blogBody}
        image={c_coverPhoto}
        author={c_blogAuthor}
      />
    </MainLayout>
  );
};

export default Blog;
