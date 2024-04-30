'use client';

import React, { useEffect, useState } from 'react';
import BlogCard from './BlogCard';
import axios from 'axios';
import constant from '@/app/constant';

interface BlogTypes {
  id: string;
  title: string;
  slug: string;
  content: string;
  featuredImage: string;
  createdAt: string;
  updatedAt: string;
}


const Blogs = () => {
  const Blogs = [
    {
      name: 'The Art of Mindful Eating:Savor every bite',
      description: 'Discover the transformative power of mindful eating and learn to appreciate the flavors, textures, and nourishment of your meals.',
      link: 'blog/144',
    },
    {
      name: 'Unleash Your Inner Warrior: Kickboxing for Fitness and Empowerment',
      description: 'Explore the exhilarating world of kickboxing, a high-intensity workout that builds strength, endurance, and self-confidence.',
      link: '/blog/144',

      image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=3269&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      link: '/blog/144',
      name: 'Green Smoothie Bliss: Energizing Recipes for Vibrant Health',
      description: 'Revitalize your mornings with nutrient-dense green smoothie recipes that will energize your body and delight your taste buds.',
      image: 'https://plus.unsplash.com/premium_photo-1664109999449-82f58d6f7cf1?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      link: '/blog/144',
      name: 'Yoga for Beginners: Finding Peace and Flexibility on the Mat',
      description: 'Embark on a journey of self-discovery with yoga, a practice that cultivates flexibility, strength, and inner calm.',
      image: 'https://images.unsplash.com/photo-1581009137042-c552e485697a?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      link: '/blog/144',
      name: 'Strength Training for Women: Embracing Your Power',
      description: 'Shatter stereotypes and discover the empowering benefits of strength training for women, from increased confidence to improved overall fitness.',
      image: 'https://images.unsplash.com/photo-1507398941214-572c25f4b1dc?q=80&w=3173&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      link: '/blog/144',
      name: 'Running for Mental Clarity: Hitting the Pavement for a Clearer Mind',
      description: 'Explore the transformative impact of running on mental health, and learn how this simple act can cultivate clarity and resilience.',
      image: 'https://images.unsplash.com/photo-1517343985841-f8b2d66e010b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8'
    },
    {
      link: '/blog/144',
      name: 'Meal Prep Mastery: Your Guide to Healthy and Convenient Eating',
      description: 'Unlock the secrets of meal prepping, a time-saving strategy that ensures you have access to nutritious meals throughout your busy week.',
      image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      link: '/blog/144',
      name: 'Outdoor Adventures: Embracing Nature for a Healthier Lifestyle',
      description: 'Discover the rejuvenating power of outdoor activities, from hiking to kayaking, and experience the physical and mental benefits of reconnecting with nature.',
      image: 'https://images.unsplash.com/photo-1519505907962-0a6cb0167c73?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTJ8MjU2ODgxOXx8ZW58MHx8fHx8'
    },
  ];
  const [blogs, setBlogs] = useState<BlogTypes[]>([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    await axios.get(`${constant.BASE_API}/blogs`)
      .then((res => {
        console.log(res.data.data);
        setBlogs(res.data.data.blogs);
      }));
  };
  return (
    <div className="mx-auto w-full max-w-7xl px-2 py-10 flex flex-col gap-2 ">
      <h1 className="text-4xl font-semibold mb-2">Blogs</h1>
      <div className="grid items-stretch space-y-4 md:grid-cols-3 md:gap-6 md:space-y-0 lg:grid-cols-4">
        {blogs.map((item, i) => (
          <span className="flex" key={item.id}>
            <BlogCard name={item.title} description={item.content} image={item?.featuredImage} link={item.slug}/>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Blogs;