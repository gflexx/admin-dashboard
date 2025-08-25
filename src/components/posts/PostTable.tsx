import React from "react";
import posts from "@/data/posts";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableCaption,
} from "@/components/ui/table";
import { Button } from "../ui/button";
import { Post } from "@/types/posts";
import Link from "next/link";

interface PostTableProps {
  limit?: number;
  title?: string;
}

function PostTable({ limit, title }: PostTableProps) {
  // sort posts in dec order based on date
  const sortedPosts: Post[] = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // filter posts to limit
  const filteredPosts = limit ? sortedPosts.slice(0, limit) : sortedPosts;

  return (
    <div className="">
      <h3 className="text-2xl mb-4 font-semibold">{title}</h3>
      <Table>
        <TableCaption>A list of recent posts</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead className="hidden md:table-cell">Author</TableHead>
            <TableHead className="hidden md:table-cell">Date</TableHead>
            <TableHead>Edit</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredPosts.map((post, idx) => (
            <TableRow key={idx}>
              <TableCell>{post.title}</TableCell>
              <TableCell className="hidden md:table-cell">
                {post.author}
              </TableCell>
              <TableCell className="hidden md:table-cell">
                {post.date}
              </TableCell>
              <TableCell>
                <Link href={`posts/edit/${post.id}`}>
                    <Button className="bg-blue-500 hover:bg-blue-700">View</Button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default PostTable;
