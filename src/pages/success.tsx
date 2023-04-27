import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";
import Header from "../components/Header";

function Success() {
  const router = useRouter();

  return (
    <div className="bg-white h-screen">
      <Header />
      <main className="max-w-screen-lg mx-auto">
        <div className="flex flex-col p-10 bg-gray-100 border border-green-600 mt-20">
          <div className="flex items-center space-x-2 mb-5">
            <CheckCircleIcon className="text-green-500 h-10" />
            <h1 className="text-2xl">
              Thank you, your order has been confirmed!
            </h1>
          </div>
          <p>
            Thank you for shopping with us. We'll send a confirmation of item
            has shipped, if you would like to check the status of order(s)
            please press the link below.
          </p>
          <button
            onClick={() => router.push("/orders")}
            className="button mt-8"
          >
            Go to my orders
          </button>
        </div>
      </main>
    </div>
  );
}

export default Success;
