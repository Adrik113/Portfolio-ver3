import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow-md bg-gray-50">
      <h1 className="font-bold text-2xl text-green-600">Portfolio Website</h1>
      <div className="space-x-6">
        <Link href="/" className="text-gray-800 hover:text-green-500">Home</Link>
        <Link href="/about" className="text-gray-800 hover:text-green-500">About</Link>
        <Link href="/projects" className="text-gray-800 hover:text-green-500">Projects</Link>
        <Link href="/contact" className="text-gray-800 hover:text-green-500">Contact</Link>
      </div>
    </nav>
  );
}