import { udalenieZubovMudrostiUVzroslyh } from "../../constants/allArticles";
import ArticleLayout from "../../shared/ArticleLayout";

const UdalenieZubovArticle = () => {
  const { category, readTime, title, subtitle } =
    udalenieZubovMudrostiUVzroslyh;

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

export default UdalenieZubovArticle;
