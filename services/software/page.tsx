import Link from "next/link";

export default function SoftwareServices() {
    return (
        <main className="min-h-screen px-6 py-20 bg-white text-gray-900">
            <h1 className="text-3xl font-bold mb-8 text-center">Software Development</h1>
            <div className="max-w-3xl mx-auto space-y-6">
                <div className="p-6 bg-gray-50 rounded shadow">
                    <h2 className="text-xl font-semibold mb-2">Small Scripts / Automation</h2>
                    <p className="text-gray-700 mb-2">Custom automation scripts (Python, Java, etc.) to streamline your workflow.</p>
                    <p className="font-bold text-green-600">$50 - $100 / Projects</p>
                </div>

                <div className="p-6 bg-gray-50 rounded shadow">
                    <h2 className="text-xl font-semibold mb-2">Feature Additions</h2>
                    <p className="text-gray-700 mb-2"> Add new Feature/Functionality to an existing Applications</p>
                    <p className="font-bold text-green-600">$100 - $300</p>
                </div>

                <div className="p-6 bg-gray-50 rounded shadow">
                    <h2 className="text-xl font-semibold mb-2">Custom Backend Logic / API Setup</h2>
                    <p className="text-gray-700 mb-2">Develop custom backend logic or set up APIs to enhance your applications.</p>
                    <p className="font-bold text-green-600">$300 - $600</p>
                </div>
            </div>
        </main>
    )
}

