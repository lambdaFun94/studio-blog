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
import BigImage from "../components/BigImage";
import ArticleContainer from "../components/ArticleContainer";
import Title from "../components/Title";
import MarkdownContent from "../components/MarkdownContent";
import Header from "../components/Header";
import HorizontalStack from "../components/HorizontalStack";
import Snippet from "../components/Snippet";
import HorizontalDivider from "../components/HorizontalDivider";
import Footer from "../components/Footer";
import Date from "../components/Date";

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

export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = (
  data
): HeadConfig => {
  return {
    title: "Blog Home",
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
  };
};

export default function Blog({ document }: TemplateProps) {
  return (
    <MainLayout>
      <Header
        backgroundColor="#000000"
        textColor="#FFFFFF"
        company="NYC Blog"
        logo="https://a.mktgcdn.com/p/R9FjcYjRNA5dAespqgHFLMvu2m18-E5Apnb3KON0oJY/300x300.png"
        link1="#"
        link2="#"
        label1="About"
        label2="Sign In"
      />
      <ArticleContainer>
        <Title
          value={document.name}
          textSize="4xl"
          fontWeight="bold"
          topMargin="0"
          bottomMargin="0"
        />
        <HorizontalStack
          spacing="0"
          leftMargin="0"
          rightMargin="0"
          topMargin="2"
          bottomMargin="4"
          alignment="center"
          verticalOnMobile="false"
        >
          <Snippet
            text={document.c_blogAuthor}
            textColor="#929191"
            fontWeight="light"
            textSize="base"
          />
          <HorizontalDivider dividerHeight="4" dividerColor="#929191" />
          <Date
            textColor="#929191"
            date={document.datePosted}
            textSize="base"
            fontWeight="light"
          />
        </HorizontalStack>
        <BigImage
          src={document.primaryPhoto.image.url}
          alt={document.primaryPhoto.image.alternateText}
        />
        <MarkdownContent content={document.c_body.markdown} />
      </ArticleContainer>
      <Footer
        label1="Privacy"
        link1="#"
        label2="Terms"
        link2="#"
        label3="Settings"
        link3="#"
        label4="Help"
        link4="#"
        backgroundColor="#000000"
        textColor="#FFFFFF"
      />
    </MainLayout>
  );
}
