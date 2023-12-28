import { Link } from "react-router-dom";
import service from "../AppWrite/AppWriteConfig";

const PostCard = ({ $id, title, featuredImage }) => {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-gray-100 rounded-xl p-4">
        <div className="w-full justify-content mb-4">
          <img
            src={service.filePreview(featuredImage)}
            alt={title}
            className="rounded-xl"
          />
        </div>
        <h2 className="text-xl font-bold"> </h2>
      </div>
    </Link>
  );
};

export default PostCard;
