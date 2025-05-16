const Hero = () => {
   return (
      <div className="hero">
         <div className="hero-content text-center">
            <div className="max-w-3xl">
               <h1 className="text-5xl font-bold leading-16">Bangun Lebih Cepat, <span className="text-lime-700">Tumbuh</span> Lebih <span className="text-lime-700">Besar</span></h1>
               <p className="py-6">
                  Kami adalah mitra terpercaya Anda dalam menyediakan solusi terbaik untuk kebutuhan bisnis, teknologi, dan inovasi.
               </p>
               <div className="grid grid-cols-1 md:grid-cols-2 h-72 bg-gradient-to-r from-slate-900 to-lime-900 rounded-lg text-white px-8 gap-4">
                  {/* Kiri: Informasi */}
                  <div className="flex flex-col justify-center text-left">
                     <h2 className="text-2xl font-semibold mb-2">Tingkatkan Bisnis Anda Hari Ini</h2>
                     <p className="text-sm text-white/80">
                        Lihat bagaimana layanan kami membantu klien berkembang dengan solusi digital yang efektif dan efisien.
                     </p>
                  </div>
                  {/* Kanan: Video YouTube */}
                  <div className="flex items-center justify-center">
                     <iframe
                        className="w-full h-48 rounded-lg"
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                        title="YouTube video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                     ></iframe>
                  </div>
               </div>

            </div>
         </div>
      </div>
   )
}

export default Hero;