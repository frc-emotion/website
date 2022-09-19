import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <h1>FRC Team 2658</h1>
      </div>
      <div className="navLinks">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </div>
    </nav>
  );
}
