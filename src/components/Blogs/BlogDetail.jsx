import React from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import blogsData from "./MyBlogs";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
const BlogDetailPage = () => {
  const { slug } = useParams();
  const blog = blogsData.find((blog) => blog.slug === slug);
  const navigate = useNavigate();
  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="font-AlbertSans px-6 py-4">
      <span
        role="button"
        onClick={() => {
          navigate("/blogs");
        }}
        className="redirect-back-chevron"
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </span>
      <div className="text-3xl font-semibold mt-4 mb-2">{blog.title}</div>
      <div className="text-lg text-zinc-500 font-medium my-3">{blog.summary} </div>
      <div className="text-base text-zinc-500 font-medium my-3">{blog.date} </div>

      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          img: ({ node, ...props }) => (
            <img {...props} className="" alt={props.alt} />
          ),
        }}
      >
        {blog.content}
      </ReactMarkdown>
      
    </div>
  );
};

export default BlogDetailPage;
