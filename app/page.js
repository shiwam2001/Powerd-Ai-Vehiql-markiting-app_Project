import Home_search from "@/components/createComp/home_search"
import { Button } from "@/components/ui/button"
import { bodyTypes, faqItems, featuredCars } from "@/lib/data"
import { Calendar, Car, ChevronRight, Shield } from "lucide-react"
import Car_card from "@/components/createComp/car_card"
import Link from "next/link"
import Image from "next/image"

import { carMakes } from "@/lib/data"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { SignedOut } from "@clerk/nextjs"


export default function home() {

  return <>
    <div className="pt-20 flex flex-col">
      {/* {hero} */}

      <section className=" py-16 md:py-28 dotted-background" >
        <div className="max-w-4xl mx-auto text-center ">
          <div className="mb-8">
            <h1 className="text-5xl md:text-8xl mb-4 gradient-title">Find your Dream Car with Vehiql AI</h1>
            <p className="text-xl text-gray-500 mb-8 max-w-2xl mx-auto ">
              Advanced Ai car Search and test drive from thousands of vehicles.              </p>
          </div>

          {/* {Search} */}
          <Home_search />
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto px-4">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-2xl font-bold">Featured Cars</h2>
            <Button variant="ghost" className="ml-1 text-xl font-bold h-6 " asChild >
              <Link href="/cars">
                View All <ChevronRight className="ml-1 h-7 w-2" />
              </Link>
            </Button>
          </div>



          <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-6">
            {featuredCars.map((car) => {
              return <Car_card key={car.id} car={car} />
            })}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4">

          <div className="flex justify-between items-center mb-5">
            <h2 className="text-2xl font-bold">Browse by make</h2>
            <Button variant="ghost" className="ml-1 text-xl font-bold h-6 " asChild >
              <Link href="/cars">
                View All <ChevronRight className="ml-1 h-7 w-2" />
              </Link>
            </Button>
          </div>

          <div className="   grid grid-cols-2 md:grid-cols-4  lg:grid-cols-6 gap-4">
            {carMakes.map((make) => {
              return (

                <Link
                  key={make.name}
                  href={`/cars?make=${make.name}`}
                  className="bg-white rounded-lg shadow  p-4 text-center hover:shadow-md transition cursor-pointer"
                >
                  <div className="h-16 w-auto mx-auto  mb-2 relative">
                    <Image
                      src={make.image}
                      alt={make.name}
                      fill
                      style={{ objectFit: "contain" }}

                    />
                  </div>
                  <h3 className="font-medium">{make.name}</h3>
                </Link>
              )
            })}


          </div>
        </div>
      </section>

      <section className="py-16" >
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-12 ">
            Why Choose Our platform
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center ">
              <div className="bg-blue-100 text-blue-700 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Car className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Wide Selection</h3>
              <p className="text-gray-600" >Thousands of verified vehicles from trusted dealerships and private sellers.</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 text-blue-700 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Easy Test Drive</h3>
              <p className="text-gray-600" >Book a test drive online in minutes, with flexible scheduling options.</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 text-blue-700 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Secure Process</h3>
              <p className="text-gray-600" >Verified listings and secure booking process for peace of mind.</p>
            </div>



          </div>
        </div>


      </section>

      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4">

          <div className="flex justify-between items-center mb-5">
            <h2 className="text-2xl font-bold">Browse by Body Type</h2>
            <Button variant="ghost" className="ml-1 text-xl font-bold h-6 " asChild >
              <Link href="/cars">
                View All <ChevronRight className="ml-1 h-7 w-2" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4  gap-5">
            {bodyTypes.map((type) => {
              return (

                <Link
                  key={type.name}
                  href={`/cars?bodyType=${type.name}`}
                  className="  relative group cursor-pointer"
                >
                  <div className="overflow-hidden rounded-lg flex justify-end h-48 mb-4 relative">
                    <Image
                      src={type.image}
                      alt={type.name}
                      fill
                      className="object-cover  group-hover:scale-105 transition duration-300"

                    />
                  </div>
                  <div className="absolute inset-0  bg-gradient-to-t from-black/70  to-transparent rounded-lg flex items-end " >

                    <h3 className="text-white text-xl pl-2 pb-2 font-bold">{type.name}</h3>
                  </div>
                </Link>
              )
            })}


          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 ">
          <h2 className="font-bold text-2xl text-center mb-5">Frequently Asked Questions</h2>

          <Accordion type="single" className="w-full " collapsible >
            {faqItems.map((faq, index)=>{
              return (
              <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent> {faq.answer} </AccordionContent>
            </AccordionItem>
            )
          })}
          </Accordion>
        </div>
      </section>

      <section className="py-12 dotted-background text-white">
        <div className="container m-auto px-4 text-center">
          <h2 className="font-bold text-3xl mb-5">Ready to Find Your Dream Car</h2>
          <p>Join thousands of satisfied customers who found their perfect vehicle through our platform.</p>

          <div className="mt-5 flex flex-col sm:flex-row justify-center items-center gap-5 ">
            <Button size='lg' variant='secondary' asChild>
              <Link href="/cars" > View All Cars  </Link>
            </Button>
            <SignedOut>
              <Button size="lg" asChild>
                <Link href="/sign-up">Sign Up Now</Link>

              </Button>
            </SignedOut>
          </div>
        </div>
      </section>

    </div>
  </>
}