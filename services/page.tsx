import Link from "next/link";
export default function Services() {
    return (
        <main className="min-h-screen px-6 py-20 bg-gray-50 text-gray-900">
            <h1 className="text-4xl font-bold text-center mb-12"> My Services</h1>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {/* Service 1 */}
                <div className=" bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-lg transition">
                    <h2 className="text-2xl font-semibold mb-4">Software Development</h2>
                    <p className="text-gray-700">
                        Entry-level software development services such as building small
                        applications, Custom Scripts, backend logic, and feature implementation.
                    </p>
                    <Link 
                    href="/services/software"
                    className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                    > 
                    Learn More
                    </Link>
                </div>

                {/* Service 2 */}
                <div className=" bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-lg transition">
                    <h2 className="text-2xl font-semibold mb-4">Web Development</h2>
                    <p className="text-gray-600 mb-6">
                       Responsive and modern websites built with Next.js, React, and  
                       Tailwind CSS, tailored for individuals or small businesses.
                    </p>
                    <Link 
                    href="/services/web"
                    className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                    >
                    Learn More
                    </Link>
                </div>

                {/* Service 3 */}
              <div className="bg=white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <h2 className="text-2xl font-semibold mb-4">Debugging & Fixes</h2>
                <p className="text-gray-600 mb-6">
                        Stuck with errors? I provide debugging, code reviews, and fixes 
                        for small to medium projects at a reasonable price.
                    </p>
                    <Link
                    href="/services/debugging"
                    className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                    >
                    Learn More
                    </Link>
                </div>
            </div>
        </main>
    )
}