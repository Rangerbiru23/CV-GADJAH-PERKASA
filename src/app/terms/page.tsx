'use client'

import { ArrowLeft, Phone, Mail, MapPin } from 'lucide-react'
import Link from 'next/link'

export default function Terms() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center">
              <img 
                src="/logo.png" 
                alt="CV GADJAH PERKASA" 
                className="h-10 w-auto"
              />
              <div className="ml-3">
                <h1 className="text-lg font-bold text-gray-900">CV GADJAH PERKASA</h1>
                <p className="text-xs text-gray-600">Konstruksi Gedung Lainnya</p>
              </div>
            </Link>
            
            <Link 
              href="/" 
              className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              <ArrowLeft size={20} className="mr-2" />
              Kembali ke Beranda
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Terms and Conditions
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              <strong>Effective Date:</strong> January 1, 2024
            </p>

            <p className="text-gray-700 mb-6">
              Welcome to <strong>CV GADJAH PERKASA</strong>. These Terms and Conditions 
              govern your use of our website and construction services. By accessing our 
              website or engaging our services, you agree to be bound by these terms.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 mb-6">
              By accessing and using this website, you accept and agree to be bound by the 
              terms and provision of this agreement. If you do not agree to abide by the above, 
              please do not use this service.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Services Description</h2>
            <p className="text-gray-700 mb-4">
              CV GADJAH PERKASA provides construction services including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>New building construction</li>
              <li>Building renovation and remodeling</li>
              <li>Construction consulting services</li>
              <li>Project management</li>
              <li>Architectural design services</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Client Responsibilities</h2>
            <p className="text-gray-700 mb-4">
              As a client, you agree to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Provide accurate and complete information about your project requirements</li>
              <li>Obtain all necessary permits and approvals required for your project</li>
              <li>Make timely payments as outlined in project agreements</li>
              <li>Provide access to the construction site as needed</li>
              <li>Communicate any changes or concerns promptly</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Payment Terms</h2>
            <p className="text-gray-700 mb-4">
              Payment terms are as follows:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Payment schedules will be outlined in project agreements</li>
              <li>Deposits may be required to begin work</li>
              <li>Final payment is due upon project completion</li>
              <li>Late payments may incur additional charges</li>
              <li>All prices are subject to change without prior notice</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Project Timeline</h2>
            <p className="text-gray-700 mb-6">
              Project timelines are estimates based on normal working conditions and may be 
              affected by factors beyond our control, including weather, material availability, 
              and client-requested changes. We will communicate any significant delays promptly.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Warranty and Guarantees</h2>
            <p className="text-gray-700 mb-4">
              We stand behind our work with:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Workmanship warranty as specified in project agreements</li>
              <li>Manufacturer warranties for materials and equipment</li>
              <li>Post-completion support for specified periods</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Limitation of Liability</h2>
            <p className="text-gray-700 mb-6">
              CV GADJAH PERKASA shall not be liable for any indirect, incidental, special, 
              or consequential damages resulting from the use of our services or website. 
              Our total liability shall not exceed the amount paid for the specific service 
              in question.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Safety and Insurance</h2>
            <p className="text-gray-700 mb-6">
              We maintain appropriate insurance coverage and follow all safety regulations. 
              Clients must ensure their property is adequately insured during construction 
              activities.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Intellectual Property</h2>
            <p className="text-gray-700 mb-6">
              All content on this website, including text, graphics, logos, and images, 
              is the property of CV GADJAH PERKASA and protected by copyright and other 
              intellectual property laws.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Termination</h2>
            <p className="text-gray-700 mb-6">
              Either party may terminate service agreements with written notice. Clients 
              are responsible for payment for all work completed up to the termination date.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11. Dispute Resolution</h2>
            <p className="text-gray-700 mb-6">
              Any disputes arising from these terms or our services shall be resolved through 
              good faith negotiations. If unresolved, disputes will be subject to the 
              jurisdiction of Indonesian courts in Ogan Komering Ulu Regency.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">12. Force Majeure</h2>
            <p className="text-gray-700 mb-6">
              We are not liable for delays or failures to perform due to circumstances 
              beyond our reasonable control, including natural disasters, war, terrorism, 
              government actions, or labor disputes.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">13. Privacy</h2>
            <p className="text-gray-700 mb-6">
              Your privacy is important to us. Please review our Privacy Policy to understand 
              how we collect, use, and protect your information.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">14. Modifications to Terms</h2>
            <p className="text-gray-700 mb-6">
              We reserve the right to modify these terms at any time. Changes will be 
              effective immediately upon posting on our website. Your continued use of 
              our services constitutes acceptance of any modified terms.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">15. Contact Information</h2>
            <p className="text-gray-700 mb-4">
              For questions about these Terms and Conditions, please contact us:
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <div className="space-y-3">
                <div className="flex items-start">
                  <MapPin className="text-blue-600 mr-3 mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900">Alamat</p>
                    <p className="text-gray-700">
                      JL JEND AHMAD YANI NO 108<br />
                      Desa/Kelurahan Sukaraya<br />
                      Kec. Baturaja Timur<br />
                      Kab. Ogan Komering Ulu<br />
                      Provinsi Sumatera Selatan
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Phone className="text-blue-600 mr-3" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900">Telepon</p>
                    <p className="text-gray-700">085285703497</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Mail className="text-blue-600 mr-3" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-700">info@cvgadjahperkasa.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t pt-6 mt-8">
              <p className="text-sm text-gray-600 text-center">
                These Terms and Conditions were last updated on January 1, 2024.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <img 
                src="/logo.png" 
                alt="CV GADJAH PERKASA" 
                className="h-8 w-auto mr-2"
              />
              <h3 className="text-lg font-bold">CV GADJAH PERKASA</h3>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Konstruksi Gedung Lainnya Terpercaya
            </p>
            <p className="text-gray-500 text-sm">
              &copy; 2024 CV GADJAH PERKASA. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}