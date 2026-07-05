export type WorkCategory =
  | "Ecommerce"
  | "Education"
  | "Travel"
  | "Event"
  | "Finance"
  | "Local Business";

export type WorkItem = {
  id: string;
  title: string;
  category: WorkCategory;
  /** Path in /public. Leave undefined to render the "coming soon" placeholder. */
  image?: string;
  /** Natural dimensions of `image`, used so the screenshot renders uncropped. */
  width?: number;
  height?: number;
  href?: string;
};

// Screenshots live in /public/recent-work. Client identities stay anonymous —
// titles describe the project, not the client.
export const workItems: WorkItem[] = [
  {
    id: "ecommerce-dashboard",
    title: "Ecommerce seller dashboard",
    category: "Ecommerce",
    image: "/recent-work/ecom01.webp",
    width: 1504,
    height: 1128,
  },
  {
    id: "travel-experiences",
    title: "Travel booking & experiences site",
    category: "Travel",
    image: "/recent-work/tripli.webp",
    width: 1504,
    height: 1128,
  },
  {
    id: "finance-saas",
    title: "Personal finance SaaS dashboard",
    category: "Finance",
    image: "/recent-work/6c35acc249ab5b7491b2fe161dd91493.webp",
    width: 1504,
    height: 1128,
  },
  {
    id: "architecture-studio",
    title: "Architecture studio site",
    category: "Local Business",
    image: "/recent-work/untold.webp",
    width: 1504,
    height: 1128,
  },
  {
    id: "cafe-website",
    title: "Café brand website",
    category: "Local Business",
    image: "/recent-work/local-business/cafe.webp",
    width: 1504,
    height: 1128,
  },
  {
    id: "restaurant-website",
    title: "Restaurant website",
    category: "Local Business",
    image: "/recent-work/local-business/restaurant.webp",
    width: 1024,
    height: 768,
  },
  {
    id: "online-learning-platform",
    title: "Online learning platform",
    category: "Education",
    image: "/recent-work/Education-tech/education.webp",
    width: 1504,
    height: 1128,
  },
  {
    id: "student-dashboard",
    title: "Student learning dashboard",
    category: "Education",
    image: "/recent-work/Education-tech/original-e090c2a8280c085da03cba5e9dee9b2f.webp",
    width: 1600,
    height: 1200,
  },
  {
    id: "travel-platform",
    title: "Travel booking platform",
    category: "Travel",
    image: "/recent-work/travello.png",
    width: 1600,
    height: 1200,
  },
  {
    id: "prop-trading",
    title: "Prop trading platform",
    category: "Finance",
    image: "/recent-work/trademaster.webp",
    width: 1024,
    height: 768,
  },
  {
    id: "analytics-dashboard",
    title: "Revenue analytics dashboard",
    category: "Finance",
    image: "/recent-work/dashboard.png",
    width: 1917,
    height: 1075,
  },
  {
    id: "gaming-launch",
    title: "Web3 gaming launch site",
    category: "Event",
    image: "/recent-work/gaming.png",
    width: 1896,
    height: 901,
  },
  {
    id: "edtech-institute",
    title: "AI & data science institute",
    category: "Education",
    image: "/recent-work/monkfunnel.png",
    width: 1885,
    height: 898,
  },
  {
    id: "pools-spas",
    title: "Pools & spas e-commerce",
    category: "Ecommerce",
    image: "/recent-work/aquashark.png",
    width: 1898,
    height: 906,
  },
  {
    id: "food-brand",
    title: "D2C food brand",
    category: "Ecommerce",
    image: "/recent-work/hazzelnut.png",
    width: 1688,
    height: 1056,
  },
  {
    id: "ai-chat",
    title: "AI chat product site",
    category: "Local Business",
    image: "/recent-work/brainwave.png",
    width: 1899,
    height: 909,
  },
  {
    id: "video-editor",
    title: "AI video editor site",
    category: "Local Business",
    image: "/recent-work/xora.png",
    width: 1898,
    height: 868,
  },
];

export type MobileWorkItem = {
  id: string;
  title: string;
  image: string;
  width: number;
  height: number;
};

// Portrait mobile-UI screenshots — shown in their own gallery section,
// separate from the desktop project list above.
export const mobileWorkItems: MobileWorkItem[] = [
  {
    id: "mobile-snack-store",
    title: "Snack store app",
    image: "/recent-work/mobile-designs/mobile-snack-store.jpeg",
    width: 736,
    height: 1318,
  },
  {
    id: "mobile-food-menu",
    title: "Food delivery menu",
    image: "/recent-work/mobile-designs/mobile-food-menu.jpeg",
    width: 736,
    height: 1104,
  },
  {
    id: "mobile-landing-page",
    title: "Mobile landing page",
    image: "/recent-work/mobile-designs/mobile-landing-page.jpeg",
    width: 624,
    height: 1248,
  },
  {
    id: "mobile-ecommerce-ui",
    title: "Ecommerce shop app",
    image: "/recent-work/mobile-designs/mobile-ecommerce-ui.jpeg",
    width: 736,
    height: 1308,
  },
  {
    id: "mobile-travel",
    title: "Travel app",
    image: "/recent-work/mobile-designs/mobile-travel.jpeg",
    width: 474,
    height: 924,
  },
];
