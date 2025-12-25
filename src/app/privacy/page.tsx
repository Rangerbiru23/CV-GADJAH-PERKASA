'use client'

import { ArrowLeft, Phone, Mail, MapPin } from 'lucide-react'
import Link from 'next/link'

export default function Privacy() {
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
            Privacy Policy
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              <strong>Effective Date:</strong> January 1, 2024
            </p>

            <p className="text-gray-700 mb-6">
              At <strong>CV GADJAH PERKASA</strong>, we are committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
              when you visit our website or use our construction services.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Personal Information</h3>
            <p className="text-gray-700 mb-4">
              We may collect personal information that you voluntarily provide to us, including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Name and contact information (email, phone number)</li>
              <li>Company name and business address</li>
              <li>Project requirements and specifications</li>
              <li>Communication preferences</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Technical Information</h3>
            <p className="text-gray-700 mb-4">
              We automatically collect certain technical information when you visit our website:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>IP address and browser type</li>
              <li>Device information and operating system</li>
              <li>Pages visited and time spent on our site</li>
              <li>Referring website information</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">
              We use the information we collect for the following purposes:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>To provide construction services and respond to inquiries</li>
              <li>To communicate with you about projects and updates</li>
              <li>To improve our website and services</li>
              <li>To send marketing communications (with your consent)</li>
              <li>To comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Information Sharing</h2>
            <p className="text-gray-700 mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties 
              without your consent, except in the following circumstances:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>To trusted service providers who assist in operating our business</li>
              <li>When required by law or to protect our rights</li>
              <li>In connection with a business transfer or merger</li>
              <li>With your explicit consent</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Data Security</h2>
            <p className="text-gray-700 mb-6">
              We implement appropriate security measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction. However, no method of 
              transmission over the internet is 100% secure.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Cookies</h2>
            <p className="text-gray-700 mb-6">
              Our website may use cookies to enhance your experience. You can choose to accept or 
              decline cookies through your browser settings. Continued use of our site indicates 
              your acceptance of our cookie policy.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Your Rights</h2>
            <p className="text-gray-700 mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Access and update your personal information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt-out of marketing communications</li>
              <li>Request a copy of the data we hold about you</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Children's Privacy</h2>
            <p className="text-gray-700 mb-6">
              Our website is not intended for children under 18. We do not knowingly collect 
              personal information from children under 18.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Changes to This Policy</h2>
            <p className="text-gray-700 mb-6">
              We may update this Privacy Policy from time to time. We will notify you of any 
              changes by posting the new policy on this page with an updated effective date.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Contact Information</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
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
                This Privacy Policy was last updated on January 1, 2024.
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