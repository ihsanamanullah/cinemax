import Link from "next/link";

const events = [
  {
    title: "Movie Night",
    price: "Rp.150.000",
    imageUrl: "/images/movie-night.jpg",
    link: "/events/movie-night",
  },
  {
    title: "Concert 2025",
    price: "$Rp.500.000",
    imageUrl: "/images/concert-2025.jpg",
    link: "/events/concert-2025",
  },
  {
    title: "Comedy Show",
    price: "Rp.125.000",
    imageUrl: "/images/comedy-show.jpg",
    link: "/events/comedy-show",
  },
  {
    title: "Theater Play",
    price: "Rp.300.000",
    imageUrl: "/images/theater-play.jpg",
    link: "/events/theater-play",
  },
];

const Event = () => {
  return (
    <div className="py-20">
      <h1 className="text-4xl font-bold text-center mb-10">Event List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        {events.map((event, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <Link href={event.link}>
              <a>
                <img
                  src={event.imageUrl}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold">{event.title}</h2>
                  <p className="text-lg text-gray-600">{event.price}</p>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Event;
