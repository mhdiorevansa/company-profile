import { FaHandshake, FaRocket } from "react-icons/fa";

const AboutUs = () => {
   return (
      <div className="grid grid-cols-2 gap-x-6 mx-4 h-full">
         <div className="space-y-8">
            {/* tentang kami */}
            <div className="space-y-4">
               <h2 className="text-4xl font-semibold leading-snug">
                  Tentang Kami
               </h2>
               <p>
                  Kami adalah tim yang berdedikasi dalam menghadirkan solusi digital yang inovatif dan terpercaya. Dengan pengalaman lebih dari 10 tahun, kami telah membantu berbagai perusahaan membangun sistem dan website yang berdampak langsung terhadap pertumbuhan bisnis mereka.
               </p>
            </div>
            {/* visi dan misi */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-gray-200">
               <div className="bg-blue-50 p-5 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-2 flex gap-x-2 items-center">Misi Kami <FaRocket /></h3>
                  <p className="text-gray-700">
                     Memberikan layanan terbaik dengan mengedepankan kualitas, inovasi, dan kepuasan pelanggan.
                  </p>
               </div>
               <div className="bg-green-50 p-5 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-2 flex gap-x-2 items-center">Nilai Utama <FaHandshake /></h3>
                  <p className="text-gray-700">
                     Kami menjunjung tinggi integritas, kolaborasi, dan keberlanjutan dalam setiap proyek yang kami kerjakan.
                  </p>
               </div>
            </div>
         </div>
         <div className="h-full rounded-lg overflow-hidden">
            <img src="/images/about-us.jpg" alt="about us" />
         </div>
      </div>
   )
}

export default AboutUs;