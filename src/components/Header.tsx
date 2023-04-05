import Image from "next/image";
import {
  ShoppingCartIcon,
  MagnifyingGlassIcon,
  Bars4Icon,
} from "@heroicons/react/24/outline";

function Header() {
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
          <Bars4Icon className="h-12 p-4" />
        </div>

        <div className="text-white flex justify-between items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div className="link">
            <p>Hola, Julián Celeita!</p>
            <p className="font-extrabold md:text-sm">Cuenta y Listas</p>
          </div>
          <div className="link">
            <p>Devoluciones</p>
            <p className="font-extrabold md:text-sm">y Ordenes</p>
          </div>
          <div className="relative flex link items-center">
            <span className="absolute top-0 right-0 md:right-11 h-4 w-4 bg-yellow-400 text-center rounded-full font-bold text-black">0</span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline font-extrabold md:text-sm">Carrito</p>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
