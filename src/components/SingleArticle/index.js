import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import "./SingleArticle.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadArticles } from "../../store/articleReducer";

const SingleArticle = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articleState.entries);

  const selectedArticle = articles.find((article) => {
    return article.id === id;
  });
  console.log(selectedArticle);
  useEffect(() => {
    dispatch(loadArticles());
  }, [dispatch]);

  return (
    <div className="singleArticle">
      <h1>{selectedArticle.title}</h1>
      <img src={selectedArticle.imageUrl} alt="home" />
      <p>{selectedArticle.body}</p>
    </div>
  );
};

export default SingleArticle;
