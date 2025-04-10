import Image from "next/image"
import Link from "next/link"
import { Trophy, Star, Award, ShoppingBasketIcon as Basketball, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#552583] to-[#1D1160]">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-purple-900/20 bg-[#552583]/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Basketball className="h-6 w-6 text-[#FDB927]" />
            <span className="text-xl font-bold text-white">Kobe Legacy</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#home" className="text-sm font-medium text-white hover:text-[#FDB927] transition-colors">
              Home
            </Link>
            <Link href="#career" className="text-sm font-medium text-white hover:text-[#FDB927] transition-colors">
              Career
            </Link>
            <Link href="#stats" className="text-sm font-medium text-white hover:text-[#FDB927] transition-colors">
              Stats
            </Link>
            <Link href="#legacy" className="text-sm font-medium text-white hover:text-[#FDB927] transition-colors">
              Legacy
            </Link>
            <Link href="#gallery" className="text-sm font-medium text-white hover:text-[#FDB927] transition-colors">
              Gallery
            </Link>
          </nav>
          <Button className="bg-[#FDB927] text-[#552583] hover:bg-[#FDB927]/90">Mamba Forever</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden py-20 md:py-32">
        <div className="container relative z-10">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-6">
              <div className="inline-block rounded-full bg-[#FDB927]/20 px-4 py-1 text-sm font-medium text-[#FDB927]">
                1978 - 2020
              </div>
              <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">
                Kobe Bryant
                <span className="block text-[#FDB927]">Black Mamba</span>
              </h1>
              <p className="max-w-[600px] text-gray-300 md:text-xl">
                Basketball legend, five-time NBA champion, Olympic gold medalist, and an inspiration to millions around
                the world.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-[#FDB927] text-[#552583] hover:bg-[#FDB927]/90">Explore Career</Button>
                <Button variant="outline" className="border-[#FDB927] text-[#FDB927] hover:bg-[#FDB927]/10">
                  Watch Highlights
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] w-full overflow-hidden rounded-xl">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Kobe Bryant"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#552583] to-transparent opacity-60"></div>
              <div className="absolute bottom-4 left-4 right-4 rounded-lg bg-black/50 p-4 backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold text-white">#24 #8</span>
                  <span className="text-sm text-gray-300">Los Angeles Lakers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-48 -right-48 h-96 w-96 rounded-full bg-[#FDB927]/20 blur-3xl"></div>
      </section>

      {/* Career Highlights */}
      <section id="career" className="py-20 bg-black/30">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Career Highlights</h2>
            <p className="mt-4 text-gray-300">A journey of dedication, perseverance, and excellence</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: <Trophy className="h-10 w-10 text-[#FDB927]" />,
                title: "5x NBA Champion",
                description: "2000, 2001, 2002, 2009, 2010",
              },
              {
                icon: <Star className="h-10 w-10 text-[#FDB927]" />,
                title: "18x NBA All-Star",
                description: "Selected 18 times from 1998 to 2016",
              },
              {
                icon: <Award className="h-10 w-10 text-[#FDB927]" />,
                title: "2x Olympic Gold",
                description: "Team USA 2008, 2012",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="group overflow-hidden bg-white/5 backdrop-blur-sm border-purple-900/20 transition-all duration-300 hover:bg-white/10 hover:shadow-xl hover:shadow-purple-900/5"
              >
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#552583]">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-gray-300">{item.description}</p>
                  <div className="mt-4 flex items-center text-[#FDB927]">
                    <span className="text-sm font-medium">Learn more</span>
                    <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Career Statistics</h2>
            <p className="mt-4 text-gray-300">The numbers behind the legend</p>
          </div>
          <div className="grid gap-6 md:grid-cols-4">
            {[
              { label: "Points", value: "33,643", rank: "4th All-Time" },
              { label: "Games", value: "1,346", rank: "NBA Career" },
              { label: "Points in a Game", value: "81", rank: "2nd All-Time" },
              { label: "All-NBA Teams", value: "15", rank: "Selections" },
            ].map((stat, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg bg-gradient-to-br from-[#552583]/50 to-[#1D1160]/50 p-6 backdrop-blur-sm border border-purple-900/20"
              >
                <div className="relative z-10">
                  <p className="text-sm font-medium text-gray-300">{stat.label}</p>
                  <p className="mt-2 text-4xl font-bold text-white">{stat.value}</p>
                  <p className="mt-1 text-sm text-[#FDB927]">{stat.rank}</p>
                </div>
                <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-[#FDB927]/10 blur-2xl"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section id="legacy" className="py-20 bg-black/30">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="relative h-[500px] w-full overflow-hidden rounded-xl">
              <Image
                src="/placeholder.svg?height=1000&width=800"
                alt="Kobe Bryant Legacy"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#552583] to-transparent opacity-60"></div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">The Mamba Mentality</h2>
              <p className="text-gray-300">
                Kobe Bryant's impact extends far beyond basketball. His "Mamba Mentality" philosophy has inspired
                millions to pursue excellence in their own lives.
              </p>
              <blockquote className="border-l-4 border-[#FDB927] pl-4 italic text-gray-300">
                "Great things come from hard work and perseverance. No excuses."
              </blockquote>
              <p className="text-gray-300">
                After his basketball career, Kobe became an author, entrepreneur, and Academy Award winner. His
                dedication to his family and commitment to promoting women's sports continues to inspire.
              </p>
              <Button className="bg-[#FDB927] text-[#552583] hover:bg-[#FDB927]/90">Explore Mamba Mentality</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Moments to Remember</h2>
            <p className="mt-4 text-gray-300">A visual journey through an extraordinary career</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg aspect-square">
                <Image
                  src={`/placeholder.svg?height=400&width=400`}
                  alt={`Kobe Bryant moment ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-60"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                  <p className="text-sm font-medium text-white">Memorable Moment</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-purple-900/20 bg-[#1D1160] py-12">
        <div className="container">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-2">
              <Basketball className="h-6 w-6 text-[#FDB927]" />
              <span className="text-xl font-bold text-white">Kobe Legacy</span>
            </div>
            <nav className="flex flex-wrap items-center gap-x-8 gap-y-4">
              <Link href="#home" className="text-sm text-gray-300 hover:text-[#FDB927] transition-colors">
                Home
              </Link>
              <Link href="#career" className="text-sm text-gray-300 hover:text-[#FDB927] transition-colors">
                Career
              </Link>
              <Link href="#stats" className="text-sm text-gray-300 hover:text-[#FDB927] transition-colors">
                Stats
              </Link>
              <Link href="#legacy" className="text-sm text-gray-300 hover:text-[#FDB927] transition-colors">
                Legacy
              </Link>
              <Link href="#gallery" className="text-sm text-gray-300 hover:text-[#FDB927] transition-colors">
                Gallery
              </Link>
            </nav>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-[#FDB927] hover:bg-transparent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
                <span className="sr-only">Facebook</span>
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-[#FDB927] hover:bg-transparent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-[#FDB927] hover:bg-transparent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
                <span className="sr-only">Instagram</span>
              </Button>
            </div>
          </div>
          <div className="mt-8 border-t border-purple-900/20 pt-8 text-center">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Kobe Bryant Tribute. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
