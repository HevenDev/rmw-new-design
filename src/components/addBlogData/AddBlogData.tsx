'use client';

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Upload } from "lucide-react";

const blogCategories = [
  "Technology", "Health", "Business", "Travel", "Education", "Food", "Lifestyle", "Finance", "Entertainment", "Sports", "Science"
];

const AddBlogData = () => {
  const [formData, setFormData] = useState<{
    category: string;
    title: string;
    blogUrl: string;
    youtubeUrl: string;
    ytWidth: string;
    ytHeight: string;
    metaTitle: string;
    metaDescription: string;
    metaKeywords: string;
    blogImage: File | null; // <-- Allow both File and null
  }>({
    category: "",
    title: "",
    blogUrl: "",
    youtubeUrl: "",
    ytWidth: "",
    ytHeight: "",
    metaTitle: "",
    metaDescription: "",
    metaKeywords: "",
    blogImage: null, // Initial value remains null
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (value: string) => {
    setFormData({ ...formData, category: value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, blogImage: e.target.files[0] });
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-xl space-y-4">
      <h2 className="text-xl font-semibold">Add New Blog</h2>
      
      {/* Blog Category */}
      <Label>Blog Category</Label>
      <Select onValueChange={handleSelectChange}>
        <SelectTrigger>
          <SelectValue placeholder="Select Category" />
        </SelectTrigger>
        <SelectContent>
          {blogCategories.map((category) => (
            <SelectItem key={category} value={category}>{category}</SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Blog Title */}
      <Label>Blog Title</Label>
      <Input name="title" value={formData.title} onChange={handleChange} placeholder="Enter blog title" />

      {/* Blog URL */}
      <Label>Blog URL</Label>
      <Input name="blogUrl" value={formData.blogUrl} onChange={handleChange} placeholder="Enter blog URL" />

      {/* YouTube URL */}
      <Label>YouTube URL</Label>
      <Input name="youtubeUrl" value={formData.youtubeUrl} onChange={handleChange} placeholder="Enter YouTube URL" />

      {/* YouTube Width & Height */}
      <div className="flex gap-4">
        <div>
          <Label>YouTube Width</Label>
          <Input name="ytWidth" value={formData.ytWidth} onChange={handleChange} placeholder="Width" />
        </div>
        <div>
          <Label>YouTube Height</Label>
          <Input name="ytHeight" value={formData.ytHeight} onChange={handleChange} placeholder="Height" />
        </div>
      </div>

      {/* Meta Title */}
      <Label>Meta Title</Label>
      <Input name="metaTitle" value={formData.metaTitle} onChange={handleChange} placeholder="Enter meta title" />

      {/* Meta Description */}
      <Label>Meta Description</Label>
      <Textarea name="metaDescription" value={formData.metaDescription} onChange={handleChange} placeholder="Enter meta description" />

      {/* Meta Keywords */}
      <Label>Meta Keywords</Label>
      <Input name="metaKeywords" value={formData.metaKeywords} onChange={handleChange} placeholder="Enter meta keywords" />

      {/* Blog Image Upload */}
      <div className="space-y-2">
        <Label>Blog Image</Label>
        <Input type="file" accept="image/*" onChange={handleImageChange} />
      </div>

      {/* Submit Button */}
      <Button className="w-full mt-4">Save Blog</Button>
    </div>
  );
};

export default AddBlogData;
