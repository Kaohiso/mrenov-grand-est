import Image from "next/image";

export default function EyeCatching() {
  return (
    <div className="relative h-72">
      <Image
        src="/images/content/eye-catching.jpg"
        alt="eye-catching"
        fill
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/50"></div>

      <div
        className="absolute top-1/2 left-1/2 transform 
  -translate-x-1/2 -translate-y-1/2 text-center font-bold text-4xl text-white"
      >
        <h1 className="space-y-2">
          <span className="block">Transformation des espaces</span>
          <span className="block">Constructions de rêves</span>
        </h1>
      </div>
    </div>
  );
}
