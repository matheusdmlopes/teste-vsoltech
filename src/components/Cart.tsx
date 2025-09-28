'use client';

import { useCart } from '@/hooks/useCart';
import { CartItem } from './CartItem';
import { CartSummary } from './CartSummary';
import { X } from 'lucide-react';
import { Button } from './ui/Button';
import { useEffect } from 'react';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Cart = ({ isOpen, onClose }: CartProps) => {
  const { items } = useCart();

  // Navegação por teclado - ESC para fechar
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-40"
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        className="fixed top-0 right-0 h-full w-full max-w-sm sm:max-w-md bg-white z-50 transform transition-transform duration-300 ease-in-out"
        style={{
          boxShadow: '-20px 0 50px rgba(0, 0, 0, 0.15), -10px 0 30px rgba(0, 0, 0, 0.1)'
        }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-title"
      >
        <div className="flex items-center justify-between p-4 bg-white border-b">
          <h2 id="cart-title" className="text-lg font-semibold text-gray-900">
            Carrinho de Compras
          </h2>
          <Button
            variant="secondary"
            size="sm"
            onClick={onClose}
            className="h-8 w-8 p-0"
            aria-label="Fechar carrinho"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex flex-col h-full bg-white">
          <div className="flex-1 overflow-y-auto">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center p-8">
                <p className="text-gray-500 mb-2">Seu carrinho está vazio</p>
                <p className="text-sm text-gray-400">
                  Adicione produtos para vê-los aqui
                </p>
              </div>
            ) : (
              <div className="px-4">
                <div className="grid grid-cols-12 gap-4 py-3 border-b border-gray-200 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <div className="col-span-6">Produto</div>
                  <div className="col-span-3 text-center">Quantidade</div>
                  <div className="col-span-2 text-right">Subtotal</div>
                  <div className="col-span-1"></div>
                </div>

                <div>
                  {items.map((item) => (
                    <CartItem key={item.product.id} item={item} />
                  ))}
                </div>
              </div>
            )}
          </div>

          {items.length > 0 && (
            <div className="p-6 border-t bg-white">
              <CartSummary />
            </div>
          )}
        </div>
      </div>
    </>
  );
};