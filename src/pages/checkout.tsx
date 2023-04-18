import Header from '../components/Header';
import Image from 'next/image';
function Checkout() {
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
                <h1 className='text-2xl border-b pb-4'>Your shopping basket</h1>
              </div>
            </div>
            <div className='bg-red-600'>2</div>
        </main>
    </div>
  )
}
export default Checkout