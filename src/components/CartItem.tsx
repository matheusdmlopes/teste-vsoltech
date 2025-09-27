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
    <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm border">
      <div className="relative h-16 w-16 bg-gray-100 rounded-md overflow-hidden flex-shrink-0">
        <Image
          src={item.product.image}
          alt={item.product.name}
          fill
          className="object-cover"
          sizes="64px"
        />
      </div>

      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-medium text-gray-900 truncate">
          {item.product.name}
        </h4>
        <p className="text-sm text-gray-600">
          {formatPrice(item.product.price)}
        </p>
      </div>

      <div className="flex items-center gap-2">
        <Button
          variant="secondary"
          size="sm"
          onClick={handleDecrease}
          className="h-8 w-8 p-0"
        >
          <Minus className="h-4 w-4" />
        </Button>
        
        <span className="w-8 text-center text-sm font-medium">
          {item.quantity}
        </span>
        
        <Button
          variant="secondary"
          size="sm"
          onClick={handleIncrease}
          className="h-8 w-8 p-0"
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>

      <div className="text-right">
        <p className="text-sm font-semibold text-gray-900">
          {formatPrice(subtotal)}
        </p>
      </div>

      <Button
        variant="danger"
        size="sm"
        onClick={handleRemove}
        className="h-8 w-8 p-0"
      >
        <X className="h-4 w-4" />
      </Button>
    </div>
  );
};