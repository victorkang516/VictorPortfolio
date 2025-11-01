import { Github } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import Image from "next/image";

export default function IdarPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-linear-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-10 pt-24 md:pt-32 lg:pt-64 pb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Interior Design AR Room
          </h1>

          <div className="flex flex-wrap gap-3 mb-6">
            <span className="px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-medium">
              Final Year Project
            </span>
            <span className="px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-medium">
              Mobile App
            </span>
            <span className="px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-medium">
              AR App
            </span>
            <span className="px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-medium">
              Unity
            </span>
          </div>

          <p className="text-xl text-gray-700 mb-8 leading-relaxed max-w-3xl">
            My final year project is to develop a mobile AR application with
            collaborative features designed for interior design. The application
            is made using Unity Engine, with other technologies like
            ARFoundation, Unity Photon Pun 2, Firebase.
          </p>

          <div className="flex flex-wrap gap-4">
            <ButtonLink
              href="https://github.com/victorkang516/Interior-Design-ARRoom"
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
              <p className="text-gray-900 font-medium">Sep 2021 - Present</p>
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
              <p className="text-gray-900 font-medium">Final Year Project</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Image */}
      <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-10 py-16">
        <Image
          src="/img/idar/idar-intro-img.jpg"
          alt="IDAR Intro"
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

          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Interior Design AR Room allow designer and client to find design
            direction. This app provide several choices of house model,
            furnitures, paints and tiles. Designer can choose any model based on
            their needs, and create an online room, which can be join by their
            client.
          </p>

          <p className="text-gray-700 text-lg mb-8 leading-relaxed">
            They can discuss about their interior design vision, at a same time
            viewing and interacting with the house model in AR.
          </p>

          <Image
            src="/img/idar/idar-guide.jpg"
            alt="IDAR Guide"
            width={1920}
            height={1080}
            className="w-full h-auto rounded-lg shadow-lg mb-8"
          />

          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Augmented reality start immedialety after the room is created. User
            are required to place 3d model (house model) on a table or floor,
            then adjust the position, rotation and size of the 3D model.
          </p>

          <Image
            src="/img/idar/idar-ar.gif"
            alt="IDAR AR Experience"
            width={1920}
            height={1080}
            unoptimized
            className="w-full h-auto rounded-lg shadow-lg mb-8"
          />

          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Then, user can modify the interior design of the model. The user can{" "}
            <strong>move, rotate and change the furniture model type</strong>.
            For floor and paint, user can only change its colour/texture.
          </p>

          <Image
            src="/img/idar/idar-ar2.gif"
            alt="IDAR AR Interaction"
            width={1920}
            height={1080}
            unoptimized
            className="w-full h-auto rounded-lg shadow-lg mb-8"
          />

          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            There are also collaboration feature in AR room. The host can share
            his room name by telling other if face to face, or sending the room
            name online (Whatsapp, Wechat). They can now viewing the same model,
            modify the interior design together in realtime, either face to face
            or remote.
          </p>

          <Image
            src="/img/idar/idar-ar-placement.jpg"
            alt="IDAR Collaboration"
            width={1920}
            height={1080}
            className="w-full h-auto rounded-lg shadow-lg mb-8"
          />

          <p className="text-gray-700 text-lg leading-relaxed">
            Lastly, user can save the room session, and continue the room
            session next time.
          </p>
        </section>

        {/* Technologies */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Technologies
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                App Development Tools
              </h3>
              <div className="h-1 w-12 bg-teal-500 mb-4"></div>
              <div className="space-y-2 text-gray-700">
                <p>Unity Engine</p>
                <p>Visual Studio (IDE)</p>
                <p>Figma (Prototyping)</p>
                <p>Github</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Multimedia Content Tools
              </h3>
              <div className="h-1 w-12 bg-teal-500 mb-4"></div>
              <div className="space-y-2 text-gray-700">
                <p>Adobe Photoshop</p>
                <p>Vectornator</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Database
              </h3>
              <div className="h-1 w-12 bg-teal-500 mb-4"></div>
              <p className="text-gray-700">Firebase Realtime Database</p>
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
                SDLC Model
              </h3>
              <div className="h-1 w-12 bg-teal-500 mb-4"></div>
              <p className="text-gray-700">Waterfall Model</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Packages/Libaries
              </h3>
              <div className="h-1 w-12 bg-teal-500 mb-4"></div>
              <div className="space-y-2 text-gray-700">
                <p>ARFoundation</p>
                <p>Photon Pun 2</p>
              </div>
            </div>
          </div>
        </section>

        {/* Demo Video */}
        <section id="demo-video">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Demo Videos</h2>

          <div
            className="relative w-full rounded-lg overflow-hidden shadow-lg"
            style={{ paddingBottom: "56.25%" }}
          >
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/VBUnJYVM1rM"
              title="IDAR Demo Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </section>
      </div>
    </div>
  );
}
