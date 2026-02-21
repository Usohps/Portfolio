import { BsArrowRight } from "react-icons/bs";
import Loader from "../components/utils/loader";
import { useState, useEffect } from "react";

function About() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const blogs = [
    {
      title: "The Importance of Proper File Structure in Development",
      url: "https://medium.com/@usohps/the-importance-of-proper-file-structure-in-programming-421de3af2794",
    },
    {
      title: "Developing a Programmer's Mindset",
      url: "https://medium.com/@usohps/developing-a-programmers-mindset-how-to-think-like-a-programmer-d8a3befc56ef",
    },
    {
      title: "Troubleshooting Routing Challenge with ReactJS Hosted on Vercel",
      url: "https://medium.com/@usohps/troubleshooting-routing-challenge-at-production-environment-which-prompts-a-404-error-page-on-37d856b2cf75",
    },
    {
      title: "How to Achieve Scalability and Efficiency in Websites",
      url: "https://medium.com/@usohps/how-to-achieve-a-scalable-and-efficient-website-fb7933508a30",
    },
    {
      title: "The Benefits of Responsive Design to Company Growth",
      url: "https://medium.com/@usohps/responsive-design-its-importance-and-contribution-to-company-s-growth-9a9fae992c28",
    },
  ];

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section className="py-20 mt-20">
          {/* Header */}
          <div className="container mx-auto px-6 text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-blue-500">
              Blogs
            </h1>
            <p className="mt-4 text-gray-500 max-w-xl mx-auto">
              I share insights on frontend engineering, scalable architecture,
              performance optimization, and practical development strategies.
            </p>
          </div>

          {/* Blog Grid */}
          <div className="container mx-auto px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {blogs.map((blog, index) => (
                <a
                  key={index}
                  href={blog.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300 bg-white"
                >
                  <h2 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition">
                    {blog.title}
                  </h2>

                  <div className="mt-6 flex items-center text-blue-500 font-medium">
                    Read Article
                    <BsArrowRight className="ml-2 transition group-hover:translate-x-2" />
                  </div>
                </a>
              ))}
            </div>

            {/* Read More Button */}
            <div className="text-center mt-16">
              <a
                href="https://medium.com/@usohps"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-700 transition"
              >
                View All Articles
                <BsArrowRight className="ml-2" />
              </a>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default About;
