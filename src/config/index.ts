import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Mohammed Alathamna — Web Developer",
  author: "Mohammed Alathamna",
  description:
    "Software Engineer based in Gaza, Palestine. I specialize in UI design, web application development and maintenance.",
  lang: "en",
  siteLogo: "/public/mohammed.png",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/mohammed-al-athamna" },
    { text: "GitHub", href: "https://github.com/Mohammedathamna" },
    { text: "WhatsApp", href: "https://wa.me/+970598665829" },
    { text: "FaceBook", href: "https://www.facebook.com/alathamna.mohammad" },
    { text: "Twitter", href: "https://x.com/mohammadathamna" },
  ],
  socialImage: "/public/me (2).png",
  canonicalURL: "https://mhmdathamna.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Mohammed Alathamna",
    specialty: "Web Developer",
    summary:
      "Developer based in Gaza, Palestine. I specialize in UI design, web application development and maintenance.",
    email: "eng.mhmdathamna@gmail.com",
  },
  experience: [
    {
      company: "👨‍💻 Self-Taught Front-End Developer",
      position: "Remote",
      startDate: "Sept 2020",
      endDate: "Present",
      summary: [
        "Built multiple personal projects using React, JavaScript, and modern web tools.",
        "Developed responsive UIs and dynamic components.",
        "Focused on performance, reusability, and clean architecture.",
        "Followed best practices in accessibility, routing, and state management."  
      ],
    },
    {
      company: "📚 Meta Front-End Developer Specialization (via Coursera)",
      position: "Online",
      startDate: "Jan 2025",
      endDate: "Agst 2025",
      summary: [
        "Completed hands-on projects and assignments as part of Meta’s official React certification track.",
        "Built several apps during the program including a shopping cart, multi-page site, and dynamic UI components.",
        "Gained deep knowledge in hooks, context, component lifecycle, and testing.",
        "Collaborated with peer learners in community discussions and reviews."
      ],
    },
    {
      company: "🧪 Personal & Open Source Projects",
      position: "GitHub",
      startDate: "Jun 2023",
      endDate: "Present",
      summary:
        "Created and maintained several real-world projects"
    },
  ],
  projects: [
    {
      name: "Spotifu Music",
      summary: "A music streaming app that emulates Spotify's core features.",
      linkPreview: "/",
      linkSource: "https://github.com",
      image: "/spotifu.png",
    },
    {
      name: "Shopp App",
      summary: "An e-commerce platform that replicates Shopify's key features.",
      linkPreview: "/",
      linkSource: "https://github.com",
      image: "/shopify-clon.png",
    },
    {
      name: "ClonTagram",
      summary: "A social network that replicates the features of Instagram",
      linkPreview: "/",
      linkSource: "https://github.com",
      image: "/clone-ig.png",
    },
  ],
  about: {
    description: `
      Hi, I’m Mohammed Alathamna, a passionate Web Developer with a knack for crafting seamless digital experiences. With a strong background in front-end web technologies, I thrive in the intersection where creativity meets technology.

      Over the years, I’ve honed my skills in building robust, user-friendly applications that not only meet the needs of users but also push the boundaries of what’s possible. My projects range from innovative mobile applications to responsive web designs, all with a focus on performance, security, and scalability.
    `,
    image: "/public/me (2).jpg",
  },
};

// #5755ff
