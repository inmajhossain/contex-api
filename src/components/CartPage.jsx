import React, { useEffect } from "react";
import { useState } from "react";
import { CartState } from "../context/CartContext";
import SingleProduct from "./SingleProduct";

export default function CartPage() {
  const { cart } = CartState();

  // Calculate subtotal and total only when cart changes
  const subtotal = cart.reduce(
    (prev, current) => prev + Number(current.price),
    0
  );
  // const vat = cart.length ? 25 : 0;

  const vat = cart.length ? subtotal * 0.1 : 0;
  const total = subtotal + vat;

  useEffect(() => {
    // Handle any side effects that rely on the cart (optional)
  }, [cart]);

  return (
    <div>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="mx-auto max-w-3x1">
            <header className="text-center">
              <h1 className="text-xl font-bold text-gray-900 sm:text-3x1">
                Products In Cart ({cart.length})
              </h1>
            </header>
            <div className="mt-8 bg-slate-100 p-[20px]">
              <ul className="space-y-4 grid grid-cols-2 gap-4 ">
                {cart.map((product) => (
                  <SingleProduct key={product.id} product={product} />
                ))}
              </ul>
              <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
                <div className="w-screen max-w-lg space-y-4">
                  <dl className="space-y-0.5 text-sm text-gray-700">
                    <div className="flex justify-between">
                      <dt>Subtotal</dt>
                      <dd className="text-3xl">$ {subtotal.toFixed(2)}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt>VAT</dt>
                      <dd className="text-xl">$ {vat.toFixed(2)}</dd>
                    </div>
                    {/* <div className="flex justify-between text-base font-medium">
                      <dt>Total</dt>
                      <dd className="text-5xl">$ {total}</dd>
                    </div> */}
                    <div className="flex justify-between text-base font-medium">
                      <dt>Total</dt>
                      <dd className="text-5xl">$ {total.toFixed(2)}</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
