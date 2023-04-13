import {
    Bars4Icon,
    MagnifyingGlassIcon,
    ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { signIn, signOut, useSession } from 'next-auth/react'

function Header() {
const {data: session} = useSession();

  return (
    <header>
      <div className="flex items-center bg-store_blue p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            alt="logo"
            src="/logo.png"
            width={150}
            height={50}
            style={{ objectFit: "contain" }}
            className="cursor-pointer"
          />
        </div>

        <div className="hidden sm:flex items-center ml-2 h-10 rounded-md flex-grow cursor-pointer bg-amber-600 hover:bg-amber-700">
          <input
            type="text"
            className=" p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
          />
          <MagnifyingGlassIcon className="h-12 p-4" />
        </div>

        <div className="text-white flex justify-between items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div onClick={()=> !session ? signIn() : signOut()} className="link">
            <p>
              {session ? `Hello, ${session.user?.name}` : 'Sign in'}
            </p>
            <p className="font-extrabold md:text-sm">Cuenta y Listas</p>
          </div>
          <div className="link">
            <p>Devoluciones</p>
            <p className="font-extrabold md:text-sm">y Ordenes</p>
          </div>
          <div className="relative flex link items-center">
            <span className="absolute top-0 right-0 md:right-11 h-4 w-4 bg-amber-600 text-center rounded-full font-bold text-black">
              0
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline font-extrabold md:text-sm">
              Carrito
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center bg-store_blue-light space-x-3 p-2 pl-6 text-sm text-white">
        <p className="flex link items-center">
          <Bars4Icon className="h-6 mr-1" />
          All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today's Deals</p>
        <p className="link hidden md:inline-flex">Electronics</p>
        <p className="link hidden md:inline-flex">Food & Grocery</p>
        <p className="link hidden md:inline-flex">Prime</p>
        <p className="link hidden md:inline-flex">Buy Again</p>
        <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
        <p className="link hidden lg:inline-flex">Health & Personal Care</p>
      </div>
    </header>
  );
}
export default Header;
