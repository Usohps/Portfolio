// Screenshots are pre-cropped to 16:9 WebP at two widths (see src/assets/web).
const shots = import.meta.glob("../assets/web/*.webp", {
  eager: true,
  import: "default",
});

const shot = (name) => ({
  src: shots[`../assets/web/${name}-640.webp`],
  srcSet: `${shots[`../assets/web/${name}-640.webp`]} 640w, ${
    shots[`../assets/web/${name}-1280.webp`]
  } 1280w`,
});

export const projects = [
  {
    id: "myaza",
    title: "Myaza Finance",
    category: "Fintech",
    summary:
      "Multi-currency wallets, fast cross-border transfers and virtual cards with stablecoin support.",
    description:
      "Myaza is a next-gen fintech providing multi-currency wallets, fast cross-border transfers, virtual cards and secure conversion tools, ensuring seamless digital payments with ReactJs frontend and modern API integration powered by stablecoin support and secure authentication flows.",
    tags: ["React", "API integration", "Auth flows"],
    image: shot("myaza"),
    url: "https://myaza.co/",
    type: "web",
    featured: true,
  },
  {
    id: "vistapay-web",
    title: "VistaPay",
    category: "Payments",
    summary:
      "A payment gateway and dashboard for utility bills, airtime, top-ups and referral rewards.",
    description:
      "VistaPay is a versatile payment app and gateway that lets users settle utility bills, airtime and digital services quickly, offering an intuitive dashboard for managing payments, top-ups and referral rewards with a smooth React + mobile payment stack.",
    tags: ["React", "Payments", "Dashboard"],
    image: shot("vistapay"),
    url: "https://vistapay.com/",
    type: "web",
    featured: true,
  },
  {
    id: "vistapay-mobile",
    title: "VistaPay Mobile",
    category: "Payments",
    summary:
      "Unified bill payments, airtime and subscriptions with reliable checkout flows on handheld devices.",
    description:
      "The VistaPay mobile experience delivers fast, unified bill payments, airtime and subscription services with reliable checkout flows, intuitive UI and secure data handling for everyday financial tasks on devices.",
    tags: ["Mobile", "Payments", "Checkout"],
    image: shot("vistapay"),
    url: "https://vistapay.com/",
    type: "mobile",
  },
  {
    id: "verifrica",
    title: "Verifrica",
    category: "Financial data",
    summary:
      "Bank account connectivity with real-time balance and transaction APIs for financial apps.",
    description:
      "Verifrica enables easy bank account connectivity, real-time balance and transaction APIs for financial apps, with secure authentication and data tools to empower budgeting, payment initiation and insights across user accounts via developer-friendly APIs.",
    tags: ["Fintech", "APIs", "Secure auth"],
    image: shot("verifrica"),
    url: "https://verifrica.com/",
    type: "web",
    featured: true,
  },
  {
    id: "turbomedics",
    title: "Turbomedics",
    category: "Corporate site",
    summary:
      "A fully responsive corporate site showcasing medical equipment with a clean, accessible layout.",
    description:
      "A fully responsive corporate site for Turbomedics showcasing medical equipment offerings with a clean layout and accessible data, built with VueJs for frontend interactivity and Tailwind CSS for modern design and cross-device responsiveness.",
    tags: ["Vue.js", "Tailwind CSS", "Responsive"],
    image: shot("turbomedics"),
    url: "https://turbomedics.com/",
    type: "web",
  },
  {
    id: "healthbook-web",
    title: "Healthbook",
    category: "Health analytics",
    summary:
      "A modern analytics dashboard with dynamic charting and clear, user-friendly data views.",
    description:
      "Healthbook provides a modern analytics dashboard with dynamic charting, user-friendly data views and clean UI built to visualize performance metrics effectively using modern web tech like React and tailored components for data analysis.",
    tags: ["React", "Charts", "Dashboard"],
    image: shot("healthbook-web"),
    url: "https://www.healthbookapp.com/",
    type: "web",
    featured: true,
  },
  {
    id: "ourhaven",
    title: "OurHaven",
    category: "Community platform",
    summary:
      "A community blog platform with user auth, image uploads and post interactions on the MERN stack.",
    description:
      "OurHaven is a community-oriented blog platform with user auth, image uploads, post interactions and state management built using the MERN stack (MongoDB, Express, React, Node), delivering a scalable content publishing experience.",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    image: shot("ourhaven"),
    url: "https://ourhaven.app/",
    type: "web",
  },
  {
    id: "cozy-bookshop",
    title: "Cozy Bookshop",
    category: "E-commerce",
    summary:
      "Book discovery with recommendations, cart and secure checkout in a responsive storefront.",
    description:
      "Cozy Bookshop is a web app that offers secure checkout, recommendations, and shop browsing powered by modern frontend tech, delivering book discovery and seamless user interaction for shoppers with responsive UI and cart functionality.",
    tags: ["React", "Cart", "Checkout"],
    image: shot("cozy-bookshop"),
    url: "https://cozy-bookshop.vercel.app/",
    type: "web",
  },
  {
    id: "children-ngo",
    title: "Children NGO Site",
    category: "Nonprofit",
    summary:
      "A responsive nonprofit site that highlights a children's NGO's mission, programs and impact.",
    description:
      "A responsive nonprofit site for a children’s NGO that highlights their mission, programs and impact, built with accessible layouts and clear informational architecture to engage visitors and support outreach goals.",
    tags: ["Responsive", "Accessibility"],
    image: shot("children-ngo"),
    url: "http://children-global.org/",
    type: "web",
  },
  {
    id: "healthbook-mobile",
    title: "Healthbook Mobile App",
    category: "Health",
    summary:
      "A polished mobile landing experience showcasing Healthbook's core features.",
    description:
      "A polished mobile landing experience that showcases Healthbook’s core features with refined layout precision and performance-focused UI, crafted using HTML, CSS and JavaScript for a clean presentation on handheld devices.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: shot("healthbook-app"),
    url: "https://www.healthbookapp.com/",
    type: "mobile",
  },
];
