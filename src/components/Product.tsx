import Image from "next/image";
import { useEffect, useState } from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket } from "@/slices/basketSlices";

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

  const dispatch = useDispatch();
  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      rating,
      hasSale,
      description,
      category,
      image,
    };
    dispatch(addToBasket(product));
  };

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {category}
      </p>
      <Image
        src={image}
        height={200}
        width={200}
        alt={title}
        className="object-contain object-center h-48 w-full"
      />
      <h4 className="my-3">{title}</h4>
      <div className="flex">
        {Array(rating)
          .fill(null)
          .map((_, i) => (
            <StarIcon className="h-5 text-amber-600" />
          ))}
      </div>
      <p className="text-xs my-2 line-clamp-2">{description}</p>
      <div className="mb-2">
        <Currency quantity={price} currency="COP" />
      </div>
      {hasSale && (
        <div className="flex items-center space-x-2">
          <img src="sale.png" alt="sale" className="w-10 mb-1" />
          <p className="text-xs text-gray-500">20% OFF buying now!</p>
        </div>
      )}
      <button onClick={addItemToBasket} className="button mt-auto">Add to Basket</button>
    </div>
  );
}
export default Product;
