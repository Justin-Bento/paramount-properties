import Head from "next/head";
import Appbar from "../components/Apbbar";

export default function index() {
  return (
    <>
      <Head>
        <title>Paramount Properties</title>
      </Head>
      <Appbar />
      <main className="my-16 space-y-16">
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <Testimonials />
        <CallToActionPrimary />
        <CallToActionSecondary />
      </main>
    </>
  )
}

function Hero() {
  return (
    <section className="wrapper">
      <h1 className="headline-medium">Headline 1</h1>
      <div className="p body-large">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam qui aliquid asperiores reiciendis eligendi est placeat saepe in tempore, impedit nisi et voluptas eius vero, ipsum soluta eveniet possimus ullam.</div>
    </section>
  )
}
function PrimaryFeatures() {
  return (
    <section className="wrapper">
      <h2 className="headline-medium">Headline 2</h2>
      <div className="p body-large">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam qui aliquid asperiores reiciendis eligendi est placeat saepe in tempore, impedit nisi et voluptas eius vero, ipsum soluta eveniet possimus ullam.</div>
    </section>
  )
}
function SecondaryFeatures() {
  return (
    <section className="wrapper">
      <h3 className="headline-medium">Headline 3</h3>
      <div className="p body-large">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam qui aliquid asperiores reiciendis eligendi est placeat saepe in tempore, impedit nisi et voluptas eius vero, ipsum soluta eveniet possimus ullam.</div>
    </section>
  )
}
function Testimonials() {
  return (
    <section className="wrapper">
      <h4 className="headline-medium">Headline 4</h4>
      <div className="p body-large">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam qui aliquid asperiores reiciendis eligendi est placeat saepe in tempore, impedit nisi et voluptas eius vero, ipsum soluta eveniet possimus ullam.</div>
    </section>
  )
}
function CallToActionPrimary() {
  return (
    <section className="wrapper">
      <h5 className="headline-medium">Headline 5</h5>
      <div className="p body-large">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam qui aliquid asperiores reiciendis eligendi est placeat saepe in tempore, impedit nisi et voluptas eius vero, ipsum soluta eveniet possimus ullam.</div>
    </section>
  )
}
function CallToActionSecondary() {
  return (
    <section className="wrapper">
      <h6 className="headline-medium">Headline 6</h6>
      <div className="p body-large">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam qui aliquid asperiores reiciendis eligendi est placeat saepe in tempore, impedit nisi et voluptas eius vero, ipsum soluta eveniet possimus ullam.</div>
    </section>
  )
}