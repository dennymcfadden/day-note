import React from "react";
interface ProductImageProps {
  src?: string;
  className?: string;
}
export const ProductImage: React.FC<ProductImageProps> = ({
  src,
  className = ""
}) => {
  return <div className={`self-stretch min-w-60 w-[380px] my-auto max-md:max-w-full ${className}`}>
      <img alt="Daynote App Preview" className="aspect-[0.49] object-contain w-full max-h-[80vh] max-md:max-w-full" src="/lovable-uploads/a83acc3e-b9d7-4617-a33b-4fb650c12f0f.png" />
    </div>;
};