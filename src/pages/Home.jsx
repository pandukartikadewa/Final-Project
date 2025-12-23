import { useState } from "react";
import EventCard from "../components/public/EventCard";
import Navbar from "../components/public/Navbar";
import Footer from "../components/public/Footer";
import HeroSection from "../components/public/HeroSection";

export default function Home() {
  const [events] = useState([
    {
      id: 1,
      name: "Jazz Gunung 2025",
      category: "Music",
      date: "2025-08-12",
      price: 750000,
      location: "Bromo Amphitheater",
      image: "https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg",
    },
    {
      id: 2,
      name: "Tech Conference",
      category: "Seminar",
      date: "2025-09-01",
      price: 500000,
      location: "Jakarta Convention Center",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
    },
    {
      id: 3,
      name: "Indie Music Fest",
      category: "Music",
      date: "2025-10-15",
      price: 300000,
      location: "Bandung Creative Hub",
      image: "https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg",
    },
  ]);

  return (
    <>
      <Navbar />
      <HeroSection />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
      <Footer />
    </>
  );
}
