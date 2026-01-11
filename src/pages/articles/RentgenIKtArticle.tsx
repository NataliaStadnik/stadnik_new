import { rentgenIKtPeredOperaciej } from "../../constants/allArticles";
import ArticleLayout from "../../shared/ArticleLayout";

const RentgenIKtArticle = () => {
  const { category, readTime, title, subtitle } =
    rentgenIKtPeredOperaciej;

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

export default RentgenIKtArticle;
