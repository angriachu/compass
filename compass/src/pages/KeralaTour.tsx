import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface District {
  id: string;
  name: string;
  description: string;
  image: string;
  attractions: string[];
  bestSeason: string;
  experiences: string[];
  speciality: string;
}

const KeralaTour = () => {
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);

  const districts: District[] = [
    {
      id: 'thiruvananthapuram',
      name: 'Thiruvananthapuram',
      description: 'The capital city of Kerala, known for its rich cultural heritage, beautiful beaches, and historic monuments.',
      image: '/images/trivandrum.jpg',
      attractions: [
        'Kovalam Beach',
        'Padmanabhaswamy Temple',
        'Napier Museum',
        'Kuthiramalika Palace',
        'Varkala Beach',
        'Poovar Island',
        'Agasthyakoodam',
        'Neyyar Wildlife Sanctuary'
      ],
      bestSeason: 'October to February',
      experiences: [
        'Beach activities',
        'Temple visits',
        'Museum tours',
        'Local cuisine',
        'Ayurvedic treatments',
        'Wildlife safari'
      ],
      speciality: 'Cultural Heritage & Beaches'
    },
    {
      id: 'kollam',
      name: 'Kollam',
      description: 'A historic port city known for its backwaters, cashew industry, and pristine beaches.',
      image: '/images/kollam.jpg',
      attractions: [
        'Ashtamudi Lake',
        'Thangassery Light House',
        'Jatayu Earth Center',
        'Palaruvi Waterfalls',
        'Kollam Beach',
        'Munroe Island',
        'Thenmala Eco Tourism',
        'Sasthamkotta Lake'
      ],
      bestSeason: 'October to March',
      experiences: [
        'Backwater cruises',
        'Beach visits',
        'Cashew factory tours',
        'Local seafood',
        'Adventure sports',
        'Bird watching'
      ],
      speciality: 'Backwaters & Cashew Industry'
    },
    {
      id: 'pathanamthitta',
      name: 'Pathanamthitta',
      description: 'Known as the Pilgrim Capital of Kerala, famous for the Sabarimala Temple and natural beauty.',
      image: '/images/pathanamthitta.jpg',
      attractions: [
        'Sabarimala Temple',
        'Perunthenaruvi Waterfalls',
        'Gavi Eco Tourism',
        'Konni Elephant Training Center',
        'Aranmula Parthasarathy Temple',
        'Thriveni Sangamam',
        'Kakki Reservoir',
        'Mannadi Temple'
      ],
      bestSeason: 'November to February',
      experiences: [
        'Pilgrimage tours',
        'Wildlife safari',
        'Trekking',
        'Boat rides',
        'Elephant rides',
        'Village tourism'
      ],
      speciality: 'Pilgrimage & Nature'
    },
    {
      id: 'alappuzha',
      name: 'Alappuzha',
      description: 'Famous as the Venice of the East, known for its backwaters, houseboats, and beaches.',
      image: '/images/alappuzha.jpg',
      attractions: [
        'Alappuzha Beach',
        'Kumarakom Backwaters',
        'Vembanad Lake',
        'Marari Beach',
        'Pathiramanal Island',
        'Krishnapuram Palace',
        'Ambalappuzha Temple',
        'Punnamada Lake'
      ],
      bestSeason: 'October to February',
      experiences: [
        'Houseboat stays',
        'Backwater cruises',
        'Beach activities',
        'Bird watching',
        'Fishing',
        'Local cuisine'
      ],
      speciality: 'Backwaters & Houseboats'
    },
    {
      id: 'kottayam',
      name: 'Kottayam',
      description: 'Known for its rubber plantations, backwaters, and religious significance.',
      image: '/images/kottayam.jpg',
      attractions: [
        'Kumarakom Bird Sanctuary',
        'Vaikom Temple',
        'Ilaveezhapoonchira',
        'Thirunakkara Temple',
        'Ettumanoor Temple',
        'Marmala Waterfalls',
        'Poonjar Palace',
        'Vagamon'
      ],
      bestSeason: 'October to February',
      experiences: [
        'Bird watching',
        'Temple visits',
        'Plantation tours',
        'Trekking',
        'Backwater cruises',
        'Local cuisine'
      ],
      speciality: 'Rubber Plantations & Backwaters'
    },
    {
      id: 'idukki',
      name: 'Idukki',
      description: 'Known for its hills, wildlife sanctuaries, and spice plantations.',
      image: '/images/idukki.jpg',
      attractions: [
        'Munnar',
        'Idukki Dam',
        'Eravikulam National Park',
        'Periyar Wildlife Sanctuary',
        'Mattupetty Dam',
        'Anamudi Peak',
        'Spice Plantations',
        'Tea Gardens'
      ],
      bestSeason: 'October to February',
      experiences: [
        'Wildlife safari',
        'Trekking',
        'Plantation visits',
        'Boat rides',
        'Camping',
        'Photography'
      ],
      speciality: 'Hill Stations & Wildlife'
    },
    {
      id: 'ernakulam',
      name: 'Ernakulam',
      description: 'The commercial capital of Kerala, known for its modern lifestyle and historic sites.',
      image: '/images/ernakulam.jpg',
      attractions: [
        'Fort Kochi',
        'Marine Drive',
        'Jewish Synagogue',
        'Chinese Fishing Nets',
        'Mattancherry Palace',
        'Cherai Beach',
        'Mangalavanam Bird Sanctuary',
        'Willingdon Island'
      ],
      bestSeason: 'October to February',
      experiences: [
        'Heritage walks',
        'Beach activities',
        'Shopping',
        'Local cuisine',
        'Boat rides',
        'Cultural shows'
      ],
      speciality: 'Heritage & Modern Life'
    },
    {
      id: 'thrissur',
      name: 'Thrissur',
      description: 'Known as the Cultural Capital of Kerala, famous for its festivals and temples.',
      image: '/images/thrissur.jpg',
      attractions: [
        'Vadakkunnathan Temple',
        'Athirappilly Waterfalls',
        'Thrissur Pooram',
        'Guruvayur Temple',
        'Punnathur Kotta',
        'Vazhachal Waterfalls',
        'Kerala Kalamandalam',
        'Chettuva Backwaters'
      ],
      bestSeason: 'October to February',
      experiences: [
        'Temple visits',
        'Festival celebrations',
        'Waterfall visits',
        'Cultural shows',
        'Elephant rides',
        'Local cuisine'
      ],
      speciality: 'Culture & Festivals'
    },
    {
      id: 'palakkad',
      name: 'Palakkad',
      description: 'Known as the Gateway of Kerala, famous for its forts and natural beauty.',
      image: '/images/palakkad.jpg',
      attractions: [
        'Palakkad Fort',
        'Silent Valley National Park',
        'Malampuzha Dam',
        'Nelliyampathy Hills',
        'Parambikulam Wildlife Sanctuary',
        'Kava Island',
        'Kalpathy Temple',
        'Mangalam Dam'
      ],
      bestSeason: 'October to February',
      experiences: [
        'Wildlife safari',
        'Trekking',
        'Boat rides',
        'Temple visits',
        'Photography',
        'Local cuisine'
      ],
      speciality: 'Forts & Nature'
    },
    {
      id: 'malappuram',
      name: 'Malappuram',
      description: 'Known for its rich Islamic heritage, beaches, and natural beauty.',
      image: '/images/malappuram.jpg',
      attractions: [
        'Beypore Beach',
        'Kadalundi Bird Sanctuary',
        'Nilambur Teak Museum',
        'Adyanpara Waterfalls',
        'Kodikuthimala',
        'Thirunavaya Temple',
        'Kottakkunnu',
        'Padinharekara Beach'
      ],
      bestSeason: 'October to February',
      experiences: [
        'Beach activities',
        'Bird watching',
        'Temple visits',
        'Photography',
        'Local cuisine',
        'Heritage walks'
      ],
      speciality: 'Islamic Heritage & Beaches'
    },
    {
      id: 'kozhikode',
      name: 'Kozhikode',
      description: 'Known as the City of Spices, famous for its beaches and cuisine.',
      image: '/images/kozhikode.jpg',
      attractions: [
        'Kozhikode Beach',
        'Beypore Beach',
        'Mananchira Square',
        'Kappad Beach',
        'Thikkoti Light House',
        'Kadalundi Bird Sanctuary',
        'Sargaalaya Arts Village',
        'Pazhassiraja Museum'
      ],
      bestSeason: 'October to February',
      experiences: [
        'Beach activities',
        'Local cuisine',
        'Shopping',
        'Bird watching',
        'Photography',
        'Cultural shows'
      ],
      speciality: 'Beaches & Cuisine'
    },
    {
      id: 'wayanad',
      name: 'Wayanad',
      description: 'Known for its misty mountains, wildlife sanctuaries, and tribal culture.',
      image: '/images/wayanad.jpg',
      attractions: [
        'Edakkal Caves',
        'Banasura Sagar Dam',
        'Chembra Peak',
        'Wayanad Wildlife Sanctuary',
        'Pookode Lake',
        'Soochipara Falls',
        'Kuruva Island',
        'Thirunelli Temple'
      ],
      bestSeason: 'October to February',
      experiences: [
        'Trekking',
        'Wildlife safari',
        'Camping',
        'Temple visits',
        'Photography',
        'Tribal village visits'
      ],
      speciality: 'Mountains & Wildlife'
    },
    {
      id: 'kannur',
      name: 'Kannur',
      description: 'Known as the Land of Looms and Lores, famous for its beaches and theyyam performances.',
      image: '/images/kannur.jpg',
      attractions: [
        'Kannur Beach',
        'St. Angelo Fort',
        'Muzhappilangad Drive-in Beach',
        'Arakkal Museum',
        'Payyambalam Beach',
        'Thalassery Fort',
        'Parassinikkadavu Temple',
        'Ezhimala Beach'
      ],
      bestSeason: 'October to February',
      experiences: [
        'Beach activities',
        'Theyyam performances',
        'Fort visits',
        'Local cuisine',
        'Photography',
        'Shopping'
      ],
      speciality: 'Beaches & Theyyam'
    },
    {
      id: 'kasaragod',
      name: 'Kasaragod',
      description: 'Known as the Land of Gods, famous for its forts, beaches, and temples.',
      image: '/images/kasaragod.jpg',
      attractions: [
        'Bekal Fort',
        'Bekal Beach',
        'Chandragiri Fort',
        'Ananthapura Lake Temple',
        'Kappil Beach',
        'Ranipuram',
        'Valiyaparamba Backwaters',
        'Malik Deenar Mosque'
      ],
      bestSeason: 'October to February',
      experiences: [
        'Fort visits',
        'Beach activities',
        'Temple visits',
        'Backwater cruises',
        'Photography',
        'Local cuisine'
      ],
      speciality: 'Forts & Beaches'
    }
  ];

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/kerala-map.jpg"
            alt="Kerala Map"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center text-white px-4"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Explore Kerala
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Discover the beauty of God's own country, district by district
          </p>
        </motion.div>
      </section>

      {/* Districts Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Kerala Districts
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Each district in Kerala has its own unique charm and attractions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {districts.map((district, index) => (
              <motion.div
                key={district.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48">
                  <img
                    src={district.image}
                    alt={district.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {district.speciality}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    {district.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {district.description}
                  </p>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Top Attractions
                      </h4>
                      <ul className="list-disc list-inside text-gray-600">
                        {district.attractions.slice(0, 4).map((attraction) => (
                          <li key={attraction}>{attraction}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Best Season
                      </h4>
                      <p className="text-gray-600">
                        {district.bestSeason}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Experiences
                      </h4>
                      <ul className="list-disc list-inside text-gray-600">
                        {district.experiences.slice(0, 4).map((experience) => (
                          <li key={experience}>{experience}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-6"
                  >
                    <Link
                      to={`/kerala-tour/${district.id}`}
                      className="bg-emerald-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-emerald-700 transition-colors"
                    >
                      Explore More
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-emerald-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Explore Kerala?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let us help you plan your perfect Kerala adventure
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/enquiry"
                className="bg-white text-emerald-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Book Your Tour
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default KeralaTour; 