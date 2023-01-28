import Image from "next/image";
import Link from "next/link";
import { FaLink } from "react-icons/fa";

interface PropertyCardProps {
  Meida: string;
  Headline: string;
  Path: string;
}
export default function PropertyCard(props: PropertyCardProps) {
  return (
    <Link
      href={`/buildings/${props.Path}`}
      className="overflow-hidden transition-all bg-white divide-y divide-gray-200 rounded-lg shadow hover:opacity-90 hover:cursor-pointer"
    >
      <div className="flex flex-row items-center justify-between px-4 py-5 sm:px-6">
        <h5 className="title-medium">{props.Headline}</h5>
        <FaLink className="w-4 h-4 text-gray-500" />
      </div>
      <div className="relative w-full h-64">
        <Image
          fill
          src={props.Meida}
          alt={`Image of ${props.Headline}`}
          className="object-cover"
        />
      </div>
    </Link>
  );
}
