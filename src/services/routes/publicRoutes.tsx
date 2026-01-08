import { lazy } from "react";
import { PATHS } from "./path";

const HomePage = lazy(() => import("../../pages/HomePage"));
const AboutPage = lazy(() => import("../../pages/AboutPage"));
const ExperiencePage = lazy(() => import("../../pages/ExperiencesPage"));
const ProceduresPage = lazy(() => import("../../pages/ProceduresPage"));
const FeedbackPage = lazy(() => import("../../pages/FeedbackPage"));
const ContactPage = lazy(() => import("../../pages/ContactPage"));
const ArticlesPage = lazy(() => import("../../pages/ArticlesPage"));

// const ArticleBody = lazy(
//   () => import("../../pages/articles/MindBodyConnection")
// );
// const ArticleBrush = lazy(() => import("../../pages/articles/MindfulBrushing"));
// const ArticleSmile = lazy(
//   () => import("../../pages/articles/NutritionForSmile")
// );

export const publicRoutes = [
  {
    path: PATHS.HOME,
    element: <HomePage />,
  },
  {
    path: PATHS.ABOUT_PAGE,
    element: <AboutPage />,
  },
  {
    path: PATHS.EXPERIENCES,
    element: <ExperiencePage />,
  },
  {
    path: PATHS.PROCEDURES,
    element: <ProceduresPage />,
  },
  {
    path: PATHS.FEEDBACK,
    element: <FeedbackPage />,
  },
  {
    path: PATHS.CONTACT,
    element: <ContactPage />,
  },
  {
    path: PATHS.ARTICLES,
    element: <ArticlesPage />,
  },
  // {
  //   path: PATHS.ARTICLE_BODY,
  //   element: <ArticleBody />,
  // },
  // {
  //   path: PATHS.ARTICLE_BRUSH,
  //   element: <ArticleBrush />,
  // },
  // {
  //   path: PATHS.ARTICLE_SMILE,
  //   element: <ArticleSmile />,
  // },
];
