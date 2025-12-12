"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="flex justify-between items-center px-10 py-6 shadow-md">
      <Image
        src="/images/header/mrenov-logo.png"
        alt="mrenov-logo"
        width={100}
        height={50}
        className="object-contain"
      />

      <nav>
        <ul className="flex gap-8">
          <li>
            <Link
              href="/"
              className={`
                relative no-underline transition-all duration-300
                px-3 py-1
                ${pathname === "/" ? "font-bold text-softbrown" : ""}

                before:content-[''] before:absolute before:block 
                before:border-b-2 before:border-r-2 before:border-transparent
                before:w-0 before:h-0 
                before:transition-all before:duration-300 before:ease-in-out 
                before:bottom-0 before:right-0

                after:content-[''] after:absolute after:block 
                after:border-t-2 after:border-l-2 after:border-transparent
                after:w-0 after:h-0 
                after:transition-all after:duration-300 after:ease-in-out 
                after:top-0 after:left-0

                hover:before:w-2.5 hover:before:h-2.5 hover:before:border-black
                hover:after:w-2.5 hover:after:h-2.5 hover:after:border-black
              `}
            >
              A propos
            </Link>
          </li>

          <li>
            <Link
              href="/projects"
              className={`
                relative no-underline transition-all duration-300
                px-3 py-1
                ${pathname === "/projects" ? "font-bold text-softbrown" : ""}

                before:content-[''] before:absolute before:block 
                before:border-b-2 before:border-r-2 before:border-transparent
                before:w-0 before:h-0 
                before:transition-all before:duration-300 before:ease-in-out 
                before:bottom-0 before:right-0

                after:content-[''] after:absolute after:block 
                after:border-t-2 after:border-l-2 after:border-transparent
                after:w-0 after:h-0 
                after:transition-all after:duration-300 after:ease-in-out 
                after:top-0 after:left-0

                hover:before:w-2.5 hover:before:h-2.5 hover:before:border-black
                hover:after:w-2.5 hover:after:h-2.5 hover:after:border-black
              `}
            >
              Projets
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
