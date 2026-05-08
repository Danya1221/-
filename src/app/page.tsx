"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const categories = [
  "Смартфоны",
  "Ноутбуки",
  "Умные часы",
  "Наушники",
  "Планшеты",
  "Аксессуары",
  "Для дома",
  "Пылесосы",
  "Фены и стайлеры",
  "Мониторы",
  "Игровая техника",
  "ТВ и мультимедиа",
];

const popularProducts = [
  {
    name: "iPhone 17 Pro",
    price: "от 109 990 ₽",
    colors: ["#1f2937", "#d1d5db", "#0f3b66", "#f97316"],
  },
  {
    name: "MacBook Pro 14",
    price: "от 189 990 ₽",
    colors: ["#4b5563", "#e5e7eb", "#111827"],
  },
  {
    name: "AirPods Pro",
    price: "от 24 990 ₽",
    colors: ["#ffffff", "#000000"],
  },
  {
    name: "Apple Watch Ultra",
    price: "от 79 990 ₽",
    colors: ["#27272a", "#d6d3d1", "#fb923c"],
  },
];

export default function Home() {
  const [dark, setDark] = useState(true);

  return (
    <main
      className={
        dark
          ? "min-h-screen bg-[#020814] text-white transition-colors duration-700 ease-in-out"
          : "min-h-screen bg-[#f6f8fb] text-[#0b1220] transition-colors duration-700 ease-in-out"
      }
    >
      <div className="mx-auto max-w-[1440px] px-6 py-6">
        <Header dark={dark} setDark={setDark} />
        <Hero dark={dark} />
        <Benefits dark={dark} />
        <Categories dark={dark} />
        <PopularProducts dark={dark} />
        <NewArrivals dark={dark} />
        <SupportBlock dark={dark} />
        <Footer dark={dark} />
      </div>
    </main>
  );
}

function panelClass(dark: boolean) {
  return dark
    ? "border-white/10 bg-white/[0.035] shadow-[0_20px_80px_rgba(0,60,255,0.08)]"
    : "border-black/10 bg-white shadow-[0_20px_80px_rgba(15,23,42,0.08)]";
}

function mutedTextClass(dark: boolean) {
  return dark ? "text-white/55" : "text-black/55";
}

function Header({
  dark,
  setDark,
}: {
  dark: boolean;
  setDark: (value: boolean) => void;
}) {
  return (
    <header
className={`flex h-[76px] items-center justify-between rounded-2xl border px-8 transition-all duration-700 ${panelClass(
  dark
)}`}
    >
<Link
  href="/"
  className="relative flex h-20 w-[150px] items-center justify-start overflow-hidden"
>
  <Image
    src={dark ? "/logo-light.png" : "/logo-dark.png"}
    alt="Нетизен"
    width={150}
    height={48}
    priority
    className="h-auto max-h-9 w-auto object-contain transition-opacity duration-700"
  />
</Link>

<nav className="hidden items-center gap-3 text-sm font-medium lg:flex">
  {["Каталог", "Новинки", "Бренды", "Акции", "Поддержка"].map((item) => (
    <a
      key={item}
      className="group relative overflow-hidden rounded-xl px-5 py-3 transition-colors duration-300 hover:text-white"
    >
      <span className="relative z-10">{item}</span>

      <span className="absolute inset-0 translate-y-full rounded-xl bg-blue-600/90 opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100" />

      <span className="absolute inset-x-3 bottom-0 h-px bg-blue-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </a>
  ))}
</nav>
      <div className="flex items-center gap-4">
        <div
          className={`hidden h-11 w-[300px] items-center rounded-xl border px-4 text-sm transition-all duration-700 md:flex ${
            dark
              ? "border-white/10 bg-black/20 text-white/50"
              : "border-black/10 bg-white text-black/50"
          }`}
        >
          Поиск по каталогу
        </div>

        <button
          onClick={() => setDark(!dark)}
          aria-label="Переключить тему"
          className={`relative h-11 w-16 rounded-xl border transition-all duration-700 ${
            dark
              ? "border-white/10 bg-blue-600/15"
              : "border-black/10 bg-blue-50"
          }`}
        >
          <span
            className={`absolute top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg bg-blue-600 text-sm text-white transition-all duration-500 ease-in-out ${
              dark ? "left-7" : "left-1"
            }`}
          >
            {dark ? "☾" : "☀"}
          </span>
        </button>

        <button
          className={`h-11 w-11 rounded-xl border transition-all duration-700 ${
            dark ? "border-white/10 bg-white/[0.03]" : "border-black/10 bg-white"
          }`}
        >
          🛒
        </button>

        <button
          className={`rounded-xl border px-5 py-3 text-sm transition-all duration-700 ${
            dark ? "border-white/10 bg-white/[0.03]" : "border-black/10 bg-white"
          }`}
        >
          Войти
        </button>
      </div>
    </header>
  );
}

function Hero({ dark }: { dark: boolean }) {
  return (
    <section className="grid min-h-[620px] grid-cols-1 items-center gap-10 lg:grid-cols-2">
      <div>
        <div className="mb-8 inline-flex rounded-full border border-blue-500/50 px-4 py-2 text-sm text-blue-500">
          Оригинальная техника. Премиальный сервис.
        </div>

        <h1 className="max-w-[680px] text-5xl font-bold leading-tight lg:text-6xl">
          Техника премиум-класса <br />
          для тех, кто создаёт будущее.
        </h1>

        <p className={`mt-6 max-w-[480px] text-xl leading-relaxed ${mutedTextClass(dark)}`}>
          Лучшие устройства от мировых брендов. Официальная гарантия,
          быстрая доставка и поддержка 24/7.
        </p>

        <div className="mt-9 flex gap-5">
          <button className="rounded-xl bg-blue-600 px-8 py-4 font-medium text-white transition-transform duration-300 hover:-translate-y-0.5">
            Перейти в каталог →
          </button>

          <button
            className={`rounded-xl border px-8 py-4 font-medium transition-all duration-700 hover:-translate-y-0.5 ${
              dark ? "border-white/10 bg-white/[0.03]" : "border-black/10 bg-white"
            }`}
          >
            Новинки →
          </button>
        </div>
      </div>

      <div
        className={`flex h-[430px] items-center justify-center rounded-[32px] border transition-all duration-700 ${panelClass(
          dark
        )}`}
      >
        <div className={dark ? "text-white/35" : "text-black/35"}>
          Здесь позже будет медведь + техника
        </div>
      </div>
    </section>
  );
}

function Benefits({ dark }: { dark: boolean }) {
  const items = [
    "Только оригинал",
    "Гарантия и сервис",
    "Быстрая доставка",
    "Безопасная оплата",
    "Поддержка 24/7",
  ];

  return (
    <section
      className={`grid grid-cols-1 gap-4 rounded-2xl border p-6 transition-all duration-700 md:grid-cols-5 ${panelClass(
        dark
      )}`}
    >
      {items.map((item) => (
        <div key={item} className="flex gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-blue-500/30 text-blue-500">
            ✓
          </div>
          <div>
            <div className="font-semibold">{item}</div>
            <div className={`mt-1 text-sm ${mutedTextClass(dark)}`}>
              Короткое описание преимущества.
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

function Categories({ dark }: { dark: boolean }) {
  return (
    <section className="py-20">
      <h2 className="text-4xl font-bold">Выберите категорию</h2>
      <p className={`mt-3 ${mutedTextClass(dark)}`}>
        Выберите направление и найдите свой идеальный гаджет
      </p>

      <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => (
          <div
            key={category}
            className={`h-[180px] rounded-2xl border p-6 transition-all duration-700 hover:-translate-y-1 ${panelClass(
              dark
            )}`}
          >
            <h3 className="text-xl font-bold">{category}</h3>
            <p className={`mt-2 text-sm ${mutedTextClass(dark)}`}>
              Популярные модели и бренды
            </p>
            <button className="mt-10 flex h-10 w-10 items-center justify-center rounded-full border border-blue-500/30 text-blue-500">
              →
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <button
          className={`rounded-xl border px-10 py-4 transition-all duration-700 hover:-translate-y-0.5 ${panelClass(
            dark
          )}`}
        >
          Смотреть все категории →
        </button>
      </div>
    </section>
  );
}

function PopularProducts({ dark }: { dark: boolean }) {
  return (
    <section className="pb-20">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-5xl font-bold">Популярные товары</h2>
          <p className={`mt-3 ${mutedTextClass(dark)}`}>
            Выберите модель — конфигурацию подберёте на странице товара.
          </p>
        </div>

        <a className="text-blue-500 transition-colors hover:text-blue-400">
          Смотреть все →
        </a>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {popularProducts.map((product) => (
          <ProductCard key={product.name} product={product} dark={dark} />
        ))}
      </div>
    </section>
  );
}

function ProductCard({
  product,
  dark,
}: {
  product: { name: string; price: string; colors: string[] };
  dark: boolean;
}) {
  return (
    <article
      className={`rounded-3xl border p-5 transition-all duration-700 hover:-translate-y-1 ${panelClass(
        dark
      )}`}
    >
      <div
        className={`flex h-[260px] items-center justify-center rounded-2xl transition-colors duration-700 ${
          dark ? "bg-white/[0.04] text-white/30" : "bg-slate-100 text-black/30"
        }`}
      >
        Фото товара
      </div>

      <h3 className="mt-5 text-xl font-bold">{product.name}</h3>
      <p className={`mt-2 ${mutedTextClass(dark)}`}>{product.price}</p>

      <div className="mt-4 flex gap-3">
        {product.colors.map((color) => (
          <span
            key={color}
            className="h-5 w-5 rounded-full border border-black/10"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>

      <button className="mt-6 w-full rounded-xl bg-blue-600 py-4 font-medium text-white transition-all duration-300 hover:bg-blue-500">
        Перейти →
      </button>
    </article>
  );
}

function NewArrivals({ dark }: { dark: boolean }) {
  return (
    <section className="pb-20">
      <h2 className="text-5xl font-bold">Новинки</h2>
      <p className={`mt-3 ${mutedTextClass(dark)}`}>
        Техника, которая только появилась
      </p>

      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        <div
          className={`min-h-[360px] rounded-3xl border p-10 transition-all duration-700 ${panelClass(
            dark
          )}`}
        >
          <div className="text-sm font-bold uppercase text-blue-500">
            Новинка
          </div>
          <h3 className="mt-6 text-5xl font-bold">iPhone 17e</h3>
          <p className={`mt-4 text-xl ${mutedTextClass(dark)}`}>
            Мощь. Красота. Доступнее.
          </p>
          <button className="mt-10 rounded-xl bg-blue-600 px-8 py-4 font-medium text-white transition-all duration-300 hover:bg-blue-500">
            Подробнее →
          </button>
        </div>

        <div className="grid gap-5">
          {["AirPods Max", "Samsung Galaxy S25 Ultra"].map((item) => (
            <div
              key={item}
              className={`rounded-3xl border p-8 transition-all duration-700 ${panelClass(
                dark
              )}`}
            >
              <div className="text-sm font-bold uppercase text-blue-500">
                Новинка
              </div>
              <h3 className="mt-4 text-3xl font-bold">{item}</h3>
              <p className={`mt-3 ${mutedTextClass(dark)}`}>от 59 990 ₽</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SupportBlock({ dark }: { dark: boolean }) {
  return (
    <section
      className={`mb-20 rounded-[32px] border p-10 transition-all duration-700 ${panelClass(
        dark
      )}`}
    >
      <h2 className="text-5xl font-bold">Сервис и поддержка Нетизен</h2>
      <p className={`mt-4 text-xl ${mutedTextClass(dark)}`}>
        Подскажем, чем отличаются модели и как оформить заказ.
      </p>

      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        <div className="grid grid-cols-2 gap-5">
          {[
            "Только оригинал",
            "Официальная гарантия",
            "Быстрая доставка",
            "Безопасная оплата",
          ].map((item) => (
            <div
              key={item}
              className={`rounded-2xl border p-6 transition-all duration-700 ${
                dark ? "border-white/10" : "border-black/10"
              }`}
            >
              <div className="text-blue-500">✓</div>
              <h3 className="mt-4 font-bold">{item}</h3>
              <p className={`mt-2 text-sm ${mutedTextClass(dark)}`}>
                Короткое описание.
              </p>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          {[
            "Можно ли выбрать конфигурацию?",
            "Есть ли техника в наличии?",
            "Как оформить заказ?",
          ].map((q) => (
            <div
              key={q}
              className={`rounded-2xl border p-6 transition-all duration-700 ${
                dark ? "border-white/10" : "border-black/10"
              }`}
            >
              {q} <span className="float-right text-blue-500">+</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer({ dark }: { dark: boolean }) {
  return (
    <footer
      className={`rounded-[32px] border p-10 transition-all duration-700 ${panelClass(
        dark
      )}`}
    >
      <div className="grid gap-10 lg:grid-cols-4">
        <div>
          <div className="text-3xl font-bold tracking-[0.12em]">NETIZEN</div>

          <div className="mt-8 space-y-5">
            <p>8 (800) 123-45-67</p>
            <p>@netizen_store</p>
            <p>info@netizen.store</p>
          </div>
        </div>

        <FooterColumn
          title="Каталог"
          items={["iPhone", "iPad", "Mac", "Watch", "AirPods", "Распродажа", "Новинки"]}
        />

        <FooterColumn
          title="Покупателям"
          items={[
            "Доставка и оплата",
            "Гарантия",
            "Возврат и обмен",
            "Как оформить заказ",
            "Подбор конфигурации",
            "Trade-in",
          ]}
        />

        <FooterColumn
          title="О нас"
          items={["О компании", "Отзывы", "Блог", "Контакты", "Вакансии"]}
        />
      </div>

      <div className="mt-10 flex flex-wrap gap-5">
        {["Telegram", "YouTube", "Instagram"].map((item) => (
          <button
            key={item}
            className="rounded-xl border border-blue-500/30 px-10 py-4 text-blue-500 transition-all duration-300 hover:border-blue-500 hover:bg-blue-500/10"
          >
            {item}
          </button>
        ))}
      </div>

      <div
        className={`mt-10 border-t pt-8 text-sm transition-colors duration-700 ${
          dark ? "border-white/10 text-white/45" : "border-black/10 text-black/45"
        }`}
      >
        © 2024 Netizen. Все права защищены.
      </div>
    </footer>
  );
}

function FooterColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="text-xl font-bold">{title}</h3>

      <div className="mt-6 flex flex-col gap-4 opacity-60">
        {items.map((item) => (
          <a key={item} className="transition-colors hover:text-blue-500">
            {item}
          </a>
        ))}
      </div>
    </div>
  );
}
