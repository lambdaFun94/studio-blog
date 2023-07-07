export interface SquareImageProps {
  src?: string;
  alt?: string;
  size: "44" | "48" | "52" | "56" | "60" | "64" | "72" | "80" | "96";
}

export const initialProps: SquareImageProps = {
  src: "https://dynl.mktgcdn.com/p/CSFKvh8AjX-j6N8xztp5eNVo75d-4Hc4afbbGzBAeiE/1280x1280",
  alt: "Light green backpack with black canvas straps and front zipper pouch.",
  size: "64",
};

export default function SquareImage({ src, alt, size }: SquareImageProps) {
  const sizeVariants = {
    "44": "h-44",
    "48": "h-48",
    "52": "h-52",
    "56": "h-56",
    "60": "h-60",
    "64": "h-64",
    "72": "h-72",
    "80": "h-80",
    "96": "h-96",
  };

  return (
    <div className={`aspect-square ${sizeVariants[size]} rounded-md`}>
      <img
        src={src}
        alt={alt}
        className="h-full w-full rounded-md object-cover object-center"
      />
    </div>
  );
}
