import { useState, useEffect } from "react";
import { Container, PostForm } from "../Components/Index";
import service from "../AppWrite/AppWriteConfig";
import { useParams, useNavigate } from "react-router-dom";

const EditPost = () => {
  const [post, setPost] = useState([]);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      service.getPost(slug).then((value) => {
        if (value) {
          setPost(value);
        }
      });
    } else {
      navigate(`/`);
    }
  }, [slug, navigate]);

  return post ? (
    <div className="py-8">
      <Container>
        <PostForm post={post} />
      </Container>
    </div>
  ) : null;
};

export default EditPost;
