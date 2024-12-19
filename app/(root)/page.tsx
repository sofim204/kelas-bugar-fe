import Image from "next/image";

export default function Home() {
    return (
        <div className="min-h-screen flex justify-center items-start p-8">
            <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div className="max-w-sm rounded">
                    <Image
                        className="w-full"
                        src="/post.png"
                        alt="Post"
                        width={800}
                        height={100}
                        priority
                        />
                    <div className="px-1 py-4">
                        <div className="font-bold text-xl mb-2 text-black">Mulai Hari dengan Energi Positif: 5 Kebiasaan Pagi yang Akan Mengubah Hidup Anda</div>
                        <p className="text-gray-700 text-base">
                            Banyak orang merasa kesulitan untuk memulai hari dengan semangat. Namun, dengan beberapa kebiasaan pagi yang sehat, Anda bisa meningkatkan energi dan fokus sepanjang hari. Cobalah mulai dengan hidrasi yang cukup, olahraga ringan, dan meditasi untuk menenangkan pikiran. Temukan cara sederhana untuk merencanakan pagi Anda agar tetap bugar dan penuh energi.
                        </p>
                    </div>
                </div>
                <div className="max-w-sm rounded">
                    <Image
                        className="w-full"
                        src="/post2.png"
                        alt="Post"
                        width={300}
                        height={100}
                        priority
                        />
                    <div className="px-1 py-4">
                        <div className="font-bold text-xl mb-2 text-black">Makan Sehat Tanpa Ribet: Resep Sederhana untuk Menu Sehari-hari</div>
                        <p className="text-gray-700 text-base">
                            Makanan sehat tidak harus mahal atau sulit dibuat. Dalam artikel ini, kami akan berbagi resep sederhana dan bergizi yang bisa Anda coba setiap hari. Dari smoothie energizing hingga salad segar, Anda akan menemukan cara mudah untuk menjaga pola makan seimbang dan mendukung kesehatan tubuh Anda.
                        </p>
                    </div>
                </div>
                <div className="max-w-sm rounded">
                    <Image
                        className="w-full"
                        src="/post2.png"
                        alt="Post"
                        width={300}
                        height={100}
                        priority
                        />
                    <div className="px-1 py-4">
                        <div className="font-bold text-xl mb-2 text-black">Kenapa Olahraga Itu Penting? Manfaat Kesehatan yang Tak Terhitung!</div>
                        <p className="text-gray-700 text-base">
                            Olahraga bukan hanya soal menurunkan berat badan, tetapi juga tentang menjaga kesehatan jangka panjang. Dalam postingan ini, kami akan membahas manfaat olahraga yang lebih dari sekadar fisik, seperti mengurangi stres, meningkatkan mood, dan memperbaiki kualitas tidur. Temukan alasan kuat mengapa Anda harus mulai berolahraga sekarang!
                        </p>
                    </div>
                </div>
                <div className="max-w-sm rounded">
                    <Image
                        className="w-full"
                        src="/post.png"
                        alt="Post"
                        width={300}
                        height={100}
                        priority
                        />
                    <div className="px-1 py-4">
                        <div className="font-bold text-xl mb-2 text-black">Tidur yang Berkualitas: Kunci Kesehatan yang Sering Diabaikan</div>
                        <p className="text-gray-700 text-base">
                            Tidur yang cukup dan berkualitas sangat penting untuk menjaga kesehatan fisik dan mental Anda. Banyak orang merasa tidur malam yang buruk adalah hal yang normal, namun itu dapat berpengaruh pada energi, fokus, dan bahkan keseimbangan hormon tubuh. Pelajari cara untuk menciptakan rutinitas tidur yang sehat dan perbaiki kualitas tidur Anda.
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
}
