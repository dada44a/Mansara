import { Link } from "react-router";

type BookCardProps = {
  id: string;
  title: string;
  author: string;
  price: string;
  image: string;
};

export default function Card({ id, title, author, price, image }: BookCardProps) {
  return (
    <div className="group relative flex flex-col bg-white border border-black/5 p-4 transition duration-500 hover:border-black/20 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]">

      {/* Book Image - Clickable */}
      <Link to={`/products/${id}`} className="block overflow-hidden mb-6 aspect-[3/4]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
        />
      </Link>

      {/* Book Info */}
      <div className="flex flex-col flex-grow space-y-2">
        <Link to={`/products/${id}`} className="hover:opacity-60 transition">
          <h3 className="text-xl font-bold tracking-tight leading-none">
            {title}
          </h3>
        </Link>

        <p className="text-[10px] uppercase tracking-[0.2em] opacity-40">
          {author}
        </p>

        <div className="flex items-center justify-between pt-4 mt-auto">
          <span className="text-sm font-semibold">{price}</span>

          <button
            className="text-[10px] uppercase tracking-widest border border-black px-4 py-2 hover:bg-black hover:text-white transition duration-300 font-bold"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}