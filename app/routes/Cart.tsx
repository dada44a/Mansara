import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import type { Product } from "~/data/products";

interface CartItem extends Product {
  quantity: number;
}

export default function Cart() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("mansara_cart");
      console.log("Loaded cart from localStorage:", savedCart);
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }
      
    } catch (error) {
      console.error("Invalid cart data in localStorage");
    }
    setIsLoaded(true);
  }, []);

  // ✅ Save cart to localStorage
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("mansara_cart", JSON.stringify(cart));
    }
  }, [cart, isLoaded]);

  // ✅ Remove item
  const removeFromCart = (productId: number) => {
    setCart((prevCart) =>
      prevCart.filter((item:any) => item.id !== productId)
    );
  };

  // ✅ Update quantity
  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity < 1) return;

    setCart((prevCart) =>
      prevCart.map((item:any) =>
        item.id === productId
          ? { ...item, quantity }
          : item
      )
    );
  };

  // ✅ Calculate subtotal
  const subtotal = cart.reduce(
    (acc, item:any) => acc + item.price * item.quantity,
    0
  );

  if (!isLoaded) return null;

  // ✅ Empty Cart UI
  if (cart.length === 0) {
    return (
      <div className="bg-white text-black min-h-screen flex items-center justify-center p-10">\
     
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none mb-10">
            Archive <br /> Empty.
          </h1>
          <p className="text-sm uppercase tracking-widest opacity-50 mb-12">
            Your library is waiting for new stories.
          </p>
          <Link
            to="/products"
            className="inline-block px-12 py-5 bg-black text-white text-xs uppercase tracking-widest font-bold hover:bg-gray-800 transition shadow-xl"
          >
            Explore Collection
          </Link>
        </div>
      </div>
    );
  }

  // ✅ Main Cart UI
  return (
    <div className="bg-white text-black min-h-screen">
      <section className="max-w-7xl mx-auto px-6 sm:px-10 py-12 md:py-20">
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-12 md:mb-20">
          Your <br /> Selection.
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-12">
            {cart.map((item:any) => (
              <div
                key={item.id}
                className="group flex flex-col sm:flex-row gap-8 sm:gap-10 pb-12 border-b border-black/5 items-start"
              >
                <div className="w-full sm:w-40 aspect-[3/4] sm:h-56 flex-shrink-0 bg-gray-50 border border-black/10 overflow-hidden">
                  <img
                    src={item?.products?.image}
                    alt={item?.products?.title}
                    className="w-full h-full object-cover transition duration-500"
                  />
                </div>

                <div className="flex-grow flex flex-col w-full">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-bold tracking-tight">
                      {item.title}
                    </h3>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-[10px] uppercase tracking-widest opacity-40 hover:opacity-100 hover:text-red-600 transition"
                    >
                      [ Remove ]
                    </button>
                  </div>

                  {/* ✅ replaced author with category */}
                  <p className="text-xs uppercase tracking-widest opacity-40 mb-8">
                    {item.category}
                  </p>

                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex items-center border border-black/10">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="px-4 py-2 hover:bg-black/5 transition text-lg"
                      >
                        &minus;
                      </button>

                      <span className="px-6 py-2 border-x border-black/10 font-bold text-sm">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="px-4 py-2 hover:bg-black/5 transition text-lg"
                      >
                        +
                      </button>
                    </div>

                    <span className="text-lg font-bold">
                      Rs. {(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary Section */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 border border-black p-8 sm:p-10 space-y-10">
              <h2 className="text-2xl font-bold tracking-tight uppercase">
                Summary
              </h2>

              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="opacity-50 uppercase tracking-widest">
                    Subtotal
                  </span>
                  <span className="font-bold">
                    Rs. {subtotal.toFixed(2)}
                  </span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="opacity-50 uppercase tracking-widest">
                    Shipping
                  </span>
                  <span className="font-bold uppercase tracking-widest">
                    Free
                  </span>
                </div>

                <div className="h-px bg-black/10 my-6"></div>

                <div className="flex justify-between items-baseline">
                  <span className="text-lg font-bold uppercase tracking-widest">
                    Total
                  </span>
                  <span className="text-3xl font-bold">
                    Rs. {subtotal.toFixed(2)}
                  </span>
                </div>
              </div>

              <Link
                to="/checkout"
                className="block w-full text-center py-5 bg-black text-white text-xs uppercase tracking-[0.2em] font-bold hover:bg-gray-800 transition shadow-xl"
              >
                Proceed to Checkout
              </Link>

              <p className="text-[10px] text-center opacity-40 uppercase tracking-widest">
                Secure transaction guaranteed.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}