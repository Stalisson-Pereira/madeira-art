import { makeAiImageUrl } from '@/utils/image'

export type ProductCategory = 'colheres' | 'tabuas' | 'personalizados'

export type Product = {
  id: string
  name: string
  category: ProductCategory
  slug: string
  shortDescription: string
  description: string
  priceFrom?: number
  priceOnRequest: boolean
  woodType?: string
  finish?: string
  dimensions?: string
  available: boolean
  images: { url: string; alt: string }[]
  createdAt: string
}

const baseStyle =
  'high-end product photography, warm natural light, shallow depth of field, artisan workshop vibe, clean neutral background, subtle wood grain texture, premium handmade craftsmanship, 35mm lens, ultra detailed'

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Colher de Pau - N2',
    category: 'colheres',
    slug: 'colher-de-pau-pequena-25cm',
    shortDescription: 'Ideal para mexer cafés, molhos e porções pequenas.',
    description:
      'Colher de pau feita à mão, com bordas suaves e cabo ergonômico. Ótima para uso diário e também para presentear. Acabamento pensado para contato com alimentos.',
    priceFrom: 1.6,
    priceOnRequest: false,
    woodType: 'Madeira de reflorestamento',
    finish: 'Lixamento fino + óleo mineral (food-safe)',
    dimensions: '25 cm (aprox.)',
    available: true,
    images: [
      {
        url: makeAiImageUrl(`handcrafted small wooden spoon, 25cm, ${baseStyle}`, 'landscape_4_3'),
        alt: 'Colher de pau pequena artesanal',
      },
      {
        url: makeAiImageUrl(`close-up of wooden spoon handle grain detail, ${baseStyle}`, 'landscape_4_3'),
        alt: 'Detalhe do cabo da colher de pau',
      },
    ],
    createdAt: '2026-01-01T12:00:00.000Z',
  },
  {
    id: 'p2',
    name: 'Colher N3',
    category: 'colheres',
    slug: 'colher-de-pau-media-30cm',
    shortDescription: 'Versátil, perfeita para panelas do dia a dia.',
    description:
      'Equilíbrio ideal entre alcance e controle. Design clássico com toque contemporâneo, pronta para uso em preparos quentes e frios.',
    priceFrom: 1.7,
    priceOnRequest: false,
    woodType: 'Tauari',
    finish: 'Óleo vegetal (food-safe)',
    dimensions: '30 cm (aprox.)',
    available: true,
    images: [
      {
        url: makeAiImageUrl(`handcrafted medium wooden spoon on linen cloth, ${baseStyle}`, 'landscape_4_3'),
        alt: 'Colher de pau média artesanal',
      },
      {
        url: makeAiImageUrl(`wooden spoon in hand, cozy kitchen scene, ${baseStyle}`, 'landscape_4_3'),
        alt: 'Colher de pau em uso',
      },
    ],
    createdAt: '2026-01-03T12:00:00.000Z',
  },
  {
    id: 'p3',
    name: 'Colher de Pau - N1',
    category: 'colheres',
    slug: 'colher-de-pau-grande-35cm',
    shortDescription: 'Para panelas maiores e receitas de família.',
    description:
      'Cabo mais longo para segurança e conforto em preparos volumosos. Peça robusta, com acabamento suave e pegada firme.',
    priceFrom: 1.3,
    priceOnRequest: false,
    woodType: 'Freijó',
    finish: 'Óleo mineral (food-safe)',
    dimensions: '...',
    available: true,
    images: [
      {
        url: makeAiImageUrl(`large handcrafted wooden spoon on wood table, ${baseStyle}`, 'landscape_4_3'),
        alt: 'Colher de pau grande artesanal',
      },
      {
        url: makeAiImageUrl(`macro photo of spoon bowl and smooth edges, ${baseStyle}`, 'landscape_4_3'),
        alt: 'Detalhe da concha da colher',
      },
    ],
    createdAt: '2026-01-05T12:00:00.000Z',
  },
  {
    id: 'p7',
    name: 'Colher de Pau - N4',
    category: 'colheres',
    slug: 'colher-de-pau-n4',
    shortDescription: 'Modelo N4 feito à mão com acabamento suave.',
    description:
      'Colher de pau feita à mão, com bordas suaves e cabo confortável. Acabamento pensado para contato com alimentos.',
    priceFrom: 2.3,
    priceOnRequest: false,
    woodType: 'Madeira de reflorestamento',
    finish: 'Lixamento fino + óleo mineral (food-safe)',
    dimensions: '...',
    available: true,
    images: [
      {
        url: makeAiImageUrl(`handcrafted small wooden spoon, 25cm, ${baseStyle}`, 'landscape_4_3'),
        alt: 'Colher de pau artesanal',
      },
      {
        url: makeAiImageUrl(`close-up of wooden spoon handle grain detail, ${baseStyle}`, 'landscape_4_3'),
        alt: 'Detalhe do cabo da colher de pau',
      },
    ],
    createdAt: '2026-01-12T12:00:00.000Z',
  },
  {
    id: 'p8',
    name: 'Colher de Pau - N5',
    category: 'colheres',
    slug: 'colher-de-pau-n5',
    shortDescription: 'Modelo N5 feito à mão com acabamento premium.',
    description:
      'Colher de pau feita à mão, com bordas suaves e cabo confortável. Acabamento pensado para contato com alimentos.',
    priceFrom: 4.3,
    priceOnRequest: false,
    woodType: 'Madeira de reflorestamento',
    finish: 'Lixamento fino + óleo mineral (food-safe)',
    dimensions: '...',
    available: true,
    images: [
      {
        url: makeAiImageUrl(`handcrafted small wooden spoon, 25cm, ${baseStyle}`, 'landscape_4_3'),
        alt: 'Colher de pau artesanal',
      },
      {
        url: makeAiImageUrl(`close-up of wooden spoon handle grain detail, ${baseStyle}`, 'landscape_4_3'),
        alt: 'Detalhe do cabo da colher de pau',
      },
    ],
    createdAt: '2026-01-13T12:00:00.000Z',
  },
  {
    id: 'p4',
    name: 'Tábua para Carne — Retangular (35×25)',
    category: 'tabuas',
    slug: 'tabua-para-carne-retangular-35x25',
    shortDescription: 'Superfície ampla, ideal para cortes e preparo.',
    description:
      'Tábua sólida com excelente estabilidade. Ótima para carnes, legumes e pães. Acabamento pensado para proteger a madeira e facilitar a limpeza.',
    priceFrom: 89,
    priceOnRequest: false,
    woodType: 'Eucalipto tratado',
    finish: 'Óleo mineral + cera (food-safe)',
    dimensions: '35×25 cm (aprox.)',
    available: true,
    images: [
      {
        url: makeAiImageUrl(`rectangular wooden cutting board, top view, ${baseStyle}`, 'landscape_4_3'),
        alt: 'Tábua retangular para carne artesanal',
      },
      {
        url: makeAiImageUrl(`cutting board close-up with juice groove detail, ${baseStyle}`, 'landscape_4_3'),
        alt: 'Detalhe do canal de suco da tábua',
      },
    ],
    createdAt: '2026-01-06T12:00:00.000Z',
  },
  {
    id: 'p5',
    name: 'Tábua para Churrasco — Com Pegador',
    category: 'tabuas',
    slug: 'tabua-para-churrasco-com-pegador',
    shortDescription: 'Prática para servir e levar à mesa.',
    description:
      'Com pegador integrado e bordas arredondadas, combina com o clima do churrasco. Ótima para servir carnes e petiscos.',
    priceFrom: 109,
    priceOnRequest: false,
    woodType: 'Cumaru',
    finish: 'Óleo vegetal (food-safe)',
    dimensions: '45×20 cm (aprox.)',
    available: true,
    images: [
      {
        url: makeAiImageUrl(`wooden bbq serving board with handle, ${baseStyle}`, 'landscape_4_3'),
        alt: 'Tábua para churrasco com pegador',
      },
      {
        url: makeAiImageUrl(`serving board on rustic table with linen, ${baseStyle}`, 'landscape_4_3'),
        alt: 'Tábua para churrasco em mesa rústica',
      },
    ],
    createdAt: '2026-01-08T12:00:00.000Z',
  },
  {
    id: 'p6',
    name: 'Peça Personalizada — Sob Medida',
    category: 'personalizados',
    slug: 'peca-personalizada-sob-medida',
    shortDescription: 'Gravação, medidas e desenho conforme sua ideia.',
    description:
      'Faça sua encomenda personalizada: colheres, tábuas, plaquinhas, suportes e outros itens. Definimos juntos medidas, madeira, acabamento e gravação.',
    priceOnRequest: true,
    available: true,
    woodType: 'A definir',
    finish: 'A definir',
    dimensions: 'Sob medida',
    images: [
      {
        url: makeAiImageUrl(`custom wooden craft items assortment, engraved, ${baseStyle}`, 'landscape_4_3'),
        alt: 'Artesanato em madeira personalizado',
      },
      {
        url: makeAiImageUrl(`close-up of engraved wooden nameplate, ${baseStyle}`, 'landscape_4_3'),
        alt: 'Detalhe de gravação em madeira',
      },
    ],
    createdAt: '2026-01-10T12:00:00.000Z',
  },
]

