import Link from "next/link";

export default function Header() {
return(

    <header className="bg-orange-400 text-white p-4 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold text-black hover:text-gray-800"><Link href={'/'}>E-Commerce Store</Link></h1>
      <div className="space-x-4">
        {/* Using Link component for navigation */}
        <Link href="/cart">
          <button className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-md">
            {/* <FontAwesomeIcon icon={faShoppingCart} className="mr-2" /> */}
            Cart
          </button>
        </Link>

        <Link href="/wishlist">
          <button className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-md">
            {/* <FontAwesomeIcon icon={faHeart} className="mr-2" /> */}
            Wishlist
          </button>
        </Link>
      </div>
    </header>

)
   
}