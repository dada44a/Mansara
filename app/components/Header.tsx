import { Link } from "react-router";

export default function Header() {
  return (
    <div className=" h-20 shadow-md  z-50 flex justify-between items-center px-4" >
      <div className="font-semibold text-lg uppercase tracking-widest">
        Mansara Books
      </div>
      <div className="flex gap-8 items-center text-sm uppercase tracking-widest">
        <Link to="/" className="hover:opacity-60 transition">Home</Link>
        <Link to="/products" className="hover:opacity-60 transition">Products</Link>
        <Link to="/contact" className="hover:opacity-60 transition">Contact</Link>
        <Link to="/cart" className="relative hover:opacity-60 transition font-bold">
          Cart (3)
        </Link>
      </div>
    </div>
  )
}
