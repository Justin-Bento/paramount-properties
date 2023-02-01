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
      <div className="overflow-hidden bg-white divide-y divide-gray-200 rounded-lg shadow">
        <div className="px-4 py-5 sm:px-6">
          {/* Content goes here */}
          {props.Headline}
          {/* We use less vertical padding on card headers on desktop than on body sections */}
        </div>
        <div className="relative w-full h-64 px-4 py-5 sm:p-6">
          <Image fill quality={20} src={props.Meida} alt="" className="object-cover w-full h-full" loading="lazy" />
        </div>
        <div className="px-4 py-4 sm:px-6">
          {/* Content goes here */}
          {props.Status}
          {/* We use less vertical padding on card footers at all sizes than on headers or body sections */}
        </div>
      </div>
    </Link>
  );
}
