import { C_featuredBlogs } from "../types/autogen";
import HorizontalStack from "./HorizontalStack";
import Link from "./Link";
import Paragraph from "./Paragraph";
import SquareImage from "./SquareImage";
import VerticalStack from "./VerticalStack";
import Date from "./Date";

interface FeaturedBlogProps {
  item: C_featuredBlogs;
}

const FeaturedBlog = ({ item }: FeaturedBlogProps) => {
  console.log(item);
  return (
    <HorizontalStack
      spacing="4"
      leftMargin="0"
      rightMargin="0"
      topMargin="0"
      bottomMargin="0"
      alignment="top"
      verticalOnMobile="true"
    >
      <Link url={`./${item.slug}`}>
        <SquareImage
          src={item.c_coverPhoto?.image.url}
          alt={item.c_coverPhoto?.image.alternateText}
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
          date={item.datePosted}
          textColor="#5b646b"
          textSize="xs"
          fontWeight="light"
        />
        <Link url={`./${item.slug}`}>
          <Paragraph value={item.name} textSize="xl" fontWeight="bold" />
          <Paragraph
            value={item.c_description}
            textSize="sm"
            fontWeight="light"
          />
        </Link>
      </VerticalStack>
    </HorizontalStack>
  );
};

export default FeaturedBlog;
