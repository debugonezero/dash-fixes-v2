import Link from "next/link";
import AnimationWrapper from "../AnimationWrapper";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Dash Fixes - Tech Repair Tips & Guides",
  description: "Expert tips and guides for maintaining your devices. Learn about phone repairs, laptop care, and gaming console maintenance from Dash Fixes.",
};

const BlogPage = () => {
  const posts = [
    {
      title: "How Much Does Shipping Cost for Device Repairs?",
      excerpt: "Learn about our affordable $9.99 flat-rate shipping, pre-paid labels, and insured nationwide coverage.",
      date: "2024-10-30",
      author: "Dash Fixes Team",
      slug: "how-much-does-shipping-cost",
      readTime: "4 min read",
    },
    {
      title: "How to Extend Your iPhone Battery Life",
      excerpt: "Simple tips to make your iPhone battery last longer and avoid premature replacement.",
      date: "2024-10-15",
      author: "Dash Fixes Team",
      slug: "iphone-battery-life",
      readTime: "3 min read",
    },
    {
      title: "Common MacBook Issues and How to Fix Them",
      excerpt: "Identify and resolve the most frequent MacBook problems before they become major issues.",
      date: "2024-10-10",
      author: "Dash Fixes Team",
      slug: "macbook-common-issues",
      readTime: "5 min read",
    },
    {
      title: "Gaming Console Maintenance: Keep Your Setup Running Smooth",
      excerpt: "Essential maintenance tips for PS5, Xbox, and Nintendo Switch owners.",
      date: "2024-10-05",
      author: "Dash Fixes Team",
      slug: "gaming-console-maintenance",
      readTime: "4 min read",
    },
    {
      title: "Water Damage Recovery: What to Do When Your Phone Gets Wet",
      excerpt: "Immediate steps to take if your device encounters water damage.",
      date: "2024-09-30",
      author: "Dash Fixes Team",
      slug: "water-damage-recovery",
      readTime: "3 min read",
    },
  ];

  return (
    <section className="section-spacing bg-solarized-light2 dark:bg-solarized-dark2">
      <div className="max-w-4xl mx-auto">
        <AnimationWrapper>
          <div className="mb-8">
            <Link href="/" className="inline-flex items-center text-solarized-blue hover:text-solarized-blue-dark transition">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </div>
          <div className="text-center content-spacing">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-solarized-dark2 dark:text-solarized-light">
              Repair Tips & Guides
            </h1>
            <p className="text-lg max-w-2xl mx-auto text-solarized-dark3 dark:text-solarized-light3">
              Expert advice to keep your devices running smoothly and avoid costly repairs.
            </p>
          </div>
        </AnimationWrapper>

        <div className="grid gap-8">
          {posts.map((post, index) => (
            <AnimationWrapper key={index} delay={index * 0.1}>
              <article className="bg-solarized-light dark:bg-solarized-dark rounded-xl p-8 shadow-md border border-solarized-light3 dark:border-solarized-dark3">
                <div className="flex items-center text-sm text-solarized-dark3 dark:text-solarized-light3 mb-3">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span className="mr-4">{new Date(post.date).toLocaleDateString()}</span>
                  <User className="w-4 h-4 mr-1" />
                  <span className="mr-4">{post.author}</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-2xl font-heading font-bold mb-3 text-solarized-dark2 dark:text-solarized-light">
                  {post.title}
                </h2>
                <p className="text-solarized-dark3 dark:text-solarized-light3 mb-4">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-solarized-blue hover:text-solarized-blue-dark font-semibold transition"
                >
                  Read More →
                </Link>
              </article>
            </AnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPage;