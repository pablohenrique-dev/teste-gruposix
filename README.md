# Teste Desenvolvedor Jr Grupo Six

Este projeto foi desenvolvido como parte de um teste técnico para a vaga de **Desenvolvedor Jr** na **Grupo Six**.  
O foco é a criação de uma **VSL (Video Sales Letter)** com **Next.js 15** e **TailwindCSS**.

---

## 🚀 Tecnologias utilizadas

### **Next.js 15**

- Utilizado como **framework fullstack** para React.
- Benefícios para uma **VSL**:
  - **Performance**: renderização híbrida (Server Components e Client Components) garante carregamento rápido, essencial para reduzir a taxa de abandono da página.
  - **SEO otimizado**: permite inserir metadados e parâmetros UTM para rastreamento de campanhas, aumentando a eficácia do marketing.
  - **Escalabilidade**: estrutura organizada para crescimento futuro (ex: checkout, área de membros).
  - **Roteamento dinâmico**: facilita criar páginas de checkout personalizadas (`/produto/checkout/[slug]`) e páginas de agradecimento (`/obrigado/[slug]`).

### **Tailwind CSS**

- Framework CSS utilitário para **estilização rápida e consistente**.
- Benefícios:
  - **Produtividade**: escrever estilos direto no JSX reduz tempo de desenvolvimento.
  - **Design responsivo** já embutido com breakpoints intuitivos.
  - **Consistência visual**: mantém um padrão de cores, espaçamentos e tipografia em toda a aplicação.
  - **Customização fácil**: tema e variáveis centralizados, sem perder flexibilidade.

---

## 📄 Estrutura de Páginas

### `/`

- Página principal (Home).
- Contém:
  - **Embed de vídeo do YouTube** (VSL).
  - Seção de produtos listados a partir de constantes.
  - Botões de CTA que redirecionam para o checkout preservando parâmetros **UTM**.
  - Seções de depoimentos e disclaimers.

### `/produto/checkout/[slug]?utm_params`

- Página de checkout de um produto específico.
- Suporta parâmetros **UTM** para rastreamento de origem da campanha.
  - Exemplo:
    ```
    /produto/checkout/produto-x?utm_source=facebook&utm_medium=cpc&utm_campaign=vsl_nutraceuticos&utm_content=video1
    ```

### `/obrigado/[slug]`

- Página de agradecimento exibida após a compra.
- Mostra o **produto que o lead adquiriu**, reforçando a conversão e confiança do usuário.
- Permite rastrear a conversão final da campanha, mantendo parâmetros UTM.

---

## 📹 Funcionalidade principal (VSL)

- O **vídeo do YouTube** é exibido diretamente na **Home**, aumentando engajamento e facilitando a conversão.
- Todo o fluxo da página é pensado para **conduzir o usuário do vídeo → oferta → checkout → obrigado**, garantindo uma experiência completa de vendas.

---

## ⚡ Estratégias de Otimização

Para garantir **performance e tempo de carregamento rápido**, foram aplicadas algumas boas práticas:

1. **Lazy Loading de imagens**
   - Todas as imagens usam o atributo `loading="lazy"` para carregar apenas quando entram na viewport.
   - Reduz o tempo inicial de carregamento da página e economiza banda.

2. **Formato WebP**
   - Sempre que possível, as imagens estão no formato **WebP**, que oferece **compressão superior sem perda significativa de qualidade** em comparação a PNG ou JPEG.

3. **Next.js Image Component**
   - Utilizado para todas as imagens (`<Image />`), garantindo:
     - Otimização automática do tamanho da imagem.
     - Carregamento responsivo para diferentes resoluções de tela.
     - Suporte a placeholders e lazy loading nativo.

4. **Roteamento dinâmico e Server Components**
   - Páginas renderizadas parcialmente no servidor para reduzir o JavaScript enviado ao cliente.
   - Melhora o **First Contentful Paint (FCP)**, essencial para retenção do usuário.

5. **Preservação de parâmetros UTM**
   - Fluxo de links que mantém os parâmetros de marketing, permitindo análise precisa de conversões sem impactar a experiência do usuário.

---

## Métricas do lighthouse

#### Mobile

![Alt text](https://github-production-user-asset-6210df.s3.amazonaws.com/118746037/485142611-f6ee4e19-9458-488a-8018-3d0fcc4dffbb.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20250903%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250903T134607Z&X-Amz-Expires=300&X-Amz-Signature=e3b245f9293e41e35ae45e8462fd8c62b6cdf66d84bde98d93687e22def4716e&X-Amz-SignedHeaders=host)

#### Desktop

![Alt text](https://github-production-user-asset-6210df.s3.amazonaws.com/118746037/485146497-12868f9b-486e-4507-b4ae-c990aa4b3d73.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20250903%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250903T135132Z&X-Amz-Expires=300&X-Amz-Signature=297c160ec5f8da9571e5139a01e2efee15ae30d4852366dbf8b17fd4742a94c9&X-Amz-SignedHeaders=host)

---

## ⚙️ Como rodar o projeto

### ✅ Pré-requisitos

- **Node.js** versão **>= 18**
- **npm**, **yarn** ou **pnpm** (gerenciador de pacotes)

---

1. Clone o repositório:

   ```bash
   git clone https://github.com/pablohenrique-dev/teste-gruposix.git
   cd teste-gruposix
   ```

2. Instale as dependências

   ```bash
   npm install
   # ou
   yarn install
   # ou
   pnpm install
   ```

3. Rode o servidor de desenvolvimento

   ```bash
   npm run dev
   # ou
   yarn dev
   # ou
   pnpm dev
   ```

O projeto ficará disponível em:

[http://localhost:3000](http://localhost:3000])
