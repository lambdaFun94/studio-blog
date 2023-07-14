import HorizontalStack from "./HorizontalStack";
import Link from "./Link";
import Paragraph from "./Paragraph";
import SquareImage from "./SquareImage";
import VerticalStack from "./VerticalStack";
import Date from "./Date";
import MobileOnlyContainer from "./MobileOnlyContainer";

interface FeaturedBlogProps {
  name?: string;
  slug?: string;
  src?: string;
  alt?: string;
  c_description?: string;
  datePosted?: string;
}

const FeaturedBlog = ({
  name,
  slug,
  src,
  alt,
  c_description,
  datePosted,
}: FeaturedBlogProps) => {
  return (
    <HorizontalStack
      spacing="2"
      leftMargin="0"
      rightMargin="0"
      topMargin="0"
      bottomMargin="0"
      alignment="top"
      verticalOnMobile="false"
    >
      <Link url={`./${slug}`}>
        <SquareImage src={src} alt={alt} size="52" hiddenOnMobile={true} />
      </Link>
      <MobileOnlyContainer>
        <Link url={`./${slug}`}>
          <SquareImage src={src} alt={alt} size="20" />
        </Link>
      </MobileOnlyContainer>
      <VerticalStack
        spacing="1"
        topMargin="0"
        bottomMargin="0"
        leftMargin="0"
        rightMargin="0"
        alignment="left"
      >
        <Date
          date={datePosted}
          textColor="#5b646b"
          textSize="xs"
          fontWeight="light"
        />
        <Link url={`./${slug}`}>
          <Paragraph value={name} textSize="xl" fontWeight="bold" />
          <Paragraph
            value={c_description}
            textSize="sm"
            fontWeight="light"
            hiddenOnMobile={true}
          />
        </Link>
      </VerticalStack>
    </HorizontalStack>
  );
};

export default FeaturedBlog;
