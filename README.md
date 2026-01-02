# 💊 Farmácia Vital Care

Landing page moderna e responsiva para farmácia, desenvolvida com React, TypeScript, Tailwind CSS e shadcn/ui.

![React](https://img.shields.io/badge/React-18.3-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=flat-square&logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=flat-square&logo=vite)

## 📋 Sobre o Projeto

Landing page institucional para farmácia com foco em conversão via WhatsApp. O projeto foi desenvolvido pensando na experiência do usuário, com design moderno, responsivo e otimizado para dispositivos móveis.

### ✨ Funcionalidades

- **Header fixo** com navegação suave e menu mobile
- **Hero Section** com imagem de fundo e call-to-action para WhatsApp
- **Badges de Confiança** - Compra segura, farmácia autorizada e garantia de satisfação
- **Diferenciais** - Atendimento especializado, entrega rápida, preços acessíveis
- **Produtos e Serviços** - Medicamentos, genéricos, higiene, vitaminas e serviços farmacêuticos
- **Promoções** - Destaques de ofertas especiais
- **Depoimentos** - Avaliações de clientes satisfeitos
- **CTA (Call-to-Action)** - Seção final com botão do WhatsApp
- **Footer** completo com informações de contato e links

## 🚀 Tecnologias

- **[React 18](https://react.dev/)** - Biblioteca JavaScript para interfaces
- **[TypeScript](https://www.typescriptlang.org/)** - Superset JavaScript com tipagem estática
- **[Vite](https://vitejs.dev/)** - Build tool ultra-rápido
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utility-first
- **[shadcn/ui](https://ui.shadcn.com/)** - Componentes acessíveis e customizáveis
- **[Lucide React](https://lucide.dev/)** - Ícones modernos
- **[React Router](https://reactrouter.com/)** - Roteamento SPA

## 📁 Estrutura do Projeto

```
src/
├── assets/              # Imagens e arquivos estáticos
├── components/          # Componentes React
│   ├── ui/              # Componentes shadcn/ui
│   ├── Header.tsx       # Cabeçalho com navegação
│   ├── Hero.tsx         # Seção principal
│   ├── TrustBadges.tsx  # Badges de confiança
│   ├── Features.tsx     # Diferenciais
│   ├── Services.tsx     # Produtos e serviços
│   ├── Promotions.tsx   # Promoções
│   ├── Testimonials.tsx # Depoimentos
│   ├── CTA.tsx          # Call-to-action
│   └── Footer.tsx       # Rodapé
├── hooks/               # Hooks customizados
├── lib/                 # Utilitários
├── pages/               # Páginas da aplicação
│   ├── Index.tsx        # Página principal
│   └── NotFound.tsx     # Página 404
├── App.tsx              # Componente raiz
├── main.tsx             # Entry point
└── index.css            # Estilos globais
```

## 🛠️ Instalação

### Pré-requisitos

- Node.js 18+ 
- npm, yarn, pnpm ou bun

### Passos

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/farm-cia-vital-care.git
cd farm-cia-vital-care
```

2. **Instale as dependências**
```bash
npm install
# ou
yarn install
# ou
pnpm install
# ou
bun install
```

3. **Inicie o servidor de desenvolvimento**
```bash
npm run dev
```

4. **Acesse no navegador**
```
http://localhost:5173
```

## 📦 Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera build de produção |
| `npm run build:dev` | Gera build de desenvolvimento |
| `npm run preview` | Visualiza o build de produção |
| `npm run lint` | Executa o ESLint |

## ⚙️ Configuração

### WhatsApp

Para configurar o número do WhatsApp, edite os seguintes arquivos:

- `src/components/Header.tsx`
- `src/components/Hero.tsx`
- `src/components/CTA.tsx`

Procure por `whatsappNumber` e substitua pelo seu número:

```typescript
const whatsappNumber = "5511999999999"; // Seu número aqui
```

### Cores e Tema

As cores podem ser customizadas em `src/index.css` através das variáveis CSS:

```css
:root {
  --primary: 158 70% 40%;
  --secondary: 200 60% 50%;
  /* ... outras variáveis */
}
```

## 🎨 Design

O projeto utiliza um design moderno com:

- **Paleta de cores** verde (saúde/farmácia) com acentos em azul
- **Tipografia** clara e legível
- **Espaçamento** consistente
- **Animações** sutis para melhorar a UX
- **Layout responsivo** mobile-first

## 📱 Responsividade

O site é totalmente responsivo com breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Desenvolvido com 💚 para Farmácia Vital Care
