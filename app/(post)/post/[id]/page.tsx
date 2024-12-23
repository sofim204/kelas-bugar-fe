import type { Metadata } from "next";
import Image from "next/image";
import postData from "@/app/api/postData";

export const metadata: Metadata = {
    title: "Kelas Bugar | Contact",
    description: "Healthy is a lifestyle",
};

export default async function Page({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const getId = (await params).id
    
    // Find the post data using the ID
    const detailPost = postData.find((post) => post.id === getId);
    
        if (!detailPost) {
            return <div className="text-black">Detail Post not found</div>;
        }
    
        return (
            <div className="min-h-screen mt-24 mb-32 mx-6 lg:mx-20">
                <div className="mt-10">
                    <h2 className="text-black text-3xl font-bold">{detailPost.title}</h2>
                    <p className="text-gray-600 text-xl font-normal">{detailPost.date}</p>
                    <Image
                        className="w-3/4 h-auto mt-5"
                        src={detailPost.image}
                        alt="Post"
                        width={800}
                        height={100}
                        loading="lazy"
                    />
                    <p className="text-black text-2xl mt-10">{detailPost.description}</p>
                </div>
                <div className="mt-20">
                    <h1 className="text-2xl text-black font-bold mb-5 sm:text-5xl">Related Article(category)</h1>
                    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        <div className="max-w-sm rounded">
                            <Image
                                className="w-auto h-auto"
                                src="/category1.png"
                                alt="Category"
                                width={800}
                                height={100}
                                loading="lazy"
                                />
                            <div className="px-1 py-4">
                                <div className="font-bold text-xl mb-2 text-black">Lorem ipsum dolor sit jamet</div>
                                <p className="text-gray-700 text-base">Johhny Deep</p>
                            </div>
                        </div>
                        <div className="max-w-sm rounded">
                            <Image
                                className="w-auto h-auto"
                                src="/category2.png"
                                alt="Category"
                                width={800}
                                height={100}
                                loading="lazy"
                                />
                            <div className="px-1 py-4">
                                <div className="font-bold text-xl mb-2 text-black">Lorem ipsum dolor sit jamet</div>
                                <p className="text-gray-700 text-base">Yi Long Ma</p>
                            </div>
                        </div>
                        <div className="max-w-sm rounded">
                            <Image
                                className="w-auto h-auto"
                                src="/category1.png"
                                alt="Category"
                                width={800}
                                height={100}
                                loading="lazy"
                                />
                            <div className="px-1 py-4">
                                <div className="font-bold text-xl mb-2 text-black">Lorem ipsum dolor sit jamet</div>
                                <p className="text-gray-700 text-base">Robert Downey Jr.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
}