# 🛍️ Charmosinha - Catálogo de Roupas

Uma loja virtual moderna e responsiva desenvolvida em Next.js para venda de roupas femininas com integração direta ao WhatsApp para finalização de pedidos.

## 📋 Descrição

O projeto Charmosinha é uma aplicação web de página única (SPA) que apresenta um catálogo de produtos de moda feminina. A loja permite aos usuários navegar pelos produtos, adicionar itens ao carrinho de compras e finalizar pedidos através do WhatsApp de forma automatizada.

## 🎯 Objetivos

- **Simplicidade**: Interface limpa e intuitiva em uma única página
- **Responsividade**: Layout otimizado para dispositivos móveis e desktop
- **Conversão**: Integração direta com WhatsApp para facilitar vendas
- **Performance**: Carregamento rápido e experiência fluida

## 🔧 Backend Utilizado

O projeto utiliza **MakeAPI** como backend feito em nestJS, uma plataforma que permite criar APIs REST de forma rápida e eficiente através de endpoints configuráveis.

### 📡 Rotas Consumidas

#### 1. **Endpoint de Produtos**
```
GET https://api-charmosinha.netlify.app/api/endpoint/Az2YrSZjvVgj3USlfCJO
```

**Função**: Busca todos os produtos disponíveis na loja
**Estrutura de Resposta**:
```json
{
  "id": "Az2YrSZjvVgj3USlfCJO",
  "title": "produtos",
  "campos": [
    {
      "title": "titulo",
      "mult": false,
      "tipo": "string"
    },
    {
      "title": "preco",
      "mult": false,
      "tipo": "number"
    },
    {
      "title": "imagem",
      "tipo": "image",
      "mult": false
    }
  ],
  "items": [
    {
      "id": "produto_id",
      "data": {
        "titulo": "Nome do Produto",
        "preco": 99.99,
        "imagem": "data:image/jpeg;base64,..."
      }
    }
  ]
}
```

**Utilização**: Os dados são consumidos pelo componente `ProductGrid` para exibir o catálogo de produtos na página principal.

#### 2. **Endpoint de Informações da Loja**
```
GET https://api-charmosinha.netlify.app/api/endpoint/NygKm957MaH6e8y5qLyL
```

**Função**: Busca informações gerais da loja (sempre o primeiro item do array)
**Estrutura de Resposta**:
```json
{
  "id": "NygKm957MaH6e8y5qLyL",
  "title": "informacao",
  "campos": [
    {
      "title": "whatsapp",
      "tipo": "string"
    },
    {
      "title": "telefone",
      "tipo": "string"
    },
    {
      "title": "sobre",
      "tipo": "string"
    }
  ],
  "items": [
    {
      "data": {
        "whatsapp": "91984837847",
        "telefone": "91984837847",
        "sobre": "Descrição da loja..."
      }
    }
  ]
}
```

**Utilização**: 
- **WhatsApp/Telefone**: Usado para configurar o link de contato
- **Sobre**: Exibido no Hero e Footer da página
- **Primeiro Item**: Sempre utiliza `items[0]` para garantir consistência

## 📱 Integração WhatsApp

### Como Funciona o Hyperlink

O sistema de WhatsApp funciona através da API oficial do WhatsApp Web:

```
https://wa.me/[NUMERO]?text=[MENSAGEM_CODIFICADA]
```

### Processo de Finalização

1. **Coleta de Dados**: O carrinho coleta todos os produtos adicionados
2. **Formatação da Mensagem**: Cria uma mensagem estruturada com:
   - Saudação personalizada
   - Lista detalhada dos produtos (nome, preço, quantidade)
   - Valor total do pedido
   - Informações sobre pagamento e entrega
3. **Codificação URL**: A mensagem é codificada usando `encodeURIComponent()`
4. **Redirecionamento**: O usuário é direcionado para o WhatsApp com a mensagem pré-preenchida

### Exemplo de Mensagem Gerada

```
🛍️ *NOVO PEDIDO - CHARMOSINHA*

Olá! Gostaria de fazer o seguinte pedido:

📦 *ITENS DO PEDIDO:*
• Kit 5 Camisa - R$ 180,00 (Qtd: 1)
• Camisa - R$ 55,00 (Qtd: 2)

💰 *VALOR TOTAL: R$ 290,00*

📋 *PRÓXIMOS PASSOS:*
• Confirme seu endereço de entrega
• Escolha a forma de pagamento (PIX, cartão, dinheiro)
• Aguarde a confirmação do pedido

Obrigada por escolher a Charmosinha! 💖
```

## 🚀 Tecnologias Utilizadas

- **Next.js 14** - Framework React
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **Lucide React** - Ícones
- **Context API** - Gerenciamento de estado do carrinho

## 📱 Funcionalidades

- ✅ Catálogo de produtos responsivo (2 colunas no mobile)
- ✅ Carrinho de compras com persistência
- ✅ Cálculo automático de totais
- ✅ Integração direta com WhatsApp
- ✅ Design moderno com efeitos visuais
- ✅ Carregamento dinâmico de informações da loja
- ✅ Interface de página única (SPA)

## 🎨 Design

O projeto segue princípios de design moderno com:
- **Paleta de cores**: Gradientes suaves e cores neutras
- **Tipografia**: Fontes legíveis e hierarquia clara
- **Layout**: Grid responsivo e espaçamento consistente
- **UX**: Fluxo simplificado para conversão rápida

## 📞 Contato

WhatsApp: (91) 98483-7847
