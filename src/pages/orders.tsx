import OrderItem from "@/components/OrderItem";
import moment from "moment";
import { GetServerSidePropsContext } from "next";
import { getSession, useSession } from "next-auth/react";
import db from "../../firebase";
import Header from "../components/Header";

function Orders({ orders }: OrdersProps) {
  const { data: session } = useSession();
  console.log(orders);

  return (
    <div className="bg-white h-screen">
      <Header />
      <main className="max-w-screen-lg mx-auto p-10">
        <h1 className="text-2xl border-b mb-2 pb-1 border-amber-500">
          Your orders
        </h1>
        {session ? (
          <h2>{orders.length} Orders</h2>
        ) : (
          <h2>Please sign in to see your orders</h2>
        )}
        <div className="mt-5 space-y-4">
          {orders?.map(({ id, amount, items, timestamp, images }) => (
            <OrderItem
              key={id}
              id={id}
              amount={amount}
              items={items}
              timestamp={timestamp}
              images={images}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
export default Orders;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
  const session = await getSession(context);

  if (!session) {
    return {
      props: {},
    };
  }

  // TODO Firebase db
  const stripeOrders = await db
    .collection("users")
    .doc(session.user?.email as any)
    .collection("orders")
    .orderBy("timestamp", "desc")
    .get();

  const orders = await Promise.all(
    stripeOrders.docs.map(async (order) => ({
      id: order.id,
      amount: order.data().amount,
      images: order.data().images,
      timestamp: moment(order.data().timestamp.toDate()).unix(),
      items: (
        await stripe.checkout.sessions.listLineItems(order.id, {
          limit: 100,
        })
      ).data,
    }))
  );
  return {
    props: {
      orders,
    },
  };
}
