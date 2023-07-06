import { Link } from "@yext/pages/components";

// interface MainProps {
//   children?: React.ReactNode;
// }

const Header = () => {
  return (
    <div className="border-bottom w-full border p-4">
      <Link href={"./index.html"}>
        <h1 className="text-3xl font-bold">NYC Blog</h1>
      </Link>
    </div>
  );
};

export default Header;
