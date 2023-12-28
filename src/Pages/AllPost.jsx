import { useState, useEffect } from "react";
import service from "../AppWrite/AppWriteConfig";
import { Container, PostCard } from "../Components/Index";

const AllPost = () => {
  const [posts, setPost] = useState([]);
  useEffect(() => {}, []);

  service.getPost([]).then((post) => {
    if (post) {
      setPost(post.documents);
    }
  });
  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post?.$id} className="p-2 w-1/4">
              <PostCard post={post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default AllPost;
