'use client';

import { useState, useEffect } from 'react';
import { ShoppingCart } from 'lucide-react';
import { Button } from './ui/Button';
import { Cart } from './Cart';
import { useCart } from '@/hooks/useCart';

export const CartButton = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const { totalItems } = useCart();

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  // Animação quando itens são adicionados
  useEffect(() => {
    if (totalItems > 0) {
      setIsAnimating(true);
      const timer = setTimeout(() => setIsAnimating(false), 300);
      return () => clearTimeout(timer);
    }
  }, [totalItems]);

  return (
    <>
      <Button
        variant="secondary"
        onClick={openCart}
        className={`relative transition-transform duration-300 ${isAnimating ? 'scale-110' : 'scale-100'}`}
        aria-label={`Abrir carrinho com ${totalItems} ${totalItems === 1 ? 'item' : 'itens'}`}
      >
        <ShoppingCart className="h-5 w-5" />
        {totalItems > 0 && (
          <span className={`absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center transition-all duration-300 ${isAnimating ? 'scale-125' : 'scale-100'}`}>
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