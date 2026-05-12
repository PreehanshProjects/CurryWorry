import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  Clock,
  Leaf,
  Mail,
  MapPin,
  Menu,
  Minus,
  Phone,
  Plus,
  Quote,
  Share2,
  ShoppingBag,
  Trash2,
  X,
} from 'lucide-react';
import './styles.css';

const phoneDisplay = '+230 5756 3134';
const phoneHref = 'tel:+23057563134';
const whatsappHref = 'https://wa.me/23057563134';
const emailHref = 'mailto:curry.ate.worry@gmail.com';
const facebookHref = 'https://www.facebook.com/search/top?q=Curry%20Worry';
const logoSrc = '/assets/curry-worry-logo.png';

const navItems = [
  ['Menu', '#menu'],
  ['Breakfast', '#breakfast'],
  ['Desserts', '#desserts'],
  ['Order Info', '#order'],
  ['Contact', '#contact'],
];

const quickOrderItems = ['Farata', 'Rougaille', 'Cari poule', 'Touffe', 'Sweets'];

const featuredDishes = [
  {
    name: 'Farata ek Rougaille Touni',
    badge: 'Most ordered',
    spice: 'Medium spice',
    price: 'From Rs 160',
    image: '/assets/farata-rougaille-touni.png',
    description: 'Soft handmade farata served with rich rougaille touni, fresh herbs, and a proper homemade finish.',
  },
  {
    name: 'Cari Poule Masala',
    badge: 'Family favorite',
    spice: 'Warm spice',
    price: 'Family portions',
    image: '/assets/cari-poule-masala.png',
    description: 'Chicken cooked slowly with masala, ginger, garlic, and a sauce that tastes like Sunday lunch.',
  },
  {
    name: 'Giromon Touffe',
    badge: 'Vegetarian',
    spice: 'Gentle',
    price: 'Side portions',
    image: '/assets/giromon-touffe.png',
    description: 'Pumpkin softened with onion, herbs, and Mauritian seasoning. Simple, sweet, and comforting.',
  },
];

const menuSections = [
  {
    title: 'Breakfast',
    note: 'Available for morning preorders, takeaway, or nearby delivery when confirmed.',
    items: [
      ['Pancakes', 'From Rs 75', 'Nature, chocolat, vanille, amande, or fruits rouges'],
      ['Muffins', 'From Rs 45', 'Chocolat, amande, or vanille'],
      ['Toast', 'From Rs 60', 'Simple breakfast option for takeaway'],
      ['Omelettes', 'From Rs 85', 'Confirm fillings and quantity'],
      ['Smoothies & Milkshakes', 'From Rs 95', 'Vanille, chocolat, amande, and daily options'],
    ],
  },
  {
    title: 'Breads & Sides',
    note: 'Order by piece or tray. Best paired with rougaille, curry, and family portions.',
    items: [
      ['Farata', 'Rs 25 each', 'Minimum 6 recommended'],
      ['Roti', 'Rs 20 each', 'Minimum 6 recommended'],
      ['Puri', 'Rs 20 each', 'Breakfast or curry side'],
      ['Gro Pois', 'From Rs 90', 'Small or family portion'],
      ['Satini Poul', 'From Rs 85', 'Confirm spice level'],
    ],
  },
  {
    title: 'Curries & Rougaille',
    note: 'Cooked fresh for lunch, dinner, or preorder family meals.',
    items: [
      ['Pilchard Masala avek Ti Pois', 'From Rs 160', 'Lunch box or portion'],
      ['Rougaille Touni', 'From Rs 145', 'Good with farata'],
      ['Rougaille Soya', 'From Rs 120', 'Vegetarian option'],
      ['Cari Poule Masala', 'From Rs 185', 'Family portions available'],
      ['Saute Lavyann Mouton', 'Preorder', 'Order in advance'],
    ],
  },
  {
    title: 'Vegetables & Touffe',
    note: 'Homemade vegetable sides for balanced family orders.',
    items: [
      ['Giromon Touffe', 'From Rs 90', 'Mild and sweet'],
      ['Brede Touffe', 'From Rs 90', 'Daily availability'],
      ['Sousou Touffe', 'From Rs 90', 'Daily availability'],
    ],
  },
];

const breakfastGroups = [
  {
    title: 'Pancakes',
    note: 'Soft, warm, and made fresh for slow mornings.',
    items: ['Nature', 'Chocolat', 'Vanille', 'Amande', 'Fruits Rouges'],
  },
  {
    title: 'Muffins',
    note: 'Homemade-style bakes for breakfast or tea time.',
    items: ['Chocolat', 'Amande', 'Vanille'],
  },
  {
    title: 'Morning Comforts',
    note: 'Easy breakfast favorites for takeaway or delivery.',
    items: ['Toast', 'Omelettes', 'Smoothies', 'Milkshakes: Vanille, Chocolat, Amande'],
  },
];

const desserts = [
  {
    name: 'Gulab Jamoun',
    image:
      'https://images.pexels.com/photos/7406888/pexels-photo-7406888.jpeg?auto=compress&cs=tinysrgb&w=900',
    text: 'Soft, syrupy, festive, and made for sharing.',
  },
  {
    name: 'Laddoo',
    image:
      'https://images.pexels.com/photos/18488297/pexels-photo-18488297.jpeg?auto=compress&cs=tinysrgb&w=900',
    text: 'Rich, sweet bites with the familiar taste of celebration.',
  },
  {
    name: 'Kheer',
    image:
      'https://commons.wikimedia.org/wiki/Special:Redirect/file/Rice_Kheer_or_Rice_Pudding.JPG?width=900',
    text: 'Creamy, gentle, and comforting with cardamom warmth.',
  },
  {
    name: 'Sago Appalam',
    image: '/assets/sago-appalam-ai.png',
    text: 'Sweet sago with the salty crunch of appalam, served the Mauritian-Tamil way.',
  },
  {
    name: 'Poudine Mais',
    image: '/assets/poudine-mais-ai.png',
    text: 'Simple, golden, and comforting in the way homemade desserts should be.',
  },
  {
    name: 'Gato Patate',
    image: '/assets/gato-patate.png',
    text: 'Traditional sweet potato cakes with a soft, familiar heart.',
  },
];

const orderSteps = [
  ['Choose dishes', 'Pick your dishes and mention quantity for each item.'],
  ['Message details', 'Send pickup time, delivery area, and any allergy or spice preference.'],
  ['Confirm availability', 'You will get confirmation before the food is prepared.'],
  ['Collect warm', 'Pickup in Vacoas or arrange nearby delivery when available.'],
];

const orderFacts = [
  ['Pickup', 'Vacoas, Mauritius'],
  ['Hours', 'Mon-Sat, 08:00-20:00'],
  ['Delivery', 'Nearby areas when available'],
  ['Best for', 'Preorders and family portions'],
];

function getOrderCount(orderItems) {
  return Object.values(orderItems).reduce((total, item) => total + item.quantity, 0);
}

function getOrderLines(orderItems) {
  return Object.values(orderItems).filter((item) => item.quantity > 0);
}

function buildWhatsAppMessage(orderItems, details) {
  const lines = getOrderLines(orderItems);
  const itemText = lines.length
    ? lines.map((item) => `- ${item.quantity} x ${item.name} (${item.price})`).join('\n')
    : '- I would like to order from the menu';

  const customerName = details.name.trim() || '[Your name]';
  const orderType = details.orderType === 'delivery' ? 'Delivery' : 'Pickup';
  const preferredTime = details.time.trim() || '[Preferred time]';
  const area = details.area.trim() || '[Area / pickup confirmation]';
  const note = details.note.trim() || 'No special note';

  return [
    'Hello Curry Worry, I would like to place an order.',
    '',
    'Items:',
    itemText,
    '',
    'Order details:',
    `- Name: ${customerName}`,
    `- Type: ${orderType}`,
    `- Preferred time: ${preferredTime}`,
    `- Area: ${area}`,
    `- Notes: ${note}`,
    '',
    'Please confirm availability and total price. Thank you.',
  ].join('\n');
}

function QuantityControl({ name, quantity, onIncrementItem, onDecrementItem, onSetItemQuantity, variant = 'dark' }) {
  const inputClass = variant === 'light'
    ? 'h-8 w-12 rounded-full border-0 bg-transparent text-center text-sm font-black text-brown outline-none transition focus:bg-cream'
    : 'h-8 w-12 rounded-full border-0 bg-transparent text-center text-sm font-black text-curry outline-none transition focus:bg-white/12';
  const decrementClass = variant === 'light'
    ? 'grid h-8 w-8 place-items-center rounded-full text-brown transition hover:bg-cream'
    : 'grid h-8 w-8 place-items-center rounded-full text-ivory transition hover:bg-white/12';
  const incrementClass = 'grid h-8 w-8 place-items-center rounded-full bg-curry text-brown transition hover:bg-[#ffc4dc]';

  return (
    <div className={`flex w-fit items-center rounded-full p-1 ${variant === 'light' ? 'border border-cocoa/10 bg-white' : 'border border-white/12 bg-white/[0.08]'}`}>
      <button
        type="button"
        aria-label={`Remove one ${name}`}
        onClick={() => onDecrementItem(name)}
        className={decrementClass}
      >
        <Minus size={15} />
      </button>
      <input
        type="number"
        min="1"
        inputMode="numeric"
        aria-label={`${name} quantity`}
        value={quantity}
        onFocus={(event) => event.target.select()}
        onChange={(event) => onSetItemQuantity(name, event.target.value)}
        className={inputClass}
      />
      <button
        type="button"
        aria-label={`Add one more ${name}`}
        onClick={() => onIncrementItem(name)}
        className={incrementClass}
      >
        <Plus size={15} />
      </button>
    </div>
  );
}

function WhatsAppIcon({ size = 18, className = '' }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 32 32"
      width={size}
      height={size}
      className={className}
      fill="currentColor"
    >
      <path d="M16.04 3C8.88 3 3.06 8.75 3.06 15.82c0 2.26.6 4.47 1.75 6.41L3 29l6.97-1.79a13.12 13.12 0 0 0 6.07 1.5C23.2 28.7 29 22.94 29 15.86 29 8.75 23.2 3 16.04 3Zm0 23.54c-2.03 0-4.01-.54-5.75-1.56l-.41-.24-4.13 1.06 1.1-4.01-.27-.42a10.55 10.55 0 0 1-1.63-5.55c0-5.86 4.98-10.64 11.09-10.64 6.1 0 11.07 4.78 11.07 10.68 0 5.88-4.97 10.68-11.07 10.68Zm6.08-7.98c-.33-.16-1.96-.96-2.26-1.07-.3-.11-.52-.16-.74.16-.22.33-.85 1.07-1.04 1.29-.19.22-.38.25-.71.08-.33-.16-1.4-.51-2.67-1.63a10.04 10.04 0 0 1-1.84-2.27c-.19-.33-.02-.51.14-.67.15-.15.33-.38.49-.57.16-.19.22-.33.33-.55.11-.22.05-.41-.03-.57-.08-.16-.74-1.76-1.01-2.41-.27-.63-.54-.55-.74-.56h-.63c-.22 0-.57.08-.87.41-.3.33-1.15 1.12-1.15 2.73s1.18 3.16 1.34 3.38c.16.22 2.32 3.5 5.62 4.9.79.34 1.4.54 1.88.69.79.25 1.5.22 2.07.13.63-.09 1.96-.79 2.23-1.55.27-.76.27-1.42.19-1.55-.08-.14-.3-.22-.63-.38Z" />
    </svg>
  );
}

const popularRequests = [
  {
    name: 'Farata ek rougaille',
    text: 'Soft bread, saucy rougaille, and easy family portions are the most requested orders.',
  },
  {
    name: 'Weekend sweets',
    text: 'Gulab jamoun, laddoo, kheer, and poudine mais work well for visits, tea time, and small celebrations.',
  },
  {
    name: 'Preorder meals',
    text: 'Customers usually send dish lists in advance so portions, spice level, and pickup time can be confirmed.',
  },
];

function useReveal() {
  useEffect(() => {
    const items = document.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: '0px 0px -48px 0px' },
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);
}

function Navbar({ onOpenOrder }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-[1.2rem] border border-white/18 bg-[#3a3a3a]/92 px-3 py-2 text-ivory shadow-[0_18px_60px_rgba(58,58,58,0.2)] backdrop-blur-xl sm:rounded-full sm:px-5 sm:py-2.5">
        <a href="#home" className="flex items-center gap-3">
          <img
            src={logoSrc}
            alt="Curry Worry logo"
            className="h-12 w-12 shrink-0 rounded-full object-cover ring-2 ring-curry/70 shadow-[0_10px_30px_rgba(255,179,209,0.3)] sm:h-14 sm:w-14"
          />
          <span className="min-w-0">
            <span className="block font-display text-lg font-semibold leading-none">Curry Worry</span>
            <span className="block truncate text-xs text-ivory/65 max-[380px]:hidden">Homemade Moris Food</span>
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map(([label, href]) => (
            <a key={label} href={href} className="text-sm font-semibold text-ivory/76 transition hover:text-curry">
              {label}
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={onOpenOrder}
          className="hidden items-center gap-2 rounded-full bg-curry px-5 py-3 text-sm font-black text-brown transition hover:-translate-y-0.5 hover:bg-[#ffc4dc] lg:inline-flex"
        >
          <WhatsAppIcon size={17} /> WhatsApp
        </button>

        <button
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
          className="grid h-11 w-11 place-items-center rounded-full border border-white/14 text-ivory lg:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="mx-auto mt-3 max-w-7xl rounded-3xl border border-brown/10 bg-ivory p-3 shadow-2xl lg:hidden">
          <div className="grid gap-2">
            {navItems.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3.5 font-semibold text-brown hover:bg-cream"
              >
                {label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                onOpenOrder();
              }}
              className="rounded-2xl bg-terracotta px-4 py-3.5 text-center font-black text-ivory"
            >
              <span className="inline-flex items-center justify-center gap-2">
                <WhatsAppIcon size={18} /> WhatsApp Order
              </span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

function SectionHeader({ eyebrow, title, text, align = 'center', light = false }) {
  return (
    <div data-reveal className={align === 'left' ? 'max-w-2xl' : 'mx-auto max-w-3xl text-center'}>
      <p className={`mb-2 text-[0.68rem] font-black uppercase tracking-[0.18em] sm:mb-3 sm:text-xs sm:tracking-[0.24em] ${light ? 'text-curry' : 'text-terracotta'}`}>
        {eyebrow}
      </p>
      <h2 className={`font-display text-[2rem] font-semibold leading-[1.06] sm:text-5xl ${light ? 'text-ivory' : 'text-brown'}`}>
        {title}
      </h2>
      {text && <p className={`mt-4 text-[0.95rem] leading-7 sm:mt-5 sm:text-lg sm:leading-8 ${light ? 'text-ivory/72' : 'text-cocoa/76'}`}>{text}</p>}
    </div>
  );
}

function Hero({ onOpenOrder }) {
  return (
    <section id="home" className="relative overflow-hidden bg-brown text-ivory sm:min-h-[100svh]">
      <img
        src="https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=1800&q=88"
        alt="Homemade Mauritian food with warm curries, breads, and chutneys"
        className="absolute inset-0 h-full w-full object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(58,58,58,0.98)_0%,rgba(58,58,58,0.88)_42%,rgba(58,58,58,0.58)_100%)] sm:bg-[linear-gradient(90deg,rgba(58,58,58,0.96),rgba(58,58,58,0.72)_48%,rgba(58,58,58,0.24))]" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-cream to-transparent" />

      <div className="relative mx-auto flex max-w-7xl items-center px-4 pb-12 pt-28 sm:min-h-[100svh] sm:px-6 sm:pb-20 sm:pt-32 lg:px-8">
        <div data-reveal className="w-full max-w-3xl">
          <div className="mb-4 inline-flex max-w-full items-center gap-2.5 rounded-full border border-white/16 bg-white/10 px-3.5 py-2 text-xs text-ivory/84 backdrop-blur sm:mb-5 sm:gap-3 sm:px-4 sm:text-sm">
            <Leaf size={16} className="text-leaf" />
            <span className="leading-5">Homemade on order, pickup and local delivery</span>
          </div>
          <h1 className="font-display text-[clamp(2.65rem,16vw,5.8rem)] font-semibold leading-[0.98] text-ivory lg:text-8xl">
            Curry Worry
          </h1>
          <p className="mt-3 max-w-[18ch] font-display text-[clamp(1.55rem,8vw,3.35rem)] font-semibold leading-[1.04] text-curry sm:mt-4 sm:max-w-none sm:leading-tight">
            Manze lakaz Moris, ready by preorder.
          </p>
          <p className="mt-5 max-w-2xl text-[0.95rem] leading-7 text-ivory/78 sm:mt-7 sm:text-xl sm:leading-8">
            Farata, rougaille, touffe, sweets, breakfast, and family-style Mauritian comfort food cooked fresh in small
            batches. Warm, generous, and made to taste like home.
          </p>
          <div className="mt-6 grid gap-2.5 sm:mt-8 sm:flex sm:flex-row sm:gap-3">
            <button type="button" onClick={onOpenOrder} className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-curry px-4 py-3 text-sm font-black leading-none text-brown transition hover:-translate-y-1 hover:bg-[#ffc4dc] sm:min-h-14 sm:w-auto sm:px-7 sm:py-4 sm:text-base">
              <WhatsAppIcon size={18} className="shrink-0 transition group-hover:rotate-6" />
              <span>WhatsApp Order</span>
            </button>
            <a href={phoneHref} className="hidden min-h-14 w-auto items-center justify-center gap-2 rounded-full border border-white/18 bg-white/10 px-7 py-4 font-bold text-ivory backdrop-blur transition hover:-translate-y-1 hover:bg-white/16 sm:inline-flex">
              <Phone size={16} className="shrink-0" />
              <span>Call {phoneDisplay}</span>
            </a>
            <a href="#menu" className="hidden min-h-14 w-auto items-center justify-center gap-2 rounded-full border border-white/18 bg-white/10 px-7 py-4 font-bold text-ivory backdrop-blur transition hover:-translate-y-1 hover:bg-white/16 sm:inline-flex">
              <span>View Menu</span>
              <ArrowRight size={17} className="shrink-0" />
            </a>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2 sm:hidden">
            {quickOrderItems.map((item) => (
              <a key={item} href="#menu" className="rounded-full border border-white/16 bg-white/10 px-2.5 py-2 text-center text-[0.72rem] font-bold leading-none text-ivory/86 backdrop-blur">
                {item}
              </a>
            ))}
          </div>

          <div className="mt-8 hidden gap-2.5 sm:grid sm:grid-cols-2 lg:max-w-2xl">
            {orderFacts.map(([label, value]) => (
              <div key={label} className="flex items-center gap-3 rounded-2xl border border-white/12 bg-white/9 px-4 py-3 text-sm backdrop-blur">
                <CheckCircle2 size={17} className="shrink-0 text-curry" />
                <div className="flex flex-wrap gap-x-2">
                  <span className="font-bold text-ivory">{label}:</span>
                  <span className="text-ivory/70">{value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div data-reveal className="absolute bottom-8 right-5 hidden w-[370px] rounded-[2rem] border border-white/16 bg-white/12 p-4 shadow-2xl backdrop-blur-xl xl:block">
          <div className="flex items-center gap-4">
            <img
              src="/assets/farata-rougaille-touni.png"
              alt="Fresh homemade farata with rougaille touni"
              className="h-24 w-24 rounded-[1.4rem] object-cover"
            />
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-curry">Today from the kitchen</p>
              <h3 className="mt-2 font-display text-2xl font-semibold">Farata ek Rougaille Touni</h3>
              <p className="mt-1 text-sm text-ivory/70">Rolled fresh, packed warm, ready to share.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FoodCard({ dish }) {
  return (
    <article
      data-reveal
      className="group overflow-hidden rounded-[1.15rem] border border-cocoa/10 bg-ivory shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-warm"
    >
      <div className="relative overflow-hidden">
        <img src={dish.image} alt={dish.name} className="h-56 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72" />
        <span className="absolute left-4 top-4 rounded-full bg-curry px-3 py-1 text-xs font-black uppercase tracking-[0.12em] text-brown">
          {dish.badge}
        </span>
      </div>
      <div className="p-6">
        <div className="grid gap-3 sm:flex sm:items-start sm:justify-between sm:gap-4">
          <h3 className="font-display text-2xl font-semibold text-brown">{dish.name}</h3>
          <span className="w-fit rounded-full bg-leaf/12 px-3 py-1 text-xs font-black text-leaf">{dish.spice}</span>
        </div>
        <p className="mt-3 text-sm font-black text-terracotta">{dish.price}</p>
        <p className="mt-4 text-sm leading-7 text-cocoa/74">{dish.description}</p>
      </div>
    </article>
  );
}

function FeaturedDishes() {
  return (
    <section className="section bg-ivory">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Featured Dishes"
          title="The plates people ask for again."
          text="Simple homemade food, handled with care: generous portions, proper spice, and the comforting flavours of a Mauritian kitchen."
        />
        <div className="mt-9 grid gap-5 sm:mt-12 md:grid-cols-3 md:gap-6">
          {featuredDishes.map((dish) => (
            <FoodCard key={dish.name} dish={dish} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MenuCategory({ orderItems, onAddItem, onIncrementItem, onDecrementItem, onSetItemQuantity, onOpenOrder }) {
  const orderCount = getOrderCount(orderItems);

  return (
    <section id="menu" className="section warm-texture bg-brown text-ivory">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeader
          light
          eyebrow="Menu Guide"
          title="Pick dishes, send quantities, confirm the time."
          text="Use this as a quick ordering list. Prices are starting guides, with portions, spice level, pickup, and nearby delivery confirmed by WhatsApp before cooking starts."
        />
        <div data-reveal className="mx-auto mt-7 grid max-w-4xl gap-3 rounded-[1.2rem] border border-curry/22 bg-curry/12 p-3 text-sm font-semibold text-ivory/82 sm:grid-cols-3 sm:p-4">
          {[
            ['1. Choose', 'List dishes and quantities'],
            ['2. Confirm', 'Pickup time and area'],
            ['3. Collect', 'Food packed warm'],
          ].map(([label, text]) => (
            <div key={label} className="rounded-xl bg-white/[0.07] px-4 py-3">
              <span className="block font-black text-curry">{label}</span>
              <span className="mt-1 block">{text}</span>
            </div>
          ))}
        </div>

        <div className="mt-7 grid gap-4 sm:mt-9 md:grid-cols-2 xl:grid-cols-4">
          {menuSections.map((section) => (
            <article data-reveal key={section.title} className="rounded-[1.1rem] border border-white/10 bg-white/[0.07] p-4 backdrop-blur sm:p-5">
              <div className="border-b border-white/10 pb-4">
                <h3 className="font-display text-2xl font-semibold text-ivory sm:text-3xl">{section.title}</h3>
                <p className="mt-2 text-sm leading-6 text-ivory/62">{section.note}</p>
              </div>
              <ul className="divide-y divide-white/9">
                {section.items.map(([item, guide, detail]) => (
                  <li key={item} className="grid gap-2 py-3.5 sm:py-4">
                    <div className="grid gap-2 min-[420px]:flex min-[420px]:items-start min-[420px]:justify-between min-[420px]:gap-3">
                      <span className="font-semibold leading-6 text-ivory">{item}</span>
                      <span className="w-fit shrink-0 rounded-full bg-curry/14 px-3 py-1 text-xs font-black text-curry">
                        {guide}
                      </span>
                    </div>
                    <div className="grid gap-3 min-[420px]:flex min-[420px]:items-center min-[420px]:justify-between">
                      <span className="text-sm leading-5 text-ivory/58">{detail}</span>
                      {orderItems[item]?.quantity ? (
                        <QuantityControl
                          name={item}
                          quantity={orderItems[item].quantity}
                          onIncrementItem={onIncrementItem}
                          onDecrementItem={onDecrementItem}
                          onSetItemQuantity={onSetItemQuantity}
                        />
                      ) : (
                        <button
                          type="button"
                          onClick={() => onAddItem({ name: item, price: guide, detail, category: section.title })}
                          className="inline-flex min-h-10 w-fit items-center justify-center gap-1.5 rounded-full border border-curry/22 bg-curry/12 px-4 py-2 text-xs font-black text-curry transition hover:-translate-y-0.5 hover:bg-curry hover:text-brown"
                        >
                          <Plus size={15} /> Add
                        </button>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div data-reveal className="mt-6 flex flex-col items-center justify-between gap-4 rounded-[1.1rem] border border-curry/20 bg-curry/12 p-4 text-sm font-semibold leading-6 text-ivory/78 sm:flex-row sm:p-5">
          <span>{orderCount ? `${orderCount} item${orderCount === 1 ? '' : 's'} selected. Review your order before sending it on WhatsApp.` : 'Ready to order? Add dishes from the menu, then send a prepared WhatsApp order.'}</span>
          <button
            type="button"
            onClick={onOpenOrder}
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-curry px-5 py-3 font-black text-brown transition hover:-translate-y-1 hover:bg-[#ffc4dc] sm:w-auto"
          >
            <ShoppingBag size={18} /> {orderCount ? 'Review Order' : 'Start Order'}
          </button>
        </div>
      </div>
    </section>
  );
}

function BreakfastSection() {
  return (
    <section id="breakfast" className="section morning-glow bg-cream">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <SectionHeader
            align="left"
            eyebrow="Breakfast"
            title="Soft mornings, warm pancakes, easy comfort."
            text="Breakfast is made for relaxed island mornings: pancakes, muffins, omelettes, smoothies, and milkshakes that feel simple, fresh, and homemade."
          />
          <div data-reveal className="mt-8 overflow-hidden rounded-[1.2rem] shadow-warm">
            <img
              src="https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=1000&q=85"
              alt="Homemade pancakes and breakfast table"
              className="h-64 w-full object-cover sm:h-[420px]"
            />
          </div>
        </div>
        <div className="grid content-center gap-4 sm:gap-5">
          {breakfastGroups.map((group) => (
            <div data-reveal key={group.title} className="rounded-[1.1rem] border border-cocoa/10 bg-ivory p-5 shadow-soft sm:p-6">
              <h3 className="font-display text-3xl font-semibold text-brown">{group.title}</h3>
              <p className="mt-2 text-sm leading-6 text-cocoa/65">{group.note}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="rounded-full bg-curry/16 px-4 py-2 text-sm font-bold text-cocoa">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DessertGrid() {
  return (
    <section id="desserts" className="section bg-ivory">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Mauritian Sweets & Desserts"
          title="Sweet things that taste like celebration."
          text="Traditional treats for tea time, family visits, holidays, or the small moment after a good meal."
        />
        <div className="mt-9 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {desserts.map((item) => (
            <article data-reveal key={item.name} className="group overflow-hidden rounded-[1.1rem] bg-cream shadow-soft transition hover:-translate-y-1 hover:shadow-warm">
              <div className="overflow-hidden">
                <img src={item.image} alt={item.name} className="h-48 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-52" />
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="font-display text-2xl font-semibold text-brown">{item.name}</h3>
                <p className="mt-3 text-sm leading-7 text-cocoa/72">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function StorySection() {
  return (
    <section id="story" className="section bg-cream">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
        <div data-reveal className="relative">
          <img
            src="/assets/farata-rougaille-touni.png"
            alt="Fresh homemade farata with rougaille touni"
            className="aspect-[4/3] w-full rounded-[1.2rem] object-cover shadow-warm sm:aspect-[4/5]"
          />
          <div className="mt-4 max-w-xs rounded-3xl bg-ivory p-5 shadow-xl sm:absolute sm:-bottom-6 sm:left-6 sm:mt-0">
            <p className="font-display text-3xl font-semibold text-brown">Cooked on order</p>
            <p className="mt-1 text-sm leading-6 text-cocoa/72">Small batches, fresh ingredients, and no rushed shortcuts.</p>
          </div>
        </div>
        <div>
          <SectionHeader
            align="left"
            eyebrow="Made With Love"
            title="Food that comes from a real kitchen, not a production line."
            text="This is homemade Mauritian cooking for people who miss the comfort of manze lakaz. Spices are handled patiently, vegetables are prepared fresh, and each order is packed with the care you expect from family cooking."
          />
          <div data-reveal className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              ['Freshly prepared', 'Orders are planned and cooked in small batches so the food reaches you warm and full of flavour.'],
              ['Traditional recipes', 'Rougaille, touffe, masala, satini, and sweets made with the kind of taste Mauritians recognize.'],
            ].map(([title, text]) => (
              <div key={title} className="rounded-3xl border border-cocoa/10 bg-ivory p-6 shadow-soft">
                <h3 className="font-display text-2xl font-semibold text-brown">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-cocoa/72">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function OrderSteps({ onOpenOrder }) {
  return (
    <section id="order" className="section bg-ivory">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Order Info"
          title="Simple manual ordering, no app account needed."
          text="Order through WhatsApp or phone, then confirm portions, timing, pickup, or nearby delivery directly."
        />
        <div className="mt-9 grid gap-4 sm:mt-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-6">
          <div data-reveal className="rounded-[1.6rem] bg-brown p-5 text-ivory shadow-warm sm:rounded-[2rem] sm:p-7">
            <p className="font-display text-3xl font-semibold">Ready to order?</p>
            <p className="mt-3 text-sm leading-7 text-ivory/68">Send your dish list, quantity, pickup time, and delivery area. Availability and portions can be confirmed manually.</p>
            <div className="mt-6 grid gap-3">
              <button type="button" onClick={onOpenOrder} className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-curry px-6 py-4 font-black text-brown transition hover:-translate-y-1 hover:bg-[#ffc4dc]">
                <WhatsAppIcon size={18} /> WhatsApp Order
              </button>
              <a href={phoneHref} className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-white/16 bg-white/10 px-6 py-4 text-center font-bold text-ivory transition hover:-translate-y-1 hover:bg-white/16">
                <Phone size={17} className="shrink-0" /> Call {phoneDisplay}
              </a>
            </div>
            <div className="mt-6 grid gap-3 text-sm text-ivory/70">
              {orderFacts.map(([label, value]) => (
                <div key={label} className="flex flex-col gap-1 border-t border-white/10 pt-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                  <span className="font-bold text-ivory">{label}</span>
                  <span className="sm:text-right">{value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
          {orderSteps.map(([title, text], index) => (
            <div data-reveal key={title} className="rounded-[1.1rem] border border-cocoa/10 bg-cream p-5 shadow-soft sm:p-6">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-terracotta text-lg font-black text-ivory">
                {index + 1}
              </span>
              <h3 className="mt-6 font-display text-2xl font-semibold text-brown">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-cocoa/72">{text}</p>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="section bg-cream">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Popular Requests"
          title="What people usually order for."
          text="Make it easy to choose: quick lunch plates, family portions, weekend sweets, and preorder meals."
        />
        <div className="mt-9 grid gap-4 sm:mt-12 md:grid-cols-3 md:gap-5">
          {popularRequests.map((item) => (
            <article data-reveal key={item.name} className="rounded-[1.1rem] border border-cocoa/10 bg-ivory p-5 shadow-soft sm:p-7">
              <Quote className="text-terracotta" size={28} />
              <p className="mt-5 leading-8 text-cocoa/78">{item.text}</p>
              <div className="mt-6 flex items-center justify-between">
                <p className="font-bold text-brown">{item.name}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection({ onOpenOrder }) {
  return (
    <section className="px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <div data-reveal className="relative mx-auto max-w-7xl overflow-hidden rounded-[1.2rem] bg-brown px-5 py-12 text-center text-ivory shadow-[0_30px_100px_rgba(58,58,58,0.2)] sm:rounded-[2.4rem] sm:px-10 sm:py-16 lg:py-24">
        <img
          src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1600&q=85"
          alt="Warm spices used in Mauritian homemade cooking"
          className="absolute inset-0 h-full w-full object-cover opacity-24"
        />
        <div className="absolute inset-0 bg-brown/74" />
        <div className="relative mx-auto max-w-3xl">
          <p className="mb-3 text-[0.68rem] font-black uppercase tracking-[0.18em] text-curry sm:text-xs sm:tracking-[0.24em]">Order Homemade</p>
          <h2 className="font-display text-[2rem] font-semibold leading-tight sm:text-6xl">
            Bring manze lakaz to your table today.
          </h2>
          <p className="mt-5 text-[0.95rem] leading-7 text-ivory/74 sm:text-lg sm:leading-8">
            Whether it is farata for lunch, breakfast for the family, or sweets for the weekend, we will prepare it with care.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <button type="button" onClick={onOpenOrder} className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-curry px-6 py-4 font-black text-brown transition hover:-translate-y-1 hover:bg-[#ffc4dc] sm:w-auto sm:px-7">
              <WhatsAppIcon size={18} /> Order Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function OrderDrawer({ open, orderItems, onClose, onIncrementItem, onDecrementItem, onSetItemQuantity, onClearOrder }) {
  const [details, setDetails] = useState({
    name: '',
    orderType: 'pickup',
    time: '',
    area: '',
    note: '',
  });

  const lines = getOrderLines(orderItems);
  const orderCount = getOrderCount(orderItems);
  const whatsappOrderHref = `${whatsappHref}?text=${encodeURIComponent(buildWhatsAppMessage(orderItems, details))}`;

  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[70] bg-brown/55 px-3 py-4 backdrop-blur-sm sm:px-6" role="dialog" aria-modal="true" aria-label="Review WhatsApp order">
      <div className="mx-auto flex h-full max-w-2xl items-end sm:items-center">
        <div className="max-h-[92svh] w-full overflow-y-auto rounded-[1.2rem] bg-ivory p-4 text-brown shadow-2xl sm:rounded-[1.6rem] sm:p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-terracotta">WhatsApp Order</p>
              <h2 className="mt-1 font-display text-3xl font-semibold leading-tight">Review your order</h2>
            </div>
            <button
              type="button"
              aria-label="Close order review"
              onClick={onClose}
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-cocoa/12 bg-white text-brown"
            >
              <X size={18} />
            </button>
          </div>

          <div className="mt-5 rounded-[1rem] border border-cocoa/10 bg-white p-3">
            {lines.length ? (
              <div className="grid gap-2">
                {lines.map((item) => (
                  <div key={item.name} className="grid gap-3 rounded-xl bg-cream/70 p-3 min-[420px]:grid-cols-[1fr_auto] min-[420px]:items-center">
                    <div>
                      <p className="font-bold leading-5">{item.name}</p>
                      <p className="mt-1 text-xs font-black text-terracotta">{item.price}</p>
                    </div>
                    <QuantityControl
                      name={item.name}
                      quantity={item.quantity}
                      onIncrementItem={onIncrementItem}
                      onDecrementItem={onDecrementItem}
                      onSetItemQuantity={onSetItemQuantity}
                      variant="light"
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="rounded-xl bg-cream/80 p-4 text-sm leading-6 text-cocoa">
                No dishes selected yet. Add items from the menu, or send a general enquiry on WhatsApp.
              </div>
            )}
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <label className="grid gap-1.5 text-sm font-bold">
              Your name
              <input
                value={details.name}
                onChange={(event) => setDetails((value) => ({ ...value, name: event.target.value }))}
                placeholder="Name"
                className="min-h-12 rounded-xl border border-cocoa/12 bg-white px-4 text-sm font-semibold outline-none focus:border-terracotta"
              />
            </label>
            <label className="grid gap-1.5 text-sm font-bold">
              Preferred time
              <input
                value={details.time}
                onChange={(event) => setDetails((value) => ({ ...value, time: event.target.value }))}
                placeholder="Today 18:00"
                className="min-h-12 rounded-xl border border-cocoa/12 bg-white px-4 text-sm font-semibold outline-none focus:border-terracotta"
              />
            </label>
            <div className="grid gap-1.5 text-sm font-bold">
              Order type
              <div className="grid grid-cols-2 gap-2 rounded-xl bg-white p-1">
                {[
                  ['pickup', 'Pickup'],
                  ['delivery', 'Delivery'],
                ].map(([value, label]) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setDetails((detailsValue) => ({ ...detailsValue, orderType: value }))}
                    className={`min-h-10 rounded-lg text-sm font-black transition ${details.orderType === value ? 'bg-brown text-ivory' : 'text-cocoa hover:bg-cream'}`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
            <label className="grid gap-1.5 text-sm font-bold">
              Area
              <input
                value={details.area}
                onChange={(event) => setDetails((value) => ({ ...value, area: event.target.value }))}
                placeholder="Vacoas / delivery area"
                className="min-h-12 rounded-xl border border-cocoa/12 bg-white px-4 text-sm font-semibold outline-none focus:border-terracotta"
              />
            </label>
            <label className="grid gap-1.5 text-sm font-bold sm:col-span-2">
              Notes
              <textarea
                value={details.note}
                onChange={(event) => setDetails((value) => ({ ...value, note: event.target.value }))}
                placeholder="Spice level, allergies, flavours, or special request"
                rows={3}
                className="resize-none rounded-xl border border-cocoa/12 bg-white px-4 py-3 text-sm font-semibold outline-none focus:border-terracotta"
              />
            </label>
          </div>

          <div className="mt-5 grid gap-2 sm:grid-cols-[1fr_auto]">
            <a
              href={whatsappOrderHref}
              className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-curry px-5 py-3 text-sm font-black text-brown transition hover:-translate-y-0.5 hover:bg-[#ffc4dc]"
            >
              <WhatsAppIcon size={18} /> Send WhatsApp Order
            </a>
            {orderCount > 0 && (
              <button
                type="button"
                onClick={onClearOrder}
                className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full border border-cocoa/12 bg-white px-5 py-3 text-sm font-black text-cocoa transition hover:bg-cream"
              >
                <Trash2 size={17} /> Clear
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileOrderBar({ orderCount, onOpenOrder }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-brown/10 bg-ivory/96 px-2.5 pb-[calc(0.7rem+env(safe-area-inset-bottom))] pt-2.5 shadow-[0_-14px_40px_rgba(58,58,58,0.12)] backdrop-blur md:hidden">
      <div className="mx-auto grid max-w-md grid-cols-[0.9fr_0.9fr_1.2fr] gap-2">
        <a href="#menu" className="inline-flex min-h-11 min-w-0 items-center justify-center gap-1 rounded-full border border-cocoa/12 bg-white px-2 text-xs font-black text-brown">
          <ArrowRight size={16} /> Menu
        </a>
        <a href={phoneHref} className="inline-flex min-h-11 min-w-0 items-center justify-center gap-1 rounded-full border border-cocoa/12 bg-white px-2 text-xs font-black text-brown">
          <Phone size={17} /> Call
        </a>
        <button
          type="button"
          onClick={onOpenOrder}
          className="inline-flex min-h-11 min-w-0 items-center justify-center gap-1 rounded-full bg-curry px-2 text-xs font-black text-brown"
        >
          {orderCount ? <ShoppingBag size={16} /> : <WhatsAppIcon size={17} />}
          {orderCount ? `${orderCount} item${orderCount === 1 ? '' : 's'}` : 'Order'}
        </button>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer id="contact" className="bg-[#2b2b2b] px-5 py-14 text-ivory sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={logoSrc}
              alt="Curry Worry logo"
              className="h-12 w-12 shrink-0 rounded-full object-cover ring-2 ring-curry/70"
            />
            <div>
              <p className="font-display text-2xl font-semibold">Curry Worry</p>
              <p className="text-sm text-ivory/58">Homemade Mauritian Food</p>
            </div>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-7 text-ivory/62">
            Freshly prepared Mauritian comfort food for order, takeaway, and local delivery.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-curry">Order Hours</h3>
          <p className="mt-4 flex gap-2 text-sm leading-7 text-ivory/68"><Clock size={17} className="mt-1 shrink-0" /> Mon-Sat: 08:00-20:00</p>
          <p className="text-sm leading-7 text-ivory/68">Sunday orders by advance request</p>
        </div>
        <div>
          <h3 className="font-bold text-curry">Pickup Area</h3>
          <p className="mt-4 flex gap-2 text-sm leading-7 text-ivory/68"><MapPin size={17} className="mt-1 shrink-0" /> Vacoas, Mauritius</p>
          <a href={phoneHref} className="mt-2 flex gap-2 text-sm leading-7 text-ivory/68 transition hover:text-curry"><Phone size={17} className="mt-1 shrink-0" /> {phoneDisplay}</a>
          <a href={emailHref} className="mt-2 flex gap-2 text-sm leading-7 text-ivory/68 transition hover:text-curry"><Mail size={17} className="mt-1 shrink-0" /> curry.ate.worry@gmail.com</a>
        </div>
        <div>
          <h3 className="font-bold text-curry">Follow</h3>
          <a href={whatsappHref} className="mt-4 flex items-center gap-2 text-sm text-ivory/68 transition hover:text-curry">
            <WhatsAppIcon size={18} /> WhatsApp orders
          </a>
          <a href={facebookHref} className="mt-3 flex items-center gap-2 text-sm text-ivory/68 transition hover:text-curry">
            <Share2 size={18} /> Curry Worry
          </a>
          <p className="mt-8 flex items-center gap-2 text-xs text-ivory/45"><CalendarCheck size={15} /> Advance orders recommended.</p>
        </div>
      </div>
    </footer>
  );
}

function App() {
  useReveal();
  const [orderItems, setOrderItems] = useState({});
  const [orderOpen, setOrderOpen] = useState(false);
  const orderCount = getOrderCount(orderItems);

  const addItem = (item) => {
    setOrderItems((current) => ({
      ...current,
      [item.name]: {
        ...item,
        quantity: (current[item.name]?.quantity || 0) + 1,
      },
    }));
  };

  const incrementItem = (name) => {
    setOrderItems((current) => {
      const item = current[name];
      if (!item) {
        return current;
      }

      return {
        ...current,
        [name]: {
          ...item,
          quantity: item.quantity + 1,
        },
      };
    });
  };

  const decrementItem = (name) => {
    setOrderItems((current) => {
      const item = current[name];
      if (!item) {
        return current;
      }

      if (item.quantity <= 1) {
        const next = { ...current };
        delete next[name];
        return next;
      }

      return {
        ...current,
        [name]: {
          ...item,
          quantity: item.quantity - 1,
        },
      };
    });
  };

  const setItemQuantity = (name, value) => {
    setOrderItems((current) => {
      const item = current[name];
      if (!item || value === '') {
        return current;
      }

      const quantity = Math.max(0, Math.min(999, Number.parseInt(value, 10) || 0));
      if (quantity <= 0) {
        const next = { ...current };
        delete next[name];
        return next;
      }

      return {
        ...current,
        [name]: {
          ...item,
          quantity,
        },
      };
    });
  };

  return (
    <>
      <Navbar onOpenOrder={() => setOrderOpen(true)} />
      <main>
        <Hero onOpenOrder={() => setOrderOpen(true)} />
        <FeaturedDishes />
        <MenuCategory
          orderItems={orderItems}
          onAddItem={addItem}
          onIncrementItem={incrementItem}
          onDecrementItem={decrementItem}
          onSetItemQuantity={setItemQuantity}
          onOpenOrder={() => setOrderOpen(true)}
        />
        <BreakfastSection />
        <DessertGrid />
        <StorySection />
        <OrderSteps onOpenOrder={() => setOrderOpen(true)} />
        <Testimonials />
        <CTASection onOpenOrder={() => setOrderOpen(true)} />
      </main>
      <Footer />
      <MobileOrderBar orderCount={orderCount} onOpenOrder={() => setOrderOpen(true)} />
      <OrderDrawer
        open={orderOpen}
        orderItems={orderItems}
        onClose={() => setOrderOpen(false)}
        onIncrementItem={incrementItem}
        onDecrementItem={decrementItem}
        onSetItemQuantity={setItemQuantity}
        onClearOrder={() => setOrderItems({})}
      />
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
