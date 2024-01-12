import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">
              Världens bästa jävla sajt för evenemang!
            </h1>
            <p className="p-regular-20 md:p-regular-24">
              Här kan du hitta alla evenemang som händer i din stad. Du kan även
              lägga till dina egna evenemang och få dem synliga för alla andra
              användare.
            </p>
            <Button size="lg" asChild className="button w-full sm:w-fit">
              <Link href="#events">Upptäck nu!</Link>
            </Button>
          </div>
          <Image
            src="/assets/images/hero.png"
            alt="hero"
            width={1000}
            height={1000}
            className="mah-h-[70vh] object-contain object-center 2xl:max-[50vh]:"
          />
        </div>
      </section>

      <section
        id="events"
        className="wrapper my-8 flex flex-col gap-8 md:gap-12"
      >
        <h2 className="h2-bold">
          Trusted by <br /> Thousands of Events
        </h2>
        <div className="flex w-full flex-col gap-5 flex-row">
          "SEARCH" "CATEGORY" "FILTER"
        </div>
      </section>
    </>
  );
}
