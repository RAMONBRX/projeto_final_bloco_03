# 💊 Farmácia - Gerenciador de Produtos

Uma aplicação web moderna para gerenciamento de produtos e categorias de farmácia, desenvolvida com React, TypeScript e Tailwind CSS.

## 🎯 Sobre o Projeto

Sistema completo de CRUD para gestão de produtos farmacêuticos, permitindo criar, visualizar, atualizar e deletar produtos organizados por categorias. A aplicação oferece uma interface intuitiva e responsiva para facilitar operações de inventário.

## 🚀 Tecnologias

- **React 19** - Biblioteca para construção de interfaces
- **TypeScript** - Tipagem estática e desenvolvimento seguro
- **Vite** - Bundler rápido e moderno
- **Tailwind CSS** - Estilização utilitária
- **React Router** - Navegação entre páginas
- **Axios** - Requisições HTTP
- **React Spinners** - Indicadores de carregamento
- **Phosphor Icons** - Ícones escaláveis

## 📋 Funcionalidades

✅ Cadastro e edição de produtos  
✅ Gerenciamento de categorias  
✅ Listagem com busca de produtos  
✅ Deleção de produtos e categorias  
✅ Interface responsiva (mobile e desktop)  
✅ Loading states durante requisições  
✅ Validação de formulários  

## 🛠️ Como Executar

### Pré-requisitos
- Node.js (v16+)
- npm ou yarn

### Instalação

```bash
npm install
```

### Desenvolvimento

```bash
npm run dev
```

### Build para Produção

```bash
npm run build
```

### Preview da Build

```bash
npm run preview
```

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── categorias/     # CRUD de categorias
│   ├── produtos/       # CRUD de produtos
│   ├── navbar/         # Barra de navegação
│   └── footer/         # Rodapé
├── model/              # Interfaces/tipos
├── pages/              # Páginas da aplicação
└── services/           # Requisições à API
```

## 🔗 Integração com API

A aplicação consome uma API REST para gerenciar produtos e categorias. Configure a URL base da API no arquivo de serviços.

## 🌐 Deploy

A aplicação está hospedada e disponível em:

🔗 **[https://farmacia-do-ramon.vercel.app](https://farmacia-do-ramon.vercel.app)**

Deploy realizado no Vercel com integração contínua (CI/CD).

## 📝 Licença

Este projeto foi desenvolvido como projeto final do Bootcamp Generation.
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
