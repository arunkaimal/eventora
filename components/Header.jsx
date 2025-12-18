import Image from "next/image";
import React from "react";
import eventora_logo from "@/public/eventora_logo.png";
import Link from "next/link";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-20 bg-[#191654]/10">
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          {/* Logo */}
          <div className="relative w-25 h-20">
            <Link href={"/"} className="flex items-center">
              <Image src={eventora_logo} fill alt="Eventora Logo" priority />
            </Link>
          </div>

          {/* Search and location - Desktop only */}

          {/* Right side actions */}
          <div className="flex items-center">
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <SignInButton mode="modal">
                <Button variant="outline" size="sm" className="cursor-pointer">
                  Sign In
                </Button>
              </SignInButton>
            </SignedOut>
          </div>
        </div>

        {/* Mobile search and location - Below headers */}
      </nav>

      {/* Modals */}
    </>
  );
};

export default Header;
