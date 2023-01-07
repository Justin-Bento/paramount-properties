import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { HiMenu, HiX } from "react-icons/hi"
import Image from 'next/image'
import Logo from './Logo'
import Link from 'next/link'


const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Buildings', href: '/buildings' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

export default function Apbbar() {
  return (
    <div className="flex flex-col min-h-full">
      <Popover className="relative bg-gray-50">
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <div className="flex items-center justify-between py-6 border-b-2 border-gray-100 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link href="/">
                <span className="sr-only">Your Company</span>
                <Logo />
              </Link>
            </div>
            <div className="-my-2 -mr-2 md:hidden">
              <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500">
                <span className="sr-only">Open menu</span>
                <HiMenu className="w-6 h-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <nav className="hidden space-x-10 md:flex">
              {navigation.map((item, itemIdx) => (
                <a key={itemIdx} href={item.href} className="text-base font-medium text-gray-500 hover:text-gray-900">
                  {item.name}
                </a>
              ))}
            </nav>
            <div className="items-center justify-end hidden md:flex md:flex-1 lg:w-0">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-4 py-2 ml-8 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-primary-600 whitespace-nowrap hover:bg-primary-700"
              >
                Send Us A Message
              </Link>
            </div>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel focus className="absolute inset-x-0 top-0 p-2 transition origin-top transform md:hidden">
            <div className="overflow-hidden bg-white rounded-lg shadow-md ring-1 ring-black ring-opacity-5">
              <div className="flex items-center justify-between px-5 pt-4">
                <div>
                <Logo />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-600">
                    <span className="sr-only">Close menu</span>
                    <HiX className="w-6 h-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="pt-5 pb-6">
                <div className="px-2 space-y-1">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="px-5 mt-6">
                  <Link href="/contact" className="block w-full px-4 py-3 font-medium text-center text-white rounded-md shadow bg-primary-600 hover:bg-primary-700">Send Us A Message</Link>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  )
}
