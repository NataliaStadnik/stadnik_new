export const PATHS = {
  HOME: "/",
  ABOUT_PAGE: "/about",
  EXPERIENCES: "/experiences",
  PROCEDURES: "/procedures",
  FEEDBACK: "/feedback",
  CONTACT: "/contacts",

  ARTICLES: "/articles",
  ONE_ARTICLE: (slug: string) => `/articles/${slug}`,

  NOT_FOUND: "*",
};

export const articleSlugs = {
  implantaciyaZubovOptimalnyjVariant: "implantaciya-zubov-optimalnyj-variant",
  kostnayaPlastikaPeredImplantaciej: "kostnaya-plastika-pered-implantaciej",
  uhodZaZubamiPosleOperacii: "uhod-za-zubami-posle-operacii",
  periimplantitKakIzbezhatVospaleniya: "periimplantit-kak-izbezhat-vospaleniya",
  sinusLiftingPeredImplantaciej: "sinus-lifting-pered-implantaciej",
  vremennyeKoronkiPosleImplantacii: "vremennye-koronki-posle-implantacii",
  podgotovkaKStomatologicheskojOperacii:
    "podgotovka-k-stomatologicheskoj-operacii",
  rentgenIKtPeredOperaciej: "rentgen-i-kt-pered-operaciej",
  plastikaDesnyEstetikaIZdorove: "plastika-desny-estetika-i-zdorove",
  rekomendaciiPacientuPeredOperaciej: "rekomendacii-pacientu-pered-operaciej",
  udalenieZubovMudrostiUVzroslyh: "udalenie-zubov-mudrosti-u-vzroslyh",
  rezekciyaVerhushkiKornya: "rezekciya-verhushki-kornya",
  posleoperacionnyeRekomendaciiPacientu:
    "posleoperacionnye-rekomendacii-pacientu",
  stomatologicheskieOperaciiUBeremennyh:
    "stomatologicheskie-operacii-u-beremennyh",
  anesteziyaVStomatologiiVarianty: "anesteziya-v-stomatologii-varianty",
};
