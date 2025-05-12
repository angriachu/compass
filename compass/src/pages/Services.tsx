import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface Vehicle {
  id: string;
  name: string;
  type: string;
  seats: number;
  features: string[];
  price: string;
  image: string;
}

const Services = () => {
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);

  const vehicles: Vehicle[] = [
    {
      id: 'hatchback',
      name: 'Hatchback',
      type: '5 Seater',
      seats: 5,
      features: ['AC', 'Driver Included', 'Luggage Space', 'Fuel Included'],
      price: '₹XXXX/day',
      image: '/images/hatchback.jpg'
    },
    {
      id: 'suv',
      name: 'SUV/MUV',
      type: '7 Seater',
      seats: 7,
      features: ['AC', 'Driver Included', 'Luggage Space', 'Fuel Included', 'Comfort Seats'],
      price: '₹XXXX/day',
      image: '/images/suv.jpg'
    },
    {
      id: 'tempo',
      name: 'Tempo Traveller',
      type: '12 Seater',
      seats: 12,
      features: ['AC', 'Driver Included', 'Luggage Space', 'Fuel Included', 'Comfort Seats', 'Entertainment System'],
      price: '₹XXXX/day',
      image: '/images/tempo.jpg'
    },
    {
      id: 'minibus',
      name: 'Mini Bus',
      type: '25 Seater',
      seats: 25,
      features: ['AC', 'Driver Included', 'Luggage Space', 'Fuel Included', 'Comfort Seats', 'Entertainment System'],
      price: '₹XXXX/day',
      image: '/images/minibus.jpg'
    },
    {
      id: 'bus',
      name: '49 Seater Bus',
      type: '49 Seater',
      seats: 49,
      features: ['AC', 'Driver Included', 'Luggage Space', 'Fuel Included', 'Comfort Seats', 'Entertainment System', 'Restroom'],
      price: '₹XXXX/day',
      image: '/images/bus.jpg'
    }
  ];

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      {/* Hero Section */}
      <section className="bg-emerald-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Our Vehicle Fleet
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-2xl mx-auto"
          >
            Choose from our wide range of vehicles to make your journey comfortable and memorable
          </motion.p>
        </div>
      </section>

      {/* Vehicle List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehicles.map((vehicle, index) => (
              <motion.div
                key={vehicle.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    {vehicle.name}
                  </h3>
                  <p className="text-emerald-600 font-medium mb-4">
                    {vehicle.type}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {vehicle.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-600">
                        <span className="mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gray-900">
                      {vehicle.price}
                    </span>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        to="/enquiry"
                        className="bg-emerald-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-emerald-700 transition-colors"
                      >
                        Book Now
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact us for special requirements or group bookings
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="bg-emerald-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-emerald-700 transition-colors"
              >
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services; 