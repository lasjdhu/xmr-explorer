"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import { ThemeToggle } from "../custom/theme-toggle";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center px-4 md:px-24">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <Image
            className="dark:invert"
            src="/images/monero-logo.png"
            alt="Next.js logo"
            width={40}
            height={40}
            priority
          />
          <span>XMR Explorer</span>
        </Link>

        <div className="hidden md:flex ml-auto items-center">
          <nav className="flex gap-6 mr-6">
            <Link
              href="/blocks"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Blocks
            </Link>
            <Link
              href="/tx"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Transactions
            </Link>
            <Link
              href="/address"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Addresses
            </Link>
            <Link
              href="/stats"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Stats
            </Link>
          </nav>
          <ThemeToggle />
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden ml-auto">
            <Button variant="outline" size="icon" aria-label="Menu">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[240px] sm:w-[300px]">
            <nav className="flex flex-col gap-4 mt-8">
              <Link
                href="/blocks"
                className="text-base font-medium transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Blocks
              </Link>
              <Link
                href="/tx"
                className="text-base font-medium transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Transactions
              </Link>
              <Link
                href="/address"
                className="text-base font-medium transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Addresses
              </Link>
              <Link
                href="/stats"
                className="text-base font-medium transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Stats
              </Link>
            </nav>
            <ThemeToggle />
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
