import Head from "next/head";
import Link from "next/link";

export default function Blog() {
  return (
    <>
      <Head>
        <title>Paramount Properties - Blog</title>
      </Head>
      <main className="my-8 md:my-16 wrapper lg:my-24">
        <section className="mb-8">
          <h1 className="mb-2 headline-large">Current Buildings</h1>
          <p className="max-w-3xl text-gray-600 body-large">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis possimus harum voluptates. Consectetur cumque itaque repudiandae sint aspernatur laborum expedita.</p>
        </section>
        <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card />
          <Card />
          <Card />
        </section>
      </main>
    </>
  )
}
function Card() {
  return (
    <div className="flex justify-center">
      <div className="max-w-sm bg-white border rounded-lg">
        <Link href="/blog/slug">
          <img className="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" alt="" />
        </Link>
        <div className="p-6">
          <h5 className="mb-2 text-gray-900 headline-small">Card title</h5>
          <p className="mb-4 text-gray-700 body-large">
            Some quick example text to build on the card title and make up the bulk of the card's
            content.
          </p>
          <Link href="/blog/slug" className="inline-flex items-center rounded border border-transparent bg-indigo-100 px-2.5 py-1.5 text-xs font-medium text-indigo-700 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Button</Link>
        </div>
      </div>
    </div>
  )
}