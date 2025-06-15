import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { CircleHelp, House, Info, MenuIcon, ShoppingBag } from "lucide-react";
import Logo from "@/app/images/logo.png";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white dark:border-gray-800 dark:bg-gray-950">
      <div className="flex h-16  items-center justify-between px-4 md:px-6">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <Image
            src={Logo}
            width={Logo.width}
            height={Logo.height}
            alt="Logo"
          />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          <Link
            href="#"
            className="text-gray-600 hover:text-primary text-base font-normal dark:text-gray-400 flex gap-2 items-center justify-center dark:hover:text-gray-50"
            prefetch={false}
          >
            <House size={24} className="text-primary" />
            Home
          </Link>
          <Link
            href="#"
            className="text-gray-600 hover:text-primary text-base font-normal dark:text-gray-400 flex gap-2 items-center justify-center dark:hover:text-gray-50"
            prefetch={false}
          >
            <ShoppingBag size={24} className="text-primary" />
            Products
          </Link>
          <Link
            href="#"
            className="text-gray-600 hover:text-primary text-base font-normal dark:text-gray-400 flex gap-2 items-center justify-center dark:hover:text-gray-50"
            prefetch={false}
          >
            <CircleHelp size={24} className="text-primary" />
            How It Works
          </Link>
          <Link
            href="#"
            className="text-gray-600 hover:text-primary text-base font-normal dark:text-gray-400 flex gap-2 items-center justify-center dark:hover:text-gray-50"
            prefetch={false}
          >
            <Info size={24} className="text-primary" />
            About
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-2 text-sm font-medium md:flex">
            <Button className="" variant={"ghost"}>
              Sign In
            </Button>
          </div>

          <div className="hidden items-center gap-2 text-sm font-medium md:flex">
            <Button className="" variant={"default"}>
              Get Started{" "}
            </Button>
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full md:hidden"
              >
                <MenuIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="md:hidden">
              <div className="grid gap-4 p-4">
                <Link
                  href="#"
                  className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  prefetch={false}
                >
                  Home
                </Link>
                <Link
                  href="#"
                  className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  prefetch={false}
                >
                  Products
                </Link>
                <Link
                  href="#"
                  className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  prefetch={false}
                >
                  How It Works
                </Link>
                <Link
                  href="#"
                  className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  prefetch={false}
                >
                  About
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
