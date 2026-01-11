import { vremennyeKoronkiPosleImplantacii } from "../../constants/allArticles";
import ArticleLayout from "../../shared/ArticleLayout";

const VremennyeKoronkiArticle = () => {
  const { category, readTime, title, subtitle } =
    vremennyeKoronkiPosleImplantacii;

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

export default VremennyeKoronkiArticle;
