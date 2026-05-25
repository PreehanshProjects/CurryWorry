import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
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

// ... (rest of imports unchanged)

function Lightbox({ images, selectedIndex, onClose, onPrev, onNext }) {
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedIndex, onClose, onPrev, onNext]);

  if (selectedIndex === null) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-brown/95 backdrop-blur-md transition-opacity duration-300 lightbox-overlay"
      role="dialog"
      aria-modal="true"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-20 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-ivory transition hover:bg-white/20 active:scale-90"
        aria-label="Close fullscreen view"
      >
        <X size={24} />
      </button>

      <div className="relative flex h-full w-full items-center justify-center px-4 py-20 sm:px-12 lightbox-content">
        <button
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="absolute left-4 z-10 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-ivory transition hover:bg-white/20 active:scale-90 sm:left-8 sm:h-16 sm:w-16"
          aria-label="Previous image"
        >
          <ChevronLeft size={32} />
        </button>

        <img
          src={images[selectedIndex]}
          key={images[selectedIndex]}
          alt={`Gallery image ${selectedIndex + 1}`}
          className="max-h-full max-w-full rounded-xl object-contain shadow-2xl transition-transform duration-500"
        />

        <button
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="absolute right-4 z-10 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-ivory transition hover:bg-white/20 active:scale-90 sm:right-8 sm:h-16 sm:w-16"
          aria-label="Next image"
        >
          <ChevronRight size={32} />
        </button>
      </div>

      <div className="absolute bottom-8 text-sm font-semibold text-ivory/60">
        {selectedIndex + 1} / {images.length}
      </div>
    </div>
  );
}
import './styles.css';

const phoneDisplay = '+230 5756 3134';
const phoneHref = 'tel:+23057563134';
const whatsappHref = 'https://wa.me/23057563134';
const emailHref = 'mailto:curry.ate.worry@gmail.com';
const facebookHref = 'https://www.facebook.com/search/top?q=Curry%20Worry';
const logoSrc = '/assets/optimized/curry-worry-logo.png';

const navItems = [
  ['Menu', '#menu'],
  ['Breakfast', '#breakfast'],
  ['Gallery', '#gallery'],
  ['Desserts', '#desserts'],
  ['Order Info', '#order'],
  ['Contact', '#contact'],
];

const quickOrderItems = ['Farata', 'Cari Saumon', 'Butter Chicken', 'Touffe', 'Sweets'];

const spiceLevels = ['Normal', 'A little spicy', 'Very spicy'];

const pickupMinimum = 150;
const homeDeliveryMinimum = 400;

const deliveryLocations = [
  { id: 'vacoas', name: 'Vacoas', fee: 25, zone: 'Pickup point', type: 'pickup' },
  { id: 'soflo', name: "So'Flo", fee: 25, zone: 'Pickup point', type: 'pickup' },
  { id: 'st-paul', name: 'St Paul', fee: 25, zone: 'Pickup point', type: 'pickup' },
  { id: 'curepipe', name: 'Curepipe', fee: 50, zone: 'Pickup point', type: 'pickup' },
  { id: 'phoenix-mall', name: 'Phoenix Mall', fee: 50, zone: 'Pickup point', type: 'pickup' },
  { id: 'ebene', name: 'Ebene', fee: 75, zone: 'Pickup point', type: 'pickup' },
  { id: 'trianon', name: 'Trianon', fee: 75, zone: 'Pickup point', type: 'pickup' },
  { id: 'tribeca', name: 'Tribeca', fee: 75, zone: 'Pickup point', type: 'pickup' },
  { id: 'home-vacoas', name: 'Vacoas', fee: 75, zone: 'Home delivery', type: 'home' },
  { id: 'home-st-paul', name: 'St Paul', fee: 75, zone: 'Home delivery', type: 'home' },
  { id: 'home-curepipe', name: 'Curepipe', fee: 100, zone: 'Home delivery', type: 'home' },
  { id: 'home-phoenix', name: 'Phoenix', fee: 100, zone: 'Home delivery', type: 'home' },
  { id: 'home-bonne-terre', name: 'Bonne Terre', fee: 100, zone: 'Home delivery', type: 'home' },
  { id: 'home-la-marie', name: 'La Marie', fee: 100, zone: 'Home delivery', type: 'home' },
  { id: 'home-henrietta', name: 'Henrietta', fee: 100, zone: 'Home delivery', type: 'home' },
  { id: 'home-quatre-bornes', name: 'Quatre Bornes', fee: 125, zone: 'Home delivery', type: 'home' },
  { id: 'home-solferino', name: 'Solferino', fee: 125, zone: 'Home delivery', type: 'home' },
  { id: 'home-st-pierre', name: 'St Pierre', fee: 175, zone: 'Home delivery', type: 'home' },
];

const timeWindows = [
  ['lunch', 'Lunch', '11:30 AM - 1:30 PM'],
  ['evening', 'Evening', '5:30 PM - 7:30 PM'],
  ['custom', 'Custom time', 'Confirm exact time'],
];

const galleryThumbModules = import.meta.glob('./assets/gallery-thumbs/*.{jpg,jpeg,webp}', { eager: true });
const galleryItems = Object.values(galleryThumbModules).map((module) => ({
  full: module.default,
  thumb: module.default,
}));
const galleryFullImages = galleryItems.map((item) => item.full);

const featuredDishes = [
  {
    name: 'Farata avec Cari Saumon',
    badge: 'Most ordered',
    spice: 'Medium spice',
    image: '/assets/optimized/farata-cari-saumon.png',
    description: 'Soft handmade farata served with rich cari saumon, a proper homemade finish.',
  },
  {
    name: 'Butter Chicken',
    badge: 'Family favorite',
    spice: 'Warm spice',
    image: '/assets/optimized/cari-poule-masala.jpg',
    description: 'Smooth, rich, and comforting — a family favorite for any occasion.',
  },
  {
    name: 'Giromon Touffe',
    badge: 'Vegetarian',
    spice: 'Gentle',
    image: '/assets/optimized/giromon-touffe.jpg',
    description: 'Pumpkin softened with onion, herbs, and Mauritian seasoning. Simple, sweet, and comforting.',
  },
];

const menuSections = [
  {
    title: 'Breakfast',
    note: 'Available on Fridays and weekends only.',
    items: [
      ['Pancakes', 'From Rs 75', 'Nature, chocolat, vanille, amande, or fruits rouges', false],
      ['Muffins', 'From Rs 45', 'Chocolat, amande, or vanille', false],
      ['Toast', 'From Rs 60', 'Simple breakfast option for takeaway', true],
      ['Omelettes', 'From Rs 85', 'Confirm fillings and quantity', false],
      ['Smoothies & Milkshakes', 'From Rs 95', 'Vanille, chocolat, amande, and daily options', true],
    ],
  },
  {
    title: 'Breads',
    note: 'All packs freshly made. Best paired with curry or chutney.',
    items: [
      ['Plain Farata', 'Rs 65 (pack of 6)', 'Soft handmade farata', true],
      ['Aloo Farata', 'Rs 100 (pack of 6)', 'Stuffed with spiced potato', true],
      ['Garlic Cheese Farata', 'Rs 125 (pack of 6)', 'Garlic and cheese stuffed', false],
      ['Puri', 'Rs 75 (pack of 10)', 'Light and crispy', true],
    ],
  },
  {
    title: 'Curries',
    note: 'Cooked fresh. All prices are for 2 pax.',
    items: [
      ['Cari Saumon', 'Rs 160', 'Rich salmon curry', false],
      ['Fish Vindaloo', 'Rs 230', 'Tangy and spiced', false],
      ['Fish Curry & Eggplant', 'Rs 275', 'Fish with aubergine', false],
      ['Chicken Curry with Coconut Milk', 'Rs 275', 'Creamy coconut base', false],
      ['Butter Chicken', 'Rs 300', 'Smooth and rich', false],
      ['Lamb Curry, Potatoes & Green Peas', 'Rs 350', 'Hearty and filling', false],
    ],
  },
  {
    title: 'Chutney',
    note: 'Traditional accompaniments.',
    items: [
      ['Bomli Chutney', 'Rs 50', 'Classic Mauritian chutney', false],
      ['Cevrette Chutney', 'Rs 50', 'Dried shrimp chutney', false],
    ],
  },
  {
    title: 'Vegetables & Touffe',
    note: 'Homemade vegetable sides. All prices are for 2 pax.',
    items: [
      ['Giromon Touffe', 'Rs 100', 'Mild and sweet', true],
      ['Brede Touffe', 'Rs 80', 'Daily availability', true],
      ['Sousou Touffe', 'Rs 75', 'Daily availability', true],
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
    image: '/assets/optimized/sago-appalam-ai.jpg',
    text: 'Sweet sago with the salty crunch of appalam, served the Mauritian-Tamil way.',
  },
  {
    name: 'Poudine Mais',
    image: '/assets/optimized/poudine-mais-ai.jpg',
    text: 'Simple, golden, and comforting in the way homemade desserts should be.',
  },
  {
    name: 'Gato Patate',
    image: '/assets/optimized/gato-patate.jpg',
    text: 'Traditional sweet potato cakes with a soft, familiar heart.',
  },
];

const orderSteps = [
  ['Choose dishes', 'Pick your dishes, quantities, and mention if you need individual or family portions.'],
  ['Message details', 'Send your pickup point, time window, and any allergy or spice preference.'],
  ['Confirm final total', 'Portion size, delivery fee, payment method, and final price are confirmed on WhatsApp before cooking.'],
  ['Collect warm', 'Pickup in Vacoas or meet at a selected delivery point.'],
];

const orderFacts = [
  ['In-store pickup', 'Grannum Street, Vacoas — free, no minimum'],
  ['Hours', 'In-store: Mon-Sat. Deliveries: Fri-Sun'],
  ['Pickup points', 'Rs 25–75 depending on location, minimum order Rs 150'],
  ['Home delivery', 'Rs 75–175 depending on area, minimum order Rs 400'],
  ['Payment', `Juice on ${phoneDisplay} or cash on delivery`],
  ['Final total', 'Confirmed on WhatsApp before cooking'],
];

const orderConfidenceNotes = [
  ['Portions', 'All curry and touffe prices are for 2 pax. Breads are sold by pack.'],
  ['Minimums', 'Farata, roti, and puri are best ordered from 6 pieces; sweets and trays can be confirmed by request.'],
  ['Delivery', 'In-store pickup at Grannum Street, Vacoas is free with no minimum. Pickup points from Rs 25 (min Rs 150). Home delivery from Rs 75 (min Rs 400). Deliveries available Fri-Sun only.'],
];

const paymentOptions = [
  ['juice', 'Juice', `Pay by Juice on ${phoneDisplay}`],
  ['cash', 'Cash', 'Pay cash on delivery or pickup'],
];

function getOrderCount(orderItems) {
  return Object.values(orderItems).reduce((total, item) => total + item.quantity, 0);
}

function getOrderLines(orderItems) {
  return Object.values(orderItems).filter((item) => item.quantity > 0);
}

function getGuidePrice(price) {
  const match = price.match(/Rs\s*(\d+)/i);
  return match ? Number.parseInt(match[1], 10) : 0;
}

function getEstimatedSubtotal(orderItems) {
  return getOrderLines(orderItems).reduce((total, item) => total + getGuidePrice(item.price) * item.quantity, 0);
}

function formatPreferredTime(time) {
  if (!time) {
    return '[Preferred time]';
  }

  const [hourText, minuteText] = time.split(':');
  const hour = Number.parseInt(hourText, 10);
  const minute = minuteText || '00';

  if (Number.isNaN(hour)) {
    return time;
  }

  const period = hour >= 12 ? 'PM' : 'AM';
  const displayHour = hour % 12 || 12;

  return `${displayHour}:${minute} ${period}`;
}

function getSelectedDeliveryLocation(locationId) {
  return deliveryLocations.find((location) => location.id === locationId) || deliveryLocations[0];
}

function getSelectedTimeWindow(windowId) {
  return timeWindows.find(([value]) => value === windowId) || timeWindows[0];
}

function formatTimeChoice(details) {
  const [, label, range] = getSelectedTimeWindow(details.timeWindow);

  if (details.timeWindow === 'custom') {
    return `Custom time: ${formatPreferredTime(details.time.trim())}`;
  }

  return `${label}, ${range}`;
}

function buildWhatsAppMessage(orderItems, details) {
  const lines = getOrderLines(orderItems);
  const itemText = lines.length
    ? lines.map((item) => `- ${item.quantity} x ${item.name} (${item.price})${item.spice ? ` [${item.spice}]` : ''}`).join('\n')
    : '- I would like to order from the menu';

  const customerName = details.name.trim() || '[Your name]';
  const orderType = details.orderType === 'delivery' ? 'Delivery' : 'Pickup';
  const preferredTime = formatTimeChoice(details);
  const deliveryLocation = getSelectedDeliveryLocation(details.deliveryLocation);
  const deliveryPlace = details.orderType === 'delivery'
    ? deliveryLocation.name
    : 'Vacoas pickup';
  const deliveryFee = details.orderType === 'delivery'
    ? `Rs ${deliveryLocation.fee}`
    : 'Free';
  const area = details.orderType === 'delivery' && deliveryLocation.type === 'home'
    ? (details.area.trim() || '[Delivery address / area]')
    : (details.area.trim() || 'No extra area note');
  const note = details.note.trim() || 'No special note';
  const paymentMethod = details.paymentMethod === 'cash'
    ? 'Cash on delivery / pickup'
    : `Juice on ${phoneDisplay}`;

  return [
    'Hello Curry Worry, I would like to place an order.',
    '',
    'Items:',
    itemText,
    '',
    'Order details:',
    `- Name: ${customerName}`,
    `- Type: ${orderType}`,
    `- Time window: ${preferredTime}`,
    `- Delivery place: ${deliveryPlace}`,
    `- Delivery fee: ${deliveryFee}`,
    `- Area note: ${area}`,
    `- Payment: ${paymentMethod}`,
    `- Notes: ${note}`,
    '',
    'Please confirm portion size, availability, delivery details, payment method, and final total before preparing. Thank you.',
  ].join('\n');
}

function QuantityControl({ name, quantity, onIncrementItem, onDecrementItem, onSetItemQuantity, variant = 'dark' }) {
  const inputClass = variant === 'light'
    ? 'h-10 w-12 rounded-full border-0 bg-transparent text-center text-sm font-black text-brown outline-none transition focus:bg-cream'
    : 'h-10 w-12 rounded-full border-0 bg-transparent text-center text-sm font-black text-curry outline-none transition focus:bg-white/12';
  const decrementClass = variant === 'light'
    ? 'grid h-10 w-10 place-items-center rounded-full text-brown transition hover:bg-cream active:scale-90 tap-highlight-none'
    : 'grid h-10 w-10 place-items-center rounded-full text-ivory transition hover:bg-white/12 active:scale-90 tap-highlight-none';
  const incrementClass = 'grid h-10 w-10 place-items-center rounded-full bg-curry text-brown transition hover:bg-[#ffc4dc] active:scale-90 tap-highlight-none';

  return (
    <div className={`flex w-fit items-center rounded-full p-1.5 ${variant === 'light' ? 'border border-cocoa/10 bg-white shadow-sm' : 'border border-white/12 bg-white/[0.08]'}`}>
      <button
        type="button"
        aria-label={`Remove one ${name}`}
        onClick={() => onDecrementItem(name)}
        className={decrementClass}
      >
        <Minus size={16} />
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
        <Plus size={16} />
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

    const observeItems = () => {
      const items = document.querySelectorAll('[data-reveal]:not(.is-visible)');
      items.forEach((item) => observer.observe(item));
    };

    observeItems();

    const mutationObserver = new MutationObserver(() => {
      observeItems();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
}

function Navbar({ onOpenOrder, isBumping }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-[1.4rem] border border-white/18 bg-[#3a3a3a]/92 px-3 py-2 text-ivory shadow-[0_18px_60px_rgba(58,58,58,0.25)] backdrop-blur-2xl sm:rounded-full sm:px-5 sm:py-2.5">
        <a href="#home" className="flex items-center gap-3 transition active:scale-95 tap-highlight-none">
          <img
            src={logoSrc}
            alt="Curry Worry logo"
            className="h-11 w-11 shrink-0 rounded-full object-cover ring-2 ring-curry/70 shadow-[0_10px_30px_rgba(255,179,209,0.3)] sm:h-14 sm:w-14"
          />
          <span className="min-w-0">
            <span className="block font-display text-lg font-semibold leading-none">Curry Worry</span>
            <span className="block truncate text-[0.65rem] text-ivory/60 max-[380px]:hidden">Homemade Moris Food</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map(([label, href]) => (
            <a key={label} href={href} className="text-sm font-semibold text-ivory/70 transition hover:text-curry active:scale-95">
              {label}
            </a>
          ))}
        </div>

        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-full bg-curry px-6 py-3 text-sm font-black text-brown transition hover:bg-[#ffc4dc] active:scale-95 tap-highlight-none lg:inline-flex"
        >
          <WhatsAppIcon size={17} /> WhatsApp
        </a>

        <button
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
          className="grid h-11 w-11 place-items-center rounded-full border border-white/14 text-ivory transition active:scale-90 tap-highlight-none lg:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="mx-auto mt-3 max-w-7xl overflow-hidden rounded-[2rem] border border-brown/10 bg-ivory p-2 shadow-2xl lg:hidden">
          <div className="grid gap-1">
            {navItems.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-5 py-4 font-semibold text-brown transition hover:bg-cream active:scale-[0.98] tap-highlight-none"
              >
                {label}
              </a>
            ))}
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-1 flex items-center justify-center gap-2.5 rounded-2xl bg-terracotta px-5 py-4 font-black text-ivory transition active:scale-[0.98] tap-highlight-none"
            >
              <WhatsAppIcon size={20} /> WhatsApp
            </a>
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
      {text && <p className={`mt-4 text-sm leading-7 sm:mt-5 sm:text-lg sm:leading-8 ${light ? 'text-ivory/72' : 'text-cocoa/76'}`}>{text}</p>}
    </div>
  );
}

function Hero({ onOpenOrder }) {
  return (
    <section id="home" className="relative overflow-hidden bg-brown text-ivory sm:min-h-[100svh]">
      <img
        src="https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=1800&q=88"
        alt="Homemade Mauritian food with warm curries, breads, and chutneys"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(58,58,58,0.98)_0%,rgba(58,58,58,0.88)_42%,rgba(58,58,58,0.58)_100%)] sm:bg-[linear-gradient(90deg,rgba(58,58,58,0.96),rgba(58,58,58,0.72)_48%,rgba(58,58,58,0.24))]" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-cream to-transparent" />

      <div className="relative mx-auto flex max-w-7xl items-center px-5 pb-14 pt-32 sm:min-h-[100svh] sm:px-6 sm:pb-20 sm:pt-32 lg:px-8">
        <div data-reveal className="w-full max-w-3xl">
          <div className="mb-5 inline-flex max-w-full items-center gap-3 rounded-full border border-white/16 bg-white/10 px-4 py-2.5 text-xs text-ivory/84 backdrop-blur-md sm:mb-6 sm:px-5 sm:text-sm">
            <Leaf size={16} className="text-leaf" />
            <span className="leading-tight">Homemade on order, pickup and local delivery</span>
          </div>
          <h1 className="font-display text-[clamp(2.8rem,16vw,6rem)] font-semibold leading-[0.96] text-ivory lg:text-8xl">
            Curry Worry
          </h1>
          <p className="mt-4 max-w-[18ch] font-display text-[clamp(1.65rem,8vw,3.5rem)] font-semibold leading-[1.02] text-curry sm:mt-5 sm:max-w-none sm:leading-tight">
            Manze lakaz Moris, ready by preorder.
          </p>
          <p className="mt-6 max-w-2xl text-[0.95rem] leading-8 text-ivory/78 sm:mt-8 sm:text-xl sm:leading-9">
            Farata, rougaille, touffe, sweets, breakfast, and family-style Mauritian comfort food cooked fresh in small
            batches. Warm, generous, and made to taste like home.
          </p>
          <div className="mt-8 grid gap-3 sm:mt-10 sm:flex sm:flex-row sm:gap-4">
            <button type="button" onClick={onOpenOrder} className="group inline-flex min-h-13 w-full items-center justify-center gap-2.5 rounded-full bg-curry px-6 py-3.5 text-sm font-black leading-none text-brown transition hover:bg-[#ffc4dc] active:scale-95 tap-highlight-none shadow-lg shadow-curry/10 sm:min-h-14 sm:w-auto sm:px-9 sm:py-4 sm:text-base">
              <ShoppingBag size={20} className="shrink-0" />
              <span>Start Order</span>
            </button>
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="group inline-flex min-h-13 w-full items-center justify-center gap-2.5 rounded-full border border-white/18 bg-white/10 px-6 py-3.5 text-sm font-bold text-ivory backdrop-blur-md transition hover:bg-white/16 active:scale-95 tap-highlight-none sm:min-h-14 sm:w-auto sm:px-8 sm:py-4 sm:text-base">
              <WhatsAppIcon size={20} className="shrink-0 transition group-hover:rotate-6" />
              <span>WhatsApp</span>
            </a>
            <a href={phoneHref} className="hidden min-h-14 w-auto items-center justify-center gap-2.5 rounded-full border border-white/18 bg-white/10 px-8 py-4 font-bold text-ivory backdrop-blur-md transition hover:bg-white/16 active:scale-95 tap-highlight-none sm:inline-flex">
              <Phone size={18} className="shrink-0" />
              <span>Call {phoneDisplay}</span>
            </a>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-2.5 sm:hidden">
            {quickOrderItems.map((item) => (
              <a key={item} href="#menu" className="rounded-2xl border border-white/16 bg-white/8 px-2 py-3 text-center text-[0.72rem] font-black uppercase tracking-wider text-ivory/80 backdrop-blur-md transition active:scale-95 tap-highlight-none">
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
              src="/assets/optimized/farata-rougaille-touni.jpg"
              alt="Fresh homemade farata with rougaille touni"
              className="h-24 w-24 rounded-[1.4rem] object-cover"
            />
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-curry">Today from the kitchen</p>
              <h3 className="mt-2 font-display text-2xl font-semibold">Farata</h3>
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
      className="group overflow-hidden rounded-[1.6rem] border border-cocoa/10 bg-ivory shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-warm"
    >
      <div className="relative overflow-hidden">
        <img src={dish.image} alt={dish.name} loading="lazy" className="h-64 w-full object-cover transition duration-700 group-hover:scale-105 sm:h-80" />
        <span className="absolute left-5 top-5 rounded-full bg-curry px-4 py-1.5 text-[0.65rem] font-black uppercase tracking-[0.15em] text-brown shadow-lg">
          {dish.badge}
        </span>
      </div>
      <div className="p-7 sm:p-8">
        <div className="grid gap-4 sm:flex sm:items-start sm:justify-between sm:gap-6">
          <h3 className="font-display text-2xl font-semibold text-brown sm:text-3xl">{dish.name}</h3>
          <span className="w-fit shrink-0 rounded-full bg-leaf/15 px-3.5 py-1.5 text-[0.65rem] font-black uppercase tracking-wider text-leaf">{dish.spice}</span>
        </div>
        {dish.price && <p className="mt-4 text-sm font-black text-terracotta sm:text-base">{dish.price}</p>}
        <p className="mt-4 text-sm leading-8 text-cocoa/74 sm:text-base">{dish.description}</p>
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

function MenuCategory({ orderItems, onAddItem, onIncrementItem, onDecrementItem, onSetItemQuantity, onSetItemSpice, onOpenOrder }) {
  const orderCount = getOrderCount(orderItems);

  const filteredSections = menuSections;

  return (
    <section id="menu" className="section warm-texture bg-brown text-ivory">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeader
          light
          eyebrow="Menu"
          title="Choose your dishes, we handle the rest."
          text="Curry and touffe prices are for 2 pax. Final total confirmed on WhatsApp before we start cooking."
        />

        <div data-reveal className="mx-auto mt-10 max-w-4xl">
          <div className="flex items-center gap-4 overflow-x-auto pb-2 sm:justify-center">
            {[
              { step: '1', label: 'Choose', desc: 'Pick dishes & quantities', icon: <ShoppingBag size={18} /> },
              { step: '2', label: 'Confirm', desc: 'Time, place & payment', icon: <CalendarCheck size={18} /> },
              { step: '3', label: 'Done', desc: 'Price confirmed first', icon: <CheckCircle2 size={18} /> },
            ].map((item, i) => (
              <React.Fragment key={item.step}>
                {i > 0 && <div className="hidden h-px w-8 shrink-0 bg-ivory/20 sm:block" />}
                <div className="flex shrink-0 items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 sm:px-5 sm:py-4">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-curry/20 text-curry">
                    {item.icon}
                  </div>
                  <div>
                    <span className="block text-sm font-bold text-ivory">{item.label}</span>
                    <span className="block text-xs text-ivory/50">{item.desc}</span>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {orderConfidenceNotes.map(([label, text]) => (
              <div key={label} className="rounded-2xl border border-white/8 bg-white/[0.04] px-5 py-4">
                <span className="block text-[0.65rem] font-black uppercase tracking-widest text-curry/80">{label}</span>
                <span className="mt-2 block text-sm leading-6 text-ivory/60">{text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-7 grid gap-5 sm:mt-9 md:grid-cols-2 lg:grid-cols-3">
          {filteredSections.slice(0, 3).map((section) => (
            <article data-reveal key={section.title} className="rounded-[1.4rem] border border-white/10 bg-white/[0.07] p-5 backdrop-blur sm:p-7">
              <div className="border-b border-white/10 pb-5">
                <h3 className="font-display text-2xl font-semibold text-ivory sm:text-3xl">{section.title}</h3>
                <p className="mt-2 text-sm leading-6 text-ivory/62">{section.note}</p>
              </div>
              <ul className="divide-y divide-white/9">
                {section.items.map(([item, guide, detail]) => (
                  <li key={item} className="grid gap-2 py-4 sm:py-5">
                    <div className="flex items-start justify-between gap-3">
                      <span className="font-semibold leading-6 text-ivory">{item}</span>
                      <span className="w-fit shrink-0 rounded-full bg-[#A8BBA3]/15 px-3 py-1 text-xs font-black text-[#A8BBA3]">
                        {guide}
                      </span>
                    </div>
                    <div className="flex items-center justify-between gap-3">
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
                          className="inline-flex min-h-11 w-fit items-center justify-center gap-2 rounded-full border border-curry/25 bg-curry/12 px-5 py-2.5 text-xs font-black text-curry transition hover:bg-curry hover:text-brown active:scale-95 tap-highlight-none"
                        >
                          <Plus size={16} /> Add
                        </button>
                      )}
                    </div>
                    {section.title === 'Curries' && orderItems[item]?.quantity > 0 && (
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-[0.65rem] font-bold uppercase tracking-wider text-ivory/40">Spice:</span>
                        {spiceLevels.map((level) => (
                          <button
                            key={level}
                            type="button"
                            onClick={() => onSetItemSpice(item, level)}
                            className={`rounded-full px-3 py-1 text-[0.65rem] font-bold transition active:scale-95 tap-highlight-none ${orderItems[item]?.spice === level ? 'bg-terracotta text-ivory' : 'bg-white/10 text-ivory/50 hover:bg-white/15'}`}
                          >
                            {level}
                          </button>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="mt-5 grid gap-5 md:grid-cols-2 lg:max-w-4xl lg:mx-auto">
          {filteredSections.slice(3).map((section) => (
            <article data-reveal key={section.title} className="rounded-[1.4rem] border border-white/10 bg-white/[0.07] p-5 backdrop-blur sm:p-7">
              <div className="border-b border-white/10 pb-5">
                <h3 className="font-display text-2xl font-semibold text-ivory sm:text-3xl">{section.title}</h3>
                <p className="mt-2 text-sm leading-6 text-ivory/62">{section.note}</p>
              </div>
              <ul className="divide-y divide-white/9">
                {section.items.map(([item, guide, detail]) => (
                  <li key={item} className="grid gap-2 py-4 sm:py-5">
                    <div className="flex items-start justify-between gap-3">
                      <span className="font-semibold leading-6 text-ivory">{item}</span>
                      <span className="w-fit shrink-0 rounded-full bg-[#A8BBA3]/15 px-3 py-1 text-xs font-black text-[#A8BBA3]">
                        {guide}
                      </span>
                    </div>
                    <div className="flex items-center justify-between gap-3">
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
                          className="inline-flex min-h-11 w-fit items-center justify-center gap-2 rounded-full border border-curry/25 bg-curry/12 px-5 py-2.5 text-xs font-black text-curry transition hover:bg-curry hover:text-brown active:scale-95 tap-highlight-none"
                        >
                          <Plus size={16} /> Add
                        </button>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        
        {filteredSections.length === 0 && (
          <div className="mt-20 text-center">
            <p className="text-xl font-semibold text-ivory/40">No dishes found.</p>
          </div>
        )}

        <div data-reveal className="mt-8 flex flex-col items-center justify-between gap-5 rounded-[1.6rem] border border-curry/20 bg-curry/12 p-5 text-sm font-semibold leading-7 text-ivory/80 sm:flex-row sm:p-7">
          <span className="max-w-md">{orderCount ? `${orderCount} item${orderCount === 1 ? '' : 's'} selected. Review your order before sending it on WhatsApp.` : 'Ready to order? Add dishes from the menu, then send a prepared WhatsApp order.'}</span>
          <button
            type="button"
            onClick={onOpenOrder}
            className="inline-flex min-h-13 w-full items-center justify-center gap-2.5 rounded-full bg-curry px-6 py-3.5 text-sm font-black text-brown transition hover:bg-[#ffc4dc] active:scale-95 tap-highlight-none shadow-lg shadow-curry/10 sm:min-h-14 sm:w-auto sm:px-8 sm:py-4 sm:text-base"
          >
            <ShoppingBag size={20} /> {orderCount ? 'Review Order' : 'Start Order'}
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
            text="Breakfast is made for relaxed island mornings: pancakes, muffins, omelettes, smoothies, and milkshakes that feel simple, fresh, and homemade. Available on Fridays and weekends only."
          />
          <div data-reveal className="mt-10 overflow-hidden rounded-[2rem] shadow-warm">
            <img
              src="https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=1000&q=85"
              alt="Homemade pancakes and breakfast table"
              loading="lazy"
              className="h-72 w-full object-cover sm:h-[480px]"
            />
          </div>
        </div>
        <div className="grid content-center gap-5 sm:gap-6">
          {breakfastGroups.map((group) => (
            <div data-reveal key={group.title} className="rounded-[1.6rem] border border-cocoa/10 bg-ivory p-6 shadow-soft sm:p-8">
              <h3 className="font-display text-3xl font-semibold text-brown sm:text-4xl">{group.title}</h3>
              <p className="mt-3 text-sm leading-7 text-cocoa/65 sm:text-base">{group.note}</p>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {group.items.map((item) => (
                  <span key={item} className="rounded-full bg-curry/15 px-5 py-2.5 text-sm font-bold text-cocoa">
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

function GallerySection() {
  const [visibleCount, setVisibleCount] = useState(12);
  const [selectedIndex, setSelectedIndex] = useState(null);
  
  const hasMore = visibleCount < galleryItems.length;

  const openLightbox = (index) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);
  const nextImage = () => setSelectedIndex((prev) => (prev + 1) % galleryItems.length);
  const prevImage = () => setSelectedIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);

  return (
    <section id="gallery" className="section bg-ivory">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our Kitchen Gallery"
          title="A peek into our daily cooking."
          text="Freshly rolled farata, simmering curries, and the vibrant colors of homemade Mauritian food. Everything you see is made with care, just for you."
        />
        
        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 sm:gap-4">
          {galleryItems.slice(0, visibleCount).map((item, index) => (
            <div 
              key={item.full} 
              data-reveal 
              onClick={() => openLightbox(index)}
              className="group relative aspect-square cursor-pointer overflow-hidden rounded-2xl bg-cream shadow-sm transition-all duration-500 hover:z-10 hover:scale-[1.03] hover:shadow-xl"
              style={{ transitionDelay: `${(index % 5) * 100}ms` }}
            >
              <img 
                src={item.thumb} 
                alt={`Gallery image ${index + 1}`} 
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-brown/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="rounded-full bg-white/20 p-3 text-ivory backdrop-blur-md">
                  <Plus size={24} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {hasMore && (
          <div className="mt-12 flex justify-center">
            <button
              type="button"
              onClick={() => setVisibleCount(prev => prev + 15)}
              className="inline-flex min-h-13 items-center justify-center gap-2.5 rounded-full border border-cocoa/12 bg-white px-6 py-3.5 text-xs font-black text-brown transition hover:bg-cream active:scale-95 tap-highlight-none shadow-sm sm:min-h-14 sm:px-10 sm:py-4 sm:text-sm"
            >
              View More Photos
            </button>
          </div>
        )}
      </div>

      <Lightbox
        images={galleryFullImages}
        selectedIndex={selectedIndex}
        onClose={closeLightbox}
        onPrev={prevImage}
        onNext={nextImage}
      />
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
        <div className="mt-10 grid gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
          {desserts.map((item) => (
            <article data-reveal key={item.name} className="group overflow-hidden rounded-[1.6rem] bg-cream shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-warm">
              <div className="overflow-hidden">
                <img src={item.image} alt={item.name} loading="lazy" className="h-56 w-full object-cover transition duration-700 group-hover:scale-105 sm:h-64" />
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="font-display text-2xl font-semibold text-brown sm:text-3xl">{item.name}</h3>
                <p className="mt-4 text-sm leading-8 text-cocoa/72 sm:text-base">{item.text}</p>
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
            src="/assets/optimized/farata-rougaille-touni.jpg"
            alt="Fresh homemade farata with rougaille touni"
            loading="lazy"
            className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-warm sm:aspect-[4/5]"
          />
          <div className="mt-6 max-w-xs rounded-[2rem] bg-ivory p-6 shadow-2xl sm:absolute sm:-bottom-8 sm:left-8 sm:mt-0">
            <p className="font-display text-3xl font-semibold text-brown">Cooked on order</p>
            <p className="mt-2 text-sm leading-7 text-cocoa/72">Small batches, fresh ingredients, and no rushed shortcuts.</p>
          </div>
        </div>
        <div>
          <SectionHeader
            align="left"
            eyebrow="Made With Love"
            title="Food that comes from a real kitchen, not a production line."
            text="This is homemade Mauritian cooking for people who miss the comfort of manze lakaz. Spices are handled patiently, vegetables are prepared fresh, and each order is packed with the care you expect from family cooking."
          />
          <div data-reveal className="mt-10 grid gap-5 sm:grid-cols-2">
            {[
              ['Freshly prepared', 'Orders are planned and cooked in small batches so the food reaches you warm and full of flavour.'],
              ['Traditional recipes', 'Rougaille, touffe, masala, satini, and sweets made with the kind of taste Mauritians recognize.'],
            ].map(([title, text]) => (
              <div key={title} className="rounded-[1.8rem] border border-cocoa/10 bg-ivory p-7 shadow-soft">
                <h3 className="font-display text-2xl font-semibold text-brown">{title}</h3>
                <p className="mt-4 text-sm leading-8 text-cocoa/72">{text}</p>
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
          text={`Order through WhatsApp or phone, then confirm portions, timing, pickup-point delivery from Rs 75, payment by Juice on ${phoneDisplay} or cash, and final total before preparation.`}
        />
        <div className="mt-10 grid gap-5 sm:mt-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
          <div data-reveal className="rounded-[2rem] bg-brown p-7 text-ivory shadow-warm sm:p-10">
            <p className="font-display text-4xl font-semibold">Ready to order?</p>
            <p className="mt-4 text-[0.95rem] leading-8 text-ivory/68">Send your dish list, quantity, time window, and delivery option. In-store pickup at Grannum Street, Vacoas is free. Pickup points from Rs 25 (min Rs 150). Home delivery from Rs 75 (min Rs 400). Deliveries: Fri-Sun only.</p>
            <div className="mt-8 grid gap-4">
              <button type="button" onClick={onOpenOrder} className="inline-flex min-h-13 items-center justify-center gap-2.5 rounded-full bg-curry px-6 py-3.5 text-sm font-black text-brown transition hover:bg-[#ffc4dc] active:scale-95 tap-highlight-none shadow-lg shadow-curry/10 sm:min-h-14 sm:px-8 sm:py-4 sm:text-base">
                <ShoppingBag size={20} /> Start Order
              </button>
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-13 items-center justify-center gap-2.5 rounded-full border border-white/16 bg-white/10 px-6 py-3.5 text-sm font-bold text-ivory transition hover:bg-white/16 active:scale-95 tap-highlight-none sm:min-h-14 sm:px-8 sm:py-4 sm:text-base">
                <WhatsAppIcon size={20} /> WhatsApp
              </a>
              <a href={phoneHref} className="inline-flex min-h-13 items-center justify-center gap-2.5 rounded-full border border-white/16 bg-white/10 px-6 py-3.5 text-center text-sm font-bold text-ivory transition hover:bg-white/16 active:scale-95 tap-highlight-none sm:min-h-14 sm:px-8 sm:py-4 sm:text-base">
                <Phone size={19} className="shrink-0" /> Call {phoneDisplay}
              </a>
            </div>
            <div className="mt-8 grid gap-4 text-sm text-ivory/70">
              {orderFacts.map(([label, value]) => (
                <div key={label} className="flex flex-col gap-1 border-t border-white/10 pt-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                  <span className="font-black uppercase tracking-wider text-curry/80 text-[0.65rem]">{label}</span>
                  <span className="sm:text-right font-semibold text-ivory">{value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
          <div data-reveal className="rounded-[1.6rem] border border-cocoa/10 bg-cream p-7 shadow-soft sm:col-span-2 sm:p-8">
            <h3 className="font-display text-2xl font-semibold text-brown sm:text-3xl">Delivery options</h3>
            <p className="mt-4 text-sm leading-8 text-cocoa/72 sm:text-base">In-store pickup at Grannum Street, Vacoas is free with no minimum. Deliveries available Fri-Sun only.</p>
            <h4 className="mt-6 text-xs font-black uppercase tracking-widest text-cocoa/50">Pickup points — min Rs {pickupMinimum}</h4>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {deliveryLocations.filter((location) => location.type === 'pickup').map((location) => (
                <div key={location.id} className="flex items-center justify-between gap-4 rounded-2xl bg-ivory px-4 py-3 text-sm shadow-sm">
                  <span className="font-bold text-brown">{location.name}</span>
                  <span className="shrink-0 rounded-full bg-curry/30 px-3 py-1 text-xs font-black text-brown">Rs {location.fee}</span>
                </div>
              ))}
            </div>
            <h4 className="mt-6 text-xs font-black uppercase tracking-widest text-cocoa/50">Home delivery — min Rs {homeDeliveryMinimum}</h4>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {deliveryLocations.filter((location) => location.type === 'home').map((location) => (
                <div key={location.id} className="flex items-center justify-between gap-4 rounded-2xl bg-ivory px-4 py-3 text-sm shadow-sm">
                  <span className="font-bold text-brown">{location.name}</span>
                  <span className="shrink-0 rounded-full bg-curry/30 px-3 py-1 text-xs font-black text-brown">Rs {location.fee}</span>
                </div>
              ))}
            </div>
          </div>
          {orderSteps.map(([title, text], index) => (
            <div data-reveal key={title} className="rounded-[1.6rem] border border-cocoa/10 bg-cream p-7 shadow-soft sm:p-8">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-terracotta text-xl font-black text-ivory shadow-lg shadow-terracotta/20">
                {index + 1}
              </span>
              <h3 className="mt-7 font-display text-2xl font-semibold text-brown sm:text-3xl">{title}</h3>
              <p className="mt-4 text-sm leading-8 text-cocoa/72 sm:text-base">{text}</p>
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
        <div className="mt-10 grid gap-5 sm:mt-14 md:grid-cols-3 md:gap-6">
          {popularRequests.map((item) => (
            <article data-reveal key={item.name} className="rounded-[1.6rem] border border-cocoa/10 bg-ivory p-7 shadow-soft sm:p-9 transition-all hover:shadow-warm">
              <Quote className="text-terracotta/40" size={32} />
              <p className="mt-6 text-sm leading-8 text-cocoa/80 sm:text-base sm:leading-9">{item.text}</p>
              <div className="mt-8 flex items-center justify-between">
                <p className="font-black text-brown uppercase tracking-wider text-xs">{item.name}</p>
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
    <section className="px-5 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div data-reveal className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-brown px-6 py-16 text-center text-ivory shadow-[0_40px_120px_rgba(58,58,58,0.25)] sm:rounded-[3.5rem] sm:px-12 sm:py-24 lg:py-32">
        <img
          src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1600&q=85"
          alt="Warm spices used in Mauritian homemade cooking"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-brown/75" />
        <div className="relative mx-auto max-w-3xl">
          <p className="mb-4 text-[0.68rem] font-black uppercase tracking-[0.25em] text-curry sm:text-xs">Order Homemade</p>
          <h2 className="font-display text-[2.5rem] font-semibold leading-tight sm:text-7xl">
            Bring manze lakaz to your table today.
          </h2>
          <p className="mt-6 text-[0.95rem] leading-9 text-ivory/70 sm:text-xl sm:leading-10">
            Whether it is farata for lunch, breakfast for the family, or sweets for the weekend, we will prepare it with care.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <button type="button" onClick={onOpenOrder} className="group inline-flex min-h-14 w-full items-center justify-center gap-2.5 rounded-full bg-curry px-6 py-4 text-base font-black text-brown transition hover:bg-[#ffc4dc] active:scale-95 tap-highlight-none shadow-xl shadow-curry/15 sm:min-h-15 sm:w-auto sm:gap-3 sm:px-10 sm:py-5 sm:text-lg">
              <ShoppingBag size={20} className="shrink-0 sm:size-[22px]" /> <span>Start Order</span>
            </button>
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="group inline-flex min-h-14 w-full items-center justify-center gap-2.5 rounded-full border border-white/18 bg-white/10 px-6 py-4 text-base font-bold text-ivory transition hover:bg-white/16 active:scale-95 tap-highlight-none sm:min-h-15 sm:w-auto sm:gap-3 sm:px-10 sm:py-5 sm:text-lg">
              <WhatsAppIcon size={20} className="shrink-0 transition group-hover:rotate-6 sm:size-[22px]" /> <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function OrderDrawer({ open, orderItems, onClose, onIncrementItem, onDecrementItem, onSetItemQuantity, onClearOrder }) {
  const scrollRef = useRef(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [details, setDetails] = useState({
    name: '',
    orderType: 'pickup',
    paymentMethod: 'juice',
    timeWindow: 'lunch',
    time: '',
    deliveryLocation: 'vacoas',
    area: '',
    note: '',
  });
  const [showRequiredErrors, setShowRequiredErrors] = useState(false);

  const lines = getOrderLines(orderItems);
  const orderCount = getOrderCount(orderItems);
  const estimatedSubtotal = getEstimatedSubtotal(orderItems);
  const selectedDeliveryLocation = getSelectedDeliveryLocation(details.deliveryLocation);
  const selectedDeliveryFeeText = `Rs ${selectedDeliveryLocation.fee}`;
  const needsCustomTime = details.timeWindow === 'custom';
  const needsDoorArea = details.orderType === 'delivery' && selectedDeliveryLocation.type === 'home';
  const deliveryMinimum = selectedDeliveryLocation.type === 'home' ? homeDeliveryMinimum : pickupMinimum;
  const deliveryBelowMinimum = details.orderType === 'delivery' && estimatedSubtotal > 0 && estimatedSubtotal < deliveryMinimum;
  const hasRequiredDetails = Boolean(
    details.name.trim()
      && (!needsCustomTime || details.time.trim())
      && (!needsDoorArea || details.area.trim())
      && !deliveryBelowMinimum,
  );
  const timeChoiceText = formatTimeChoice(details);
  const orderTypeText = details.orderType === 'delivery' ? 'Delivery' : 'Pickup';
  const deliveryPlaceText = details.orderType === 'delivery' ? selectedDeliveryLocation.name : 'Vacoas pickup';
  const deliveryFeeText = details.orderType === 'delivery' ? selectedDeliveryFeeText : 'Free';
  const paymentText = details.paymentMethod === 'cash' ? 'Cash on delivery / pickup' : `Juice on ${phoneDisplay}`;
  const whatsappOrderHref = `${whatsappHref}?text=${encodeURIComponent(buildWhatsAppMessage(orderItems, details))}`;
  const steps = [
    ['Order', 'Review dishes', 'Check quantities before adding your details.'],
    ['Details', 'Pickup and timing', 'Choose pickup, delivery, payment, and timing.'],
    ['Confirm', 'Final check', 'Approve the WhatsApp message before sending.'],
  ];

  useEffect(() => {
    if (!open) return;

    scrollRef.current?.scrollTo({ top: 0 });
    setShowRequiredErrors(false);
    setCurrentStep(0);
  }, [open]);

  const validateDetails = () => {
    if (hasRequiredDetails) return true;

    setShowRequiredErrors(true);

    if (!details.name.trim()) {
      document.getElementById('order-customer-name')?.focus();
      return false;
    }

    if (needsCustomTime && !details.time.trim()) {
      document.getElementById('order-preferred-time')?.focus();
      return false;
    }

    if (needsDoorArea && !details.area.trim()) {
      document.getElementById('order-delivery-area')?.focus();
      return false;
    }

    return false;
  };

  const goToStep = (step) => {
    setCurrentStep(step);
    scrollRef.current?.scrollTo({ top: 0 });
  };

  const handleDetailsNext = () => {
    if (!validateDetails()) return;

    setShowRequiredErrors(false);
    goToStep(2);
  };

  const handleOrderClick = (event) => {
    if (validateDetails()) return;

    event.preventDefault();
  };

  return (
    <div
      className={`fixed inset-0 z-[70] transition-all duration-500 ease-in-out ${open ? 'pointer-events-auto bg-brown/68 backdrop-blur-sm' : 'pointer-events-none bg-transparent backdrop-blur-0'}`}
      role="dialog"
      aria-modal="true"
      aria-label="Review WhatsApp order"
      onClick={(event) => event.target === event.currentTarget && onClose()}
    >
      <div className={`mx-auto flex h-full max-w-3xl items-end px-0 transition-all duration-500 sm:items-center sm:px-5 ${open ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 sm:translate-y-8'}`}>
        <div className="relative flex max-h-[95svh] w-full flex-col overflow-hidden rounded-t-[2rem] bg-ivory text-brown shadow-[0_-20px_70px_rgba(0,0,0,0.34)] sm:max-h-[92svh] sm:rounded-[2.2rem]">
          <div className="shrink-0 border-b border-cocoa/10 bg-ivory/92 backdrop-blur-md">
            <div className="flex justify-center pt-3 pb-1 sm:hidden">
              <div className="h-1.5 w-14 rounded-full bg-brown/15" />
            </div>

            <div className="px-5 pt-3 pb-4 sm:px-7 sm:pt-6">
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <p className="text-[0.65rem] font-black uppercase tracking-[0.22em] text-terracotta">Step {currentStep + 1} of 3</p>
                  <h2 className="mt-1 font-display text-3xl font-semibold leading-tight text-brown sm:text-4xl">
                    {steps[currentStep][1]}
                  </h2>
                  <p className="mt-2 text-sm font-semibold leading-6 text-cocoa/62">{steps[currentStep][2]}</p>
                </div>
                <button
                  type="button"
                  aria-label="Close order review"
                  onClick={onClose}
                  className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-cocoa/12 bg-white text-brown shadow-sm transition hover:bg-cream active:scale-90 tap-highlight-none"
                >
                  <X size={21} />
                </button>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-2">
                {steps.map(([label], index) => (
                  <button
                    key={label}
                    type="button"
                    onClick={() => {
                      if (index === 2 && !validateDetails()) return;
                      goToStep(index);
                    }}
                    className={`group min-w-0 rounded-2xl border px-2.5 py-2.5 text-left transition active:scale-[0.98] tap-highlight-none ${currentStep === index ? 'border-brown bg-brown text-ivory shadow-sm' : 'border-cocoa/10 bg-white text-cocoa/58 hover:bg-cream'}`}
                  >
                    <span className={`grid h-6 w-6 place-items-center rounded-full text-[0.72rem] font-black ${currentStep === index ? 'bg-curry text-brown' : 'bg-cream text-cocoa/70'}`}>
                      {index + 1}
                    </span>
                    <span className="mt-2 block truncate text-xs font-black">{label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div ref={scrollRef} className="modern-scroll grow overflow-y-auto bg-[#fff8e8] px-5 py-5 sm:px-7 sm:py-6">
            {currentStep === 0 && (
              <div className="grid gap-4">
                <div className="grid gap-3 rounded-[1.6rem] border border-cocoa/10 bg-white p-4 shadow-sm sm:grid-cols-3">
                  <div className="rounded-[1.1rem] bg-cream/70 p-4">
                    <p className="text-[0.65rem] font-black uppercase tracking-widest text-cocoa/50">Items</p>
                    <p className="mt-1 text-2xl font-black text-brown">{orderCount}</p>
                  </div>
                  <div className="rounded-[1.1rem] bg-cream/70 p-4">
                    <p className="text-[0.65rem] font-black uppercase tracking-widest text-cocoa/50">Guide total</p>
                    <p className="mt-1 text-2xl font-black text-brown">{estimatedSubtotal ? `Rs ${estimatedSubtotal}` : '-'}</p>
                  </div>
                  <div className="rounded-[1.1rem] bg-cream/70 p-4">
                    <p className="text-[0.65rem] font-black uppercase tracking-widest text-cocoa/50">Delivery</p>
                    <p className="mt-1 text-sm font-black leading-6 text-brown">From Rs 75</p>
                  </div>
                </div>

                <div className="rounded-[1.8rem] border border-cocoa/10 bg-white p-4 shadow-sm sm:p-5">
                  {lines.length ? (
                    <div className="grid gap-3">
                      {lines.map((item) => (
                        <div key={item.name} className="grid gap-4 rounded-[1.35rem] border border-cocoa/8 bg-cream/45 p-4 min-[520px]:grid-cols-[1fr_auto] min-[520px]:items-center">
                          <div>
                            <p className="font-bold leading-tight text-brown sm:text-lg">{item.name}</p>
                            <p className="mt-1.5 text-xs font-black uppercase tracking-wider text-terracotta">{item.price}{item.spice ? ` · ${item.spice}` : ''}</p>
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
                    <div className="rounded-[1.35rem] bg-cream/70 px-6 py-10 text-center">
                      <ShoppingBag className="mx-auto text-terracotta/60" size={34} />
                      <p className="mt-4 text-sm font-bold leading-7 text-cocoa/70">No dishes selected yet. You can still continue and ask Curry Worry to help from the menu.</p>
                    </div>
                  )}
                </div>

                <div className="grid gap-3 text-sm leading-6 text-cocoa/74 sm:grid-cols-3">
                  {[
                    ['Final total', 'Confirmed on WhatsApp before cooking.'],
                    ['Pickup points', 'Vacoas Market, So\'Flo, Phoenix, Curepipe, Trianon, Quatre Bornes, Ebene.'],
                    ['Payment', `Juice on ${phoneDisplay} or cash.`],
                  ].map(([title, text]) => (
                    <div key={title} className="rounded-[1.25rem] border border-cocoa/10 bg-white p-4 shadow-sm">
                      <CheckCircle2 size={18} className="text-terracotta" />
                      <p className="mt-3 font-black text-brown">{title}</p>
                      <p className="mt-1">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {currentStep === 1 && (
              <div className="grid gap-4">
                <div className="rounded-[1.8rem] border border-cocoa/10 bg-white p-4 shadow-sm sm:p-5">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-2xl bg-curry/45 text-brown">
                      <Phone size={18} />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl font-semibold text-brown">Contact</h3>
                      <p className="text-xs font-semibold text-cocoa/58">Required for the WhatsApp order.</p>
                    </div>
                  </div>
                  <label className="grid gap-2 text-[0.68rem] font-black uppercase tracking-widest text-cocoa/50">
                    <span>Your name <span className="text-terracotta">*</span></span>
                    <input
                      id="order-customer-name"
                      required
                      aria-invalid={showRequiredErrors && !details.name.trim()}
                      value={details.name}
                      onChange={(event) => setDetails((value) => ({ ...value, name: event.target.value }))}
                      placeholder="Enter your name"
                      className="min-h-13 rounded-2xl border border-cocoa/12 bg-ivory px-5 text-sm font-semibold text-brown outline-none transition focus:border-terracotta focus:ring-4 focus:ring-terracotta/5"
                    />
                    {showRequiredErrors && !details.name.trim() && (
                      <span className="text-xs normal-case tracking-normal text-terracotta">Name is required.</span>
                    )}
                  </label>
                </div>

                <div className="rounded-[1.8rem] border border-cocoa/10 bg-white p-4 shadow-sm sm:p-5">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-2xl bg-leaf/25 text-brown">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl font-semibold text-brown">Fulfilment</h3>
                      <p className="text-xs font-semibold text-cocoa/58">Choose how and when you get the food.</p>
                    </div>
                  </div>

                  <div className="grid gap-4">
                    <div className="grid gap-2 text-[0.68rem] font-black uppercase tracking-widest text-cocoa/50">
                      Order type
                      <div className="grid grid-cols-2 gap-2 rounded-2xl bg-cocoa/5 p-1.5">
                        {[
                          ['pickup', 'Pickup'],
                          ['delivery', 'Delivery'],
                        ].map(([value, label]) => (
                          <button
                            key={value}
                            type="button"
                            onClick={() => setDetails((detailsValue) => ({ ...detailsValue, orderType: value }))}
                            className={`min-h-12 rounded-xl text-sm font-black transition-all active:scale-95 tap-highlight-none ${details.orderType === value ? 'bg-brown text-ivory shadow-lg' : 'text-cocoa/60 hover:bg-white/50'}`}
                          >
                            {label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid gap-2 text-[0.68rem] font-black uppercase tracking-widest text-cocoa/50">
                      Time window
                      <div className="grid gap-2 sm:grid-cols-3">
                        {timeWindows.map(([value, label, text]) => (
                          <button
                            key={value}
                            type="button"
                            onClick={() => setDetails((detailsValue) => ({ ...detailsValue, timeWindow: value }))}
                            className={`rounded-2xl border px-4 py-3 text-left transition-all active:scale-95 tap-highlight-none ${details.timeWindow === value ? 'border-brown bg-brown text-ivory shadow-lg' : 'border-cocoa/10 bg-ivory text-cocoa/70 hover:bg-cream'}`}
                          >
                            <span className="block text-sm font-black">{label}</span>
                            <span className={`mt-1 block text-xs font-semibold leading-5 ${details.timeWindow === value ? 'text-ivory/70' : 'text-cocoa/54'}`}>{text}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {needsCustomTime && (
                      <label className="grid gap-2 text-[0.68rem] font-black uppercase tracking-widest text-cocoa/50">
                        <span>Custom time (AM/PM) <span className="text-terracotta">*</span></span>
                        <input
                          id="order-preferred-time"
                          type="time"
                          required
                          aria-invalid={showRequiredErrors && !details.time.trim()}
                          value={details.time}
                          onChange={(event) => setDetails((value) => ({ ...value, time: event.target.value }))}
                          step="900"
                          className="min-h-13 rounded-2xl border border-cocoa/12 bg-ivory px-5 text-sm font-semibold text-brown outline-none transition focus:border-terracotta focus:ring-4 focus:ring-terracotta/5"
                        />
                        {showRequiredErrors && !details.time.trim() && (
                          <span className="text-xs normal-case tracking-normal text-terracotta">Custom time is required.</span>
                        )}
                      </label>
                    )}
                  </div>
                </div>

                {details.orderType === 'delivery' && (
                  <div className="rounded-[1.8rem] border border-cocoa/10 bg-white p-4 shadow-sm sm:p-5">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="grid h-10 w-10 place-items-center rounded-2xl bg-curry/45 text-brown">
                        <ShoppingBag size={18} />
                      </div>
                      <div>
                        <h3 className="font-display text-2xl font-semibold text-brown">Delivery place</h3>
                        <p className="text-xs font-semibold text-cocoa/58">Minimum delivery order: Rs {deliveryMinimum}.</p>
                      </div>
                    </div>

                    <p className="mb-2 text-[0.65rem] font-black uppercase tracking-widest text-cocoa/50">Pickup points — min Rs {pickupMinimum}</p>
                    <div className="grid gap-2 sm:grid-cols-2">
                      {deliveryLocations.filter((location) => location.type === 'pickup').map((location) => (
                        <button
                          key={location.id}
                          type="button"
                          onClick={() => setDetails((detailsValue) => ({ ...detailsValue, deliveryLocation: location.id }))}
                          className={`rounded-2xl border px-4 py-3 text-left transition-all active:scale-95 tap-highlight-none ${details.deliveryLocation === location.id ? 'border-brown bg-brown text-ivory shadow-lg' : 'border-cocoa/10 bg-ivory text-cocoa/70 hover:bg-cream'}`}
                        >
                          <span className="block text-sm font-black">{location.name}</span>
                          <span className={`mt-1 block text-xs font-semibold leading-5 ${details.deliveryLocation === location.id ? 'text-ivory/70' : 'text-cocoa/54'}`}>
                            Rs {location.fee}
                          </span>
                        </button>
                      ))}
                    </div>
                    <p className="mt-4 mb-2 text-[0.65rem] font-black uppercase tracking-widest text-cocoa/50">Home delivery — min Rs {homeDeliveryMinimum}</p>
                    <div className="grid gap-2 sm:grid-cols-2">
                      {deliveryLocations.filter((location) => location.type === 'home').map((location) => (
                        <button
                          key={location.id}
                          type="button"
                          onClick={() => setDetails((detailsValue) => ({ ...detailsValue, deliveryLocation: location.id }))}
                          className={`rounded-2xl border px-4 py-3 text-left transition-all active:scale-95 tap-highlight-none ${details.deliveryLocation === location.id ? 'border-brown bg-brown text-ivory shadow-lg' : 'border-cocoa/10 bg-ivory text-cocoa/70 hover:bg-cream'}`}
                        >
                          <span className="block text-sm font-black">{location.name}</span>
                          <span className={`mt-1 block text-xs font-semibold leading-5 ${details.deliveryLocation === location.id ? 'text-ivory/70' : 'text-cocoa/54'}`}>
                            Rs {location.fee}
                          </span>
                        </button>
                      ))}
                    </div>

                    <div className={`mt-4 rounded-2xl px-4 py-3 text-sm font-semibold leading-6 ${deliveryBelowMinimum ? 'bg-terracotta/12 text-terracotta' : 'bg-cream/70 text-cocoa/70'}`}>
                      {deliveryBelowMinimum
                        ? `Delivery minimum is Rs ${deliveryMinimum}. Add more items or choose pickup.`
                        : `Selected: ${selectedDeliveryLocation.name} - ${selectedDeliveryFeeText}`}
                    </div>
                  </div>
                )}

                {needsDoorArea && (
                  <label className="grid gap-2 rounded-[1.8rem] border border-cocoa/10 bg-white p-4 text-[0.68rem] font-black uppercase tracking-widest text-cocoa/50 shadow-sm sm:p-5">
                    <span>Home delivery area <span className="text-terracotta">*</span></span>
                    <input
                      id="order-delivery-area"
                      required
                      aria-invalid={showRequiredErrors && !details.area.trim()}
                      value={details.area}
                      onChange={(event) => setDetails((value) => ({ ...value, area: event.target.value }))}
                      placeholder="Enter address or nearby landmark"
                      className="min-h-13 rounded-2xl border border-cocoa/12 bg-ivory px-5 text-sm font-semibold text-brown outline-none transition focus:border-terracotta focus:ring-4 focus:ring-terracotta/5"
                    />
                    {showRequiredErrors && !details.area.trim() && (
                      <span className="text-xs normal-case tracking-normal text-terracotta">Home delivery area is required.</span>
                    )}
                  </label>
                )}

                <div className="rounded-[1.8rem] border border-cocoa/10 bg-white p-4 shadow-sm sm:p-5">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-2xl bg-gold/45 text-brown">
                      <CheckCircle2 size={18} />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl font-semibold text-brown">Payment and notes</h3>
                      <p className="text-xs font-semibold text-cocoa/58">Add anything Curry Worry should know.</p>
                    </div>
                  </div>

                  <div className="grid gap-4">
                    <div className="grid gap-2 text-[0.68rem] font-black uppercase tracking-widest text-cocoa/50">
                      Payment
                      <div className="grid gap-2 sm:grid-cols-2">
                        {paymentOptions.map(([value, label, text]) => (
                          <button
                            key={value}
                            type="button"
                            onClick={() => setDetails((detailsValue) => ({ ...detailsValue, paymentMethod: value }))}
                            className={`rounded-2xl border px-4 py-3 text-left transition-all active:scale-95 tap-highlight-none ${details.paymentMethod === value ? 'border-brown bg-brown text-ivory shadow-lg' : 'border-cocoa/10 bg-ivory text-cocoa/70 hover:bg-cream'}`}
                          >
                            <span className="block text-sm font-black">{label}</span>
                            <span className={`mt-1 block text-xs font-semibold leading-5 ${details.paymentMethod === value ? 'text-ivory/70' : 'text-cocoa/54'}`}>{text}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <label className="grid gap-2 text-[0.68rem] font-black uppercase tracking-widest text-cocoa/50">
                      Notes
                      <textarea
                        value={details.note}
                        onChange={(event) => setDetails((value) => ({ ...value, note: event.target.value }))}
                        placeholder="Portion size, spice level, allergies, tray size, or delivery details..."
                        rows={3}
                        className="resize-none rounded-2xl border border-cocoa/12 bg-ivory px-5 py-4 text-sm font-semibold text-brown outline-none transition focus:border-terracotta focus:ring-4 focus:ring-terracotta/5"
                      />
                    </label>
                  </div>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="grid gap-4">
                <div className="rounded-[1.8rem] border border-cocoa/10 bg-white p-4 shadow-sm sm:p-5">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <h3 className="font-display text-2xl font-semibold text-brown">Order summary</h3>
                      <p className="mt-1 text-sm font-semibold text-cocoa/60">{orderCount || 'Menu'} item{orderCount === 1 ? '' : 's'} selected</p>
                    </div>
                    {estimatedSubtotal > 0 && (
                      <span className="rounded-full bg-curry/35 px-4 py-2 text-sm font-black text-brown">Guide Rs {estimatedSubtotal}</span>
                    )}
                  </div>

                  {lines.length ? (
                    <div className="mt-4 grid gap-2">
                      {lines.map((item) => (
                        <div key={item.name} className="flex items-start justify-between gap-4 rounded-2xl bg-cream/60 p-4">
                          <div>
                            <p className="font-bold text-brown">{item.name}</p>
                            <p className="mt-1 text-xs font-black uppercase tracking-wider text-terracotta">{item.price}{item.spice ? ` · ${item.spice}` : ''}</p>
                          </div>
                          <span className="shrink-0 rounded-full bg-white px-3 py-1 text-sm font-black text-brown">x{item.quantity}</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="mt-4 rounded-2xl bg-cream/70 px-5 py-6 text-center text-sm font-semibold leading-7 text-cocoa/70">
                      No dishes selected. The WhatsApp message will ask to order from the menu.
                    </p>
                  )}
                </div>

                <div className="rounded-[1.8rem] border border-cocoa/10 bg-white p-4 shadow-sm sm:p-5">
                  <h3 className="font-display text-2xl font-semibold text-brown">Final approval</h3>
                  <div className="mt-4 grid gap-2">
                    {[
                      ['Name', details.name.trim()],
                      ['Type', orderTypeText],
                      ['Time', timeChoiceText],
                      ['Place', deliveryPlaceText],
                      ['Delivery fee', deliveryFeeText],
                      ['Payment', paymentText],
                      ['Area note', details.area.trim() || 'No extra area note'],
                      ['Notes', details.note.trim() || 'No special note'],
                    ].map(([label, value]) => (
                      <div key={label} className="grid gap-1 rounded-2xl bg-cream/55 px-4 py-3 sm:grid-cols-[8rem_1fr] sm:gap-4">
                        <span className="text-[0.65rem] font-black uppercase tracking-widest text-cocoa/50">{label}</span>
                        <span className="font-semibold leading-6 text-brown">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[1.5rem] border border-terracotta/20 bg-terracotta/10 p-4 text-sm font-semibold leading-6 text-cocoa/76">
                  <span className="font-black text-brown">Before cooking:</span> availability, portion size, delivery details, and final total are confirmed on WhatsApp.
                </div>
              </div>
            )}
          </div>

          <div className="shrink-0 border-t border-cocoa/10 bg-ivory/94 px-5 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] backdrop-blur-md sm:px-7 sm:pb-5">
            <div className="grid gap-2.5 sm:flex sm:items-center sm:justify-between">
              <p className="text-[10px] font-semibold leading-snug text-cocoa/54">
                {currentStep === 2 ? 'Final total is confirmed on WhatsApp.' : 'Quick checkout, final price confirmed before preparation.'}
              </p>

              <div className="grid grid-cols-2 gap-2.5 sm:flex sm:justify-end sm:gap-3">
                {currentStep === 0 && orderCount > 0 && (
                  <button
                    type="button"
                    onClick={onClearOrder}
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-cocoa/12 bg-white px-4 py-2.5 text-xs font-black text-cocoa transition-all hover:bg-cream active:scale-95 tap-highlight-none sm:min-h-12 sm:px-5"
                  >
                    <Trash2 size={17} />
                    <span>Clear</span>
                  </button>
                )}

                {currentStep > 0 && (
                  <button
                    type="button"
                    onClick={() => goToStep(currentStep - 1)}
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-cocoa/12 bg-white px-4 py-2.5 text-xs font-black text-cocoa transition-all hover:bg-cream active:scale-95 tap-highlight-none sm:min-h-12 sm:px-5"
                  >
                    <ChevronLeft size={17} />
                    <span>Back</span>
                  </button>
                )}

                {currentStep === 0 && (
                  <button
                    type="button"
                    onClick={() => goToStep(1)}
                    className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-curry px-5 py-2.5 text-sm font-black text-brown shadow-[0_10px_30px_rgba(255,179,209,0.24)] transition-all hover:bg-[#ffc4dc] active:scale-[0.98] tap-highlight-none sm:min-h-12 sm:px-7"
                  >
                    <span>Continue</span>
                    <ChevronRight size={18} className="shrink-0" />
                  </button>
                )}

                {currentStep === 1 && (
                  <button
                    type="button"
                    onClick={handleDetailsNext}
                    className={`group inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-curry px-5 py-2.5 text-sm font-black text-brown shadow-[0_10px_30px_rgba(255,179,209,0.24)] transition-all hover:bg-[#ffc4dc] active:scale-[0.98] tap-highlight-none sm:min-h-12 sm:px-7 ${hasRequiredDetails ? '' : 'opacity-70'}`}
                  >
                    <span>Final check</span>
                    <ChevronRight size={18} className="shrink-0" />
                  </button>
                )}

                {currentStep === 2 && (
                  <a
                    href={whatsappOrderHref}
                    onClick={handleOrderClick}
                    aria-disabled={!hasRequiredDetails}
                    className={`group inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-curry px-5 py-2.5 text-sm font-black text-brown shadow-[0_10px_30px_rgba(255,179,209,0.24)] transition-all hover:bg-[#ffc4dc] active:scale-[0.98] tap-highlight-none sm:min-h-12 sm:px-7 ${hasRequiredDetails ? '' : 'opacity-70'}`}
                  >
                    <WhatsAppIcon size={18} className="shrink-0 transition group-hover:rotate-6" />
                    <span>Send WhatsApp</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileOrderBar({ orderCount, onOpenOrder, isBumping }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-brown/10 bg-ivory/96 px-3 pb-[calc(0.8rem+env(safe-area-inset-bottom))] pt-3 shadow-[0_-14px_40px_rgba(58,58,58,0.12)] backdrop-blur-xl md:hidden">
      <div className="mx-auto grid max-w-md grid-cols-[0.85fr_0.85fr_0.85fr_1.3fr] gap-2.5">
        <a href="#menu" className="inline-flex min-h-12 min-w-0 items-center justify-center gap-1.5 rounded-full border border-cocoa/12 bg-white px-2 text-xs font-black text-brown transition active:scale-95 tap-highlight-none">
          <ArrowRight size={17} /> Menu
        </a>
        <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 min-w-0 items-center justify-center gap-1.5 rounded-full border border-cocoa/12 bg-white px-2 text-xs font-black text-brown transition active:scale-95 tap-highlight-none">
          <WhatsAppIcon size={17} /> Chat
        </a>
        <a href={phoneHref} className="inline-flex min-h-12 min-w-0 items-center justify-center gap-1.5 rounded-full border border-cocoa/12 bg-white px-2 text-xs font-black text-brown transition active:scale-95 tap-highlight-none">
          <Phone size={17} /> Call
        </a>
        <button
          type="button"
          onClick={onOpenOrder}
          className={`relative inline-flex min-h-12 min-w-0 items-center justify-center gap-2 rounded-full bg-curry px-2 text-xs font-black text-brown transition active:scale-[0.97] tap-highlight-none shadow-md shadow-curry/20 ${isBumping ? 'animate-cart-pulse' : ''}`}
        >
          {isBumping && (
            <span className="absolute -top-1 left-1/2 animate-float-up text-lg font-black text-terracotta">
              +1
            </span>
          )}
          <ShoppingBag size={18} />
          <span className="truncate">
            {orderCount ? `${orderCount} item${orderCount === 1 ? '' : 's'}` : 'Order'}
          </span>
        </button>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer id="contact" className="bg-[#2b2b2b] px-5 py-16 text-ivory sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
        <div>
          <div className="flex items-center gap-4">
            <img
              src={logoSrc}
              alt="Curry Worry logo"
              loading="lazy"
              className="h-13 w-13 shrink-0 rounded-full object-cover ring-2 ring-curry/70"
            />
            <div>
              <p className="font-display text-2xl font-semibold leading-tight">Curry Worry</p>
              <p className="text-xs font-black uppercase tracking-wider text-ivory/40">Homemade Moris Food</p>
            </div>
          </div>
          <p className="mt-6 max-w-sm text-sm leading-8 text-ivory/60">
            Freshly prepared Mauritian comfort food for order, takeaway, and pickup-point delivery from Rs 75. Warm, generous, and made to taste like home.
          </p>
        </div>
        <div>
          <h3 className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-curry">Order Hours</h3>
          <p className="mt-6 flex gap-3 text-sm leading-7 text-ivory/70"><Clock size={18} className="mt-0.5 shrink-0 text-curry/50" /> Mon-Sat: 08:00-20:00</p>
          <p className="mt-2 text-sm leading-7 text-ivory/50 pl-7">Sunday orders by advance request</p>
        </div>
        <div>
          <h3 className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-curry">Pickup Area</h3>
          <p className="mt-6 flex gap-3 text-sm leading-7 text-ivory/70"><MapPin size={18} className="mt-0.5 shrink-0 text-curry/50" /> Vacoas, Mauritius</p>
          <a href={phoneHref} className="mt-3 flex gap-3 text-sm leading-7 text-ivory/70 transition hover:text-curry active:scale-95 tap-highlight-none"><Phone size={18} className="mt-0.5 shrink-0 text-curry/50" /> {phoneDisplay}</a>
          <a href={emailHref} className="mt-3 flex gap-3 text-sm leading-7 text-ivory/70 transition hover:text-curry active:scale-95 tap-highlight-none"><Mail size={18} className="mt-0.5 shrink-0 text-curry/50" /> curry.ate.worry@gmail.com</a>
        </div>
        <div>
          <h3 className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-curry">Follow</h3>
          <a href={whatsappHref} className="mt-6 flex items-center gap-3 text-sm text-ivory/70 transition hover:text-curry active:scale-95 tap-highlight-none">
            <WhatsAppIcon size={20} className="text-curry/50" /> WhatsApp orders
          </a>
          <a href={facebookHref} className="mt-4 flex items-center gap-3 text-sm text-ivory/70 transition hover:text-curry active:scale-95 tap-highlight-none">
            <Share2 size={20} className="text-curry/50" /> Curry Worry
          </a>
          <p className="mt-10 flex items-center gap-2.5 text-[0.65rem] font-bold text-ivory/30 uppercase tracking-widest"><CalendarCheck size={16} /> Advance orders recommended.</p>
        </div>
      </div>
    </footer>
  );
}

function App() {
  useReveal();
  const [orderItems, setOrderItems] = useState({});
  const [orderOpen, setOrderOpen] = useState(false);
  const [isBumping, setIsBumping] = useState(false);
  const orderCount = getOrderCount(orderItems);

  const triggerBump = () => {
    setIsBumping(true);
    setTimeout(() => setIsBumping(false), 400);
  };

  const addItem = (item) => {
    setOrderItems((current) => ({
      ...current,
      [item.name]: {
        ...item,
        quantity: (current[item.name]?.quantity || 0) + 1,
        spice: item.category === 'Curries' ? (current[item.name]?.spice || 'Normal') : undefined,
      },
    }));
    triggerBump();
  };

  const setItemSpice = (name, spice) => {
    setOrderItems((current) => {
      const item = current[name];
      if (!item) return current;
      return { ...current, [name]: { ...item, spice } };
    });
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
    triggerBump();
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

  const handleOpenOrder = () => {
    if (orderCount > 0) {
      setOrderOpen(true);
    } else {
      document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Navbar onOpenOrder={handleOpenOrder} isBumping={isBumping} />
      <main>
        <Hero onOpenOrder={handleOpenOrder} />
        <FeaturedDishes />
        <MenuCategory
          orderItems={orderItems}
          onAddItem={addItem}
          onIncrementItem={incrementItem}
          onDecrementItem={decrementItem}
          onSetItemQuantity={setItemQuantity}
          onSetItemSpice={setItemSpice}
          onOpenOrder={handleOpenOrder}
        />
        <BreakfastSection />
        <GallerySection />
        <DessertGrid />
        <StorySection />
        <OrderSteps onOpenOrder={handleOpenOrder} />
        <Testimonials />
        <CTASection onOpenOrder={handleOpenOrder} />
      </main>
      <Footer />
      <MobileOrderBar orderCount={orderCount} onOpenOrder={handleOpenOrder} isBumping={isBumping} />
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
