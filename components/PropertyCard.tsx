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
      <div className="transition-all bg-primary-500 rounded-xl hover:bg-gray-500/80">
        <div className="relative w-full h-64 rounded-xl ">
          <div className="absolute inset-0 opacity-50 mix-blend-multiply saturate-0 filter">
            <Image fill src={props.Meida} alt={`Image of ${props.Headline}`} className="object-cover rounded-xl" />
          </div>
          <div className="absolute bottom-0 left-0 p-6">
            <h2 className="text-white title-large">{props.Headline}</h2>
          </div>
        </div>
      </div>
    </Link>
  )
}
