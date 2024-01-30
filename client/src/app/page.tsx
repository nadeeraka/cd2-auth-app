"use client";
import { Button } from "@/components/ui/button";
import { Dialog } from "@/components/ui/dialog";
import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Navbar from "@/components/NavBar";
import MobileMenu from "@/components/Card";

export default function Home() {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    return setOpen((prv) => !prv);
  };

  const perks = [
    {
      name: "Instant Delivery",
      Icon: ArrowDownToLine,
      description:
        "Get your assets delivered to your email in seconds and download them right away.",
    },
    {
      name: "Guaranteed Quality",
      Icon: CheckCircle,
      description:
        "Every asset on our platform is verified by our team to ensure our highest quality standards. Not happy? We offer a 30-day refund guarantee.",
    },
    {
      name: "For the Planet",
      Icon: Leaf,
      description:
        "We've pledged 1% of sales to the preservation and restoration of the natural environment.",
    },
  ];
  return (
    <>
      {open ? (
        <>
          <Navbar open={open} setOpen={handleOpen} />
          <div className="sm:hidden mt-4 mx-2 flex justify-center">
            {open && <MobileMenu />}
          </div>
        </>
      ) : (
        <>
          <Navbar open={open} setOpen={handleOpen} />
          <div className="sm:hidden mt-4 mx-2 flex justify-center">
            {open && <MobileMenu />}
          </div>
          <section className="flex flex-col text-center items-center gap-2 py-20 px-6 bg-gradient-to-r from-blue-200 to-cyan-200">
            <h2 className="text-4xl my-2 font-extrabold">Auth CD2</h2>
            <h4 className="text-3xl my-2 font-bold">
              <span className="text-blue-600 font-bold pb-4">
                {" "}
                CD2 Auth app
              </span>{" "}
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam ab,{" "}
            </h4>
            <p className="mt-6 text-lg max-w-prose text-muted-foreground">
              Welcome to CD2 Auth. Every asset on our platform is verified by
              our team to ensure our highest quality standards.
            </p>
            <Button size={"lg"} className="rounded-md mt-4 text-xl">
              Let's started
            </Button>
          </section>
          <section className="grid  grid-cols-1 gap-4 sm:grid-rows-1 sm:gap-6 bg-slate-100 sm:min-h-full sm:h-96 ">
            {/* <h2 className="text-2xl font-extrabold text-center ">What we offer</h2> */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-10 justify-center items-center py-6 px-6">
              {perks.map((perk, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-2 p-4"
                >
                  <div className="flex items-center gap-2 ">
                    <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900">
                      {<perk.Icon className="w-1/3 h-1/3" />}
                    </div>

                    <h3 className="text-xl font-bold text-center ">
                      {perk.name}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-center max-w-prose sm:max-w-none sm:text-lg py-6 md:py-1">
                    {perk.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </>
      )}
    </>
  );
}
