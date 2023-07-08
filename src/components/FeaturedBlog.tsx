import { C_featuredBlogs } from "../types/autogen";
import HorizontalStack from "./HorizontalStack";
import Link from "./Link";
import Paragraph from "./Paragraph";
import SquareImage from "./SquareImage";
import VerticalStack from "./VerticalStack";
import Date from "./Date";

export interface FeaturedBlogProps {
  blog: C_featuredBlogs;
}

const FeaturedBlog = ({ blog }: FeaturedBlogProps) => {
  return (
    <HorizontalStack
      spacing="4"
      leftMargin="0"
      rightMargin="0"
      topMargin="0"
      bottomMargin="0"
      alignment="top"
    >
      <Link url={`./${blog.slug}`}>
        <SquareImage
          src={blog.c_coverPhoto?.image.url}
          alt={blog.c_coverPhoto?.image.alternateText}
          size="52"
        />
      </Link>
      <VerticalStack
        spacing="1"
        topMargin="0"
        bottomMargin="0"
        leftMargin="0"
        rightMargin="0"
        alignment="left"
      >
        <Date
          date={blog.datePosted}
          textColor="#5b646b"
          textSize="xs"
          fontWeight="light"
        />
        <Link url={`./${blog.slug}`}>
          <Paragraph value={blog.name} textSize="xl" fontWeight="bold" />
          <Paragraph
            value={blog.c_description}
            textSize="sm"
            fontWeight="light"
          />
        </Link>
      </VerticalStack>
    </HorizontalStack>
  );
};

export default FeaturedBlog;
