import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center text-center px-6 bg-gray-100 text-gray-900">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Hello, I’m <span className="text-green-600">Adrik 👋</span>
        <br />
        Welcome to my portfolio website
      </h1>
      <p className="text-xl text-gray-700 mb-8 max-w-2xl">
        I’m a passionate full-stack developer building modern web applications with
        <span className="text-green-600"> React</span>,
        <span className="text-green-600"> Next.js</span>, and <span className="text-green-600">Tailwind CSS</span>.
        I also work with Backend Technologies like <span className="text-green-600">Java</span>, <span className="text-green-600">Python</span>, and <span className="text-green-600">PHP</span>.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link href="/about" className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
          About Me
        </Link>
        <Link href="/projects" className="px-6 py-3 bg-green-500 text-white rounded hover:bg-green-600 transition">
          Projects
        </Link>
        <Link href="/contact" className="px-6 py-3 bg-gray-700 text-white rounded hover:bg-gray-800 transition">
          Contact
        </Link>
      </div>
    </main>
  );
}

