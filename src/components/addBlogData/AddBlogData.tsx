"use client";

import { useState, useEffect } from "react";
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
import axios from "axios";
import { toast } from "react-hot-toast";
import Editor from "@/components/Editor/Editor";

const AddBlogData = () => {
  const [formData, setFormData] = useState({
    category_id: "",
    title: "",
    blog_url: "",
    youtube_url: "",
    meta_title: "",
    meta_description: "",
    metaKeywords: "",
    blogImage: null as File | null,
    description: "",
  });

  const [categories, setCategories] = useState<{ id: number; name: string }[]>([]);

  // Fetch categories on mount
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axios.get("/api/blog/categories");
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
        toast.error("Failed to load categories");
      }
    };
    fetchCategories();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

    try {
      const response = await axios.post("/api/blogs/add", formDataToSend, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success("Blog added successfully!");
      setFormData({
        category_id: "",
        title: "",
        blog_url: "",
        youtube_url: "",
        meta_title: "",
        meta_description: "",
        metaKeywords: "",
        blogImage: null,
        description: "",
      });
    } catch (error: any) {
      console.error("Error adding blog:", error);
      toast.error(error.response?.data?.message || "Failed to add blog");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-xl space-y-4">
      <h2 className="text-xl font-semibold">Add New Blog</h2>

      {/* Blog Category */}
      <Label>Blog Category</Label>
      <Select onValueChange={handleSelectChange} value={formData.category_id}>
        <SelectTrigger>
          <SelectValue placeholder="Select Category" />
        </SelectTrigger>
        <SelectContent>
          {categories.map((category) => (
            <SelectItem key={category.id} value={category.id.toString()}>
              {category.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Blog Title */}
      <Label>Blog Title</Label>
      <Input name="title" value={formData.title} onChange={handleChange} />

      {/* Blog URL */}
      <Label>Blog URL</Label>
      <Input name="blog_url" value={formData.blog_url} onChange={handleChange} />

      {/* YouTube URL */}
      <Label>YouTube URL</Label>
      <Input name="youtube_url" value={formData.youtube_url} onChange={handleChange} />

      {/* Meta Title */}
      <Label>Meta Title</Label>
      <Input name="meta_title" value={formData.meta_title} onChange={handleChange} />

      {/* Meta Description */}
      <Label>Meta Description</Label>
      <Textarea name="meta_description" value={formData.meta_description} onChange={handleChange} />

      {/* Meta Keywords */}
      <Label>Meta Keywords</Label>
      <Input name="metaKeywords" value={formData.metaKeywords} onChange={handleChange} />

      {/* Blog Image */}
      <Label>Blog Image</Label>
      <Input type="file" accept="image/*" onChange={handleImageChange} />

      {/* Blog Content (Jodit Editor) */}
      <Label>Blog Content</Label>
      <Editor content={formData.description} setContent={(value) => setFormData({ ...formData, description: value })} />

      {/* Submit Button */}
      <Button type="submit" className="w-full mt-4">
        Save Blog
      </Button>
    </form>
  );
};

export default AddBlogData;
