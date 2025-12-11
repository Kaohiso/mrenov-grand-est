import Image from "next/image";
import Link from "next/link";

export default function Header() {
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
        <ul className="flex gap-8 ">
          <li>
            <Link href="/">A propos</Link>
          </li>
          <li>
            <Link href="/projects">Projets</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
