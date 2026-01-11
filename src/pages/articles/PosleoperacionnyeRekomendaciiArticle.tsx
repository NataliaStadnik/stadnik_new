import { posleoperacionnyeRekomendaciiPacientu } from "../../constants/allArticles";
import ArticleLayout from "../../shared/ArticleLayout";

const PosleoperacionnyeRekomendaciiArticle = () => {
  const { category, readTime, title, subtitle } =
    posleoperacionnyeRekomendaciiPacientu;

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

export default PosleoperacionnyeRekomendaciiArticle;
