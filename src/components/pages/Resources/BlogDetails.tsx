import {
  useEffect,
  useState,
} from "react";

import { useParams } from "react-router-dom";

import { getSingleBlog } from "../../../Api/Api";

import type { BlogItem } from "../../types/AllType";

const BlogDetails = () => {
  const { slug } = useParams();

  const [blog, setBlog] =
    useState<BlogItem | null>(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      if (!slug) return;

      setLoading(true);

      const data = await getSingleBlog(
        slug
      );

      setBlog(data);

      setLoading(false);

      window.scrollTo(0, 0);
    };

    fetchBlog();
  }, [slug]);

  if (loading) {
    return (
      <section className="py-[120px] bg-[#F8F8F8]">
        <div className="max-w-[1440px] mx-auto px-4">
          <div className="animate-pulse">
            <div className="w-full h-[650px] bg-[#E5E5E5] rounded-[24px]" />

            <div className="mt-10 h-[20px] w-[200px] bg-[#E5E5E5] rounded"></div>

            <div className="mt-6 h-[70px] w-full bg-[#E5E5E5] rounded"></div>

            <div className="space-y-4 mt-10">
              <div className="h-[20px] bg-[#E5E5E5] rounded"></div>
              <div className="h-[20px] bg-[#E5E5E5] rounded"></div>
              <div className="h-[20px] bg-[#E5E5E5] rounded"></div>
              <div className="h-[20px] bg-[#E5E5E5] rounded"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (!blog) {
    return (
      <div className="py-20 text-center text-[30px] font-semibold">
        Blog not found
      </div>
    );
  }

  const image =
    blog._embedded?.["wp:featuredmedia"]?.[0]
      ?.source_url;

  return (
    <section className="bg-[#F8F8F8] py-[100px]">
      <div className="max-w-[1440px] mx-auto px-4">
        {/* Featured Image */}
        {image && (
          <div className="overflow-hidden rounded-[24px] shadow-lg mb-16">
            <img
              src={image}
              alt={blog.title.rendered}
              className="w-full h-[400px] object-cover"
            />
          </div>
        )}

        {/* Content Area */}
        <div className="max-w-[1000px] mx-auto">
          {/* Meta */}
          <div className="flex items-center gap-3 text-[#777] text-[15px] mb-6">
            <span className="w-[8px] h-[8px] rounded-full bg-[#2B9896]"></span>

            <p>
              {new Date(
                blog.date
              ).toLocaleDateString(
                "en-US",
                {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                }
              )}
            </p>
          </div>

          {/* Title */}
          <h1 className="text-[58px] leading-[76px] font-bold text-[#111] mb-10">
            {blog.title.rendered}
          </h1>

          {/* Divider */}
          <div className="w-full h-[1px] bg-[#DDD] mb-14"></div>

          {/* Blog Content */}
          <div
            className="
              [&_p]:text-[18px]
              [&_p]:leading-[38px]
              [&_p]:text-[#444]
              [&_p]:mb-7

              [&_h1]:text-[52px]
              [&_h1]:leading-[68px]
              [&_h1]:font-bold
              [&_h1]:mt-14
              [&_h1]:mb-7
              [&_h1]:text-[#111]

              [&_h2]:text-[42px]
              [&_h2]:leading-[58px]
              [&_h2]:font-bold
              [&_h2]:mt-14
              [&_h2]:mb-7
              [&_h2]:text-[#111]

              [&_h3]:text-[34px]
              [&_h3]:leading-[50px]
              [&_h3]:font-bold
              [&_h3]:mt-12
              [&_h3]:mb-6
              [&_h3]:text-[#111]

              [&_h4]:text-[28px]
              [&_h4]:leading-[42px]
              [&_h4]:font-semibold
              [&_h4]:mt-10
              [&_h4]:mb-5
              [&_h4]:text-[#111]

              [&_ul]:pl-6
              [&_ul]:mb-8

              [&_ol]:pl-6
              [&_ol]:mb-8

              [&_li]:mb-3
              [&_li]:text-[18px]
              [&_li]:leading-[34px]
              [&_li]:text-[#444]

              [&_img]:w-full
              [&_img]:rounded-[20px]
              [&_img]:my-10

              [&_blockquote]:border-l-[5px]
              [&_blockquote]:border-[#2B9896]
              [&_blockquote]:pl-6
              [&_blockquote]:italic
              [&_blockquote]:text-[24px]
              [&_blockquote]:leading-[42px]
              [&_blockquote]:my-10
              [&_blockquote]:text-[#111]

              [&_a]:text-[#2B9896]
              [&_a]:underline

              [&_table]:w-full
              [&_table]:border-collapse
              [&_table]:my-10

              [&_th]:border
              [&_th]:border-[#DDD]
              [&_th]:p-4
              [&_th]:bg-[#F1F1F1]

              [&_td]:border
              [&_td]:border-[#DDD]
              [&_td]:p-4

              [&_hr]:my-10
              [&_hr]:border-[#DDD]
            "
            dangerouslySetInnerHTML={{
              __html:
                blog.content.rendered,
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;