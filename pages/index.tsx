import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineCalendar, } from "react-icons/hi"

export default function index() {
  return (
    <>
      <Head>
        <title>Paramount Properties LTD</title>
      </Head>
      <main className="space-y-16 lg:mt-16">
        <Section_1 />
        <Section_2 />
        <Section_3 />
        <Section_4 />
        <Section_5 />
        <Section_6 />
      </main>
    </>
  )
}

function Section_1() {
  return (
    <>
      <section className="wrapper">
        <div className="flex flex-col items-start justify-center mx-auto text-center lg:items-center">
          <h1 className="display-medium w-full lg:max-w-[30ch] leading-normal"> Discover Real Estate Investment Opportunities with Us!</h1>
          <p className="w-full mt-4 prose lg:max-w-3xl">We offer comprehensive services, including market analysis, property evaluation, financing options, and tenant management, to ensure that you maximize your return on investment. With our expertise in the real estate market, we can help you identify the hidden gems that will yield the highest returns and provide you with long-term stability.</p>
          <div className="mt-4 space-x-4">
            <Link href="/contact" className="inline-flex items-center px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2">
              Send Us A Message
            </Link>
            <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2">
              Button text
            </button>
          </div>
          {/* End of Hero Content with action */}
          <div className="relative w-full h-[500px] my-8">
            <Image fill quality={40} alt="people moving into their new home" src="/media/people-movingin.jpg" className="object-cover rounded-xl " />
          </div>
          {/* End of Image Calander */}
        </div>
        <div className="col-span-2">
          <div className="flex flex-col items-start justify-between gap-16 lg:flex-row lg:items-center">
            <div className="flex gap-2">
              <HiOutlineCalendar className="w-6 h-6" />
              <div className="flex flex-col">
                <p className="text-gray-500">We’ll replace it with a new one</p>
                <p className="font-medium text-gray-900">10-year all-inclusive warranty</p>
              </div>
            </div>
            <div className="flex gap-2">
              <HiOutlineCalendar className="w-6 h-6" />
              <div className="flex flex-col">
                <p className="text-gray-500">We’ll replace it with a new one</p>
                <p className="font-medium text-gray-900">10-year all-inclusive warranty</p>
              </div>
            </div>
            <div className="flex gap-2">
              <HiOutlineCalendar className="w-6 h-6" />
              <div className="flex flex-col">
                <p className="text-gray-500">We’ll replace it with a new one</p>
                <p className="font-medium text-gray-900">10-year all-inclusive warranty</p>
              </div>
            </div>
          </div>
        </div>
        {/* End of Incentives */}
      </section>
    </>
  )
}
function Section_2() {
  return (
    <>
      <section className="border-t">
        <div className="wrapper">
          <h2 className="display-small max-w-[40ch] text-center pt-16 mx-auto">Invest with Confidence in Commercial & Residential Real Estate!</h2>
          <p className="mx-auto mt-4 prose text-center">Invest in commercial and residential real estate for a steady income. Get help from an experienced real estate pro to acquire the right property, negotiate leases, and manage tenant relationships to maximize your return on investment.</p>
          <div className="grid gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="w-full transition-all bg-gray-400 h-72 hover:scale-105 hover:rotate-2 hover:cursor-pointer rounded-xl">Buying</div>
            <div className="w-full transition-all bg-gray-400 h-72 hover:scale-105 hover:cursor-pointer rounded-xl">Selling</div>
            <div className="w-full transition-all bg-gray-400 h-72 hover:scale-105 hover:-rotate-2 hover:cursor-pointer rounded-xl">Renting</div>
          </div>
        </div>
      </section>
    </>
  )
}
function Section_3() {
  return (
    <>
      <section className="border-t">
        <div className="grid grid-cols-1 gap-8 wrapper md:grid-cols-2">
          <div className="">
            <h3 className="max-w-xl pt-16 display-small">Get Professional Real Estate Management Services Today!</h3>
            <p className="mt-4 prose">Our experienced team can help identify and acquire property, negotiate leases, oversee construction, and maximize ROI. Get professional real estate management services today for a successful investment.</p>
          </div>
          <div className="flex flex-col justify-end mt-8 space-y-16 lg:mt-40 lg:items-end">
            <h3 className="w-2/3 pb-4 font-normal border-b headline-medium">Service Infromation 1</h3>
            <h3 className="w-2/3 pb-4 font-normal border-b headline-medium">Service Infromation 2</h3>
            <h3 className="w-2/3 pb-4 font-normal border-b headline-medium">Service Infromation 3</h3>
            <h3 className="w-2/3 pb-4 font-normal border-b headline-medium">Service Infromation 4</h3>
          </div>
        </div>
      </section>
    </>
  )
}
function Section_4() {
  return (
    <>
      <section className="py-24 bg-primary-600 ">
        <div className="text-center wrapper">
          <h4 className="display-small max-w-[40ch] text-center mx-auto text-white">Reap Maximum Returns on Your Real Estate Investments!</h4>
          <p className="mx-auto mt-4 prose text-center text-white">It&#39;s time to take learn about real estate. Let a professional help you so you can feel like you&#39;re not getting ripped off!</p>
        <button type="button" className="inline-flex items-center px-3 py-2 mt-6 text-sm font-medium leading-4 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" > Button text </button>
        </div>
      </section>
    </>
  )
}
function Section_5() {
  return (
    <>
      <section className="">
        <div className="wrapper">
          <h5 className="display-small max-w-[40ch] text-center mx-auto">Streamline Your Real Estate Investment Strategies with Our Services!</h5>
          <p className="mx-auto mt-4 prose text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo quos tempore tenetur ex voluptatem. Officia aliquid explicabo dolore voluptate, et ab porro laboriosam dolor cum sapiente exercitationem sint tempora totam!</p>
          <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="w-full h-40 bg-gray-500"></div>
            <div className="w-full h-40 bg-gray-500"></div>
            <div className="w-full h-40 bg-gray-500"></div>
            <div className="w-full h-40 bg-gray-500"></div>
            <div className="w-full h-40 bg-gray-500"></div>
            <div className="w-full h-40 bg-gray-500"></div>
          </div>
        </div>
      </section>
    </>
  )
}
function Section_6() {
  return (
    <>
      <section className="border-t">
        <div className="bg-white">
          <div className="relative bg-gray-900">
            {/* Decorative image and overlay */}
            <div aria-hidden="true" className="absolute inset-0 w-full h-full overflow-hidden">
              <Image
                fill
                quality={40}
                src="https://tailwindui.com/img/ecommerce-images/home-page-01-hero-full-width.jpg"
                alt=""
                className="object-cover object-center"
              />
            </div>
            <div aria-hidden="true" className="absolute inset-0 bg-gray-900 opacity-50" />
            <div className="relative flex flex-col items-center max-w-3xl px-6 py-16 mx-auto text-center sm:py-24 lg:px-0">
              <h6 className="display-small max-w-[40ch] text-center pt-16 mx-auto text-white">Make Your Real Estate Dreams a Reality with Our Services!</h6>
              <p className="mx-auto mt-4 prose text-center text-gray-200">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo quos tempore tenetur ex voluptatem. Officia aliquid explicabo dolore voluptate, et ab porro laboriosam dolor cum sapiente exercitationem sint tempora totam!</p>
              <a
                href="#"
                className="inline-block px-8 py-3 mt-8 text-base font-medium text-gray-900 bg-white border border-transparent rounded-md hover:bg-gray-100"
              >
                Shop New Arrivals
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}