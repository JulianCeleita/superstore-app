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
  hasSale: string;
  rating: {
    rate: number;
    count: number;
  } | null ;
}
