import Head from "next/head";
import Apbbar from "../components/Apbbar";
import Footer from "../components/Footer";

export default function about() {
  return (
    <>
      <Head>
        <title>Paramount Properties - About</title>
      </Head>
      <Apbbar/>
      <main className="my-8 space-y-24 md:my-16 wrapper">
        <section>
          <h1 className="">About Us</h1>
        </section>
        <section>
          <h2 className="">About Us</h2>
        </section>
        <section>
          <h3 className="">About Us</h3>
        </section>
        <section>
          <h4 className="">About Us</h4>
        </section>
        <section>
          <h5 className="">About Us</h5>
        </section>
        <section>
          <h6 className="">About Us</h6>
        </section>
      </main>
      <Footer />
    </>
  )
}
