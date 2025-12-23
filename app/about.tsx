import ImageTextBlock from "@/components/ImageTextBlock";
import { dataAbout } from "@/data/about";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="w-full md:w-3/5 flex flex-col gap-y-12 my-8 px-4 md:px-0">
        <h2 id="about-heading" className="sr-only">
          Nos services de rénovation
        </h2>
        {dataAbout.map((item) => (
          <ImageTextBlock
            key={item.id}
            id={item.id}
            img={item.img}
            title={item.title}
            subtitle={item.subtitle}
            description={item.description}
            rightImage={item.id % 2 === 0}
          />
        ))}
      </div>
    </div>
  );
}
