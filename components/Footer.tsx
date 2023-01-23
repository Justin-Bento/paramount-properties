import { footer_navigation } from "../lib/data"

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="px-6 py-20 mx-auto overflow-hidden max-w-7xl sm:py-24 lg:px-8">
        <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
          {footer_navigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              <a href={item.href} className="prose text-gray-200">
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <div className="flex justify-center mt-10 space-x-10">
          {footer_navigation.social.map((item) => (
            <a key={item.name} href={item.href} className="prose text-gray-200">
              <span className="sr-only">{item.name}</span>
              <item.icon className="w-6 h-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="mt-10 text-xs leading-5 text-center text-gray-300">
          &copy; {new Date().getFullYear()} Paramount Properties LTD, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
