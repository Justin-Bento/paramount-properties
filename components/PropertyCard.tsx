import Image from "next/image"
import Link from "next/link"

interface PropertyCardProps {
  Meida: string,
  Headline: string,
  Path: string
}
export default function PropertyCard(props: PropertyCardProps) {
  return (
    <Link href={`/buildings/${props.Path}`}>
      <div className="relative">
        <div className="relative px-8 py-24 overflow-hidden bg-primary-500 rounded-xl lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-16">
          <div className="absolute inset-0 opacity-50 mix-blend-multiply saturate-0 filter">
            <Image
              src={props.Meida}
              width={1200}
              height={360}
              alt=""
              className="object-cover w-full h-full"
            />
          </div>
          <div className="relative lg:col-span-1">
            <blockquote className="mt-6 text-white">
              <p className="headline-small text-primary-50">Name Of Property Goes Here</p>
              <footer className="mt-6">
                <p className="flex flex-col font-medium">
                  <span>Marie Chilvers</span>
                  <span>CEO, Workcation</span>
                </p>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </Link>
  )
}
