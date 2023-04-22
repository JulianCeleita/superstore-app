import { addToBasket, removeFromBasket } from "@/slices/basketSlices";
import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";

function CheckoutProduct({
  id,
  title,
  price,
  rating,
  description,
  category,
  image,
  hasSale,
}: Product) {
  const dispatch = useDispatch();
  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      rating,
      description,
      category,
      image,
      hasSale,
    }; 
    dispatch(addToBasket(product));
  };
  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ id }));
  };

  return (
    <div className="grid grid-cols-5">
      <Image
        src={image}
        width={200}
        height={200}
        alt={title}
        className="object-contain object-center h-48 w-full"
      />
      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <div className="flex my-2">
          {Array(rating)
            .fill(null)
            .map((_, i) => (
              <StarIcon className="h-5 text-amber-600" />
            ))}
        </div>
        <p className="text-xs my-2 line-clamp-3">{description}</p>
        <Currency quantity={price} currency="COP" />
        {hasSale && (
          <div className="flex items-center space-x-2">
            <img src="sale.png" alt="sale" className="w-10 mb-1" />
            <p className="text-xs text-gray-500">20% OFF buying now!</p>
          </div>
        )}
      </div>
      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <button className="button" onClick={addItemToBasket}>
          Add one more
        </button>
        <button className="button" onClick={removeItemFromBasket}>
          Remove from basket
        </button>
      </div>
    </div>
  );
}
export default CheckoutProduct;
