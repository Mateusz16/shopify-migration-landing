// Dzisiejsza treść strony — używana jako fallback, dopóki Sanity nie jest
// skonfigurowane (patrz src/lib/sanity/content.ts), oraz jako dane startowe
// dla skryptu `npm run sanity:seed` (scripts/seed.mjs).
import type { SanityImage } from './image';

// Funkcja (nie zmienna) celowo — referencja do stałej `null` zawężałaby typ
// pola w obiekcie do literału `null`, gubiąc `SanityImage` w unii (kwirk TS
// control-flow narrowing dla `const`).
const noImage = (): SanityImage | null => null;

export const siteSettingsDefault = {
  brandLabel: 'Klawitter/Shopify',
  metaTitle: 'Migracja sklepu do Shopify — audyt, wdrożenie, wzrost konwersji',
  metaDescription:
    'Migracja sklepu e-commerce do Shopify wyceniana po audycie: szybszy checkout, zero utraty SEO, pełna migracja produktów i comiesięczne wsparcie. Maks. 4-5 klientów jednocześnie.',
  navLinks: [
    { label: 'Dla kogo', href: '#dla-kogo' },
    { label: 'Zakres', href: '#zakres' },
    { label: 'Proces', href: '#proces' },
    { label: 'Cennik', href: '#cennik' },
    { label: 'Case studies', href: '#case-studies' },
    { label: 'O mnie', href: '#o-mnie' },
  ],
  ctaLabel: 'Umów audyt',
  contactEmail: 'kontakt@matklawitter.com',
  footerTagline: 'Migracje sklepów e-commerce do Shopify. Jeden zespół, ograniczona liczba klientów jednocześnie.',
  footerNote: 'Zaprojektowane i zbudowane od zera — bez szablonu.',
  logo: noImage(),
  ogImage: noImage(),
};

export const heroDefault = {
  eyebrow: 'Migracja e-commerce → Shopify',
  titleMain: 'Migracja do Shopify to inwestycja w konwersję —',
  titleHighlight: 'nie koszt techniczny.',
  description:
    'Przenoszę sklepy z WooCommerce, PrestaShop i Magento na Shopify tak, żeby szybszy checkout, zero utraty SEO i uporządkowany katalog produktów przełożyły się na liczby, nie tylko na nowy wygląd.',
  primaryCtaLabel: 'Umów audyt',
  primaryCtaHref: '#kontakt',
  secondaryCtaLabel: 'Zobacz zakres usługi',
  secondaryCtaHref: '#zakres',
  note: '4–5 klientów jednocześnie — bez kolejki, z pełną uwagą na projekt.',
  image: noImage(),
};

export const diagnosticPanelDefault = {
  heading: 'Diagnostyka // przed i po migracji',
  badge: 'model referencyjny',
  metrics: [
    { label: 'Czas ładowania (LCP)', before: '4.6 s', after: '1.4 s', delta: '-70%' },
    { label: 'Konwersja checkoutu', before: '1.3%', after: '2.4%', delta: '+85%' },
    { label: 'Porzucone koszyki', before: '74%', after: '58%', delta: '-22%' },
    { label: 'Widoczność SEO (frazy produktowe)', before: '100 (bazowo)', after: '109', delta: '+9%' },
  ],
  footnote:
    'Wartości ilustracyjne — typowy zakres poprawy na bazie audytów sklepów WooCommerce/PrestaShop migrowanych na Shopify. Realne liczby Twojego sklepu poznasz po audycie.',
};

export const audienceFilterDefault = {
  eyebrow: 'Dla kogo',
  title: 'Szczerze: komu to pomoże, a komu nie',
  description: 'Pracuję z ograniczoną liczbą klientów naraz, więc wolę odsiać na starcie niż rozczarować w trakcie.',
  fitsHeading: 'To dla Ciebie, jeśli:',
  fits: [
    'Masz działający sklep na Shopify, WooCommerce, PrestaShop lub Magento i wiesz, że stary silnik (albo jego brak porządku) ogranicza sprzedaż.',
    'Sprzedajesz realny wolumen — migracja ma się zwrócić z konwersji, nie tylko „wyglądać nowocześniej”.',
    'Chcesz mieć jedną osobę odpowiedzialną za wdrożenie i utrzymanie, nie ticket w kolejce agencji.',
    'Rozumiesz, że dobra migracja wymaga audytu przed wyceną — nie szukasz gotowego cennika z paczkami.',
  ],
  notFitsHeading: 'To nie dla Ciebie, jeśli:',
  notFits: [
    'Potrzebujesz sklepu „na już”, w tydzień, bez audytu i bez pytań o dane.',
    'Szukasz najtańszej oferty na rynku — to nie jest usługa z dolnej półki.',
    'Nie masz dostępu do panelu obecnej platformy ani osoby decyzyjnej po Twojej stronie.',
    'Chcesz zlecić migrację i zniknąć — bez szkolenia i przekazania wiedzy o nowym sklepie.',
  ],
};

export const serviceGridDefault = {
  eyebrow: 'Zakres usługi',
  title: 'Co dokładnie obejmuje migracja',
  description: 'Sześć elementów. Żaden z nich nie jest opcją premium — to standard, na którym opiera się każde wdrożenie.',
  services: [
    {
      number: '01',
      title: 'UX/UI i szybszy checkout',
      body: 'Ścieżka zakupowa przeprojektowana pod mniej kliknięć: mniej pól w formularzu, jasne statusy dostawy, checkout dopasowany do Shopify Checkout Extensibility zamiast generycznego szablonu.',
    },
    {
      number: '02',
      title: 'Zero utraty SEO + SEO/AEO na start',
      body: 'Przekierowania 301 dla każdego adresu, mapowanie meta i danych strukturalnych, kontrola indeksacji po launchu. Do tego audyt pod odpowiedzi AI (AEO) — jako rozszerzenie, nie obowiązkowy dodatek.',
    },
    {
      number: '03',
      title: 'Migracja produktów i audyt contentu',
      body: 'Produkty, warianty, zdjęcia, kategorie i historia zamówień przenoszone z weryfikacją, nie masowym importem. Przy okazji audyt: które opisy sprzedają, a które tylko zajmują miejsce.',
    },
    {
      number: '04',
      title: 'Integracje magazynu i kuriera',
      body: 'Połączenie z systemem WMS/ERP, kurierami (InPost, DPD, DHL) i płatnościami, które już działają — migracja nie oznacza wymiany całego zaplecza operacyjnego.',
    },
    {
      number: '05',
      title: 'Szkolenie z panelu Shopify',
      body: 'Sesja dla Ciebie i zespołu: jak dodać produkt, obsłużyć zwrot, zmienić baner promocji. Bez tego nowy sklep po tygodniu wraca do mnie z pytaniami, które można rozwiązać samodzielnie.',
    },
    {
      number: '06',
      title: 'Comiesięczne wsparcie',
      body: 'Aktualizacje, drobne zmiany, monitoring wydajności i pierwsza linia kontaktu przy problemach. Stały zakres godzin w cenie, nie rozliczenie za każdy telefon.',
    },
  ],
};

export const processStepsDefault = {
  eyebrow: 'Proces',
  title: 'Cztery etapy, żadnych niespodzianek',
  description: 'Każdy etap kończy się konkretnym rezultatem, który możesz zweryfikować, zanim ruszy kolejny.',
  steps: [
    {
      number: '01',
      title: 'Audyt',
      duration: '3–7 dni',
      body: 'Analiza obecnego sklepu: struktura produktów, ruch i pozycje SEO, integracje, wąskie gardła w checkoucie. Efekt: wycena i plan migracji, nie ogólnikowa oferta.',
    },
    {
      number: '02',
      title: 'Wdrożenie',
      duration: '2–6 tygodni',
      body: 'Budowa sklepu na Shopify zgodnie z planem z audytu: motyw, migracja danych, integracje, przekierowania. Praca na środowisku testowym, bez przerywania sprzedaży na starej platformie.',
    },
    {
      number: '03',
      title: 'Launch i szkolenie',
      duration: '1 tydzień',
      body: 'Przełączenie DNS, kontrola indeksacji i płatności na produkcji, sesja szkoleniowa z panelem Shopify dla Ciebie i zespołu.',
    },
    {
      number: '04',
      title: 'Maintenance i rozwój',
      duration: 'stale, co miesiąc',
      body: 'Bieżące utrzymanie, aktualizacje, drobne zmiany i priorytety rozwoju sklepu ustalane wspólnie — nie zgadywane z zewnątrz.',
    },
  ],
};

export const pricingModelDefault = {
  eyebrow: 'Cennik',
  title: 'Model współpracy, nie cennik z paczkami',
  description:
    'Nie znajdziesz tu tabeli „Basic / Pro / Enterprise”. Każdy sklep ma inny stan danych, inne integracje i inny poziom bałaganu do uporządkowania — wycena migracji bez audytu byłaby zgadywaniem.',
  migrationLabel: 'Migracja',
  migrationHeadline: 'Wycena indywidualna po audycie',
  migrationBody:
    'Zależy od liczby produktów, integracji i stanu obecnej platformy. To nie jest oferta z dolnej półki cenowej — jeśli szukasz najtańszej migracji na rynku, prawdopodobnie nie tu.',
  maintenanceLabel: 'Maintenance',
  maintenancePriceFrom: 2500,
  maintenancePriceTo: 3500,
  maintenanceBody:
    'Stały zakres godzin na aktualizacje, drobne zmiany i wsparcie. Zakres i stawka ustalane po audycie, w zależności od skali sklepu.',
  capacityNote:
    'Pracuję jednocześnie z 4–5 klientami — to świadomy limit, nie chwilowe obłożenie. Dzięki temu każdy projekt ma realny czas, a nie miejsce w kolejce.',
};

export const aboutMeDefault = {
  eyebrow: 'O mnie',
  name: 'Mateusz Klawitter',
  intro:
    'Migruję sklepy e-commerce do Shopify jako jednoosobowy zespół wspierany przez AI-first proces developerski — nie jako agencja z wieloma projektami naraz.',
  portrait: noImage(),
  points: [
    {
      title: 'Doświadczenie z dwóch stron',
      body: 'Kilka lat w IT po stronie inżynierskiej i kilka lat po stronie e-commerce — rozumiem zarówno kod sklepu, jak i to, co faktycznie wpływa na sprzedaż.',
    },
    {
      title: 'AI-first, nie AI-hype',
      body: 'Pracuję z Claude Code jako głównym narzędziem developerskim. To przewaga w tempie i jakości audytu — nie zamiennik decyzji, które i tak podejmuję sam.',
    },
    {
      title: 'Jeden ekspert, nie zespół juniorów',
      body: 'Każdy projekt prowadzę osobiście, od audytu po maintenance. Dlatego limit 4–5 klientów jednocześnie — to warunek utrzymania jakości, nie marketingowy trik.',
    },
  ],
};

export const contactCtaDefault = {
  eyebrow: 'Kontakt',
  title: 'Zacznijmy od audytu',
  description: 'Napisz bezpośrednio na maila. Odpowiadam osobiście — bez formularza w CRM, bez działu handlowego po drodze.',
  mailSubject: 'Audyt migracji do Shopify',
  mailBody:
    'Cześć,\n\nLink do sklepu:\nObecna platforma:\nOrientacyjna liczba zamówień/mies.:\n\nCo chciałbym/chciałabym osiągnąć migracją:\n',
  checklistHeading: 'Dołącz w pierwszej wiadomości',
  checklistItems: ['link do obecnego sklepu', 'platformę, na której działa dziś', 'orientacyjną liczbę zamówień miesięcznie'],
};

export const caseStudiesSectionDefault = {
  eyebrow: 'Case studies',
  title: 'Wyniki wdrożeń',
  description: 'Pierwsze migracje są w toku — case studies z realnymi liczbami pojawią się tutaj po ich zakończeniu.',
  placeholderNotice:
    'Poniższa karta pokazuje wyłącznie strukturę case study (przykładowe, fikcyjne dane) — nie jest to wynik realnego wdrożenia.',
};

export const caseStudiesDefault = [
  {
    _id: 'placeholder-sklep-demo',
    clientName: 'Sklep Demo Sp. z o.o.',
    industry: 'Odzież i akcesoria',
    sourcePlatform: 'WooCommerce',
    summary:
      'To jest przykładowy wpis pokazujący układ case study. Liczby poniżej są fikcyjne i służą wyłącznie do zaprezentowania renderu — zostaną podmienione po zakończeniu pierwszych wdrożeń.',
    metrics: [
      { label: 'Czas ładowania strony produktowej', before: '4.8 s', after: '1.6 s' },
      { label: 'Współczynnik konwersji', before: '1.2%', after: '2.1%' },
      { label: 'Porzucenia koszyka', before: '78%', after: '61%' },
    ],
    testimonial: 'Przykładowa opinia klienta — treść zastępcza do podmiany po pierwszym wdrożeniu.',
    testimonialAuthor: 'Jan Kowalski, właściciel (dane przykładowe)',
    images: [] as SanityImage[],
    publishedDate: '2026-01-01',
    featured: true,
    isPlaceholder: true,
  },
];
