import { lazy } from "react";
import { articleSlugs, PATHS } from "./path";

const HomePage = lazy(() => import("../../pages/HomePage"));
const AboutPage = lazy(() => import("../../pages/AboutPage"));
const ExperiencePage = lazy(() => import("../../pages/ExperiencesPage"));
const ProceduresPage = lazy(() => import("../../pages/ProceduresPage"));
const FeedbackPage = lazy(() => import("../../pages/FeedbackPage"));
const ContactPage = lazy(() => import("../../pages/ContactPage"));
const ArticlesPage = lazy(() => import("../../pages/ArticlesPage"));

const ArticleAboutImplants = lazy(
  () => import("../../pages/articles/AboutImplantsArticle")
);
const ArticleAnestesia = lazy(
  () => import("../../pages/articles/AnesteziyaVStomatologiiArticle")
);
const ArticleKostnayaPlastica = lazy(
  () => import("../../pages/articles/KostnayaPlastikaArticle")
);
const ArticlePeriimplantit = lazy(
  () => import("../../pages/articles/PeriimplantitKakIzbezhatArticle")
);
const ArticlePlasticaDesny = lazy(
  () => import("../../pages/articles/PlastikaDesnyArticle")
);
const ArticlePodgotovkaKOperacii = lazy(
  () => import("../../pages/articles/PodgotovkaKOperaciiArticle")
);
const ArticlePosleoperacionyeRecomendacii = lazy(
  () => import("../../pages/articles/PosleoperacionnyeRekomendaciiArticle")
);
const ArticleRecomedaciiPacientu = lazy(
  () => import("../../pages/articles/RekomendaciiPacientuArticle")
);
const ArticleRentgen = lazy(
  () => import("../../pages/articles/RentgenIKtArticle")
);
const ArticleRezekcia = lazy(
  () => import("../../pages/articles/RezekciyaVerhushkiArticle")
);
const ArticleSinusLifting = lazy(
  () => import("../../pages/articles/SinusLiftingPeredImplArtixle")
);
const ArticleStomatologOperacii = lazy(
  () => import("../../pages/articles/StomatologicheskieOperaciiArticle")
);
const ArticleUdalenieZubov = lazy(
  () => import("../../pages/articles/UdalenieZubovArticle")
);
const ArticleUhodZaZubami = lazy(
  () => import("../../pages/articles/UhodZaZubamiPosleOperaciiArticle")
);
const ArticleVremennyeKoronki = lazy(
  () => import("../../pages/articles/VremennyeKoronkiArticle")
);

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
  {
    path: PATHS.ONE_ARTICLE(articleSlugs.implantaciyaZubovOptimalnyjVariant),
    element: <ArticleAboutImplants />,
  },
  {
    path: PATHS.ONE_ARTICLE(articleSlugs.anesteziyaVStomatologiiVarianty),
    element: <ArticleAnestesia />,
  },
  {
    path: PATHS.ONE_ARTICLE(articleSlugs.kostnayaPlastikaPeredImplantaciej),
    element: <ArticleKostnayaPlastica />,
  },
  {
    path: PATHS.ONE_ARTICLE(articleSlugs.periimplantitKakIzbezhatVospaleniya),
    element: <ArticlePeriimplantit />,
  },
  {
    path: PATHS.ONE_ARTICLE(articleSlugs.plastikaDesnyEstetikaIZdorove),
    element: <ArticlePlasticaDesny />,
  },
  {
    path: PATHS.ONE_ARTICLE(articleSlugs.podgotovkaKStomatologicheskojOperacii),
    element: <ArticlePodgotovkaKOperacii />,
  },
  {
    path: PATHS.ONE_ARTICLE(articleSlugs.posleoperacionnyeRekomendaciiPacientu),
    element: <ArticlePosleoperacionyeRecomendacii />,
  },
  {
    path: PATHS.ONE_ARTICLE(articleSlugs.rekomendaciiPacientuPeredOperaciej),
    element: <ArticleRecomedaciiPacientu />,
  },
  {
    path: PATHS.ONE_ARTICLE(articleSlugs.rentgenIKtPeredOperaciej),
    element: <ArticleRentgen />,
  },
  {
    path: PATHS.ONE_ARTICLE(articleSlugs.rezekciyaVerhushkiKornya),
    element: <ArticleRezekcia />,
  },
  {
    path: PATHS.ONE_ARTICLE(articleSlugs.sinusLiftingPeredImplantaciej),
    element: <ArticleSinusLifting />,
  },
  {
    path: PATHS.ONE_ARTICLE(articleSlugs.stomatologicheskieOperaciiUBeremennyh),
    element: <ArticleStomatologOperacii />,
  },
  {
    path: PATHS.ONE_ARTICLE(articleSlugs.udalenieZubovMudrostiUVzroslyh),
    element: <ArticleUdalenieZubov />,
  },
  {
    path: PATHS.ONE_ARTICLE(articleSlugs.uhodZaZubamiPosleOperacii),
    element: <ArticleUhodZaZubami />,
  },
  {
    path: PATHS.ONE_ARTICLE(articleSlugs.vremennyeKoronkiPosleImplantacii),
    element: <ArticleVremennyeKoronki />,
  },
];
