import { useCart } from '@/hooks/useCart';
import { Button } from '@/components/ui/Button';

export const CartSummary = () => {
  const { items, totalItems, totalPrice, clearCart } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  if (items.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-sm border p-6 text-center">
        <p className="text-gray-500 mb-4">Seu carrinho está vazio</p>
        <p className="text-sm text-gray-400">
          Adicione produtos para vê-los aqui
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Subtotal</span>
          <span className="font-medium">{formatPrice(totalPrice)}</span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Tax</span>
          <span className="font-medium">R$ 0,00</span>
        </div>

        <hr className="border-gray-200" />

        <div className="flex justify-between text-base font-semibold">
          <span>Total</span>
          <span className="text-blue-600">{formatPrice(totalPrice)}</span>
        </div>
      </div>

      <div className="space-y-2">
        <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-medium">
          Finalizar Compra →
        </Button>

        <Button
          variant="secondary"
          className="w-full"
          onClick={clearCart}
        >
          Limpar Carrinho
        </Button>
      </div>
    </div>
  );
};