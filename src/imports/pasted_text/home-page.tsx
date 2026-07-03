import { Link } from 'react-router';
import { Search, Wrench, Shield, Clock, Star, MapPin } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useAuth } from '../context/AuthContext';
import { motion } from 'motion/react';

export default function Home() {
  const { currentUser } = useAuth();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-700 via-blue-800 to-green-700 text-white py-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE4YzAtOC44NC03LjE2LTE2LTE2LTE2UzQgOS4xNiA0IDE4czYuODQgMTYgMTYgMTYgMTYtNy4xNiAxNi0xNnptMCAwYzAtOC44NCA3LjE2LTE2IDE2LTE2czE2IDcuMTYgMTYgMTYtNy4xNiAxNi0xNiAxNi0xNi03LjE2LTE2LTE2em0wIDM2YzAgOC44NC03LjE2IDE2LTE2IDE2UzQgNjIuODQgNCA1NHM2Ljg0LTE2IDE2LTE2IDE2IDcuMTYgMTYgMTZ6bTAgMGMwIDguODQgNy4xNiAxNiAxNiAxNnMxNi03LjE2IDE2LTE2LTcuMTYtMTYtMTYtMTYtMTYgNy4xNi0xNiAxNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl font-bold mb-6"
            >
              Find Trusted Local Service Providers in Ibadan
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl mb-8 text-blue-100"
            >
              Connect with verified electricians, plumbers, carpenters, and more across Ibadan.
              Quality service, just a click away.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/search">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto hover:scale-105 transition-transform bg-white text-teal-700 hover:bg-gray-100">
                  <Search className="size-5 mr-2" />
                  Find Services
                </Button>
              </Link>
              {!currentUser && (
                <Link to="/register/artisan">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent text-white border-white hover:bg-white hover:text-teal-700 hover:scale-105 transition-transform">
                    <Wrench className="size-5 mr-2" />
                    Become a Provider
                  </Button>
                </Link>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center mb-12"
          >
            Why Choose LocalConnect?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="inline-flex items-center justify-center size-16 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full mb-4 shadow-lg"
              >
                <Shield className="size-8" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-3">Verified Providers</h3>
              <p className="text-gray-600">
                All service providers are verified and approved by our admin team for your safety and peace of mind.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="inline-flex items-center justify-center size-16 bg-gradient-to-br from-green-500 to-teal-500 text-white rounded-full mb-4 shadow-lg"
              >
                <MapPin className="size-8" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-3">Location-Based</h3>
              <p className="text-gray-600">
                Find service providers near you. Search by location to connect with local artisans in your area.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="inline-flex items-center justify-center size-16 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-full mb-4 shadow-lg"
              >
                <Clock className="size-8" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-3">Quick & Easy</h3>
              <p className="text-gray-600">
                Request services in minutes. Browse profiles, view portfolios, and connect with providers instantly.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center mb-12"
          >
            Popular Services
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Electrician', emoji: '⚡', gradient: 'from-yellow-400 to-orange-500' },
              { name: 'Plumber', emoji: '🔧', gradient: 'from-blue-400 to-cyan-500' },
              { name: 'Carpenter', emoji: '🪚', gradient: 'from-amber-400 to-orange-600' },
              { name: 'Painter', emoji: '🎨', gradient: 'from-pink-400 to-rose-500' },
              { name: 'Mechanic', emoji: '🔩', gradient: 'from-gray-500 to-slate-600' },
              { name: 'HVAC Technician', emoji: '❄️', gradient: 'from-cyan-400 to-blue-500' },
              { name: 'Landscaper', emoji: '🌿', gradient: 'from-green-400 to-emerald-500' },
              { name: 'Cleaner', emoji: '🧹', gradient: 'from-purple-400 to-pink-500' },
            ].map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Link
                  to={`/search?category=${service.name}`}
                  className="block bg-white rounded-2xl p-6 text-center hover:shadow-2xl transition-all border border-gray-100 hover:border-transparent relative overflow-hidden group"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl mb-3"
                  >
                    {service.emoji}
                  </motion.div>
                  <h3 className="font-semibold text-gray-900">{service.name}</h3>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-teal-700 via-blue-800 to-green-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-4"
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl mb-8 text-blue-100"
          >
            Join thousands of satisfied customers finding quality service providers
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {!currentUser ? (
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/register/resident">
                  <Button size="lg" variant="secondary" className="hover:scale-105 transition-transform bg-white text-teal-700 hover:bg-gray-100">
                    Sign Up as Customer
                  </Button>
                </Link>
                <Link to="/register/artisan">
                  <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-teal-700 hover:scale-105 transition-transform">
                    Register as Provider
                  </Button>
                </Link>
              </div>
            ) : (
              <Link to="/search">
                <Button size="lg" variant="secondary" className="hover:scale-105 transition-transform bg-white text-teal-700 hover:bg-gray-100">
                  <Search className="size-5 mr-2" />
                  Browse Services Now
                </Button>
              </Link>
            )}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-teal-700 to-teal-500 bg-clip-text text-transparent mb-2">500+</div>
              <div className="text-gray-600">Verified Providers</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent mb-2">2,000+</div>
              <div className="text-gray-600">Happy Customers</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-green-700 to-green-500 bg-clip-text text-transparent mb-2">5,000+</div>
              <div className="text-gray-600">Services Completed</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-yellow-600 to-orange-500 bg-clip-text text-transparent mb-2">4.8</div>
              <div className="text-gray-600 flex items-center justify-center gap-1">
                <motion.div
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                >
                  <Star className="size-5 fill-yellow-400 text-yellow-400" />
                </motion.div>
                Average Rating
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}