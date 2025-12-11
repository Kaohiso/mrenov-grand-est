import Image from "next/image";

interface ImageTextBlockProps {
  id: number;
  img: string;
  title?: string;
  subtitle: string;
  description: { text: string }[];
  rightImage?: boolean;
}

export default function ImageTextBlock({
  id,
  img,
  title,
  subtitle,
  description,
  rightImage,
}: ImageTextBlockProps) {
  return (
    <div
      className={`
        flex flex-col md:flex-row items-center gap-8
        ${rightImage ? "md:flex-row-reverse" : "md:flex-row"}
      `}
    >
      {/* TEXTE d'abord — toujours en premier, même en mobile */}
      <div className="w-full md:w-1/2">
        <div className="mb-4">
          {title && <p className="text-darkblue font-bold text-xl">{title}</p>}
          <p className="text-softbrown font-bold text-lg">{subtitle}</p>
        </div>
        <div className="flex flex-col gap-4">
          {description.map((item, index) => (
            <p key={index}>{item.text}</p>
          ))}
        </div>
      </div>

      {/* IMAGE — toujours après le texte en mobile */}
      <div className="relative w-full md:w-1/2 h-72">
        <Image
          src={img}
          alt={id.toString()}
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}
