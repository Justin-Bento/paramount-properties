import Link from 'next/link';
import { HiChevronRight, HiHome } from 'react-icons/hi'
import {  } from "../lib/data";

export default function Breadcrumbs({Links}: any) {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol role="list" className="flex items-center space-x-4">
        <li>
          <div>
            <Link href="/" className="text-gray-400 hover:text-gray-500">
              <HiHome className="flex-shrink-0 w-5 h-5" aria-hidden="true" />
              <span className="sr-only">Home</span>
            </Link>
          </div>
        </li>
        {Links.map((page: any) => (
          <li key={page.name}>
            <div className="flex items-center">
              <HiChevronRight className="flex-shrink-0 w-5 h-5 text-gray-400" aria-hidden="true" />
              <Link
                href={page.href}
                className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                aria-current={page.current ? 'page' : undefined}
              >
                {page.name}
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  )
}
