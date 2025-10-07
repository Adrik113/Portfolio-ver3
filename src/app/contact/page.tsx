import { Mail, Phone, Linkedin } from "lucide-react";



export default function ContactPage() {

    return (
        <section className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6 py-20">
            <div className="max-w-2xl w-full bg-white rounded-2xl shadow-lg p-10">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
                    Get in Touch
                </h1>
                <p className="text-center text-gray-600 mb-10">
                    Feel free to reach out if you&apos;d like to collaborate, discuss a project, 
                    or just connect professionally!
                </p>

                {/* Contact Form */}
                <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                        <Mail className="text-blue-600" size={24} />
                        <a
                            href="mailto:adrikwarren@gmail.com"
                            className="text-gray-700 hover:text-blue-600 text-lg"
                            >
                                adrikwarren@gmail.com
                            </a>
                    </div>

                    <div className="flex items-center space-x-4">
                        <Phone className="text-blue-600" size={24} />
                        <a 
                            href="tel:+19102148732"
                            className="text-gray-700 hover:text-blue-600 text-lg"
                            >
                                +1 (910) 214-8732
                            </a>

                            <div className="flex items-center space-x-4">
                                <Linkedin className="text-blue-600" size={24} />
                                <a 
                                    href="https://www.linkedin.com/in/adrik-warren/" 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-700 hover:text-blue-600 text-lg"
                                    >
                                    linkedin.com/in/adrik-warren
                                </a>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
