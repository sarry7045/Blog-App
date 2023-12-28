import { useEffect, useState } from "react";
import { Container, PostCard } from "../Components/Index";
import service from "../AppWrite/AppWriteConfig";

const Home = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    service.getPost().then((value) => {
      if (value) {
        setPost(value.documents);
      }
    });
  }, []);

  if (post.length === 0) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              <h1 className="text-2xl font-bold hover:text-gray-500">
                Login to Read Post
              </h1>
            </div>
          </div>
        </Container>
      </div>
    );
  }
  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {post.map((post) => (
            <div className="p-2 w-1/4" key={post?.$id}>
              {" "}
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>{" "}
    </div>
  );
};

export default Home;
