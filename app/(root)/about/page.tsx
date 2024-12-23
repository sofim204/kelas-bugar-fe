import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Kelas Bugar | About",
    description: "Healthy is a lifestyle",
};

export default function About() {
    return (
        <div className="min-h-screen p-8 mt-16">
            <main className="flex flex-col justify-evenly items-start sm:flex-row">
                <div className="w-full ml-12">
                    <h1 className="text-black text-5xl font-bold mb-3">About Us</h1>
                    <p className="text-base font-normal text-gray-500 mb-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, eum.</p>
                    <div className="w-full flex flex-col items-start">
                        <p className="text-base font-normal text-black mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa eaque quam odit sed asperiores. Aspernatur dolores unde totam nisi, ad exercitationem quae consequuntur veritatis nemo.</p>
                        <p className="text-base font-normal text-black mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam eligendi natus iusto provident nesciunt tenetur aperiam corporis ratione voluptatum? Porro quae natus dolore nam rem quam sapiente mollitia sit modi voluptas exercitationem, recusandae fugiat dolores illo, doloribus fugit quo facilis. Ipsam omnis enim iusto veritatis voluptatum fugit saepe non in minima adipisci consequuntur quidem cum corporis velit, totam, autem sunt quasi quia molestias error cupiditate qui recusandae! Deserunt magnam modi, nesciunt odio cum aut a non at veniam cupiditate, nulla quaerat amet rem maxime quidem nihil deleniti quis earum ad error iure aliquid! Illum amet, dolorem quam quisquam magnam corrupti!</p>
                        <p className="text-base font-normal text-black mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita ex cupiditate temporibus consequatur quae suscipit placeat facere alias dolorem consequuntur.</p>
                    </div>
                </div>
                <div className="w-full hidden md:block">
                    <div className="flex justify-center items-center">
                        <Image
                            className="w-auto max-w-full h-auto sm:w-1/2 sm:h-full"
                            src="/about-hero.png"
                            alt="Contact Us"
                            width={244}
                            height={566}
                            layout="intrinsic"
                            loading="lazy"
                            />
                    </div>
                </div>
            </main>
        </div>
    );
}