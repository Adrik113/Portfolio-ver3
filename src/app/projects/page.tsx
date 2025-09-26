export default function ProjectsPage() {
    return (
        <main className="min-h-screen px-6 py-20 bg-gray-50 text-gray-900">
            <h1 className="text-4xl font-bold text-center mb-10">My Projects</h1>

            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
                {/* Project 1 */}
                <div className="p-6 bg-white rounded shadow-md rounded-1g hover:shadow-lg transition">
                    <h2 className="text-2xl font-semibold mb-2">Budget Tracker App</h2>
                    <p className="mb-4 text-gray-700">
                        A React + Recharts web application that helps user track income  and expenses
                        with interactive charts and a clean UI.
                    </p>
                    <div className="flex space-x-4">
                        <a 
                            href="https://github.com/Adrik113/Adrik-Budget-Tracker"
                            target="_blank"
                            className="text-blue-500 hover:underline"
                        >
                            View on GitHub
                        </a>
                        <a
                            href="#"
                            target="_blank"
                            className="text-blue-500 hover:underline"
                        >
                            View Live Demo
                        </a>
                    </div>
                </div>

                {/* Project 2 */}
                <div className="p-6 bg-white rounded shadow-md rounded-1g hover:shadow-lg transition">
                    <h2 className="text-2xl font-semibold mb-2">Portfolio Website</h2>
                    <p className="mb-4 text-gray-700">
                        This very site! Built with Next.js, Tailwind CSS, and TypeScript.
                        Designed to showcase my skills, services, and projects in a clean layout.
                    </p>
                    <div className="flex space-x-4">
                        <a
                            href="https://github.com/Adrik113/My-PortfolioDev"
                            target="_blank"
                            className="text-blue-500 hover:underline"
                        >
                            View on GitHub
                        </a>
                    </div>
                </div>



            </div>
           
        </main>
    )
}
