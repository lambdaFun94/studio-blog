import { Link } from "@yext/pages/components";
import { HexColor } from "@yext/studio";

interface HeaderProps {
  logo?: string;
  company?: string;
  backgroundColor?: HexColor;
  textColor?: HexColor;
}

const Header = ({ logo, company, backgroundColor, textColor }: HeaderProps) => {
  return (
    <div
      className="w-full border-b p-4"
      style={{ backgroundColor, color: textColor }}
    >
      <Link href={"./index.html"} className="flex items-center gap-3">
        <img className="block h-14 w-auto" src={logo} alt={company} />
        <h1 className="text-2xl font-semibold">{company}</h1>
      </Link>
    </div>
  );
};

export default Header;
