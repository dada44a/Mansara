import { Link } from "react-router";

export default function Header() {
  return (
    <div className=" h-20 shadow-md  z-50 flex justify-between items-center px-4" >
      <div className="font-semibold text-lg">
        Mansara Books
      </div>
      <div className="flex gap-5">
        <Link to="/">Home</Link><Link to="/contact">Contact</Link><Link to="/products">Products</Link>
      </div>
    </div>
  )
}
