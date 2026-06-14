import { events } from "@/lib/constants";
import EventCard from "./components/EventCard";
import ExploreBtn from "./components/ExploreBtn";

const HomePage = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center space-y-4">
        <h1>
          The Hub for Every Dev <br /> Event You Can&apos;t Miss
        </h1>
        <p className="text-gray-500">
          Hackathons, Meetups, and Conferences, All in One
        </p>
        <ExploreBtn />
      </div>

      <div className="mt-20 space-y-7">
        <h3>Featured Events</h3>
        {events.length > 0 ? (
          <ul className="events list-none">
            {events.map((event) => (
              <li key={event.slug}>
                <EventCard {...event} />
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-400">No events found.</p>
        )}
      </div>
    </section>
  );
};

export default HomePage;
