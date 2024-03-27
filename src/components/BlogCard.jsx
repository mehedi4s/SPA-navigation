import { Link } from "react-router-dom";
import placeholderImage from '../assets/404.jpg'
import { MdDeleteForever } from "react-icons/md";



// eslint-disable-next-line react/prop-types
const BlogCard = ({ blog, deletable, handleDelete }) => {
  const { title, cover_image, description, published_at, id } = blog;

  


  return (

    <div className={`flex ${deletable ? 'indicator' : ''}`}>
      <Link
        to={`/blog/${id}`}
        className="max-w-sm mx-auto tran border-2 hover:scale-105 border-primary hover:border-secondary border-opacity-30 transition group hover:no-underline focus:no-underline "
      >
        <img
          role="presentation"
          className="object-cover w-full rounded h-44 bg-gray-500"
          src={cover_image || placeholderImage}
        />
        <div className="p-6 space-y-2">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {title}
          </h3>
          <span className="text-xs text-gray-400">{new Date(published_at).toLocaleDateString()}</span>
          <p>{description}</p>
        </div>
      </Link>
      {deletable && <div onClick={() => handleDelete(id)} className="indicator-item badge badge-primary p-3 hover:scale-105 hover:bg-secondary">
        <MdDeleteForever size={20} className="group-hover:text-secondary" />
      </div>}
    </div>


  );
};

export default BlogCard;
