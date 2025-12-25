'use client'

import { useState } from 'react'
import { Menu, X, Phone, Mail, MapPin, ChevronRight, Shield, Users, Award, Wrench } from 'lucide-react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="/logo.png" 
                alt="CV GADJAH PERKASA" 
                className="h-12 w-auto"
              />
              <div className="ml-3">
                <h1 className="text-xl font-bold text-gray-900">CV GADJAH PERKASA</h1>
                <p className="text-xs text-gray-600">Konstruksi Gedung Lainnya</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#beranda" className="text-gray-900 hover:text-blue-600 transition-colors">Beranda</a>
              <a href="#tentang" className="text-gray-900 hover:text-blue-600 transition-colors">Tentang</a>
              <a href="#layanan" className="text-gray-900 hover:text-blue-600 transition-colors">Layanan</a>
              <a href="#kontak" className="text-gray-900 hover:text-blue-600 transition-colors">Kontak</a>
              <a href="/privacy" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">Privacy</a>
              <a href="/terms" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">Terms</a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-900 hover:text-blue-600 transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#beranda" className="block px-3 py-2 text-gray-900 hover:text-blue-600 transition-colors">Beranda</a>
              <a href="#tentang" className="block px-3 py-2 text-gray-900 hover:text-blue-600 transition-colors">Tentang</a>
              <a href="#layanan" className="block px-3 py-2 text-gray-900 hover:text-blue-600 transition-colors">Layanan</a>
              <a href="#kontak" className="block px-3 py-2 text-gray-900 hover:text-blue-600 transition-colors">Kontak</a>
              <a href="/privacy" className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors text-sm">Privacy</a>
              <a href="/terms" className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors text-sm">Terms</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="beranda" className="relative pt-16 min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img 
            src="/hero-bg.jpg" 
            alt="Construction Site" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/80"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-yellow-400">CV GADJAH PERKASA</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Konstruksi Gedung Lainnya Terpercaya
            </p>
            <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-blue-50">
              Mitra profesional untuk semua kebutuhan konstruksi gedung Anda. 
              Berpengalaman, terpercaya, dan berkualitas tinggi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#kontak" 
                className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors inline-flex items-center justify-center"
              >
                Hubungi Kami
                <ChevronRight className="ml-2" size={20} />
              </a>
              <a 
                href="#layanan" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors inline-flex items-center justify-center"
              >
                Lihat Layanan
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="tentang" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Mengapa Memilih <span className="text-blue-600">CV GADJAH PERKASA</span>?
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                CV GADJAH PERKASA adalah perusahaan konstruksi yang berpengalaman dalam 
                pembangunan gedung-gedung komersial, residensial, dan industri. 
                Dengan tim profesional dan komitmen terhadap kualitas, kami telah 
                melayani berbagai proyek konstruksi di Sumatera Selatan.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Kami mengutamakan keselamatan, kualitas, dan ketepatan waktu dalam 
                setiap proyek yang kami kerjakan. Kepuasan klien adalah prioritas utama kami.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center">
                  <Shield className="text-blue-600 mr-3" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-900">Bergaransi</h3>
                    <p className="text-sm text-gray-600">Kualitas terjamin</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Users className="text-blue-600 mr-3" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-900">Tim Profesional</h3>
                    <p className="text-sm text-gray-600">Ahli di bidangnya</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Award className="text-blue-600 mr-3" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-900">Berpengalaman</h3>
                    <p className="text-sm text-gray-600">Tahunan layanan</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Wrench className="text-blue-600 mr-3" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-900">Peralatan Modern</h3>
                    <p className="text-sm text-gray-600">Teknologi terkini</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <img 
                src="/team.jpg" 
                alt="Construction Team" 
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="layanan" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Layanan <span className="text-blue-600">Konstruksi</span> Kami
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Kami menyediakan berbagai layanan konstruksi gedung untuk memenuhi 
              kebutuhan proyek Anda dengan hasil terbaik.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Wrench className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Konstruksi Gedung Baru</h3>
              <p className="text-gray-700">
                Pembangunan gedung perkantoran, komersial, dan industri dengan desain 
                modern dan struktur yang kokoh.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Shield className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Renovasi Gedung</h3>
              <p className="text-gray-700">
                Jasa renovasi dan perbaikan gedung untuk meningkatkan fungsi dan estetika 
                bangunan existing.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Award className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Konsultasi Konstruksi</h3>
              <p className="text-gray-700">
                Konsultasi perencanaan dan desain konstruksi untuk hasil optimal yang 
                sesuai dengan kebutuhan Anda.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontak" className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Hubungi <span className="text-yellow-400">CV GADJAH PERKASA</span>
            </h2>
            <p className="text-lg text-blue-100">
              Siap melayani kebutuhan konstruksi Anda. Hubungi kami untuk konsultasi gratis.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-8">Informasi Kontak</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="text-yellow-400 mr-4 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold mb-2">Alamat</h4>
                    <p className="text-blue-100">
                      JL JEND AHMAD YANI NO 108<br />
                      Desa/Kelurahan Sukaraya<br />
                      Kec. Baturaja Timur<br />
                      Kab. Ogan Komering Ulu<br />
                      Provinsi Sumatera Selatan
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Phone className="text-yellow-400 mr-4" size={24} />
                  <div>
                    <h4 className="font-semibold mb-2">Telepon</h4>
                    <p className="text-blue-100">085285703497</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Mail className="text-yellow-400 mr-4" size={24} />
                  <div>
                    <h4 className="font-semibold mb-2">Email</h4>
                    <p className="text-blue-100">info@cvgadjahperkasa.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Kirim Pesan</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Nama Lengkap</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                    placeholder="Masukkan nama Anda"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                    placeholder="email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Pesan</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                    placeholder="Jelaskan kebutuhan konstruksi Anda..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-yellow-400 text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
                >
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <img 
                  src="/logo.png" 
                  alt="CV GADJAH PERKASA" 
                  className="h-10 w-auto mr-3"
                />
                <div>
                  <h3 className="text-xl font-bold">CV GADJAH PERKASA</h3>
                  <p className="text-sm text-gray-400">Konstruksi Gedung Lainnya</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Perusahaan konstruksi terpercaya untuk semua kebutuhan pembangunan gedung Anda. 
                Kualitas, keamanan, dan kepuasan klien adalah prioritas kami.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Konstruksi Gedung Baru</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Renovasi Gedung</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Konsultasi Konstruksi</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white transition-colors">Terms & Conditions</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 CV GADJAH PERKASA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}