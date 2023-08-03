import Image from "next/image";
import cardStyles from "./card.styles.module.scss";

interface CardData {
  created: string;
  name: string;
  type?: string;
  image?: string;
}

interface CardProps {
  data: CardData;
}

const Card = ({ data }: CardProps ) => {
   const cardSize = 400;
   return (
      <article className="w-full md:w-2/5 lg:w-3/12 p-6 bg-gray-900 border border-gray-200 rounded-lg shadow hover:bg-gray-800">
         <div className="mb-3">
            { data.image && (
               <Image
                  className="rounded-t-lg"
                  src={data.image}
                  alt={`${data.name} Image`}
                  width={cardSize}
                  height={cardSize}
               />
            )}
         </div>

         <h5 className={ cardStyles.cardTitle }>
            {data.name}
         </h5>
         <p className={ cardStyles.cardSecondary }>
        Type: {data.type || "No type"}
         </p>
         <p className={ cardStyles.cardSecondary }>
        Created: {data.created}
         </p>
      </article>
   );
};

export default Card;
