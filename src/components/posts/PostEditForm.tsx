"use client";

import React from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Post } from "@/types/posts";
import {
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormField,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { toast } from "sonner"

interface PostEditFormProps {
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

function PostEditForm({ post }: PostEditFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: post?.title,
      body: post?.body,
      author: post?.author,
      date: post?.date,
    },
  });

  const submitHandler = (data: z.infer<typeof formSchema>) => {
    toast(`Updated ${data.title}.`)
  };

  return (
    <>
      <h3 className="text-2xl mb-4">
        Edit: <span className="text-gray-500 ml-3">{post?.title}</span>
      </h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(submitHandler)} className="space-y-9">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase text-zinc-500 dark:text-white">
                  Title: <span>*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0"
                    placeholder="Post Title"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="body"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase text-zinc-500 dark:text-white">
                  Body: <span>*</span>
                </FormLabel>
                <FormControl>
                  <Textarea
                    className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0"
                    placeholder="Post Text"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="author"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase text-zinc-500 dark:text-white">
                  Author: <span>*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0"
                    placeholder="Post Author"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase text-zinc-500 dark:text-white">
                  Date: <span>*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0"
                    placeholder="Post Date"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full dark:bg-slate-800 dark:text-white hover:cursor-pointer">
            Submit
          </Button>
        </form>
      </Form>
    </>
  );
}

export default PostEditForm;
