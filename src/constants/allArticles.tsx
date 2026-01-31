import { articleSlugs } from "../services/routes/path";
import type { Article } from "./types";
import artic_kost_plast from "../assets/images/articles/artic_kost_plast.jpg";
import artic_plastic_desny from "../assets/images/articles/artic_plastic_desny.jpg";
import artic_wisdow_extract from "../assets/images/articles/artic_wisdow_extract.jpg";
import artic_klkt from "../assets/images/articles/artic_klkt.jpg";
import artic_sinus from "../assets/images/articles/artic_sinus.jpg";
import artic_crown from "../assets/images/articles/artic_crown.jpg";
import artic_before_operation from "../assets/images/articles/artic_before_operation.png";
import artic_recomend_before from "../assets/images/articles/artic_recomend_before.png";
import artic_periimplantit from "../assets/images/articles/artic_periimplantit.png";
import artic_uhod_tooth from "../assets/images/articles/artic_uhod_tooth.png";
import artic_implant from "../assets/images/implant-placement.png";

export enum Category {
  Implantologiya = "Имплантология",
  Hirurgiya = "Хирургия",
  Gigiena = "Гигиена",
  Podgotovka = "Подготовка",
  Diagnostika = "Диагностика",
  Reabilitaciya = "Реабилитация",
  Beremennye = "Беременные",
  Anesteziya = "Анестезия",
}

export const implantaciyaZubovOptimalnyjVariant: Article = {
  id: "1",
  title: "Имплантация зубов: как выбрать оптимальный вариант?",
  subtitle:
    "Подробный гид, который поможет разобраться в видах имплантов и критериях выбора",
  excerpt:
    "Современная стоматология предлагает множество вариантов имплантации зубов, но как выбрать тот, который лучше всего подойдет именно вам?",
  category: Category.Implantologiya,
  readTime: `5`,
  color: "bg-zen-sage/20",
  slug: articleSlugs.implantaciyaZubovOptimalnyjVariant,
  img: artic_implant,
};

export const kostnayaPlastikaPeredImplantaciej: Article = {
  id: "2",
  title: "Костная пластика перед имплантацией: зачем она нужна?",
  subtitle: "subtitle",
  excerpt:
    "Успешная установка зубного импланта во многом зависит от состояния костной ткани челюсти. Когда ее недостаточно, костная пластика становится важным этапом подготовки.",
  category: Category.Hirurgiya,
  readTime: `7`,
  color: "bg-zen-soft/20",
  slug: articleSlugs.kostnayaPlastikaPeredImplantaciej,
  img: artic_kost_plast,
};

export const uhodZaZubamiPosleOperacii: Article = {
  id: "3",
  title: "Как ухаживать за зубами после хирургического вмешательства?",
  subtitle: "subtitle",
  excerpt:
    "После стоматологической операции важно правильно ухаживать за ротовой полостью. В этой статье вы найдете практические рекомендации, которые помогут вам пройти этот этап с комфортом.",
  category: Category.Gigiena,
  readTime: `5`,
  color: "bg-zen-sky",
  slug: articleSlugs.uhodZaZubamiPosleOperacii,
  img: artic_uhod_tooth,
};

export const periimplantitKakIzbezhatVospaleniya: Article = {
  id: "4",
  title: "Периимплантит: как избежать воспаления вокруг импланта?",
  subtitle: "subtitle",
  excerpt:
    "Периимплантит — одно из осложнений после имплантации зубов. Подробно рассмотрим причины его появления и способы профилактики.",
  category: Category.Implantologiya,
  readTime: `6`,
  color: "bg-zen-sky",
  slug: articleSlugs.periimplantitKakIzbezhatVospaleniya,
  img: artic_periimplantit,
};

export const sinusLiftingPeredImplantaciej: Article = {
  id: "5",
  title: "Синус-лифтинг: когда он необходим перед имплантацией?",
  subtitle: "subtitle",
  excerpt:
    "Синус-лифтинг — важный этап подготовки к имплантации при недостатке костной ткани верхней челюсти. В статье подробно рассказываем о показаниях, методах проведения и восстановлении после процедуры.",
  category: Category.Hirurgiya,
  readTime: `5`,
  color: "bg-zen-sky",
  slug: articleSlugs.sinusLiftingPeredImplantaciej,
  img: artic_sinus,
};

export const vremennyeKoronkiPosleImplantacii: Article = {
  id: "6",
  title: "Все о временных коронках: зачем они нужны после имплантации?",
  subtitle: "subtitle",
  excerpt:
    "Временные коронки играют важную роль в процессе восстановления после установки импланта. Узнайте, какие функции они выполняют и когда стоит их заменять.",
  category: Category.Hirurgiya,
  readTime: `5`,
  color: "bg-zen-sky",
  slug: articleSlugs.vremennyeKoronkiPosleImplantacii,
  img: artic_crown,
};

export const podgotovkaKStomatologicheskojOperacii: Article = {
  id: "7",
  title: "Подготовка к стоматологической операции: что нужно знать?",
  subtitle: "subtitle",
  excerpt:
    "Перед хирургическим вмешательством важно пройти обследование и соблюдать рекомендации врача. В статье рассказываем о ключевых этапах подготовки.",
  category: Category.Podgotovka,
  readTime: `6`,
  color: "bg-zen-sage/20",
  slug: articleSlugs.podgotovkaKStomatologicheskojOperacii,
  img: artic_before_operation,
};

export const rentgenIKtPeredOperaciej: Article = {
  id: "8",
  title: "Рентген и КЛКТ перед операцией: зачем нужны исследования?",
  subtitle: "subtitle",
  excerpt:
    "Современная диагностика помогает врачу точно оценить состояние зубов и костной ткани. Узнайте, какие методы применяются и почему они важны.",
  category: Category.Diagnostika,
  readTime: `7`,
  color: "bg-zen-soft/20",
  slug: articleSlugs.rentgenIKtPeredOperaciej,
  img: artic_klkt,
};

export const plastikaDesnyEstetikaIZdorove: Article = {
  id: "9",
  title: "Пластика десны: эстетика и здоровье",
  subtitle: "subtitle",
  excerpt:
    "Хирургическая пластика десны помогает восстановить естественный контур улыбки и улучшить гигиену полости рта.",
  category: Category.Hirurgiya,
  readTime: `5`,
  color: "bg-zen-sage/20",
  slug: articleSlugs.plastikaDesnyEstetikaIZdorove,
  img: artic_plastic_desny,
};

export const rekomendaciiPacientuPeredOperaciej: Article = {
  id: "10",
  title: "Рекомендации пациенту перед хирургическим вмешательством",
  subtitle: "subtitle",
  excerpt:
    "Чтобы операция прошла успешно, важно соблюдать ряд правил: от питания до приема лекарств. В статье — практические советы.",
  category: Category.Podgotovka,
  readTime: `5`,
  color: "bg-zen-sage/20",
  slug: articleSlugs.rekomendaciiPacientuPeredOperaciej,
};

export const udalenieZubovMudrostiUVzroslyh: Article = {
  id: "11",
  title: "Удаление зубов мудрости у взрослых: показания и особенности",
  subtitle: "subtitle",
  excerpt:
    "Зубы мудрости часто становятся источником проблем у взрослых пациентов. Разбираем, когда необходимо хирургическое удаление и как проходит восстановление.",
  category: Category.Hirurgiya,
  readTime: `6`,
  color: "bg-zen-soft/20",
  slug: articleSlugs.udalenieZubovMudrostiUVzroslyh,
  img: artic_wisdow_extract,
};

export const rezekciyaVerhushkiKornya: Article = {
  id: "12",
  title: "Резекция верхушки корня: когда нужна операция?",
  subtitle: "subtitle",
  excerpt:
    "Если воспаление не удается устранить консервативными методами, резекция верхушки корня становится эффективным хирургическим решением.",
  category: Category.Hirurgiya,
  readTime: `7`,
  color: "bg-zen-sage/20",
  slug: articleSlugs.rezekciyaVerhushkiKornya,
};

export const posleoperacionnyeRekomendaciiPacientu: Article = {
  id: "13",
  title: "Послеоперационные рекомендации: что важно знать пациенту",
  subtitle: "subtitle",
  excerpt:
    "Правильное поведение после операции помогает ускорить восстановление и избежать осложнений. В статье — основные правила ухода.",
  category: Category.Reabilitaciya,
  readTime: `6`,
  color: "bg-zen-sky",
  slug: articleSlugs.posleoperacionnyeRekomendaciiPacientu,
  img: artic_recomend_before,
};

export const stomatologicheskieOperaciiUBeremennyh: Article = {
  id: "14",
  title: "Стоматологические операции у беременных: что нужно учитывать?",
  subtitle: "subtitle",
  excerpt:
    "Беременность накладывает особые требования на проведение стоматологических вмешательств. В статье рассказываем, какие процедуры допустимы, какие стоит отложить и как минимизировать риски для мамы и ребёнка.",
  category: Category.Beremennye,
  readTime: `7`,
  color: "bg-zen-sage/20",
  slug: articleSlugs.stomatologicheskieOperaciiUBeremennyh,
};

export const anesteziyaVStomatologiiVarianty: Article = {
  id: "15",
  title:
    "Анестезия в стоматологии: какие варианты подходят взрослым пациентам?",
  subtitle: "subtitle",
  excerpt:
    "Современная стоматология предлагает разные виды анестезии — от местной до седации. Разбираем, в каких случаях применяются разные методы и как выбрать оптимальный вариант.",
  category: Category.Anesteziya,
  readTime: `6`,
  color: "bg-zen-soft/20",
  slug: articleSlugs.anesteziyaVStomatologiiVarianty,
};

export const allArticles: Article[] = [
  implantaciyaZubovOptimalnyjVariant,
  kostnayaPlastikaPeredImplantaciej,
  uhodZaZubamiPosleOperacii,
  periimplantitKakIzbezhatVospaleniya,
  sinusLiftingPeredImplantaciej,
  vremennyeKoronkiPosleImplantacii,
  podgotovkaKStomatologicheskojOperacii,
  rentgenIKtPeredOperaciej,
  plastikaDesnyEstetikaIZdorove,
  // rekomendaciiPacientuPeredOperaciej,
  udalenieZubovMudrostiUVzroslyh,
  // rezekciyaVerhushkiKornya,
  posleoperacionnyeRekomendaciiPacientu,
  stomatologicheskieOperaciiUBeremennyh,
  anesteziyaVStomatologiiVarianty,
];
