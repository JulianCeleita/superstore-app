import { useSelector } from 'react-redux';
import Header from '../components/Header';
import Image from 'next/image';
import { selectItems } from '../slices/basketSlices';
import CheckoutProduct from '@/components/CheckoutProduct';

function Checkout() {
  const items = useSelector(selectItems)

  return (
    <div className='bg-gray-500'>
        <Header/>
        <main className='lg:flex max-w-screen-xl mx-auto'>
            <div className='flex-grow my-3 shadow-sm'>
              <Image
                src="/cuerobanner.png"
                width={1020}
                height={250}
                alt='cuerobanner'
                className='md:col-span-full mt-2 mb-1 flex-grow shadow-sm'
              />

              <div className='flex flex-col p-5 space-y-10 bg-white'>
                <h1 className='text-2xl border-b pb-4'>
                  {items.length === 0 ? 'Your shopping basket is empty.' : 'Your shopping basket.'}
                </h1>
                {items.map((item, i)=>(
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
        </main>
    </div>
  )
}
export default Checkout