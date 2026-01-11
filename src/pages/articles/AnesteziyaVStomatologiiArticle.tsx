import { anesteziyaVStomatologiiVarianty } from "../../constants/allArticles";
import ArticleLayout from "../../shared/ArticleLayout";

const AnesteziyaVStomatologiiArticle = () => {
  const { category, readTime, title, subtitle } =
    anesteziyaVStomatologiiVarianty;

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

export default AnesteziyaVStomatologiiArticle;
