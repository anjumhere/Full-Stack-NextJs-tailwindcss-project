export interface Event {
  title: string;
  image: string;
  slug: string;
  location: string;
  date: string;
  time: string;
}

export const events: Event[] = [
  {
    title: "React Summit 2025",
    image: "/images/event1.png",
    slug: "react-summit-2025",
    location: "Amsterdam, Netherlands",
    date: "June 5-6, 2025",
    time: "9:00 AM - 5:00 PM",
  },
  {
    title: "Next.js Conf Europe",
    image: "/images/event2.png",
    slug: "nextjs-conf-europe",
    location: "Berlin, Germany",
    date: "July 10-12, 2025",
    time: "10:00 AM - 6:00 PM",
  },
  {
    title: "Web Dev Summit",
    image: "/images/event3.png",
    slug: "web-dev-summit",
    location: "San Francisco, USA",
    date: "August 15-17, 2025",
    time: "8:30 AM - 5:30 PM",
  },
  {
    title: "TypeScript World",
    image: "/images/event4.png",
    slug: "typescript-world",
    location: "London, United Kingdom",
    date: "September 8-10, 2025",
    time: "9:00 AM - 5:00 PM",
  },
  {
    title: "Full Stack Developers Meetup",
    image: "/images/event5.png",
    slug: "full-stack-meetup",
    location: "Toronto, Canada",
    date: "September 20, 2025",
    time: "6:00 PM - 9:00 PM",
  },
  {
    title: "JavaScript Hackathon 2025",
    image: "/images/event6.png",
    slug: "js-hackathon-2025",
    location: "Singapore",
    date: "October 12-14, 2025",
    time: "9:00 AM - 9:00 PM",
  },
];
