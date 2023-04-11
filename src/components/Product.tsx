import Image from "next/image";
import { useEffect, useState } from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import Currency from "react-currency-formatter";

const MAX_RATING = 5;
const MIN_RATING = 4;

function Product({ id, title, price, description, category, image }: Product) {
  const [rating, setRating] = useState(1);

  const [hasSale, setHasSale] = useState(true);

  useEffect(() => {
    setRating(
      Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    );
    setHasSale(Math.random() < 0.5);
  }, []);

  return (
    <div>
      <p>{category}</p>
      <Image
        src={image}
        height={200}
        width={200}
        alt={title}
        style={{ objectFit: "contain" }}
      />
      <h4>{title}</h4>
      <div className="flex">
        {Array(rating)
          .fill(null)
          .map((_, i) => (
            <StarIcon className="h-5 text-amber-600" />
          ))}
      </div>
      <p>{description}</p>
      <div>
        <Currency quantity={price} currency="COP" />
      </div>
      {hasSale && (
        <div>
          <img src="sale.png" alt="sale" />
          <p>FREE Next-day Delivery</p>
        </div>
      )}
      <button>Add to Basket</button>
    </div>
  );
}
export default Product;
