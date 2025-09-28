# E-commerce Carrinho de Compras

> Aplicação simulada de e-commerce desenvolvida com Next.js, TypeScript e Tailwind CSS, focada na jornada do usuário: visualização de produtos, adição ao carrinho e gerenciamento completo do carrinho de compras.

## Sobre o Projeto

Este projeto é uma implementação completa de um sistema de carrinho de compras para e-commerce, desenvolvido como teste prático. A aplicação simula uma loja online com produtos tecnológicos, permitindo aos usuários navegar pelos produtos, adicionar itens ao carrinho, gerenciar quantidades e visualizar o total da compra em tempo real.

### Funcionalidades

- **Listagem de Produtos**: Visualização em grid responsivo de 6 produtos tecnológicos
- **Carrinho de Compras**: Sistema completo com drawer lateral
- **Gerenciamento de Itens**: Adicionar, remover e alterar quantidades
- **Cálculos Automáticos**: Subtotais por item e total geral em tempo real
- **Persistência Local**: Carrinho mantido entre sessões via localStorage
- **Interface Responsiva**: Design mobile-first com Tailwind CSS
- **Feedback Visual**: Animações e transições suaves para melhor UX

## Tecnologias Utilizadas

- **[Next.js 15.5.4](https://nextjs.org)** - Framework React com App Router
- **[TypeScript](https://www.typescriptlang.org)** - Tipagem estática para JavaScript
- **[Tailwind CSS v4](https://tailwindcss.com)** - Framework CSS utility-first
- **[React Context API](https://react.dev/reference/react/createContext)** - Gerenciamento de estado global
- **[Lucide React](https://lucide.dev)** - Ícones SVG otimizados
- **[ESLint](https://eslint.org)** - Linting e qualidade de código

## Como Executar

### Pré-requisitos

- Node.js 18+ instalado
- npm, yarn, pnpm ou bun

### Passos de Instalação

1. **Clone o repositório**
   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd teste-vsoltech
   ```

2. **Instale as dependências**
   ```bash
   npm install
   # ou
   yarn install
   # ou
   pnpm install
   ```

3. **Execute o servidor de desenvolvimento**
   ```bash
   npm run dev
   # ou
   yarn dev
   # ou
   pnpm dev
   ```

4. **Acesse a aplicação**

   Abra [http://localhost:3000](http://localhost:3000) no seu navegador

### Scripts Disponíveis

```bash
npm run dev      # Inicia servidor de desenvolvimento com Turbopack
npm run build    # Cria build de produção
npm run start    # Inicia servidor de produção
npm run lint     # Executa ESLint para verificação de código
```

## Arquitetura do Projeto

```
src/
├── app/                    # App Router do Next.js
│   ├── layout.tsx         # Layout principal com CartProvider
│   ├── page.tsx           # Página de listagem de produtos (PLP)
│   └── globals.css        # Estilos globais
├── components/            # Componentes React reutilizáveis
│   ├── ui/               # Componentes base (Button)
│   ├── Cart.tsx          # Componente principal do carrinho (drawer)
│   ├── CartButton.tsx    # Botão de ativação do carrinho
│   ├── CartItem.tsx      # Item individual do carrinho
│   ├── CartSummary.tsx   # Resumo e totais do carrinho
│   └── ProductCard.tsx   # Card de produto na listagem
├── contexts/             # Contextos React
│   └── CartContext.tsx   # Gerenciamento de estado do carrinho
├── hooks/                # Hooks customizados
│   └── useCart.ts        # Hook para operações do carrinho
├── types/                # Definições TypeScript
│   └── index.ts          # Interfaces principais
├── data/                 # Dados mockados
│   └── products.json     # Lista de produtos (6 itens)
└── lib/                  # Utilitários
    └── utils.ts          # Funções auxiliares (cn para classes)
```

## Decisões Arquiteturais

### **Gerenciamento de Estado: React Context API**

**Por que escolhemos Context API em vez de Zustand ou Redux?**

- **Simplicidade**: Para um carrinho de compras, Context API oferece toda funcionalidade necessária sem overhead
- **Nativo do React**: Sem dependências externas adicionais
- **Performance adequada**: Para este escopo, não há problemas de re-renderização
- **Facilidade de manutenção**: Código mais direto e fácil de entender

### **Persistência: localStorage**

- **Experiência do usuário**: Carrinho mantido entre sessões do navegador
- **Implementação simples**: useEffect para sincronização automática
- **Fallback seguro**: Try/catch para lidar com erros de serialização

### **Estrutura de Componentes: Modular**

- **ProductCard**: Reutilizável, responsivo, com animações hover
- **CartItem**: Controles de quantidade, remoção, cálculo de subtotal
- **CartSummary**: Cálculos totais, ações principais (finalizar/limpar)
- **Cart**: Container que orquestra CartItem + CartSummary

### **Tipagem TypeScript: Forte**

```typescript
interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description?: string;
}

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}
```

### **Dados Mockados: JSON Estático**

- **6 produtos tecnológicos** com dados realistas
- **Imagens do Unsplash** configuradas no next.config.ts
- **Preços em reais** com formatação brasileira (Intl.NumberFormat)

### **Estilização: Tailwind CSS v4**

- **Utility-first**: Classes compostas para estilos customizados
- **Responsividade**: Mobile-first com breakpoints sm:, lg:, xl:
- **Design system**: Cores consistentes (blue-600, gray-900, etc.)
- **Performance**: CSS otimizado automaticamente

## Design e UX

### **Responsividade**
- **Mobile**: 1 coluna, botões full-width, drawer ocupa tela inteira
- **Tablet**: 2 colunas, elementos híbridos
- **Desktop**: 3-4 colunas, layout otimizado para mouse

### **Feedback Visual**
- **Animações sutis**: Hover scale nos produtos, bounce no carrinho
- **Estados claros**: Loading, vazio, preenchido
- **Transições suaves**: 300ms duration para todas as interações

### **Acessibilidade**
- **ARIA labels**: Botões com descrições adequadas
- **Navegação teclado**: ESC fecha carrinho
- **Contraste**: Cores seguem padrões de legibilidade
- **Semântica**: HTML estruturado corretamente

## Métricas de Qualidade

- **TypeScript**: 100% tipado, zero `any`
- **ESLint**: Zero warnings/errors
- **Performance**: Build otimizado com Turbopack
- **Bundle size**: Otimizado com tree-shaking automático
- **Acessibilidade**: Compatível com screen readers

## Desenvolvimento

Este projeto foi desenvolvido com o auxílio do **Claude Code CLI**, uma ferramenta de IA da Anthropic que acelera o desenvolvimento através de assistência inteligente em código, arquitetura e documentação.

---

**Desenvolvido usando Next.js, TypeScript e Tailwind CSS**