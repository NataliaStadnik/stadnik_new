import { uhodZaZubamiPosleOperacii } from "../../constants/allArticles";
import ArticleLayout from "../../shared/ArticleLayout";

const UhodZaZubamiPosleOperaciiArticle = () => {
  const { category, readTime, title, subtitle } =
    uhodZaZubamiPosleOperacii;

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

export default UhodZaZubamiPosleOperaciiArticle;
