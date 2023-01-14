  import Head from "next/head"
import PropertyCard from "../../components/PropertyCard"
import Tabs from "../../components/Tabs"
import { properties } from "../../lib/data"

export default function index() {
  return (
    <>
      <Head>
        <title>Paramount Properties - Buildings</title>
      </Head>
      <main className="my-16 wrapper">
        <section className="mb-8">
          <h1 className="mb-2 headline-large">Current Buildings</h1>
          <p className="max-w-3xl text-gray-600 body-large">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis possimus harum voluptates. Consectetur cumque itaque repudiandae sint aspernatur laborum expedita.</p>
        </section>
        <Tabs />
        <section className="flex flex-col gap-8 mt-8">
          {properties.map((data) => {
            return <PropertyCard key={data.id} Headline={data.title} Path={data.link} Meida={data.image} />
          })}
          
        </section>
      </main>
    </>
  )
}

