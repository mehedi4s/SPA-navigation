import { useLoaderData } from "react-router-dom";
import placeholderImage from "../assets/404.jpg";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const Content = () => {
    const blog = useLoaderData();
    const { title, cover_image, tags, body_html, url } =
        blog;
    // console.log(blog);
    return (
        <div className=" mx-auto tran border p-2 border-opacity-30  group hover:no-underline focus:no-underline ">
            <img
                role="presentation"
                className="object-cover w-full rounded  bg-gray-500"
                src={cover_image || placeholderImage}
            />
            <div>
                <div className="flex flex-wrap py-6 gap-2 border-t border-dashed dark:border-gray-600">
                    {tags.map((tag) => (
                        <a
                            key={tag}
                            className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-600 dark:text-gray-50"
                        >
                            #{tag}
                        </a>
                    ))}
                </div>
            </div>
            <a href={url} target="_blank" className="text-2xl font-semibold group-hover:underline group-focus:underline">
          {title}
        </a >
            <Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>
           
        </div>
    );
};

export default Content;
