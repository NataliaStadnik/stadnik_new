import { sinusLiftingPeredImplantaciej } from "../../constants/allArticles";
import ArticleLayout from "../../shared/ArticleLayout";

const SinusLiftingPeredImplArtixle = () => {
  const { category, readTime, title, subtitle } =
    sinusLiftingPeredImplantaciej;

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

export default SinusLiftingPeredImplArtixle;
