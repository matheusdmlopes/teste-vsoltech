'use client';

import { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import { Button } from './ui/Button';
import { Cart } from './Cart';
import { useCart } from '@/hooks/useCart';

export const CartButton = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { totalItems } = useCart();

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  return (
    <>
      <Button
        variant="secondary"
        onClick={openCart}
        className="relative"
      >
        <ShoppingCart className="h-5 w-5" />
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {totalItems}
          </span>
        )}
        <span className="ml-2 hidden sm:inline">
          Carrinho ({totalItems})
        </span>
      </Button>

      <Cart isOpen={isCartOpen} onClose={closeCart} />
    </>
  );
};