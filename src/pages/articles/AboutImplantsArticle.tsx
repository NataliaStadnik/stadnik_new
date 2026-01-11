import { implantaciyaZubovOptimalnyjVariant } from "../../constants/allArticles";
import ArticleLayout from "../../shared/ArticleLayout";

const AboutImplantsArticle = () => {
  const { category, readTime, title, subtitle } =
    implantaciyaZubovOptimalnyjVariant;

  return (
    <ArticleLayout
      section={category}
      time={readTime}
      title={title}
      text={subtitle}
    >
      <div className="prose prose-lg max-w-none">
        <p className="text-zen-text/80 dark:text-zen-dark-text/80 leading-relaxed mb-6">
          Современная стоматология предлагает множество решений для
          восстановления утраченных зубов, и имплантация занимает особое место.
          Это не просто эстетика — импланты напрямую влияют на качество жизни,
          здоровье десен и даже общее самочувствие. Но как выбрать оптимальный
          вариант среди множества технологий и материалов?
        </p>

        <h2 className="text-2xl font-serif text-zen-text dark:text-zen-dark-text mt-12 mb-6">
          Почему имплантация — лучший выбор
        </h2>
        <p className="text-zen-text/80 dark:text-zen-dark-text/80 leading-relaxed mb-4">
          Имплант имитирует корень зуба, обеспечивая прочную основу для коронки
          или протеза. В отличие от мостов или съемных конструкций, он:
        </p>
        <ul className="space-y-3 mb-6 text-zen-text/80 dark:text-zen-dark-text/80">
          {[
            "предотвращает атрофию костной ткани",
            "сохраняет соседние зубы неповрежденными",
            "обеспечивает естественный комфорт при жевании и разговоре.",
          ].map((elem, i) => (
            <li key={i} className="flex items-start">
              <span className="mr-3 text-zen-sage">•</span>
              <span>{elem}</span>
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-serif text-zen-text dark:text-zen-dark-text mt-12 mb-6">
          Виды дентальных имплантов
        </h2>

        <h3 className="text-xl font-medium text-zen-text dark:text-zen-dark-text mt-8 mb-4">
          1. По форме
        </h3>
        <ul className="space-y-3 mb-6 text-zen-text/80 dark:text-zen-dark-text/80">
          {[
            {
              title: "Корневидные",
              text: "напоминают естественный корень зуба, бывают винтовые и цилиндрические.",
            },
            {
              title: "Пластинчатые",
              text: "эстетичнее, особенно для зоны улыбки, но дороже",
            },
          ].map((elem, i) => (
            <li key={i} className="flex items-start">
              <span className="mr-3 text-zen-sage">•</span>
              <span>
                <strong>{elem.title} - </strong> {elem.text}
              </span>
            </li>
          ))}
        </ul>

        <h3 className="text-xl font-medium text-zen-text dark:text-zen-dark-text mt-8 mb-4">
          2. По материалу
        </h3>
        <ul className="space-y-3 mb-6 text-zen-text/80 dark:text-zen-dark-text/80">
          {[
            {
              title: "Титановые",
              text: "наиболее распространённые, биосовместимые и прочные.",
            },
            {
              title: "Циркониевые",
              text: "применяются при недостатке костной ткани.",
            },
          ].map((elem, i) => (
            <li key={i} className="flex items-start">
              <span className="mr-3 text-zen-sage">•</span>
              <span>
                <strong>{elem.title} - </strong> {elem.text}
              </span>
            </li>
          ))}
        </ul>

        <h3 className="text-xl font-medium text-zen-text dark:text-zen-dark-text mt-8 mb-4">
          3. По методике установки
        </h3>
        <ul className="space-y-3 mb-6 text-zen-text/80 dark:text-zen-dark-text/80">
          {[
            {
              title: "Классическая двухэтапная имплантация",
              text: "сначала устанавливается имплант, затем через 3–6 месяцев — коронка.",
            },
            {
              title: "Одноэтапная имплантация",
              text: "коронка фиксируется сразу, подходит при хорошей костной ткани.",
            },
            {
              title: "Базальная имплантация",
              text: "используется при сильной атрофии кости, позволяет обойтись без костной пластики.",
            },
          ].map((elem, i) => (
            <li key={i} className="flex items-start">
              <span className="mr-3 text-zen-sage">•</span>
              <span>
                <strong>{elem.title} - </strong> {elem.text}
              </span>
            </li>
          ))}
        </ul>

        <div className="px-8 py-10 bg-zen-sky/30 dark:bg-zen-dark-surface p-6 rounded-xl border border-zen-sky/70 dark:border-zen-dark-border">
          <h2 className="text-2xl font-serif text-zen-text dark:text-zen-dark-text mb-6">
            Пациент как активный участник процесса
          </h2>
          <p className="text-zen-text/80 dark:text-zen-dark-text/80 leading-relaxed">
            Имплантация — это совместный путь врача и пациента. Когда человек
            понимает, что успех зависит не только от хирургической техники, но и
            от его собственных привычек, он становится активным участником
            лечения.
          </p>
        </div>

        <h2 className="text-2xl font-serif text-zen-text dark:text-zen-dark-text mt-12 mb-6">
          Срок службы дентальных имплантов
        </h2>
        <p className="text-zen-text/80 dark:text-zen-dark-text/80 leading-relaxed mb-4">
          Импланты считаются одним из самых долговечных способов восстановления
          зубов. При правильной установке и уходе они могут служить 20–25 лет и
          даже дольше. Однако срок эксплуатации зависит от нескольких факторов.
        </p>
        <p className="text-zen-text/80 dark:text-zen-dark-text/80 leading-relaxed mb-6">
          В первую очередь — от качества самой системы: импланты премиум-класса
          из титана или циркония демонстрируют высокую надёжность и
          биосовместимость. Не менее важна работа врача: точная диагностика,
          грамотная установка и контроль на всех этапах лечения снижают риск
          осложнений.
        </p>

        <h2 className="text-2xl font-serif text-zen-text dark:text-zen-dark-text mt-12 mb-6">
          Факторы выбора оптимального варианта
        </h2>
        <ul className="space-y-3 mb-6 text-zen-text/80 dark:text-zen-dark-text/80">
          {[
            {
              title: "Состояние костной ткани",
              text: "при ее недостатке может потребоваться костная пластика.",
            },
            {
              title: "Общее здоровье",
              text: "наличие хронических заболеваний влияет на заживление.",
            },
            {
              title: "Эстетические ожидания",
              text: "форма и цвет коронки должны гармонировать с улыбкой.",
            },
            {
              title: "Бюджет",
              text: "разные системы имплантов отличаются по стоимости и сроку службы.",
            },
            {
              title: "Сроки",
              text: "если важно быстро восстановить зуб, выбирают экспресс-методы.",
            },
          ].map((elem, i) => (
            <li key={i} className="flex items-start">
              <span className="mr-3 text-zen-sage">•</span>
              <span>
                <strong>{elem.title}:</strong> {elem.text}
              </span>
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-serif text-zen-text dark:text-zen-dark-text mt-12 mb-6">
          Поддержка здоровья для успешной имплантации
        </h2>
        <p className="text-zen-text/80 dark:text-zen-dark-text/80 leading-relaxed mb-4">
          Чтобы имплант прижился и служил долго, важно учитывать не только
          технику операции, но и образ жизни пациента:
        </p>
        <ul className="space-y-3 mb-6 text-zen-text/80 dark:text-zen-dark-text/80">
          {[
            "отказ от курения и алкоголя;",
            "полноценное питание, богатое кальцием и витамином D;",
            "регулярная гигиена полости рта;",
            "контроль уровня стресса, так как он влияет на иммунитет и заживление тканей.",
          ].map((elem, i) => (
            <li key={i} className="flex items-start">
              <span className="mr-3 text-zen-sage">•</span>
              <span>{elem}</span>
            </li>
          ))}
        </ul>

        <div className="bg-zen-sky/20 dark:bg-zen-dark-surface p-8 rounded-2xl mt-12 border border-zen-sky/30 dark:border-zen-dark-border">
          <h3 className="text-xl font-serif text-zen-text dark:text-zen-dark-text mb-4">
            Ключевые выводы
          </h3>
          <ul className="space-y-2 text-zen-text/80 dark:text-zen-dark-text/80">
            {[
              "Имплантация — надежный способ восстановления зубов, сохраняющий эстетику и функцию.",
              "Существует несколько методик: классическая, одномоментная, базальная, мини-импланты.",
              "Выбор зависит от состояния костной ткани, здоровья и ожиданий пациента.",
              "Успех имплантации требует комплексного подхода: от хирургии до образа жизни.",
            ].map((elem, i) => (
              <li key={i}>• {elem}</li>
            ))}
          </ul>
        </div>
      </div>
    </ArticleLayout>
  );
};

export default AboutImplantsArticle;
