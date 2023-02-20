import Image from "next/image";
import Link from "next/link";
import { FaLink } from "react-icons/fa";

interface PropertyCardProps {
  Meida: string;
  Headline: string;
  Path: string;
  Status: String;
}
export default function PropertyCard(props: PropertyCardProps) {
  return (
    <Link href={`/buildings/${props.Path}`}>
      <div className="relative w-full bg-gray-400 h-72">
        <div className="absolute inset-0 z-10 overflow-hidden">
          <Image src={props.Meida} fill quality={40} alt="" className="object-cover object-center" />
        </div>
        <div aria-hidden="true" className="absolute inset-0 z-20 bg-gray-900 bg-opacity-50" />
        <div className="absolute z-20 bottom-5 left-5">
          <p className="text-xl text-white">{props.Headline}</p>
        </div>
      </div>
    </Link>
  );
}
