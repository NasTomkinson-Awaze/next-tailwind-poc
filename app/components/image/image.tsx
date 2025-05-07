interface ImageProps {
  src: string;
  alt: string;
  className?: string;
}

export const Image = ({ src, alt, className }: ImageProps) => {
  return (
    <picture className={`image ${className}`}>
      <source srcSet={src} type="image/webp" />
      <source srcSet={src} type="image/jpeg" />
      <img src={src} alt="Description of the property" />
    </picture>
  );
};
