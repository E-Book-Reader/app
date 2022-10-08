interface ImageProps {
  src: string;
  alt: string;
  size: "full" | number;
}

const Image = ({ src, alt, size }: ImageProps) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`${size === "full" ? "w-full" : ""} bg-orange-400 rounded`}
    />
  );
};

export default Image;
