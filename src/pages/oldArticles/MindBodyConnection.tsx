import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Clock, ArrowLeft } from "lucide-react";

const MindBodyConnection = () => {
  return (
    <div className="pt-22 min-h-screen bg-zen-white dark:bg-zen-dark-bg transition-colors duration-300">
      {/* Breadcrumb */}
      <div className="max-w-4xl mx-auto px-6 py-6">
        <Link
          to="/articles"
          className="flex items-center text-zen-text/60 dark:text-zen-dark-text/60 hover:text-zen-text dark:hover:text-zen-dark-text transition-colors text-sm"
        >
          <ArrowLeft size={16} className="mr-2" /> Back to Articles
        </Link>
      </div>

      {/* Hero */}
      <div className="bg-zen-sky/30 dark:bg-zen-dark-surface py-16 mb-12 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
          >
            <div className="flex items-center space-x-4 mb-6">
              <span className="px-3 py-1 bg-zen-sage/20 text-zen-sage text-xs uppercase tracking-wider rounded-full">
                Holistic Health
              </span>
              <span className="flex items-center text-zen-text/60 dark:text-zen-dark-text/60 text-sm">
                <Clock size={14} className="mr-1" /> 5 min read
              </span>
              {/* <span className="flex items-center text-zen-text/60 dark:text-zen-dark-text/60 text-sm">
                <Calendar size={14} className="mr-1" /> March 15, 2024
              </span> */}
            </div>
            <h1 className="text-4xl md:text-5xl font-serif text-zen-text dark:text-zen-dark-text mb-6 leading-tight">
              Имплантация зубов: как выбрать оптимальный вариант?
            </h1>
            <p className="text-xl text-zen-text/70 dark:text-zen-dark-text/70 leading-relaxed">
              Подробный гид, который поможет разобраться в видах имплантов и
              критериях выбора
            </p>
          </motion.div>
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-3xl mx-auto px-6 pb-24">
        <div className="prose prose-lg max-w-none">
          <p className="text-zen-text/80 dark:text-zen-dark-text/80 leading-relaxed mb-6">
            Современная стоматология предлагает множество решений для
            восстановления утраченных зубов, и имплантация занимает особое
            место. Это не просто эстетика — импланты напрямую влияют на качество
            жизни, здоровье десен и даже общее самочувствие. Но как выбрать
            оптимальный вариант среди множества технологий и материалов?
          </p>

          <h2 className="text-2xl font-serif text-zen-text dark:text-zen-dark-text mt-12 mb-6">
            Почему имплантация — лучший выбор
          </h2>
          <p className="text-zen-text/80 dark:text-zen-dark-text/80 leading-relaxed mb-4">
            Имплант имитирует корень зуба, обеспечивая прочную основу для
            коронки или протеза. В отличие от мостов или съемных конструкций,
            он:
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
          {/* <p className="text-zen-text/80 dark:text-zen-dark-text/80 leading-relaxed mb-4">
            Now that you know the mechanics, let's transform this into a
            mindfulness practice:
          </p> */}

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
              понимает, что успех зависит не только от хирургической техники, но
              и от его собственных привычек, он становится активным участником
              лечения.
            </p>
          </div>

          <h2 className="text-2xl font-serif text-zen-text dark:text-zen-dark-text mt-12 mb-6">
            Срок службы дентальных имплантов
          </h2>
          <p className="text-zen-text/80 dark:text-zen-dark-text/80 leading-relaxed mb-4">
            Импланты считаются одним из самых долговечных способов
            восстановления зубов. При правильной установке и уходе они могут
            служить 20–25 лет и даже дольше. Однако срок эксплуатации зависит от
            нескольких факторов.
          </p>
          <p className="text-zen-text/80 dark:text-zen-dark-text/80 leading-relaxed mb-6">
            В первую очередь — от качества самой системы: импланты
            премиум-класса из титана или циркония демонстрируют высокую
            надёжность и биосовместимость. Не менее важна работа врача: точная
            диагностика, грамотная установка и контроль на всех этапах лечения
            снижают риск осложнений.
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

          {/* <h2 className="text-2xl font-serif text-zen-text dark:text-zen-dark-text mt-12 mb-6">
            Пациент как активный участник процесса
          </h2>
          <p className="text-zen-text/80 dark:text-zen-dark-text/80 leading-relaxed mb-4">
            Имплантация — это совместный путь врача и пациента. Когда человек
            понимает, что успех зависит не только от хирургической техники, но и
            от его собственных привычек, он становится активным участником
            лечения.
          </p> */}

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

        {/* Author Bio */}
        {/* <div className="mt-16 pt-8 border-t border-zen-sky dark:border-zen-dark-border">
          <div className="flex items-start space-x-4">
            <div className="w-16 h-16 bg-zen-sage/20 rounded-full flex items-center justify-center shrink-0">
              <User size={32} className="text-zen-sage" />
            </div>
            <div>
              <h3 className="font-serif text-lg text-zen-text dark:text-zen-dark-text mb-2">
                Dr. Alexander Volkov
              </h3>
              <p className="text-sm text-zen-text/70 dark:text-zen-dark-text/70 leading-relaxed">
                Dr. Volkov combines advanced clinical expertise with a holistic
                approach to dentistry, believing that true oral health is
                inseparable from overall wellbeing.
              </p>
            </div>
          </div>
        </div> */}

        {/* CTA */}
        {/* <div className="mt-16 text-center bg-zen-sage/10 dark:bg-zen-dark-surface p-12 rounded-3xl">
          <h3 className="text-2xl font-serif text-zen-text dark:text-zen-dark-text mb-4">
            Ready to Experience Mindful Dentistry?
          </h3>
          <p className="text-zen-text/70 dark:text-zen-dark-text/70 mb-6">
            Book a consultation and discover how holistic care can transform
            your oral health.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-zen-text text-zen-white dark:bg-zen-dark-text dark:text-zen-dark-bg rounded-full font-medium hover:shadow-lg transition-all"
          >
            Book Consultation
          </Link>
        </div> */}
      </article>
    </div>
  );
};

export default MindBodyConnection;
