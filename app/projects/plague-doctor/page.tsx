import { Github } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import Image from "next/image";

export default function PlagueDoctorPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-linear-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-10 pt-24 md:pt-32 lg:pt-64 pb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Plague Doctor
          </h1>

          <div className="flex flex-wrap gap-3 mb-6">
            <span className="px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-medium">
              Game Development
            </span>
            <span className="px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-medium">
              Prototyping
            </span>
            <span className="px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-medium">
              Unity Engine
            </span>
          </div>

          <p className="text-xl text-gray-700 mb-8 leading-relaxed max-w-3xl">
            Developed a 3D action game called Plague Doctor by using Unity
            Engine, only playable on desktop.
          </p>

          <div className="flex flex-wrap gap-4">
            <ButtonLink
              href="https://github.com/victorkang516/PlagueDoctor_A176011"
              size="lg"
            >
              <Github className="w-5 h-5 mr-2" />
              View Github Project
            </ButtonLink>
            <ButtonLink href="#demo-video" variant="outline" size="lg">
              Watch Demo Video
            </ButtonLink>
          </div>
        </div>
      </div>

      {/* Project Details */}
      <div className="bg-gray-50 border-y border-gray-200">
        <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-10 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Date
              </p>
              <div className="h-1 w-12 bg-teal-500 mb-3"></div>
              <p className="text-gray-900 font-medium">May 2021 - July 2022</p>
            </div>

            <div>
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Role
              </p>
              <div className="h-1 w-12 bg-teal-500 mb-3"></div>
              <p className="text-gray-900 font-medium">
                Software Engineer Student
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Course Name
              </p>
              <div className="h-1 w-12 bg-teal-500 mb-3"></div>
              <p className="text-gray-900 font-medium">
                Multimedia Game Development
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Image */}
      <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-10 py-16">
        <Image
          src="/img/plaguedoctor/plague-doctor-screenshot-1.png"
          alt="Plague Doctor Game"
          width={1920}
          height={1080}
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>

      {/* Content Sections */}
      <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-10 py-16">
        {/* Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview</h2>

          <p className="text-gray-700 text-lg mb-8 leading-relaxed">
            "The Plague Doctor" is a 3rd person 3D game made in Unity. The
            player is a plague doctor who is sent to find the cure of plague,
            which is rumored to be an elixir of life in a dungeon. The player
            must protect himself from the skeleton raids, and the player can
            save the peasants and priests on his path to the destination. At the
            end of the game they would reach the dungeon, they must defeat a
            giant beetle before the discovery of the cure of plague.
          </p>
        </section>

        {/* UI Gallery */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">UI</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "plague-doctor-screenshot-1.png",
              "plague-doctor-screenshot-2.png",
              "plague-doctor-screenshot-3.png",
              "plague-doctor-screenshot-4.png",
              "plague-doctor-screenshot-5.png",
              "plague-doctor-screenshot-6.png",
              "plague-doctor-screenshot-7.png",
              "plague-doctor-screenshot-8.png",
              "plague-doctor-screenshot-9.png",
            ].map((img, index) => (
              <Image
                key={index}
                src={`/img/plaguedoctor/${img}`}
                alt={`Plague Doctor Screenshot ${index + 1}`}
                width={1920}
                height={1080}
                className="w-full h-auto rounded-lg shadow-md hover:shadow-xl transition-shadow"
              />
            ))}
          </div>
        </section>

        {/* Technologies */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Technologies
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                App Development Tools
              </h3>
              <div className="h-1 w-12 bg-teal-500 mb-4"></div>
              <div className="space-y-2 text-gray-700">
                <p>Unity Engine</p>
                <p>Visual Studio (IDE)</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Programming Language
              </h3>
              <div className="h-1 w-12 bg-teal-500 mb-4"></div>
              <p className="text-gray-700">C#</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                3D Model
              </h3>
              <div className="h-1 w-12 bg-teal-500 mb-4"></div>
              <p className="text-gray-700">Unity Asset Store</p>
            </div>
          </div>
        </section>

        {/* Demo Video */}
        <section id="demo-video">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Demo Video (Full GamePlay)
          </h2>

          <div
            className="relative w-full rounded-lg overflow-hidden shadow-lg"
            style={{ paddingBottom: "56.25%" }}
          >
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/3BgpwjlNpPE"
              title="Plague Doctor Demo Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </section>
      </div>
    </div>
  );
}
