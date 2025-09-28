import Image from 'next/image';
import { CartItem as CartItemType } from '@/types';
import { Button } from '@/components/ui/Button';
import { useCart } from '@/hooks/useCart';
import { Minus, Plus, X } from 'lucide-react';

interface CartItemProps {
  item: CartItemType;
}

export const CartItem = ({ item }: CartItemProps) => {
  const { updateQuantity, removeItem } = useCart();

  const handleIncrease = () => {
    updateQuantity(item.product.id, item.quantity + 1);
  };

  const handleDecrease = () => {
    updateQuantity(item.product.id, item.quantity - 1);
  };

  const handleRemove = () => {
    removeItem(item.product.id);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  const subtotal = item.product.price * item.quantity;

  return (
    <div className="grid grid-cols-12 gap-4 items-center py-4 border-b border-gray-100 last:border-b-0">
      <div className="col-span-6 flex items-center gap-3">
        <div className="relative h-12 w-12 bg-gray-100 rounded overflow-hidden flex-shrink-0">
          <Image
            src={item.product.image}
            alt={item.product.name}
            fill
            className="object-cover"
            sizes="48px"
          />
        </div>
        <div className="min-w-0">
          <h4 className="text-sm font-medium text-gray-900 truncate">
            {item.product.name}
          </h4>
        </div>
      </div>

      <div className="col-span-3 flex items-center justify-center">
        <div className="flex items-center gap-2">
          <Button
            variant="secondary"
            size="sm"
            onClick={handleDecrease}
            className="h-7 w-7 p-0 rounded border border-gray-300"
          >
            <Minus className="h-3 w-3" />
          </Button>

          <span className="w-8 text-center text-sm font-medium">
            {item.quantity}
          </span>

          <Button
            variant="secondary"
            size="sm"
            onClick={handleIncrease}
            className="h-7 w-7 p-0 rounded border border-gray-300"
          >
            <Plus className="h-3 w-3" />
          </Button>
        </div>
      </div>

      <div className="col-span-2 text-right">
        <p className="text-sm font-semibold text-gray-900">
          {formatPrice(subtotal)}
        </p>
      </div>

      <div className="col-span-1 flex justify-center">
        <Button
          variant="secondary"
          size="sm"
          onClick={handleRemove}
          className="h-7 w-7 p-0 text-gray-400 hover:text-red-500"
        >
          <X className="h-3 w-3" />
        </Button>
      </div>
    </div>
  );
};