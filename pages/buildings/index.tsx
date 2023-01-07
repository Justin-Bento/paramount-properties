import Head from "next/head"

export default function index() {
  return (
    <>
      <Head>
        <title>Paramount Properties - Buildings</title>
      </Head>
      <main className="my-16 lg:my-24 wrapper">
        <section className="">
          <h1 className="mb-2 headline-large">Current Buildings</h1>
          <p className="max-w-3xl text-gray-600 body-large">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis possimus harum voluptates. Consectetur cumque itaque repudiandae sint aspernatur laborum expedita.</p>
        </section>
        <Tabs />
      </main>
    </>
  )
}


function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

function Tabs() {
  const tabs = [
    { name: 'Buying', href: '/properties/buying', current: false },
    { name: 'Selling', href: '/properties/selling', current: false },
    { name: 'Renting', href: '/properties/renting', current: true },
  ]
  return (
    <>
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
        <select
          id="tabs"
          name="tabs"
          className="block w-full border-gray-300 rounded-md focus:border-primary-500 focus:ring-primary-500"
          defaultValue={tabs.find((tab) => tab.current).name}
        >
          {tabs.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <nav className="flex space-x-4" aria-label="Tabs">
          {tabs.map((tab) => (
            <a
              key={tab.name}
              href={tab.href}
              className={classNames(
                tab.current ? 'bg-gray-100 text-gray-700' : 'text-gray-500 hover:text-gray-700',
                'px-3 py-2 font-medium text-sm rounded-md'
              )}
              aria-current={tab.current ? 'page' : undefined}
            >
              {tab.name}
            </a>
          ))}
        </nav>
      </div>
    </>
  )
}
