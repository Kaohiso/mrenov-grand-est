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
        flex items-center gap-8
        ${rightImage ? "flex-row" : "flex-row-reverse"}
      `}
    >
      <div className="relative w-1/2 h-72">
        <Image
          src={img}
          alt={id.toString()}
          fill
          className="object-cover rounded-xl"
        />
      </div>

      <div className="w-1/2">
        <div className="mb-4">
          {title && <p className="text-darkblue font-bold text-xl">{title}</p>}
          <p className="text-softbrown font-bold text-lg">{subtitle}</p>
        </div>
        <div className="flex flex-col gap-4">
          {description.map((item, index) => {
            return <p key={index}>{item.text}</p>;
          })}
        </div>
      </div>
    </div>
  );
}
