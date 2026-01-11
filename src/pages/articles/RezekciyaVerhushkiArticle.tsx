import { rezekciyaVerhushkiKornya } from "../../constants/allArticles";
import ArticleLayout from "../../shared/ArticleLayout";

const RezekciyaVerhushkiArticle = () => {
  const { category, readTime, title, subtitle } =
    rezekciyaVerhushkiKornya;

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

export default RezekciyaVerhushkiArticle;
