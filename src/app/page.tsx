export default function Home() {
  return (
    <main className="min-h-screen px-4 py-8 sm:py-12">
      {/* Hero */}
      <div className="max-w-2xl mx-auto text-center">
        <div className="inline-block bg-yellow-400 rounded-full px-6 py-2 mb-4 shadow-lg">
          <span className="text-sm font-bold text-gray-800 tracking-wide">KID-OWNED BUSINESS</span>
        </div>
        <h1 className="text-5xl sm:text-7xl font-black text-white drop-shadow-[3px_3px_0px_rgba(0,0,0,0.3)] mb-2 tracking-tight">
          CRAZY CLEANING
        </h1>
        <p className="text-xl sm:text-2xl font-bold text-yellow-300 drop-shadow-[2px_2px_0px_rgba(0,0,0,0.3)] mb-6">
          WE MAKE YOUR CAR CRAZY CLEAN!
        </p>
        <div className="text-4xl mb-8">🫧🚗✨🧽💦</div>
      </div>

      {/* Pricing */}
      <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl p-6 sm:p-8 mb-8">
        <h2 className="text-3xl font-black text-center text-gray-800 mb-6">
          PRICES
        </h2>
        <div className="space-y-3">
          <div className="flex items-center justify-between bg-blue-100 rounded-2xl p-4 border-4 border-blue-300">
            <div className="flex items-center gap-3">
              <span className="text-4xl">🚗</span>
              <span className="text-xl font-bold text-gray-800">Small Car</span>
            </div>
            <span className="text-3xl font-black text-blue-600">$5</span>
          </div>
          <div className="flex items-center justify-between bg-green-100 rounded-2xl p-4 border-4 border-green-300">
            <div className="flex items-center gap-3">
              <span className="text-4xl">🚙</span>
              <span className="text-xl font-bold text-gray-800">SUV</span>
            </div>
            <span className="text-3xl font-black text-green-600">$10</span>
          </div>
          <div className="flex items-center justify-between bg-orange-100 rounded-2xl p-4 border-4 border-orange-300">
            <div className="flex items-center gap-3">
              <span className="text-4xl">🛻</span>
              <span className="text-xl font-bold text-gray-800">Truck</span>
            </div>
            <span className="text-3xl font-black text-orange-600">$40</span>
          </div>
          <div className="flex items-center justify-between bg-pink-100 rounded-2xl p-4 border-4 border-pink-300">
            <div className="flex items-center gap-3">
              <span className="text-4xl">✨</span>
              <span className="text-xl font-bold text-gray-800">Extra Cleaning</span>
            </div>
            <span className="text-3xl font-black text-pink-600">$50</span>
          </div>
        </div>
        <p className="text-center text-sm text-gray-500 mt-4">
          Extra cleaning includes interior vacuum, dashboard wipe, window polish, and tire shine
        </p>
      </div>

      {/* Food & Drinks */}
      <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl p-6 sm:p-8 mb-8">
        <h2 className="text-3xl font-black text-center text-gray-800 mb-4">
          FOOD & DRINKS
        </h2>
        <p className="text-center text-lg text-gray-600 mb-4">
          While you wait for your car, grab a snack!
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="bg-yellow-100 rounded-2xl p-4 text-center border-4 border-yellow-300">
            <div className="text-4xl mb-1">🍿</div>
            <div className="font-bold text-gray-800 text-sm">Popcorn</div>
          </div>
          <div className="bg-red-100 rounded-2xl p-4 text-center border-4 border-red-300">
            <div className="text-4xl mb-1">🧃</div>
            <div className="font-bold text-gray-800 text-sm">Juice Boxes</div>
          </div>
          <div className="bg-orange-100 rounded-2xl p-4 text-center border-4 border-orange-300">
            <div className="text-4xl mb-1">🍪</div>
            <div className="font-bold text-gray-800 text-sm">Cookies</div>
          </div>
          <div className="bg-blue-100 rounded-2xl p-4 text-center border-4 border-blue-300">
            <div className="text-4xl mb-1">🥤</div>
            <div className="font-bold text-gray-800 text-sm">Soda</div>
          </div>
        </div>
        <p className="text-center text-sm text-gray-500 mt-4">
          Prices vary — ask Hendrix what's available today!
        </p>
      </div>

      {/* About */}
      <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl p-6 sm:p-8 mb-8">
        <h2 className="text-3xl font-black text-center text-gray-800 mb-4">
          ABOUT ME
        </h2>
        <div className="text-center">
          <div className="text-6xl mb-3">👦🧽</div>
          <p className="text-lg text-gray-700">
            Hi! I'm <span className="font-black text-blue-600">Hendrix</span> and I'm 8 years old.
            I started CRAZY CLEANING because I love cars and I love making things look brand new.
            Every car gets my best work — I promise!
          </p>
        </div>
      </div>

      {/* Contact */}
      <div className="max-w-2xl mx-auto bg-gradient-to-r from-blue-500 to-green-500 rounded-3xl shadow-2xl p-6 sm:p-8 mb-8 text-center">
        <h2 className="text-3xl font-black text-white mb-4">
          GET YOUR CAR WASHED!
        </h2>
        <p className="text-xl text-white font-bold mb-4">
          Text my dad to book a wash
        </p>
        <a
          href="sms:+17606072674?body=Hey! I want to get my car washed by CRAZY CLEANING"
          className="inline-block bg-yellow-400 text-gray-800 text-2xl font-black px-8 py-4 rounded-full shadow-lg hover:bg-yellow-300 transition-colors"
        >
          📱 Book a Wash
        </a>
        <p className="text-white text-sm mt-4 opacity-90">
          (760) 607-2674 — Ryan (Hendrix's dad)
        </p>
      </div>

      {/* Footer */}
      <div className="max-w-2xl mx-auto text-center text-white text-sm opacity-80">
        <p>CRAZY CLEANING — Kid-Owned Business</p>
        <p className="mt-1">Made with hard work and soap 🧽✨</p>
      </div>
    </main>
  );
}
