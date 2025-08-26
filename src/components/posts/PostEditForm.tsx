"use client";

import React from 'react'
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Post } from '@/types/posts';

interface PostEditFormProps{
    post: Post;
}

// z form schema for validation
const formSchema = z.object({
  title: z.string().min(1, {
    message: "Title is Required",
  }),
  body: z.string().min(1, {
    message: "Body is Required",
  }),
  author: z.string().min(1, {
    message: "Author is Required",
  }),
  date: z.string().min(1, {
    message: "Date is Required",
  }),
});


function PostEditForm({post}: PostEditFormProps) {
    console.log(post);
    
  return (
    <div>PostEditForm</div>
  )
}

export default PostEditForm