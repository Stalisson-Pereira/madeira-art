## 1. Product Overview
Madeira Art é um site de portfólio e catálogo para artesanato em madeira (colheres, tábuas e peças personalizadas), inspirado no estilo visual do Nail & Knot.
Ajuda você a apresentar produtos, comunicar a proposta artesanal e receber pedidos/contatos de forma simples.

## 2. Core Features

### 2.1 Feature Module
O site é composto pelas seguintes páginas principais:
1. **Home**: apresentação da marca, destaques de produtos/categorias, proposta de personalização, CTA para contato.
2. **Catálogo / Produtos**: navegação por categorias, busca e filtros, cards com informações essenciais, visualização de detalhes no mesmo contexto da página.
3. **Contato**: formulário de contato/orçamento, canais diretos (WhatsApp/e-mail), informações de atendimento.

### 2.3 Page Details
| Page Name | Module Name | Feature description |
|-----------|-------------|---------------------|
| Home | Cabeçalho e navegação | Exibir menu principal (Home, Catálogo, Contato) com destaque do CTA “Fazer orçamento”. |
| Home | Hero (apresentação) | Comunicar proposta artesanal com título, subtítulo e imagem/ilustração principal; direcionar para Catálogo e Contato. |
| Home | Categorias em destaque | Apresentar atalhos para “Colheres”, “Tábuas” e “Personalizados”. |
| Home | Produtos em destaque | Exibir seleção curta de itens (com imagem, nome e faixa de preço ou “sob consulta”, quando aplicável). |
| Home | Seção de personalização | Explicar como funcionam pedidos personalizados (medidas, gravação, madeira); levar ao Contato. |
| Home | Rodapé | Exibir links rápidos, redes sociais e direitos autorais. |
| Catálogo / Produtos | Barra de filtros | Filtrar por categoria e faixa de preço (opcional), e ordenar por “Mais recentes”/“Preço”. |
| Catálogo / Produtos | Busca | Buscar produtos por nome ou palavra-chave. |
| Catálogo / Produtos | Grade de produtos | Listar cards com foto, nome, categoria e indicação de disponibilidade; permitir abrir detalhes. |
| Catálogo / Produtos | Detalhe rápido (drawer/modal) | Mostrar galeria, descrição, medidas, acabamento e botão “Pedir orçamento” levando ao Contato (com produto pré-selecionado). |
| Contato | Formulário | Enviar mensagem com nome, e-mail/telefone, tipo de produto, mensagem e consentimento de contato. |
| Contato | Canais diretos | Exibir botão de WhatsApp, e-mail e horários de atendimento. |
| Contato | Confirmação | Informar sucesso/erro do envio e próximos passos (prazo de resposta). |

## 3. Core Process
**Fluxo do visitante**
1. Você entra na Home, entende a proposta da Madeira Art e navega pelas categorias.
2. Você abre o Catálogo, usa filtros/busca para achar um item (ex.: tábua) e abre o detalhe rápido.
3. Você clica em “Pedir orçamento” e vai para Contato com o produto sugerido.
4. Você envia o formulário (ou escolhe WhatsApp) e recebe confirmação de envio.

```mermaid
graph TD
  A["Home"] --> B["Catálogo / Produtos"]
  A -->