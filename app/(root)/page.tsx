import Image from "next/image";
import Link from "next/link";

import postData from "../api/postData";

export default function Home() {
    return (
        <div className="min-h-screen flex justify-center items-start p-8">
            <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {
                postData.map((post, index) => (
                    <Link key={index} href={`/post/${post.slug}`} className="text-gray-500 cursor-pointer hover:text-gray-900 dark:hover:text-white" target="blank">
                        <div className="max-w-sm rounded">
                            <Image
                                className="w-full"
                                src={post.image}
                                alt="Post"
                                width={800}
                                height={100}
                                priority
                                />
                            <div className="px-1 py-4">
                                <div className="font-bold text-xl mb-2 text-black">{post.title}</div>
                                <p className="text-gray-700 text-base">{post.description}</p>
                            </div>
                        </div>
                    </Link>
                ))
            }
            </main>
        </div>
    );
}
