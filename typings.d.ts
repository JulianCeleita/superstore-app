interface ServerSideProps {
  products: Product[];
}

interface ProductProps {
  products: Product[];
}

interface BasketState {
  items: any[];
}

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  hasSale?: boolean;
  rating: {
    rate: number;
    count: number;
  } | null ;
}

interface CheckoutItem {
  description: string;
  quantity: number;
  price_data: {
    currency: string;
    unit_amount: number;
    product_data: {
      name: string;
      images: string[];
    };
  };
}
