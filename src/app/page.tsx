"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";  // <-- Import axios
import Link from "next/link";

type Post = {
  _id: string;
  title: string;
  description: string;
  image: string;
  short_description:string;
};

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get<Post[]>(process.env.NEXT_PUBLIC_API_URL + '/post');
        console.log("API response:", response.data); // Check response data
        setPosts(response.data);
      } catch (error) {
        console.error("Axios fetch error:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
      <main className="container mx-auto px-4 py-6">
        <h2 className="text-4xl font-bold mb-4">Welcome to Our Blog</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </main>
      <div className="flex justify-end px-4">
        <input type="text" className="px-4 py-2 border border-gray-300 rounded-md" placeholder="Search..." />
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md ml-4">Search</button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.isArray(posts) && posts.map((post, index) => (
         <Link href={"/postt/" + post._id}>
             <div key={index} className="border border-gray-200 p-4">
            <Image
              src={post.image}
              alt={post.title}
              width={400}
              height={200}
              className="w-full h-auto object-cover mb-4 rounded"
              unoptimized
            />
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-600">{post.short_description}</p>
          </div>
         </Link>
     
        ))}
      </div>
    </>
  );
}
