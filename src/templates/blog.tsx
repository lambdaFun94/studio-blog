import "../index.css";
import {
  GetPath,
  TemplateProps,
  TemplateConfig,
  TemplateRenderProps,
  GetHeadConfig,
  HeadConfig,
} from "@yext/pages";
import MainLayout from "../components/MainLayout";
import { formatDate } from "../utils/formatDate";
import BigImage from "../components/BigImage";
import { BlogType } from "../types/autogen";
import CenteredContainer from "../components/CenteredContainer";
import Title from "../components/Title";
import MarkdownProse from "../components/MarkdownProse";

export const config: TemplateConfig = {
  stream: {
    $id: "blog",
    fields: [
      "name",
      "slug",
      "datePosted",
      "primaryPhoto",
      "c_body",
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
  return document.slug ?? document.entityId.toString();
};

export default function Blog({ document }: TemplateProps) {
  return (
    <MainLayout>
      <CenteredContainer>
        <BigImage
          src={document.primaryPhoto.image.url}
          alt={document.primaryPhoto.image.alternateText}
        />
        <Title value={document.name} textSize="4xl" fontWeight="bold" />
        <MarkdownProse content={document.c_body.markdown} />
      </CenteredContainer>
    </MainLayout>
  );
}
