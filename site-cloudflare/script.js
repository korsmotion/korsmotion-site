// ============== TRANSLATIONS ==============
const translations = {
  ru: {
    'nav.services':'Услуги','nav.portfolio':'Работы','nav.development':'Разработка','nav.reviews':'Отзывы','nav.cta':'Связаться',
    'hero.badge':'Студия моушн-дизайна · Швейцария',
    'hero.title':'Движение,<br>которое <em>запоминается</em>',
    'hero.text':'Kors Motion — студия моушн-дизайна. Создаю анимацию логотипов, графику для брендов и веб-сайты, которые работают на результат.',
    'hero.btn1':'Обсудить проект','hero.btn2':'Смотреть работы',
    'services.label':'— Что я делаю','services.title':'Услуги, отточенные<br>до <em>совершенства</em>',
    'services.intro':'Шесть направлений, каждое с собственным подходом.',
    'services.detail':'Подробнее',
    'services.s1.title':'Анимация логотипа','services.s1.desc':'Превращаю статичный логотип в кинематографичную сцену.',
    'services.s1.f1':'Intro','services.s1.f2':'Outro','services.s1.f3':'Stinger',
    'services.s2.title':'Моушн-графика','services.s2.desc':'Анимированная инфографика, рекламные ролики, объясняющие видео.',
    'services.s2.f1':'Реклама','services.s2.f2':'Explainer','services.s2.f3':'Инфографика',
    'services.s3.title':'Графический дизайн','services.s3.desc':'Постеры, баннеры, обложки, рекламные макеты.',
    'services.s3.f1':'Постеры','services.s3.f2':'Баннеры','services.s3.f3':'Соцсети',
    'services.s4.title':'Разработка логотипов','services.s4.desc':'Логотип как фундамент бренда. От первого скетча до полного брендбука.',
    'services.s4.f1':'Логотип','services.s4.f2':'Брендбук','services.s4.f3':'Айдентика',
    'services.s5.title':'Создание сайтов','services.s5.desc':'Лендинги и многостраничные сайты, которые загружаются быстро.',
    'services.s5.f1':'Лендинг','services.s5.f2':'Многостр.',
    'services.s6.title':'Поддержка сайтов','services.s6.desc':'Регулярные обновления, защита от взлома, оптимизация скорости.',
    'services.s6.f1':'Обновления','services.s6.f2':'Безопасность','services.s6.f3':'Скорость',
    'portfolio.label':'— Избранные работы','portfolio.title':'Портфолио<br><em>в движении</em>',
    'portfolio.viewMore':'Смотреть подробнее','portfolio.empty':'Проекты скоро появятся',
    'cat.motion':'Моушн-дизайн','cat.graphic':'Графический дизайн','cat.web':'Веб','cat.app':'Разработка',
    'portfolio.viewAll':'Смотреть все','portfolio.of':'из',
    'dev.label':'— Разработка','dev.title':'Приложения<br><em>для Android TV</em>',
    'dev.intro':'Собственные проекты для большого экрана.','dev.link':'Подробнее',
    'portfolio.p1':'Apex Core — динамичная подача','portfolio.p2':'Soft Identity Series',
    'portfolio.p3':'Промо-ролик','portfolio.p4':'Студийный лендинг','portfolio.p5':'Premium Mark',
    'reviews.label':'— Что говорят клиенты','reviews.title':'Доверяют<br><em>профессионалу</em>',
    'reviews.t1':'«Сергей сделал анимацию нашего логотипа за неделю — выглядит как кинофильм.»',
    'reviews.t2':'«Профессионал высокого уровня. Понимает задачу с полуслова.»','reviews.t2role':'Маркетинг-директор',
    'reviews.t3':'«Идеальный результат и с первого раза. Никаких бесконечных правок.»','reviews.t3role':'Бренд-директор',
    'reviews.submitBtn':'Оставить отзыв →','reviews.formLabel':'— Отзыв','reviews.formTitle':'Оставить отзыв',
    'reviews.formName':'Имя *','reviews.formRole':'Должность / компания','reviews.formStars':'Оценка',
    'reviews.formText':'Ваш отзыв *','reviews.formSubmit':'Отправить',
    'reviews.success':'Спасибо! Отзыв будет проверен и опубликован.',
    'reviews.allBtn':'Все отзывы →','reviews.allTitle':'Все отзывы',
    'calculator.label':'— Калькулятор проекта','calculator.title':'Соберите свой<br><em>идеальный сайт</em>',
    'calculator.subtitle':'Выберите нужные модули — мы подготовим точную смету.',
    'calculator.btn':'Запросить предложение →','calculator.modalTitle':'Отличный выбор!',
    'calculator.modalText':'Вы выбрали {N} модулей. Оставьте контакты — Sergej Korsakov подготовит точную смету в течение 24 часов.',
    'calculator.name':'Имя *','calculator.email':'Email *','calculator.phone':'Телефон',
    'calculator.submit':'Отправить','calculator.success':'Спасибо! Мы свяжемся с вами в течение 24 часов.',
    'cta.label':'— Готовы начать?','cta.title':'Расскажите<br>о вашем <em>проекте</em>',
    'cta.text':'Опишите задачу — отвечу в течение дня. Бесплатная консультация перед стартом.',
    'cta.btn1':'Написать сообщение',
    'contact.label':'— Связаться','contact.title':'Расскажите о <em>проекте</em>',
    'contact.text':'Опишите задачу — отвечу в течение дня. Бесплатная консультация.',
    'contact.location':'Тургау, Швейцария','contact.hours':'',
    'form.name':'Имя','form.namePh':'Ваше имя','form.email':'Email',
    'form.type':'Тип проекта','form.typeSelect':'Выберите услугу','form.typeOther':'Другое',
    'form.budget':'Бюджет (опционально)','form.budgetSelect':'Выберите диапазон',
    'form.message':'Расскажите подробнее','form.messagePh':'Краткое описание задачи, сроки...',
    'form.submit':'Отправить заявку',
    'form.successTitle':'Сообщение отправлено!','form.successText':'Свяжусь с вами в течение 24 часов.','form.successClose':'Закрыть',
    'footer.contact':'Контакты','footer.impressum':'Импрессум',
    'sd.s1.title':'Анимация логотипа','sd.s1.subtitle':'Превращаю ваш логотип в живой, запоминающийся образ.',
    'sd.s1.what':'Что вы получаете','sd.s1.whatText':'Готовую анимацию в форматах MP4 и MOV (с альфа-каналом). Длительность 3-10 секунд.',
    'sd.s1.process':'Процесс работы',
    'sd.s1.step1':'Бриф и идея','sd.s1.step1text':'Обсуждаем характер вашего бренда. Подбираю стиль анимации.',
    'sd.s1.step2':'Сторибординг','sd.s1.step2text':'Готовлю 2-3 варианта концепции с черновыми набросками.',
    'sd.s1.step3':'Анимация','sd.s1.step3text':'Создаю анимацию в Adobe After Effects.',
    'sd.s1.step4':'Финал и экспорт','sd.s1.step4text':'Финальная отрисовка в 4K, экспорт во всех нужных форматах.',
    'sd.s1.price':'Стоимость от','sd.s1.priceValue':'500 CHF','sd.s1.priceNote':'Срок выполнения: 5-10 дней',
    'sd.s1.faq':'Частые вопросы',
    'sd.s1.q1':'Что нужно от меня?','sd.s1.a1':'Векторный файл логотипа (AI, EPS, SVG) и описание бренда.',
    'sd.s1.q2':'Сколько правок?','sd.s1.a2':'До трёх раундов правок включены в стоимость.',
    'sd.s1.q3':'Можно использовать на YouTube?','sd.s1.a3':'Да, полные права на использование.',
    'sd.s2.title':'Моушн-графика','sd.s2.subtitle':'Анимированные ролики и видео для рекламы и контента.',
    'sd.s2.what':'Что вы получаете','sd.s2.whatText':'Видеоролик 15-90 секунд в HD/4K со сценарием, графикой и звуком.',
    'sd.s2.process':'Процесс работы',
    'sd.s2.step1':'Бриф и сценарий','sd.s2.step1text':'Определяем цели ролика и пишем сценарий.',
    'sd.s2.step2':'Стиль и раскадровка','sd.s2.step2text':'Подбираем визуальный стиль и раскадровку.',
    'sd.s2.step3':'Анимация','sd.s2.step3text':'Поэтапная анимация всех сцен.',
    'sd.s2.step4':'Звук и финал','sd.s2.step4text':'Подбираем музыку и звуковые эффекты.',
    'sd.s2.price':'Стоимость от','sd.s2.priceValue':"1'500 CHF",'sd.s2.priceNote':'Срок выполнения: 2-4 недели',
    'sd.s2.faq':'Частые вопросы',
    'sd.s2.q1':'Включён ли голос диктора?','sd.s2.a1':'По запросу — могу подобрать voice-over.',
    'sd.s2.q2':'Свои персонажи?','sd.s2.a2':'Да, разрабатываю уникальных или использую ваших.',
    'sd.s2.q3':'Какая длительность?','sd.s2.a3':'Реклама 15-30 сек, explainer 60-90 сек.',
    'sd.s3.title':'Графический дизайн','sd.s3.subtitle':'Постеры, баннеры и рекламные макеты в премиальном стиле.',
    'sd.s3.what':'Что вы получаете','sd.s3.whatText':'Готовые макеты в исходниках (AI, PSD) и финальных форматах.',
    'sd.s3.process':'Процесс работы',
    'sd.s3.step1':'Бриф','sd.s3.step1text':'Изучаю задачу, целевую аудиторию и бренд.',
    'sd.s3.step2':'Концепции','sd.s3.step2text':'Готовлю 2-3 варианта дизайна.',
    'sd.s3.step3':'Доработка','sd.s3.step3text':'Дорабатываю выбранный вариант.',
    'sd.s3.step4':'Финал','sd.s3.step4text':'Подготовка финальных файлов для печати и веба.',
    'sd.s3.price':'Стоимость от','sd.s3.priceValue':'300 CHF','sd.s3.priceNote':'Срок выполнения: 3-7 дней',
    'sd.s3.faq':'Частые вопросы',
    'sd.s3.q1':'Готовите ли макеты для печати?','sd.s3.a1':'Да, с учётом всех требований типографий.',
    'sd.s3.q2':'Можно ли заказать комплект?','sd.s3.a2':'Да, делаю серии по сниженной цене.',
    'sd.s3.q3':'Стоковые изображения?','sd.s3.a3':'Использую лицензионные изображения.',
    'sd.s4.title':'Разработка логотипов','sd.s4.subtitle':'Создаю логотип, который станет фундаментом вашего бренда на годы.',
    'sd.s4.what':'Что вы получаете','sd.s4.whatText':'Логотип в векторе (AI, SVG, EPS), растровые версии, варианты для светлого и тёмного фона, мини-брендбук.',
    'sd.s4.process':'Процесс работы',
    'sd.s4.step1':'Бриф и исследование','sd.s4.step1text':'Изучаю ваш бизнес, конкурентов и аудиторию.',
    'sd.s4.step2':'Концепции','sd.s4.step2text':'Представляю 3-5 идей логотипа.',
    'sd.s4.step3':'Доработка','sd.s4.step3text':'Дорабатываем выбранный вариант.',
    'sd.s4.step4':'Брендбук','sd.s4.step4text':'Создаю мини-брендбук с правилами использования.',
    'sd.s4.price':'Стоимость от','sd.s4.priceValue':'800 CHF','sd.s4.priceNote':'Срок выполнения: 2-3 недели',
    'sd.s4.faq':'Частые вопросы',
    'sd.s4.q1':'Какие права я получаю?','sd.s4.a1':'Полные эксклюзивные права на коммерческое использование.',
    'sd.s4.q2':'Можно потом анимировать?','sd.s4.a2':'Да, есть пакет «логотип + анимация» со скидкой.',
    'sd.s4.q3':'Если ничего не нравится?','sd.s4.a3':'Делаю ещё один раунд концепций бесплатно.',
    'sd.s5.title':'Создание сайтов','sd.s5.subtitle':'Современные сайты, которые загружаются быстро и продают.',
    'sd.s5.what':'Что вы получаете','sd.s5.whatText':'Полностью готовый сайт, адаптивная вёрстка, мультиязычность по запросу, форма обратной связи, базовая SEO.',
    'sd.s5.process':'Процесс работы',
    'sd.s5.step1':'Бриф и структура','sd.s5.step1text':'Определяем цели сайта и структуру.',
    'sd.s5.step2':'Дизайн','sd.s5.step2text':'Создаю визуальный стиль и согласовываем макеты.',
    'sd.s5.step3':'Разработка','sd.s5.step3text':'Кодирую сайт с современными технологиями.',
    'sd.s5.step4':'Запуск','sd.s5.step4text':'Загружаю на хостинг, настраиваю домен и SSL.',
    'sd.s5.price':'Стоимость от','sd.s5.priceValue':"2'000 CHF",'sd.s5.priceNote':'Срок выполнения: 2-4 недели',
    'sd.s5.faq':'Частые вопросы',
    'sd.s5.q1':'Нужен ли свой хостинг?','sd.s5.a1':'Помогу выбрать. Рекомендую Infomaniak.',
    'sd.s5.q2':'Можно самому редактировать?','sd.s5.a2':'Да, могу установить CMS.',
    'sd.s5.q3':'Что входит в SEO?','sd.s5.a3':'Базовая оптимизация: meta-теги, скорость, semantic HTML.',
    'sd.s6.title':'Поддержка сайтов','sd.s6.subtitle':'Подписочный сервис: ваш сайт всегда работает, обновлён и защищён.',
    'sd.s6.what':'Что вы получаете','sd.s6.whatText':'Регулярные обновления, защиту от взлома, оптимизацию скорости, ежемесячные бэкапы, мелкие правки контента.',
    'sd.s6.process':'Что входит ежемесячно',
    'sd.s6.step1':'Обновления','sd.s6.step1text':'Обновление PHP, плагинов, библиотек, безопасности.',
    'sd.s6.step2':'Мониторинг','sd.s6.step2text':'Круглосуточный мониторинг доступности.',
    'sd.s6.step3':'Бэкапы','sd.s6.step3text':'Еженедельные резервные копии.',
    'sd.s6.step4':'Поддержка','sd.s6.step4text':'Мелкие правки контента до 2 часов в месяц.',
    'sd.s6.price':'Стоимость','sd.s6.priceValue':'80 CHF/мес','sd.s6.priceNote':'Подписка с возможностью отмены',
    'sd.s6.faq':'Частые вопросы',
    'sd.s6.q1':'Что если сайт сломается?','sd.s6.a1':'Восстанавливаю в течение 24 часов из бэкапа.',
    'sd.s6.q2':'Крупные доработки?','sd.s6.a2':'Крупные изменения отдельно по часовой ставке.',
    'sd.s6.q3':'Можно отменить?','sd.s6.a3':'Да, в любой месяц без штрафов.',
    'pd.p1.cat':'Logo Animation','pd.p1.title':'Apex Core — динамичная подача',
    'pd.p1.text':'Анимация логотипа для стартапа Apex Core — платформы для дизайнеров. Динамичная вспышка света раскрывает марку.',
    'pd.p1.client':'Apex Core','pd.p1.year':'2026','pd.p1.duration':'8 секунд',
    'pd.p2.cat':'Branding','pd.p2.title':'Soft Identity Series',
    'pd.p2.text':'Серия мягких айдентик для wellness-брендов. Пастельная палитра и геометрия в основе.',
    'pd.p2.client':'Студийный проект','pd.p2.year':'2025','pd.p2.duration':'Серия',
    'pd.p3.cat':'Motion','pd.p3.title':'Промо-ролик',
    'pd.p3.text':'Динамичный промо-ролик для технологического продукта.',
    'pd.p3.client':'Tech Brand','pd.p3.year':'2025','pd.p3.duration':'30 секунд',
    'pd.p4.cat':'Web Design','pd.p4.title':'Студийный лендинг',
    'pd.p4.text':'Лендинг-страница для дизайн-студии с анимациями и формой захвата лидов.',
    'pd.p4.client':'Design Studio','pd.p4.year':'2025','pd.p4.duration':'4 недели',
    'pd.p5.cat':'Identity','pd.p5.title':'Premium Mark',
    'pd.p5.text':'Логотип для премиум-бренда с акцентом на типографику и минимализм.',
    'pd.p5.client':'Lifestyle Brand','pd.p5.year':'2024','pd.p5.duration':'3 недели',
    'pd.client':'Клиент','pd.year':'Год','pd.duration':'Срок','pd.cta':'Заказать похожее'
  },
  en: {
    'nav.services':'Services','nav.portfolio':'Work','nav.development':'Development','nav.reviews':'Testimonials','nav.cta':'Contact',
    'hero.badge':'Motion Design Studio · Switzerland',
    'hero.title':'Motion<br>that <em>resonates</em>',
    'hero.text':'Kors Motion is a premium motion design studio. I craft logo animations, brand graphics, and high-performance websites that deliver real results.',
    'hero.btn1':'Discuss a project','hero.btn2':'View portfolio',
    'services.label':'— Expertise','services.title':'Services refined<br>to <em>perfection</em>',
    'services.intro':'Six disciplines, one standard of excellence.',
    'services.detail':'Learn more',
    'services.s1.title':'Logo Animation','services.s1.desc':'Transforming your static logo into a cinematic experience.',
    'services.s1.f1':'Intro','services.s1.f2':'Outro','services.s1.f3':'Stinger',
    'services.s2.title':'Motion Graphics','services.s2.desc':'Animated infographics, commercial spots, and explainer videos.',
    'services.s2.f1':'Commercials','services.s2.f2':'Explainers','services.s2.f3':'Infographics',
    'services.s3.title':'Graphic Design','services.s3.desc':'Posters, banners, covers, and premium advertising layouts.',
    'services.s3.f1':'Posters','services.s3.f2':'Banners','services.s3.f3':'Social Media',
    'services.s4.title':'Logo Design','services.s4.desc':'A logo as the foundation of your brand. From first sketch to a complete brand book.',
    'services.s4.f1':'Logo','services.s4.f2':'Brand book','services.s4.f3':'Identity',
    'services.s5.title':'Web Development','services.s5.desc':'Modern landing pages and complex websites built for speed and conversion.',
    'services.s5.f1':'Landing page','services.s5.f2':'Multi-page',
    'services.s6.title':'Website Support','services.s6.desc':'Regular updates, security monitoring, and performance optimization.',
    'services.s6.f1':'Updates','services.s6.f2':'Security','services.s6.f3':'Performance',
    'portfolio.label':'— Selected Work','portfolio.title':'Portfolio<br><em>in motion</em>',
    'portfolio.viewMore':'View details','portfolio.empty':'Projects coming soon',
    'cat.motion':'Motion Design','cat.graphic':'Graphic Design','cat.web':'Web','cat.app':'App Dev',
    'portfolio.viewAll':'View all','portfolio.of':'of',
    'dev.label':'— Development','dev.title':'Apps<br><em>for Android TV</em>',
    'dev.intro':'Own projects for the big screen.','dev.link':'Learn more',
    'portfolio.p1':'Apex Core — Dynamic reveal','portfolio.p2':'Soft Identity Series',
    'portfolio.p3':'Promo Reel','portfolio.p4':'Studio Landing Page','portfolio.p5':'Premium Mark',
    'reviews.label':'— Client feedback','reviews.title':'Trusted by<br><em>professionals</em>',
    'reviews.t1':'"Sergej animated our logo in just a week — it looks like a cinematic intro."',
    'reviews.t2':'"A true professional. Understands the brief instantly."','reviews.t2role':'Marketing Director',
    'reviews.t3':'"Perfect execution on the first try. No endless revision loops."','reviews.t3role':'Brand Director',
    'reviews.submitBtn':'Leave a review →','reviews.formLabel':'— Review','reviews.formTitle':'Leave a review',
    'reviews.formName':'Name *','reviews.formRole':'Role / company','reviews.formStars':'Rating',
    'reviews.formText':'Your review *','reviews.formSubmit':'Submit',
    'reviews.success':'Thank you! Your review will be checked and published.',
    'reviews.allBtn':'All reviews →','reviews.allTitle':'All reviews',
    'calculator.label':'— Project calculator','calculator.title':'Build your<br><em>perfect website</em>',
    'calculator.subtitle':'Select the modules you need — we will prepare an accurate quote.',
    'calculator.btn':'Request a quote →','calculator.modalTitle':'Great choice!',
    'calculator.modalText':'You selected {N} modules. Leave your contacts — Sergej Korsakov will prepare an accurate quote within 24 hours.',
    'calculator.name':'Name *','calculator.email':'Email *','calculator.phone':'Phone',
    'calculator.submit':'Submit','calculator.success':'Thank you! We will contact you within 24 hours.',
    'cta.label':'— Ready to start?','cta.title':'Tell me about<br>your <em>project</em>',
    'cta.text':"Describe your vision — I'll get back to you within 24 hours.",
    'cta.btn1':'Send message',
    'contact.label':'— Get in touch','contact.title':'Tell me about your <em>project</em>',
    'contact.text':'Free initial consultation for your next endeavor.',
    'contact.location':'Thurgau, Switzerland','contact.hours':'',
    'form.name':'Name','form.namePh':'Your name','form.email':'Email',
    'form.type':'Project type','form.typeSelect':'Select a service','form.typeOther':'Other',
    'form.budget':'Budget (optional)','form.budgetSelect':'Select range',
    'form.message':'Project details','form.messagePh':'Brief description, timeline, goals...',
    'form.submit':'Send inquiry',
    'form.successTitle':'Message sent!','form.successText':"I will contact you within 24 hours.",'form.successClose':'Close',
    'footer.contact':'Contact','footer.impressum':'Legal Notice',
    'sd.s1.title':'Logo Animation','sd.s1.subtitle':'I turn your logo into a living, memorable image.',
    'sd.s1.what':'What you get','sd.s1.whatText':'Ready animation in MP4 and MOV (with alpha channel). Duration 3-10 seconds.',
    'sd.s1.process':'Workflow',
    'sd.s1.step1':'Brief and idea','sd.s1.step1text':'We discuss your brand character.',
    'sd.s1.step2':'Storyboarding','sd.s1.step2text':'2-3 concept variants with sketches.',
    'sd.s1.step3':'Animation','sd.s1.step3text':'Animation in Adobe After Effects.',
    'sd.s1.step4':'Final and export','sd.s1.step4text':'Final 4K rendering, export in all formats.',
    'sd.s1.price':'Starting at','sd.s1.priceValue':'500 CHF','sd.s1.priceNote':'Lead time: 5-10 days',
    'sd.s1.faq':'FAQ',
    'sd.s1.q1':'What do you need from me?','sd.s1.a1':'Vector logo file (AI, EPS, SVG) and brand description.',
    'sd.s1.q2':'How many revisions?','sd.s1.a2':'Up to three rounds of revisions included.',
    'sd.s1.q3':'Can I use it on YouTube?','sd.s1.a3':'Yes, full usage rights included.',
    'sd.s2.title':'Motion Graphics','sd.s2.subtitle':'Animated videos for advertising and content.',
    'sd.s2.what':'What you get','sd.s2.whatText':'Video 15-90 seconds in HD/4K. Script, graphics, animation, sound.',
    'sd.s2.process':'Workflow',
    'sd.s2.step1':'Brief and script','sd.s2.step1text':'We define video goals and write the script.',
    'sd.s2.step2':'Style and storyboard','sd.s2.step2text':'Choose visual style and prepare storyboard.',
    'sd.s2.step3':'Animation','sd.s2.step3text':'Step-by-step animation.',
    'sd.s2.step4':'Sound and final','sd.s2.step4text':'Music and sound effects, final render.',
    'sd.s2.price':'Starting at','sd.s2.priceValue':"1,500 CHF",'sd.s2.priceNote':'Lead time: 2-4 weeks',
    'sd.s2.faq':'FAQ',
    'sd.s2.q1':'Voice-over included?','sd.s2.a1':'On request — professional voice-over available.',
    'sd.s2.q2':'Can I use my characters?','sd.s2.a2':'Yes, develop unique or use yours.',
    'sd.s2.q3':'Optimal duration?','sd.s2.a3':'Ads: 15-30 sec. Explainer: 60-90 sec.',
    'sd.s3.title':'Graphic Design','sd.s3.subtitle':'Posters, banners, and ad layouts in premium style.',
    'sd.s3.what':'What you get','sd.s3.whatText':'Source files (AI, PSD) and final formats (PDF, PNG/JPG).',
    'sd.s3.process':'Workflow',
    'sd.s3.step1':'Brief','sd.s3.step1text':'I study the task, audience, and brand.',
    'sd.s3.step2':'Concepts','sd.s3.step2text':'2-3 design variants.',
    'sd.s3.step3':'Refinement','sd.s3.step3text':'Refining the chosen variant.',
    'sd.s3.step4':'Final','sd.s3.step4text':'Final files for print and web.',
    'sd.s3.price':'Starting at','sd.s3.priceValue':'300 CHF','sd.s3.priceNote':'Lead time: 3-7 days',
    'sd.s3.faq':'FAQ',
    'sd.s3.q1':'Print-ready files?','sd.s3.a1':'Yes, with all printing requirements.',
    'sd.s3.q2':'Can I order a set?','sd.s3.a2':'Yes, series at reduced price.',
    'sd.s3.q3':'Stock images included?','sd.s3.a3':'Yes, licensed images.',
    'sd.s4.title':'Logo Design','sd.s4.subtitle':'A logo that becomes your brand foundation for years.',
    'sd.s4.what':'What you get','sd.s4.whatText':'Vector logo (AI, SVG, EPS), raster versions, light/dark variants, mini-brandbook.',
    'sd.s4.process':'Workflow',
    'sd.s4.step1':'Brief and research','sd.s4.step1text':'Study your business, competitors, audience.',
    'sd.s4.step2':'Concepts','sd.s4.step2text':'3-5 logo ideas in B&W.',
    'sd.s4.step3':'Refinement','sd.s4.step3text':'Refining chosen variant with color.',
    'sd.s4.step4':'Brandbook','sd.s4.step4text':'Mini-brandbook with usage rules.',
    'sd.s4.price':'Starting at','sd.s4.priceValue':'800 CHF','sd.s4.priceNote':'Lead time: 2-3 weeks',
    'sd.s4.faq':'FAQ',
    'sd.s4.q1':'What rights do I get?','sd.s4.a1':'Full exclusive rights for commercial use.',
    'sd.s4.q2':'Can I animate it later?','sd.s4.a2':'Yes, "logo + animation" bundle with discount.',
    'sd.s4.q3':"What if I don't like any?",'sd.s4.a3':'Another concept round for free.',
    'sd.s5.title':'Website Creation','sd.s5.subtitle':'Modern websites: fast, premium, sales-driven.',
    'sd.s5.what':'What you get','sd.s5.whatText':'Complete website on your hosting, responsive design, multilingual on request, contact form, basic SEO.',
    'sd.s5.process':'Workflow',
    'sd.s5.step1':'Brief and structure','sd.s5.step1text':'Define site goals and structure.',
    'sd.s5.step2':'Design','sd.s5.step2text':'Create visual style and approve mockups.',
    'sd.s5.step3':'Development','sd.s5.step3text':'Code with modern technologies.',
    'sd.s5.step4':'Launch','sd.s5.step4text':'Upload to hosting, configure domain and SSL.',
    'sd.s5.price':'Starting at','sd.s5.priceValue':"2,000 CHF",'sd.s5.priceNote':'Lead time: 2-4 weeks',
    'sd.s5.faq':'FAQ',
    'sd.s5.q1':'Need own hosting?','sd.s5.a1':"Help to choose. Recommend Swiss Infomaniak.",
    'sd.s5.q2':'Can I edit it myself?','sd.s5.a2':'Yes, CMS via admin panel.',
    'sd.s5.q3':"What's in SEO?",'sd.s5.a3':'Basic: meta-tags, speed, semantic HTML.',
    'sd.s6.title':'Website Support','sd.s6.subtitle':'Subscription: your site always updated and protected.',
    'sd.s6.what':'What you get','sd.s6.whatText':'Updates, hack protection, speed optimization, monthly backups, minor edits.',
    'sd.s6.process':'Monthly inclusions',
    'sd.s6.step1':'Updates','sd.s6.step1text':'PHP, plugins, libraries, security.',
    'sd.s6.step2':'Monitoring','sd.s6.step2text':'24/7 availability monitoring.',
    'sd.s6.step3':'Backups','sd.s6.step3text':'Weekly backups to secure storage.',
    'sd.s6.step4':'Support','sd.s6.step4text':'Minor edits up to 2 hours per month.',
    'sd.s6.price':'Cost','sd.s6.priceValue':'80 CHF/month','sd.s6.priceNote':'Cancel anytime',
    'sd.s6.faq':'FAQ',
    'sd.s6.q1':'If site breaks?','sd.s6.a1':'Restore within 24 hours from backup.',
    'sd.s6.q2':'Major changes?','sd.s6.a2':'Major changes at hourly rate.',
    'sd.s6.q3':'Can I cancel?','sd.s6.a3':'Yes, anytime without penalties.',
    'pd.p1.cat':'Logo Animation','pd.p1.title':'Apex Core — dynamic delivery',
    'pd.p1.text':'Logo animation for Apex Core startup — designer platform.',
    'pd.p1.client':'Apex Core','pd.p1.year':'2026','pd.p1.duration':'8 seconds',
    'pd.p2.cat':'Branding','pd.p2.title':'Soft Identity Series',
    'pd.p2.text':'Series of soft identities for wellness brands.',
    'pd.p2.client':'Studio Project','pd.p2.year':'2025','pd.p2.duration':'Series',
    'pd.p3.cat':'Motion','pd.p3.title':'Promo Reel',
    'pd.p3.text':'Dynamic promo reel for tech product.',
    'pd.p3.client':'Tech Brand','pd.p3.year':'2025','pd.p3.duration':'30 seconds',
    'pd.p4.cat':'Web Design','pd.p4.title':'Studio Landing',
    'pd.p4.text':'Landing page for design studio with animations.',
    'pd.p4.client':'Design Studio','pd.p4.year':'2025','pd.p4.duration':'4 weeks',
    'pd.p5.cat':'Identity','pd.p5.title':'Premium Mark',
    'pd.p5.text':'Logo for premium brand emphasizing typography.',
    'pd.p5.client':'Lifestyle Brand','pd.p5.year':'2024','pd.p5.duration':'3 weeks',
    'pd.client':'Client','pd.year':'Year','pd.duration':'Duration','pd.cta':'Order similar'
  },
  de: {
    'nav.services':'Services','nav.portfolio':'Portfolio','nav.development':'Entwicklung','nav.reviews':'Referenzen','nav.cta':'Kontakt',
    'hero.badge':'Motion Design Studio · Schweiz',
    'hero.title':'Bewegung, die<br><em>eindruckt</em>',
    'hero.text':'Kors Motion ist Ihr Spezialist für Motion Design. Ich erstelle Logo-Animationen, Markengrafiken und Websites mit messbarem Erfolg.',
    'hero.btn1':'Projekt anfragen','hero.btn2':'Portfolio ansehen',
    'services.label':'— Mein Angebot','services.title':'Services, bis zur<br><em>Perfektion</em> veredelt',
    'services.intro':'Sechs Kernbereiche, ein Ziel: Exzellenz in jedem Frame.',
    'services.detail':'Details',
    'services.s1.title':'Logo-Animation','services.s1.desc':'Ich erwecke Ihr statisches Logo als cineastisches Erlebnis zum Leben.',
    'services.s1.f1':'Intro','services.s1.f2':'Outro','services.s1.f3':'Stinger',
    'services.s2.title':'Motion Graphics','services.s2.desc':'Animierte Infografiken, Werbespots und Erklärvideos.',
    'services.s2.f1':'Ads','services.s2.f2':'Explainer','services.s2.f3':'Infografiken',
    'services.s3.title':'Grafikdesign','services.s3.desc':'Poster, Banner, Cover und Werbelayouts im Premium-Stil.',
    'services.s3.f1':'Poster','services.s3.f2':'Banner','services.s3.f3':'Social Media',
    'services.s4.title':'Logo-Design','services.s4.desc':'Ein Logo als Fundament Ihrer Marke. Vom ersten Entwurf bis zum Brandbook.',
    'services.s4.f1':'Logo','services.s4.f2':'Brandbook','services.s4.f3':'Identity',
    'services.s5.title':'Webentwicklung','services.s5.desc':'Moderne Landingpages und komplexe Websites mit Fokus auf Performance.',
    'services.s5.f1':'Landingpage','services.s5.f2':'Multi-page',
    'services.s6.title':'Website-Support','services.s6.desc':'Regelmässige Updates, Sicherheit und Performance-Optimierung.',
    'services.s6.f1':'Updates','services.s6.f2':'Sicherheit','services.s6.f3':'Speed',
    'portfolio.label':'— Ausgewählte Arbeiten','portfolio.title':'Portfolio<br><em>in Bewegung</em>',
    'portfolio.viewMore':'Details ansehen','portfolio.empty':'Projekte folgen bald',
    'cat.motion':'Motion Design','cat.graphic':'Grafik Design','cat.web':'Web','cat.app':'App Dev',
    'portfolio.viewAll':'Alle ansehen','portfolio.of':'von',
    'dev.label':'— Entwicklung','dev.title':'Apps<br><em>für Android TV</em>',
    'dev.intro':'Eigene Projekte für den grossen Bildschirm.','dev.link':'Mehr erfahren',
    'portfolio.p1':'Apex Core — Dynamische Präsentation','portfolio.p2':'Soft Identity Series',
    'portfolio.p3':'Promo Reel','portfolio.p4':'Studio Landingpage','portfolio.p5':'Premium Mark',
    'reviews.label':'— Kundenstimmen','reviews.title':'Vertrauen in<br><em>Professionalität</em>',
    'reviews.t1':'«Sergej hat unsere Logo-Animation in einer Woche erstellt — sieht aus wie ein Kinofilm.»',
    'reviews.t2':'«Ein Profi auf höchstem Niveau. Versteht die Aufgabe auf Anhieb.»','reviews.t2role':'Marketing Director',
    'reviews.t3':'«Ideales Ergebnis vom ersten Versuch. Keine endlosen Korrekturen.»','reviews.t3role':'Brand Director',
    'reviews.submitBtn':'Bewertung abgeben →','reviews.formLabel':'— Bewertung','reviews.formTitle':'Bewertung abgeben',
    'reviews.formName':'Name *','reviews.formRole':'Position / Unternehmen','reviews.formStars':'Bewertung',
    'reviews.formText':'Ihre Bewertung *','reviews.formSubmit':'Senden',
    'reviews.success':'Danke! Ihre Bewertung wird geprüft und veröffentlicht.',
    'reviews.allBtn':'Alle Bewertungen →','reviews.allTitle':'Alle Bewertungen',
    'calculator.label':'— Projekt-Kalkulator','calculator.title':'Stellen Sie Ihre<br><em>perfekte Website</em> zusammen',
    'calculator.subtitle':'Wählen Sie die gewünschten Module — wir erstellen ein genaues Angebot.',
    'calculator.btn':'Angebot anfordern →','calculator.modalTitle':'Ausgezeichnete Wahl!',
    'calculator.modalText':'Sie haben {N} Module gewählt. Hinterlassen Sie Ihre Kontaktdaten — Sergej Korsakov erstellt innerhalb von 24 Stunden ein genaues Angebot.',
    'calculator.name':'Name *','calculator.email':'E-Mail *','calculator.phone':'Telefon',
    'calculator.submit':'Senden','calculator.success':'Danke! Wir melden uns innerhalb von 24 Stunden.',
    'cta.label':'— Bereit für den Start?','cta.title':'Erzählen Sie mir von<br>Ihrem <em>Projekt</em>',
    'cta.text':'Beschreiben Sie Ihre Vision – ich antworte innerhalb von 24 Stunden.',
    'cta.btn1':'Nachricht senden',
    'contact.label':'— Kontakt','contact.title':'Erzählen Sie von Ihrem <em>Projekt</em>',
    'contact.text':'Kostenlose Erstberatung für Ihr nächstes Vorhaben.',
    'contact.location':'Thurgau, Schweiz','contact.hours':'',
    'form.name':'Name','form.namePh':'Ihr Name','form.email':'E-Mail',
    'form.type':'Projekttyp','form.typeSelect':'Service auswählen','form.typeOther':'Sonstiges',
    'form.budget':'Budget (optional)','form.budgetSelect':'Bereich wählen',
    'form.message':'Details zum Projekt','form.messagePh':'Kurze Beschreibung, Ziele, Termine...',
    'form.submit':'Anfrage senden',
    'form.successTitle':'Nachricht gesendet!','form.successText':'Ich melde mich innerhalb von 24 Stunden bei Ihnen.','form.successClose':'Schliessen',
    'footer.contact':'Kontakt','footer.impressum':'Impressum',
    'sd.s1.title':'Logo-Animation','sd.s1.subtitle':'Ich verwandle Ihr Logo in ein lebendiges Bild.',
    'sd.s1.what':'Was Sie erhalten','sd.s1.whatText':'Fertige Animation in MP4 und MOV. Dauer 3-10 Sekunden.',
    'sd.s1.process':'Arbeitsprozess',
    'sd.s1.step1':'Briefing und Idee','sd.s1.step1text':'Wir besprechen Ihren Markencharakter.',
    'sd.s1.step2':'Storyboard','sd.s1.step2text':'2-3 Konzeptvarianten.',
    'sd.s1.step3':'Animation','sd.s1.step3text':'Animation in Adobe After Effects.',
    'sd.s1.step4':'Finale','sd.s1.step4text':'Finales 4K-Rendering.',
    'sd.s1.price':'Ab','sd.s1.priceValue':'500 CHF','sd.s1.priceNote':'Bearbeitungszeit: 5-10 Tage',
    'sd.s1.faq':'FAQ',
    'sd.s1.q1':'Was brauche ich?','sd.s1.a1':'Vektor-Logo (AI, EPS, SVG) und Markenbeschreibung.',
    'sd.s1.q2':'Wie viele Korrekturen?','sd.s1.a2':'Bis zu drei Korrekturrunden inklusive.',
    'sd.s1.q3':'Auf YouTube nutzbar?','sd.s1.a3':'Ja, volle Nutzungsrechte.',
    'sd.s2.title':'Motion Graphics','sd.s2.subtitle':'Animierte Videos für Werbung und Content.',
    'sd.s2.what':'Was Sie erhalten','sd.s2.whatText':'Video 15-90 Sekunden in HD/4K.',
    'sd.s2.process':'Arbeitsprozess',
    'sd.s2.step1':'Briefing und Skript','sd.s2.step1text':'Ziele und Skript definieren.',
    'sd.s2.step2':'Stil und Storyboard','sd.s2.step2text':'Visueller Stil und Storyboard.',
    'sd.s2.step3':'Animation','sd.s2.step3text':'Stufenweise Animation aller Szenen.',
    'sd.s2.step4':'Sound und Finale','sd.s2.step4text':'Musik, Soundeffekte, Rendering.',
    'sd.s2.price':'Ab','sd.s2.priceValue':"1'500 CHF",'sd.s2.priceNote':'Bearbeitungszeit: 2-4 Wochen',
    'sd.s2.faq':'FAQ',
    'sd.s2.q1':'Voice-Over inkl.?','sd.s2.a1':'Auf Anfrage — professioneller Voice-Over.',
    'sd.s2.q2':'Eigene Charaktere?','sd.s2.a2':'Ja, ich entwickle einzigartige.',
    'sd.s2.q3':'Optimale Dauer?','sd.s2.a3':'Werbung: 15-30 Sek. Explainer: 60-90 Sek.',
    'sd.s3.title':'Grafikdesign','sd.s3.subtitle':'Poster, Banner und Werbelayouts im Premium-Stil.',
    'sd.s3.what':'Was Sie erhalten','sd.s3.whatText':'Quelldateien und Endformate.',
    'sd.s3.process':'Arbeitsprozess',
    'sd.s3.step1':'Briefing','sd.s3.step1text':'Aufgabe und Marke studieren.',
    'sd.s3.step2':'Konzepte','sd.s3.step2text':'2-3 Designvarianten.',
    'sd.s3.step3':'Verfeinerung','sd.s3.step3text':'Verfeinerung der gewählten Variante.',
    'sd.s3.step4':'Finale','sd.s3.step4text':'Finale Dateien für Druck und Web.',
    'sd.s3.price':'Ab','sd.s3.priceValue':'300 CHF','sd.s3.priceNote':'Bearbeitungszeit: 3-7 Tage',
    'sd.s3.faq':'FAQ',
    'sd.s3.q1':'Druckfertige Dateien?','sd.s3.a1':'Ja, mit Beschnitt, CMYK, Auflösung.',
    'sd.s3.q2':'Set bestellen?','sd.s3.a2':'Ja, Serien zum reduzierten Preis.',
    'sd.s3.q3':'Stockfotos inkl.?','sd.s3.a3':'Ja, lizenzierte Bilder.',
    'sd.s4.title':'Logo-Design','sd.s4.subtitle':'Logo als Fundament Ihrer Marke.',
    'sd.s4.what':'Was Sie erhalten','sd.s4.whatText':'Vektor-Logo, Rasterversionen, Hell/Dunkel-Varianten.',
    'sd.s4.process':'Arbeitsprozess',
    'sd.s4.step1':'Briefing & Recherche','sd.s4.step1text':'Geschäft und Konkurrenten studieren.',
    'sd.s4.step2':'Konzepte','sd.s4.step2text':'3-5 Logo-Ideen.',
    'sd.s4.step3':'Verfeinerung','sd.s4.step3text':'Verfeinerung mit Farbe.',
    'sd.s4.step4':'Brandbook','sd.s4.step4text':'Mini-Brandbook.',
    'sd.s4.price':'Ab','sd.s4.priceValue':'800 CHF','sd.s4.priceNote':'Bearbeitungszeit: 2-3 Wochen',
    'sd.s4.faq':'FAQ',
    'sd.s4.q1':'Welche Rechte?','sd.s4.a1':'Volle exklusive Rechte.',
    'sd.s4.q2':'Später animieren?','sd.s4.a2':'Ja, Bundle mit Rabatt.',
    'sd.s4.q3':'Wenn nichts gefällt?','sd.s4.a3':'Weitere Konzeptrunde gratis.',
    'sd.s5.title':'Webseiten-Erstellung','sd.s5.subtitle':'Moderne Websites: schnell, premium, verkaufsstark.',
    'sd.s5.what':'Was Sie erhalten','sd.s5.whatText':'Komplette Website, responsive Design, mehrsprachig auf Anfrage.',
    'sd.s5.process':'Arbeitsprozess',
    'sd.s5.step1':'Briefing & Struktur','sd.s5.step1text':'Ziele und Struktur definieren.',
    'sd.s5.step2':'Design','sd.s5.step2text':'Visueller Stil, Mockups freigeben.',
    'sd.s5.step3':'Entwicklung','sd.s5.step3text':'Coding mit modernen Technologien.',
    'sd.s5.step4':'Launch','sd.s5.step4text':'Hosting, Domain, SSL einrichten.',
    'sd.s5.price':'Ab','sd.s5.priceValue':"2'000 CHF",'sd.s5.priceNote':'Bearbeitungszeit: 2-4 Wochen',
    'sd.s5.faq':'FAQ',
    'sd.s5.q1':'Eigenes Hosting nötig?','sd.s5.a1':'Empfehle Schweizer Infomaniak.',
    'sd.s5.q2':'Selbst editieren?','sd.s5.a2':'Ja, CMS möglich.',
    'sd.s5.q3':'Was umfasst SEO?','sd.s5.a3':'Basis: Meta-Tags, Speed, semantisches HTML.',
    'sd.s6.title':'Webseiten-Support','sd.s6.subtitle':'Abo: Ihre Website immer aktualisiert.',
    'sd.s6.what':'Was Sie erhalten','sd.s6.whatText':'Updates, Hack-Schutz, Speed, monatliche Backups.',
    'sd.s6.process':'Monatlich enthalten',
    'sd.s6.step1':'Updates','sd.s6.step1text':'PHP, Plugins, Sicherheit.',
    'sd.s6.step2':'Monitoring','sd.s6.step2text':'24/7 Monitoring.',
    'sd.s6.step3':'Backups','sd.s6.step3text':'Wöchentliche Backups.',
    'sd.s6.step4':'Support','sd.s6.step4text':'Kleine Edits bis 2h/Monat.',
    'sd.s6.price':'Kosten','sd.s6.priceValue':'80 CHF/Monat','sd.s6.priceNote':'Jederzeit kündbar',
    'sd.s6.faq':'FAQ',
    'sd.s6.q1':'Wenn Site kaputt geht?','sd.s6.a1':'Wiederherstellung in 24h.',
    'sd.s6.q2':'Grosse Änderungen?','sd.s6.a2':'Grosse Änderungen separat.',
    'sd.s6.q3':'Kann ich kündigen?','sd.s6.a3':'Ja, jeden Monat ohne Strafgebühren.',
    'pd.p1.cat':'Logo Animation','pd.p1.title':'Apex Core — dynamische Präsentation',
    'pd.p1.text':'Logo-Animation für Apex Core Startup.',
    'pd.p1.client':'Apex Core','pd.p1.year':'2026','pd.p1.duration':'8 Sekunden',
    'pd.p2.cat':'Branding','pd.p2.title':'Soft Identity Series',
    'pd.p2.text':'Serie sanfter Identitäten für Wellness-Marken.',
    'pd.p2.client':'Studio-Projekt','pd.p2.year':'2025','pd.p2.duration':'Serie',
    'pd.p3.cat':'Motion','pd.p3.title':'Promo Reel',
    'pd.p3.text':'Dynamischer Promo-Reel für Tech-Produkt.',
    'pd.p3.client':'Tech Brand','pd.p3.year':'2025','pd.p3.duration':'30 Sekunden',
    'pd.p4.cat':'Web Design','pd.p4.title':'Studio Landing',
    'pd.p4.text':'Landingpage für Designstudio mit Animationen.',
    'pd.p4.client':'Design Studio','pd.p4.year':'2025','pd.p4.duration':'4 Wochen',
    'pd.p5.cat':'Identity','pd.p5.title':'Premium Mark',
    'pd.p5.text':'Logo für Premium-Marke.',
    'pd.p5.client':'Lifestyle Brand','pd.p5.year':'2024','pd.p5.duration':'3 Wochen',
    'pd.client':'Kunde','pd.year':'Jahr','pd.duration':'Dauer','pd.cta':'Ähnliches bestellen'
  },
  it: {
    'nav.services':'Servizi','nav.portfolio':'Portfolio','nav.development':'Sviluppo','nav.reviews':'Dicono di me','nav.cta':'Contatti',
    'hero.badge':'Studio di Motion Design · Svizzera',
    'hero.title':'Un movimento<br>che <em>lascia il segno</em>',
    'hero.text':'Kors Motion è uno studio specializzato in motion design. Realizzo animazioni di loghi, grafiche per brand e siti web ad alte prestazioni.',
    'hero.btn1':'Parliamo del progetto','hero.btn2':'Vedi il portfolio',
    'services.label':'— Competenze','services.title':'Servizi perfezionati<br>nei <em>minimi dettagli</em>',
    'services.intro':'Sei discipline, un unico standard di eccellenza.',
    'services.detail':'Scopri di più',
    'services.s1.title':'Animazione Logo','services.s1.desc':'Trasformo il tuo logo statico in una vera e propria scena cinematografica.',
    'services.s1.f1':'Intro','services.s1.f2':'Outro','services.s1.f3':'Stinger',
    'services.s2.title':'Motion Graphics','services.s2.desc':'Infografiche animate, spot pubblicitari e video esplicativi.',
    'services.s2.f1':'Pubblicità','services.s2.f2':'Video esplicativi','services.s2.f3':'Infografiche',
    'services.s3.title':'Graphic Design','services.s3.desc':'Poster, banner, copertine e layout pubblicitari premium.',
    'services.s3.f1':'Poster','services.s3.f2':'Banner','services.s3.f3':'Social Media',
    'services.s4.title':'Design del Logo','services.s4.desc':'Il logo come fondamento del tuo brand. Dal primo schizzo al brandbook completo.',
    'services.s4.f1':'Logo','services.s4.f2':'Brandbook','services.s4.f3':'Identità',
    'services.s5.title':'Sviluppo Web','services.s5.desc':'Landing page e siti web moderni, ottimizzati per la velocità e la conversione.',
    'services.s5.f1':'Landing page','services.s5.f2':'Sito multi-pagina',
    'services.s6.title':'Supporto Web','services.s6.desc':'Aggiornamenti regolari, monitoraggio della sicurezza e ottimizzazione.',
    'services.s6.f1':'Aggiornamenti','services.s6.f2':'Sicurezza','services.s6.f3':'Performance',
    'portfolio.label':'— Lavori selezionati','portfolio.title':'Portfolio<br><em>in movimento</em>',
    'portfolio.viewMore':'Vedi i dettagli','portfolio.empty':'Progetti in arrivo',
    'cat.motion':'Motion Design','cat.graphic':'Grafica','cat.web':'Web','cat.app':'Sviluppo',
    'portfolio.viewAll':'Vedi tutto','portfolio.of':'di',
    'dev.label':'— Sviluppo','dev.title':'App<br><em>per Android TV</em>',
    'dev.intro':'Progetti propri per il grande schermo.','dev.link':'Scopri di più',
    'portfolio.p1':'Apex Core — Presentazione dinamica','portfolio.p2':'Soft Identity Series',
    'portfolio.p3':'Promo Reel','portfolio.p4':'Landing page studio','portfolio.p5':'Premium Mark',
    'reviews.label':'— Feedback dei clienti','reviews.title':'La fiducia di<br>un <em>professionista</em>',
    'reviews.t1':'«Sergej ha animato il nostro logo in una sola settimana — sembra l\'intro di un film.»',
    'reviews.t2':'«Un vero professionista. Comprende il brief all\'istante.»','reviews.t2role':'Direttore Marketing',
    'reviews.t3':'«Esecuzione perfetta al primo colpo. Niente infinite revisioni.»','reviews.t3role':'Brand Director',
    'reviews.submitBtn':'Lascia una recensione →','reviews.formLabel':'— Recensione','reviews.formTitle':'Lascia una recensione',
    'reviews.formName':'Nome *','reviews.formRole':'Ruolo / azienda','reviews.formStars':'Valutazione',
    'reviews.formText':'La tua recensione *','reviews.formSubmit':'Invia',
    'reviews.success':'Grazie! La recensione sarà verificata e pubblicata.',
    'reviews.allBtn':'Tutte le recensioni →','reviews.allTitle':'Tutte le recensioni',
    'calculator.label':'— Calcolatore progetto','calculator.title':'Componi il tuo<br><em>sito ideale</em>',
    'calculator.subtitle':'Seleziona i moduli necessari — prepareremo un preventivo preciso.',
    'calculator.btn':'Richiedi preventivo →','calculator.modalTitle':'Ottima scelta!',
    'calculator.modalText':'Hai selezionato {N} moduli. Lascia i tuoi contatti — Sergej Korsakov preparerà un preventivo preciso entro 24 ore.',
    'calculator.name':'Nome *','calculator.email':'Email *','calculator.phone':'Telefono',
    'calculator.submit':'Invia','calculator.success':'Grazie! Vi contatteremo entro 24 ore.',
    'cta.label':'— Pronto a iniziare?','cta.title':'Parlami del<br>tuo <em>progetto</em>',
    'cta.text':'Descrivi la tua visione — ti risponderò entro 24 ore.',
    'cta.btn1':'Invia messaggio',
    'contact.label':'— Contatti','contact.title':'Parlami del tuo <em>progetto</em>',
    'contact.text':'Consulenza iniziale gratuita per il tuo prossimo progetto.',
    'contact.location':'Turgovia, Svizzera','contact.hours':'',
    'form.name':'Nome','form.namePh':'Il tuo nome','form.email':'Email',
    'form.type':'Tipo di progetto','form.typeSelect':'Seleziona un servizio','form.typeOther':'Altro',
    'form.budget':'Budget (opzionale)','form.budgetSelect':'Seleziona fascia',
    'form.message':'Dettagli del progetto','form.messagePh':'Breve descrizione, scadenze, obiettivi...',
    'form.submit':'Invia richiesta',
    'form.successTitle':'Messaggio inviato!','form.successText':'Ti contatterò entro 24 ore.','form.successClose':'Chiudi',
    'footer.contact':'Contatti','footer.impressum':'Note legali',
    'sd.s1.title':'Animazione Logo','sd.s1.subtitle':"Trasformo il tuo logo in un'immagine viva.",
    'sd.s1.what':'Cosa ricevi','sd.s1.whatText':'Animazione pronta in MP4 e MOV.',
    'sd.s1.process':'Processo',
    'sd.s1.step1':'Brief e idea','sd.s1.step1text':'Discutiamo il carattere del brand.',
    'sd.s1.step2':'Storyboard','sd.s1.step2text':'2-3 varianti di concept.',
    'sd.s1.step3':'Animazione','sd.s1.step3text':'Animazione in After Effects.',
    'sd.s1.step4':'Finale','sd.s1.step4text':'Render finale 4K.',
    'sd.s1.price':'Da','sd.s1.priceValue':'500 CHF','sd.s1.priceNote':'Tempi: 5-10 giorni',
    'sd.s1.faq':'FAQ',
    'sd.s1.q1':'Cosa serve?','sd.s1.a1':'File vettoriale del logo.',
    'sd.s1.q2':'Quante revisioni?','sd.s1.a2':'Fino a tre cicli inclusi.',
    'sd.s1.q3':'Posso usarlo su YouTube?','sd.s1.a3':'Sì, diritti completi.',
    'sd.s2.title':'Motion Graphics','sd.s2.subtitle':'Video animati per pubblicità.',
    'sd.s2.what':'Cosa ricevi','sd.s2.whatText':'Video 15-90 sec in HD/4K.',
    'sd.s2.process':'Processo',
    'sd.s2.step1':'Brief e script','sd.s2.step1text':'Definiamo obiettivi.',
    'sd.s2.step2':'Stile e storyboard','sd.s2.step2text':'Stile visivo.',
    'sd.s2.step3':'Animazione','sd.s2.step3text':'Animazione progressiva.',
    'sd.s2.step4':'Audio e finale','sd.s2.step4text':'Musica, render finale.',
    'sd.s2.price':'Da','sd.s2.priceValue':"1'500 CHF",'sd.s2.priceNote':'Tempi: 2-4 settimane',
    'sd.s2.faq':'FAQ',
    'sd.s2.q1':'Voce narrante?','sd.s2.a1':'Su richiesta.',
    'sd.s2.q2':'Personaggi propri?','sd.s2.a2':'Sì.',
    'sd.s2.q3':'Durata ottimale?','sd.s2.a3':'Pubblicità: 15-30 sec.',
    'sd.s3.title':'Graphic Design','sd.s3.subtitle':'Poster e layout pubblicitari premium.',
    'sd.s3.what':'Cosa ricevi','sd.s3.whatText':'File sorgente e finali.',
    'sd.s3.process':'Processo',
    'sd.s3.step1':'Brief','sd.s3.step1text':'Studio task e brand.',
    'sd.s3.step2':'Concept','sd.s3.step2text':'2-3 varianti.',
    'sd.s3.step3':'Rifinitura','sd.s3.step3text':'Affinamento.',
    'sd.s3.step4':'Finale','sd.s3.step4text':'File finali.',
    'sd.s3.price':'Da','sd.s3.priceValue':'300 CHF','sd.s3.priceNote':'Tempi: 3-7 giorni',
    'sd.s3.faq':'FAQ',
    'sd.s3.q1':'Pronti per stampa?','sd.s3.a1':'Sì.',
    'sd.s3.q2':'Set?','sd.s3.a2':'Sì, prezzo ridotto.',
    'sd.s3.q3':'Stock images?','sd.s3.a3':'Sì, con licenza.',
    'sd.s4.title':'Design del Logo','sd.s4.subtitle':'Logo come fondamento del brand.',
    'sd.s4.what':'Cosa ricevi','sd.s4.whatText':'Logo vettoriale e raster.',
    'sd.s4.process':'Processo',
    'sd.s4.step1':'Brief e ricerca','sd.s4.step1text':'Studio business.',
    'sd.s4.step2':'Concept','sd.s4.step2text':'3-5 idee.',
    'sd.s4.step3':'Rifinitura','sd.s4.step3text':'Affinamento con colore.',
    'sd.s4.step4':'Brandbook','sd.s4.step4text':'Mini-brandbook.',
    'sd.s4.price':'Da','sd.s4.priceValue':'800 CHF','sd.s4.priceNote':'Tempi: 2-3 settimane',
    'sd.s4.faq':'FAQ',
    'sd.s4.q1':'Quali diritti?','sd.s4.a1':'Diritti esclusivi completi.',
    'sd.s4.q2':'Animarlo dopo?','sd.s4.a2':'Sì, pacchetto scontato.',
    'sd.s4.q3':'Se non piace?','sd.s4.a3':'Altro round gratuito.',
    'sd.s5.title':'Creazione Siti','sd.s5.subtitle':'Siti moderni veloci e premium.',
    'sd.s5.what':'Cosa ricevi','sd.s5.whatText':'Sito completo, responsive, multilingua.',
    'sd.s5.process':'Processo',
    'sd.s5.step1':'Brief e struttura','sd.s5.step1text':'Obiettivi e struttura.',
    'sd.s5.step2':'Design','sd.s5.step2text':'Stile visivo.',
    'sd.s5.step3':'Sviluppo','sd.s5.step3text':'Coding moderno.',
    'sd.s5.step4':'Launch','sd.s5.step4text':'Upload e SSL.',
    'sd.s5.price':'Da','sd.s5.priceValue':"2'000 CHF",'sd.s5.priceNote':'Tempi: 2-4 settimane',
    'sd.s5.faq':'FAQ',
    'sd.s5.q1':'Hosting proprio?','sd.s5.a1':'Consiglio Infomaniak.',
    'sd.s5.q2':'Posso editare?','sd.s5.a2':'Sì, CMS.',
    'sd.s5.q3':'Cosa include SEO?','sd.s5.a3':'Base: meta-tag.',
    'sd.s6.title':'Supporto Siti','sd.s6.subtitle':'Abbonamento per sito sempre aggiornato.',
    'sd.s6.what':'Cosa ricevi','sd.s6.whatText':'Aggiornamenti e backup.',
    'sd.s6.process':'Mensilmente',
    'sd.s6.step1':'Aggiornamenti','sd.s6.step1text':'PHP, plugin, sicurezza.',
    'sd.s6.step2':'Monitoring','sd.s6.step2text':'24/7.',
    'sd.s6.step3':'Backup','sd.s6.step3text':'Settimanali.',
    'sd.s6.step4':'Supporto','sd.s6.step4text':'Edit fino a 2h/mese.',
    'sd.s6.price':'Costo','sd.s6.priceValue':'80 CHF/mese','sd.s6.priceNote':'Cancellabile sempre',
    'sd.s6.faq':'FAQ',
    'sd.s6.q1':'Se sito si rompe?','sd.s6.a1':'Ripristino in 24h.',
    'sd.s6.q2':'Modifiche grandi?','sd.s6.a2':'Tariffa oraria.',
    'sd.s6.q3':'Posso cancellare?','sd.s6.a3':'Sì, ogni mese.',
    'pd.p1.cat':'Logo Animation','pd.p1.title':'Apex Core — presentazione dinamica',
    'pd.p1.text':'Animazione logo per startup Apex Core.',
    'pd.p1.client':'Apex Core','pd.p1.year':'2026','pd.p1.duration':'8 secondi',
    'pd.p2.cat':'Branding','pd.p2.title':'Soft Identity Series',
    'pd.p2.text':'Serie identità soft per brand wellness.',
    'pd.p2.client':'Progetto Studio','pd.p2.year':'2025','pd.p2.duration':'Serie',
    'pd.p3.cat':'Motion','pd.p3.title':'Promo Reel',
    'pd.p3.text':'Promo dinamico per prodotto tech.',
    'pd.p3.client':'Tech Brand','pd.p3.year':'2025','pd.p3.duration':'30 secondi',
    'pd.p4.cat':'Web Design','pd.p4.title':'Studio Landing',
    'pd.p4.text':'Landing per studio di design.',
    'pd.p4.client':'Design Studio','pd.p4.year':'2025','pd.p4.duration':'4 settimane',
    'pd.p5.cat':'Identity','pd.p5.title':'Premium Mark',
    'pd.p5.text':'Logo per brand premium.',
    'pd.p5.client':'Lifestyle Brand','pd.p5.year':'2024','pd.p5.duration':'3 settimane',
    'pd.client':'Cliente','pd.year':'Anno','pd.duration':'Durata','pd.cta':'Ordina simile'
  },
  fr: {
    'nav.services':'Services','nav.portfolio':'Portfolio','nav.development':'Développement','nav.reviews':'Témoignages','nav.cta':'Contact',
    'hero.badge':'Studio de Motion Design · Suisse',
    'hero.title':'Un mouvement<br>qui <em>marque les esprits</em>',
    'hero.text':'Kors Motion est un studio de motion design. Je crée des animations de logos, des identités visuelles et des sites web performants.',
    'hero.btn1':'Discuter d\'un projet','hero.btn2':'Voir le portfolio',
    'services.label':'— Expertise','services.title':'Des services perfectionnés<br>dans les <em>moindres détails</em>',
    'services.intro':'Six disciplines, une seule exigence : l\'excellence.',
    'services.detail':'En savoir plus',
    'services.s1.title':'Animation de Logo','services.s1.desc':'Je transforme votre logo statique en une véritable expérience cinématographique.',
    'services.s1.f1':'Intro','services.s1.f2':'Outro','services.s1.f3':'Stinger',
    'services.s2.title':'Motion Graphics','services.s2.desc':'Infographies animées, spots publicitaires et vidéos explicatives.',
    'services.s2.f1':'Publicité','services.s2.f2':'Vidéo explicative','services.s2.f3':'Infographie',
    'services.s3.title':'Design Graphique','services.s3.desc':'Affiches, bannières, couvertures et supports publicitaires premium.',
    'services.s3.f1':'Affiches','services.s3.f2':'Bannières','services.s3.f3':'Réseaux sociaux',
    'services.s4.title':'Création de Logo','services.s4.desc':'Le logo comme fondation de votre marque. Du premier croquis à la charte graphique complète.',
    'services.s4.f1':'Logo','services.s4.f2':'Charte graphique','services.s4.f3':'Identité',
    'services.s5.title':'Développement Web','services.s5.desc':'Landing pages et sites vitrines modernes, optimisés pour la vitesse et la conversion.',
    'services.s5.f1':'Landing page','services.s5.f2':'Site multi-pages',
    'services.s6.title':'Maintenance Web','services.s6.desc':'Mises à jour régulières, sécurité renforcée et optimisation des performances.',
    'services.s6.f1':'Mises à jour','services.s6.f2':'Sécurité','services.s6.f3':'Performance',
    'portfolio.label':'— Projets sélectionnés','portfolio.title':'Le portfolio<br><em>en mouvement</em>',
    'portfolio.viewMore':'Voir les détails','portfolio.empty':'Projets à venir',
    'cat.motion':'Motion Design','cat.graphic':'Design Graphique','cat.web':'Web','cat.app':'Développement',
    'portfolio.viewAll':'Voir tout','portfolio.of':'sur',
    'dev.label':'— Développement','dev.title':'Applications<br><em>pour Android TV</em>',
    'dev.intro':'Projets personnels pour le grand écran.','dev.link':'En savoir plus',
    'portfolio.p1':'Apex Core — Présentation dynamique','portfolio.p2':'Soft Identity Series',
    'portfolio.p3':'Promo Reel','portfolio.p4':'Landing page studio','portfolio.p5':'Premium Mark',
    'reviews.label':'— Avis clients','reviews.title':'La confiance d\'un<br><em>professionnel</em>',
    'reviews.t1':'« Sergej a animé notre logo en une semaine seulement — le résultat est digne d\'un film. »',
    'reviews.t2':'« Un vrai professionnel. Il comprend le brief instantanément. »','reviews.t2role':'Directeur Marketing',
    'reviews.t3':'« Une exécution parfaite du premier coup. Pas de révisions interminables. »','reviews.t3role':'Directeur de Marque',
    'reviews.submitBtn':'Laisser un avis →','reviews.formLabel':'— Avis','reviews.formTitle':'Laisser un avis',
    'reviews.formName':'Nom *','reviews.formRole':'Poste / entreprise','reviews.formStars':'Note',
    'reviews.formText':'Votre avis *','reviews.formSubmit':'Envoyer',
    'reviews.success':'Merci ! Votre avis sera vérifié et publié.',
    'reviews.allBtn':'Tous les avis →','reviews.allTitle':'Tous les avis',
    'calculator.label':'— Calculateur de projet','calculator.title':'Composez votre<br><em>site idéal</em>',
    'calculator.subtitle':'Sélectionnez les modules souhaités — nous préparerons un devis précis.',
    'calculator.btn':'Demander un devis →','calculator.modalTitle':'Excellent choix !',
    'calculator.modalText':'Vous avez sélectionné {N} modules. Laissez vos coordonnées — Sergej Korsakov préparera un devis précis sous 24 heures.',
    'calculator.name':'Nom *','calculator.email':'E-mail *','calculator.phone':'Téléphone',
    'calculator.submit':'Envoyer','calculator.success':'Merci ! Nous vous contacterons dans les 24 heures.',
    'cta.label':'— Prêt à démarrer ?','cta.title':'Parlez-moi de<br>votre <em>projet</em>',
    'cta.text':'Décrivez votre vision — je vous répondrai sous 24 heures.',
    'cta.btn1':'Envoyer un message',
    'contact.label':'— Contact','contact.title':'Parlez-moi de votre <em>projet</em>',
    'contact.text':'Consultation initiale gratuite pour votre prochain projet.',
    'contact.location':'Thurgovie, Suisse','contact.hours':'',
    'form.name':'Nom','form.namePh':'Votre nom','form.email':'E-mail',
    'form.type':'Type de projet','form.typeSelect':'Sélectionnez un service','form.typeOther':'Autre',
    'form.budget':'Budget (optionnel)','form.budgetSelect':'Sélectionnez une fourchette',
    'form.message':'Détails du projet','form.messagePh':'Brève description, délais, objectifs...',
    'form.submit':'Envoyer la demande',
    'form.successTitle':'Message envoyé !','form.successText':'Je vous recontacterai sous 24 heures.','form.successClose':'Fermer',
    'footer.contact':'Contact','footer.impressum':'Mentions légales',
    'sd.s1.title':'Animation Logo','sd.s1.subtitle':'Je transforme votre logo en image vivante.',
    'sd.s1.what':'Ce que vous recevez','sd.s1.whatText':'Animation prête en MP4 et MOV.',
    'sd.s1.process':'Processus',
    'sd.s1.step1':'Brief et idée','sd.s1.step1text':'Discussion du caractère.',
    'sd.s1.step2':'Storyboard','sd.s1.step2text':'2-3 variantes.',
    'sd.s1.step3':'Animation','sd.s1.step3text':'Animation dans After Effects.',
    'sd.s1.step4':'Final','sd.s1.step4text':'Rendu final 4K.',
    'sd.s1.price':'À partir de','sd.s1.priceValue':'500 CHF','sd.s1.priceNote':'Délai: 5-10 jours',
    'sd.s1.faq':'FAQ',
    'sd.s1.q1':'Que fournir?','sd.s1.a1':'Logo vectoriel.',
    'sd.s1.q2':'Combien de révisions?','sd.s1.a2':'Trois cycles inclus.',
    'sd.s1.q3':'YouTube?','sd.s1.a3':'Oui, droits complets.',
    'sd.s2.title':'Motion Graphics','sd.s2.subtitle':'Vidéos animées.',
    'sd.s2.what':'Ce que vous recevez','sd.s2.whatText':'Vidéo 15-90 sec.',
    'sd.s2.process':'Processus',
    'sd.s2.step1':'Brief et script','sd.s2.step1text':'Objectifs et script.',
    'sd.s2.step2':'Style et storyboard','sd.s2.step2text':'Style visuel.',
    'sd.s2.step3':'Animation','sd.s2.step3text':'Animation progressive.',
    'sd.s2.step4':'Son et final','sd.s2.step4text':'Musique et rendu.',
    'sd.s2.price':'À partir de','sd.s2.priceValue':"1'500 CHF",'sd.s2.priceNote':'Délai: 2-4 semaines',
    'sd.s2.faq':'FAQ',
    'sd.s2.q1':'Voix-off?','sd.s2.a1':'Sur demande.',
    'sd.s2.q2':'Personnages?','sd.s2.a2':'Oui.',
    'sd.s2.q3':'Durée?','sd.s2.a3':'Pub: 15-30 sec.',
    'sd.s3.title':'Design Graphique','sd.s3.subtitle':'Affiches premium.',
    'sd.s3.what':'Ce que vous recevez','sd.s3.whatText':'Fichiers source et finaux.',
    'sd.s3.process':'Processus',
    'sd.s3.step1':'Brief','sd.s3.step1text':'Étude.',
    'sd.s3.step2':'Concepts','sd.s3.step2text':'2-3 variantes.',
    'sd.s3.step3':'Affinement','sd.s3.step3text':'Affinement.',
    'sd.s3.step4':'Final','sd.s3.step4text':'Fichiers finaux.',
    'sd.s3.price':'À partir de','sd.s3.priceValue':'300 CHF','sd.s3.priceNote':'Délai: 3-7 jours',
    'sd.s3.faq':'FAQ',
    'sd.s3.q1':'Prêt à imprimer?','sd.s3.a1':'Oui.',
    'sd.s3.q2':'Set?','sd.s3.a2':'Oui.',
    'sd.s3.q3':'Stock images?','sd.s3.a3':'Sous licence.',
    'sd.s4.title':'Création de Logo','sd.s4.subtitle':'Logo comme fondation.',
    'sd.s4.what':'Ce que vous recevez','sd.s4.whatText':'Logo vectoriel et raster.',
    'sd.s4.process':'Processus',
    'sd.s4.step1':'Brief','sd.s4.step1text':'Étude business.',
    'sd.s4.step2':'Concepts','sd.s4.step2text':'3-5 idées.',
    'sd.s4.step3':'Affinement','sd.s4.step3text':'Avec couleur.',
    'sd.s4.step4':'Charte','sd.s4.step4text':'Mini-charte.',
    'sd.s4.price':'À partir de','sd.s4.priceValue':'800 CHF','sd.s4.priceNote':'Délai: 2-3 semaines',
    'sd.s4.faq':'FAQ',
    'sd.s4.q1':'Quels droits?','sd.s4.a1':'Droits exclusifs.',
    'sd.s4.q2':'Animer plus tard?','sd.s4.a2':'Oui, pack avec rabais.',
    'sd.s4.q3':'Si rien ne plaît?','sd.s4.a3':'Nouveau round gratuit.',
    'sd.s5.title':'Création de Sites','sd.s5.subtitle':'Sites modernes rapides.',
    'sd.s5.what':'Ce que vous recevez','sd.s5.whatText':'Site complet responsive.',
    'sd.s5.process':'Processus',
    'sd.s5.step1':'Brief','sd.s5.step1text':'Objectifs et structure.',
    'sd.s5.step2':'Design','sd.s5.step2text':'Style visuel.',
    'sd.s5.step3':'Développement','sd.s5.step3text':'Coding moderne.',
    'sd.s5.step4':'Lancement','sd.s5.step4text':'Hébergement et SSL.',
    'sd.s5.price':'À partir de','sd.s5.priceValue':"2'000 CHF",'sd.s5.priceNote':'Délai: 2-4 semaines',
    'sd.s5.faq':'FAQ',
    'sd.s5.q1':'Hébergement?','sd.s5.a1':'Recommande Infomaniak.',
    'sd.s5.q2':'Éditer?','sd.s5.a2':'Oui, CMS.',
    'sd.s5.q3':'SEO?','sd.s5.a3':'Base.',
    'sd.s6.title':'Maintenance Web','sd.s6.subtitle':'Abonnement: site protégé.',
    'sd.s6.what':'Ce que vous recevez','sd.s6.whatText':'Mises à jour, backups.',
    'sd.s6.process':'Mensuel',
    'sd.s6.step1':'Mises à jour','sd.s6.step1text':'PHP, sécurité.',
    'sd.s6.step2':'Monitoring','sd.s6.step2text':'24/7.',
    'sd.s6.step3':'Backups','sd.s6.step3text':'Hebdomadaires.',
    'sd.s6.step4':'Support','sd.s6.step4text':'2h/mois.',
    'sd.s6.price':'Coût','sd.s6.priceValue':'80 CHF/mois','sd.s6.priceNote':'Annulable',
    'sd.s6.faq':'FAQ',
    'sd.s6.q1':'Si casse?','sd.s6.a1':'Restauration en 24h.',
    'sd.s6.q2':'Grosses modifs?','sd.s6.a2':'Tarif horaire.',
    'sd.s6.q3':'Annuler?','sd.s6.a3':'Oui, chaque mois.',
    'pd.p1.cat':'Logo Animation','pd.p1.title':'Apex Core — présentation dynamique',
    'pd.p1.text':'Animation logo pour startup Apex Core.',
    'pd.p1.client':'Apex Core','pd.p1.year':'2026','pd.p1.duration':'8 secondes',
    'pd.p2.cat':'Branding','pd.p2.title':'Soft Identity Series',
    'pd.p2.text':"Série d'identités douces.",
    'pd.p2.client':'Projet Studio','pd.p2.year':'2025','pd.p2.duration':'Série',
    'pd.p3.cat':'Motion','pd.p3.title':'Promo Reel',
    'pd.p3.text':'Promo dynamique tech.',
    'pd.p3.client':'Tech Brand','pd.p3.year':'2025','pd.p3.duration':'30 secondes',
    'pd.p4.cat':'Web Design','pd.p4.title':'Studio Landing',
    'pd.p4.text':'Landing studio de design.',
    'pd.p4.client':'Design Studio','pd.p4.year':'2025','pd.p4.duration':'4 semaines',
    'pd.p5.cat':'Identity','pd.p5.title':'Premium Mark',
    'pd.p5.text':'Logo marque premium.',
    'pd.p5.client':'Lifestyle Brand','pd.p5.year':'2024','pd.p5.duration':'3 semaines',
    'pd.client':'Client','pd.year':'Année','pd.duration':'Durée','pd.cta':'Commander similaire'
  }
};

const codes = { ru:'RU', de:'DE', en:'EN', it:'IT', fr:'FR' };
const FLAG_ICONS = { ru:'ru', de:'de', en:'gb', it:'it', fr:'fr' };
let currentLanguage = 'ru';

let allProjects = [];
let siteProjects = [];
let siteWebProjects = [];
const DEFAULT_SITE_SETTINGS = {
  show_portfolio_section: true,
  show_services_section: true,
  show_dev_section: false,
  show_reviews_section: true,
  show_hero_section: true,
  apps: [],
};
const REVIEW_STAR_SVG = '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"/></svg>';
let siteSettings = { ...DEFAULT_SITE_SETTINGS };
let siteHeroData = null;
let siteReviews = [];
let siteCalculatorData = null;
const calcSelected = new Set();
let calcSelectionInitialized = false;
let reviewFormStars = 5;
let sortedSiteReviews = [];

function normalizeSiteSettings(raw) {
  const s = raw && typeof raw === 'object' ? raw : {};
  return {
    ...DEFAULT_SITE_SETTINGS,
    ...s,
    show_portfolio_section: s.show_portfolio_section === false ? false : true,
    show_services_section: s.show_services_section === false ? false : true,
    show_dev_section: s.show_dev_section === true,
    show_reviews_section: s.show_reviews_section === false ? false : true,
    show_hero_section: s.show_hero_section === false ? false : true,
    apps: Array.isArray(s.apps) ? s.apps : DEFAULT_SITE_SETTINGS.apps,
  };
}

function isSiteSectionVisible(key) {
  if (key === 'show_dev_section') return siteSettings.show_dev_section === true;
  if (key === 'show_portfolio_section') return siteSettings.show_portfolio_section !== false;
  if (key === 'show_services_section') return siteSettings.show_services_section !== false;
  return siteSettings[key] !== false;
}

function applySectionVisibilityFromApi(payload) {
  if (!payload || typeof payload !== 'object') return;
  if ('portfolio' in payload) siteSettings.show_portfolio_section = !!payload.portfolio;
  if ('services' in payload) siteSettings.show_services_section = !!payload.services;
  if ('development' in payload) siteSettings.show_dev_section = !!payload.development;
  if ('reviews' in payload) siteSettings.show_reviews_section = !!payload.reviews;
  if ('hero' in payload) siteSettings.show_hero_section = !!payload.hero;
}

function setSiteSectionVisible(sectionId, navIds, visible) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.classList.toggle('site-section-hidden', !visible);
    section.style.display = visible ? '' : 'none';
  }
  (navIds || []).forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.display = visible ? '' : 'none';
  });
}

function applyAllSectionVisibility() {
  setSiteSectionVisible('portfolio', ['navPortfolioItem', 'footerPortfolioItem'], isSiteSectionVisible('show_portfolio_section'));
  setSiteSectionVisible('services', ['navServicesItem', 'footerServicesItem'], isSiteSectionVisible('show_services_section'));
  setSiteSectionVisible('development', ['navDevItem', 'footerDevItem'], isSiteSectionVisible('show_dev_section'));
  setSiteSectionVisible('reviews', ['navReviewsItem', 'footerReviewsItem'], isSiteSectionVisible('show_reviews_section'));
  setSiteSectionVisible('hero', [], isSiteSectionVisible('show_hero_section'));
}
let allServices = [];
let siteServices = [];

const SERVICE_WINDOWS = {
  s1: '<div class="service-window"><img src="logo.png" alt="" class="anim-logo"></div>',
  s2: '<div class="service-window"><div class="anim-motion"><div class="shape shape-1"></div><div class="shape shape-2"></div><div class="shape shape-3"></div></div></div>',
  s3: '<div class="service-window"><div class="anim-design"><div class="layer layer-1"></div><div class="layer layer-2"></div><div class="layer layer-3"></div></div></div>',
  s4: '<div class="service-window"><div class="anim-logocreate"><div class="grid-block b1"></div><div class="grid-block b2"></div><div class="grid-block b3"></div><div class="grid-block b4"></div><div class="grid-block center"></div></div></div>',
  s5: '<div class="service-window"><div class="anim-web"><div class="browser-bar"><div class="dot"></div><div class="dot"></div><div class="dot"></div></div><div class="browser-content"><div class="web-line"></div><div class="web-line"></div><div class="web-line"></div><div class="web-block"></div></div></div></div>',
  s6: '<div class="service-window"><div class="anim-support"><div class="gear gear-1"></div><div class="gear gear-2"></div><div class="check"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></div></div></div>',
};

function svcLang(obj, lang) {
  if (!obj) return '';
  if (typeof obj === 'string') return obj;
  return obj[lang] || obj.en || obj.de || obj.ru || Object.values(obj)[0] || '';
}

function detectLang() {
  const saved = localStorage.getItem('korsmotion_lang');
  if (saved && translations[saved]) return saved;
  const browserLang = (navigator.language || 'ru').toLowerCase().split('-')[0];
  if (translations[browserLang]) return browserLang;
  return 'en';
}

function applyLang(lang) {
  const t = translations[lang];
  if (!t) return;
  currentLanguage = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) el.textContent = t[key];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (t[key]) el.innerHTML = t[key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key]) el.placeholder = t[key];
  });
  document.getElementById('currentLang').textContent = codes[lang];
  const flagEl = document.getElementById('currentFlag');
  if (flagEl) flagEl.className = 'fi fi-' + (FLAG_ICONS[lang] || 'ru');
  document.querySelectorAll('.lang-option').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  localStorage.setItem('korsmotion_lang', lang);
  renderPortfolio();
  renderDevSection();
  renderServices();
  applyHero();
  renderReviews();
  renderCalculator();
}

function heroLangContent(lang) {
  if (!siteHeroData?.content) return null;
  return siteHeroData.content[lang] || siteHeroData.content.en || siteHeroData.content.ru || null;
}

function bindHeroButton(el, link, isPrimary) {
  if (!el) return;
  const href = link || '#';
  if (href === '#contact') {
    if (el.tagName === 'BUTTON') {
      el.onclick = () => openModal('contactModal');
    } else {
      el.href = '#';
      el.onclick = e => { e.preventDefault(); openModal('contactModal'); };
    }
    return;
  }
  if (el.tagName === 'A') {
    el.href = href;
    el.onclick = null;
  } else {
    el.onclick = () => {
      if (href.startsWith('#')) {
        const target = document.querySelector(href);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.href = href;
      }
    };
  }
}

function applyHero() {
  const show = isSiteSectionVisible('show_hero_section') && siteHeroData?.show !== false;
  setSiteSectionVisible('hero', [], show);
  if (!show) return;

  const lang = currentLanguage;
  const c = heroLangContent(lang);
  const t = translations[lang] || translations.en;

  const badgeEl = document.getElementById('heroBadge');
  const titleEl = document.getElementById('heroTitle');
  const textEl = document.getElementById('heroText');
  const btn1 = document.getElementById('heroBtn1');
  const btn2 = document.getElementById('heroBtn2');
  const bgEl = document.getElementById('heroBg');

  if (badgeEl) badgeEl.textContent = c?.badge || t['hero.badge'] || '';
  if (titleEl) titleEl.innerHTML = c?.title || t['hero.title'] || '';
  if (textEl) textEl.textContent = c?.subtitle || t['hero.text'] || '';
  if (btn1) {
    const span = btn1.querySelector('span');
    if (span) span.textContent = c?.btn1Text || t['hero.btn1'] || '';
    bindHeroButton(btn1, c?.btn1Link || '#contact', true);
  }
  if (btn2) {
    const span = btn2.querySelector('span');
    if (span) span.textContent = c?.btn2Text || t['hero.btn2'] || '';
    bindHeroButton(btn2, c?.btn2Link || '#portfolio', false);
  }

  if (bgEl) {
    const media = siteHeroData?.media || '';
    if (!media) {
      bgEl.innerHTML = '';
    } else {
      const ext = media.split('.').pop().toLowerCase();
      const url = media.startsWith('http') ? media : media;
      if (['mp4', 'webm', 'mov'].includes(ext)) {
        bgEl.innerHTML = `<video src="${url}" muted loop autoplay playsinline></video>`;
      } else {
        bgEl.innerHTML = `<img src="${url}" alt="">`;
      }
    }
  }
}

function reviewInitials(name) {
  if (!name) return '?';
  return name.trim().split(/\s+/).map(w => w[0]).join('').slice(0, 2).toUpperCase();
}

const SEED_REVIEW_TEXTS = {
  rev_seed_1: '«Sergej hat unsere Logo-Animation in einer Woche erstellt — sieht aus wie ein Kinofilm.»',
  rev_seed_2: '«Ein Profi auf höchstem Niveau. Versteht die Aufgabe auf Anhieb.»',
  rev_seed_3: '«Ideales Ergebnis vom ersten Versuch. Keine endlosen Korrekturen.»',
};

function isBlockedReview(review) {
  const name = (review?.name || '').trim().toLowerCase();
  const role = (review?.role || '').trim().toLowerCase();
  return name === 'sergej korsakov' && (role.includes('bauinginier') || role.includes('bauingenieur'));
}

function sanitizeSiteReviews(reviews) {
  return (Array.isArray(reviews) ? reviews : [])
    .filter(r => !isBlockedReview(r))
    .map(r => (SEED_REVIEW_TEXTS[r.id] ? { ...r, text: SEED_REVIEW_TEXTS[r.id] } : r));
}

function sortReviewsByDate(reviews) {
  return [...reviews].sort((a, b) => {
    const da = Date.parse(a.date) || 0;
    const db = Date.parse(b.date) || 0;
    return db - da;
  });
}

function reviewStarsCount(n) {
  return Math.min(5, Math.max(1, parseInt(n, 10) || 5));
}

function reviewStarsText(n) {
  return '★'.repeat(reviewStarsCount(n));
}

function truncateReviewText(text, max = 80) {
  const s = String(text || '').trim();
  if (s.length <= max) return s;
  return s.slice(0, max).trimEnd() + '…';
}

function buildReviewCardHtml(review) {
  const stars = reviewStarsCount(review.stars);
  return `
    <article class="review-card">
      <div class="stars">${REVIEW_STAR_SVG.repeat(stars)}</div>
      <p class="review-card-text">«${escHtml(review.text || '')}»</p>
      <div class="review-card-author">
        <div class="author-avatar">${escHtml(reviewInitials(review.name))}</div>
        <div>
          <div class="author-name">${escHtml(review.name || '')}</div>
          <div class="author-role">${escHtml(review.role || '')}</div>
        </div>
      </div>
    </article>`;
}

function buildCompactReviewHtml(review) {
  const name = escHtml(review.name || '');
  const role = escHtml(review.role || '');
  const excerpt = escHtml(truncateReviewText(review.text));
  const meta = role ? `${name} · ${role}` : name;
  return `
    <div class="all-reviews-compact">
      <span class="all-reviews-compact-stars">${reviewStarsText(review.stars)}</span>
      <span>${meta} · <span class="all-reviews-compact-text">«${excerpt}»</span></span>
    </div>`;
}

function renderAllReviewsModal(sorted) {
  const countEl = document.getElementById('allReviewsCount');
  const featured = document.getElementById('allReviewsFeatured');
  const older = document.getElementById('allReviewsOlder');
  if (countEl) countEl.textContent = String(sorted.length);
  const top9 = sorted.slice(0, 9);
  const rest = sorted.slice(9);
  if (featured) {
    featured.innerHTML = top9.length
      ? `<div class="all-reviews-featured-grid">${top9.map(r => buildReviewCardHtml(r)).join('')}</div>`
      : '';
  }
  if (older) {
    older.innerHTML = rest.length
      ? `<div class="all-reviews-older-list">${rest.map(r => buildCompactReviewHtml(r)).join('')}</div>`
      : '';
  }
}

const REVIEWS_CAROUSEL_GAP = 24;
let reviewsCarouselGroup = 0;
let reviewsCarouselWheelLock = false;

function getReviewsPerView() {
  if (window.innerWidth <= 640) return 1;
  if (window.innerWidth <= 968) return 2;
  return 3;
}

function layoutReviewsCarouselCards() {
  const wrap = document.getElementById('reviewsCarouselWrap');
  const track = document.getElementById('reviewsCarouselTrack');
  const carousel = wrap?.querySelector('.reviews-carousel');
  if (!track || !carousel) return;
  const perView = getReviewsPerView();
  const gap = REVIEWS_CAROUSEL_GAP;
  const viewWidth = carousel.clientWidth;
  const cardWidth = (viewWidth - gap * (perView - 1)) / perView;
  track.dataset.cardWidth = String(cardWidth);
  track.querySelectorAll('.review-card').forEach(card => {
    card.style.width = cardWidth + 'px';
    card.style.flexBasis = cardWidth + 'px';
    card.style.maxWidth = cardWidth + 'px';
  });
}

function initReviewsCarousel(cardCount) {
  const track = document.getElementById('reviewsCarouselTrack');
  const prev = document.getElementById('reviewsPrev');
  const next = document.getElementById('reviewsNext');
  const dots = document.getElementById('reviewsDots');
  const wrap = document.getElementById('reviewsCarouselWrap');
  const carousel = wrap?.querySelector('.reviews-carousel');
  if (!track || !wrap) return;

  function cardStep() {
    const w = parseFloat(track.dataset.cardWidth);
    if (w) return w + REVIEWS_CAROUSEL_GAP;
    const card = track.querySelector('.review-card');
    return card ? card.offsetWidth + REVIEWS_CAROUSEL_GAP : 0;
  }

  function maxScrollLeft() {
    if (!carousel) return 0;
    const cards = track.querySelectorAll('.review-card');
    if (!cards.length) return 0;
    const step = cardStep();
    const totalWidth = cards.length * step - REVIEWS_CAROUSEL_GAP;
    return Math.max(0, totalWidth - carousel.clientWidth);
  }

  function applyCarouselOffset(left, animate) {
    track.style.transition = animate ? 'transform .45s ease' : 'none';
    track.style.transform = `translateX(-${left}px)`;
  }

  function groupScrollPositions() {
    const perView = getReviewsPerView();
    const step = cardStep();
    const maxScroll = maxScrollLeft();
    if (!step || cardCount <= perView) return [0];

    const maxGroup = Math.ceil(cardCount / perView) - 1;
    const positions = [];
    for (let g = 0; g <= maxGroup; g++) {
      const pos = Math.min(g * perView * step, maxScroll);
      if (!positions.length || pos > positions[positions.length - 1] + 1) positions.push(pos);
    }
    return positions.length ? positions : [0];
  }

  function groupCount() {
    return groupScrollPositions().length;
  }

  function rebuildDots() {
    if (!dots) return;
    const groups = groupCount();
    dots.innerHTML = Array.from({ length: groups }, (_, i) =>
      `<button type="button" class="reviews-dot${i === reviewsCarouselGroup ? ' active' : ''}" data-group="${i}" aria-label="Reviews ${i + 1}"></button>`
    ).join('');
    dots.querySelectorAll('.reviews-dot').forEach(dot => {
      dot.addEventListener('click', () => scrollToGroup(+dot.dataset.group));
    });
  }

  function updateDots() {
    const idx = reviewsCarouselGroup;
    const maxGroup = Math.max(0, groupCount() - 1);
    dots?.querySelectorAll('.reviews-dot').forEach((dot, i) => {
      dot.classList.toggle('active', i === idx);
    });
    if (prev) {
      prev.classList.toggle('is-disabled', idx <= 0);
      prev.setAttribute('aria-disabled', idx <= 0 ? 'true' : 'false');
    }
    if (next) {
      next.classList.toggle('is-disabled', idx >= maxGroup);
      next.setAttribute('aria-disabled', idx >= maxGroup ? 'true' : 'false');
    }
  }

  function scrollToGroup(groupIdx, animate = true) {
    const positions = groupScrollPositions();
    const maxGroup = positions.length - 1;
    reviewsCarouselGroup = Math.max(0, Math.min(maxGroup, groupIdx));
    applyCarouselOffset(positions[reviewsCarouselGroup], animate);
    updateDots();
  }

  function onCarouselWheel(e) {
    e.preventDefault();
    if (reviewsCarouselWheelLock) return;
    const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    if (Math.abs(delta) < 8) return;
    reviewsCarouselWheelLock = true;
    setTimeout(() => { reviewsCarouselWheelLock = false; }, 420);
    if (delta > 0) scrollToGroup(reviewsCarouselGroup + 1);
    else scrollToGroup(reviewsCarouselGroup - 1);
  }

  function syncCarouselLayout(animate) {
    layoutReviewsCarouselCards();
    const positions = groupScrollPositions();
    reviewsCarouselGroup = Math.min(reviewsCarouselGroup, positions.length - 1);
    applyCarouselOffset(positions[reviewsCarouselGroup] || 0, animate);
    rebuildDots();
    updateDots();
  }

  if (wrap.dataset.bound !== '1') {
    wrap.dataset.bound = '1';
    prev?.addEventListener('click', () => {
      if (reviewsCarouselGroup <= 0) return;
      scrollToGroup(reviewsCarouselGroup - 1);
    });
    next?.addEventListener('click', () => {
      const maxGroup = groupScrollPositions().length - 1;
      if (reviewsCarouselGroup >= maxGroup) return;
      scrollToGroup(reviewsCarouselGroup + 1);
    });
    track.addEventListener('wheel', onCarouselWheel, { passive: false });
    carousel?.addEventListener('wheel', onCarouselWheel, { passive: false });
    window.addEventListener('resize', () => syncCarouselLayout(false));
  }

  reviewsCarouselGroup = 0;
  requestAnimationFrame(() => syncCarouselLayout(false));
}

function renderReviews() {
  sortedSiteReviews = sortReviewsByDate(siteReviews);
  const hasReviews = sortedSiteReviews.length > 0;
  const show = hasReviews && isSiteSectionVisible('show_reviews_section');
  setSiteSectionVisible('reviews', ['navReviewsItem', 'footerReviewsItem'], show);
  if (!show) return;

  const carouselItems = sortedSiteReviews.slice(0, 10);
  const track = document.getElementById('reviewsCarouselTrack');
  const dots = document.getElementById('reviewsDots');

  if (track) {
    track.innerHTML = carouselItems.map(r => buildReviewCardHtml(r)).join('');
    track.querySelectorAll('.review-card').forEach(el => observer.observe(el));
  }

  renderAllReviewsModal(sortedSiteReviews);
  initReviewsCarousel(carouselItems.length);
}

function initReviewStarPicker() {
  const picker = document.getElementById('reviewStarPicker');
  if (!picker || picker.dataset.bound === '1') return;
  picker.dataset.bound = '1';
  const starSvg = '<svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"/></svg>';
  picker.innerHTML = [1, 2, 3, 4, 5].map(n =>
    `<button type="button" class="review-star-btn${n <= reviewFormStars ? ' active' : ''}" data-star="${n}" aria-label="${n}">${starSvg}</button>`
  ).join('');
  picker.querySelectorAll('.review-star-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      reviewFormStars = +btn.dataset.star;
      picker.querySelectorAll('.review-star-btn').forEach((b, i) => b.classList.toggle('active', i < reviewFormStars));
    });
  });
}

function resetReviewForm() {
  const form = document.getElementById('reviewForm');
  const success = document.getElementById('reviewFormSuccess');
  if (form) {
    form.reset();
    form.style.display = '';
  }
  if (success) success.classList.remove('active');
  reviewFormStars = 5;
  initReviewStarPicker();
}

const switcher = document.getElementById('langSwitcher');
const langButton = document.getElementById('langButton');
langButton.addEventListener('click', (e) => { e.stopPropagation(); switcher.classList.toggle('open'); });
document.addEventListener('click', () => switcher.classList.remove('open'));
document.querySelectorAll('.lang-option').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    applyLang(btn.dataset.lang);
    switcher.classList.remove('open');
  });
});
// MODALS
function openModal(id) {
  document.getElementById(id).classList.add('active');
  document.body.classList.add('modal-open');
}
function closeModal(id) {
  document.getElementById(id).classList.remove('active');
  document.body.classList.remove('modal-open');
  if (id === 'contactModal') {
    document.getElementById('contactForm').style.display = 'block';
    document.getElementById('formSuccess').classList.remove('active');
    const infoRow = document.querySelector('.contact-info-row');
    if (infoRow) infoRow.style.display = 'grid';
  }
  if (id === 'calculatorModal') {
    const form = document.getElementById('calculatorForm');
    const success = document.getElementById('calcFormSuccess');
    if (form) form.style.display = 'block';
    if (success) success.classList.remove('active');
    form?.reset();
  }
}
document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal(overlay.id);
  });
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay.active').forEach(m => closeModal(m.id));
  }
});

// SERVICE DETAILS
const serviceIcons = {
  s1: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8" fill="currentColor"/></svg>',
  s2: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>',
  s3: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="M21 15l-5-5L5 21"/></svg>',
  s4: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5M2 12l10 5 10-5"/></svg>',
  s5: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>',
  s6: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12a9 9 0 11-6.219-8.56"/><polyline points="22 4 12 14.01 9 11.01"/></svg>'
};

function openServiceDetail(id) {
  const t = translations[currentLanguage];
  const lang = currentLanguage;
  const content = document.getElementById('serviceModalContent');
  const svc = siteServices.find(s => s.id === id);

  if (svc) {
    const title = svcLang(svc.title, lang);
    const subtitle = svcLang(svc.subtitle, lang);
    const whatText = svcLang(svc.whatText, lang);
    const priceNote = svcLang(svc.priceNote, lang);
    const priceVal = svc.price ? `${svc.price} CHF` : '';
    const steps = (svc.steps || []).slice(0, 4);
    const faqs = (svc.faq || []).slice(0, 3);
    const icon = serviceIcons[id] || serviceIcons.s1;
    const whatLabel = t['sd.s1.what'] || 'What you get';
    const processLabel = t['sd.s1.process'] || 'Process';
    const priceLabel = t['sd.s1.price'] || 'Price';
    const faqLabel = t['sd.s1.faq'] || 'FAQ';

    content.innerHTML = `
      <div class="service-detail-hero">
        <div class="service-detail-icon">${icon}</div>
        <h2 class="service-detail-title">${escHtml(title)}</h2>
        <p class="service-detail-subtitle">${escHtml(subtitle)}</p>
      </div>
      <div class="service-detail-body">
        <div class="service-detail-block">
          <h3 class="service-detail-block-title">${whatLabel}</h3>
          <p class="service-detail-block-text">${escHtml(whatText)}</p>
        </div>
        ${steps.length ? `
        <div class="service-detail-block">
          <h3 class="service-detail-block-title">${processLabel}</h3>
          <div class="process-steps">
            ${steps.map((step, n) => `
              <div class="process-step">
                <div class="process-step-num">${n + 1}</div>
                <div class="process-step-content">
                  <div class="process-step-title">${escHtml(svcLang(step.title, lang))}</div>
                  <div class="process-step-text">${escHtml(svcLang(step.desc, lang))}</div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>` : ''}
        ${priceVal ? `
        <div class="price-box">
          <div class="price-label">${priceLabel}</div>
          <div class="price-value">${escHtml(priceVal)}</div>
          <div class="price-note">${escHtml(priceNote)}</div>
        </div>` : ''}
        ${faqs.length ? `
        <div class="service-detail-block">
          <h3 class="service-detail-block-title">${faqLabel}</h3>
          ${faqs.map(faq => `
            <div class="faq-item">
              <div class="faq-question">${escHtml(svcLang(faq.q, lang))}</div>
              <div class="faq-answer">${escHtml(svcLang(faq.a, lang))}</div>
            </div>
          `).join('')}
        </div>` : ''}
        <button class="btn-primary" style="width:100%;justify-content:center;margin-top:24px" onclick="closeModal('serviceModal'); openModal('contactModal');">
          <span>${t['cta.btn1']}</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </button>
      </div>
    `;
    openModal('serviceModal');
    return;
  }

  content.innerHTML = `
    <div class="service-detail-hero">
      <div class="service-detail-icon">${serviceIcons[id]}</div>
      <h2 class="service-detail-title">${t['sd.' + id + '.title']}</h2>
      <p class="service-detail-subtitle">${t['sd.' + id + '.subtitle']}</p>
    </div>
    <div class="service-detail-body">
      <div class="service-detail-block">
        <h3 class="service-detail-block-title">${t['sd.' + id + '.what']}</h3>
        <p class="service-detail-block-text">${t['sd.' + id + '.whatText']}</p>
      </div>
      <div class="service-detail-block">
        <h3 class="service-detail-block-title">${t['sd.' + id + '.process']}</h3>
        <div class="process-steps">
          ${[1,2,3,4].map(n => `
            <div class="process-step">
              <div class="process-step-num">${n}</div>
              <div class="process-step-content">
                <div class="process-step-title">${t['sd.' + id + '.step' + n]}</div>
                <div class="process-step-text">${t['sd.' + id + '.step' + n + 'text']}</div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
      <div class="price-box">
        <div class="price-label">${t['sd.' + id + '.price']}</div>
        <div class="price-value">${t['sd.' + id + '.priceValue']}</div>
        <div class="price-note">${t['sd.' + id + '.priceNote']}</div>
      </div>
      <div class="service-detail-block">
        <h3 class="service-detail-block-title">${t['sd.' + id + '.faq']}</h3>
        ${[1,2,3].map(n => `
          <div class="faq-item">
            <div class="faq-question">${t['sd.' + id + '.q' + n]}</div>
            <div class="faq-answer">${t['sd.' + id + '.a' + n]}</div>
          </div>
        `).join('')}
      </div>
      <button class="btn-primary" style="width:100%;justify-content:center;margin-top:24px" onclick="closeModal('serviceModal'); openModal('contactModal');">
        <span>${t['cta.btn1']}</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </button>
    </div>
  `;
  openModal('serviceModal');
}

// SITE DATA (portfolio + dev apps)
const STORAGE_PROJECTS = 'korsmotion_projects';
const STORAGE_SETTINGS = 'korsmotion_settings';

const gradientStyles = {
  'pv-1': 'background:linear-gradient(135deg,#1A1530 0%,#5B3FBF 100%);',
  'pv-2': 'background:linear-gradient(135deg,#E8DFFB 0%,#B89AED 100%);',
  'pv-3': 'background:linear-gradient(135deg,#8B6FE8 0%,#5B3FBF 100%);',
  'pv-4': 'background:linear-gradient(135deg,#F5F0FF 0%,#C9B8F5 100%);',
  'pv-5': 'background:linear-gradient(135deg,#1A1530 0%,#4A4566 100%);'
};
const decoElements = {
  'pv-1': '<img src="logo.png" alt="" class="portfolio-logo-small" style="width:35%">',
  'pv-2': '<div class="deco-circle"></div>',
  'pv-3': '<div class="deco-ring"></div>',
  'pv-4': '<div class="deco-square"></div>',
  'pv-5': '<img src="logo.png" alt="" class="portfolio-logo-small" style="width:40%;opacity:.5">'
};
const darkMetaGradients = ['pv-2', 'pv-4'];

async function loadSiteData() {
  let projects = null;
  let settings = null;
  let sectionVisibility = null;

  try {
    const res = await fetch('/api/data');
    if (res.ok) {
      const data = await res.json();
      projects = data.projects || null;
      settings = data.settings || null;
      sectionVisibility = data.sectionVisibility || null;
    }
  } catch (_) {}

  if (!projects || !settings) {
    try {
      const [pRes, sRes] = await Promise.all([
        fetch('data/projects.json'),
        fetch('data/settings.json'),
      ]);
      if (!projects && pRes.ok) projects = await pRes.json();
      if (!settings && sRes.ok) settings = await sRes.json();
    } catch (_) {}
  }

  let svcMeta = {};
  try {
    const svcRes = await fetch('/api/services');
    if (svcRes.ok) {
      const svcData = await svcRes.json();
      allServices = svcData.services || [];
      svcMeta = svcData;
    }
  } catch (_) {}

  try {
    const heroRes = await fetch('/api/hero');
    if (heroRes.ok) siteHeroData = await heroRes.json();
  } catch (_) {}

  try {
    const revRes = await fetch('/api/reviews');
    if (revRes.ok) {
      const revData = await revRes.json();
      siteReviews = sanitizeSiteReviews(revData.reviews);
    }
  } catch (_) {}

  try {
    const calcRes = await fetch('/api/calculator');
    if (calcRes.ok) {
      siteCalculatorData = await calcRes.json();
      calcSelectionInitialized = false;
    }
  } catch (_) {}

  allProjects = projects?.projects || [];
  siteProjects = allProjects.filter(p => p.visible && ['motion', 'graphic'].includes(p.categoryId || 'motion'));
  siteWebProjects = allProjects.filter(p => p.visible && p.categoryId === 'web');
  siteSettings = normalizeSiteSettings(settings);
  applySectionVisibilityFromApi(sectionVisibility);
  if (svcMeta.sectionVisibility) {
    applySectionVisibilityFromApi(svcMeta.sectionVisibility);
  } else if (svcMeta.show_services_section !== undefined) {
    siteSettings.show_services_section = !!svcMeta.show_services_section;
  }
  siteServices = allServices.filter(s => s.visible !== false);
  applyAllSectionVisibility();
  renderPortfolio();
  renderDevSection();
  renderServices();
  applyHero();
  renderReviews();
  renderCalculator();
}

function initCalcSelection() {
  if (!siteCalculatorData?.groups) return;
  calcSelected.clear();
  siteCalculatorData.groups.forEach(group => {
    (group.options || []).forEach(opt => {
      if (opt.active !== false && opt.required) calcSelected.add(opt.id);
    });
  });
  calcSelectionInitialized = true;
}

function getCalcOptionById(id) {
  if (!siteCalculatorData?.groups) return null;
  for (const group of siteCalculatorData.groups) {
    const opt = (group.options || []).find(o => o.id === id);
    if (opt) return opt;
  }
  return null;
}

function getCalcTotalInternal() {
  let total = 0;
  if (!siteCalculatorData?.groups) return 0;
  siteCalculatorData.groups.forEach(group => {
    (group.options || []).forEach(opt => {
      if (opt.active !== false && calcSelected.has(opt.id)) {
        total += parseInt(opt.price, 10) || 0;
      }
    });
  });
  return total;
}

function getSelectedCalcOptions() {
  const lang = currentLanguage;
  const items = [];
  if (!siteCalculatorData?.groups) return items;
  siteCalculatorData.groups.forEach(group => {
    (group.options || []).forEach(opt => {
      if (opt.active !== false && calcSelected.has(opt.id)) {
        items.push({
          id: opt.id,
          icon: opt.icon || '📦',
          title: svcLang(opt.title, lang),
        });
      }
    });
  });
  return items;
}

function renderCalculator() {
  const section = document.getElementById('calculator');
  const container = document.getElementById('calculatorGroups');
  if (!section || !container) return;
  const data = siteCalculatorData;
  if (!data || data.visible !== true || !Array.isArray(data.groups) || !data.groups.length) {
    section.style.display = 'none';
    return;
  }
  if (!calcSelectionInitialized) initCalcSelection();
  section.style.display = '';
  const lang = currentLanguage;
  container.innerHTML = data.groups.map(group => {
    const activeOpts = (group.options || []).filter(o => o.active !== false);
    if (!activeOpts.length) return '';
    const groupLabel = svcLang(group.label, lang);
    const cards = activeOpts.map(opt => {
      const selected = calcSelected.has(opt.id);
      const isRequired = !!opt.required;
      const title = svcLang(opt.title, lang);
      const desc = svcLang(opt.desc, lang);
      return `
        <div class="calc-option-card reveal${selected ? ' selected' : ''}${isRequired ? ' required' : ''}"
          data-calc-id="${escHtml(opt.id)}" role="button" tabindex="0" aria-pressed="${selected}">
          ${isRequired ? '<span class="calc-option-lock" aria-hidden="true">🔒</span>' : ''}
          <span class="calc-option-check" aria-hidden="true"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>
          <div class="calc-option-icon">${opt.icon || '📦'}</div>
          <div class="calc-option-title">${escHtml(title)}</div>
          <div class="calc-option-desc">${escHtml(desc)}</div>
        </div>`;
    }).join('');
    return `
      <div class="calc-group-block reveal">
        <div class="calc-group-label">${escHtml(groupLabel)}</div>
        <div class="calc-options-grid">${cards}</div>
      </div>`;
  }).join('');

  container.querySelectorAll('.calc-option-card').forEach(card => {
    const id = card.dataset.calcId;
    const opt = getCalcOptionById(id);
    const toggle = () => {
      if (!opt || opt.required) return;
      if (calcSelected.has(id)) calcSelected.delete(id);
      else calcSelected.add(id);
      renderCalculator();
    };
    card.addEventListener('click', toggle);
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggle();
      }
    });
  });
  container.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

function updateCalculatorModal() {
  const t = translations[currentLanguage] || translations.en;
  const count = calcSelected.size;
  const textEl = document.getElementById('calcModalText');
  const listEl = document.getElementById('calcModalList');
  if (textEl && t['calculator.modalText']) {
    textEl.textContent = t['calculator.modalText'].replace('{N}', String(count));
  }
  if (listEl) {
    const items = getSelectedCalcOptions();
    listEl.innerHTML = items.length
      ? items.map(item => `<li><span class="calc-modal-icon">${item.icon}</span><span>${escHtml(item.title)}</span></li>`).join('')
      : '';
  }
}

function openCalculatorModal() {
  updateCalculatorModal();
  const form = document.getElementById('calculatorForm');
  const success = document.getElementById('calcFormSuccess');
  if (form) form.style.display = 'block';
  if (success) success.classList.remove('active');
  openModal('calculatorModal');
}

function renderServices() {
  const list = document.getElementById('servicesList');
  if (!list) return;
  const lang = currentLanguage;
  const t = translations[lang] || translations.en;
  const showSection = isSiteSectionVisible('show_services_section');
  setSiteSectionVisible('services', ['navServicesItem', 'footerServicesItem'], showSection);
  if (!showSection) return;

  if (!siteServices.length) {
    list.innerHTML = '';
    if (allServices.length) setSiteSectionVisible('services', ['navServicesItem', 'footerServicesItem'], false);
    return;
  }

  setSiteSectionVisible('services', ['navServicesItem', 'footerServicesItem'], true);

  list.innerHTML = siteServices.map((svc, i) => {
    const id = svc.id || `s${i + 1}`;
    const num = String(i + 1).padStart(2, '0');
    const title = svcLang(svc.title, lang);
    const desc = svcLang(svc.shortDesc, lang);
    const windowHtml = SERVICE_WINDOWS[id] || SERVICE_WINDOWS[`s${(i % 6) + 1}`] || SERVICE_WINDOWS.s1;
    return `
      <div class="service-card" onclick="openServiceDetail('${escHtml(id)}')">
        ${windowHtml}
        <div class="service-content">
          <div class="service-number">— ${num}</div>
          <h3 class="service-title">${escHtml(title)}</h3>
          <p class="service-desc">${escHtml(desc)}</p>
          <span class="service-link"><span>${t['services.detail'] || 'Details'}</span> →</span>
        </div>
      </div>`;
  }).join('');
}

const carouselState = {};
const carouselTimers = {};

const PORTFOLIO_CATS = [
  { id: 'motion',  labelKey: 'cat.motion',  icon: '🎬' },
  { id: 'graphic', labelKey: 'cat.graphic', icon: '🎨' },
];

function getYouTubeId(url) {
  if (!url) return null;
  const m = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]{11})/);
  return m ? m[1] : null;
}

function renderPortfolio() {
  const grid = document.getElementById('portfolioGrid');
  if (!grid) return;
  const t = translations[currentLanguage];
  const lang = currentLanguage;
  const showSection = isSiteSectionVisible('show_portfolio_section');
  setSiteSectionVisible('portfolio', ['navPortfolioItem', 'footerPortfolioItem'], showSection);
  if (!showSection) return;

  if (!siteProjects.length) {
    grid.innerHTML = `<p style="text-align:center;color:var(--ink-soft);padding:40px 0;grid-column:1/-1">${t['portfolio.empty'] || ''}</p>`;
    return;
  }

  setSiteSectionVisible('portfolio', ['navPortfolioItem', 'footerPortfolioItem'], true);

  const catGroups = PORTFOLIO_CATS.map(cat => ({
    ...cat,
    label: t[cat.labelKey] || cat.id,
    items: siteProjects.filter(p => (p.categoryId || 'motion') === cat.id)
  })).filter(cat => cat.items.length > 0);

  grid.innerHTML = catGroups.map(cat => {
    if (!carouselState[cat.id]) carouselState[cat.id] = 0;
    return renderCategoryCarousel(cat, lang, t);
  }).join('');

  catGroups.forEach(cat => {
    startAutoplay(cat.id, cat.items.length);
  });
}

function renderCategoryCarousel(cat, lang, t) {
  const items = cat.items;
  const current = Math.min(carouselState[cat.id] || 0, items.length - 1);
  const p = items[current];
  const total = items.length;
  const displayTitle = (p.titles && p.titles[lang]) || p.title || '';
  const displayDesc = (p.descriptions && p.descriptions[lang]) || p.description || '';
  const ytId = getYouTubeId(p.videoUrl);
  const vtype = p.videoType || 'youtube';
  const isFullVideo = p.cardType === 'full';

  let mediaHtml = '';

  if (vtype === 'stream' && p.videoUrl) {
    // Cloudflare Stream — чистый плеер без кнопок и брендинга
    const cfSrc = p.videoUrl
      + (p.videoUrl.includes('?') ? '&' : '?')
      + 'autoplay=true&muted=true&loop=true&controls=false&preload=auto';
    mediaHtml = `
      <div class="pf-media" onclick="openPortfolioDetail('${escHtml(p.id)}')">
        <iframe class="pf-iframe"
          src="${escHtml(cfSrc)}"
          style="pointer-events:none"
          allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
          allowfullscreen id="cf-${escHtml(p.id)}"></iframe>
        <div class="pf-media-overlay">
          <svg width="44" height="44" viewBox="0 0 24 24" fill="white">
            <circle cx="12" cy="12" r="11" fill="rgba(0,0,0,.45)"/>
            <polygon points="10,8 16,12 10,16" fill="white"/>
          </svg>
        </div>
      </div>`;

  } else if (vtype === 'mp4' && p.videoUrl) {
    // Прямой MP4
    const vidId = 'mpv-' + escHtml(p.id);
    mediaHtml = `
      <div class="pf-media" onclick="openPortfolioDetail('${escHtml(p.id)}')">
        <video class="pf-iframe" id="${vidId}" src="${escHtml(p.videoUrl)}"
          autoplay muted loop playsinline style="object-fit:cover;pointer-events:none"></video>
        <div class="pf-media-overlay">
          <svg width="44" height="44" viewBox="0 0 24 24" fill="white">
            <circle cx="12" cy="12" r="11" fill="rgba(0,0,0,.45)"/>
            <polygon points="10,8 16,12 10,16" fill="white"/>
          </svg>
        </div>
      </div>`;

  } else if (ytId) {
    // YouTube — IFrame API для автопереключения + overlay блокирует кнопки
    const iframeId = 'yt-' + escHtml(p.id) + '-' + cat.id;
    mediaHtml = `
      <div class="pf-media" style="position:relative">
        <iframe class="pf-iframe"
          src="https://www.youtube.com/embed/${ytId}?autoplay=1&mute=1&loop=1&playlist=${ytId}&controls=0&modestbranding=1&rel=0&playsinline=1&enablejsapi=1&origin=${encodeURIComponent(location.origin)}"
          frameborder="0" allow="autoplay; encrypted-media" allowfullscreen
          id="${iframeId}"></iframe>
        <!-- Полный overlay — блокирует ВСЕ кнопки YouTube, клик открывает детали -->
        <div class="pf-yt-overlay" onclick="openPortfolioDetail('${escHtml(p.id)}')">
          <svg width="44" height="44" viewBox="0 0 24 24" fill="white">
            <circle cx="12" cy="12" r="11" fill="rgba(0,0,0,.45)"/>
            <polygon points="10,8 16,12 10,16" fill="white"/>
          </svg>
        </div>
      </div>`;

  } else if (p.thumbnail) {
    mediaHtml = `
      <div class="pf-media" onclick="openPortfolioDetail('${escHtml(p.id)}')">
        <img src="${escHtml(p.thumbnail)}" alt="" class="pf-thumb-img">
      </div>`;
  } else {
    mediaHtml = `
      <div class="pf-media pf-media-grad ${p.gradient || 'pv-1'}" onclick="openPortfolioDetail('${escHtml(p.id)}')">
        ${decoElements[p.gradient] || decoElements['pv-1']}
      </div>`;
  }

  const cardClass = isFullVideo ? 'pf-card pf-card-full' : 'pf-card';
  const infoHtml = isFullVideo ? '' : `
    <div class="pf-info">
      <div class="pf-info-cat">${escHtml(p.category || '')}</div>
      <div class="pf-info-title pf-info-animate">${escHtml(displayTitle)}</div>
      ${displayDesc ? `<p class="pf-info-desc pf-info-animate">${escHtml(displayDesc)}</p>` : ''}
      <div class="pf-info-meta pf-info-animate">
        ${p.client ? `<span class="pf-meta-item"><span class="pf-meta-label">${t['pd.client'] || 'Client'}</span> ${escHtml(p.client)}</span>` : ''}
        ${p.year ? `<span class="pf-meta-item"><span class="pf-meta-label">${t['pd.year'] || 'Year'}</span> ${escHtml(p.year)}</span>` : ''}
      </div>
      <button class="pf-detail-btn pf-info-animate" onclick="openPortfolioDetail('${escHtml(p.id)}')">
        ${t['portfolio.viewMore'] || 'View project'} →
      </button>
    </div>`;

  return `
    <div class="pf-category" id="pfcat-${cat.id}">
      <div class="pf-cat-header">
        <div class="pf-cat-title">
          <span class="pf-cat-icon">${cat.icon}</span>
          <span>${cat.label}</span>
          <span class="pf-cat-count">${total}</span>
        </div>
        <div class="pf-cat-controls">
          ${total > 1 ? `
            <button class="pf-arrow" onclick="carouselPrev('${cat.id}',${total})">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <span class="pf-counter">${current + 1}<span style="opacity:.4"> / </span>${total}</span>
            <button class="pf-arrow" onclick="carouselNext('${cat.id}',${total})">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 18l6-6-6-6"/></svg>
            </button>
            <button class="pf-view-all-btn" onclick="openCategoryModal('${cat.id}')">
              ${t['portfolio.viewAll'] || 'View all'} →
            </button>
          ` : ''}
        </div>
      </div>

      <div class="${cardClass}">
        ${mediaHtml}
        ${infoHtml}
        ${total > 1 ? `
          <div class="pf-dots">
            ${items.map((_, i) => `<span class="pf-dot ${i === current ? 'active' : ''}"
              onclick="carouselGo('${cat.id}',${i},${total})"></span>`).join('')}
          </div>
        ` : ''}
      </div>
    </div>`;
}

function carouselNext(catId, total) {
  carouselState[catId] = ((carouselState[catId] || 0) + 1) % total;
  refreshCarousel(catId);
  resetAutoplay(catId, total);
}

function carouselPrev(catId, total) {
  carouselState[catId] = ((carouselState[catId] || 0) - 1 + total) % total;
  refreshCarousel(catId);
  resetAutoplay(catId, total);
}

function carouselGo(catId, index, total) {
  carouselState[catId] = index;
  refreshCarousel(catId);
  resetAutoplay(catId, total);
}

function refreshCarousel(catId) {
  const t = translations[currentLanguage];
  const lang = currentLanguage;
  const cat = PORTFOLIO_CATS.find(c => c.id === catId);
  if (!cat) return;
  const items = siteProjects.filter(p => (p.categoryId || 'motion') === catId);
  const catWithItems = { ...cat, label: t[cat.labelKey] || cat.id, items };
  const el = document.getElementById('pfcat-' + catId);
  if (el) {
    el.outerHTML = renderCategoryCarousel(catWithItems, lang, t);
  }
}

// ── YouTube IFrame API ────────────────────────────────────────────────────────
// Глобальный реестр: iframeId → { catId, total }
const ytPlayerRegistry = {};
let ytApiReady = false;
const ytPlayerInstances = {}; // iframeId → YT.Player

// Callback вызывается YouTube API когда он загрузится
window.onYouTubeIframeAPIReady = function() {
  ytApiReady = true;
  // Инициализируем все уже зарегистрированные плееры
  Object.entries(ytPlayerRegistry).forEach(([iframeId, info]) => {
    initYTPlayer(iframeId, info.catId, info.total);
  });
};

function initYTPlayer(iframeId, catId, total) {
  if (!ytApiReady || !window.YT || !window.YT.Player) return;
  if (ytPlayerInstances[iframeId]) return; // уже создан
  const el = document.getElementById(iframeId);
  if (!el) return;

  ytPlayerInstances[iframeId] = new YT.Player(iframeId, {
    events: {
      onStateChange(event) {
        // YT.PlayerState.ENDED = 0
        if (event.data === 0) {
          carouselState[catId] = ((carouselState[catId] || 0) + 1) % total;
          refreshCarousel(catId);
          // Новый iframe — заново регистрируем после рендера
          startAutoplay(catId, total);
        }
      }
    }
  });
}

function loadYTApiIfNeeded() {
  if (window.YT || document.querySelector('script[src*="youtube.com/iframe_api"]')) return;
  const tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/iframe_api';
  document.head.appendChild(tag);
}

function startAutoplay(catId, total) {
  if (total <= 1) return;
  clearInterval(carouselTimers[catId]);

  const items = siteProjects.filter(p => (p.categoryId || 'motion') === catId);
  const current = carouselState[catId] || 0;
  const p = items[current];
  if (!p) return;

  const vtype = p.videoType || 'youtube';
  const ytId = getYouTubeId(p.videoUrl);

  if (vtype === 'youtube' && ytId) {
    // Используем IFrame API — переключение по окончании видео
    const iframeId = 'yt-' + p.id + '-' + catId;
    ytPlayerRegistry[iframeId] = { catId, total };
    loadYTApiIfNeeded();
    if (ytApiReady) {
      // небольшая задержка чтобы iframe успел загрузиться в DOM
      setTimeout(() => initYTPlayer(iframeId, catId, total), 800);
    }
    // Fallback: если видео длиннее 10 мин — переключаем через 8 мин
    carouselTimers[catId] = setTimeout(() => {
      // Только если плеер не сработал сам
      carouselState[catId] = ((carouselState[catId] || 0) + 1) % total;
      refreshCarousel(catId);
      startAutoplay(catId, total);
    }, 8 * 60 * 1000);
    return;
  }

  // Для CF Stream и MP4 — таймер 8 секунд (или убрать если не нужен)
  carouselTimers[catId] = setInterval(() => {
    carouselState[catId] = ((carouselState[catId] || 0) + 1) % total;
    refreshCarousel(catId);
  }, 8000);
}


function resetAutoplay(catId, total) {
  clearInterval(carouselTimers[catId]);
  clearTimeout(carouselTimers[catId]);
  startAutoplay(catId, total);
}

function openCategoryModal(catId) {
  const t = translations[currentLanguage];
  const lang = currentLanguage;
  const cat = PORTFOLIO_CATS.find(c => c.id === catId);
  const items = siteProjects.filter(p => (p.categoryId || 'motion') === catId);
  const label = cat ? (t[cat.labelKey] || catId) : catId;

  const old = document.getElementById('categoryModal');
  if (old) old.remove();

  const modal = document.createElement('div');
  modal.id = 'categoryModal';
  modal.className = 'modal-overlay';

  const gridItems = items.map(p => {
    const displayTitle = (p.titles && p.titles[lang]) || p.title || '';
    const ytId = getYouTubeId(p.videoUrl);
    let thumb = '';
    if (ytId) {
      thumb = `<img src="https://img.youtube.com/vi/${ytId}/mqdefault.jpg" alt="" style="width:100%;height:100%;object-fit:cover;border-radius:14px 14px 0 0">`;
    } else if (p.thumbnail) {
      thumb = `<img src="${escHtml(p.thumbnail)}" alt="" style="width:100%;height:100%;object-fit:cover;border-radius:14px 14px 0 0">`;
    } else {
      thumb = `<div class="portfolio-visual ${p.gradient || 'pv-1'}" style="border-radius:14px 14px 0 0;height:100%">${decoElements[p.gradient] || decoElements['pv-1']}</div>`;
    }
    return `
      <div onclick="closeCategoryModal();openPortfolioDetail('${escHtml(p.id)}')" style="
        background:rgba(255,255,255,.7);border-radius:16px;overflow:hidden;
        border:1px solid rgba(255,255,255,.8);cursor:pointer;transition:transform .2s;
        box-shadow:0 4px 16px rgba(91,63,191,.08);"
        onmouseover="this.style.transform='translateY(-4px)'"
        onmouseout="this.style.transform='translateY(0)'">
        <div style="aspect-ratio:16/9;overflow:hidden">${thumb}</div>
        <div style="padding:14px 16px">
          <div style="font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--violet-deep);margin-bottom:6px">${escHtml(p.category || '')}</div>
          <div style="font-family:'Playfair Display',serif;font-size:16px;font-weight:500;color:var(--ink)">${escHtml(displayTitle)}</div>
        </div>
      </div>`;
  }).join('');

  modal.innerHTML = `
    <div class="modal" style="max-width:860px;width:90%">
      <div style="padding:28px 32px 20px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid rgba(91,63,191,.1)">
        <h3 style="font-family:'Playfair Display',serif;font-size:22px;font-weight:500;color:var(--ink)">${escHtml(label)}</h3>
        <button onclick="closeCategoryModal()" style="background:rgba(91,63,191,.08);border:none;width:36px;height:36px;border-radius:50%;cursor:pointer;font-size:18px;color:var(--ink-soft);display:flex;align-items:center;justify-content:center">×</button>
      </div>
      <div style="padding:24px 32px 32px;display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:16px;overflow-y:auto;max-height:65vh">
        ${gridItems}
      </div>
    </div>`;

  document.body.appendChild(modal);
  modal.addEventListener('click', e => { if (e.target === modal) closeCategoryModal(); });
  requestAnimationFrame(() => modal.classList.add('active'));
  document.body.classList.add('modal-open');
}

function openAppModal(appId) {
  const a = (siteSettings.apps || []).find(x => x.id === appId);
  if (!a) return;
  const lang = currentLanguage;
  const desc = (a.descriptions && (a.descriptions[lang] || a.descriptions['en'])) || a.description || '';
  const screens = (a.screens || []).filter(s => s && s.trim());

  const old = document.getElementById('appModal');
  if (old) old.remove();
  if (!window._amState) window._amState = {};
  window._amState[a.id] = 0;

  const modal = document.createElement('div');
  modal.id = 'appModal';
  modal.className = 'modal-overlay';

  const googleBtn = a.showGooglePlay && a.googlePlayUrl ? `
    <a href="${escHtml(a.googlePlayUrl)}" class="store-btn store-btn-google" target="_blank" rel="noopener" onclick="event.stopPropagation()">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M3.18 23.76a2 2 0 0 0 2.07-.22l11.43-6.6-2.57-2.57zM1 2.24A2 2 0 0 0 .5 3.5v17a2 2 0 0 0 .5 1.26l.07.07 9.52-9.52v-.22zM20.34 10.47l-2.63-1.52-2.87 2.87 2.87 2.87 2.65-1.53a2 2 0 0 0 0-3.69zM5.25.46A2 2 0 0 0 3.18.24L14.11 9.6l-2.57-2.56z"/></svg>
      Google Play
    </a>` : '';

  const appleBtn = a.showAppStore && a.appStoreUrl ? `
    <a href="${escHtml(a.appStoreUrl)}" class="store-btn store-btn-apple" target="_blank" rel="noopener" onclick="event.stopPropagation()">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.14-2.18 1.27-2.16 3.8.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.78M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
      App Store
    </a>` : '';

  const aid = escHtml(a.id);
  const screensHtml = screens.length ? `
    <div style="position:relative;background:#000;overflow:hidden">
      <div id="amtrack-${aid}" style="display:flex;transition:transform .35s ease;will-change:transform">
        ${screens.map(s => `
          <div style="min-width:100%;flex-shrink:0">
            <img src="${escHtml(s)}" alt="" style="width:100%;display:block;max-height:420px;object-fit:contain">
          </div>`).join('')}
      </div>
      ${screens.length > 1 ? `
        <button onclick="event.stopPropagation();appModalPrev('${aid}',${screens.length})" style="position:absolute;left:8px;top:50%;transform:translateY(-50%);background:rgba(0,0,0,.55);color:#fff;border:none;width:36px;height:36px;border-radius:50%;font-size:20px;cursor:pointer;display:flex;align-items:center;justify-content:center">‹</button>
        <button onclick="event.stopPropagation();appModalNext('${aid}',${screens.length})" style="position:absolute;right:8px;top:50%;transform:translateY(-50%);background:rgba(0,0,0,.55);color:#fff;border:none;width:36px;height:36px;border-radius:50%;font-size:20px;cursor:pointer;display:flex;align-items:center;justify-content:center">›</button>
        <div style="position:absolute;bottom:10px;left:50%;transform:translateX(-50%);display:flex;gap:6px">
          ${screens.map((_, i) => `<span id="amdot-${aid}-${i}" style="width:${i===0?'16px':'6px'};height:6px;border-radius:3px;background:${i===0?'#fff':'rgba(255,255,255,.45)'};cursor:pointer;transition:all .3s" onclick="event.stopPropagation();appModalGo('${aid}',${i},${screens.length})"></span>`).join('')}
        </div>` : ''}
    </div>` : '';

  modal.innerHTML = `
    <div class="modal" style="max-width:760px;width:94%;max-height:90vh;overflow-y:auto;padding:0;border-radius:20px">
      <div style="padding:20px 24px 16px;display:flex;align-items:flex-start;justify-content:space-between;border-bottom:1px solid rgba(91,63,191,.1)">
        <div style="display:flex;align-items:center;gap:14px;flex:1;min-width:0">
          ${a.icon ? `<img src="${escHtml(a.icon)}" style="width:56px;height:56px;border-radius:14px;object-fit:cover;flex-shrink:0;box-shadow:0 4px 12px rgba(0,0,0,.15)">` : ''}
          <div style="min-width:0">
            <div style="font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--violet-deep);margin-bottom:2px">${escHtml(a.platform)}</div>
            <div style="font-family:'Playfair Display',serif;font-size:22px;font-weight:500;color:var(--ink);line-height:1.2;margin-bottom:10px">${escHtml(a.title)}</div>
            ${googleBtn || appleBtn ? `<div style="display:flex;gap:8px;flex-wrap:wrap">${googleBtn}${appleBtn}</div>` : ''}
          </div>
        </div>
        <button onclick="closeAppModal()" style="background:rgba(91,63,191,.08);border:none;width:36px;height:36px;border-radius:50%;cursor:pointer;font-size:20px;color:var(--ink-soft);display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-left:12px">×</button>
      </div>
      ${screensHtml}
      ${desc ? `<div style="padding:20px 24px 24px"><p style="font-size:15px;color:var(--ink-soft);line-height:1.7;margin:0">${escHtml(desc)}</p></div>` : '<div style="height:8px"></div>'}
    </div>`;

  document.body.appendChild(modal);
  modal.addEventListener('click', e => { if (e.target === modal) closeAppModal(); });
  requestAnimationFrame(() => modal.classList.add('active'));
  document.body.classList.add('modal-open');
}

window.appModalGo = function(appId, idx, total) {
  if (!window._amState) window._amState = {};
  window._amState[appId] = idx;
  const track = document.getElementById('amtrack-' + appId);
  if (track) track.style.transform = `translateX(-${idx * 100}%)`;
  for (let i = 0; i < total; i++) {
    const dot = document.getElementById('amdot-' + appId + '-' + i);
    if (dot) {
      dot.style.width = i === idx ? '16px' : '6px';
      dot.style.background = i === idx ? '#fff' : 'rgba(255,255,255,.45)';
    }
  }
};

window.appModalNext = function(appId, total) {
  if (!window._amState) window._amState = {};
  const next = ((window._amState[appId] || 0) + 1) % total;
  window.appModalGo(appId, next, total);
};

window.appModalPrev = function(appId, total) {
  if (!window._amState) window._amState = {};
  const prev = ((window._amState[appId] || 0) - 1 + total) % total;
  window.appModalGo(appId, prev, total);
};
window.appModalGo = function(idx, total) {
  document.querySelectorAll('.app-modal-screen').forEach((el, i) => el.classList.toggle('active', i === idx));
  document.querySelectorAll('[id^="amdot-"]').forEach((el, i) => el.classList.toggle('active', i === idx));
};

function closeAppModal() {
  const modal = document.getElementById('appModal');
  if (modal) {
    modal.classList.remove('active');
    setTimeout(() => { modal.remove(); document.body.classList.remove('modal-open'); }, 300);
  }
}
window.closeAppModal = closeAppModal;

function closeCategoryModal() {
  const modal = document.getElementById('categoryModal');
  if (modal) {
    modal.classList.remove('active');
    setTimeout(() => { modal.remove(); document.body.classList.remove('modal-open'); }, 300);
  }
}

// ── App screenshot slider state ───────────────────────────────────────────────
const appSliderState = {};
const appSliderTimers = {};

function startAppSlider(appId, total) {
  if (total <= 1) return;
  clearInterval(appSliderTimers[appId]);
  appSliderTimers[appId] = setInterval(() => {
    appSliderState[appId] = ((appSliderState[appId] || 0) + 1) % total;
    updateAppSlider(appId, total);
  }, 5000);
}

function updateAppSlider(appId, total) {
  const current = appSliderState[appId] || 0;
  const wrap = document.getElementById('appslider-' + appId);
  if (!wrap) return;
  const imgs = wrap.querySelectorAll('.app-screen-img');
  const dots = wrap.querySelectorAll('.app-screen-dot');
  imgs.forEach((img, i) => img.classList.toggle('active', i === current));
  dots.forEach((dot, i) => dot.classList.toggle('active', i === current));
}

window.appSliderGo = function(appId, idx, total) {
  appSliderState[appId] = idx;
  updateAppSlider(appId, total);
  clearInterval(appSliderTimers[appId]);
  startAppSlider(appId, total);
};

function renderDevSection() {
  const section = document.getElementById('development');
  const grid = document.getElementById('devGrid');
  const navItem = document.getElementById('navDevItem');
  const footerItem = document.getElementById('footerDevItem');
  if (!section) return;

  const show = isSiteSectionVisible('show_dev_section');
  setSiteSectionVisible('development', ['navDevItem', 'footerDevItem'], show);

  if (!show || !grid) return;

  const t = translations[currentLanguage];
  const apps = (siteSettings.apps || []).filter(a => a.visible);
  const lang = currentLanguage;

  const webHtml = siteWebProjects.map(p => {
    const title = (p.titles && p.titles[lang]) || p.title || '';
    const desc = (p.descriptions && p.descriptions[lang]) || '';
    const thumb = p.thumbnail
      ? `<img class="dev-icon" src="${escHtml(p.thumbnail)}" alt="${escHtml(title)}" style="object-fit:cover">`
      : `<div class="dev-icon-placeholder">🌐</div>`;
    return `
      <div class="dev-card dev-card-web" onclick="openPortfolioDetail('${escHtml(p.id)}')" style="cursor:pointer">
        <div class="dev-card-header">
          ${thumb}
          <div class="dev-card-meta">
            <span class="dev-platform">${t['cat.web'] || 'Web'}</span>
            <h3 class="dev-title">${escHtml(title)}</h3>
          </div>
        </div>
        ${desc ? `<p class="dev-desc">${escHtml(desc)}</p>` : ''}
      </div>`;
  }).join('');

  const appsHtml = apps.map(a => {
    const screens = (a.screens || []).filter(s => s && s.trim());
    const hasScreens = screens.length > 0;
    const hasIcon = !!a.icon;

    // Screenshot slider
    const sliderHtml = hasScreens ? `
      <div class="app-slider" id="appslider-${escHtml(a.id)}">
        <div class="app-screens">
          ${screens.map((s, i) => `
            <img class="app-screen-img ${i === 0 ? 'active' : ''}"
              src="${escHtml(s)}" alt="Screenshot ${i+1}">`).join('')}
        </div>
        ${screens.length > 1 ? `
          <div class="app-screen-dots">
            ${screens.map((_, i) => `
              <span class="app-screen-dot ${i === 0 ? 'active' : ''}"
                onclick="appSliderGo('${escHtml(a.id)}',${i},${screens.length})"></span>`).join('')}
          </div>` : ''}
      </div>` : '';

    // Store buttons
    const googlePlayBtn = a.showGooglePlay && a.googlePlayUrl ? `
      <a href="${escHtml(a.googlePlayUrl)}" class="store-btn store-btn-google" target="_blank" rel="noopener">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M3.18 23.76a2 2 0 0 0 2.07-.22l11.43-6.6-2.57-2.57zM1 2.24A2 2 0 0 0 .5 3.5v17a2 2 0 0 0 .5 1.26l.07.07 9.52-9.52v-.22zM20.34 10.47l-2.63-1.52-2.87 2.87 2.87 2.87 2.65-1.53a2 2 0 0 0 0-3.69zM5.25.46A2 2 0 0 0 3.18.24L14.11 9.6l-2.57-2.56z"/></svg>
        Google Play
      </a>` : '';

    const appStoreBtn = a.showAppStore && a.appStoreUrl ? `
      <a href="${escHtml(a.appStoreUrl)}" class="store-btn store-btn-apple" target="_blank" rel="noopener">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.14-2.18 1.27-2.16 3.8.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.78M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
        App Store
      </a>` : '';

    const hasButtons = googlePlayBtn || appStoreBtn;

    return `
      <div class="dev-card" onclick="openAppModal('${escHtml(a.id)}')" style="cursor:pointer">
        <div class="dev-card-header">
          ${hasIcon ? `<img class="dev-icon" src="${escHtml(a.icon)}" alt="${escHtml(a.title)}">` : `<div class="dev-icon-placeholder">📱</div>`}
          <div class="dev-card-meta">
            <span class="dev-platform">${escHtml(a.platform)}</span>
            <h3 class="dev-title">${escHtml(a.title)}</h3>
          </div>
        </div>
        ${sliderHtml}
        <p class="dev-desc">${escHtml((a.descriptions && a.descriptions[currentLanguage]) || (a.descriptions && a.descriptions['en']) || a.description || '')}</p>
        ${hasButtons ? `<div class="store-buttons">${googlePlayBtn}${appStoreBtn}</div>` : ''}
      </div>`;
  }).join('');

  grid.innerHTML = webHtml + appsHtml;

  // Start sliders
  apps.forEach(a => {
    const screens = (a.screens || []).filter(s => s && s.trim());
    if (screens.length > 1) {
      appSliderState[a.id] = 0;
      startAppSlider(a.id, screens.length);
    }
  });
}

function escHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function getProjectById(id) {
  return allProjects.find(p => p.id === id);
}

function embedVideo(url, videoType) {
  if (!url) return '';
  const vtype = videoType || 'youtube';

  if (vtype === 'stream') {
    // Cloudflare Stream — чистый плеер, без логотипа и бренда
    const cfSrc = url.includes('?') ? url : url;
    return `<div style="position:relative;padding-top:56.25%;margin-bottom:16px">
      <iframe src="${escHtml(cfSrc)}"
        style="border:none;position:absolute;top:0;left:0;width:100%;height:100%;border-radius:8px"
        allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
        allowfullscreen></iframe>
    </div>`;
  }

  if (vtype === 'mp4' || url.match(/\.(mp4|webm|ogg)(\?|$)/i)) {
    return `<video class="portfolio-video" controls src="${escHtml(url)}"></video>`;
  }

  // YouTube
  const ytMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([\w-]+)/);
  if (ytMatch) {
    const ytId = ytMatch[1];
    return `<div style="position:relative;padding-top:56.25%;margin-bottom:16px">
      <iframe src="https://www.youtube.com/embed/${ytId}?modestbranding=1&rel=0"
        style="border:none;position:absolute;top:0;left:0;width:100%;height:100%;border-radius:8px"
        frameborder="0" allowfullscreen></iframe>
    </div>`;
  }

  return `<a href="${escHtml(url)}" class="btn-primary" style="display:inline-flex;margin-bottom:20px" target="_blank" rel="noopener">Watch video →</a>`;
}

function openPortfolioDetail(id) {
  const t = translations[currentLanguage];
  const lang = currentLanguage;
  const project = getProjectById(id);
  if (!project) return;

  const content = document.getElementById('portfolioModalContent');
  const gradStyle = gradientStyles[project.gradient] || gradientStyles['pv-1'];
  const visual = project.thumbnail
    ? `<img src="${escHtml(project.thumbnail)}" alt="" style="width:100%;height:100%;object-fit:cover">`
    : (decoElements[project.gradient] || decoElements['pv-1']);

  const displayTitle = (project.titles && project.titles[lang]) || project.title || '';
  const displayDesc = (project.descriptions && project.descriptions[lang]) || project.description || '';

  content.innerHTML = `
    <div class="portfolio-detail-image" style="${gradStyle}">${visual}</div>
    <div class="portfolio-detail-body">
      <div class="portfolio-detail-cat">${escHtml(project.category || '')}</div>
      <h2 class="portfolio-detail-title">${escHtml(displayTitle)}</h2>
      ${project.videoUrl ? embedVideo(project.videoUrl, project.videoType) : ''}
      <p class="portfolio-detail-text">${escHtml(displayDesc)}</p>
      <div class="portfolio-detail-meta">
        <div><div class="meta-item-label">${t['pd.client']}</div><div class="meta-item-value">${escHtml(project.client || '—')}</div></div>
        <div><div class="meta-item-label">${t['pd.year']}</div><div class="meta-item-value">${escHtml(project.year || '—')}</div></div>
        <div><div class="meta-item-label">${t['pd.duration']}</div><div class="meta-item-value">${escHtml(project.duration || '—')}</div></div>
      </div>
      <button class="btn-primary" style="width:100%;justify-content:center" onclick="closeModal('portfolioModal');openModal('contactModal');">
        <span>${t['pd.cta']}</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </button>
    </div>`;
  openModal('portfolioModal');
}

// CONTACT FORM
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', async function(e) {
  e.preventDefault();
  const formData = new FormData(this);
  try {
    if (this.action.includes('formspree.io') && !this.action.includes('YOUR_FORMSPREE_ID')) {
      const response = await fetch(this.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });
      if (!response.ok) throw new Error('Submit failed');
    }
    contactForm.style.display = 'none';
    document.querySelector('.contact-info-row').style.display = 'none';
    document.getElementById('formSuccess').classList.add('active');
    contactForm.reset();
  } catch (error) {
    alert('Произошла ошибка. Попробуйте снова или напишите на info@korsmotion.ch');
  }
});

// SCROLL REVEAL
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

initReviewStarPicker();
document.getElementById('openAllReviewsBtn')?.addEventListener('click', () => {
  renderAllReviewsModal(sortedSiteReviews);
  openModal('allReviewsModal');
});
document.getElementById('openReviewFormBtn')?.addEventListener('click', () => {
  resetReviewForm();
  openModal('reviewModal');
});
document.getElementById('calculatorRequestBtn')?.addEventListener('click', openCalculatorModal);
document.getElementById('calculatorForm')?.addEventListener('submit', async e => {
  e.preventDefault();
  const name = document.getElementById('calcFormName')?.value.trim();
  const email = document.getElementById('calcFormEmail')?.value.trim();
  const phone = document.getElementById('calcFormPhone')?.value.trim();
  if (!name || !email) return;
  const selected = getSelectedCalcOptions();
  const selectedOptions = selected.map(o => o.title);
  const totalInternal = getCalcTotalInternal();
  try {
    const res = await fetch('/api/calculator-request', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name, email, phone, lang: currentLanguage,
        selectedOptions, totalInternal,
      }),
    });
    if (!res.ok) throw new Error('submit failed');
    const data = await res.json().catch(() => ({}));
    const form = document.getElementById('calculatorForm');
    const success = document.getElementById('calcFormSuccess');
    const successText = success?.querySelector('.form-success-text');
    if (successText && data.message) successText.textContent = data.message;
    if (form) form.style.display = 'none';
    if (success) success.classList.add('active');
    setTimeout(() => closeModal('calculatorModal'), 3000);
  } catch (_) {
    alert('Ошибка отправки. Попробуйте позже.');
  }
});
document.getElementById('reviewForm')?.addEventListener('submit', async e => {
  e.preventDefault();
  const name = document.getElementById('reviewFormName')?.value.trim();
  const role = document.getElementById('reviewFormRole')?.value.trim();
  const text = document.getElementById('reviewFormText')?.value.trim();
  if (!name || !text) return;
  try {
    const res = await fetch('/api/reviews', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, role, text, stars: reviewFormStars }),
    });
    if (!res.ok) throw new Error('submit failed');
    const form = document.getElementById('reviewForm');
    const success = document.getElementById('reviewFormSuccess');
    if (form) form.style.display = 'none';
    if (success) success.classList.add('active');
    setTimeout(() => closeModal('reviewModal'), 3000);
  } catch (_) {
    alert('Ошибка отправки. Попробуйте позже.');
  }
});

loadSiteData().then(() => {
  applyLang(detectLang());
  document.querySelectorAll('#portfolioGrid .portfolio-item, #devGrid .dev-card').forEach(el => observer.observe(el));
});

window.carouselNext = carouselNext;
window.carouselPrev = carouselPrev;
window.carouselGo = carouselGo;
window.openCategoryModal = openCategoryModal;
window.closeCategoryModal = closeCategoryModal;
