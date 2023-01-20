import { Disclosure, Tab } from '@headlessui/react'
import Head from 'next/head'
import Image from 'next/image'
import { HiMinus, HiPlus } from 'react-icons/hi'
import Breadcrumbs from '../../components/Breadcrumbs'
import { product, pages } from "../../lib/data"

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <>
      <Head>
        <title>Buildings Slug - Paramount Properties</title>
      </Head>
      <main className="my-16 space-y-8 wrapper">
        <Breadcrumbs Links={pages} />

        <div className="">
          <h1 className="headline-medium">{product.name}</h1>
          <div className="mt-2">
            <h3 className="sr-only">Description</h3>
            <div className="max-w-5xl body-large" dangerouslySetInnerHTML={{ __html: product.description }} />
          </div>
        </div>
        <Image_Galler />
        {/* Image gallery */}
        <Production_Info />
        {/* Product info */}
      </main>
    </>
  )
}
function Production_Info() {
  return (
    <>
      <div className="px-4 mt-10 sm:mt-16 sm:px-0 lg:mt-0">


        <section aria-labelledby="details-heading" className="mt-12">
          <h2 id="details-heading" className="sr-only">
            Additional details
          </h2>

          <div className="border-t divide-y divide-gray-200">
            {product.details.map((detail) => (
              <Disclosure as="div" key={detail.name}>
                {({ open }) => (
                  <>
                    <h3>
                      <Disclosure.Button className="relative flex items-center justify-between w-full py-6 text-left group">
                        <span
                          className={classNames(open ? 'text-indigo-600' : 'text-gray-900', 'text-sm font-medium')}
                        >
                          {detail.name}
                        </span>
                        <span className="flex items-center ml-6">
                          {open ? (
                            <HiMinus className="block w-6 h-6 text-indigo-400 group-hover:text-indigo-500" aria-hidden="true" />
                          ) : (
                            <HiPlus className="block w-6 h-6 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </h3>
                    <Disclosure.Panel as="div" className="pb-6 prose-sm prose">
                      <ul role="list">
                        {detail.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}
function Image_Galler() {
  return (
    <>
      <Tab.Group as="section" className="flex flex-col-reverse mb-4">
        {/* Image selector */}
        <div className="hidden w-full mx-auto mt-6 sm:block lg:max-w-none">
          <Tab.List className="grid grid-cols-5 gap-6">
            {product.images.map((image) => (
              <Tab key={image.id} className="relative flex items-center justify-center h-24 text-sm font-medium text-gray-900 uppercase bg-white rounded-md cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4">
                {({ selected }) => (
                  <>
                    <span className="sr-only"> {image.name} </span>
                    <span className="absolute inset-0 overflow-hidden rounded-md">
                      <Image fill src={image.src} alt="" className="object-cover object-center h-full" />
                    </span>
                    <span
                      className={classNames(
                        selected ? 'ring-indigo-500' : 'ring-transparent',
                        'pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2'
                      )}
                      aria-hidden="true"
                    />
                  </>
                )}
              </Tab>
            ))}
          </Tab.List>
        </div>
        <Tab.Panels className="w-full aspect-w-16 aspect-h-7">
          {product.images.map((image) => (
            <Tab.Panel key={image.id}>
              <Image fill src={image.src} alt={image.alt} className="object-cover object-center sm:rounded-lg" />
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </>
  )
}