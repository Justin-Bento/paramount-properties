const product = {
  name: 'Unique waterfront property on Lake Ontario',
  images: [
    {
      id: 1,
      name: 'Angled view',
      src: 'https://a0.muscache.com/im/pictures/a738eec4-43e3-4b57-91fc-ebb49ab383e1.jpg?im_w=1200',
      alt: 'Angled front view with bag zipped and handles upright.',
    },
    // More images...
    {
      id: 1,
      name: 'Angled view',
      src: 'https://a0.muscache.com/im/pictures/83701108-983f-4600-9844-3e36e76ffbaf.jpg?im_w=720',
      alt: 'Angled front view with bag zipped and handles upright.',
    },
    // More images...
    {
      id: 1,
      name: 'Angled view',
      src: 'https://a0.muscache.com/im/pictures/ce9ec53d-3225-4c4c-b979-7821b77f22dd.jpg?im_w=720',
      alt: 'Angled front view with bag zipped and handles upright.',
    },
    // More images...
    {
      id: 1,
      name: 'Angled view',
      src: 'https://a0.muscache.com/im/pictures/786b83af-6e30-4528-8a45-98b4f1fca791.jpg?im_w=1200',
      alt: 'Angled front view with bag zipped and handles upright.',
    },
    {
      id: 1,
      name: 'Angled view',
      src: 'https://a0.muscache.com/im/pictures/786b83af-6e30-4528-8a45-98b4f1fca791.jpg?im_w=1200',
      alt: 'Angled front view with bag zipped and handles upright.',
    },
    // More images...
  ],
  description: `
    <p>This unique home is lakefront on lake ontario and is centered between toronto and niagra falls ontario.  In the summer months you can swim in the lake or just relax in the hot tub all year long.  Friendly outgoing host. This is a shared accommodation with your private room with mini fridge and tv.  The hot tub is private to you and the rest of the home is shared with open concept home.</p>
  `,
  details: [
    {
      name: 'Features',
      items: [
        'Multiple strap configurations',
        'Spacious interior with top zip',
        'Leather handle and tabs',
        'Interior dividers',
        'Stainless strap loops',
        'Double stitched construction',
        'Water-resistant',
      ],
    },
    // More sections...
  ],
}
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
  { name: 'buildings', href: '/buildings', current: false },
  { name: 'Unique Waterfront Property On Lake Ontario', href: '/buildings/slug', current: true },
]
const properties = [
  {id: 1, title: "Unique waterfront property on Lake Ontario", link: "/slug", image: "https://a0.muscache.com/im/pictures/a738eec4-43e3-4b57-91fc-ebb49ab383e1.jpg?im_w=1200"},
  {id: 2, title: "Sunset Point", link: "/slug", image: "/media/properties/pexels-jonathan-borba-3217505.jpg"},
  {id: 3, title: "Sunset Point", link: "/slug", image: "/media/properties/pexels-muffin-creatives-2468773.jpg"},
  {id: 4, title: "Sunset Point", link: "/slug", image: "/media/properties/pexels-taras-makarenko-593171.jpg"}
]
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
export  {product, properties, pages ,incentives, secondary_features}