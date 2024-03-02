import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto  p-7  items-center">
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-evenly">
          <Link href="/product"className="mr-5 hover:text-white">Product</Link>
          <Link href="/contact"className="mr-5 hover:text-white">Contact</Link>
          <Link href="/cart"className="mr-5 hover:text-white">Cart</Link>
        </nav>
      </div>
    </header>
  );
}
