import { rekomendaciiPacientuPeredOperaciej } from "../../constants/allArticles";
import ArticleLayout from "../../shared/ArticleLayout";

const RekomendaciiPacientuArticle = () => {
  const { category, readTime, title, subtitle } =
    rekomendaciiPacientuPeredOperaciej;

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

export default RekomendaciiPacientuArticle;
