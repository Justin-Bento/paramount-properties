const product = {
  name: "Unique waterfront property",
  images: [
    {
      id: 1,
      name: "Angled view",
      src: "https://a0.muscache.com/im/pictures/a738eec4-43e3-4b57-91fc-ebb49ab383e1.jpg?im_w=1200",
      alt: "Angled front view with bag zipped and handles upright.",
    },
    // More images...
    {
      id: 1,
      name: "Angled view",
      src: "https://a0.muscache.com/im/pictures/83701108-983f-4600-9844-3e36e76ffbaf.jpg?im_w=720",
      alt: "Angled front view with bag zipped and handles upright.",
    },
    // More images...
    {
      id: 1,
      name: "Angled view",
      src: "https://a0.muscache.com/im/pictures/ce9ec53d-3225-4c4c-b979-7821b77f22dd.jpg?im_w=720",
      alt: "Angled front view with bag zipped and handles upright.",
    },
    // More images...
    {
      id: 1,
      name: "Angled view",
      src: "https://a0.muscache.com/im/pictures/786b83af-6e30-4528-8a45-98b4f1fca791.jpg?im_w=1200",
      alt: "Angled front view with bag zipped and handles upright.",
    },
    {
      id: 1,
      name: "Angled view",
      src: "https://a0.muscache.com/im/pictures/786b83af-6e30-4528-8a45-98b4f1fca791.jpg?im_w=1200",
      alt: "Angled front view with bag zipped and handles upright.",
    },
    // More images...
  ],
  description: `
    <p>This unique home is lakefront on lake ontario and is centered between toronto and niagra falls ontario.  In the summer months you can swim in the lake or just relax in the hot tub all year long.  Friendly outgoing host. This is a shared accommodation with your private room with mini fridge and tv.  The hot tub is private to you and the rest of the home is shared with open concept home.</p>
  `,
  details: [
    {
      name: "Features",
      items: [
        "Multiple strap configurations",
        "Spacious interior with top zip",
        "Leather handle and tabs",
        "Interior dividers",
        "Stainless strap loops",
        "Double stitched construction",
        "Water-resistant",
      ],
    },
    // More sections...
  ],
};
const incentives = [
  {
    name: "Information driven",
    imageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-shipping-simple.svg",
    description:
      "It's not actually free we just price it into the products. Someone's paying for it, and it's not us.",
  },
  {
    name: "Insider Knowldege",
    imageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg",
    description:
      "If it breaks in the first 10 years we'll replace it. After that you're on your own though.",
  },
  {
    name: "No Hidden Exchanges",
    imageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-exchange-simple.svg",
    description:
      "If you don't like it, trade it to one of your friends for something of theirs. Don't send it here though.",
  },
];

const pages = [
  { name: "buildings", href: "/buildings", current: false },
  {
    name: "Unique Waterfront Property On Lake Ontario",
    href: "/buildings/slug",
    current: true,
  },
];
const properties = [
  {
    id: 1,
    title: "Unique waterfront property",
    link: "/slug",
    status: 'Buying',
    image:
      "https://a0.muscache.com/im/pictures/a738eec4-43e3-4b57-91fc-ebb49ab383e1.jpg?im_w=1200",
  },
  {
    id: 2,
    title: "Unique waterfront property",
    link: "/slug",
    status: 'Buying',
    image:
      "https://a0.muscache.com/im/pictures/a738eec4-43e3-4b57-91fc-ebb49ab383e1.jpg?im_w=1200",
  },
  {
    id: 3,
    title: "Unique waterfront property",
    link: "/slug",
    status: 'Buying',
    image:
      "https://a0.muscache.com/im/pictures/a738eec4-43e3-4b57-91fc-ebb49ab383e1.jpg?im_w=1200",
  },
  {
    id: 2,
    title: "Sunset Point",
    link: "/slug",
    status: 'Selling',
    image: "/media/properties/pexels-jonathan-borba-3217505.jpg",
  },
  {
    id: 3,
    title: "Sunset Point",
    link: "/slug",
    status: 'Renting',
    image: "/media/properties/pexels-muffin-creatives-2468773.jpg",
  },
  {
    id: 4,
    title: "Sunset Point",
    link: "/slug",
    status: 'Renting',
    image: "/media/properties/pexels-taras-makarenko-593171.jpg",
  },
];
let secondary_features = [
  {
    id: 1,
    title: "Know The Client Personal",
    body: "Researching and evaluating properties to identify potential investments",
  },
  {
    id: 2,
    title: "Undedrstand Your Needs & Goals",
    body: "Negotiating contracts and leases with tenants and landlords",
  },
  {
    id: 3,
    title: "Research the local real estate market",
    body: "Ensuring compliance with applicable laws and regulations",
  },
  {
    id: 4,
    title: "Find properties to invest in",
    body: "Developing and implementing strategies to maximize the value of the company’s real estate holdings.",
  },
  {
    id: 5,
    title: "Analyze the financial feasibility",
    body: "Monitoring the performance of the company’s real estate holdings",
  },
  {
    id: 6,
    title: "Secure financing",
    body: "Maintaining relationships with tenants, landlords, and other stakeholders.",
  },
  {
    id: 7,
    title: "Manage the property",
    body: "Managing budgets and financial plans for the company’s real estate portfolio.",
  },
  {
    id: 8,
    title: "Market and lease the property",
    body: "Providing regular reports to senior management on the performance.",
  },
  {
    id: 9,
    title: "Maximize the return on investment",
    body: "Develop and manage budgets and financial plans for the company’s real estate holdings.",
  },
];
const footer_navigation = {
  main: [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Jobs", href: "#" },
    { name: "Press", href: "#" },
    { name: "Accessibility", href: "#" },
    { name: "Partners", href: "#" },
  ],
  social: [
    {
      name: "Facebook",
      href: "#",
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "#",
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Twitter",
      href: "#",
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      href: "#",
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "YouTube",
      href: "#",
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};
export {
  product,
  properties,
  pages,
  incentives,
  secondary_features,
  footer_navigation,
};
