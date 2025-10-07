

import Link  from "next/link";

export const metadata = {
  title: 'My Portfolio',
  description: 'Portfolio website of Adrik',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
     <body className="bg-gradient-to-br from-gray-900 via-gray-800 to-green-700 text-white min-h-screen flex flex-col">

        {/*Navigation Bar */}
        <nav className="flex justify-between items-center px-8 py-4 shadow-md bg-white bg-opacity-10 backdrop-blur-md">
          <div className="text-2xl font-bold">Portfolio Website</div>
          <div className="space-x-6">
            <Link href="/" className="hover:text-green-400 transition-colors">Home</Link>
            <Link href="/about" className="hover:text-green-400 transition-colors">About</Link>
            <Link href="/projects" className="hover:text-green-400 transition-colors">Projects</Link>
            <Link href="/contact" className="hover:text-green-400 transition-colors">Contact</Link>
          </div>
        </nav>

        {/*Main Page Content */}
        <main className="flex-grow">{children}</main>

        {/*Footer */}
        <footer className="bg-black bg-opacity-70 text-center py-4 mt-8">
          <p className="text-gray-400">
          © {new Date().getFullYear()} Portfolio Website. Built with Next.js & Tailwind CSS.
          </p>
          <p className="text-gray-400">
            Full-Stack Developer • Next.js • Tailwind CSS • Java • Python • PHP
          </p>
          </footer>
      </body>
    </html>
  );
}
