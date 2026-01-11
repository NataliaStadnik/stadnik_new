import { kostnayaPlastikaPeredImplantaciej } from "../../constants/allArticles";
import ArticleLayout from "../../shared/ArticleLayout";

const KostnayaPlastikaArticle = () => {
  const { category, readTime, title, subtitle } =
    kostnayaPlastikaPeredImplantaciej;

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

export default KostnayaPlastikaArticle;
