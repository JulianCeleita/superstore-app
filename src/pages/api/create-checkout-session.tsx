import { NextApiRequest, NextApiResponse } from "next";
import { Stripe } from "stripe";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { items, email } = req.body;
  const transformedItems: Stripe.Checkout.SessionCreateParams.LineItem[] =
    items.map((item: Product) => ({
      quantity: 1,
      price_data: {
        currency: "usd",
        unit_amount_decimal: item.price * 100,
        product_data: {
          name: item.title,
          description: item.description,
          images: [item.image],
        },
      },
    }));
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    shipping_address_collection: {
      allowed_countries: ["GB", "US", "CA", "CO"],
    },
    line_items: transformedItems,
    mode: "payment",
    success_url: `${process.env.HOST}/success`,
    cancel_url: `${process.env.HOST}/checkout`,
    metadata: {
      email,
      images: JSON.stringify(items.map((item: Product) => item.image)),
    },
  });

  res.status(200).json({ id: session.id });
};
