import CheckoutProduct from "@/components/CheckoutProduct";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Currency from "react-currency-formatter";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import { selectItems, selectTotal } from "../slices/basketSlices";

const stripePromise = loadStripe(process.env.stripe_public_key!);

function Checkout() {
  const items: Product[] = useSelector(selectItems);
  const total: number = useSelector(selectTotal);
  const { data: session } = useSession();
  const createCheckoutSession = async () => {
    const stripe = await stripePromise;

    // TODO call the backend to create a checkout session...
    const checkoutSession = await axios.post("/api/create-checkout-session", {
      items: items,
      email: session!.user!.email,
    });

    //TODO redirect user/customer to Stripe checkout
    const result = await stripe!.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });

    if (result.error) {
      alert(result.error.message);
    }
  };

  return (
    <div className="bg-gray-500">
      <Header />
      <main className="lg:flex max-w-screen-xl mx-auto">
        <div className="flex-grow my-3 shadow-sm">
          <Image
            src="/cuerobanner.png"
            width={1020}
            height={250}
            alt="cuerobanner"
            className="md:col-span-full flex-grow shadow-sm"
          />

          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-2xl border-b pb-4">
              {items.length === 0
                ? "Your shopping basket is empty."
                : "Your shopping basket."}
            </h1>
            {items.map((item, i) => (
              <CheckoutProduct
                key={i}
                id={item.id}
                title={item.title}
                price={item.price}
                description={item.description}
                category={item.category}
                image={item.image}
                rating={item.rating}
                hasSale={item.hasSale}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col mt-3 bg-white p-10 shadow-md md:mx-1 md:my-3">
          {items.length > 0 && (
            <>
              <h2 className="whitespace-nowrap">
                Subtotal ({items.length} items):{" "}
                <span className="font-bold">
                  <Currency quantity={total} currency="COP" />
                </span>
              </h2>
              <button
                role="link"
                onClick={createCheckoutSession}
                disabled={!session}
                className={`button mt-2 ${
                  !session &&
                  "from-gray-400 to-gray-600 border-gray-200 text-gray-300 cursor-not-allowed active:from-gray-400 active:to-gray-700"
                }`}
              >
                {!session ? "Sign in to checkout" : "Proceed to checkout"}
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
export default Checkout;
