import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Work Sans' }}>Atiko</h3>
            <p className="text-gray-400 text-sm">
              Votre partenaire de confiance pour tous vos déplacements au Sénégal et à l'international.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Liens rapides</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/cars" className="text-gray-400 hover:text-[#38BDF8] transition-colors">
                  Location de voitures
                </Link>
              </li>
              <li>
                <Link to="/bus" className="text-gray-400 hover:text-[#38BDF8] transition-colors">
                  Réservation de bus
                </Link>
              </li>
              <li>
                <Link to="/flights" className="text-gray-400 hover:text-[#38BDF8] transition-colors">
                  Billets d'avion
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-[#38BDF8] transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-[#38BDF8] transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-gray-400 hover:text-[#38BDF8] transition-colors">
                  Mon espace
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-400">Aide & FAQ</li>
              <li className="text-gray-400">Conditions générales</li>
              <li className="text-gray-400">Politique de confidentialité</li>
              <li className="text-gray-400">Politique d'annulation</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center text-gray-400">
                <Mail className="h-4 w-4 mr-2" />
                contact@atiko.sn
              </li>
              <li className="flex items-center text-gray-400">
                <Phone className="h-4 w-4 mr-2" />
                +221 33 123 45 67
              </li>
              <li className="flex items-center text-gray-400">
                <MapPin className="h-4 w-4 mr-2" />
                Dakar, Sénégal
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Atiko. Tous droits réservés.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#38BDF8] transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#38BDF8] transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#38BDF8] transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}