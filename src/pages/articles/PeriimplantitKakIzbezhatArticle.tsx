import { periimplantitKakIzbezhatVospaleniya } from "../../constants/allArticles";
import ArticleLayout from "../../shared/ArticleLayout";

const PeriimplantitKakIzbezhatArticle = () => {
  const { category, readTime, title, subtitle } =
    periimplantitKakIzbezhatVospaleniya;

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

export default PeriimplantitKakIzbezhatArticle;
