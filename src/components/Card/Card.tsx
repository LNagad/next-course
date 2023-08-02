import { FC } from "react";
import Image from "next/image";
import "./styles.css";

interface CardData {
  created: string;
  name: string;
  type?: string;
  image?: string;
}

interface CardProps {
  data: CardData;
}

const Card: FC<CardProps> = ({ data }) => {
  const cardSize = 400;
  return (
    <article className="w-full md:w-2/5 lg:w-3/12 p-6 bg-gray-900 border border-gray-200 rounded-lg shadow hover:bg-gray-800">
      <div className="mb-3">
        {data.image && (
          <Image
            className="rounded-t-lg"
            src={data.image}
            alt={`${data.name} Image`}
            width={cardSize}
            height={cardSize}
          />
        )}
      </div>

      <h5 className="character-name leading-tight mb-2  tracking-tight text-gray-900 dark:text-white break-all">
        {data.name}
      </h5>
      <p className="font-semibold text-sm text-gray-700 dark:text-gray-400">
        Type: {data.type || "No type"}
      </p>
      <p className="font-semibold text-sm text-gray-700 dark:text-gray-400">
        Created: {data.created}
      </p>
    </article>
  );
};

export default Card;
