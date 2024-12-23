import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Kelas Bugar | Contact",
    description: "Healthy is a lifestyle",
};

export default function Contact() {
    return (
        <div className="min-h-screen p-8 mt-16">
            <main className="flex flex-col justify-evenly items-center sm:flex-row">
                <div className="w-full h-full mx-10">
                    <form className="w-full mx-auto p-2">
                        <h1 className="text-black text-5xl font-bold mb-3">Contact Us</h1>
                        <p className="text-base font-normal text-gray-500 mb-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, eum.</p>
                        <div className="flex justify-between w-full">
                            <div className="flex-1 mb-5 mr-4">
                                <label htmlFor="firstname" className="block mb-2 text-sm font-medium text-black">First Name</label>
                                <input type="text" id="firstname" className="bg-white border border-slate-200 text-gray-900 text-sm rounded-lg focus:ring-slate-200 focus:border-slate-200 block w-full p-2.5 dark:placeholder-gray-400 dark:focus:ring-slate-200 dark:focus:border-slate-200" placeholder="Sopo" autoComplete="off" required />
                            </div>
                            <div className="flex-1 mb-5">
                                <label htmlFor="lastname" className="block mb-2 text-sm font-medium text-black">Last Name</label>
                                <input type="text" id="lastname" className="bg-white border border-slate-200 text-gray-900 text-sm rounded-lg focus:ring-slate-200 focus:border-slate-200 block w-full p-2.5 dark:placeholder-gray-400 dark:focus:ring-slate-200 dark:focus:border-slate-200" placeholder="Jarwo" autoComplete="off" required />
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="mb-5">
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-black">Email</label>
                                <input type="text" id="email" className="bg-white border border-slate-200 text-gray-900 text-sm rounded-lg focus:ring-slate-200 focus:border-slate-200 block w-full p-2.5 dark:placeholder-gray-400 dark:focus:ring-slate-200 dark:focus:border-slate-200" placeholder="emailgue@gmail.com" autoComplete="off" required />
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="mb-5">
                                <label htmlFor="yourmessage" className="block mb-2 text-sm font-medium text-black">Your message</label>
                                <textarea name="message" id="yourmessage" rows={10} className="bg-white border border-slate-200 text-gray-900 text-sm rounded-lg focus:ring-slate-200 focus:border-slate-200 block w-full p-2.5 resize-none dark:placeholder-gray-400 dark:focus:ring-slate-200 dark:focus:border-slate-200" placeholder="Enter your question or message" autoComplete="off" required>
                                </textarea>
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="mb-5">
                                <button type="submit" className="text-white bg-gray-950 hover:bg-gray-950 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-3.5 text-center dark:bg-gray-950 dark:hover:bg-gray-950 dark:focus:bg-gray-950">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="w-full hidden md:block">
                    <div className="flex justify-center items-center">
                        <Image
                            // className="w-1/2 h-full"
                            className="w-auto max-w-full h-auto sm:w-1/2 sm:h-full"
                            src="/contact-us-hero.png"
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