import { stomatologicheskieOperaciiUBeremennyh } from "../../constants/allArticles";
import ArticleLayout from "../../shared/ArticleLayout";

const StomatologicheskieOperaciiArticle = () => {
  const { category, readTime, title, subtitle } =
    stomatologicheskieOperaciiUBeremennyh;

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

export default StomatologicheskieOperaciiArticle;
