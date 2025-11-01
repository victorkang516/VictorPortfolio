import { ExternalLink, Github } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import Image from "next/image";

export default function UwuShoppingSitePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-linear-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-10 pt-24 md:pt-32 lg:pt-64 pb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            UWU Shopping Site
          </h1>

          <div className="flex flex-wrap gap-3 mb-6">
            <span className="px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-medium">
              Software Engineering
            </span>
            <span className="px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-medium">
              Web Development
            </span>
            <span className="px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-medium">
              MERN Stack
            </span>
            <span className="px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-medium">
              Agile Methodology
            </span>
          </div>

          <p className="text-xl text-gray-700 mb-8 leading-relaxed max-w-3xl">
            Learned to built a shopping website with live video streaming
            feature. A long period (3 semester) group project of my software
            engineering course. Learned Agile methodology and the website was
            developed using MERN javascript Stack.
          </p>

          <div className="flex flex-wrap gap-4">
            <ButtonLink
              href="https://github.com/victorkang516/UWUShoppingSite"
              size="lg"
            >
              <Github className="w-5 h-5 mr-2" />
              View Github Project
            </ButtonLink>
            <ButtonLink
              href="https://uwushoppingsite.netlify.app"
              variant="outline"
              size="lg"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              View Website
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
              <p className="text-gray-900 font-medium">Sep 2020 - Feb 2022</p>
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
              <p className="text-gray-900 font-medium">Software Engineering</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Image */}
      <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-10 py-16">
        <Image
          src="/img/uwushoppingsite/uwu-shopping-site.jpg"
          alt="UWU Shopping Site"
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
            Our team see trending in selling products through streaming on
            social media platform (Facebook, Instagram). However, there are
            problems with these platform:
          </p>

          <ul className="space-y-3 ml-6 mb-8">
            {[
              "Their live streaming are not designed for selling products, the buyers' only way to place order is by commenting below the live streaming.",
              "The buyers' inputs are inconsistent. Some of the buyers forget to enter quantity, some of the buyers forget to state the product type.",
              "Besides that, the order comments from the buyers are mixed up with other unrelated comments, how can the seller track all of the order in a short time?",
            ].map((item, index) => (
              <li key={index} className="text-gray-700 text-lg flex gap-3">
                <span className="text-teal-600 font-bold">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <Image
            src="/img/uwushoppingsite/uwu-problem.jpg"
            alt="Problem Statement"
            width={1920}
            height={1080}
            className="w-full h-auto rounded-lg shadow-lg mb-8"
          />

          <p className="text-gray-700 text-lg leading-relaxed">
            Thus, we proposed to develop a shopping site with live video
            streaming, that allows users to place their order easily, and the
            seller can track each order without frustration.
          </p>
        </section>

        {/* The Seller */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Seller</h2>

          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            The sellers are allow to create their shop, sell products, track
            orders and hold live streaming.
          </p>

          <Image
            src="/img/uwushoppingsite/uwu-seller-streaming.gif"
            alt="Seller Streaming"
            width={1920}
            height={1080}
            unoptimized
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </section>

        {/* The Buyer */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Buyer</h2>

          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            The normal users (buyers) can browse products, buy products and
            watch live streaming.
          </p>

          <Image
            src="/img/uwushoppingsite/uwu-buyer-streaming.gif"
            alt="Buyer Streaming"
            width={1920}
            height={1080}
            unoptimized
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </section>

        {/* Auction Live Streaming */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Auction Live Streaming
          </h2>

          <p className="text-gray-700 text-lg mb-4 leading-relaxed">
            Additionally, uwu shopping site also provide auction streaming
            feature. Sellers can set the minimum price of the item and control
            the flow of auction bidding. Each round have 30 seconds, the buyers
            can only bid when timer counting down. Their bid amount must higher
            than the minimum bid price.
          </p>

          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            When no one bid anymore, the seller can decide to end the auction or
            continue next round.
          </p>

          <Image
            src="/img/uwushoppingsite/uwu-auction-streaming.gif"
            alt="Auction Streaming"
            width={1920}
            height={1080}
            unoptimized
            className="w-full h-auto rounded-lg shadow-lg mb-6"
          />

          <p className="text-gray-700 text-lg leading-relaxed">
            Further, the website also provide membership feature. The system
            will check if the buyer's total spent exceed a certain amount, the
            buyer will get a membership.
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
                <p>Visual Studio Code (IDE)</p>
                <p>Figma (Prototyping)</p>
                <p>Github</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Programming Language
              </h3>
              <div className="h-1 w-12 bg-teal-500 mb-4"></div>
              <div className="space-y-2 text-gray-700">
                <p>HTML</p>
                <p>CSS</p>
                <p>Javascript (React js, Node js, Express js)</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Database
              </h3>
              <div className="h-1 w-12 bg-teal-500 mb-4"></div>
              <p className="text-gray-700">MongoDB</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                SDLC Model
              </h3>
              <div className="h-1 w-12 bg-teal-500 mb-4"></div>
              <p className="text-gray-700">Agile</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 md:col-span-2">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Packages/Libaries
              </h3>
              <div className="h-1 w-12 bg-teal-500 mb-4"></div>
              <div className="space-y-2 text-gray-700">
                <p>WebRTC</p>
                <p>Socket IO</p>
                <p>React js</p>
              </div>
            </div>
          </div>
        </section>

        {/* Agile Methodology */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Agile Methodology
          </h2>

          <p className="text-gray-700 text-lg mb-4 leading-relaxed">
            We are a team of four members. During the development phase, we used
            agile methodology. We learned to use product backlog and sprint
            backlog. However, we din't carry out daily scrum meeting. We did
            held meeting regularly but once a week.
          </p>

          <p className="text-gray-700 text-lg mb-8 leading-relaxed">
            The following images show our product backlog and sprint backlog.
          </p>

          <div className="space-y-8">
            <Image
              src="/img/uwushoppingsite/product-backlog.jpg"
              alt="Product Backlog"
              width={1920}
              height={1080}
              className="w-full h-auto rounded-lg shadow-lg"
            />

            <Image
              src="/img/uwushoppingsite/sprint-backlog.jpg"
              alt="Sprint Backlog"
              width={1920}
              height={1080}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
