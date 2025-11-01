import { ButtonLink } from "@/components/ui/button-link";
import { Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function EasyReportPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-linear-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-10 pt-24 md:pt-32 lg:pt-64 pb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            EasyReport
          </h1>

          <div className="flex flex-wrap gap-3 mb-6">
            <span className="px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-medium">
              Design Thinking
            </span>
            <span className="px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-medium">
              Prototyping
            </span>
            <span className="px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-medium">
              Flutter & Dart
            </span>
          </div>

          <p className="text-xl text-gray-700 mb-8 leading-relaxed max-w-3xl">
            Learned to built a prototype with design thinking approach. This
            mobile app, EasyReport is designed for citizens to make report on
            maintenance of roads, highways, buildings or structures. The
            prototype of this app is develop using Flutter&Dart.
          </p>

          <ButtonLink
            href="https://github.com/WongYewKeong/EasyReport"
            size="lg"
          >
            <Github className="w-5 h-5 mr-2" />
            View Github Project
          </ButtonLink>
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
              <p className="text-gray-900 font-medium">Sep 2021 - Feb 2022</p>
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
                Information Technology And Entrepreneurship
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Image */}
      <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-10 py-16">
        <Image
          src="/img/easy-report/easy-report_home.png"
          alt="EasyReport Home"
          width={1080}
          height={1920}
          className="w-full h-auto object-contain max-h-92"
        />
      </div>

      {/* Content Sections */}
      <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-10 py-16">
        {/* Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview</h2>

          <p className="text-gray-700 text-lg mb-8 leading-relaxed">
            A reporting platform for citizens to make report on maintenance of
            roads, highways, buildings or structures.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Problem</h3>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            An important function of the Ministry of Works (MOW) is the
            maintenance of road and highway infrastructure, government buildings
            (such as schools, hospitals, clinics, quarters, etc), and structures
            (such as bridges, flyovers, tunnels, and drains). The number and
            types of assets under the ministry are large and geographically
            dispersed and varied. An effective and timely reporting platform
            from citizens can contribute to the better maintenance of these
            public assets.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Solution</h3>
          <p className="text-gray-700 text-lg mb-4 leading-relaxed">
            Online reporting channel for citizens to suggest maintenance of
            roads, highways, buildings or structures.
          </p>

          <ul className="space-y-3 ml-6 mb-8">
            {[
              "Provide location service such as Google Maps for choosing location",
              "Provide a list of frequently occur problems to choose from",
              "Media uploading for the report of breakdown (images/videos)",
              "Report status tracking",
              "AI chat bot for inquiry",
            ].map((item, index) => (
              <li key={index} className="text-gray-700 text-lg flex gap-3">
                <span className="text-teal-600 font-bold">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* UI Gallery */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">UI</h2>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "easy-report_intro.png",
              "easy-report_homepage.png",
              "easy-report_map.png",
              "easy-report_report.png",
              "easy-report_status.png",
              "easy-report_bot.png",
            ].map((img, index) => (
              <Image
                key={index}
                src={`/img/easy-report/${img}`}
                alt={`EasyReport UI ${index + 1}`}
                width={1080}
                height={1920}
                className="w-full h-auto rounded-lg shadow-md hover:shadow-xl object-contain transition-shadow max-h-92"
              />
            ))}
          </div>
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
                <p>Android Studio (IDE)</p>
                <p>Flutter</p>
                <p>Github</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Programming Language
              </h3>
              <div className="h-1 w-12 bg-teal-500 mb-4"></div>
              <p className="text-gray-700">Dart</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Database
              </h3>
              <div className="h-1 w-12 bg-teal-500 mb-4"></div>
              <p className="text-gray-700">-</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Approach
              </h3>
              <div className="h-1 w-12 bg-teal-500 mb-4"></div>
              <p className="text-gray-700">Design Thinking</p>
            </div>
          </div>
        </section>

        {/* Design Thinking */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Design Thinking
          </h2>

          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            In this course we learned and carried some process of design
            thinking. However, we did not meet real users in empathize phase,
            and also did not carry out test phase. We figure out problem based
            on assumption in empathize phase, then define the real cause of the
            problem in define phase.
          </p>

          <p className="text-gray-700 text-lg mb-8 leading-relaxed">
            In ideate phase, we brainstorm a few solutions, then we pick the
            solution that can be implemented digitally, and also feasible.
            Lastly, we build the prototype using Flutter & Dart.
          </p>

          <Image
            src="https://public-images.interaction-design.org/literature/articles/heros/article_130794_hero_6256d891661f06.39964597.jpg?tr=w-1024"
            alt="Design Thinking Process"
            width={1024}
            height={576}
            unoptimized
            className="w-full h-auto rounded-lg shadow-lg mb-8"
          />

          <div className="flex flex-row gap-2">
            <span>Image source:</span>
            <Link
              href="https://www.interaction-design.org/literature/topics/design-thinking?srsltid=AfmBOopj94nAL0AWz4qk6-hYryH0mNiHeH6SgoIXWrpMTbPZwMXDcYw4"
              className="underline text-sky-600 hover:text-sky-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              Design Thinking - Interaction Design
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
