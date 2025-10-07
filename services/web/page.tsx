export default function WebServices() {
    return (
        <main className="min-h-screen-px-6 py-20 bg-white text-gray-900">
            <h1 className="text-3xl font-bold mb-8 text-center">Web Development Services</h1>
            <div className="max-w-3xl mx-auto space-y-6">
                <div className="p-6 bg-gray-50 rounded shadow">
                    <h2 className="text-xl font-semibold mb-2">Personal Portfolio / Landing Page</h2>
                    <p className="text-gray-700 mb-2"> A sleek and modern website for your personal brand.</p>
                    <p className="font-bold text-green-600">$150 - $300</p>
                </div>

                <div className="p-6 bg-gray-50 rounded shadow">
                    <h2 className="text-xl font-semibold mb-2">Small Business Website</h2>
                    <p className="text-gray-700 mb-2"> Custom business site with multiple pages and features.</p>
                    <p className="font-bold text-green-600">$300 - $700</p>
                </div>

                <div className="p-6 bg-gray-50 rounded shadow">
                    <h2 className="text-xl font-semibold mb-2">Full-Stack Web application</h2>
                    <p className="text-gray-700 mb-2"> Dynamic apps with frontend to backend & database integration.</p>
                    <p className="font-bold text-green-600">$700 - $1200</p>
                </div>
            </div>
        </main>
    )
}