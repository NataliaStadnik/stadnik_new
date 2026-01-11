import { plastikaDesnyEstetikaIZdorove } from "../../constants/allArticles";
import ArticleLayout from "../../shared/ArticleLayout";

const PlastikaDesnyArticle = () => {
  const { category, readTime, title, subtitle } =
    plastikaDesnyEstetikaIZdorove;

  return (
    <ArticleLayout
      section={category}
      time={readTime}
      title={title}
      text={subtitle}
    >
      <div>article</div>
    </ArticleLayout>
  );
};

export default PlastikaDesnyArticle;
