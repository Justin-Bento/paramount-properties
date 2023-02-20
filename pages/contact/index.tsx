import Head from 'next/head'
import { useForm, SubmitHandler } from "react-hook-form";
import { HiPhone, HiMail } from 'react-icons/hi'
import Apbbar from '../../components/Apbbar'
import Footer from '../../components/Footer'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Paramount Propertiies - Contact</title>
      </Head>
      <Apbbar />
      <div className="relative bg-white">
        <div className="absolute inset-0">
          <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50" />
        </div>
        <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
          <div className="px-6 py-16 bg-gray-50 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
            <div className="max-w-lg mx-auto">
              <h2 className="headline-medium">Get in touch</h2>
              <p className="mt-2 text-gray-500 body-large">
                Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus
                arcu.
              </p>
              <dl className="mt-8 text-base text-gray-500">
                <div>
                  <dt className="sr-only">Postal address</dt>
                  <dd>
                    <p>742 Evergreen Terrace</p>
                    <p>Springfield, OR 12345</p>
                  </dd>
                </div>
                <div className="mt-6">
                  <dt className="sr-only">Phone number</dt>
                  <dd className="flex">
                    <HiPhone className="flex-shrink-0 w-6 h-6 text-gray-400" aria-hidden="true" />
                    <span className="ml-3 text-gray-500 body-large">+1 (555) 123-4567</span>
                  </dd>
                </div>
                <div className="mt-3">
                  <dt className="sr-only">Email</dt>
                  <dd className="flex">
                    <HiMail className="flex-shrink-0 w-6 h-6 text-gray-400" aria-hidden="true" />
                    <span className="ml-3 text-gray-500 body-large">support@example.com</span>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="px-6 py-16 bg-white lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
            <div className="max-w-lg mx-auto lg:max-w-none">
              <Email_Form />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

type Inputs = {
  full_name: string,
  email: string,
  email_subject: string,
  email_message: string,
};


function Email_Form() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* register your input into the hook by invoking the "register" function */}
      <input placeholder="Full Name" {...register("full_name")} className="block w-full px-4 py-3 placeholder-gray-500 border border-gray-300 rounded-md shadow-sm focus:border-primary-500 focus:ring-primary-500" />
      <input placeholder="Email" {...register("email")} className="block w-full px-4 py-3 placeholder-gray-500 border border-gray-300 rounded-md shadow-sm focus:border-primary-500 focus:ring-primary-500" />
      <input placeholder="Subject" {...register("email_subject")} className="block w-full px-4 py-3 placeholder-gray-500 border border-gray-300 rounded-md shadow-sm focus:border-primary-500 focus:ring-primary-500" />
      <textarea placeholder="Message" {...register("email_message")} rows={4} className="block w-full px-4 py-3 placeholder-gray-500 border border-gray-300 rounded-md shadow-sm focus:border-primary-500 focus:ring-primary-500" />
      {errors.email_message && <span>This field is required</span>}
      <input type="submit" className="inline-flex justify-center px-6 py-3 text-base font-medium text-white border border-transparent rounded-md shadow-sm placeholder-slate-400 bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2" />
    </form>
  );
}