# Guia de Implantação e Configuração - AgroVision

Este projeto foi preparado para ser facilmente hospedado no Netlify e configurado via GitHub.

## 🚀 Como Hospedar no Netlify (Gratuito)

1. **Crie um repositório no GitHub**
   - Crie uma conta no [GitHub](https://github.com) se não tiver.
   - Crie um novo repositório (pode ser privado).
   - Faça o upload dos arquivos deste projeto para o repositório.

2. **Conecte ao Netlify**
   - Crie uma conta no [Netlify](https://www.netlify.com).
   - Clique em "Add new site" > "Import an existing project".
   - Escolha "GitHub" e selecione o repositório que você criou.

3. **Configuração de Build (Automática)**
   - O Netlify deve detectar automaticamente as configurações graças ao arquivo `netlify.toml`.
   - Se precisar confirmar:
     - **Build command:** `npm run build`
     - **Publish directory:** `dist/public`

4. **Deploy**
   - Clique em "Deploy site". Em alguns minutos seu site estará online!

## ⚙️ Como Configurar o Site

Todas as configurações importantes (links, textos, preços, imagens) estão centralizadas em um único arquivo para facilitar a edição.

### Arquivo de Configuração: `client/src/config.ts`

Para alterar qualquer informação, edite este arquivo.

**Exemplo de como alterar o link de download:**
```typescript
links: {
  // Altere o link entre as aspas
  download: "https://seu-novo-link-aqui.com/app.apk",
},
```

**Exemplo de como alterar o WhatsApp:**
```typescript
app: {
  // ...
  contactPhone: "(11) 99999-9999", // Formato visual
  contactPhoneClean: "5511999999999" // Apenas números (DDI + DDD + Número)
},
```

**Exemplo de como alterar preços:**
```typescript
pricing: {
  monthly: {
    price: "15,90", // Novo preço
    // ...
  },
  // ...
}
```

### Imagens

As imagens estão na pasta `client/public/images`. Para trocar uma imagem:
1. Coloque a nova imagem na pasta.
2. Atualize o nome do arquivo em `client/src/config.ts` na seção `images`.

## 📦 Estrutura do Projeto

- `client/src/config.ts`: **Arquivo principal de configuração.**
- `client/src/pages`: Páginas do site (Home, Download).
- `client/src/components`: Componentes reutilizáveis (Layout, Botões).
- `netlify.toml`: Configuração de deploy para o Netlify.
