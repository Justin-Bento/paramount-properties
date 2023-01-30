import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FaLink } from "react-icons/fa"
export default function index() {
  return (
    <>
      <Head>
        <title>Paramount Properties LTD</title>
      </Head>
      <main className="space-y-8 lg:my-16 lg:space-y-16">
        <section className="p-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="overflow-hidden text-start lg:text-center">
            <div className="">
              <h1 className="font-bold display-medium lg:max-w-4xl lg:mx-auto">New Commercial Property Acquired: Exciting Opportunities for Businesses</h1>
            </div>
            <div className="lg:p-4">
              <p className="prose lg:mx-auto">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt laudantium at sit voluptatibus quisquam saepe illum commodi, adipisci dolore autem ratione dolorum amet quis distinctio dolor fugit ipsam nostrum officiis!</p>
              <div className="flex flex-col justify-start gap-4 mt-8 md:flex-row md:justify-center">
                <Link href="/contact" className="inline-flex items-center px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2" >Get Started Today</Link>
                <Link href="/buildings" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2" >View Properties</Link>
              </div>
              {/* END Section 01: Secondary Info */}
              <div className="relative w-full h-[480px] lg:h-[640px] mt-8 rounded-xl bg-white">
                {/* Hero Image Goes Here  */}
              </div>
            </div>
          </div>
          {/* END: Hero Section */}
          <div className="flex flex-col gap-8 p-4 mt-8 lg:flex-row">
            <div className="w-full h-56 overflow-hidden bg-white rounded-lg shadow">
              <div className="px-4 py-5 sm:p-6">{/* Content goes here */}</div>
            </div>
            {/* End of information herers */}
            <div className="w-full h-56 overflow-hidden bg-white rounded-lg shadow">
              <div className="px-4 py-5 sm:p-6">{/* Content goes here */}</div>
            </div>
            {/* End of information herers */}
            <div className="w-full h-56 overflow-hidden bg-white rounded-lg shadow">
              <div className="px-4 py-5 sm:p-6">{/* Content goes here */}</div>
            </div>
            {/* End of information herers */}
            <div className="w-full h-56 overflow-hidden bg-white rounded-lg shadow">
              <div className="px-4 py-5 sm:p-6">{/* Content goes here */}</div>
            </div>
            {/* End of information herers */}
          </div>
        </section>
        {/* END: Section 01 */}
        <section className="p-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="p-8 overflow-hidden rounded-lg bg-primary-600">
            <div className="px-4 py-2 text-start lg:text-center">
              <h2 className="font-bold headline-large text-gray-50">Real Estate Portfolio Management Simplified</h2>
            </div>
            <div className="px-4 text-start lg:text-center">
              <p className="prose text-gray-200 lg:mx-auto ">Specialize In Helping Investors From Around The World Invest In The Vibrant And Growing Real Estate Market In Antigua.</p>
            </div>
          </div>
        </section>
        {/* END: Section 02 */}
        <section className="p-4 mx-auto space-y-8 max-w-7xl sm:px-6 lg:px-8 lg:space-y-16">
          <div className="grid items-start grid-cols-1 gap-8 md:grid-cols-2 lg:items-center">
            <div className="">
              <h3 className="font-bold headline-large">Real Estate Investing: Residential & Commercial</h3>
              <p className="mt-2 prose">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt laudantium at sit voluptatibus quisquam saepe illum commodi, adipisci dolore autem ratione dolorum amet quis distinctio dolor fugit ipsam nostrum officiis!</p>
            </div>
            <div className="overflow-hidden bg-white rounded-lg shadow h-96">
              <div className="px-4 py-5 sm:p-6">{/* Content goes here */}</div>
            </div>
          </div>
          <div className="grid items-start grid-cols-1 gap-8 md:grid-cols-2 lg:items-center">
            <div className="overflow-hidden bg-white rounded-lg shadow h-96">
              <div className="px-4 py-5 sm:p-6">{/* Content goes here */}</div>
            </div>
            <div className="">
              <h3 className="font-bold headline-medium">Real Estate Investing: Residential & Commercial</h3>
              <p className="mt-2 prose">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt laudantium at sit voluptatibus quisquam saepe illum commodi, adipisci dolore autem ratione dolorum amet quis distinctio dolor fugit ipsam nostrum officiis!</p>
            </div>
          </div>
        </section>
        {/* END: Section 03 */}
        <section className="p-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 p-6 overflow-hidden bg-white shadow sm:rounded-lg lg:flex-row lg:gap-6">
            <div className="">
              <h4 className="max-w-3xl font-bold headline-medium">Why Choose Us & Profit from Real Estate: Develop & Manage Holdings</h4>
            </div>
            <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2">
              <div className="w-full h-48 border rounded-xl">
                <h4 className="title-medium">What Makes Us Different?</h4>
              </div>
              <div className="w-full h-48 border rounded-xl">
                <h4 className="title-medium">What Makes Us Different?</h4>
              </div>
              <div className="w-full h-48 border rounded-xl">
                <h4 className="title-medium">What Makes Us Different?</h4>
              </div>
              <div className="w-full h-48 border rounded-xl">
                <h4 className="title-medium">What Makes Us Different?</h4>
              </div>
            </div>
          </div>
        </section>
        {/* END: Section 04 */}
        <section className="p-4 mx-auto space-y-6 max-w-7xl sm:px-6 lg:px-8">
          <h5 className="max-w-3xl headline-medium">Making decisions about buying, selling, and improving properties in the portfolio</h5>
          <p className="prose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quibusdam asperiores numquam veniam accusamus modi! Mollitia quis earum, quo sunt est tenetur modi corporis ipsa quisquam magni placeat saepe obcaecati!</p>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" className="overflow-hidden transition-all bg-white divide-y divide-gray-200 rounded-lg shadow hover:opacity-90 hover:cursor-pointer">
              <div className="flex flex-row items-center justify-between px-4 py-5 sm:px-6">
                <h5 className="title-medium">The Burlington Boathouse</h5>
                <FaLink className="w-4 h-4 text-gray-500" />
              </div>
              <div className="relative w-full h-64">
                <Image fill quality={40} src="https://a0.muscache.com/im/pictures/a4140371-0e56-4554-b593-4f64242d5419.jpg?im_w=960" alt="" className="w-full h-full" />
              </div>
            </Link>
            {/* End: Property Image */}
            <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" className="overflow-hidden transition-all bg-white divide-y divide-gray-200 rounded-lg shadow hover:opacity-90 hover:cursor-pointer">
              <div className="flex flex-row items-center justify-between px-4 py-5 sm:px-6">
                <h5 className="title-medium">Luxury Log Cottage</h5>
                <FaLink className="w-4 h-4 text-gray-500" />
              </div>
              <div className="relative w-full h-64">
                <Image fill quality={40} src="https://a0.muscache.com/im/pictures/07dd4d2c-acda-4a2c-b9a7-916e7f4f116e.jpg?im_w=960" alt="" className="" />
              </div>
            </Link>
            {/* End: Property Image */}
            <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" className="overflow-hidden transition-all bg-white divide-y divide-gray-200 rounded-lg shadow hover:opacity-90 hover:cursor-pointer">
              <div className="flex flex-row items-center justify-between px-4 py-5 sm:px-6">
                <h5 className="title-medium">Waterfront Beach House Oasis</h5>
                <FaLink className="w-4 h-4 text-gray-500" />
              </div>
              <div className="relative w-full h-64">
                <Image fill quality={40} src="https://a0.muscache.com/im/pictures/miso/Hosting-698118548547405462/original/714e3494-d377-40f3-a61b-97e387fba7b6.jpeg?im_w=960" alt="" className="" />
              </div>
            </Link>
            {/* End: Property Image */}
          </div>
        </section>
        {/* END: Section 05 */}
        <section className="p-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative bg-gray-900 rounded-xl">
            {/* Decorative image and overlay */}
            <div aria-hidden="true" className="absolute inset-0 overflow-hidden rounded-xl">
              <Image fill quality={40}
                src="https://tailwindui.com/img/ecommerce-images/home-page-01-hero-full-width.jpg"
                alt=""
                className="object-cover object-center w-full h-full rounded-xl"
              />
            </div>
            <div aria-hidden="true" className="absolute inset-0 bg-gray-900 opacity-50 rounded-xl" />

            <div className="relative flex flex-col items-center max-w-3xl px-6 py-32 mx-auto text-center sm:py-64 lg:px-0">
              <h6 className="text-4xl font-bold tracking-tight text-white lg:text-6xl">New arrivals are here</h6>
              <p className="mt-4 text-xl text-white">
                The new arrivals have, well, newly arrived. Check out the latest options from our summer small-batch release
                while they&#39;re still in stock.
              </p>
              <Link
                href="/#"
                className="inline-block px-8 py-3 mt-8 text-base font-medium text-gray-900 bg-white border border-transparent rounded-md hover:bg-gray-100"
              >
                Shop New Arrivals
              </Link>
            </div>
          </div>
        </section>
        {/* END: Section 06 */}
      </main>
    </>
  )
}
