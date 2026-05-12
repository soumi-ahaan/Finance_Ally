import {
  useEffect,
  useState,
} from "react";

import { Link } from "react-router-dom";

import { getBlogs } from "../../../Api/Api";

import type { BlogItem } from "../../types/AllType";

const Blog = () => {
  const [blogs, setBlogs] = useState<
    BlogItem[]
  >([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const data = await getBlogs();

      setBlogs(data);
    };

    fetchBlogs();
  }, []);

  return (
    <section className="py-[100px] bg-[#F8F8F8]">
      <div className="max-w-[1440px] mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-[#2B9896] font-semibold uppercase tracking-[2px] mb-3">
            Latest Blogs
          </p>

          <h2 className="text-[42px] leading-[56px] font-bold text-[#111]">
            Insights & Resources
          </h2>
        </div>

        {/* Blog Grid */}
        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
          {blogs.map((blog) => {
            const image =
              blog._embedded?.[
                "wp:featuredmedia"
              ]?.[0]?.source_url ||
              "https://via.placeholder.com/400";

            return (
              <Link
                key={blog.id}
                to={`/resources/${blog.slug}`}
                className="group bg-white rounded-[20px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={image}
                    alt={
                      blog.title.rendered
                    }
                    className="w-full h-[280px] object-cover group-hover:scale-110 transition-all duration-700"
                  />
                </div>

                {/* Content */}
                <div className="p-7">
                  {/* Date */}
                  <div className="flex items-center gap-3 text-[#777] text-[14px] mb-4">
                    <span className="w-[8px] h-[8px] bg-[#2B9896] rounded-full"></span>

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
                  <h2 className="text-[28px] leading-[42px] font-semibold text-[#111] group-hover:text-[#2B9896] transition-all duration-300">
                    {
                      blog.title.rendered
                    }
                  </h2>

                  {/* Excerpt */}
                  <div
                    className="text-[#666] leading-[32px] mt-5 text-[16px]"
                    dangerouslySetInnerHTML={{
                      __html:
                        blog.excerpt.rendered
                          .replace(
                            /(<([^>]+)>)/gi,
                            ""
                          )
                          .slice(0, 120) +
                        "...",
                    }}
                  />

                  {/* Read More */}
                  <div className="mt-7">
                    <span className="text-[#2B9896] font-semibold flex items-center gap-2">
                      Read More
                      <span className="group-hover:translate-x-1 transition-all duration-300">
                        →
                      </span>
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Blog;