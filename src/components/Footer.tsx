import { Link } from "@yext/pages/components";
import { HexColor } from "@yext/studio";

interface FooterProps {
  backgroundColor?: HexColor;
  label1: string;
  link1: string;
  label2: string;
  link2: string;
  label3: string;
  link3: string;
  label4: string;
  link4: string;
  textColor: HexColor;
}

const Footer = ({
  label1,
  link1,
  label2,
  link2,
  label3,
  link3,
  label4,
  link4,
  backgroundColor,
  textColor,
}: FooterProps) => {
  return (
    <footer className="w-full" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <ul
        className="flex w-full items-center justify-center gap-10 py-6"
        style={{ backgroundColor, color: textColor }}
      >
        <li>
          <Link href={link1}>{label1}</Link>
        </li>
        <li>
          <Link href={link2}>{label2}</Link>
        </li>
        <li>
          <Link href={link3}>{label3}</Link>
        </li>
        <li>
          <Link href={link4}>{label4}</Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
