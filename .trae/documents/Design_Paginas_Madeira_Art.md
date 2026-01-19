# Design de Páginas — Madeira Art (desktop-first)

## Diretrizes globais
### Layout
- Estrutura base: container central (max-width ~1200px) + grid/cols para seções (CSS Grid) e alinhamentos internos (Flexbox).
- Espaçamento: escala 4/8/12/16/24/32/48.
- Responsivo: desktop como padrão; em <= 768px, colunas viram pilha e a navegação vira menu compacto.

### Meta (padrão)
- Title base: “Madeira Art — Artesanato em Madeira”.
- Description base: “Colheres, tábuas e peças personalizadas em madeira, feitas à mão.”
- Open Graph: og:title/og:description/og:image (foto hero), og:type=website.

### Estilo visual (inspirado em Nail & Knot)
- Paleta: fundo off-white (#F7F3EE), texto carvão (#1F1F1F), acento madeira (#B07A3A), apoio verde-sálvia (#6F7D6A).
- Tipografia: serif para títulos (ex.: “Playfair Display”) + sans para texto (ex.: “Inter”).
- Botões: primário com fundo acento e texto claro; hover escurece ~8%; foco com outline visível.
- Links: sublinhado suave no hover; cor texto + acento no hover.
- Cards: cantos levemente arredondados, sombra sutil, borda 1px em tom areia.

### Componentes globais
- Header fixo (opcional) com logo, menu e CTA “Fazer orçamento”.
- Footer com navegação secundária, redes sociais e informações legais.

---

## Página: Home (/)
### Meta
- Title: “Madeira Art — Colheres, Tábuas e Personalizados”.
- Description: “Artesanato em madeira com acabamento premium e personalização sob medida.”

### Estrutura da página
1. **Header**
   - Esquerda: logotipo (wordmark + ícone minimalista).
   - Centro/direita: links (Home, Catálogo, Contato).
   - Destaque: botão primário “Fazer orçamento” → /contato.

2. **Hero (2 colunas)**
   - Coluna esquerda: H1 forte + parágrafo curto + 2 CTAs.
     - Primário: “Ver catálogo” → /produtos
     - Secundário (outline): “Personalizar uma peça” → /contato
   - Coluna direita: imagem grande (close em textura da madeira) com borda/sombra leve.

3. **Categorias em destaque (3 cards)**
   - Cards clicáveis: Colheres, Tábuas, Personalizados.
   - Cada card: foto, título, microtexto, seta/hover.

4. **Destaques do catálogo (grid 3–4 colunas)**
   - Seção com título + subtítulo curto.
   - Grade de cards de produto: imagem, nome, categoria, “a partir de …” ou “sob consulta”.
   - CTA secundário: “Ver todos os produtos” → /produtos.

5. **Bloco “Feito à mão” (split)**
   - Texto: processo, madeira, acabamento, cuidado.
   - Lista curta (3–5 bullets): tipos de madeira, acabamento, gravação, medidas.

6. **CTA final**
   - Card largo com fundo em tom suave: “Conte sua ideia e eu preparo um orçamento”.
   - Botão primário → /contato.

7. **Footer**
   - Colunas: navegação, contato, redes.

### Interações/estados
- Hover em cards: elevação leve + transição 150–200ms.
- CTA primário: feedback claro de hover/foco.

---

## Página: Catálogo / Produtos (/produtos)
### Meta
- Title: “Catálogo — Madeira Art”.
- Description: “Explore colheres, tábuas e itens personalizados em madeira.”

### Estrutura da página
1. **Header (reutiliza global)**

2. **Título + controles**
   - Linha superior: H1 “Catálogo”.
   - Linha de controles (flex):
     - Busca (input com ícone)
     - Filtro por categoria (select)
     - Ordenação (select)

3. **Grade de produtos**
   - Grid responsivo (desktop: 4 colunas; tablet: 2–3; mobile: 1–2).
   - Card:
     - Imagem 4:3
     - Nome
     - Categoria
     - Preço: “A partir de R$ …” ou “Sob consulta”
     - Tag: “Disponível”/“Sob encomenda” (se aplicável)
   - Clique abre **detalhe rápido** (drawer lateral no desktop; modal full no mobile).

4. **Detalhe rápido (drawer/modal)**
   - Galeria (1 grande + miniaturas)
   - Nome + categoria
   - Descrição e especificações: madeira, acabamento, dimensões
   - CTA: “Pedir orçamento” → /contato (com produto pré-selecionado)

5. **Footer (reutiliza global)**

### Interações/estados
- Loading skeleton na grade durante busca/filtro.
- Estado vazio: mensagem “Nenhum produto encontrado” + botão “Limpar filtros”.

---

## Página: Contato (/contato)
### Meta
- Title: “Contato e Orçamento — Madeira Art”.
- Description: “Fale comigo para encomendas e peças personalizadas.”

### Estrutura da página
1. **Header (reutiliza global)**

2. **Layout 2 colunas (desktop)**
   - Coluna esquerda: texto de orientação
     - Como pedir orçamento (3 passos)
     - Horários e prazo de resposta
     - Botão/Link WhatsApp (destaque)
   - Coluna direita: **Formulário**
     - Campos: Nome*, E-mail, Telefone/WhatsApp, Canal preferido, Produto (se veio do catálogo), Mensagem*
     - Checkbox: “Concordo em ser contatado(a) por este canal”.
     - Botão primário: “Enviar mensagem”

3. **Confirmação**
   - Após envio: estado sucesso (texto e próximos passos) / erro (tentar novamente).

4. **Footer (reutiliza global)**

### Interações/estados
- Validação inline (campos obrigatórios e formatos básicos).
- Botão com estado “Enviando…” e desabilitado durante requisição.