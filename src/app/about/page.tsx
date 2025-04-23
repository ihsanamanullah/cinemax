// src/app/about/page.tsx
import Link from "next/link";

const About = () => {
  return (
    <div className="text-center font-mono pt-20">
      <div className="text-5xl font-bold mb-8">
        <h1>About Cinemax</h1>
      </div>

      <div className="text-lg text-gray-700 max-w-4xl mx-auto px-4">
        <p className="mb-6">
          Cinemax is a premier online platform designed to simplify movie
          theater bookings for movie enthusiasts. Whether you're a casual
          movie-goer or a film aficionado, Cinemax offers an intuitive,
          user-friendly experience to help you book tickets with just a few
          clicks.
        </p>

        <h2 className="text-3xl font-semibold mb-4">Key Features:</h2>

        <ul className="list-inside list-disc mb-8 text-gray-600">
          <li>
            <strong>Real-Time Availability:</strong> Cinemax offers real-time
            booking for movies across various theaters. You can quickly find out
            what's showing at your local cinema, view available seats, and book
            your tickets instantly.
          </li>
          <li>
            <strong>User-Friendly Interface:</strong> Our website and mobile app
            feature a modern, minimalist design. The simple, intuitive interface
            ensures that even first-time users can navigate effortlessly through
            the booking process.
          </li>
          <li>
            <strong>Wide Selection of Movies:</strong> From the latest
            blockbusters to indie gems, Cinemax offers a broad selection of
            movies. You can filter by genre, release date, and movie rating to
            find something that fits your preferences.
          </li>
          <li>
            <strong>Secure Payment Gateway:</strong> Booking a ticket with
            Cinemax is safe and secure. Our platform supports a range of payment
            methods, including credit/debit cards, digital wallets, and other
            local payment systems, ensuring your transaction is quick and
            secure.
          </li>
          <li>
            <strong>Personalized Recommendations:</strong> Cinemax uses smart
            algorithms to recommend movies based on your past bookings and
            preferences. Whether you're in the mood for an action-packed
            thriller or a heartwarming drama, we’ve got you covered.
          </li>
          <li>
            <strong>Exclusive Deals & Discounts:</strong> Cinemax partners with
            theaters to provide exclusive discounts and special deals. Be the
            first to know about upcoming movie premieres and seasonal
            promotions.
          </li>
          <li>
            <strong>Seat Selection & Show Times:</strong> Our real-time seat
            availability feature allows you to pick your preferred seat in
            advance. With detailed show times, you’ll always find a convenient
            movie schedule.
          </li>
          <li>
            <strong>Customer Support:</strong> Need help with your booking or
            have a question? Our customer support team is available 24/7 to
            assist with any issues, ensuring your experience is hassle-free.
          </li>
        </ul>

        <h2 className="text-3xl font-semibold mb-4">Why Choose Cinemax?</h2>

        <ul className="list-inside list-disc mb-8 text-gray-600">
          <li>
            <strong>Convenience:</strong> Book your tickets anywhere, anytime
            from any device. Skip the lines and secure your seat in just a few
            taps or clicks.
          </li>
          <li>
            <strong>Variety:</strong> With access to all your favorite cinemas
            and the latest movie releases, Cinemax makes it easy to stay up to
            date on all the must-see films.
          </li>
          <li>
            <strong>Reliability:</strong> Our platform offers real-time booking
            updates and a secure payment process, so you can trust us with your
            movie ticket needs.
          </li>
        </ul>

        <h2 className="text-3xl font-semibold mb-4">How It Works:</h2>

        <ol className="list-inside list-decimal mb-8 text-gray-600">
          <li>
            <strong>Browse Movies:</strong> Visit our website or download the
            Cinemax app to browse the latest movies playing in your area.
          </li>
          <li>
            <strong>Select Theater & Show Time:</strong> Choose your theater,
            movie, and preferred show time.
          </li>
          <li>
            <strong>Pick Your Seats:</strong> View available seats and select
            the one you want. Choose from premium, regular, or VIP options.
          </li>
          <li>
            <strong>Pay & Confirm:</strong> Enter your payment details, and your
            tickets will be confirmed immediately.
          </li>
          <li>
            <strong>Enjoy the Movie!</strong> Show up at the theater, scan your
            ticket (either digitally or printed), and enjoy the show.
          </li>
        </ol>

        <p className="text-lg font-semibold text-gray-700">
          Ready to make your movie night easier? Visit{" "}
          <Link href="https://www.cinemax.com" className="text-blue-500">
            www.cinemax.com
          </Link>{" "}
          to book your next movie ticket in minutes!
        </p>
      </div>
    </div>
  );
};

export default About;
