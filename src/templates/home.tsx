import "../index.css";
import {
  GetPath,
  TemplateProps,
  TemplateRenderProps,
  GetHeadConfig,
  HeadConfig,
  TemplateConfig,
} from "@yext/pages";
import MainLayout from "../components/MainLayout";
import BigImage from "../components/BigImage";
import CenteredContainer from "../components/CenteredContainer";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SquareImage from "../components/SquareImage";
import Title from "../components/Title";
import VerticalStack from "../components/VerticalStack";
import Date from "../components/Date";
import { C_featuredBlogs } from "../types/autogen";
import Paragraph from "../components/Paragraph";
import { Link } from "@yext/pages/components";
import HorizontalStack from "../components/HorizontalStack";
import FeaturedBlog from "../components/FeaturedBlog";

export const config: TemplateConfig = {
  stream: {
    $id: "home",
    fields: [
      "id",
      "name",
      "c_coverPhoto",
      "c_heading",
      "c_subHeading",
      "slug",
      "c_featuredBlogs.id",
      "c_featuredBlogs.name",
      "c_featuredBlogs.slug",
      "c_featuredBlogs.c_coverPhoto",
      "c_featuredBlogs.c_description",
      "c_featuredBlogs.datePosted",
    ],
    filter: {
      entityTypes: ["ce_homePage"],
    },
    localization: {
      locales: ["en"],
      primary: false,
    },
  },
};

export const getPath: GetPath<TemplateProps> = () => {
  return "index.html";
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

export default function Home({ document }: TemplateProps) {
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
      <CenteredContainer>
        <VerticalStack
          spacing="8"
          topMargin="10"
          bottomMargin="10"
          leftMargin="2"
          rightMargin="2"
          alignment="left"
        >
          <BigImage
            src={document.c_coverPhoto.image.url}
            alt={document.c_coverPhoto.image.alternateText}
          />
          <Title
            value="Featured Articles"
            fontWeight="bold"
            textSize="4xl"
            topMargin="0"
            bottomMargin="0"
          />
          {document.c_featuredBlogs?.map((item: C_featuredBlogs) => (
            <FeaturedBlog blog={item} />
          ))}
        </VerticalStack>
      </CenteredContainer>
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
