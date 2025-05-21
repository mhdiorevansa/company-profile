const Hero = () => {
   return (
      <div className="hero mb-16">
         <div className="hero-content text-center">
            <div className="max-w-full">
               <h1 className="text-5xl font-bold leading-16">Bangun Lebih Cepat, <span className="text-lime-700">Tumbuh</span> Lebih <span className="text-lime-700">Besar</span></h1>
               <p className="py-3 max-w-4xl mx-auto">
                  Kami adalah mitra terpercaya Anda dalam menyediakan solusi terbaik untuk kebutuhan bisnis, teknologi, dan inovasi. Kami membantu Anda meningkatkan kinerja bisnis dengan teknologi yang lebih baik, lebih cepat, dan lebih efektif.
               </p>
               <div className="grid grid-cols-1 md:grid-cols-2 h-72 bg-gradient-to-r from-slate-900 to-lime-900 rounded-lg text-white px-8 gap-4 mt-8">
                  {/* Kiri: Informasi */}
                  <div className="flex flex-col justify-center text-left space-y-2">
                     <h2 className="text-2xl font-semibold">Tingkatkan Bisnis Anda Hari Ini</h2>
                     <p className="text text-white/80">
                        Lihat bagaimana layanan kami membantu klien berkembang dengan solusi digital yang efektif dan efisien.
                     </p>
                     <ul className="list-disc list-inside text-white/80">
                        <li>Kami mempunyai 10 tahun pengalaman dalam memberikan jasa</li>
                        <li>Kami memiliki 500+ klien yang puas dengan jasa kami</li>
                        <li>Kami memiliki tim yang solid untuk membantu klien</li>
                     </ul>
                  </div>
                  {/* Kanan: Video YouTube */}
                  <div className="flex items-center justify-center">
                     <iframe
                        className="w-full h-56 rounded-lg"
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