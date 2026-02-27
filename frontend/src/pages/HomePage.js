import React from 'react';
import { Car, Bus, Plane, Shield, Clock, Headphones } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { mockCars } from '@/utils/mockData';

export default function HomePage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = React.useState('car');

  const handleSearch = (type) => {
    if (type === 'car') navigate('/cars');
    else if (type === 'bus') navigate('/bus');
    else if (type === 'flight') navigate('/flights');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1600)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#38BDF8]/90 to-[#0EA5E9]/80"></div>
        </div>
        
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4">
          <div className="text-center mb-8 animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4" style={{ fontFamily: 'Work Sans' }}>
              Voyagez avec Atiko
            </h1>
            <p className="text-xl md:text-2xl text-white/95">
              Votre partenaire de confiance pour tous vos déplacements
            </p>
          </div>

          {/* Search Box */}
          <div className="glass-dark rounded-2xl p-6 shadow-2xl max-w-4xl mx-auto" data-testid="search-box">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-6 bg-white/50">
                <TabsTrigger value="car" className="flex items-center gap-2" data-testid="tab-car">
                  <Car className="h-4 w-4" />
                  Voiture
                </TabsTrigger>
                <TabsTrigger value="bus" className="flex items-center gap-2" data-testid="tab-bus">
                  <Bus className="h-4 w-4" />
                  Bus
                </TabsTrigger>
                <TabsTrigger value="flight" className="flex items-center gap-2" data-testid="tab-flight">
                  <Plane className="h-4 w-4" />
                  Avion
                </TabsTrigger>
              </TabsList>

              <TabsContent value="car" className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-gray-700 font-medium">Ville</Label>
                    <Input placeholder="Où souhaitez-vous louer ?" className="mt-1" data-testid="car-city-input" />
                  </div>
                  <div>
                    <Label className="text-gray-700 font-medium">Type de véhicule</Label>
                    <Input placeholder="Berline, SUV, Économique..." className="mt-1" data-testid="car-type-input" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-gray-700 font-medium">Date de début</Label>
                    <Input type="date" className="mt-1" data-testid="car-start-date" />
                  </div>
                  <div>
                    <Label className="text-gray-700 font-medium">Date de fin</Label>
                    <Input type="date" className="mt-1" data-testid="car-end-date" />
                  </div>
                </div>
                <Button 
                  onClick={() => handleSearch('car')} 
                  className="w-full bg-[#38BDF8] hover:bg-[#0EA5E9] text-white h-12 text-lg font-semibold"
                  data-testid="search-car-btn"
                >
                  Rechercher des voitures
                </Button>
              </TabsContent>

              <TabsContent value="bus" className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-gray-700 font-medium">Ville de départ</Label>
                    <Input placeholder="Dakar" className="mt-1" data-testid="bus-from-input" />
                  </div>
                  <div>
                    <Label className="text-gray-700 font-medium">Ville d'arrivée</Label>
                    <Input placeholder="Thiès" className="mt-1" data-testid="bus-to-input" />
                  </div>
                </div>
                <div>
                  <Label className="text-gray-700 font-medium">Date de voyage</Label>
                  <Input type="date" className="mt-1" data-testid="bus-date-input" />
                </div>
                <Button 
                  onClick={() => handleSearch('bus')} 
                  className="w-full bg-[#38BDF8] hover:bg-[#0EA5E9] text-white h-12 text-lg font-semibold"
                  data-testid="search-bus-btn"
                >
                  Rechercher des bus
                </Button>
              </TabsContent>

              <TabsContent value="flight" className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-gray-700 font-medium">Aéroport de départ</Label>
                    <Input placeholder="DSS - Dakar" className="mt-1" data-testid="flight-from-input" />
                  </div>
                  <div>
                    <Label className="text-gray-700 font-medium">Aéroport d'arrivée</Label>
                    <Input placeholder="CDG - Paris" className="mt-1" data-testid="flight-to-input" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-gray-700 font-medium">Date de départ</Label>
                    <Input type="date" className="mt-1" data-testid="flight-depart-date" />
                  </div>
                  <div>
                    <Label className="text-gray-700 font-medium">Date de retour</Label>
                    <Input type="date" className="mt-1" data-testid="flight-return-date" />
                  </div>
                </div>
                <Button 
                  onClick={() => handleSearch('flight')} 
                  className="w-full bg-[#38BDF8] hover:bg-[#0EA5E9] text-white h-12 text-lg font-semibold"
                  data-testid="search-flight-btn"
                >
                  Rechercher des vols
                </Button>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800" style={{ fontFamily: 'Work Sans' }}>
            Pourquoi choisir Atiko ?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover-lift text-center" data-testid="feature-payment">
              <div className="w-16 h-16 bg-[#38BDF8]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-[#38BDF8]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Paiement sécurisé</h3>
              <p className="text-gray-600">Transactions 100% sécurisées avec Stripe et Mobile Money</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover-lift text-center" data-testid="feature-speed">
              <div className="w-16 h-16 bg-[#38BDF8]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-[#38BDF8]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Réservation rapide</h3>
              <p className="text-gray-600">Réservez en quelques clics seulement</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover-lift text-center" data-testid="feature-support">
              <div className="w-16 h-16 bg-[#38BDF8]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Headphones className="h-8 w-8 text-[#38BDF8]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Support 24/7</h3>
              <p className="text-gray-600">Équipe disponible à tout moment pour vous aider</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Cars Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-bold text-gray-800" style={{ fontFamily: 'Work Sans' }}>
              Véhicules populaires
            </h2>
            <Button 
              onClick={() => navigate('/cars')} 
              variant="outline" 
              className="border-[#38BDF8] text-[#38BDF8] hover:bg-[#38BDF8] hover:text-white"
              data-testid="view-all-cars-btn"
            >
              Voir tout
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {mockCars.slice(0, 3).map((car) => (
              <div key={car.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover-lift car-card" data-testid={`popular-car-${car.id}`}>
                <img src={car.image} alt={car.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-800">{car.name}</h3>
                    <span className="text-sm bg-[#38BDF8]/10 text-[#38BDF8] px-3 py-1 rounded-full font-medium">
                      {car.category}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{car.city}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-[#38BDF8]">{car.price.toLocaleString()} FCFA</span>
                    <span className="text-sm text-gray-500">/ jour</span>
                  </div>
                  <Button 
                    onClick={() => navigate(`/cars/${car.id}`)} 
                    className="w-full mt-4 bg-[#38BDF8] hover:bg-[#0EA5E9]"
                    data-testid={`book-car-${car.id}-btn`}
                  >
                    Réserver
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800" style={{ fontFamily: 'Work Sans' }}>
            Destinations populaires
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: 'Dakar', image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=500' },
              { name: 'Saint-Louis', image: 'https://images.unsplash.com/photo-1570789210967-2cac24afeb00?w=500' },
              { name: 'Thiès', image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=500' },
              { name: 'Saly', image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=500' }
            ].map((dest, idx) => (
              <div key={idx} className="relative h-64 rounded-xl overflow-hidden hover-lift cursor-pointer group" data-testid={`destination-${idx}`}>
                <img src={dest.image} alt={dest.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <h3 className="text-white text-2xl font-bold">{dest.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800" style={{ fontFamily: 'Work Sans' }}>
            Ce que disent nos clients
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Fatou Diop', text: 'Service excellent ! J\'ai réservé une voiture en quelques minutes.', rating: 5 },
              { name: 'Moussa Sall', text: 'Très pratique pour mes voyages d\'affaires. Je recommande !', rating: 5 },
              { name: 'Awa Ndiaye', text: 'Prix compétitifs et support client réactif. Parfait !', rating: 5 }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-lg" data-testid={`testimonial-${idx}`}>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <p className="font-bold text-gray-800">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}