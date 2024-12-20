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
            <div className="min-h-screen mb-32 mx-6 lg:mx-20">
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
            </div>
            
        );
}