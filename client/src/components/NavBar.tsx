"use client";
import React, { useState } from "react";
import { Icons } from "./Icons";
import Link from "next/link";
import Hamburger from "hamburger-react";
import { Dropdown } from "./DropDown";
import { buttonVariants } from "./ui/button";

const NavBar = ({ open, setOpen }: any) => {
  const user = false;
  const ontoggle = (toggled: any) => {
    setOpen();
  };

  return (
    <nav className="h-16 bg-white shadow-lg p-4 mx-8 sm:mx-16 sticky top-0  z-50    rounded-lg flex-shrink-0 flex-nowrap">
      <ul className="flex justify-between items-center">
        <div className="flex justify-between  items-center sm:space-x-5 md:space-x-10">
          <li className="ml-2 sm:ml-4">
            <Link href={"/"}>
              <Icons.logo className="h-10 w-10" />
            </Link>
          </li>
          <Link
            href={"/"}
            className={buttonVariants({
              variant: "ghost",
            })}
          >
            CD2 Auth
          </Link>
        </div>
        <div className="hidden sm:flex sm:justify-between  sm:items-center sm:space-x-20 mr-2 sm:mr-4">
          {user && (
            <>
              <Link
                href={"/log-out"}
                className={buttonVariants({
                  variant: "ghost",
                })}
              >
                Profile
              </Link>
              <div className="ring-2 ring-slate-200 h-8 "></div>

              <Link
                href={"/log-out"}
                className={buttonVariants({
                  variant: "ghost",
                })}
              >
                Log out
              </Link>
            </>
          )}

          {!user && (
            <>
              <Link
                href={"/sign-in"}
                className={buttonVariants({
                  variant: "ghost",
                })}
              >
                Sign in
              </Link>

              {/* <UserButton afterSignOutUrl="/" /> */}
              <Link
                href={"/sign-up"}
                className={buttonVariants({
                  variant: "ghost",
                })}
              >
                Create account
              </Link>
            </>
          )}
          {user && (
            <Link
              href={"/log-out"}
              className={buttonVariants({
                variant: "ghost",
              })}
            >
              Log-out
            </Link>
          )}
        </div>
        {/* mobile nav */}
        <div className="sm:hidden">
          <Hamburger onToggle={ontoggle} />
        </div>
      </ul>
    </nav>
  );
};

export default NavBar;
