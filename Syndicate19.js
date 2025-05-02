import React from "react";
import { motion } from "framer-motion";

export default function FriendsTripWebsite() {
  return (
    <div className="bg-gradient-to-br from-blue-100 to-purple-200 min-h-screen text-gray-800">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold mb-4"
        >
          Adventures with Friends
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg max-w-xl"
        >
          A journey through the places we’ve explored and the memories we’ve made.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-2xl shadow-lg hover:bg-blue-600 transition"
        >
          Explore Places
        </motion.button>
      </section>

      {/* Friends Section */}
      <section className="bg-white py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Meet the Crew</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { name: "Arefin", quote: "Mr. Photographer", image: "👨‍🎨" },
            { name: "Toha", quote: "Always late", image: "🕒" },
            { name: "Chatir Lom", quote: "Comedian of the group", image: "😄" },
          ].map((friend, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-purple-100 rounded-2xl p-6 shadow-md text-center"
            >
              <div className="text-5xl mb-4">{friend.image}</div>
              <h3 className="text-xl font-semibold mb-1">{friend.name}</h3>
              <p className="text-sm text-gray-600">"{friend.quote}"</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Places Section */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Places We Visited</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { name: "Cox’s Bazar", image: "🏖️", description: "Beach vibes and sunsets." },
            { name: "Bandarban", image: "⛰️", description: "Hill tracks and hiking fun." },
            { name: "Sylhet", image: "🌿", description: "Tea gardens and waterfalls." },
          ].map((place, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl p-6 shadow-md text-center"
            >
              <div className="text-5xl mb-4">{place.image}</div>
              <h3 className="text-xl font-semibold mb-1">{place.name}</h3>
              <p className="text-sm text-gray-600">{place.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-sm text-gray-500">
        © 2025 Adventures with Friends. All rights reserved.
      </footer>
    </div>
  );
}
