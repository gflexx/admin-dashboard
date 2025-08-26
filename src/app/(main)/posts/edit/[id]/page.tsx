import BackButton from "@/components/BackButton";
import React from "react";

import posts from "@/data/posts";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import PostEditForm from "@/components/posts/PostEditForm";

interface EditPageProps {
  params: Promise<{
    id: string;
  }>;
}

// dynamic metadata
export async function generateMetadata(
  { params }: { params: Promise<{ id: string }> }
): Promise<Metadata> {
  const { id } = await params;
  const post = posts.find((p) => p.id === id);

  return {
    title: post ? `Edit ${post.title}` : "Post not found",
  };
}


async function EditPostPage({ params }: EditPageProps) {
  const { id } = await params;
  const post = posts.find((post) => post.id === id);
  if (!post) {
    notFound();
  }

  return (
    <div>
      <BackButton text="Back to Posts" link="/posts" />
      <PostEditForm post={post}/>
    </div>
  );
}

export default EditPostPage;
