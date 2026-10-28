import type { SiteConfig } from "@/lib/types";

const P = "https://www.instagram.com/p/";

export const site: SiteConfig = {
  name: "HastiChef",
  tagline: "Homemade Persian food in Midtown Toronto, near Yonge and Eglinton. Order by WhatsApp or Instagram DM.",
  category: "Homemade Persian food",
  schemaType: "FoodEstablishment",
  area: "Midtown Toronto (Yonge and Eglinton), ON",
  siteUrl: "https://hastichef.vercel.app",

  theme: {
    preset: "warm-food",
    colors: { accent: "#725e40" },
  },
  logo: "/images/logo.png",
  showNameWithLogo: true,

  hero: {
    variant: "split",
    eyebrow: "Homemade in Midtown Toronto",
    headline: "Persian home cooking that tastes like home",
    subhead: "Ash Reshteh, Zereshk polo ba morgh, Fesenjoon, Dolmeh and more, made fresh near Yonge and Eglinton. Message us on WhatsApp or Instagram to order.",
    images: [
      { src: "/images/post-7.webp", alt: "Zereshk polo ba morgh with saffron rice and barberries" },
      { src: "/images/post-1.webp", alt: "Homemade strawberry jam" },
      { src: "/images/post-5.webp", alt: "Hand rolled dolmeh barg" },
    ],
    primaryCta: { label: "Order on WhatsApp", href: "http://wa.me/16472221769" },
    secondaryCta: { label: "DM on Instagram", href: "https://ig.me/m/hastichef.ca" },
  },

  highlights: ["Homemade Persian food", "Midtown Toronto, Yonge and Eglinton", "Order by WhatsApp or DM", "Private chef in Toronto and the GTA"],

  about: {
    title: "Authentic Persian food, made with love",
    body: [
      "HastiChef is a Midtown Toronto home kitchen cooking authentic Persian dishes: slow cooked stews, saffron rice, homemade jams and classic desserts.",
      "We also cook for parties and special occasions, with party trays and in-home private chef service across Toronto and the GTA.",
    ],
    image: { src: "/images/post-10.webp", alt: "Gheymeh, Ghormeh Sabzi, Kotlet and Sholeh Zard on one table" },
  },

  menu: {
    title: "On the menu",
    intro: "Favourites from our kitchen. Message us for what is cooking this week.",
    variant: "cards",
    groups: [
      {
        title: "Dishes",
        items: [
          { name: "Ash Reshteh", price: "$15 per serving", description: "Thick, herby soup crowned with kashk, crispy onions and fried mint.", image: { src: "/images/post-2.webp", alt: "Ash Reshteh" }, href: P + "DewlMxlDzR7/" },
          { name: "Zereshk polo ba morgh", description: "Saffron rice, tart barberries, tender chicken.", image: { src: "/images/post-7.webp", alt: "Zereshk polo ba morgh" }, href: P + "DeejIfHk-IR/" },
          { name: "Albaloo polo", description: "Sour cherry rice with juicy meatballs, saffron rice and pistachios.", image: { src: "/images/post-8.webp", alt: "Albaloo polo" }, href: P + "Decef2UDpn8/" },
          { name: "Fesenjoon", description: "Walnut and pomegranate, slow cooked the homemade way.", image: { src: "/images/post-9.webp", alt: "Fesenjoon" }, href: P + "DeZW0wAjMta/" },
          { name: "Dolmeh barg", description: "Hand rolled stuffed grape leaves, one of our most loved dishes.", image: { src: "/images/post-5.webp", alt: "Dolmeh barg" }, href: P + "DejpRn3jzzp/" },
          { name: "Gheymeh, Ghormeh Sabzi, Kotlet, Sholeh Zard", description: "Four Persian classics, from slow cooked stews to saffron dessert.", image: { src: "/images/post-10.webp", alt: "Four Persian classics" }, href: P + "DeU__9IjyV4/" },
        ],
      },
      {
        title: "Jams and moraba",
        items: [
          { name: "Strawberry jam", price: "Small jar $14, large jar $25", description: "Freshly made, no preservatives.", image: { src: "/images/post-1.webp", alt: "Strawberry jam" }, href: P + "De8Z9xsDsj1/" },
          { name: "Carrot moraba", description: "Small batch carrot jam with rosewater and saffron.", image: { src: "/images/post-4.webp", alt: "Carrot moraba" }, href: P + "Deo7S0ZD7-8/" },
        ],
      },
      {
        title: "Parties and private chef",
        note: "Message us for a quote",
        items: [
          { name: "Party trays", description: "Jeweled morasa polo, appetizers and homemade desserts for your celebration.", image: { src: "/images/post-3.webp", alt: "HastiChef party table" }, href: P + "DeuH2NVDhBf/" },
          { name: "In-home private chef", description: "We cook in your kitchen for private dinners, family gatherings and special occasions in Toronto and the GTA.", href: P + "Dehg4e5k7Y6/" },
        ],
      },
    ],
    footnote: "Prices shown are as posted. Message us for current availability.",
  },

  gallery: {
    title: "From our kitchen",
    items: [
      { src: "/images/post-7.webp", width: 1080, height: 1350, alt: "Zereshk polo ba morgh", caption: "Zereshk polo ba morgh", href: P + "DeejIfHk-IR/" },
      { src: "/images/post-1.webp", width: 1080, height: 1350, alt: "Strawberry jam", caption: "Strawberry jam", href: P + "De8Z9xsDsj1/" },
      { src: "/images/post-3.webp", width: 1080, height: 1920, alt: "Party table", caption: "A real HastiChef party table", href: P + "DeuH2NVDhBf/" },
      { src: "/images/post-4.webp", width: 1080, height: 1080, alt: "Carrot moraba", caption: "Carrot moraba", href: P + "Deo7S0ZD7-8/" },
      { src: "/images/post-2.webp", width: 1080, height: 1920, alt: "Ash Reshteh", caption: "Ash Reshteh", href: P + "DewlMxlDzR7/" },
      { src: "/images/post-5.webp", width: 1080, height: 1920, alt: "Dolmeh barg", caption: "Dolmeh barg", href: P + "DejpRn3jzzp/" },
      { src: "/images/post-8.webp", width: 1080, height: 1920, alt: "Albaloo polo", caption: "Albaloo polo", href: P + "Decef2UDpn8/" },
      { src: "/images/post-9.webp", width: 1080, height: 1920, alt: "Fesenjoon", caption: "Fesenjoon", href: P + "DeZW0wAjMta/" },
      { src: "/images/post-10.webp", width: 1080, height: 1920, alt: "Four Persian classics", caption: "Four classics, one table", href: P + "DeU__9IjyV4/" },
    ],
  },

  instagram: {
    handle: "hastichef.ca",
    embeds: [P + "De8Z9xsDsj1/"],
    embedsTitle: "Fresh from our kitchen",
  },

  order: {
    title: "Order on WhatsApp or by DM",
    intro: "Message us on WhatsApp, Telegram or Instagram with your dish, quantity and date. Tap the button to copy a starter message.",
    dmMessage: "Hi HastiChef! I would like to order.\nDish:\nQuantity:\nDate needed:\nPickup or delivery:",
    links: [
      { label: "WhatsApp", href: "http://wa.me/16472221769" },
      { label: "Telegram", href: "https://t.me/HastiChefCA" },
      { label: "iranyo", href: "https://iranyo.com/cooks/hastichef" },
    ],
  },

  reviews: { items: [] },

  faq: [
    { q: "How do I order?", a: "Message us on WhatsApp, Telegram or Instagram DM with your dish, quantity and date." },
    { q: "Where are you located?", a: "Our home kitchen is in Midtown Toronto, near Yonge and Eglinton." },
    { q: "Do you cater parties?", a: "Yes. We make party trays and offer in-home private chef service in Toronto and the GTA. Message us for a quote." },
  ],

  contact: {
    area: "Midtown Toronto (Yonge and Eglinton), Ontario",
    phone: "+1 647 222 1769 (WhatsApp)",
    socials: [
      { label: "WhatsApp", href: "http://wa.me/16472221769" },
      { label: "Telegram", href: "https://t.me/HastiChefCA" },
      { label: "iranyo", href: "https://iranyo.com/cooks/hastichef" },
    ],
  },

  seo: {
    title: "HastiChef | Homemade Persian food in Midtown Toronto",
    description: "Homemade Persian food in Midtown Toronto near Yonge and Eglinton. Ash Reshteh, Fesenjoon, jams, party trays and private chef. Order by WhatsApp or DM.",
    keywords: ["Persian food Toronto", "homemade Persian food Midtown Toronto", "Persian private chef Toronto", "Ash Reshteh Toronto"],
    ogPhoto: "/images/og-photo.jpg",
  },
};
