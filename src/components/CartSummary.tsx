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
    <div className="bg-white rounded-lg shadow-sm border p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Resumo do Pedido
      </h3>

      <div className="space-y-3 mb-4">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Itens no carrinho:</span>
          <span className="font-medium">
            {totalItems} {totalItems === 1 ? 'item' : 'itens'}
          </span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Subtotal:</span>
          <span className="font-medium">{formatPrice(totalPrice)}</span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Frete:</span>
          <span className="font-medium text-green-600">Grátis</span>
        </div>

        <hr className="my-3" />

        <div className="flex justify-between text-lg font-semibold">
          <span>Total:</span>
          <span className="text-blue-600">{formatPrice(totalPrice)}</span>
        </div>
      </div>

      <div className="space-y-2">
        <Button className="w-full" size="lg">
          Finalizar Compra
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