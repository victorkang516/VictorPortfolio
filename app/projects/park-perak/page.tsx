import { ExternalLink } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import Image from "next/image";

export default function ParkPerakPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-linear-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-10 pt-24 md:pt-32 lg:pt-64 pb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Park Perak Redesign
          </h1>

          <div className="flex flex-wrap gap-3 mb-6">
            <span className="px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-medium">
              UI/UX
            </span>
            <span className="px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-medium">
              Figma
            </span>
            <span className="px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-medium">
              Flutter & Dart
            </span>
          </div>

          <p className="text-xl text-gray-700 mb-8 leading-relaxed max-w-3xl">
            Redesign Park@Perak App for practice purposes. Prototyping with
            Figma.
          </p>

          <ButtonLink
            href="https://www.figma.com/proto/UdtW4WEoRlR0GRKS6yYI83/Parking-App?node-id=7-3&node-type=canvas&t=JIwKJ6iBOxQ03U3S-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=7%3A3"
            size="lg"
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            View Figma Prototype
          </ButtonLink>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-10 py-16">
        {/* Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview</h2>

          <p className="text-gray-700 text-lg mb-8 leading-relaxed">
            Park@Perak is an app for Malaysia Citizen to pay for parking for
            Perak State. You can find this app on GooglePlay and AppleStore.
          </p>
        </section>

        {/* Original UI */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Original UI Design
          </h2>

          <p className="text-gray-700 text-lg mb-8 leading-relaxed">
            The actual app UI of ParkPerak application.
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { src: "/img/parkperak/o-login.jpg", alt: "Original Login" },
              { src: "/img/parkperak/o-home.jpg", alt: "Original Home" },
              { src: "/img/parkperak/o-parking.jpg", alt: "Original Parking" },
              {
                src: "/img/parkperak/o-parking-status.jpg",
                alt: "Original Parking Status",
              },
              { src: "/img/parkperak/o-pbt.jpg", alt: "Original PBT" },
              { src: "/img/parkperak/o-vehicle.jpg", alt: "Original Vehicle" },
            ].map((img, index) => (
              <Image
                key={index}
                src={img.src}
                alt={img.alt}
                width={1080}
                height={1920}
                className="w-full h-auto rounded-lg object-contain max-h-92 lg:max-h-full shadow-md hover:shadow-xl transition-shadow"
              />
            ))}
          </div>
        </section>

        {/* Redesigned UI */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Redesign UI in Figma
          </h2>

          <p className="text-gray-700 text-lg mb-8 leading-relaxed">
            Redesign with better UI/UX while keep the original branding.
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                src: "/img/parkperak/my-login-phone.png",
                alt: "Redesigned Login",
              },
              { src: "/img/parkperak/my-home.png", alt: "Redesigned Home" },
              {
                src: "/img/parkperak/my-parking.png",
                alt: "Redesigned Parking",
              },
              {
                src: "/img/parkperak/my-parking-status.png",
                alt: "Redesigned Parking Status",
              },
              { src: "/img/parkperak/my-pbt.png", alt: "Redesigned PBT" },
              {
                src: "/img/parkperak/my-vehicle-2.png",
                alt: "Redesigned Vehicle",
              },
            ].map((img, index) => (
              <Image
                key={index}
                src={img.src}
                alt={img.alt}
                width={1080}
                height={1920}
                className="w-full h-auto rounded-lg object-contain max-h-92 lg:max-h-full shadow-md hover:shadow-xl transition-shadow"
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
