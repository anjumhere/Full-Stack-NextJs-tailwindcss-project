import { events } from "@/lib/constants";
import { notFound } from "next/navigation";
import Image from "next/image";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function EventPage({ params }: Props) {
  const { slug } = await params;
  const event = events.find((e) => e.slug === slug);

  if (!event) {
    notFound();
  }

  return (
    <main id="event">
      <div className="header">
        <h1>{event.title}</h1>
        <p className="subheading">{event.date} • {event.location}</p>
      </div>

      <div className="details">
        <div className="content">
          <Image
            src={event.image}
            alt={event.title}
            width={800}
            height={450}
            className="banner"
          />
          <div className="agenda">
            <h3>Event Details</h3>
            <div className="flex-col-gap-2">
              <div className="flex-row-gap-2">
                <span className="pill">📍 Location</span>
                <p>{event.location}</p>
              </div>
              <div className="flex-row-gap-2">
                <span className="pill">📅 Date</span>
                <p>{event.date}</p>
              </div>
              <div className="flex-row-gap-2">
                <span className="pill">🕐 Time</span>
                <p>{event.time}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="booking">
          <div className="signup-card">
            <h3>Interested in attending?</h3>
            <p>Register now to secure your spot at this amazing event.</p>
            <button className="bg-primary hover:bg-primary/90 w-full cursor-pointer items-center justify-center rounded-[6px] px-4 py-2.5 text-lg font-semibold text-black">
              Register Now
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  return events.map((event) => ({
    slug: event.slug,
  }));
}
