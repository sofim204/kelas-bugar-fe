import { Metadata } from "next";
import PostDetailClient from "./PostDetailClient";

export const metadata: Metadata = {
  title: "Kelas Bugar | Detail Post",
  description: "Healty is a lifestyle",
};

export default async function PostDetail({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  // const id = searchParams.id ? Number(searchParams.id) : NaN; // will got warning
  const { id } = await searchParams; // need to add await
  const setId = id ? Number(id) : NaN;

  return (
    <div className="min-h-screen mb-32 mx-6 lg:mx-20">
      <PostDetailClient id={setId} />
    </div>
  );
}