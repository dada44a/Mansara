type BookCardProps = {
  title: string;
  author: string;
  price: string;
  image: string;
};

export default function Card({ title, author, price, image }: BookCardProps) {
  return (
    <div className="group w-64 bg-white border border-black/10 p-4 transition hover:shadow-xl hover:-translate-y-1 duration-300">
      
      {/* Book Image */}
      <div className="overflow-hidden mb-4">
        <img
          src={image}
          alt={title}
          className="w-full h-80 object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* Book Info */}
      <div className="space-y-1">
        <h3 className="text-lg font-semibold tracking-tight leading-snug">
          {title}
        </h3>

        <p className="text-xs uppercase tracking-widest opacity-60">
          {author}
        </p>

        <div className="flex items-center justify-between pt-3">
          <span className="text-sm font-medium">{price}</span>

          <button className="text-xs uppercase tracking-widest border border-black px-3 py-1 hover:bg-black hover:text-white transition">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}