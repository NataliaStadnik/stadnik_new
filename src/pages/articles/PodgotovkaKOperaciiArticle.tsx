import { podgotovkaKStomatologicheskojOperacii } from "../../constants/allArticles";
import ArticleLayout from "../../shared/ArticleLayout";

const PodgotovkaKOperaciiArticle = () => {
  const { category, readTime, title, subtitle } =
    podgotovkaKStomatologicheskojOperacii;

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

export default PodgotovkaKOperaciiArticle;
