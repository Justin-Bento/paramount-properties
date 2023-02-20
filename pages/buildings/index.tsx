import Head from "next/head"
import PropertyCard from "../../components/PropertyCard"
import { properties } from "../../lib/data"
import { Tab } from '@headlessui/react'
import Apbbar from "../../components/Apbbar"
import Footer from "../../components/Footer"


export default function index() {
  return (
    <>
      <Head>
        <title>Buildings - Paramount Properties</title>
      </Head>
      <Apbbar />
      <Tab.Group as="main">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col justify-center gap-8 px-16">
            <div className="">
              <h1 className="mb-2 headline-large">Current Buildings</h1>
              <p className="max-w-3xl text-gray-600 body-large">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis possimus harum voluptates. Consectetur cumque itaque repudiandae sint aspernatur laborum expedita.</p>
            </div>
            <Tab.List className="flex flex-col items-start gap-8">
              <Tab>Buying</Tab>
              <Tab>Selling</Tab>
              <Tab>Renting</Tab>
            </Tab.List>
          </div>
          <Tab.Panels as="section">
            <Tab.Panel className="flex flex-col gap-2">
              {properties.filter(person => person.status == "Buying").map(filteredPerson => (
                <PropertyCard key={filteredPerson.id} Headline={filteredPerson.title} Meida={filteredPerson.image} Path={filteredPerson.title.toString().toLowerCase().replace(/\s+/g, '-')} Status="Buying" />
              ))}
            </Tab.Panel>
            <Tab.Panel className="flex flex-col gap-2">
              {properties.filter(person => person.status == "Selling").map(filteredPerson => (
                <PropertyCard key={filteredPerson.id} Headline={filteredPerson.title} Meida={filteredPerson.image} Path={filteredPerson.title.toString().toLowerCase().replace(/\s+/g, '-')} Status="Selling" />
              ))}
            </Tab.Panel>
            <Tab.Panel className="flex flex-col gap-2">
              {properties.filter(person => person.status == "Renting").map(filteredPerson => (
                <PropertyCard key={filteredPerson.id} Headline={filteredPerson.title} Meida={filteredPerson.image} Path={filteredPerson.title.toString().toLowerCase().replace(/\s+/g, '-')} Status="Renting" />
              ))}
            </Tab.Panel>
          </Tab.Panels>
        </div>
      </Tab.Group>
      <Footer />
    </>
  )
}

