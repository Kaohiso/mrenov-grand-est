import ImageTextBlock from "@/components/ImageTextBlock";
import { dataAbout } from "@/data/about";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col w-3/4 gap-y-12 my-8">
        {dataAbout.map((item) => {
          return (
            <ImageTextBlock
              key={item.id}
              id={item.id}
              img={item.img}
              title={item.title}
              subtitle={item.subtitle}
              description={item.description}
              rightImage={item.id % 2 === 0}
            />
          );
        })}
      </div>
    </div>
  );
}
