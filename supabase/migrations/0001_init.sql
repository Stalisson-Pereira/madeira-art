create extension if not exists "pgcrypto";

create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  category text not null check (category in ('colheres','tabuas','personalizados')),
  short_description text,
  description text,
  price_from numeric(10,2),
  price_on_request boolean default false,
  wood_type text,
  finish text,
  dimensions text,
  available boolean default true,
  slug text unique not null,
  created_at timestamptz default now()
);

create index if not exists idx_products_category on public.products(category);
create index if not exists idx_products_created_at on public.products(created_at desc);
create index if not exists idx_products_slug on public.products(slug);

create table if not exists public.product_images (
  id uuid primary key default gen_random_uuid(),
  product_id uuid not null,
  storage_path text not null,
  sort_order int default 0,
  created_at timestamptz default now()
);

create index if not exists idx_product_images_product_id on public.product_images(product_id);

create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text,
  phone text,
  preferred_channel text check (preferred_channel in ('whatsapp','email','telefone')),
  product_slug text,
  message text not null,
  status text default 'new' check (status in ('new','in_progress','done')),
  created_at timestamptz default now()
);

create index if not exists idx_contact_messages_created_at on public.contact_messages(created_at desc);

alter table public.products enable row level security;
alter table public.product_images enable row level security;
alter table public.contact_messages enable row level security;

drop policy if exists public_read_products on public.products;
create policy public_read_products on public.products
for select to anon, authenticated
using (true);

drop policy if exists public_read_product_images on public.product_images;
create policy public_read_product_images on public.product_images
for select to anon, authenticated
using (true);

drop policy if exists public_insert_contact_messages on public.contact_messages;
create policy public_insert_contact_messages on public.contact_messages
for insert to anon, authenticated
with check (name is not null and message is not null);

grant usage on schema public to anon, authenticated;

grant select on public.products to anon;
grant all privileges on public.products to authenticated;

grant select on public.product_images to anon;
grant all privileges on public.product_images to authenticated;

grant insert on public.contact_messages to anon;
grant all privileges on public.contact_messages to authenticated;

insert into public.products (slug, name, category, short_description, description, price_from, price_on_request, wood_type, finish, dimensions, available)
values
  (
    'colher-de-pau-pequena-25cm',
    'Colher de Pau — Pequena (25 cm)',
    'colheres',
    'Ideal para mexer cafés, molhos e porções pequenas.',
    'Colher de pau feita à mão, com bordas suaves e cabo ergonômico. Acabamento pensado para contato com alimentos.',
    18,
    false,
    'Madeira de reflorestamento',
    'Lixamento fino + óleo mineral (food-safe)',
    '25 cm (aprox.)',
    true
  ),
  (
    'colher-de-pau-media-30cm',
    'Colher de Pau — Média (30 cm)',
    'colheres',
    'Versátil, perfeita para panelas do dia a dia.',
    'Equilíbrio ideal entre alcance e controle. Design clássico com toque contemporâneo.',
    24,
    false,
    'Tauari',
    'Óleo vegetal (food-safe)',
    '30 cm (aprox.)',
    true
  ),
  (
    'colher-de-pau-grande-35cm',
    'Colher de Pau — Grande (35 cm)',
    'colheres',
    'Para panelas maiores e receitas de família.',
    'Cabo mais longo para segurança e conforto em preparos volumosos.',
    29,
    false,
    'Freijó',
    'Óleo mineral (food-safe)',
    '35 cm (aprox.)',
    true
  ),
  (
    'tabua-para-carne-retangular-35x25',
    'Tábua para Carne — Retangular (35×25)',
    'tabuas',
    'Superfície ampla, ideal para cortes e preparo.',
    'Tábua sólida com excelente estabilidade e acabamento pensado para facilitar a limpeza.',
    89,
    false,
    'Eucalipto tratado',
    'Óleo mineral + cera (food-safe)',
    '35×25 cm (aprox.)',
    true
  ),
  (
    'tabua-para-churrasco-com-pegador',
    'Tábua para Churrasco — Com Pegador',
    'tabuas',
    'Prática para servir e levar à mesa.',
    'Com pegador integrado e bordas arredondadas, combina com o clima do churrasco.',
    109,
    false,
    'Cumaru',
    'Óleo vegetal (food-safe)',
    '45×20 cm (aprox.)',
    true
  ),
  (
    'peca-personalizada-sob-medida',
    'Peça Personalizada — Sob Medida',
    'personalizados',
    'Gravação, medidas e desenho conforme sua ideia.',
    'Faça sua encomenda personalizada: colheres, tábuas, plaquinhas, suportes e outros itens.',
    null,
    true,
    'A definir',
    'A definir',
    'Sob medida',
    true
  )
on conflict (slug) do nothing;

insert into public.product_images (product_id, storage_path, sort_order)
select p.id, img.storage_path, img.sort_order
from public.products p
join (
  values
    ('colher-de-pau-pequena-25cm', 'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=handcrafted%20small%20wooden%20spoon%2C%2025cm%2C%20high-end%20product%20photography%2C%20warm%20natural%20light%2C%20shallow%20depth%20of%20field%2C%20artisan%20workshop%20vibe%2C%20clean%20neutral%20background%2C%20subtle%20wood%20grain%20texture%2C%20premium%20handmade%20craftsmanship%2C%2035mm%20lens%2C%20ultra%20detailed&image_size=landscape_4_3', 0),
    ('colher-de-pau-media-30cm', 'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=handcrafted%20medium%20wooden%20spoon%20on%20linen%20cloth%2C%20high-end%20product%20photography%2C%20warm%20natural%20light%2C%20shallow%20depth%20of%20field%2C%20artisan%20workshop%20vibe%2C%20clean%20neutral%20background%2C%20subtle%20wood%20grain%20texture%2C%20premium%20handmade%20craftsmanship%2C%2035mm%20lens%2C%20ultra%20detailed&image_size=landscape_4_3', 0),
    ('colher-de-pau-grande-35cm', 'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=large%20handcrafted%20wooden%20spoon%20on%20wood%20table%2C%20high-end%20product%20photography%2C%20warm%20natural%20light%2C%20shallow%20depth%20of%20field%2C%20artisan%20workshop%20vibe%2C%20clean%20neutral%20background%2C%20subtle%20wood%20grain%20texture%2C%20premium%20handmade%20craftsmanship%2C%2035mm%20lens%2C%20ultra%20detailed&image_size=landscape_4_3', 0),
    ('tabua-para-carne-retangular-35x25', 'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=rectangular%20wooden%20cutting%20board%2C%20top%20view%2C%20high-end%20product%20photography%2C%20warm%20natural%20light%2C%20shallow%20depth%20of%20field%2C%20artisan%20workshop%20vibe%2C%20clean%20neutral%20background%2C%20subtle%20wood%20grain%20texture%2C%20premium%20handmade%20craftsmanship%2C%2035mm%20lens%2C%20ultra%20detailed&image_size=landscape_4_3', 0),
    ('tabua-para-churrasco-com-pegador', 'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=wooden%20bbq%20serving%20board%20with%20handle%2C%20high-end%20product%20photography%2C%20warm%20natural%20light%2C%20shallow%20depth%20of%20field%2C%20artisan%20workshop%20vibe%2C%20clean%20neutral%20background%2C%20subtle%20wood%20grain%20texture%2C%20premium%20handmade%20craftsmanship%2C%2035mm%20lens%2C%20ultra%20detailed&image_size=landscape_4_3', 0),
    ('peca-personalizada-sob-medida', 'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=custom%20wooden%20craft%20items%20assortment%2C%20engraved%2C%20high-end%20product%20photography%2C%20warm%20natural%20light%2C%20shallow%20depth%20of%20field%2C%20artisan%20workshop%20vibe%2C%20clean%20neutral%20background%2C%20subtle%20wood%20grain%20texture%2C%20premium%20handmade%20craftsmanship%2C%2035mm%20lens%2C%20ultra%20detailed&image_size=landscape_4_3', 0)
) as img(slug, storage_path, sort_order) on img.slug = p.slug
on conflict do nothing;

