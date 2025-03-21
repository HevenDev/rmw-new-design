"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

const blogCategories = [
  { id: 26, name: "Case Study" },
  { id: 25, name: "Performance Marketing Agency" },
  { id: 24, name: "Print Advertising Agency" },
  { id: 23, name: "Creative Advertising Agency" },
  { id: 22, name: "Celebrity Endorsements Agency" },
  { id: 21, name: "Artist Management Agency" },
  { id: 20, name: "FM Radio Advertising" },
  { id: 19, name: "Web Design and Development" },
  { id: 18, name: "Graphic Designing Service" },
  { id: 11, name: "Digital Marketing Agency" },
  { id: 9, name: "Best Ad Agency" },
];

const AddBlogData = () => {
  const [formData, setFormData] = useState<{
    category_id: string;
    title: string;
    blog_url: string;
    youtube_url: string;
    ytWidth: string;
    ytHeight: string;
    meta_title: string;
    meta_description: string;
    metaKeywords: string;
    blogImage: File | null; // <-- Allow both File and null
    description: string;
  }>({
    category_id: "",
    title: "",
    blog_url: "",
    youtube_url: "",
    ytWidth: "",
    ytHeight: "",
    meta_title: "",
    meta_description: "",
    metaKeywords: "",
    blogImage: null, // Initial value remains null
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (value: string) => {
    setFormData({ ...formData, category_id: value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, blogImage: e.target.files[0] });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formDataToSend = new FormData();

    Object.entries(formData).forEach(([key, value]) => {
      if (value !== null) {
        formDataToSend.append(key, value as string | Blob);
      }
    });

    const response = await fetch("/api/blogs/add", {
      method: "POST",
      body: formDataToSend,
    });

    const data = await response.json();
    if (response.ok) {
      alert("Blog added successfully");
    } else {
      alert("Error: " + data.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-xl space-y-4"
    >
      <h2 className="text-xl font-semibold">Add New Blog</h2>

      <Label>Blog Category</Label>
      <Select onValueChange={handleSelectChange}>
        <SelectTrigger>
          <SelectValue placeholder="Select Category" />
        </SelectTrigger>
        <SelectContent>
          {blogCategories.map((category) => (
            <SelectItem key={category.id} value={category.id.toString()}>
              {category.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Label>Blog Title</Label>
      <Input name="title" value={formData.title} onChange={handleChange} />

      <Label>Blog URL</Label>
      <Input
        name="blog_url"
        value={formData.blog_url}
        onChange={handleChange}
      />

      <Label>YouTube URL</Label>
      <Input
        name="youtube_url"
        value={formData.youtube_url}
        onChange={handleChange}
      />

      <Label>Meta Title</Label>
      <Input
        name="meta_title"
        value={formData.meta_title}
        onChange={handleChange}
      />

      <Label>Meta Description</Label>
      <Textarea
        name="meta_description"
        value={formData.meta_description}
        onChange={handleChange}
      />

      <Label>Blog Image</Label>
      <Input type="file" accept="image/*" onChange={handleImageChange} />

      <Button type="submit" className="w-full mt-4">
        Save Blog
      </Button>
    </form>
  );
};

export default AddBlogData;
