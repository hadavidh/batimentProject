import { MapPin, Phone, Mail, Building2 } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero */}
            <section className="bg-gradient-to-r from-gray-800 to-gray-600 text-white">
                <div className="max-w-7xl mx-auto px-6 py-20">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Our Building Professionals</h1>
                    <p className="text-gray-300 max-w-2xl">
                        Looking for expert builders, contractors, or construction services? Our team of professionals is ready to help you build or renovate your projects efficiently and safely.
                    </p>
                </div>
            </section>

            {/* Content */}
            <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Contact Info */}
                <div className="lg:col-span-1 space-y-6">
                    <div className="bg-white rounded-2xl shadow p-6">
                        <div className="flex items-center gap-3 mb-3">
                            <Building2 className="w-6 h-6" />
                            <h3 className="text-xl font-semibold">Our Office</h3>
                        </div>
                        <p className="text-gray-600">ProBuild Group</p>
                        <p className="text-gray-600">456 Construction Ave</p>
                        <p className="text-gray-600">Brussels, Belgium</p>
                    </div>

                    <div className="bg-white rounded-2xl shadow p-6">
                        <div className="flex items-center gap-3 mb-3">
                            <Phone className="w-6 h-6" />
                            <h3 className="text-xl font-semibold">Phone</h3>
                        </div>
                        <p className="text-gray-600">+32 2 765 43 21</p>
                    </div>

                    <div className="bg-white rounded-2xl shadow p-6">
                        <div className="flex items-center gap-3 mb-3">
                            <Mail className="w-6 h-6" />
                            <h3 className="text-xl font-semibold">Email</h3>
                        </div>
                        <p className="text-gray-600">contact@probuild.be</p>
                    </div>
                </div>

                {/* Form */}
                <div className="lg:col-span-2">
                    <div className="bg-white rounded-2xl shadow p-8">
                        <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
                        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-800"
                            />
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-800"
                            />
                            <input
                                type="text"
                                placeholder="Phone Number"
                                className="border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-800"
                            />
                            <select className="border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-800">
                                <option value="">I'm interested in...</option>
                                <option value="new-build">New Construction</option>
                                <option value="renovation">Renovation</option>
                                <option value="consultation">Consultation</option>
                            </select>

                            {/* Textarea spans both columns */}
                            <textarea
                                placeholder="Your message"
                                rows={5}
                                className="md:col-span-2 border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-800"
                            />

                            {/* Button spans both columns */}
                            <button
                                type="submit"
                                className="md:col-span-2 bg-gray-800 text-white rounded-xl py-3 font-medium hover:bg-gray-700 transition"
                            >
                                Contact Builder
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Map Placeholder */}
            <section className="bg-white">
                <div className="max-w-7xl mx-auto px-6 py-12">
                    <div className="flex items-center gap-3 mb-4">
                        <MapPin className="w-6 h-6" />
                        <h3 className="text-xl font-semibold">Find Us</h3>
                    </div>
                    <div className="w-full h-64 bg-gray-200 rounded-2xl flex items-center justify-center text-gray-500">
                        Map integration (Google Maps / OpenStreetMap)
                    </div>
                </div>
            </section>
        </div>
    );
}
