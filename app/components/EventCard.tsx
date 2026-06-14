import Image from "next/image";
import Link from "next/link";

interface EventCardProps {
  title: string;
  image: string;
  slug: string;
  location: string;
  date: string;
  time: string;
}

const EventCard = ({ title, image, slug, location, date, time }: EventCardProps) => {
  return (
    <Link href={`/events/${slug}`} id="event-card" className="flex flex-col gap-3 group">
      <div className="overflow-hidden rounded-xl">
        <Image
          src={image}
          alt={title}
          width={410}
          height={300}
          className="object-cover w-full transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col gap-1 px-1">
        <p className="title font-semibold text-lg">{title}</p>

        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Image src="/icons/pin.svg" alt="location" width={14} height={14} />
          <p>{location}</p>
        </div>

        <div className="flex items-center gap-4 text-sm text-gray-400">
          <span>{date}</span>
          <span>{time}</span>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
