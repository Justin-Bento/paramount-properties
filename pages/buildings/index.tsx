import Head from "next/head"
import PropertyCard from "../../components/PropertyCard"
import { properties } from "../../lib/data"
import { Tab } from '@headlessui/react'


export default function index() {
  return (
    <>
      <Head>
        <title>Buildings - Paramount Properties</title>
      </Head>
      <main className="my-16 wrapper">
        <section className="mb-8">
          <h1 className="mb-2 headline-large">Current Buildings</h1>
          <p className="max-w-3xl text-gray-600 body-large">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis possimus harum voluptates. Consectetur cumque itaque repudiandae sint aspernatur laborum expedita.</p>
        </section>
        <section className="">
          <Tab.Group>
            <Tab.List className="space-x-4">
              <Tab>Buying</Tab>
              <Tab>Selling</Tab>
              <Tab>Renting</Tab>
            </Tab.List>
            <Tab.Panels as="section">
              <Tab.Panel>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {properties.filter(person => person.status == "Buying").map(filteredPerson => (
                    <PropertyCard key={filteredPerson.id} Headline={filteredPerson.title} Meida={filteredPerson.image} Path={filteredPerson.title.toString().toLowerCase().replace(/\s+/g, '-')} Status="Buying" />
                  ))}
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {properties.filter(person => person.status == "Selling").map(filteredPerson => (
                    <PropertyCard key={filteredPerson.id} Headline={filteredPerson.title} Meida={filteredPerson.image} Path={filteredPerson.title.toString().toLowerCase().replace(/\s+/g, '-')} Status="Selling" />
                  ))}
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {properties.filter(person => person.status == "Renting").map(filteredPerson => (
                    <PropertyCard key={filteredPerson.id} Headline={filteredPerson.title} Meida={filteredPerson.image} Path={filteredPerson.title.toString().toLowerCase().replace(/\s+/g, '-')} Status="Renting" />
                  ))}
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </section>

      </main>
    </>
  )
}

