import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Kelas Bugar | Contact",
    description: "Healthy is a lifestyle",
};

export default function Contact() {
    return (
        <div className="min-h-screen flex justify-center items-start p-8 mt-16">
            <main>
                <h1 className="text-3xl text-black font-bold text-center">Contact Us</h1>
                <p className="text-base text-gray-800 mt-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum voluptatibus voluptatum consequuntur deserunt, alias quas eius nostrum adipisci corrupti nihil. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit culpa tempore rem ipsam eos dignissimos perferendis, aperiam recusandae porro. Quam animi eum beatae, odit nulla, vero natus cum eaque amet minus quisquam minima, eos ullam quasi cupiditate pariatur officia maxime.
                </p>
            </main>
        </div>
    );
}