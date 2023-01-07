import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineSparkles } from "react-icons/hi";
export default function index() {
  return (
    <>
      <Head>
        <title>Paramount Properties</title>
      </Head>

      <main className="my-8 space-y-16 md:my-16">
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <ProductSample />
        <CallToActionPrimary />
        <Testimonials />
      </main>
    </>
  );
}

function Hero() {
  const incentives = [
    {
      name: 'Free shipping',
      imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-shipping-simple.svg',
      description: "It's not actually free we just price it into the products. Someone's paying for it, and it's not us.",
    },
    {
      name: '10-year warranty',
      imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg',
      description: "If it breaks in the first 10 years we'll replace it. After that you're on your own though.",
    },
    {
      name: 'Exchanges',
      imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-exchange-simple.svg',
      description:
        "If you don't like it, trade it to one of your friends for something of theirs. Don't send it here though.",
    },
  ]
  return (
    <section className="mx-auto wrapper">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <Image width={800} height={800} src="/media/pexels-max-vakhtbovych-7534176.jpg" alt="company Building" className="hidden rounded-xl lg:block" />
        <div className="flex flex-col items-center md:place-content-center">
          <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-0.5 text-sm font-medium text-gray-800">
            Badge
          </span>
          <h1 className="display-medium">
            We built our business on customer service
          </h1>
          <p className="mt-4 text-lg body-large">
            We offer a wide range of services to our clients, including
            identifying ideal investments, obtaining financing for the purchase,
            managing the property, and helping to maximize the return on
            investment
          </p>
          <div className="flex flex-col w-full gap-4 mt-8 md:flex-row">
            <Link href="/buildings" className="inline-flex items-center px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-primary-800 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2">View Properties</Link>
            <Link href="/blog" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2">Market Resources</Link>
          </div>
        </div>
        <Image width={800} height={800} src="/media/pexels-max-vakhtbovych-7534176.jpg" alt="company Building" className="block rounded-xl lg:hidden" />
      </div>
      <div className="grid grid-cols-1 mt-16 gap-y-10 gap-x-8 lg:grid-cols-3">
        {incentives.map((incentive) => (
          <div key={incentive.name} className="sm:flex lg:block">
            <div className="sm:flex-shrink-0">
              <Image width={48} height={48} src={incentive.imageSrc} alt="" />
            </div>
            <div className="mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
              <h3 className="text-sm font-medium text-gray-900">{incentive.name}</h3>
              <p className="mt-2 text-sm text-gray-500">{incentive.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
function PrimaryFeatures() {
  return (
    <div className="bg-primary-800">
      <div className="py-16 lg:py-24 wrapper">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Trusted by Investors Across Antigua.
          </h2>
          <p className="max-w-3xl mx-auto mt-3 title-medium text-primary-200 sm:mt-4">
            Specialize in helping investors from around the world invest in the
            vibrant and growing real estate market in Antigua.
          </p>
        </div>
        <dl className="mt-10 text-center sm:mx-auto sm:grid sm:max-w-3xl sm:grid-cols-3 sm:gap-8">
          <div className="flex flex-col">
            <dt className="order-2 mt-2 title-small text-primary-200">
              Clients
            </dt>
            <dd className="order-1 text-5xl font-bold tracking-tight text-white">
              100%
            </dd>
          </div>
          <div className="flex flex-col mt-10 sm:mt-0">
            <dt className="order-2 mt-2 title-small text-primary-200">
              Support
            </dt>
            <dd className="order-1 text-5xl font-bold tracking-tight text-white">
              24/7
            </dd>
          </div>
          <div className="flex flex-col mt-10 sm:mt-0">
            <dt className="order-2 mt-2 title-small text-primary-200">
              Properties
            </dt>
            <dd className="order-1 text-5xl font-bold tracking-tight text-white">
              100k+
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}

function SecondaryFeatures() {
  let features = [
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
  return (
    <section className="wrapper">
      <h3 className="headline-medium">Identifying ideal investments</h3>
      <div className="max-w-3xl p body-large">
        Services to our clients,  amet consectetur adipisicing elit. Veniam qui
        aliquid asperiores reiciendis eligendi est placeat saepe in tempore,
        impedit nisi et voluptas eius vero, ipsum soluta eveniet.
      </div>
      <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
        {features.map((data) => {
          return (
            <div
              key={data.id}
              className="p-4 space-y-2 ring-1 ring-primary-700 rounded-xl"
            >
              <HiOutlineSparkles size="1.5rem" />
              <h3 className="capitalize type-label-large">{data.title}</h3>
              <p className="text-gray-500 body-medium">{data.body}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
function ProductSample() {
  return (
    <div className="wrapper">
      {/* Details section */}
      <section aria-labelledby="details-heading">
        <div className="flex flex-col items-start">
          <h2 id="details-heading" className="headline-large">The Fine Details</h2>
          <p className="max-w-3xl mt-2 body-large">
            Our patented padded snack sleeve construction protects your favorite treats from getting smooshed during
            all-day adventures, long shifts at work, and tough travel schedules.
          </p>
        </div>

        <div className="grid grid-cols-1 mt-16 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
          <div>
            <div className="w-full overflow-hidden rounded-lg aspect-w-3 aspect-h-2">
              <Image
                width={592}
                height={400}
                src="https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg"
                alt="Drawstring top with elastic loop closure and textured interior padding."
                className="object-cover object-center w-full h-full"
              />
            </div>
            <p className="mt-8 text-base text-gray-500">
              The 20L model has enough space for 370 candy bars, 6 cylinders of chips, 1220 standard gumballs, or any
              combination of on-the-go treats that your heart desires. Yes, we did the math.
            </p>
          </div>
          <div>
            <div className="w-full overflow-hidden rounded-lg aspect-w-3 aspect-h-2">
              <Image
                width={592}
                height={400}
                src="https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-02.jpg"
                alt="Front zipper pouch with included key ring."
                className="object-cover object-center w-full h-full"
              />
            </div>
            <p className="mt-8 text-base text-gray-500">
              Up your snack organization game with multiple compartment options. The quick-access stash pouch is ready
              for even the most unexpected snack attacks and sharing needs.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
function CallToActionPrimary() {
  return (
    <section className="bg-secondary-50">
      <div className="py-16 wrapper lg:py-24">
        <h2 className="mb-4 headline-large">
          <span className="block">Ready to dive in?</span>
          <span className="block text-secondary-600">Start your free trial today.</span>
        </h2>
        <div className="flex mt-8 lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white border border-transparent rounded-md bg-secondary-600 hover:bg-secondary-700"
            >
              Get started
            </a>
          </div>
          <div className="inline-flex ml-3 rounded-md shadow">
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium bg-white border border-transparent rounded-md text-secondary-600 hover:bg-secondary-50"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
function Testimonials() {
  return (
    <section className="py-12 overflow-hidden bg-gray-50 md:py-20 lg:py-24">
      <div className="relative px-6 mx-auto max-w-7xl lg:px-8">
        <svg
          className="absolute transform top-full right-full translate-x-1/3 -translate-y-1/4 lg:translate-x-1/2 xl:-translate-y-1/2"
          width={404}
          height={404}
          fill="none"
          viewBox="0 0 404 404"
          role="img"
          aria-labelledby="svg-workcation"
        >
          <title id="svg-workcation">Workcation</title>
          <defs>
            <pattern
              id="ad119f34-7694-4c31-947f-5c9d249b21f3"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={404} fill="url(#ad119f34-7694-4c31-947f-5c9d249b21f3)" />
        </svg>

        <div className="relative">
          <Image
            width={32}
            height={32}
            className="h-8 mx-auto"
            src="https://tailwindui.com/img/logos/workcation-logo-indigo-600-mark-gray-800-and-indigo-600-text.svg"
            alt="Workcation"
          />
          <blockquote className="mt-10">
            <div className="max-w-3xl mx-auto headline-small md:text-center text-start">
              <p>
                &ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente
                alias molestiae. Numquam corrupti in laborum sed rerum et corporis.&rdquo;
              </p>
            </div>
            <footer className="mt-8">
              <div className="md:flex md:items-center md:justify-center">
                <div className="md:flex-shrink-0">
                  <Image
                    width={40}
                    height={40}
                    className="mx-auto rounded-full"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                  <div className="text-base font-medium text-gray-900">Judith Black</div>

                  <svg className="hidden w-5 h-5 mx-1 text-indigo-600 md:block" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11 0h3L9 20H6l5-20z" />
                  </svg>

                  <div className="text-base font-medium text-gray-500">CEO, Workcation</div>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
