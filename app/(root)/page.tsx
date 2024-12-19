import Image from "next/image";
import Link from "next/link";
import postData from "@/app/api/postData";

export default function Home() {

    const truncateAtWord = (description: string, maxLength: number) => {
        if (description.length <= maxLength) return description;

        let truncated = description.substring(0, maxLength);
        let lastSpaceIndex = truncated.lastIndexOf(' ');

        if (lastSpaceIndex !== -1) {
            truncated = truncated.substring(0, lastSpaceIndex);
        }

        return truncated + '...';
    };

    return (
        <div className="min-h-screen flex justify-center items-start p-8 mt-10">
            <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {
                    postData.map((post, index) => (
                        <Link key={index} 
                            href={{
                                pathname: `/post/${post.slug}`,
                                query: { id: post.id },
                            }}
                            className="text-gray-500 cursor-pointer hover:text-gray-900 dark:hover:text-white" 
                            >
                            <div className="max-w-sm rounded">
                                <Image
                                    className="w-auto h-auto"
                                    src={post.image}
                                    alt="Post"
                                    width={800}
                                    height={100}
                                    loading="lazy"
                                    />
                                <div className="px-1 py-4">
                                    <div className="font-bold text-xl mb-2 text-black">{post.title}</div>
                                    <p className="text-gray-700 text-base">{ truncateAtWord(post.description, 90) }</p>
                                    <span className="underline text-black">show more</span>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </main>
        </div>
    );
}
