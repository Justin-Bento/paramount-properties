import Head from "next/head";
import Image from "next/image";
import Apbbar from "../components/Apbbar";
import Footer from "../components/Footer"
import Feature_Card_Component from "../components/Feature_Card_Component"
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Paramount Properties LTD</title>
      </Head>
      <Apbbar />
      <main className="">
        <section className="relative px-6 py-32 bg-gray-800 sm:py-40 sm:px-12 lg:px-16 animate-fadein">
          <div className="absolute inset-0 z-10 overflow-hidden">
            <Image src="/media/hero-pexels-alex-staudinger-1732414.jpg" fill quality={40} alt="" />
          </div>
          <div aria-hidden="true" className="absolute inset-0 z-20 bg-gray-900 bg-opacity-50" />
          <div className="relative z-20 p-4 pmx-auto max-w-7xl sm:px-6 lg:px-8 text-start">
            <h1 className="text-4xl leading-normal lg:text-5xl lg:leading-[3.8rem] capitalize text-white lg:max-w-4xl mb-4" >Creating spaces that are comfortable, memorable and inspiring.</h1>
            <p className="mb-6 text-lg leading-normal tracking-wide text-white lg:text-xl lg:max-w-3xl">In some places, it’s the only place we can find a permanent improvement. There’s no way around it, this is the land. The only way to find it is to do research and ask.</p>
            <Link href="/contact" className="items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm inline-flPex hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Contact Us</Link>
          </div>
        </section>
        <section className="p-4 mx-auto my-16 max-w-7xl sm:px-6 lg:px-8 md:p-0 lg:my-40">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="border rounded overflow-hidden bg-[#CFE6F1]">
              <div className="px-4 py-5 space-y-1.5 sm:p-6">
                <h2 className="font-bold text-[#006781]">Commercial Properties</h2>
                <p className="text-[#006781] ">Creative and inviting retail and hospitality environments.</p>
              </div>
            </div>
            <div className="border rounded overflow-hidden bg-[#CFE6F1]">
              <div className="px-4 py-5 space-y-1.5 sm:p-6">
                <h2 className="font-bold text-[#006781]">Residential Properties</h2>
                <p className="text-[#006781] ">Apartments, homes and vacation properties.</p>
              </div>
            </div>
            <div className="border rounded overflow-hidden bg-[#CFE6F1]">
              <div className="px-4 py-5 space-y-1.5 sm:p-6">
                <h2 className="font-bold text-[#006781]">For Inquiry & Sale</h2>
                <p className="text-[#006781] ">one-stop destination for its calm and convenient location</p>
              </div>
            </div>
            <div className="border rounded overflow-hidden bg-[#CFE6F1]">
              <div className="px-4 py-5 space-y-1.5 sm:p-6">
                <h2 className="font-bold text-[#006781]">Experiential Properties</h2>
                <p className="text-[#006781] ">Temporary and permanent branded spaces</p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-[#006781] py-16 p-4">
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 text-start lg:text-center">
            <h3 className="mb-2 text-2xl font-bold text-white">Get  Familiar & View Our Properties</h3>
            <p className="max-w-xl mb-6 text-white textx-md lg:mx-auto">Whether it is a simple, yet elegant home with a sleek modern design, or an elegant design with a nod to both.</p>
            <button className="items-center px-4 py-2 text-sm font-medium bg-[#BAEAFF] text-[#006781] border border-transparent rounded-md shadow-sm inline-flPex hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Contact Us</button>
          </div>
        </section>
        <section className="p-16 bg-gray-100 lg:py-40">
          <h4 className="mb-2 text-2xl">Reasons  To Choose Us Over Other Companies</h4>
          <p className="">Explore popular tourist destinations in and around the city, guests can seek travel desks www.example.com property features a stylish and spacious conference/banquet hall that have all modern amenities</p>
          <div className="grid grid-cols-1 gap-8 mt-6 md:grid-cols-2 lg:grid-cols-3">
            <Feature_Card_Component />
            <Feature_Card_Component />
            <Feature_Card_Component />
            <Feature_Card_Component />
            <Feature_Card_Component />
            <Feature_Card_Component />
          </div>
        </section>
        <section className="p-16 space-y-6 text-center lg:py-40">
          <h5 className="max-w-3xl mx-auto text-xl text-start lg:text-center leading-nromal">A lovely courtyard and backyard. Inside, you’ll find a large kitchen, a bathroom and a small living area. It’s got a bit of an intimate feel with a beautiful open deck and a full kitchen, which can be used for relaxing dinners.</h5>
          <div className="">
            {/* <img src="" alt="" className="" /> */}
            <p className="">Mary Jane</p>
          </div>
        </section>
        <section className="bg-[#006781]">
          <div className="flex justify-between p-16 py-32 item-center">
            <div className="">
              <h6 className="text-2xl font-bold text-sky-50">Stay Updated With Our Properties</h6>
              <p className="max-w-xl mt-2 text-sky-50">Whether it is a simple, yet elegant home with a sleek modern design, or an elegant design with a nod to both.</p>
            </div>
            <div className="">
              <button className="inline-flex items-center px-4 py-2 text-sm font-medium bg-[#BAEAFF] text-[#006781] border border-transparent rounded-md shadow-sm inline-flPex hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Contact Us</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
