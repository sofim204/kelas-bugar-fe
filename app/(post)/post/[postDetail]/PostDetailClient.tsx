'use client';
import postData from "@/app/api/postData";
import Image from "next/image";

export default function PostDetail({ id }: { id: number }) {
  const detailPost = postData.find((post) => post.id === Number(id));

  if (!detailPost) {
    return <div className="text-black">Detail Post not found</div>;
  }

  return (
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
  );
}