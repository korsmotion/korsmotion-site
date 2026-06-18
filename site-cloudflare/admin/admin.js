const ADMIN_PASSWORD = 'korsmotion2026';
const SESSION_KEY = 'korsmotion_admin_session';
const GITHUB_TOKEN_KEY = 'korsmotion_github_token';
const WEATHER_KEY = 'korsmotion_weather_key';
const WEATHER_IMAGE_ACCEPT = 'image/*,.gif';
const WEATHER_SLOTS = [
  { id: 'sunny', label: 'Sunny', emoji: '☀️' },
  { id: 'night', label: 'Night', emoji: '🌙' },
  { id: 'cloudy', label: 'Cloudy', emoji: '☁️' },
  { id: 'rain', label: 'Rain', emoji: '🌧️' },
  { id: 'snow', label: 'Snow', emoji: '❄️' },
  { id: 'thunderstorm', label: 'Thunderstorm', emoji: '⛈️' },
  { id: 'fog', label: 'Fog', emoji: '🌫️' },
  { id: 'sun_up', label: 'Sun_up_Рассвет', emoji: '🌅' },
  { id: 'sunset', label: 'Закат', emoji: '🌇' },
];
const GITHUB_REPO = 'korsmotion/korsmotion-site';
const GITHUB_BRANCH = 'main';
const API_DATA = '/api/data';
const API_SAVE = '/api/save';
const API_SERVICES = '/api/services';
const API_REVIEWS = '/api/reviews';
const API_HERO = '/api/hero';
const API_CALCULATOR = '/api/calculator';
const API_CLIENTS = '/api/clients';
const WEATHER_CITY = 'Bischofszell,CH';
const WEATHER_REFRESH_MS = 30 * 60 * 1000;
const SECTION_COLLAPSE_KEY = 'korsmotion_admin_section_';
const SECTION_COLLAPSE_DEFAULTS = { dashboard: false, hero: false, portfolio: true, devApps: true, services: true, reviews: true, calculator: true, clients: true };
const CAT_COLLAPSE_PREFIX = 'korsmotion_cat_collapsed_';
const PROJECT_CARD_COLLAPSE_PREFIX = 'korsmotion_proj_collapsed_';
const APP_CARD_COLLAPSE_PREFIX = 'korsmotion_appcard_collapsed_';
const SERVICE_CARD_COLLAPSE_PREFIX = 'korsmotion_svc_collapsed_';

// ── Admin UI translations ─────────────────────────────────────────────────────
const UI = {
  ru: {
    adminTitle: 'Админ-панель', viewSite: 'Смотреть сайт', logout: 'Выйти',
    showDev: 'Показать на сайте', showDevDesc: 'Раздел «Разработка» на главной и в меню',
    portfolio: 'Портфолио', devApps: 'Разработка', devAppsDesc: 'Веб-проекты и приложения',
    addDev: '+ Добавить', saveChanges: 'Сохранить',
    add: '+ Добавить', hide: 'Скрыть', show: 'Показать', delete: 'Удалить',
    noWebProjects: 'Нет веб-проектов. Нажми + Добавить.',
    noAppsSub: 'Нет приложений. Нажми + Добавить.',
    loading: 'Загрузка...', saving: 'Сохраняю...', saved: '✓ Сохранено',
    loadedServer: '✓✓ Загружено с сервера', loadedFiles: 'Загружено из файлов (KV недоступен)',
    unsavedChanges: '● Несохранённые изменения',
    saveError: 'Ошибка сохранения', noProjects: 'Нет проектов. Нажми + Добавить.',
    noApps: 'Нет проектов разработки. Нажми + Добавить.',
    fieldTitle: 'Название', fieldThumb: 'Ссылка на картинку', fieldVideo: 'Ссылка на видео (YouTube)',
    fieldPlatform: 'Платформа', fieldLink: 'Ссылка', fieldDesc: 'Описание',
    fieldClient: 'Клиент', fieldYear: 'Год', fieldDuration: 'Длительность',
    langLabel: 'Контент на языках', noImage: 'Нет картинки',
    deleteConfirm: 'Удалить этот проект?', deleteAppConfirm: 'Удалить это приложение?',
    password: 'Пароль', signIn: 'Войти', wrongPassword: 'Неверный пароль',
    catLabel: 'Категория контента',
    dashboardTitle: 'Дашборд', dashProjects: 'Проектов', dashApps: 'Приложений',
    dashLastSaved: 'Последнее сохранение', dashViewsToday: 'Просмотров сегодня',
    dashWeek: 'За 7 дней', dashMonth: 'За 30 дней',
    settingsTitle: 'Настройки', settingsClose: 'Закрыть', settingsBtnTitle: 'Настройки',
    integrationsTitle: 'Интеграции', githubToken: 'GitHub Token', githubDesc: 'Для загрузки файлов в репозиторий',
    weatherTitle: 'Погода', weatherApiKey: 'OpenWeatherMap API Key',
    weatherDesc: 'Для виджета погоды в Dashboard', weatherImages: 'Фоновые картинки погоды',
    generalTitle: 'Основные', saveBtn: 'Сохранить', uploadBtn: '📁 Загрузить',
    weatherNoApiKey: 'Укажи API ключ в Настройках ⚙️', weatherLoading: 'Загрузка погоды…',
    weatherError: 'Не удалось загрузить погоду', weatherToday: 'Сегодня',
    svcFieldTitle: 'НАЗВАНИЕ',
    svcFieldPrice: 'ЦЕНА (ЧИСЛО)',
    svcFieldShortDesc: 'КРАТКОЕ ОПИСАНИЕ (КАРТОЧКА)',
    svcFieldSubtitle: 'ПОДЗАГОЛОВОК (МОДАЛ)',
    svcFieldWhat: 'ЧТО ПОЛУЧАЕТЕ',
    svcFieldPriceNote: 'ПРИМЕЧАНИЕ К ЦЕНЕ / СРОК',
    svcFieldSteps: 'ШАГИ ПРОЦЕССА (4 ШАГА)',
    svcFieldFaq: 'FAQ (3 ВОПРОСА)',
    svcHide: 'Скрыть',
    svcShow: 'Показать',
    svcSave: '💾 Сохранить услуги',
    svcCount: 'Услуги',
    svcDesc: 'Редактируй тексты на всех 5 языках. Переключай язык внутри каждой карточки. Сохраняй кнопкой «Сохранить» внизу.',
    heroTitle: 'Главная', heroShow: 'Показать',
    heroBadge: 'Бейдж', heroMainTitle: 'Заголовок (HTML: &lt;br&gt;, &lt;em&gt;)',
    heroSubtitle: 'Подзаголовок', heroBtn1: 'Кнопка 1 — текст', heroBtn1Link: 'Кнопка 1 — ссылка',
    heroBtn2: 'Кнопка 2 — текст', heroBtn2Link: 'Кнопка 2 — ссылка',
    heroMedia: 'Фон-заставка (карточка сзади)', heroMediaNone: 'Заставка не загружена',
    heroMediaOpacity: 'Прозрачность фона',
    heroCardMedia: 'Карточка справа (отдельно)', heroCardMediaNone: 'Показывается логотип KM',
    reviewsTitle: 'Отзывы', reviewsTabPending: '📬 Новые', reviewsTabApproved: '✅ Одобренные',
    reviewsApprove: '✓ Одобрить', reviewsHide: 'Скрыть', reviewsShow: 'Показать',
    reviewsDelete: 'Удалить', reviewsDeleteShort: '✕ Удалить',
    reviewsEmptyPending: 'Нет новых отзывов', reviewsEmptyApproved: 'Нет одобренных отзывов',
    reviewsHidden: 'Скрыт',
    calcTitle: 'Калькулятор', calcShow: 'Показать на сайте',
    calcAddGroup: '+ Добавить группу', calcAddOption: '+ Добавить опцию',
    calcDeleteGroup: 'Удалить группу', calcDeleteOption: 'Удалить',
    calcGroupLabel: 'Название группы', calcActive: 'Активна', calcRequired: 'Обязательная',
    calcIcon: 'Иконка (emoji)', calcPrice: 'Внутренняя цена (CHF)', calcTitleField: 'Заголовок', calcDescField: 'Описание',
    calcTabOverview: 'Обзор', calcTabEditor: 'Редактор', calcTabGroups: 'Группы',
    calcColNum: '#', calcColIcon: 'Иконка', calcColName: 'Название', calcColGroup: 'Группа', calcColPrice: 'Цена',
    calcColType: 'Тип', calcColActive: 'Активна', calcColRequired: 'Обяз.', calcColActions: 'Действия',
    calcTotalOpts: 'Всего опций', calcTotalSum: 'Сумма', calcTotalCosts: 'Затраты', calcTotalMargin: 'Маржа',
    calcSave: 'Сохранить', calcSaveOption: 'Сохранить опцию', calcBackList: '← Назад к списку',
    calcNotesTitle: 'Внутренние заметки 🔒', calcNotesField: 'Заметки',
    calcDomainField: 'Где регистрируем домен', calcToolsField: 'Используемые инструменты', calcTimeField: 'Примерное время выполнения',
    calcInternalCost: 'Мои затраты (CHF)', calcInternalCostHint: 'Подрядчики, плагины, сервисы',
    calcPrice: 'Цена', calcCurrency: 'Валюта', calcPaymentType: 'Тип платежа',
    calcPayOneTime: 'Единоразово', calcPayMonthly: 'В месяц', calcPayYearly: 'В год',
    calcPayShortOne: 'разово', calcPayShortMonth: '/мес', calcPayShortYear: '/год',
    calcSearchPh: '🔍 Поиск по названию...', calcFilterGroup: 'Группа', calcFilterAll: 'Все',
    calcDocsTitle: 'Документы 📎', calcDocsAttach: 'Прикрепить файл', calcDocsTooBig: 'Файл больше 5 МБ',
    calcGroupColId: 'ID', calcGroupColName: 'Название (RU)', calcGroupColCount: 'Кол-во опций', calcSelectGroup: 'Группа',
    calcGroupSelType: 'Тип выбора', calcGroupSelMultiple: 'Множественный выбор (чекбоксы)', calcGroupSelSingle: 'Одиночный выбор (радиокнопки)',
    calcNoOptions: 'Нет опций. Добавьте первую.', calcNoGroups: 'Нет групп. Добавьте первую.',
    calcDocsEmpty: 'Нет документов', calcDocOpen: 'Открыть',
    clientsTitle: 'Клиенты 👥', clientsAdd: '+ Добавить клиента', clientsBack: '← Назад к списку',
    clientsSave: 'Сохранить клиента', clientsColNum: '#', clientsColName: 'Имя / Компания',
    clientsColSite: 'Сайт/Проект', clientsColStatus: 'Статус', clientsColDate: 'Дата',
    clientsName: 'Имя / Название компании', clientsContact: 'Контактное лицо', clientsEmail: 'Email',
    clientsPhone: 'Телефон', clientsStatus: 'Статус проекта', clientsDateStart: 'Дата начала', clientsDateEnd: 'Дата сдачи',
    clientsProjectName: 'Название проекта', clientsProjectType: 'Тип проекта', clientsProjectUrl: 'URL сайта',
    clientsBudget: 'Бюджет', clientsServices: 'Услуги из калькулятора', clientsTechTitle: 'Технические данные 🔒',
    clientsDomainProvider: 'Домен: где зарегистрирован', clientsDomainLogin: 'Домен: логин', clientsDomainPass: 'Домен: пароль',
    clientsHosting: 'Хостинг/Сервер', clientsCmsUrl: 'CMS/Admin URL', clientsCmsLogin: 'CMS логин', clientsCmsPass: 'CMS пароль',
    clientsExtraAccess: 'Дополнительные доступы', clientsNotesTitle: 'Заметки 📝', clientsNotes: 'Внутренние заметки',
    clientsHistory: 'История изменений', clientsEmpty: 'Нет клиентов. Добавьте первого.',
    clientStatusInProgress: 'В разработке', clientStatusCompleted: 'Завершён', clientStatusSupport: 'Поддержка', clientStatusPaused: 'На паузе',
    clientTypeLanding: 'Лендинг', clientTypeMultipage: 'Многостраничный', clientTypeMobile: 'Мобильное приложение',
    clientTypeMotion: 'Моушен', clientTypeOther: 'Другое',
  },
  de: {
    adminTitle: 'Admin-Panel', viewSite: 'Website ansehen', logout: 'Abmelden',
    showDev: 'Auf Website anzeigen', showDevDesc: 'Bereich «Entwicklung» auf der Startseite und im Menü',
    portfolio: 'Portfolio', devApps: 'Entwicklung', devAppsDesc: 'Web-Projekte und Apps',
    addDev: '+ Hinzufügen', saveChanges: 'Speichern',
    noWebProjects: 'Keine Web-Projekte. + Hinzufügen klicken.',
    noAppsSub: 'Keine Apps. + Hinzufügen klicken.',
    add: '+ Hinzufügen', hide: 'Verbergen', show: 'Anzeigen', delete: 'Löschen',
    loading: 'Laden...', saving: 'Speichere...', saved: '✓ Gespeichert',
    loadedServer: '✓✓ Vom Server geladen', loadedFiles: 'Aus Dateien geladen (KV nicht verfügbar)',
    unsavedChanges: '● Ungespeicherte Änderungen',
    saveError: 'Fehler beim Speichern', noProjects: 'Keine Projekte. + Hinzufügen klicken.',
    noApps: 'Keine Entwicklungsprojekte. + Hinzufügen klicken.',
    fieldTitle: 'Titel', fieldThumb: 'Bild-URL', fieldVideo: 'Video-URL (YouTube)',
    fieldPlatform: 'Plattform', fieldLink: 'Link', fieldDesc: 'Beschreibung',
    fieldClient: 'Kunde', fieldYear: 'Jahr', fieldDuration: 'Dauer',
    langLabel: 'Inhalte in Sprachen', noImage: 'Kein Bild',
    deleteConfirm: 'Dieses Projekt löschen?', deleteAppConfirm: 'Diese App löschen?',
    password: 'Passwort', signIn: 'Anmelden', wrongPassword: 'Falsches Passwort',
    catLabel: 'Inhaltskategorie',
    dashboardTitle: 'Dashboard', dashProjects: 'Projekte', dashApps: 'Apps',
    dashLastSaved: 'Letzte Speicherung', dashViewsToday: 'Aufrufe heute',
    dashWeek: '7 Tage', dashMonth: '30 Tage',
    settingsTitle: 'Einstellungen', settingsClose: 'Schließen', settingsBtnTitle: 'Einstellungen',
    integrationsTitle: 'Integrationen', githubToken: 'GitHub Token', githubDesc: 'Für Datei-Upload ins Repository',
    weatherTitle: 'Wetter', weatherApiKey: 'OpenWeatherMap API Key',
    weatherDesc: 'Für das Wetter-Widget im Dashboard', weatherImages: 'Wetter-Hintergrundbilder',
    generalTitle: 'Allgemein', saveBtn: 'Speichern', uploadBtn: '📁 Hochladen',
    weatherNoApiKey: 'API-Schlüssel in Einstellungen ⚙️ angeben', weatherLoading: 'Wetter wird geladen…',
    weatherError: 'Wetter konnte nicht geladen werden', weatherToday: 'Heute',
    svcFieldTitle: 'NAME',
    svcFieldPrice: 'PREIS (ZAHL)',
    svcFieldShortDesc: 'KURZBESCHREIBUNG (KARTE)',
    svcFieldSubtitle: 'UNTERTITEL (MODAL)',
    svcFieldWhat: 'WAS SIE ERHALTEN',
    svcFieldPriceNote: 'PREISHINWEIS / DAUER',
    svcFieldSteps: 'PROZESSSCHRITTE (4 SCHRITTE)',
    svcFieldFaq: 'FAQ (3 FRAGEN)',
    svcHide: 'Verbergen',
    svcShow: 'Anzeigen',
    svcSave: '💾 Dienste speichern',
    svcCount: 'Dienstleistungen',
    svcDesc: 'Texte in allen 5 Sprachen bearbeiten. Sprache in jeder Karte wechseln. Mit «Speichern» unten speichern.',
    heroTitle: 'Startseite', heroShow: 'Anzeigen',
    heroBadge: 'Badge', heroMainTitle: 'Titel (HTML: &lt;br&gt;, &lt;em&gt;)',
    heroSubtitle: 'Untertitel', heroBtn1: 'Button 1 — Text', heroBtn1Link: 'Button 1 — Link',
    heroBtn2: 'Button 2 — Text', heroBtn2Link: 'Button 2 — Link',
    heroMedia: 'Hintergrund-Karte (hinten)', heroMediaNone: 'Keine Hintergrund-Karte',
    heroMediaOpacity: 'Hintergrund-Transparenz',
    heroCardMedia: 'Karte rechts (separat)', heroCardMediaNone: 'KM-Logo wird angezeigt',
    reviewsTitle: 'Bewertungen', reviewsTabPending: '📬 Neu', reviewsTabApproved: '✅ Genehmigt',
    reviewsApprove: '✓ Genehmigen', reviewsHide: 'Verbergen', reviewsShow: 'Anzeigen',
    reviewsDelete: 'Löschen', reviewsDeleteShort: '✕ Löschen',
    reviewsEmptyPending: 'Keine neuen Bewertungen', reviewsEmptyApproved: 'Keine genehmigten Bewertungen',
    reviewsHidden: 'Verborgen',
    calcTitle: 'Kalkulator', calcShow: 'Auf Website anzeigen',
    calcAddGroup: '+ Gruppe hinzufügen', calcAddOption: '+ Option hinzufügen',
    calcDeleteGroup: 'Gruppe löschen', calcDeleteOption: 'Löschen',
    calcGroupLabel: 'Gruppenname', calcActive: 'Aktiv', calcRequired: 'Pflicht',
    calcIcon: 'Icon (Emoji)', calcPrice: 'Interner Preis (CHF)', calcTitleField: 'Titel', calcDescField: 'Beschreibung',
    calcTabOverview: 'Übersicht', calcTabEditor: 'Editor', calcTabGroups: 'Gruppen',
    calcColNum: '#', calcColIcon: 'Icon', calcColName: 'Name', calcColGroup: 'Gruppe', calcColPrice: 'Preis',
    calcColType: 'Typ', calcColActive: 'Aktiv', calcColRequired: 'Pflicht', calcColActions: 'Aktionen',
    calcTotalOpts: 'Optionen gesamt', calcTotalSum: 'Summe', calcTotalCosts: 'Kosten', calcTotalMargin: 'Marge',
    calcSave: 'Speichern', calcSaveOption: 'Option speichern', calcBackList: '← Zurück zur Liste',
    calcNotesTitle: 'Interne Notizen 🔒', calcNotesField: 'Notizen',
    calcDomainField: 'Domain-Registrierung', calcToolsField: 'Verwendete Tools', calcTimeField: 'Geschätzte Dauer',
    calcInternalCost: 'Meine Kosten (CHF)', calcInternalCostHint: 'Auftragnehmer, Plugins, Services',
    calcPrice: 'Preis', calcCurrency: 'Währung', calcPaymentType: 'Zahlungsart',
    calcPayOneTime: 'Einmalig', calcPayMonthly: 'Pro Monat', calcPayYearly: 'Pro Jahr',
    calcPayShortOne: 'einmal', calcPayShortMonth: '/Mon', calcPayShortYear: '/Jahr',
    calcSearchPh: '🔍 Suche...', calcFilterGroup: 'Gruppe', calcFilterAll: 'Alle',
    calcDocsTitle: 'Dokumente 📎', calcDocsAttach: 'Datei anhängen', calcDocsTooBig: 'Datei über 5 MB',
    calcGroupColId: 'ID', calcGroupColName: 'Name (RU)', calcGroupColCount: 'Optionen', calcSelectGroup: 'Gruppe',
    calcGroupSelType: 'Auswahltyp', calcGroupSelMultiple: 'Mehrfachauswahl', calcGroupSelSingle: 'Einfachauswahl',
    calcNoOptions: 'Keine Optionen.', calcNoGroups: 'Keine Gruppen.',
    calcDocsEmpty: 'Keine Dokumente', calcDocOpen: 'Öffnen',
    clientsTitle: 'Kunden 👥', clientsAdd: '+ Kunde hinzufügen', clientsBack: '← Zurück zur Liste',
    clientsSave: 'Kunde speichern', clientsColNum: '#', clientsColName: 'Name / Firma',
    clientsColSite: 'Website/Projekt', clientsColStatus: 'Status', clientsColDate: 'Datum',
    clientsName: 'Name / Firma', clientsContact: 'Ansprechpartner', clientsEmail: 'E-Mail',
    clientsPhone: 'Telefon', clientsStatus: 'Projektstatus', clientsDateStart: 'Startdatum', clientsDateEnd: 'Lieferdatum',
    clientsProjectName: 'Projektname', clientsProjectType: 'Projekttyp', clientsProjectUrl: 'Website-URL',
    clientsBudget: 'Budget', clientsServices: 'Dienste aus Kalkulator', clientsTechTitle: 'Technische Daten 🔒',
    clientsDomainProvider: 'Domain-Anbieter', clientsDomainLogin: 'Domain-Login', clientsDomainPass: 'Domain-Passwort',
    clientsHosting: 'Hosting/Server', clientsCmsUrl: 'CMS/Admin URL', clientsCmsLogin: 'CMS-Login', clientsCmsPass: 'CMS-Passwort',
    clientsExtraAccess: 'Zusätzliche Zugänge', clientsNotesTitle: 'Notizen 📝', clientsNotes: 'Interne Notizen',
    clientsHistory: 'Änderungsverlauf', clientsEmpty: 'Keine Kunden.',
    clientStatusInProgress: 'In Entwicklung', clientStatusCompleted: 'Abgeschlossen', clientStatusSupport: 'Support', clientStatusPaused: 'Pausiert',
    clientTypeLanding: 'Landingpage', clientTypeMultipage: 'Mehrseitig', clientTypeMobile: 'Mobile App',
    clientTypeMotion: 'Motion', clientTypeOther: 'Sonstiges',
  },
  en: {
    adminTitle: 'Admin Panel', viewSite: 'View site', logout: 'Logout',
    showDev: 'Show on site', showDevDesc: 'Development section on homepage and in navigation',
    portfolio: 'Portfolio', devApps: 'Development', devAppsDesc: 'Web projects and apps',
    addDev: '+ Add', saveChanges: 'Save changes',
    noWebProjects: 'No web projects yet. Click + Add.',
    noAppsSub: 'No apps yet. Click + Add.',
    add: '+ Add', hide: 'Hide', show: 'Show', delete: 'Delete',
    loading: 'Loading...', saving: 'Saving...', saved: '✓ Saved',
    loadedServer: '✓✓ Loaded from server', loadedFiles: 'Loaded from files (KV not available)',
    unsavedChanges: '● Unsaved changes',
    saveError: 'Save error', noProjects: 'No projects yet. Click + Add.',
    noApps: 'No development projects yet. Click + Add.',
    fieldTitle: 'Title', fieldThumb: 'Thumbnail URL', fieldVideo: 'Video URL (YouTube)',
    fieldPlatform: 'Platform', fieldLink: 'Link', fieldDesc: 'Description',
    fieldClient: 'Client', fieldYear: 'Year', fieldDuration: 'Duration',
    langLabel: 'Content by language', noImage: 'No image',
    deleteConfirm: 'Delete this project?', deleteAppConfirm: 'Delete this app?',
    password: 'Password', signIn: 'Sign in', wrongPassword: 'Incorrect password',
    catLabel: 'Content category',
    dashboardTitle: 'Dashboard', dashProjects: 'Projects', dashApps: 'Apps',
    dashLastSaved: 'Last saved', dashViewsToday: 'Views today',
    dashWeek: '7 days', dashMonth: '30 days',
    settingsTitle: 'Settings', settingsClose: 'Close', settingsBtnTitle: 'Settings',
    integrationsTitle: 'Integrations', githubToken: 'GitHub Token', githubDesc: 'For file upload to repository',
    weatherTitle: 'Weather', weatherApiKey: 'OpenWeatherMap API Key',
    weatherDesc: 'For the weather widget in Dashboard', weatherImages: 'Weather background images',
    generalTitle: 'General', saveBtn: 'Save', uploadBtn: '📁 Upload',
    weatherNoApiKey: 'Set API key in Settings ⚙️', weatherLoading: 'Loading weather…',
    weatherError: 'Failed to load weather', weatherToday: 'Today',
    svcFieldTitle: 'TITLE',
    svcFieldPrice: 'PRICE (NUMBER)',
    svcFieldShortDesc: 'SHORT DESCRIPTION (CARD)',
    svcFieldSubtitle: 'SUBTITLE (MODAL)',
    svcFieldWhat: 'WHAT YOU GET',
    svcFieldPriceNote: 'PRICE NOTE / DURATION',
    svcFieldSteps: 'PROCESS STEPS (4 STEPS)',
    svcFieldFaq: 'FAQ (3 QUESTIONS)',
    svcHide: 'Hide',
    svcShow: 'Show',
    svcSave: '💾 Save services',
    svcCount: 'Services',
    svcDesc: 'Edit texts in all 5 languages. Switch language inside each card. Save with the «Save» button below.',
    heroTitle: 'Homepage', heroShow: 'Show',
    heroBadge: 'Badge', heroMainTitle: 'Title (HTML: &lt;br&gt;, &lt;em&gt;)',
    heroSubtitle: 'Subtitle', heroBtn1: 'Button 1 — text', heroBtn1Link: 'Button 1 — link',
    heroBtn2: 'Button 2 — text', heroBtn2Link: 'Button 2 — link',
    heroMedia: 'Backdrop card (behind)', heroMediaNone: 'No backdrop uploaded',
    heroMediaOpacity: 'Backdrop opacity',
    heroCardMedia: 'Right card (separate)', heroCardMediaNone: 'KM logo is shown',
    reviewsTitle: 'Reviews', reviewsTabPending: '📬 New', reviewsTabApproved: '✅ Approved',
    reviewsApprove: '✓ Approve', reviewsHide: 'Hide', reviewsShow: 'Show',
    reviewsDelete: 'Delete', reviewsDeleteShort: '✕ Delete',
    reviewsEmptyPending: 'No new reviews', reviewsEmptyApproved: 'No approved reviews',
    reviewsHidden: 'Hidden',
    calcTitle: 'Calculator', calcShow: 'Show on site',
    calcAddGroup: '+ Add group', calcAddOption: '+ Add option',
    calcDeleteGroup: 'Delete group', calcDeleteOption: 'Delete',
    calcGroupLabel: 'Group label', calcActive: 'Active', calcRequired: 'Required',
    calcIcon: 'Icon (emoji)', calcPrice: 'Internal price (CHF)', calcTitleField: 'Title', calcDescField: 'Description',
    calcTabOverview: 'Overview', calcTabEditor: 'Editor', calcTabGroups: 'Groups',
    calcColNum: '#', calcColIcon: 'Icon', calcColName: 'Name', calcColGroup: 'Group', calcColPrice: 'Price',
    calcColType: 'Type', calcColActive: 'Active', calcColRequired: 'Req.', calcColActions: 'Actions',
    calcTotalOpts: 'Total options', calcTotalSum: 'Sum', calcTotalCosts: 'Costs', calcTotalMargin: 'Margin',
    calcSave: 'Save', calcSaveOption: 'Save option', calcBackList: '← Back to list',
    calcNotesTitle: 'Internal notes 🔒', calcNotesField: 'Notes',
    calcDomainField: 'Domain registration', calcToolsField: 'Tools used', calcTimeField: 'Estimated time',
    calcInternalCost: 'My costs (CHF)', calcInternalCostHint: 'Contractors, plugins, services',
    calcPrice: 'Price', calcCurrency: 'Currency', calcPaymentType: 'Payment type',
    calcPayOneTime: 'One-time', calcPayMonthly: 'Monthly', calcPayYearly: 'Yearly',
    calcPayShortOne: 'once', calcPayShortMonth: '/mo', calcPayShortYear: '/yr',
    calcSearchPh: '🔍 Search...', calcFilterGroup: 'Group', calcFilterAll: 'All',
    calcDocsTitle: 'Documents 📎', calcDocsAttach: 'Attach file', calcDocsTooBig: 'File exceeds 5 MB',
    calcGroupColId: 'ID', calcGroupColName: 'Name (RU)', calcGroupColCount: 'Options', calcSelectGroup: 'Group',
    calcGroupSelType: 'Selection type', calcGroupSelMultiple: 'Multiple choice', calcGroupSelSingle: 'Single choice',
    calcNoOptions: 'No options yet.', calcNoGroups: 'No groups yet.',
    calcDocsEmpty: 'No documents', calcDocOpen: 'Open',
    clientsTitle: 'Clients 👥', clientsAdd: '+ Add client', clientsBack: '← Back to list',
    clientsSave: 'Save client', clientsColNum: '#', clientsColName: 'Name / Company',
    clientsColSite: 'Site/Project', clientsColStatus: 'Status', clientsColDate: 'Date',
    clientsName: 'Name / Company', clientsContact: 'Contact person', clientsEmail: 'Email',
    clientsPhone: 'Phone', clientsStatus: 'Project status', clientsDateStart: 'Start date', clientsDateEnd: 'Delivery date',
    clientsProjectName: 'Project name', clientsProjectType: 'Project type', clientsProjectUrl: 'Site URL',
    clientsBudget: 'Budget', clientsServices: 'Calculator services', clientsTechTitle: 'Technical data 🔒',
    clientsDomainProvider: 'Domain registrar', clientsDomainLogin: 'Domain login', clientsDomainPass: 'Domain password',
    clientsHosting: 'Hosting/Server', clientsCmsUrl: 'CMS/Admin URL', clientsCmsLogin: 'CMS login', clientsCmsPass: 'CMS password',
    clientsExtraAccess: 'Additional access', clientsNotesTitle: 'Notes 📝', clientsNotes: 'Internal notes',
    clientsHistory: 'Change history', clientsEmpty: 'No clients yet.',
    clientStatusInProgress: 'In development', clientStatusCompleted: 'Completed', clientStatusSupport: 'Support', clientStatusPaused: 'Paused',
    clientTypeLanding: 'Landing', clientTypeMultipage: 'Multi-page', clientTypeMobile: 'Mobile app',
    clientTypeMotion: 'Motion', clientTypeOther: 'Other',
  }
};

const UI_PREFIX = {
  settingsTitle: '⚙️ ',
  integrationsTitle: '🔗 ',
  weatherTitle: '🌤 ',
  generalTitle: '⚙️ ',
};

const SITE_LANGS = ['de', 'en', 'fr', 'it', 'ru'];
const SITE_LANG_LABELS = { de: '🇩🇪 DE', en: '🇬🇧 EN', fr: '🇫🇷 FR', it: '🇮🇹 IT', ru: '🇷🇺 RU' };
const ADMIN_LANGS = ['ru', 'de', 'en'];
const ADMIN_LANG_LABELS = { ru: 'RU', de: 'DE', en: 'EN' };

const PORTFOLIO_CATEGORIES = [
  { id: 'motion', label: { ru: 'Моушн-дизайн', de: 'Motion Design', en: 'Motion Design' }, icon: '🎬' },
  { id: 'graphic', label: { ru: 'Графический дизайн', de: 'Grafik Design', en: 'Graphic Design' }, icon: '🎨' },
];
const DEV_SUBSECTIONS = [
  { id: 'web', label: { ru: 'Веб', de: 'Web', en: 'Web' }, icon: '🌐' },
  { id: 'apps', label: { ru: 'Приложения', de: 'Apps', en: 'Apps' }, icon: '📱' },
];
const DEV_CAT_COLLAPSE_PREFIX = 'korsmotion_devcat_';

function categoryMeta(catId) {
  return [...PORTFOLIO_CATEGORIES, ...DEV_SUBSECTIONS].find(c => c.id === catId);
}
function isPortfolioProject(p) {
  const cat = p.categoryId || 'motion';
  return cat !== 'web';
}

let adminLang = localStorage.getItem('korsmotion_admin_lang') || 'ru';
let projectsData = { projects: [] };
const DEFAULT_HERO = {
  show: true,
  media: '',
  cardMedia: '',
  mediaOpacity: 44,
  content: {
    de: { badge: 'Motion Design Studio · Schweiz', title: 'Bewegung, die<br><em>eindruckt</em>', subtitle: 'Kors Motion ist Ihr Spezialist für Motion Design.', btn1Text: 'Projekt anfragen', btn1Link: '#contact', btn2Text: 'Portfolio ansehen', btn2Link: '#portfolio' },
    en: { badge: 'Motion Design Studio · Switzerland', title: 'Motion<br>that <em>resonates</em>', subtitle: 'Kors Motion is a premium motion design studio.', btn1Text: 'Discuss a project', btn1Link: '#contact', btn2Text: 'View portfolio', btn2Link: '#portfolio' },
    ru: { badge: 'Студия моушн-дизайна · Швейцария', title: 'Движение,<br>которое <em>запоминается</em>', subtitle: 'Kors Motion — студия моушн-дизайна.', btn1Text: 'Обсудить проект', btn1Link: '#contact', btn2Text: 'Смотреть работы', btn2Link: '#portfolio' },
    fr: { badge: 'Studio de Motion Design · Suisse', title: 'Un mouvement<br>qui <em>marque les esprits</em>', subtitle: 'Kors Motion est un studio de motion design.', btn1Text: 'Discuter d\'un projet', btn1Link: '#contact', btn2Text: 'Voir le portfolio', btn2Link: '#portfolio' },
    it: { badge: 'Studio di Motion Design · Svizzera', title: 'Un movimento<br>che <em>lascia il segno</em>', subtitle: 'Kors Motion è uno studio di motion design.', btn1Text: 'Parliamo del progetto', btn1Link: '#contact', btn2Text: 'Vedi il portfolio', btn2Link: '#portfolio' },
  },
};

const DEFAULT_SETTINGS = {
  show_portfolio_section: true,
  show_services_section: true,
  show_dev_section: false,
  show_reviews_section: true,
  show_hero_section: true,
  apps: [],
};
let settingsData = { ...DEFAULT_SETTINGS };
let reviewsData = { reviews: [] };
let calculatorData = { visible: false, groups: [] };
let clientsData = [];
let clientsView = 'list';
let clientsEditingId = null;

const CLIENT_STATUS_META = {
  in_progress: { icon: '🔄', cls: 'client-status-in_progress' },
  completed: { icon: '✅', cls: 'client-status-completed' },
  support: { icon: '🛠️', cls: 'client-status-support' },
  paused: { icon: '⏸️', cls: 'client-status-paused' },
};
let calcActiveTab = 'overview';
let calcEditingRef = null;
let calcEditorLang = 'ru';
let calcGroupEditGi = null;
let calcFullscreen = false;
let calcOverviewSearch = '';
let calcOverviewGroupFilter = 'all';
const CALC_EMOJIS = ['📄', '📑', '📱', '⚙️', '🌍', '📬', '📝', '✨', '🔍', '🖼️', '⭐', '📦', '🎨', '💻', '🔒', '🛒', '📊', '🎬', '📷', '🛠️'];
const CALC_DOC_MAX = 5 * 1024 * 1024;
const CALC_DOC_STORE_MAX = 500 * 1024;
let heroData = JSON.parse(JSON.stringify(DEFAULT_HERO));
let reviewsActiveTab = 'pending';
let heroActiveLang = 'ru';
let saveDirty = false;

function normalizeSettings(raw) {
  const s = raw && typeof raw === 'object' ? raw : {};
  return {
    ...DEFAULT_SETTINGS,
    ...s,
    show_portfolio_section: s.show_portfolio_section === false ? false : true,
    show_services_section: s.show_services_section === false ? false : true,
    show_dev_section: s.show_dev_section === true,
    show_reviews_section: s.show_reviews_section === false ? false : true,
    show_hero_section: s.show_hero_section === false ? false : true,
    apps: Array.isArray(s.apps) ? s.apps : DEFAULT_SETTINGS.apps,
    ui: s.ui && typeof s.ui === 'object' ? s.ui : {},
  };
}

function snapshotSectionVisibility() {
  const portfolio = document.getElementById('showPortfolioSection');
  const services = document.getElementById('showServicesSection');
  const dev = document.getElementById('showDevSection');
  const reviews = document.getElementById('showReviewsSection');
  const hero = document.getElementById('showHeroSection');
  settingsData.show_portfolio_section = portfolio ? portfolio.checked : settingsData.show_portfolio_section !== false;
  settingsData.show_services_section = services ? services.checked : settingsData.show_services_section !== false;
  settingsData.show_dev_section = dev ? dev.checked : !!settingsData.show_dev_section;
  settingsData.show_reviews_section = reviews ? reviews.checked : settingsData.show_reviews_section !== false;
  settingsData.show_hero_section = hero ? hero.checked : settingsData.show_hero_section !== false;
}
let servicesData = { services: [] };
let serviceActiveLang = 'de'; // активный язык в редакторе услуг
let activeLangTab = {}; // per project id
let activeAppLangTab = {}; // per app index
let weatherRefreshTimer = null;

// ── Helpers ───────────────────────────────────────────────────────────────────
function u() { return adminLang ? UI[adminLang] || UI.en : UI.en; }
function uid() { return 'id_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6); }
function esc(str) {
  if (!str) return '';
  return String(str).replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}
function isSectionCollapsed(key) {
  const stored = localStorage.getItem(SECTION_COLLAPSE_KEY + key);
  if (stored !== null) return stored === '1';
  return SECTION_COLLAPSE_DEFAULTS[key] ?? true;
}
function setSectionCollapsed(key, collapsed) {
  localStorage.setItem(SECTION_COLLAPSE_KEY + key, collapsed ? '1' : '0');
}
function applySectionCollapse(section) {
  const key = section.dataset.section;
  if (!key) return;
  const collapsed = isSectionCollapsed(key);
  section.classList.toggle('collapsed', collapsed);
  const chevron = section.querySelector('.section-chevron');
  if (chevron) chevron.classList.toggle('open', !collapsed);
}
function ensureUiSettings() {
  if (!settingsData.ui) settingsData.ui = {};
  if (!settingsData.ui.collapsedCats) settingsData.ui.collapsedCats = {};
  if (!settingsData.ui.collapsedDevCats) settingsData.ui.collapsedDevCats = {};
  if (!settingsData.ui.collapsedProjects) settingsData.ui.collapsedProjects = {};
  if (!settingsData.ui.collapsedApps) settingsData.ui.collapsedApps = {};
  if (!settingsData.ui.collapsedServices) settingsData.ui.collapsedServices = {};
}
function migrateDevCollapseState() {
  ensureUiSettings();
  if (settingsData.ui.collapsedCats?.web !== undefined) {
    settingsData.ui.collapsedDevCats.web = settingsData.ui.collapsedCats.web;
    delete settingsData.ui.collapsedCats.web;
  }
}
function applyUiCollapseFromSettings() {
  ensureUiSettings();
  migrateDevCollapseState();
  PORTFOLIO_CATEGORIES.forEach(c => {
    const collapsed = settingsData.ui.collapsedCats[c.id];
    if (collapsed === true) localStorage.setItem(CAT_COLLAPSE_PREFIX + c.id, 'true');
    else if (collapsed === false) localStorage.setItem(CAT_COLLAPSE_PREFIX + c.id, 'false');
  });
  DEV_SUBSECTIONS.forEach(c => {
    const collapsed = settingsData.ui.collapsedDevCats[c.id];
    if (collapsed === true) localStorage.setItem(DEV_CAT_COLLAPSE_PREFIX + c.id, 'true');
    else if (collapsed === false) localStorage.setItem(DEV_CAT_COLLAPSE_PREFIX + c.id, 'false');
  });
  for (const [id, collapsed] of Object.entries(settingsData.ui.collapsedProjects)) {
    localStorage.setItem(PROJECT_CARD_COLLAPSE_PREFIX + id, collapsed ? 'true' : 'false');
  }
  for (const [id, collapsed] of Object.entries(settingsData.ui.collapsedApps)) {
    localStorage.setItem(APP_CARD_COLLAPSE_PREFIX + id, collapsed ? 'true' : 'false');
  }
  for (const [id, collapsed] of Object.entries(settingsData.ui.collapsedServices)) {
    localStorage.setItem(SERVICE_CARD_COLLAPSE_PREFIX + id, collapsed ? 'true' : 'false');
  }
}
function snapshotUiCollapseState() {
  ensureUiSettings();
  migrateDevCollapseState();
  PORTFOLIO_CATEGORIES.forEach(c => {
    settingsData.ui.collapsedCats[c.id] = isCatCollapsed(c.id);
  });
  DEV_SUBSECTIONS.forEach(c => {
    settingsData.ui.collapsedDevCats[c.id] = isDevCatCollapsed(c.id);
  });
  settingsData.ui.collapsedProjects = {};
  (projectsData.projects || []).forEach(p => {
    settingsData.ui.collapsedProjects[p.id] = isProjectCardCollapsed(p.id);
  });
  settingsData.ui.collapsedApps = {};
  (settingsData.apps || []).forEach((a, i) => {
    const appId = a.id || `app_${i}`;
    settingsData.ui.collapsedApps[appId] = isAppCardCollapsed(appId);
  });
  settingsData.ui.collapsedServices = {};
  (servicesData.services || []).forEach((s, i) => {
    const svcId = s.id || `svc_${i}`;
    settingsData.ui.collapsedServices[svcId] = isServiceCardCollapsed(svcId);
  });
}
function isCatCollapsed(catId) {
  return localStorage.getItem(CAT_COLLAPSE_PREFIX + catId) === 'true';
}
function setCatCollapsed(catId, collapsed) {
  localStorage.setItem(CAT_COLLAPSE_PREFIX + catId, collapsed ? 'true' : 'false');
  ensureUiSettings();
  settingsData.ui.collapsedCats[catId] = collapsed;
  markUnsaved();
}
function isDevCatCollapsed(catId) {
  return localStorage.getItem(DEV_CAT_COLLAPSE_PREFIX + catId) === 'true';
}
function setDevCatCollapsed(catId, collapsed) {
  localStorage.setItem(DEV_CAT_COLLAPSE_PREFIX + catId, collapsed ? 'true' : 'false');
  ensureUiSettings();
  settingsData.ui.collapsedDevCats[catId] = collapsed;
  markUnsaved();
}
function isProjectCardCollapsed(id) {
  return localStorage.getItem(PROJECT_CARD_COLLAPSE_PREFIX + id) === 'true';
}
function setProjectCardCollapsed(id, collapsed) {
  localStorage.setItem(PROJECT_CARD_COLLAPSE_PREFIX + id, collapsed ? 'true' : 'false');
  ensureUiSettings();
  settingsData.ui.collapsedProjects[id] = collapsed;
  markUnsaved();
}
function isAppCardCollapsed(id) {
  return localStorage.getItem(APP_CARD_COLLAPSE_PREFIX + id) === 'true';
}
function setAppCardCollapsed(id, collapsed) {
  localStorage.setItem(APP_CARD_COLLAPSE_PREFIX + id, collapsed ? 'true' : 'false');
  ensureUiSettings();
  settingsData.ui.collapsedApps[id] = collapsed;
  markUnsaved();
}
function isServiceCardCollapsed(id) {
  const stored = localStorage.getItem(SERVICE_CARD_COLLAPSE_PREFIX + id);
  if (stored !== null) return stored === 'true';
  return true;
}
function setServiceCardCollapsed(id, collapsed) {
  localStorage.setItem(SERVICE_CARD_COLLAPSE_PREFIX + id, collapsed ? 'true' : 'false');
  ensureUiSettings();
  settingsData.ui.collapsedServices[id] = collapsed;
  markUnsaved();
}

function initSectionCollapse() {
  document.querySelectorAll('.section-collapsible').forEach(section => {
    applySectionCollapse(section);
    const head = section.querySelector('.section-head-toggle');
    if (!head || head.dataset.bound === '1') return;
    head.dataset.bound = '1';
    head.addEventListener('click', e => {
      if (e.target.closest('.section-head-actions')) return;
      const key = section.dataset.section;
      const collapsed = !section.classList.contains('collapsed');
      setSectionCollapsed(key, collapsed);
      applySectionCollapse(section);
    });
    head.addEventListener('keydown', e => {
      if (e.key !== 'Enter' && e.key !== ' ') return;
      e.preventDefault();
      head.click();
    });
  });
}

function showToast(msg, type) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.className = 'toast show' + (type ? ' ' + type : '');
  setTimeout(() => toast.classList.remove('show'), 3500);
}
function setStatus(msg, type) {
  const el = document.getElementById('saveStatus');
  if (!el) return;
  el.textContent = msg;
  el.className = 'save-status' + (type ? ' ' + type : '');
  el.style.color = '';
}

function initSaveBtn() {
  const btn = document.getElementById('saveBtn');
  if (!btn) return;
  btn.style.background = '#16A34A';
  btn.textContent = u().saveChanges;
  btn.disabled = false;
}

function markUnsaved() {
  saveDirty = true;
  const status = document.getElementById('saveStatus');
  if (!status) return;
  status.textContent = u().unsavedChanges;
  status.className = 'save-status unsaved';
}

function markSaving() {
  const btn = document.getElementById('saveBtn');
  const status = document.getElementById('saveStatus');
  if (btn) btn.disabled = true;
  if (status) {
    status.textContent = u().saving;
    status.className = 'save-status saving';
  }
}

async function markSavedSuccess() {
  saveDirty = false;
  const btn = document.getElementById('saveBtn');
  const status = document.getElementById('saveStatus');
  if (btn) btn.disabled = false;
  if (!status) return;
  status.textContent = u().saved;
  status.className = 'save-status success';
  await new Promise(r => setTimeout(r, 700));
  status.textContent = u().loadedServer;
  status.className = 'save-status success';
}

function markSaveError(msg) {
  const btn = document.getElementById('saveBtn');
  if (btn) btn.disabled = false;
  const status = document.getElementById('saveStatus');
  if (!status) return;
  status.textContent = msg || u().saveError;
  status.className = 'save-status error';
}

function syncSectionVisibilityToggles() {
  const map = [
    ['showPortfolioSection', settingsData.show_portfolio_section !== false],
    ['showServicesSection', settingsData.show_services_section !== false],
    ['showDevSection', !!settingsData.show_dev_section],
    ['showReviewsSection', settingsData.show_reviews_section !== false],
    ['showHeroSection', settingsData.show_hero_section !== false],
  ];
  map.forEach(([id, on]) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.checked = on;
    syncPremiumToggle(id);
  });
}

function initDirtyTracking() {
  const app = document.getElementById('adminApp');
  if (!app || app.dataset.dirtyBound === '1') return;
  app.dataset.dirtyBound = '1';
  app.addEventListener('input', e => {
    if (e.target.closest('#projectsList, #devList, #servicesList, #heroSection, #reviewsSection, #calculatorSection, #clientsSection')) markUnsaved();
  });
  app.addEventListener('change', e => {
    if (['showDevSection', 'showPortfolioSection', 'showServicesSection', 'showReviewsSection', 'showHeroSection'].includes(e.target.id)) markUnsaved();
    if (e.target.closest('#devList')) markUnsaved();
  });
}
function adminAssetUrl(path) {
  if (!path) return '';
  if (/^(https?:\/\/|\/|data:)/i.test(path)) return path;
  return '../' + path.replace(/^\.\//, '');
}
function getGithubToken() {
  return localStorage.getItem(GITHUB_TOKEN_KEY) || '';
}
function getWeatherKey() {
  return localStorage.getItem(WEATHER_KEY) || '';
}
function maskSecretKey(token) {
  return token ? token.slice(0, 8) + '...' : '';
}
function initMaskedSecretField(inputId, storageKey) {
  const input = document.getElementById(inputId);
  if (!input) return;
  const val = localStorage.getItem(storageKey) || '';
  if (val) {
    input.value = maskSecretKey(val);
    input.dataset.masked = '1';
  } else {
    input.value = '';
    input.dataset.masked = '0';
  }
  delete input.dataset.focusValue;
}
function saveMaskedSecretField(inputId, storageKey, successMsg) {
  const input = document.getElementById(inputId);
  if (!input) return;
  const val = input.value.trim();
  if (!val || (val.endsWith('...') && val.length <= 12)) {
    showToast(adminLang === 'de' ? 'Vollständigen Schlüssel eingeben' : adminLang === 'en' ? 'Enter full key' : 'Введите полный ключ', 'error');
    return;
  }
  localStorage.setItem(storageKey, val);
  input.value = maskSecretKey(val);
  input.dataset.masked = '1';
  delete input.dataset.focusValue;
  showToast(successMsg, 'success');
  if (storageKey === WEATHER_KEY) loadWeatherWidget();
}
function bindMaskedSecretField(inputId, getValue, storageKey) {
  const input = document.getElementById(inputId);
  if (!input) return;
  input.addEventListener('focus', () => {
    if (input.dataset.masked === '1') {
      const stored = getValue();
      if (stored) {
        input.value = stored;
        input.dataset.masked = '0';
        input.dataset.focusValue = stored;
      }
    } else {
      input.dataset.focusValue = input.value;
    }
  });
  input.addEventListener('blur', () => {
    const stored = getValue();
    const current = input.value.trim();
    const focusValue = input.dataset.focusValue || '';
    if (focusValue && current === focusValue && stored) {
      input.value = maskSecretKey(stored);
      input.dataset.masked = '1';
    }
    delete input.dataset.focusValue;
  });
}
function initGithubTokenField() {
  initMaskedSecretField('githubTokenInput', GITHUB_TOKEN_KEY);
}
function saveGithubToken() {
  saveMaskedSecretField('githubTokenInput', GITHUB_TOKEN_KEY, adminLang === 'de' ? 'Token gespeichert ✓' : adminLang === 'en' ? 'Token saved ✓' : 'Токен сохранён ✓');
}
function initWeatherKeyField() {
  initMaskedSecretField('weatherKeyInput', WEATHER_KEY);
}
function saveWeatherKey() {
  saveMaskedSecretField('weatherKeyInput', WEATHER_KEY, adminLang === 'de' ? 'API-Schlüssel gespeichert ✓' : adminLang === 'en' ? 'API key saved ✓' : 'API ключ сохранён ✓');
}
function weatherPreviewPlaceholder(slot) {
  return `<div class="weather-slot-placeholder">${slot.emoji}<br>${esc(slot.label)}</div>`;
}
function weatherPreviewImg(url, weatherId, label) {
  return `<img class="weather-slot-img" src="${esc(url)}" alt="${esc(label)}" data-weather-id="${esc(weatherId)}" onerror="showWeatherPlaceholder(this)">`;
}
window.showWeatherPlaceholder = function(img) {
  const slot = WEATHER_SLOTS.find(s => s.id === img.dataset.weatherId);
  if (slot) img.outerHTML = weatherPreviewPlaceholder(slot);
};
function updateWeatherPreview(weatherId, url) {
  const el = document.getElementById('weather-preview-' + weatherId);
  const slot = WEATHER_SLOTS.find(s => s.id === weatherId);
  if (!el || !slot) return;
  el.innerHTML = url ? weatherPreviewImg(url, weatherId, slot.label) : weatherPreviewPlaceholder(slot);
}
function initWeatherPreviews() {
  WEATHER_SLOTS.forEach(slot => {
    const el = document.getElementById('weather-preview-' + slot.id);
    if (!el) return;
    const localUrl = adminAssetUrl('images/weather/' + slot.id + '.png');
    el.innerHTML = weatherPreviewImg(localUrl, slot.id, slot.label);
  });
}
function renderWeatherGrid() {
  const grid = document.getElementById('weatherImagesGrid');
  if (!grid) return;
  grid.innerHTML = WEATHER_SLOTS.map(slot => `
    <div class="weather-slot" data-weather="${slot.id}">
      <div class="weather-slot-label">${esc(slot.label)}</div>
      <div class="weather-slot-preview" id="weather-preview-${slot.id}">${weatherPreviewPlaceholder(slot)}</div>
      <button type="button" class="upload-btn" onclick="uploadWeatherImage('${slot.id}')">${esc(u().uploadBtn)}</button>
    </div>`).join('');
  initWeatherPreviews();
}
function openSettingsModal() {
  initGithubTokenField();
  initWeatherKeyField();
  renderWeatherGrid();
  syncPremiumToggle('showDevSection');
  const overlay = document.getElementById('settingsModal');
  if (overlay) {
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}
function closeSettingsModal() {
  const overlay = document.getElementById('settingsModal');
  if (overlay) {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }
}
function githubApiPath(targetPath) {
  return targetPath.split('/').map(encodeURIComponent).join('/');
}
function readFileAsBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result.split(',')[1]);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}
function pickMediaFile(onSelect, accept) {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = accept || 'image/*';
  input.style.display = 'none';
  input.onchange = () => {
    const file = input.files && input.files[0];
    if (file) onSelect(file);
    input.remove();
  };
  document.body.appendChild(input);
  input.click();
}
async function uploadFileToKV(file, relPath) {
  showToast(adminLang === 'de' ? 'Hochladen...' : adminLang === 'en' ? 'Uploading...' : 'Загрузка...', '');
  const data = await readFileAsBase64(file);
  const mime = file.type || mimeFromUploadPath(relPath);
  const res = await fetch('/api/upload', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ password: ADMIN_PASSWORD, path: relPath, mime, data }),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    showToast(adminLang === 'de' ? 'Upload-Fehler' : adminLang === 'en' ? 'Upload error' : 'Ошибка загрузки', 'error');
    throw new Error(err.error || 'Upload failed');
  }
  showToast(adminLang === 'de' ? 'Hochgeladen ✓' : adminLang === 'en' ? 'Uploaded ✓' : 'Загружено ✓', 'success');
  return relPath;
}
function mimeFromUploadPath(path) {
  const ext = (String(path).split('.').pop() || '').toLowerCase();
  const map = {
    webm: 'video/webm',
    mp4: 'video/mp4',
    gif: 'image/gif',
    jpg: 'image/jpeg',
    jpeg: 'image/jpeg',
    png: 'image/png',
  };
  return map[ext] || 'application/octet-stream';
}
async function uploadImageToGitHub(file, targetPath) {
  const githubToken = getGithubToken();
  if (!githubToken) {
    showToast(adminLang === 'de' ? 'GitHub Token in Einstellungen angeben' : adminLang === 'en' ? 'Set GitHub Token in Settings' : 'Укажи GitHub Token в настройках', 'error');
    throw new Error('No token');
  }
  showToast(adminLang === 'de' ? 'Hochladen...' : adminLang === 'en' ? 'Uploading...' : 'Загрузка...', '');
  try {
    const content = await readFileAsBase64(file);
    const apiUrl = `https://api.github.com/repos/${GITHUB_REPO}/contents/${githubApiPath(targetPath)}`;
    const headers = {
      'Authorization': 'token ' + githubToken,
      'Content-Type': 'application/json',
      'Accept': 'application/vnd.github+json'
    };
    const putFile = async (sha) => {
      const body = { message: 'Upload weather image via admin', content, branch: GITHUB_BRANCH };
      if (sha) body.sha = sha;
      return fetch(apiUrl, { method: 'PUT', headers, body: JSON.stringify(body) });
    };
    let resp = await putFile();
    if (resp.status === 409) {
      const getResp = await fetch(apiUrl + `?ref=${GITHUB_BRANCH}`, { headers });
      if (!getResp.ok) throw new Error('Failed to get file SHA');
      const meta = await getResp.json();
      resp = await putFile(meta.sha);
    }
    if (!resp.ok) {
      const err = await resp.json().catch(() => ({}));
      throw new Error(err.message || 'Upload failed');
    }
    showToast(adminLang === 'de' ? 'Hochgeladen ✓' : adminLang === 'en' ? 'Uploaded ✓' : 'Загружено ✓', 'success');
    return `https://raw.githubusercontent.com/${GITHUB_REPO}/${GITHUB_BRANCH}/${targetPath}`;
  } catch (e) {
    if (e.message !== 'No token') showToast(adminLang === 'de' ? 'Upload-Fehler' : adminLang === 'en' ? 'Upload error' : 'Ошибка загрузки', 'error');
    throw e;
  }
}
window.uploadWeatherImage = function(weatherId) {
  pickMediaFile(async (file) => {
    try {
      const path = `site-cloudflare/images/weather/${weatherId}.png`;
      const url = await uploadImageToGitHub(file, path);
      updateWeatherPreview(weatherId, url);
      loadWeatherWidget();
    } catch (_) {}
  }, WEATHER_IMAGE_ACCEPT);
};

window.uploadAppIcon = function(appIndex) {
  const app = settingsData.apps[appIndex];
  if (!app) return;
  const appId = app.id || `app_${appIndex}`;
  pickMediaFile(async (file) => {
    try {
      await uploadImageToGitHub(file, `site-cloudflare/images/apps/${appId}/icon.png`);
      app.icon = `images/apps/${appId}/icon.png`;
      renderDevelopment();
      markUnsaved();
    } catch (_) {}
  }, 'image/*');
};

function syncPremiumToggle(inputId) {
  const input = document.getElementById(inputId);
  const track = document.getElementById(inputId + 'Track');
  if (!input || !track) return;
  track.classList.toggle('is-on', input.checked);
  track.setAttribute('aria-checked', input.checked ? 'true' : 'false');
}
function togglePremiumInput(inputId) {
  const input = document.getElementById(inputId);
  if (!input) return;
  input.checked = !input.checked;
  syncPremiumToggle(inputId);
  input.dispatchEvent(new Event('change', { bubbles: true }));
}
function initPremiumToggles() {
  document.querySelectorAll('.section-vis-toggle').forEach(wrap => {
    if (wrap.dataset.bound === '1') return;
    wrap.dataset.bound = '1';
    const input = wrap.querySelector('.premium-toggle-input');
    if (!input?.id) return;
    const inputId = input.id;
    wrap.addEventListener('click', e => {
      e.stopPropagation();
      togglePremiumInput(inputId);
    });
    wrap.addEventListener('keydown', e => {
      if (e.key !== ' ' && e.key !== 'Enter') return;
      e.preventDefault();
      e.stopPropagation();
      togglePremiumInput(inputId);
    });
    wrap.querySelector('.premium-toggle-track')?.setAttribute('tabindex', '-1');
    syncPremiumToggle(inputId);
  });
  document.querySelectorAll('.premium-toggle-track').forEach(track => {
    if (track.closest('.section-vis-toggle')) return;
    const inputId = track.dataset.for;
    const input = document.getElementById(inputId);
    if (!input) return;
    track.addEventListener('click', () => togglePremiumInput(inputId));
    track.addEventListener('keydown', e => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        togglePremiumInput(inputId);
      }
    });
    syncPremiumToggle(inputId);
  });
}
function initPasswordToggles() {
  document.querySelectorAll('.pw-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const input = document.getElementById(btn.dataset.target);
      if (!input) return;
      if (input.type === 'password') {
        input.type = 'text';
        btn.textContent = '🙈';
        btn.setAttribute('aria-label', adminLang === 'de' ? 'Verbergen' : adminLang === 'en' ? 'Hide' : 'Скрыть');
      } else {
        input.type = 'password';
        btn.textContent = '👁';
        btn.setAttribute('aria-label', adminLang === 'de' ? 'Anzeigen' : adminLang === 'en' ? 'Show' : 'Показать');
      }
    });
  });
}
function startWeatherRefresh() {
  if (weatherRefreshTimer) clearInterval(weatherRefreshTimer);
  weatherRefreshTimer = setInterval(() => loadWeatherWidget(), WEATHER_REFRESH_MS);
}

// ── Admin language switcher ───────────────────────────────────────────────────
function setAdminLang(lang) {
  adminLang = lang;
  localStorage.setItem('korsmotion_admin_lang', lang);
  applyAdminLang();
  renderAll();
  loadWeatherWidget();
  if (document.getElementById('settingsModal')?.classList.contains('open')) {
    renderWeatherGrid();
  }
}

function applyAdminLang() {
  const t = u();
  document.querySelectorAll('[data-ui]').forEach(el => {
    const key = el.getAttribute('data-ui');
    if (t[key] !== undefined) {
      const prefix = UI_PREFIX[key] || '';
      el.textContent = prefix + t[key];
    }
  });
  document.querySelectorAll('[data-ui-title]').forEach(el => {
    const key = el.getAttribute('data-ui-title');
    if (t[key] !== undefined) el.title = t[key];
  });
  document.querySelectorAll('[data-ui-placeholder]').forEach(el => {
    const key = el.getAttribute('data-ui-placeholder');
    if (t[key] !== undefined) el.placeholder = t[key];
  });
  document.querySelectorAll('.admin-lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === adminLang);
  });
  initSaveBtn();
  if (saveDirty) markUnsaved();
}

// ── Auth ──────────────────────────────────────────────────────────────────────
function isLoggedIn() { return sessionStorage.getItem(SESSION_KEY) === 'true'; }

function showAdmin() {
  document.getElementById('loginScreen').style.display = 'none';
  document.getElementById('adminApp').style.display = 'block';
  document.getElementById('saveBar').style.display = 'flex';
  applyAdminLang();
  initSectionCollapse();
  loadData();
}
function showLogin() {
  document.getElementById('loginScreen').style.display = 'flex';
  document.getElementById('adminApp').style.display = 'none';
  document.getElementById('saveBar').style.display = 'none';
}

document.getElementById('loginForm').addEventListener('submit', e => {
  e.preventDefault();
  const pw = document.getElementById('password').value;
  const err = document.getElementById('loginError');
  if (pw === ADMIN_PASSWORD) {
    sessionStorage.setItem(SESSION_KEY, 'true');
    err.classList.remove('show');
    showAdmin();
  } else {
    err.classList.add('show');
  }
});
document.getElementById('logoutBtn').addEventListener('click', () => {
  sessionStorage.removeItem(SESSION_KEY);
  showLogin();
});

// ── Data ──────────────────────────────────────────────────────────────────────
async function loadData() {
  setStatus(u().loading, '');
  try {
    const res = await fetch(API_DATA);
    if (!res.ok) throw new Error();
    const data = await res.json();
    projectsData = data.projects || { projects: [] };
    settingsData = normalizeSettings(data.settings);
    saveDirty = false;
    syncSectionVisibilityToggles();
    setStatus(u().loadedServer, 'success');
  } catch {
    try {
      const [pRes, sRes] = await Promise.all([fetch('../data/projects.json'), fetch('../data/settings.json')]);
      if (pRes.ok) projectsData = await pRes.json();
      if (sRes.ok) settingsData = normalizeSettings(await sRes.json());
      saveDirty = false;
      setStatus(u().loadedFiles, 'warning');
    } catch { setStatus('Error', 'error'); }
  }
  syncSectionVisibilityToggles();
  applyUiCollapseFromSettings();
  renderAll();
  // Загружаем услуги отдельно из /api/services
  loadServices();
  loadReviewsAdmin();
  loadHeroAdmin();
  loadCalculatorAdmin();
  loadClientsAdmin();
}

document.getElementById('saveBtn').addEventListener('click', async () => {
  markSaving();
  snapshotSectionVisibility();
  snapshotUiCollapseState();
  try {
    const res = await fetch(API_SAVE, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password: ADMIN_PASSWORD, projects: projectsData, settings: settingsData }),
    });
    if (!res.ok) throw new Error((await res.json().catch(() => ({}))).error || 'error');
    if (!(await saveServices({ silent: true }))) throw new Error('services');
    if (!(await saveReviews({ silent: true }))) throw new Error('reviews');
    if (!(await saveHero({ silent: true }))) throw new Error('hero');
    if (!(await saveCalculator({ silent: true }))) throw new Error('calculator');
    if (!(await saveClients({ silent: true }))) throw new Error('clients');
    await markSavedSuccess();
    showToast(u().loadedServer, 'success');
    const now = new Date();
    localStorage.setItem('korsmotion_last_saved',
      now.toLocaleDateString('ru-RU') + ' ' + now.toLocaleTimeString('ru-RU', {hour:'2-digit',minute:'2-digit'}));
    renderDashboard();
  } catch (err) {
    markSaveError(u().saveError + ': ' + err.message);
    showToast(u().saveError, 'error');
  }
});

function bindSectionVisibilityToggles() {
  const pairs = [
    ['showPortfolioSection', 'show_portfolio_section'],
    ['showServicesSection', 'show_services_section'],
    ['showDevSection', 'show_dev_section'],
    ['showReviewsSection', 'show_reviews_section'],
    ['showHeroSection', 'show_hero_section'],
  ];
  pairs.forEach(([id, key]) => {
    const el = document.getElementById(id);
    if (!el || el.dataset.bound === '1') return;
    el.dataset.bound = '1';
    el.addEventListener('change', e => {
      settingsData[key] = e.target.checked;
      syncPremiumToggle(id);
      markUnsaved();
    });
  });
}

function renderAll() {
  renderDashboard();
  renderHero();
  renderProjects();
  renderDevelopment();
  renderServices();
  renderReviewsAdmin();
  renderCalculatorAdmin();
  renderClientsAdmin();
}

// ── Dashboard ─────────────────────────────────────────────────────────────────
function pickWeatherImageId(weather, icon) {
  const id = weather?.id || 800;
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 8) return 'sun_up';
  if (hour >= 17 && hour < 21) return 'sunset';
  if (icon && icon.endsWith('n')) return 'night';
  if (id >= 200 && id < 300) return 'thunderstorm';
  if (id >= 300 && id < 600) return 'rain';
  if (id >= 600 && id < 700) return 'snow';
  if (id >= 700 && id < 800) return 'fog';
  if (id === 800) return 'sunny';
  return 'cloudy';
}

function weatherEmojiFromId(id, icon) {
  if (id >= 200 && id < 300) return '⛈️';
  if (id >= 300 && id < 600) return '🌧️';
  if (id >= 600 && id < 700) return '❄️';
  if (id >= 700 && id < 800) return '🌫️';
  if (id === 800) return icon && icon.endsWith('n') ? '🌙' : '☀️';
  return '☁️';
}

function build5DayForecast(forecastData) {
  if (!forecastData?.list?.length) return [];
  const dayMap = new Map();
  const todayKey = new Date().toDateString();
  const locale = adminLang === 'de' ? 'de-DE' : adminLang === 'en' ? 'en-GB' : 'ru-RU';

  for (const item of forecastData.list) {
    const d = new Date(item.dt * 1000);
    const key = d.toDateString();
    if (key === todayKey) continue;
    const w = item.weather[0];
    if (!dayMap.has(key)) {
      dayMap.set(key, {
        date: d,
        min: item.main.temp_min,
        max: item.main.temp_max,
        id: w.id,
        icon: w.icon,
      });
    } else {
      const entry = dayMap.get(key);
      entry.min = Math.min(entry.min, item.main.temp_min);
      entry.max = Math.max(entry.max, item.main.temp_max);
    }
  }

  return Array.from(dayMap.values()).slice(0, 5).map(entry => ({
    day: entry.date.toLocaleDateString(locale, { weekday: 'short' }),
    dayNum: entry.date.getDate(),
    min: Math.round(entry.min),
    max: Math.round(entry.max),
    emoji: weatherEmojiFromId(entry.id, entry.icon),
  }));
}

function getWeatherBgUrl(imageId) {
  return adminAssetUrl('images/weather/' + imageId + '.png');
}

function getWeatherDateDisplay() {
  const now = new Date();
  const day = now.getDate();
  const month = now.getMonth();
  const weekdays = {
    ru: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
    de: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
    en: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  };
  const monthsRuGen = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
  const monthsDe = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
  const monthsEn = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const lang = adminLang || 'ru';
  const dayList = weekdays[lang] || weekdays.en;
  let dateStr;
  if (lang === 'ru') dateStr = `${day} ${monthsRuGen[month]}`;
  else if (lang === 'de') dateStr = `${day}. ${monthsDe[month]}`;
  else dateStr = `${day} ${monthsEn[month]}`;
  return {
    dayName: dayList[now.getDay()],
    dateStr,
  };
}

async function loadWeatherWidget() {
  const widget = document.getElementById('weather-widget');
  if (!widget) return;

  const t = u();
  const apiKey = getWeatherKey();
  const owmLang = adminLang === 'ru' ? 'ru' : adminLang === 'de' ? 'de' : 'en';

  if (!apiKey) {
    widget.innerHTML = `<div class="weather-widget-placeholder">${esc(t.weatherNoApiKey)}</div>`;
    return;
  }

  widget.innerHTML = `<div class="weather-widget-placeholder">${esc(t.weatherLoading)}</div>`;

  try {
    const q = encodeURIComponent(WEATHER_CITY);
    const [currentRes, forecastRes] = await Promise.all([
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${apiKey}&units=metric&lang=${owmLang}`),
      fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${q}&appid=${apiKey}&units=metric&lang=${owmLang}`),
    ]);
    if (!currentRes.ok) throw new Error('weather');
    const current = await currentRes.json();
    const forecast = forecastRes.ok ? await forecastRes.json() : null;

    const w = current.weather[0];
    const bgUrl = getWeatherBgUrl(pickWeatherImageId(w, w.icon));
    const temp = Math.round(current.main.temp);
    const humidity = current.main.humidity;
    const wind = Math.round((current.wind?.speed || 0) * 3.6);
    const forecastDays = build5DayForecast(forecast);
    const forecastHtml = forecastDays.length
      ? forecastDays.map(d => `
          <div class="weather-forecast-day">
            <span class="wf-day">${esc(d.day)}/${d.dayNum}</span>
            <span class="wf-emoji">${d.emoji}</span>
            <span class="wf-temp">${d.max}°/${d.min}°</span>
          </div>`).join('')
      : '';
    const { dayName, dateStr } = getWeatherDateDisplay();

    widget.innerHTML = `
      <div class="weather-widget-bg" style="background-image:url('${esc(bgUrl)}')"></div>
      <div class="weather-widget-overlay">
        <div class="weather-widget-header">
          <div class="weather-widget-location">📍 Bischofszell</div>
        </div>
        <div class="weather-widget-body">
          <div class="weather-widget-today">
            <div class="weather-widget-today-label">${esc(t.weatherToday)}</div>
            <div class="weather-widget-today-date">
              <span class="weather-widget-dayname">${esc(dayName)}</span>
              <span class="weather-widget-datestr">${esc(dateStr)}</span>
            </div>
          </div>
          <div class="weather-widget-temp">${temp}°</div>
          <div class="weather-widget-desc">${esc(w.description)}</div>
          <div class="weather-widget-meta"><span>💧 ${humidity}%</span><span>💨 ${wind} km/h</span></div>
        </div>
        ${forecastHtml ? `<div class="weather-widget-forecast">${forecastHtml}</div>` : ''}
      </div>`;
  } catch (_) {
    widget.innerHTML = `<div class="weather-widget-placeholder">${esc(t.weatherError)}</div>`;
  }
}

async function renderDashboard() {
  const el = document.getElementById('dashboardSection');
  if (!el) return;

  const t = u();
  const projects = (projectsData.projects || []).filter(isPortfolioProject).length;
  const apps = (projectsData.projects || []).filter(p => p.categoryId === 'web').length + (settingsData.apps || []).length;
  const lastSaved = localStorage.getItem('korsmotion_last_saved') || '—';

  el.innerHTML = `
    <div class="dash-board">
      <div class="dash-card">
        <div class="dash-icon">📁</div>
        <div class="dash-val">${projects}</div>
        <div class="dash-label">${t.dashProjects}</div>
      </div>
      <div class="dash-card">
        <div class="dash-icon">📱</div>
        <div class="dash-val">${apps}</div>
        <div class="dash-label">${t.dashApps}</div>
      </div>
      <div class="dash-card">
        <div class="dash-icon">💾</div>
        <div class="dash-val dash-val-sm">${esc(lastSaved)}</div>
        <div class="dash-label">${t.dashLastSaved}</div>
      </div>
      <div class="dash-card" id="dash-today">
        <div class="dash-icon">👁</div>
        <div class="dash-val dash-loading">…</div>
        <div class="dash-label">${t.dashViewsToday}</div>
      </div>
      <div class="dash-card" id="dash-week">
        <div class="dash-icon">📈</div>
        <div class="dash-val dash-loading">…</div>
        <div class="dash-label">${t.dashWeek}</div>
      </div>
      <div class="dash-card" id="dash-month">
        <div class="dash-icon">🗓</div>
        <div class="dash-val dash-loading">…</div>
        <div class="dash-label">${t.dashMonth}</div>
      </div>
      <div id="weather-widget"></div>
    </div>`;

  loadWeatherWidget();
  startWeatherRefresh();

  const setDashViews = (today, week, month) => {
    const map = { 'dash-today': today, 'dash-week': week, 'dash-month': month };
    Object.entries(map).forEach(([id, val]) => {
      const card = document.getElementById(id);
      if (!card) return;
      const el = card.querySelector('.dash-val');
      el.textContent = val;
      el.classList.remove('dash-loading');
    });
  };

  try {
    const resp = await fetch('/api/analytics', {
      headers: { 'X-Admin-Password': ADMIN_PASSWORD }
    });
    const data = await resp.json();
    if (!resp.ok || data.error) throw new Error(data.error || resp.status);

    const acc = data?.data?.viewer?.accounts?.[0];
    const rumViews = (group) => {
      const row = group?.[0];
      if (!row) return 0;
      const n = row.count ?? row.sum?.count ?? row.sum?.visits;
      return n != null ? n : 0;
    };
    if (!acc) throw new Error('No analytics data');

    setDashViews(
      rumViews(acc.todayViews ?? acc.today),
      rumViews(acc.week),
      rumViews(acc.total)
    );
  } catch (err) {
    const msg = err?.message || String(err);
    console.warn('Analytics:', msg);
    setDashViews('—', '—', '—');
    ['dash-today', 'dash-week', 'dash-month'].forEach(id => {
      const card = document.getElementById(id);
      if (card) {
        card.title = msg;
        card.style.cursor = 'help';
      }
    });
  }
}

// ── Portfolio ─────────────────────────────────────────────────────────────────
function projectsByCategory(catId) {
  return (projectsData.projects || []).filter(p => (p.categoryId || 'motion') === catId);
}

function bindProjectCardEvents(container) {
  container.querySelectorAll('.proj-field').forEach(el => {
    el.addEventListener('input', e => {
      const id = e.target.dataset.id, field = e.target.dataset.field, lang = e.target.dataset.lang;
      const p = projectsData.projects.find(x => x.id === id);
      if (!p) return;
      if (lang) {
        if (!p[field]) p[field] = {};
        p[field][lang] = e.target.value;
      } else {
        p[field] = e.target.value;
        if (field === 'title') {
          const card = e.target.closest('.item-card');
          if (card) card.querySelector('.item-card-title').textContent = e.target.value || 'Untitled';
        }
        if (field === 'thumbnail') updateThumbPreview(id, e.target.value);
      }
    });
  });
  container.querySelectorAll('.vis-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const p = projectsData.projects.find(x => x.id === btn.dataset.id);
      if (p) { p.visible = !p.visible; renderProjects(); renderDevelopment(); markUnsaved(); }
    });
  });
  container.querySelectorAll('.del-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (confirm(u().deleteConfirm)) {
        projectsData.projects = projectsData.projects.filter(x => x.id !== btn.dataset.id);
        renderProjects();
        renderDevelopment();
        markUnsaved();
      }
    });
  });
}

function renderProjects() {
  const t = u();
  const all = (projectsData.projects || []).filter(isPortfolioProject);
  document.getElementById('projectsCount').textContent = all.length;

  const container = document.getElementById('projectsList');
  container.innerHTML = PORTFOLIO_CATEGORIES.map(cat => {
    const items = projectsByCategory(cat.id);
    const isOpen = !isCatCollapsed(cat.id);
    const catLabel = cat.label[adminLang] || cat.label.en;
    return `
      <div class="cat-section">
        <div class="cat-header" onclick="toggleCat('${cat.id}')">
          <div class="cat-header-left">
            <span class="cat-icon">${cat.icon}</span>
            <span class="cat-label">${catLabel}</span>
            <span class="cat-count">${items.length}</span>
          </div>
          <div class="cat-header-right">
            <button class="btn btn-primary btn-sm" onclick="event.stopPropagation();addProject('${cat.id}')">${t.add}</button>
            <span class="cat-chevron ${isOpen ? 'open' : ''}">▾</span>
          </div>
        </div>
        <div class="cat-body ${isOpen ? 'open' : ''}">
          ${items.length === 0
            ? `<div class="empty-state">${t.noProjects}</div>`
            : items.map(p => renderProjectCard(p)).join('')}
        </div>
      </div>`;
  }).join('');

  bindProjectCardEvents(container);
}

function renderProjectCard(p) {
  const t = u();
  const activeLang = activeLangTab[p.id] || 'en';
  const thumb = p.thumbnail
    ? `<img class="thumb-preview" id="thumb-${p.id}" src="${esc(p.thumbnail)}" alt="" onerror="this.style.display='none'">`
    : `<div class="thumb-placeholder" id="thumb-${p.id}">${t.noImage}</div>`;

  const langTabs = SITE_LANGS.map(lang => `
    <button class="lang-tab ${lang === activeLang ? 'active' : ''}"
      onclick="setProjectLangTab('${p.id}','${lang}')">${SITE_LANG_LABELS[lang]}</button>
  `).join('');

  const titleVal = (p.titles && p.titles[activeLang]) || '';
  const descVal = (p.descriptions && p.descriptions[activeLang]) || '';
  const isCollapsed = isProjectCardCollapsed(p.id);

  return `
    <div class="item-card ${p.visible ? '' : 'hidden-item'}${isCollapsed ? ' collapsed' : ''}" data-id="${p.id}">
      <div class="item-card-head">
        <button type="button" class="item-card-chevron ${isCollapsed ? '' : 'open'}" onclick="event.stopPropagation();toggleProjectCard('${p.id}')" aria-label="Toggle">▾</button>
        <span class="item-card-title">${esc(p.title || 'Untitled')}</span>
        <div class="item-card-actions">
          <button class="btn btn-ghost btn-sm vis-btn" data-id="${p.id}">${p.visible ? t.hide : t.show}</button>
          <button class="btn btn-danger btn-sm del-btn" data-id="${p.id}">${t.delete}</button>
        </div>
      </div>
      <div class="item-card-body">
        <div class="thumb-col">${thumb}</div>
        <div class="fields-col">
          <div class="item-fields">
            <div class="form-group">
              <label class="form-label">${t.fieldTitle} (slug)</label>
              <input class="form-input proj-field" data-id="${p.id}" data-field="title" value="${esc(p.title)}">
            </div>
            <div class="form-group">
              <label class="form-label">${t.fieldThumb}</label>
              <input class="form-input proj-field" data-id="${p.id}" data-field="thumbnail" value="${esc(p.thumbnail)}" placeholder="https://...">
            </div>
            <div class="form-group full">
              <label class="form-label">${t.fieldVideo}</label>
              <input class="form-input proj-field" data-id="${p.id}" data-field="videoUrl" value="${esc(p.videoUrl)}" placeholder="https://youtube.com/watch?v=...">
              ${p.videoUrl && getYouTubeIdAdmin(p.videoUrl) ? `
                <div class="video-thumb-wrap" id="vthumb-${p.id}">
                  <img class="video-thumb-img" src="https://img.youtube.com/vi/${getYouTubeIdAdmin(p.videoUrl)}/mqdefault.jpg" alt="">
                  <button class="video-play-btn" onclick="toggleVideoPreview('${p.id}','${esc(p.videoUrl)}')">▶ Play</button>
                </div>
              ` : ''}
            </div>
            <div class="form-group">
              <label class="form-label">${t.fieldClient}</label>
              <input class="form-input proj-field" data-id="${p.id}" data-field="client" value="${esc(p.client)}">
            </div>
            <div class="form-group">
              <label class="form-label">${t.fieldYear}</label>
              <input class="form-input proj-field" data-id="${p.id}" data-field="year" value="${esc(p.year)}">
            </div>
            <div class="form-group full">
              <label class="form-label">Тип карточки</label>
              <div class="card-type-toggle">
                <button class="card-type-btn ${!p.cardType || p.cardType === 'default' ? 'active' : ''}"
                  onclick="setCardType('${p.id}','default')">
                  📋 Видео + текст
                </button>
                <button class="card-type-btn ${p.cardType === 'full' ? 'active' : ''}"
                  onclick="setCardType('${p.id}','full')">
                  🎬 Только видео
                </button>
              </div>
            </div>
          </div>

          <div class="lang-section">
            <div class="lang-section-label">${t.langLabel}:</div>
            <div class="lang-tabs">${langTabs}</div>
            <div class="lang-fields">
              <div class="form-group">
                <label class="form-label">${t.fieldTitle}</label>
                <input class="form-input proj-field" data-id="${p.id}" data-field="titles" data-lang="${activeLang}" value="${esc(titleVal)}">
              </div>
              <div class="form-group">
                <label class="form-label">${t.fieldDesc}</label>
                <textarea class="form-textarea proj-field" data-id="${p.id}" data-field="descriptions" data-lang="${activeLang}">${esc(descVal)}</textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`;
}

function updateThumbPreview(id, url) {
  const el = document.getElementById('thumb-' + id);
  if (!el) return;
  const t = u();
  el.outerHTML = url
    ? `<img class="thumb-preview" id="thumb-${id}" src="${esc(url)}" alt="" onerror="this.style.display='none'">`
    : `<div class="thumb-placeholder" id="thumb-${id}">${t.noImage}</div>`;
}

window.toggleCat = function(catId) {
  setCatCollapsed(catId, !isCatCollapsed(catId));
  renderProjects();
};

window.toggleProjectCard = function(id) {
  setProjectCardCollapsed(id, !isProjectCardCollapsed(id));
  renderProjects();
  renderDevelopment();
};

window.addProject = function(catId) {
  const count = projectsData.projects.length;
  const gradients = ['pv-1','pv-2','pv-3','pv-4','pv-5'];
  const layouts = ['large','small','third'];
  projectsData.projects.push({
    id: uid(), title: 'New Project', categoryId: catId,
    category: categoryMeta(catId)?.label.en || 'Motion Design',
    thumbnail: '', videoUrl: '', visible: true,
    layout: layouts[count % 3], gradient: gradients[count % 5],
    client: '', year: new Date().getFullYear().toString(), duration: '',
    titles: {}, descriptions: {}
  });
  if (catId === 'web') {
    setDevCatCollapsed('web', false);
    renderDevelopment();
  } else {
    setCatCollapsed(catId, false);
    renderProjects();
  }
  markUnsaved();
};

window.setProjectLangTab = function(id, lang) {
  activeLangTab[id] = lang;
  renderProjects();
  renderDevelopment();
};

window.setAppLangTab = function(idx, lang) {
  activeAppLangTab[idx] = lang;
  renderDevelopment();
};

// ── Dev Apps ──────────────────────────────────────────────────────────────────
function renderAppScreensAdmin(a, i) {
  const screens = (a.screens || ['', '', '', '', '']).concat(['', '', '', '', '']).slice(0, 5);
  const labels = ['Скриншот 1', 'Скриншот 2', 'Скриншот 3', 'Скриншот 4', 'Скриншот 5'];
  return screens.map((s, si) => `
    <div class="form-group">
      <label class="form-label">${labels[si]}</label>
      <input class="form-input app-field" data-index="${i}" data-field="screens" data-screen="${si}"
        value="${esc(s)}" placeholder="images/apps/appname/screen${si + 1}.png">
    </div>`).join('');
}

function renderAppCard(a, i) {
  const t = u();
  const appId = a.id || `app_${i}`;
  const collapsed = isAppCardCollapsed(appId);
  const appLang = activeAppLangTab[i] || 'en';
  const iconUrl = a.icon || '';
  const iconPreviewSrc = iconUrl ? adminAssetUrl(iconUrl) : '';
  const iconHtml = iconPreviewSrc
    ? `<img src="${esc(iconPreviewSrc)}" alt="" style="width:64px;height:64px;border-radius:14px;object-fit:cover;border:2px solid var(--border)">`
    : `<div style="width:64px;height:64px;border-radius:14px;border:2px dashed var(--border);background:var(--bg-input);display:flex;align-items:center;justify-content:center;font-size:24px">📱</div>`;

  return `
    <div class="item-card ${a.visible ? '' : 'hidden-item'}${collapsed ? ' collapsed' : ''}" data-app-id="${esc(appId)}">
      <div class="item-card-head">
        <button type="button" class="item-card-chevron ${collapsed ? '' : 'open'}" onclick="toggleAppCard('${esc(appId)}')" aria-label="Toggle">▾</button>
        <span class="item-card-title">${esc(a.title || 'Untitled')}</span>
        <div class="item-card-actions">
          <button class="btn btn-ghost btn-sm app-vis-btn" data-index="${i}">${a.visible ? t.hide : t.show}</button>
          <button class="btn btn-danger btn-sm app-del-btn" data-index="${i}">${t.delete}</button>
        </div>
      </div>
      <div class="item-card-body item-card-body--plain">
        <div style="display:flex;gap:16px;margin-top:4px;align-items:flex-start">
          <div>${iconHtml}</div>
          <div style="flex:1;display:grid;grid-template-columns:1fr 1fr;gap:10px">
            <div class="form-group">
              <label class="form-label">${t.fieldTitle}</label>
              <input class="form-input app-field" data-index="${i}" data-field="title" value="${esc(a.title)}">
            </div>
            <div class="form-group">
              <label class="form-label">${t.fieldPlatform}</label>
              <input class="form-input app-field" data-index="${i}" data-field="platform" value="${esc(a.platform)}" placeholder="Android TV">
            </div>
            <div class="form-group" style="grid-column:1/-1">
              <label class="form-label">Иконка (путь)</label>
              <div style="display:flex;gap:8px;align-items:center">
                <input class="form-input app-field" data-index="${i}" data-field="icon" value="${esc(a.icon || '')}" placeholder="images/apps/${esc(appId)}/icon.png" style="flex:1">
                <button type="button" class="btn btn-ghost btn-sm" onclick="uploadAppIcon(${i})">${t.uploadBtn}</button>
              </div>
            </div>
          </div>
        </div>

        <div class="lang-section" style="margin-top:12px">
          <div class="lang-section-label">${t.langLabel}:</div>
          <div class="lang-tabs">
            ${SITE_LANGS.map(lang => `
              <button type="button" class="lang-tab ${appLang === lang ? 'active' : ''}"
                onclick="setAppLangTab(${i},'${lang}')">${SITE_LANG_LABELS[lang]}</button>
            `).join('')}
          </div>
          <div class="lang-fields">
            <div class="form-group">
              <textarea class="form-textarea app-field" data-index="${i}" data-field="descriptions" data-lang="${appLang}"
                placeholder="${t.fieldDesc}...">${esc((a.descriptions && a.descriptions[appLang]) || '')}</textarea>
            </div>
          </div>
        </div>

        <div style="margin-top:12px;padding:12px;background:var(--bg-input);border-radius:10px;border:2px solid var(--border)">
          <div class="form-label" style="margin-bottom:10px">🖼 Скриншоты (images/apps/appname/)</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
            ${renderAppScreensAdmin(a, i)}
          </div>
        </div>

        <div style="margin-top:12px;padding:12px;background:var(--bg-input);border-radius:10px;border:2px solid var(--border)">
          <div class="form-label" style="margin-bottom:10px">🏪 Магазины</div>
          <div style="display:grid;grid-template-columns:auto 1fr;gap:8px;align-items:center">
            <label style="display:flex;align-items:center;gap:6px;font-size:13px;font-weight:600;white-space:nowrap">
              <input type="checkbox" class="app-check" data-index="${i}" data-field="showGooglePlay" ${a.showGooglePlay ? 'checked' : ''}>
              Google Play
            </label>
            <input class="form-input app-field" data-index="${i}" data-field="googlePlayUrl"
              value="${esc(a.googlePlayUrl || '')}" placeholder="https://play.google.com/store/apps/details?id=...">
            <label style="display:flex;align-items:center;gap:6px;font-size:13px;font-weight:600;white-space:nowrap">
              <input type="checkbox" class="app-check" data-index="${i}" data-field="showAppStore" ${a.showAppStore ? 'checked' : ''}>
              App Store
            </label>
            <input class="form-input app-field" data-index="${i}" data-field="appStoreUrl"
              value="${esc(a.appStoreUrl || '')}" placeholder="https://apps.apple.com/app/...">
          </div>
        </div>
      </div>
    </div>`;
}

function bindAppCardEvents(container) {
  container.querySelectorAll('.app-field').forEach(el => {
    el.addEventListener('input', e => {
      const idx = +e.target.dataset.index;
      const field = e.target.dataset.field;
      const screenIdx = e.target.dataset.screen;
      const lang = e.target.dataset.lang;
      if (screenIdx !== undefined) {
        if (!settingsData.apps[idx].screens) settingsData.apps[idx].screens = ['', '', '', '', ''];
        settingsData.apps[idx].screens[+screenIdx] = e.target.value;
      } else if (lang) {
        if (!settingsData.apps[idx].descriptions) settingsData.apps[idx].descriptions = {};
        settingsData.apps[idx].descriptions[lang] = e.target.value;
      } else {
        settingsData.apps[idx][field] = e.target.value;
        if (field === 'title') {
          e.target.closest('.item-card').querySelector('.item-card-title').textContent = e.target.value || 'Untitled';
        }
        if (field === 'icon') renderDevelopment();
      }
    });
  });
  container.querySelectorAll('.app-check').forEach(el => {
    el.addEventListener('change', e => {
      const idx = +e.target.dataset.index;
      settingsData.apps[idx][e.target.dataset.field] = e.target.checked;
    });
  });
  container.querySelectorAll('.app-vis-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      settingsData.apps[+btn.dataset.index].visible = !settingsData.apps[+btn.dataset.index].visible;
      renderDevelopment();
      markUnsaved();
    });
  });
  container.querySelectorAll('.app-del-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (confirm(u().deleteAppConfirm)) {
        settingsData.apps.splice(+btn.dataset.index, 1);
        renderDevelopment();
        markUnsaved();
      }
    });
  });
}

function renderDevSubsection(sub) {
  const t = u();
  const isOpen = !isDevCatCollapsed(sub.id);
  const catLabel = sub.label[adminLang] || sub.label.en;

  if (sub.id === 'web') {
    const items = projectsByCategory('web');
    return `
      <div class="cat-section">
        <div class="cat-header" onclick="toggleDevCat('web')">
          <div class="cat-header-left">
            <span class="cat-icon">${sub.icon}</span>
            <span class="cat-label">${catLabel}</span>
            <span class="cat-count">${items.length}</span>
          </div>
          <div class="cat-header-right">
            <button class="btn btn-primary btn-sm" onclick="event.stopPropagation();addProject('web')">${t.add}</button>
            <span class="cat-chevron ${isOpen ? 'open' : ''}">▾</span>
          </div>
        </div>
        <div class="cat-body ${isOpen ? 'open' : ''}">
          ${items.length === 0
            ? `<div class="empty-state">${t.noWebProjects}</div>`
            : items.map(p => renderProjectCard(p)).join('')}
        </div>
      </div>`;
  }

  const items = settingsData.apps || [];
  return `
    <div class="cat-section">
      <div class="cat-header" onclick="toggleDevCat('apps')">
        <div class="cat-header-left">
          <span class="cat-icon">${sub.icon}</span>
          <span class="cat-label">${catLabel}</span>
          <span class="cat-count">${items.length}</span>
        </div>
        <div class="cat-header-right">
          <button class="btn btn-primary btn-sm" onclick="event.stopPropagation();addDevApp()">${t.add}</button>
          <span class="cat-chevron ${isOpen ? 'open' : ''}">▾</span>
        </div>
      </div>
      <div class="cat-body ${isOpen ? 'open' : ''}">
        ${items.length === 0
          ? `<div class="empty-state">${t.noAppsSub}</div>`
          : items.map((a, i) => renderAppCard(a, i)).join('')}
      </div>
    </div>`;
}

function renderDevelopment() {
  const webItems = projectsByCategory('web');
  const appItems = settingsData.apps || [];
  const countEl = document.getElementById('appsCount');
  if (countEl) countEl.textContent = webItems.length + appItems.length;

  const container = document.getElementById('devList');
  if (!container) return;

  container.innerHTML = DEV_SUBSECTIONS.map(sub => renderDevSubsection(sub)).join('');
  bindProjectCardEvents(container);
  bindAppCardEvents(container);
}

window.toggleDevCat = function(catId) {
  setDevCatCollapsed(catId, !isDevCatCollapsed(catId));
  renderDevelopment();
};

window.toggleAppCard = function(id) {
  setAppCardCollapsed(id, !isAppCardCollapsed(id));
  renderDevelopment();
};

window.addDevApp = function() {
  settingsData.apps.push({
    id: uid(), title: 'New App', descriptions: {}, platform: 'Android TV',
    icon: '', screens: ['', '', '', '', ''],
    showGooglePlay: false, googlePlayUrl: '',
    showAppStore: false, appStoreUrl: '',
    visible: true,
  });
  setDevCatCollapsed('apps', false);
  renderDevelopment();
  markUnsaved();
};

// ── Init ──────────────────────────────────────────────────────────────────────
renderWeatherGrid();
initSaveBtn();
initPremiumToggles();
initDirtyTracking();
bindSectionVisibilityToggles();
initPasswordToggles();
bindMaskedSecretField('githubTokenInput', getGithubToken, GITHUB_TOKEN_KEY);
bindMaskedSecretField('weatherKeyInput', getWeatherKey, WEATHER_KEY);

document.querySelectorAll('.admin-lang-btn').forEach(btn => {
  btn.addEventListener('click', () => setAdminLang(btn.dataset.lang));
});

const saveGithubTokenBtn = document.getElementById('saveGithubTokenBtn');
if (saveGithubTokenBtn) saveGithubTokenBtn.addEventListener('click', saveGithubToken);
const saveWeatherKeyBtn = document.getElementById('saveWeatherKeyBtn');
if (saveWeatherKeyBtn) saveWeatherKeyBtn.addEventListener('click', saveWeatherKey);
const openSettingsModalBtn = document.getElementById('openSettingsModal');
if (openSettingsModalBtn) openSettingsModalBtn.addEventListener('click', openSettingsModal);
const closeSettingsModalBtn = document.getElementById('closeSettingsModalBtn');
if (closeSettingsModalBtn) closeSettingsModalBtn.addEventListener('click', closeSettingsModal);

initSectionCollapse();
if (isLoggedIn()) showAdmin(); else showLogin();

function getYouTubeIdAdmin(url) {
  if (!url) return null;
  const m = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]{11})/);
  return m ? m[1] : null;
}

window.toggleVideoPreview = function(id, url) {
  const ytId = getYouTubeIdAdmin(url);
  if (!ytId) return;
  const wrap = document.getElementById('vthumb-' + id);
  if (!wrap) return;
  if (wrap.querySelector('iframe')) {
    wrap.innerHTML = `
      <img class="video-thumb-img" src="https://img.youtube.com/vi/${ytId}/mqdefault.jpg" alt="">
      <button class="video-play-btn" onclick="toggleVideoPreview('${id}','${url}')">▶ Play</button>`;
    return;
  }
  wrap.innerHTML = `
    <iframe src="https://www.youtube.com/embed/${ytId}?autoplay=1" frameborder="0"
      allow="autoplay; encrypted-media" allowfullscreen 
      style="width:100%;height:100%;border-radius:8px;border:none"></iframe>
    <button class="video-play-btn stop" onclick="toggleVideoPreview('${id}','${url}')">■ Stop</button>`;
};

window.setCardType = function(id, type) {
  const p = projectsData.projects.find(x => x.id === id);
  if (p) {
    p.cardType = type;
    renderProjects();
    renderDevelopment();
    markUnsaved();
  }
};

// ── SERVICES ──────────────────────────────────────────────────────────────────
const LANGS = ['de', 'en', 'ru', 'fr', 'it'];
const LANG_LABELS = { de: 'DE', en: 'EN', ru: 'RU', fr: 'FR', it: 'IT' };

function updateServicesCount() {
  const countEl = document.getElementById('servicesCount');
  if (countEl) {
    countEl.textContent = (servicesData.services || []).filter(s => s.visible !== false).length;
  }
}

async function loadServices() {
  try {
    const res = await fetch(API_SERVICES);
    if (res.ok) {
      const data = await res.json();
      servicesData = data;
    }
  } catch (_) {}
  renderServices();
  updateServicesCount();
}

async function saveServices({ silent = false } = {}) {
  try {
    const res = await fetch(API_SERVICES, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password: ADMIN_PASSWORD, services: servicesData.services }),
    });
    if (!res.ok) throw new Error();
    if (!silent) {
      await markSavedSuccess();
      showToast(u().loadedServer, 'success');
    }
    return true;
  } catch {
    if (!silent) {
      markSaveError(u().saveError);
      showToast(u().saveError, 'error');
    }
    return false;
  }
}

function renderServices() {
  const container = document.getElementById('servicesList');
  if (!container) return;
  const services = servicesData.services || [];
  updateServicesCount();

  if (!services.length) {
    container.innerHTML = '<div class="empty-state">Нет услуг</div>';
    return;
  }

  container.innerHTML = services.map((svc, i) => renderServiceCard(svc, i)).join('');
  attachServiceEvents(container);
}

function lv(obj, lang) {
  if (!obj) return '';
  return obj[lang] || obj['en'] || obj['de'] || Object.values(obj)[0] || '';
}

function serviceCardId(svc, i) {
  return svc.id || `svc_${i}`;
}

function renderServiceCard(svc, i) {
  const t = u();
  const lang = serviceActiveLang;
  const svcId = serviceCardId(svc, i);
  const isCollapsed = isServiceCardCollapsed(svcId);
  const langTabs = LANGS.map(l => `
    <button class="lang-tab ${l === lang ? 'active' : ''}" data-svc-lang="${l}" data-svc-index="${i}">${LANG_LABELS[l]}</button>
  `).join('');

  const steps = (svc.steps || []).map((step, si) => `
    <div class="step-row" style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:8px;align-items:start">
      <input class="form-input svc-step-title" data-svc-index="${i}" data-step="${si}" data-lang="${lang}"
        value="${esc(lv(step.title, lang))}" placeholder="Шаг ${si+1} заголовок">
      <input class="form-input svc-step-desc" data-svc-index="${i}" data-step="${si}" data-lang="${lang}"
        value="${esc(lv(step.desc, lang))}" placeholder="Описание">
    </div>
  `).join('');

  const faqs = (svc.faq || []).map((faq, fi) => `
    <div class="faq-row" style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:8px">
      <input class="form-input svc-faq-q" data-svc-index="${i}" data-faq="${fi}" data-lang="${lang}"
        value="${esc(lv(faq.q, lang))}" placeholder="Вопрос">
      <input class="form-input svc-faq-a" data-svc-index="${i}" data-faq="${fi}" data-lang="${lang}"
        value="${esc(lv(faq.a, lang))}" placeholder="Ответ">
    </div>
  `).join('');

  return `
    <div class="item-card ${svc.visible !== false ? '' : 'hidden-item'}${isCollapsed ? ' collapsed' : ''}" data-svc-index="${i}" data-svc-id="${esc(svcId)}">
      <div class="item-card-head">
        <button type="button" class="item-card-chevron ${isCollapsed ? '' : 'open'}" onclick="event.stopPropagation();toggleServiceCard('${esc(svcId)}')" aria-label="Toggle">▾</button>
        <span class="item-card-title">${esc(lv(svc.title, lang) || svc.id)}</span>
        <div class="item-card-actions">
          <button class="btn btn-ghost btn-sm svc-vis-btn" data-svc-index="${i}">${svc.visible !== false ? t.svcHide : t.svcShow}</button>
        </div>
      </div>

      <div class="item-card-body item-card-body--plain">
      <div class="lang-tabs" style="margin:0 0 16px">${langTabs}</div>

      <div class="item-fields">
        <div class="form-group">
          <label class="form-label">${t.svcFieldTitle}</label>
          <input class="form-input svc-field" data-svc-index="${i}" data-field="title" data-lang="${lang}"
            value="${esc(lv(svc.title, lang))}">
        </div>
        <div class="form-group">
          <label class="form-label">${t.svcFieldPrice}</label>
          <input class="form-input svc-price" data-svc-index="${i}" type="number"
            value="${svc.price || ''}" placeholder="500">
        </div>
        <div class="form-group full">
          <label class="form-label">${t.svcFieldShortDesc}</label>
          <input class="form-input svc-field" data-svc-index="${i}" data-field="shortDesc" data-lang="${lang}"
            value="${esc(lv(svc.shortDesc, lang))}">
        </div>
        <div class="form-group full">
          <label class="form-label">${t.svcFieldSubtitle}</label>
          <input class="form-input svc-field" data-svc-index="${i}" data-field="subtitle" data-lang="${lang}"
            value="${esc(lv(svc.subtitle, lang))}">
        </div>
        <div class="form-group full">
          <label class="form-label">${t.svcFieldWhat}</label>
          <textarea class="form-textarea svc-field" data-svc-index="${i}" data-field="whatText" data-lang="${lang}">${esc(lv(svc.whatText, lang))}</textarea>
        </div>
        <div class="form-group full">
          <label class="form-label">${t.svcFieldPriceNote}</label>
          <input class="form-input svc-field" data-svc-index="${i}" data-field="priceNote" data-lang="${lang}"
            value="${esc(lv(svc.priceNote, lang))}">
        </div>

        <div class="form-group full">
          <label class="form-label" style="margin-bottom:8px">${t.svcFieldSteps}</label>
          ${steps}
        </div>

        <div class="form-group full">
          <label class="form-label" style="margin-bottom:8px">${t.svcFieldFaq}</label>
          ${faqs}
        </div>
      </div>
      </div>
    </div>
  `;
}

window.toggleServiceCard = function(id) {
  setServiceCardCollapsed(id, !isServiceCardCollapsed(id));
  renderServices();
};

function attachServiceEvents(container) {
  // Переключение языка в карточке
  container.querySelectorAll('[data-svc-lang]').forEach(btn => {
    btn.addEventListener('click', () => {
      serviceActiveLang = btn.dataset.svcLang;
      renderServices();
    });
  });

  // Видимость
  container.querySelectorAll('.svc-vis-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const i = +btn.dataset.svcIndex;
      const on = servicesData.services[i].visible !== false;
      servicesData.services[i].visible = !on;
      renderServices();
      markUnsaved();
    });
  });

  // Цена
  container.querySelectorAll('.svc-price').forEach(el => {
    el.addEventListener('input', e => {
      const i = +e.target.dataset.svcIndex;
      servicesData.services[i].price = +e.target.value || 0;
    });
  });

  // Текстовые поля (title, shortDesc, subtitle, whatText, priceNote)
  container.querySelectorAll('.svc-field').forEach(el => {
    el.addEventListener('input', e => {
      const i = +e.target.dataset.svcIndex;
      const field = e.target.dataset.field;
      const lang = e.target.dataset.lang;
      if (!servicesData.services[i][field]) servicesData.services[i][field] = {};
      servicesData.services[i][field][lang] = e.target.value;
      if (field === 'title') {
        e.target.closest('.item-card').querySelector('.item-card-title').textContent = e.target.value;
      }
    });
  });

  // Шаги
  container.querySelectorAll('.svc-step-title, .svc-step-desc').forEach(el => {
    el.addEventListener('input', e => {
      const i = +e.target.dataset.svcIndex;
      const si = +e.target.dataset.step;
      const lang = e.target.dataset.lang;
      const field = e.target.classList.contains('svc-step-title') ? 'title' : 'desc';
      if (!servicesData.services[i].steps[si][field]) servicesData.services[i].steps[si][field] = {};
      servicesData.services[i].steps[si][field][lang] = e.target.value;
    });
  });

  // FAQ
  container.querySelectorAll('.svc-faq-q, .svc-faq-a').forEach(el => {
    el.addEventListener('input', e => {
      const i = +e.target.dataset.svcIndex;
      const fi = +e.target.dataset.faq;
      const lang = e.target.dataset.lang;
      const field = e.target.classList.contains('svc-faq-q') ? 'q' : 'a';
      if (!servicesData.services[i].faq[fi][field]) servicesData.services[i].faq[fi][field] = {};
      servicesData.services[i].faq[fi][field][lang] = e.target.value;
    });
  });
}

// ── Hero ──────────────────────────────────────────────────────────────────────
function heroMediaOpacityPct(data) {
  const n = Number(data?.mediaOpacity);
  if (Number.isFinite(n)) return Math.min(100, Math.max(0, Math.round(n)));
  return 44;
}

function normalizeHeroData(raw) {
  const data = raw && typeof raw === 'object' ? raw : {};
  const content = { ...DEFAULT_HERO.content };
  if (data.content && typeof data.content === 'object') {
    SITE_LANGS.forEach(lang => {
      if (data.content[lang]) content[lang] = { ...content[lang], ...data.content[lang] };
    });
  }
  return {
    show: data.show !== false,
    media: typeof data.media === 'string' ? data.media : '',
    cardMedia: typeof data.cardMedia === 'string' ? data.cardMedia : '',
    mediaOpacity: heroMediaOpacityPct(data),
    content,
  };
}

async function loadHeroAdmin() {
  try {
    const res = await fetch(API_HERO);
    if (res.ok) heroData = normalizeHeroData(await res.json());
  } catch (_) {}
  renderHero();
}

async function saveHero({ silent } = {}) {
  snapshotSectionVisibility();
  heroData.show = settingsData.show_hero_section !== false;
  try {
    const res = await fetch(API_HERO, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password: ADMIN_PASSWORD, hero: heroData }),
    });
    if (!res.ok) throw new Error((await res.json().catch(() => ({}))).error || 'error');
    return true;
  } catch (e) {
    if (!silent) showToast(u().saveError, 'error');
    return false;
  }
}

function ensureHeroLang(lang) {
  if (!heroData.content[lang]) heroData.content[lang] = { ...DEFAULT_HERO.content.ru };
  return heroData.content[lang];
}

function renderHero() {
  const container = document.getElementById('heroSection');
  if (!container) return;
  const lang = heroActiveLang;
  const c = ensureHeroLang(lang);
  const mediaUrl = heroData.media ? adminAssetUrl(heroData.media) : '';
  const ext = (heroData.media || '').split('.').pop().toLowerCase();
  const isVideo = ['mp4', 'webm', 'mov'].includes(ext);
  const mediaPreview = mediaUrl
    ? (isVideo
      ? `<video src="${esc(mediaUrl)}" muted loop autoplay playsinline></video>`
      : `<img src="${esc(mediaUrl)}" alt="">`)
    : `<div class="thumb-placeholder" style="width:100%;height:100%;border:none">${esc(u().heroMediaNone)}</div>`;
  const cardUrl = heroData.cardMedia ? adminAssetUrl(heroData.cardMedia) : '';
  const cardExt = (heroData.cardMedia || '').split('.').pop().toLowerCase();
  const cardIsVideo = ['mp4', 'webm', 'mov'].includes(cardExt);
  const cardPreview = cardUrl
    ? (cardIsVideo
      ? `<video src="${esc(cardUrl)}" muted loop autoplay playsinline></video>`
      : `<img src="${esc(cardUrl)}" alt="">`)
    : `<div class="thumb-placeholder" style="width:100%;height:100%;border:none">${esc(u().heroCardMediaNone)}</div>`;
  const opacityPct = heroMediaOpacityPct(heroData);

  container.innerHTML = `
    <div class="lang-section">
      <div class="lang-section-label">${esc(u().langLabel)}</div>
      <div class="lang-tabs" id="heroLangTabs">
        ${SITE_LANGS.map(l => `<button type="button" class="lang-tab${l === lang ? ' active' : ''}" data-hero-lang="${l}">${SITE_LANG_LABELS[l]}</button>`).join('')}
      </div>
      <div class="lang-fields">
        <div class="form-group"><label class="form-label">${esc(u().heroBadge)}</label><input class="form-input hero-field" data-field="badge" value="${esc(c.badge || '')}"></div>
        <div class="form-group"><label class="form-label">${esc(u().heroMainTitle)}</label><textarea class="form-textarea hero-field" data-field="title" rows="3">${esc(c.title || '')}</textarea></div>
        <div class="form-group"><label class="form-label">${esc(u().heroSubtitle)}</label><textarea class="form-textarea hero-field" data-field="subtitle" rows="2">${esc(c.subtitle || '')}</textarea></div>
        <div class="item-fields">
          <div class="form-group"><label class="form-label">${esc(u().heroBtn1)}</label><input class="form-input hero-field" data-field="btn1Text" value="${esc(c.btn1Text || '')}"></div>
          <div class="form-group"><label class="form-label">${esc(u().heroBtn1Link)}</label><input class="form-input hero-field" data-field="btn1Link" value="${esc(c.btn1Link || '')}"></div>
          <div class="form-group"><label class="form-label">${esc(u().heroBtn2)}</label><input class="form-input hero-field" data-field="btn2Text" value="${esc(c.btn2Text || '')}"></div>
          <div class="form-group"><label class="form-label">${esc(u().heroBtn2Link)}</label><input class="form-input hero-field" data-field="btn2Link" value="${esc(c.btn2Link || '')}"></div>
        </div>
      </div>
    </div>
    <div style="margin-top:16px;display:grid;grid-template-columns:1fr 1fr;gap:16px">
      <div>
        <div class="form-label">${esc(u().heroMedia)}</div>
        <div class="hero-opacity-row">
          <label class="form-label" for="heroMediaOpacity">${esc(u().heroMediaOpacity)}</label>
          <input type="range" id="heroMediaOpacity" min="0" max="100" step="1" value="${opacityPct}">
          <span class="hero-opacity-value" id="heroMediaOpacityVal">${opacityPct}%</span>
        </div>
        <div class="hero-media-preview hero-backdrop-preview" id="heroMediaPreview" style="--hero-preview-opacity:${opacityPct / 100}">${mediaPreview}</div>
        <button type="button" class="upload-btn" style="margin-top:10px" id="heroUploadBtn">${esc(u().uploadBtn)}</button>
      </div>
      <div>
        <div class="form-label">${esc(u().heroCardMedia)}</div>
        <div class="hero-media-preview">${cardPreview}</div>
        <button type="button" class="upload-btn" style="margin-top:10px" id="heroCardUploadBtn">${esc(u().uploadBtn)}</button>
      </div>
    </div>`;

  container.querySelectorAll('[data-hero-lang]').forEach(btn => {
    btn.addEventListener('click', () => {
      heroActiveLang = btn.dataset.heroLang;
      renderHero();
    });
  });
  container.querySelectorAll('.hero-field').forEach(el => {
    el.addEventListener('input', e => {
      const field = e.target.dataset.field;
      ensureHeroLang(heroActiveLang)[field] = e.target.value;
      markUnsaved();
    });
  });
  document.getElementById('heroUploadBtn')?.addEventListener('click', () => {
    pickMediaFile(async (file) => {
      try {
        const ext = (file.name.split('.').pop() || 'jpg').toLowerCase();
        const relPath = `images/hero/bg.${ext}`;
        await uploadFileToKV(file, relPath);
        heroData.media = relPath;
        renderHero();
        markUnsaved();
      } catch (_) {}
    }, 'image/*,video/*,.gif');
  });
  document.getElementById('heroCardUploadBtn')?.addEventListener('click', () => {
    pickMediaFile(async (file) => {
      try {
        const ext = (file.name.split('.').pop() || 'jpg').toLowerCase();
        const relPath = `images/hero/card.${ext}`;
        await uploadFileToKV(file, relPath);
        heroData.cardMedia = relPath;
        renderHero();
        markUnsaved();
      } catch (_) {}
    }, 'image/*,video/*,.gif');
  });
  document.getElementById('heroMediaOpacity')?.addEventListener('input', e => {
    const v = Math.min(100, Math.max(0, parseInt(e.target.value, 10) || 0));
    heroData.mediaOpacity = v;
    document.getElementById('heroMediaOpacityVal').textContent = `${v}%`;
    document.getElementById('heroMediaPreview')?.style.setProperty('--hero-preview-opacity', String(v / 100));
    markUnsaved();
  });
}

// ── Reviews ─────────────────────────────────────────────────────────────────
const REVIEW_STAR_SVG = '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"/></svg>';

function reviewStarsHtml(n) {
  const count = Math.min(5, Math.max(0, parseInt(n, 10) || 0));
  return `<div class="review-stars">${REVIEW_STAR_SVG.repeat(count)}</div>`;
}

function updateReviewsPendingBadge() {
  const badge = document.getElementById('reviewsPendingBadge');
  if (!badge) return;
  const pending = reviewsData.reviews.filter(r => r.status === 'pending').length;
  if (pending > 0) {
    badge.textContent = String(pending);
    badge.style.display = '';
  } else {
    badge.style.display = 'none';
  }
}

async function loadReviewsAdmin() {
  try {
    const res = await fetch(API_REVIEWS, { headers: { 'X-Admin-Password': ADMIN_PASSWORD } });
    if (res.ok) {
      const data = await res.json();
      reviewsData = { reviews: Array.isArray(data.reviews) ? data.reviews : [] };
    }
  } catch (_) {}
  updateReviewsPendingBadge();
  renderReviewsAdmin();
}

async function saveReviews({ silent } = {}) {
  try {
    const res = await fetch(API_REVIEWS, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password: ADMIN_PASSWORD, reviews: reviewsData.reviews }),
    });
    if (!res.ok) throw new Error((await res.json().catch(() => ({}))).error || 'error');
    updateReviewsPendingBadge();
    return true;
  } catch (e) {
    if (!silent) showToast(u().saveError, 'error');
    return false;
  }
}

function renderReviewCard(review, tab) {
  const isHidden = review.status === 'hidden';
  const actions = tab === 'pending'
    ? `<button type="button" class="btn btn-primary btn-sm" data-review-action="approve" data-review-id="${esc(review.id)}">${esc(u().reviewsApprove)}</button>
       <button type="button" class="btn btn-danger btn-sm" data-review-action="delete" data-review-id="${esc(review.id)}">${esc(u().reviewsDeleteShort)}</button>`
    : `<button type="button" class="btn btn-ghost btn-sm" data-review-action="${isHidden ? 'show' : 'hide'}" data-review-id="${esc(review.id)}">${esc(isHidden ? u().reviewsShow : u().reviewsHide)}</button>
       <button type="button" class="btn btn-danger btn-sm" data-review-action="delete" data-review-id="${esc(review.id)}">${esc(u().reviewsDelete)}</button>`;
  return `
    <div class="review-card${isHidden ? ' hidden-review' : ''}">
      <div class="review-card-head">
        <div style="flex:1;min-width:0">
          ${reviewStarsHtml(review.stars)}
          <div style="font-weight:700;font-size:15px">${esc(review.name)}</div>
          <div class="review-meta">${esc(review.role || '')}${review.role && review.date ? ' · ' : ''}${esc(review.date || '')}</div>
        </div>
        ${isHidden ? `<span class="review-status-badge">${esc(u().reviewsHidden)}</span>` : ''}
      </div>
      <div class="review-text">«${esc(review.text)}»</div>
      <div class="review-actions">${actions}</div>
    </div>`;
}

function renderReviewsAdmin() {
  const container = document.getElementById('reviewsSection');
  if (!container) return;
  const pending = reviewsData.reviews.filter(r => r.status === 'pending');
  const approved = reviewsData.reviews.filter(r => r.status === 'approved' || r.status === 'hidden');
  const list = reviewsActiveTab === 'pending' ? pending : approved;
  const emptyMsg = reviewsActiveTab === 'pending' ? u().reviewsEmptyPending : u().reviewsEmptyApproved;

  container.innerHTML = `
    <div class="admin-tabs">
      <button type="button" class="admin-tab${reviewsActiveTab === 'pending' ? ' active' : ''}" data-reviews-tab="pending">
        ${esc(u().reviewsTabPending)}${pending.length ? `<span class="admin-tab-badge">${pending.length}</span>` : ''}
      </button>
      <button type="button" class="admin-tab${reviewsActiveTab === 'approved' ? ' active' : ''}" data-reviews-tab="approved">${esc(u().reviewsTabApproved)}</button>
    </div>
    ${list.length ? list.map(r => renderReviewCard(r, reviewsActiveTab)).join('') : `<div class="empty-state">${esc(emptyMsg)}</div>`}`;

  updateReviewsPendingBadge();

  container.querySelectorAll('[data-reviews-tab]').forEach(btn => {
    btn.addEventListener('click', () => {
      reviewsActiveTab = btn.dataset.reviewsTab;
      renderReviewsAdmin();
    });
  });
  container.querySelectorAll('[data-review-action]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.reviewId;
      const action = btn.dataset.reviewAction;
      const idx = reviewsData.reviews.findIndex(r => r.id === id);
      if (idx < 0) return;
      if (action === 'approve') reviewsData.reviews[idx].status = 'approved';
      else if (action === 'hide') reviewsData.reviews[idx].status = 'hidden';
      else if (action === 'show') reviewsData.reviews[idx].status = 'approved';
      else if (action === 'delete') reviewsData.reviews.splice(idx, 1);
      markUnsaved();
      renderReviewsAdmin();
    });
  });
}

// ── Calculator ────────────────────────────────────────────────────────────────
function calcLang(obj, lang) {
  if (!obj) return '';
  if (typeof obj === 'string') return obj;
  return obj[lang] || obj.ru || obj.en || obj.de || Object.values(obj)[0] || '';
}

function ensureCalcLangFields(obj) {
  if (!obj.label) obj.label = {};
  if (!obj.title) obj.title = {};
  if (!obj.desc) obj.desc = {};
  SITE_LANGS.forEach(l => {
    if (obj.label[l] === undefined) obj.label[l] = '';
    if (obj.title && obj.title[l] === undefined) obj.title[l] = '';
    if (obj.desc && obj.desc[l] === undefined) obj.desc[l] = '';
  });
  return obj;
}

function calcPriceAmount(opt) {
  if (!opt) return 0;
  if (opt.price && typeof opt.price === 'object') {
    return parseInt(opt.price.chf ?? opt.price.usd ?? opt.price.eur, 10) || 0;
  }
  return parseInt(opt.price, 10) || 0;
}

function calcPriceDisplay(opt) {
  const amount = calcPriceAmount(opt);
  const cur = (opt && opt.currency) || 'CHF';
  return `${amount} ${cur}`;
}

function ensureCalcPrice(opt) {
  if (opt.price && typeof opt.price === 'object') {
    const p = opt.price;
    if (parseInt(p.chf, 10)) { opt.price = parseInt(p.chf, 10); opt.currency = opt.currency || 'CHF'; }
    else if (parseInt(p.usd, 10)) { opt.price = parseInt(p.usd, 10); opt.currency = 'USD'; }
    else if (parseInt(p.eur, 10)) { opt.price = parseInt(p.eur, 10); opt.currency = 'EUR'; }
    else { opt.price = 0; opt.currency = opt.currency || 'CHF'; }
  }
  if (typeof opt.price !== 'number') opt.price = parseInt(opt.price, 10) || 0;
  if (!opt.currency || !['CHF', 'USD', 'EUR'].includes(opt.currency)) opt.currency = 'CHF';
  return opt;
}

function ensureCalcGroupFields(g) {
  ensureCalcLangFields(g);
  if (!g.selectionType) g.selectionType = 'multiple';
  return g;
}

function ensureCalcMetaFields(opt) {
  ensureCalcPrice(opt);
  if (!opt.paymentType) opt.paymentType = 'one_time';
  if (opt.internalCost === undefined) opt.internalCost = 0;
  if (opt.notes === undefined) opt.notes = '';
  if (opt.domainWhere === undefined) opt.domainWhere = '';
  if (opt.tools === undefined) opt.tools = '';
  if (opt.estimateTime === undefined) opt.estimateTime = '';
  if (!Array.isArray(opt.documents)) opt.documents = [];
  return opt;
}

function calcPaymentTypeShort(type, t) {
  if (type === 'monthly') return t.calcPayShortMonth;
  if (type === 'yearly') return t.calcPayShortYear;
  return t.calcPayShortOne;
}

function calcDocIcon(type, name) {
  const n = (name || '').toLowerCase();
  if (type === 'application/pdf' || n.endsWith('.pdf')) return '📄';
  if (type?.startsWith('image/') || /\.(jpe?g|png)$/i.test(n)) return '🖼️';
  if (n.endsWith('.docx')) return '📝';
  return '📎';
}

function formatDocDate(dateStr) {
  if (!dateStr) return '';
  const p = dateStr.split('-');
  if (p.length === 3) return `${p[2]}.${p[1]}.${p[0]}`;
  return dateStr;
}

function openStoredDocument(doc) {
  if (!doc?.data) {
    showToast(doc?.todo ? 'File metadata only (TODO storage)' : 'File not available', 'warning');
    return;
  }
  const mime = doc.type || 'application/octet-stream';
  window.open(`data:${mime};base64,${doc.data}`, '_blank');
}

function renderCalcDocList(docs, t) {
  if (!docs?.length) return `<div class="calc-docs-empty">${esc(t.calcDocsEmpty)}</div>`;
  return `<ul class="calc-doc-list">${docs.map(d => `
    <li class="calc-doc-item">
      <span>${calcDocIcon(d.type, d.name)}</span>
      <span title="${esc(d.name)}">${esc(d.name)}</span>
      <span class="calc-doc-meta">${esc(formatDocDate(d.date))}</span>
      <button type="button" class="calc-doc-open calc-doc-open-btn" data-doc-id="${esc(d.id)}">${esc(t.calcDocOpen)}</button>
      <button type="button" class="calc-icon-btn calc-doc-del" data-doc-id="${esc(d.id)}">🗑️</button>
    </li>`).join('')}</ul>`;
}

function getCalcEditingOption() {
  if (!calcEditingRef) return null;
  const { gi, oi } = calcEditingRef;
  return calculatorData.groups[gi]?.options?.[oi] || null;
}

function calcFlattenOptions() {
  const rows = [];
  (calculatorData.groups || []).forEach((group, gi) => {
    (group.options || []).forEach((opt, oi) => {
      rows.push({ group, gi, opt, oi });
    });
  });
  return rows;
}

function calcTotalActiveSum() {
  let sum = 0;
  (calculatorData.groups || []).forEach(g => {
    (g.options || []).forEach(o => {
      if (o.active !== false) sum += calcPriceAmount(o);
    });
  });
  return sum;
}

function calcTotalActiveCosts() {
  let sum = 0;
  (calculatorData.groups || []).forEach(g => {
    (g.options || []).forEach(o => {
      if (o.active !== false) sum += parseInt(o.internalCost, 10) || 0;
    });
  });
  return sum;
}

function calcFilteredRows() {
  const lang = adminLang || 'ru';
  const search = (calcOverviewSearch || '').toLowerCase().trim();
  const groupFilter = calcOverviewGroupFilter;
  return calcFlattenOptions().filter(row => {
    if (groupFilter !== 'all' && String(row.gi) !== groupFilter) return false;
    if (search) {
      const name = (calcLang(row.opt.title, lang) || row.opt.id).toLowerCase();
      if (!name.includes(search)) return false;
    }
    return true;
  });
}

function toggleCalcFullscreen() {
  calcFullscreen = !calcFullscreen;
  const wrap = document.getElementById('calcSectionWrap');
  if (wrap) wrap.classList.toggle('calc-fullscreen', calcFullscreen);
  document.body.classList.toggle('calc-fullscreen-open', calcFullscreen);
}

function attachDocument(file, target, rerender) {
  const allowed = /\.(pdf|jpe?g|png|docx)$/i;
  if (!allowed.test(file.name)) {
    showToast('PDF, JPG, PNG, DOCX only', 'error');
    return;
  }
  if (file.size > CALC_DOC_MAX) {
    showToast(u().calcDocsTooBig, 'error');
    return;
  }
  const reader = new FileReader();
  reader.onload = () => {
    const doc = {
      id: 'doc_' + Date.now(),
      name: file.name,
      type: file.type || '',
      date: new Date().toISOString().slice(0, 10),
      size: file.size,
    };
    if (file.size <= CALC_DOC_STORE_MAX) {
      const b64 = reader.result;
      doc.data = typeof b64 === 'string' && b64.includes(',') ? b64.split(',')[1] : b64;
      doc.stored = true;
    } else {
      doc.stored = false;
      doc.todo = true;
    }
    if (!target.documents) target.documents = [];
    target.documents.push(doc);
    markUnsaved();
    rerender();
  };
  reader.readAsDataURL(file);
}

function attachCalcDocument(file, opt) {
  attachDocument(file, opt, () => renderCalculatorAdmin());
}

function openCalcEditor(gi, oi) {
  calcEditingRef = { gi, oi };
  calcEditorLang = adminLang || 'ru';
  calcActiveTab = 'editor';
  renderCalculatorAdmin();
}

function addCalcOption(targetGi) {
  if (!calculatorData.groups.length) {
    calculatorData.groups.push({
      id: 'grp_' + Date.now(),
      label: { de: 'Neue Gruppe', en: 'New group', fr: 'Nouveau groupe', it: 'Nuovo gruppo', ru: 'Новая группа' },
      selectionType: 'multiple',
      options: [],
    });
  }
  const gi = typeof targetGi === 'number' ? targetGi : 0;
  const g = calculatorData.groups[gi];
  if (!g.options) g.options = [];
  const id = 'opt_' + Date.now();
  const opt = {
    id, active: true, required: false, icon: '📦',
    price: 0, currency: 'CHF',
    paymentType: 'one_time', internalCost: 0,
    title: { de: '', en: '', fr: '', it: '', ru: '' },
    desc: { de: '', en: '', fr: '', it: '', ru: '' },
    notes: '', domainWhere: '', tools: '', estimateTime: '', documents: [],
  };
  g.options.push(opt);
  markUnsaved();
  openCalcEditor(gi, g.options.length - 1);
}

function addCalcGroup() {
  calculatorData.groups.push({
    id: 'grp_' + Date.now(),
    label: { de: 'Neue Gruppe', en: 'New group', fr: 'Nouveau groupe', it: 'Nuovo gruppo', ru: 'Новая группа' },
    selectionType: 'multiple',
    options: [],
  });
  markUnsaved();
  calcActiveTab = 'groups';
  renderCalculatorAdmin();
}

async function loadCalculatorAdmin() {
  try {
    const res = await fetch(API_CALCULATOR);
    if (res.ok) calculatorData = await res.json();
  } catch (_) {}
  if (!Array.isArray(calculatorData.groups) || !calculatorData.groups.length) {
    try {
      const def = await fetch('../data/calculator-default.json');
      if (def.ok) calculatorData = await def.json();
    } catch (_) {}
  }
  if (!Array.isArray(calculatorData.groups)) calculatorData.groups = [];
  calculatorData.groups.forEach(g => {
    ensureCalcGroupFields(g);
    (g.options || []).forEach(o => { ensureCalcLangFields(o); ensureCalcMetaFields(o); });
  });
  renderCalculatorAdmin();
}

async function saveCalculator({ silent } = {}) {
  try {
    const res = await fetch(API_CALCULATOR, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password: ADMIN_PASSWORD, calculator: calculatorData }),
    });
    if (!res.ok) throw new Error((await res.json().catch(() => ({}))).error || 'error');
    if (!silent) showToast(u().saved, 'success');
    return true;
  } catch (e) {
    if (!silent) showToast(u().saveError, 'error');
    return false;
  }
}

function renderCalcToolbar(t) {
  return `
    <div class="calc-toolbar">
      <div class="calc-toolbar-left">
        <div class="calc-toolbar-title">
          <button type="button" class="calc-fs-btn" id="calcFullscreenBtn" title="Fullscreen">⛶</button>
          ${esc(t.calcTitle)}
          ${calcFullscreen ? '<button type="button" class="calc-fs-btn calc-fs-close" id="calcFullscreenClose">✕</button>' : ''}
        </div>
        <div class="section-vis-toggle" role="switch">
          <span>${esc(t.calcShow)}</span>
          <input type="checkbox" id="calcVisible" class="premium-toggle-input" ${calculatorData.visible === true ? 'checked' : ''}>
          <div class="premium-toggle-track${calculatorData.visible === true ? ' is-on' : ''}" id="calcVisibleTrack" data-for="calcVisible" role="switch" tabindex="0">
            <div class="premium-toggle-knob"></div>
          </div>
        </div>
      </div>
      <div class="calc-toolbar-right">
        <button type="button" class="btn btn-ghost btn-sm" id="calcToolbarAddOpt">${esc(t.calcAddOption)}</button>
        <button type="button" class="btn btn-ghost btn-sm" id="calcToolbarAddGroup">${esc(t.calcAddGroup)}</button>
        <button type="button" class="btn btn-success btn-sm" id="calcToolbarSave">${esc(t.calcSave)}</button>
      </div>
    </div>`;
}

function renderCalcOverview(t) {
  const lang = adminLang || 'ru';
  const allRows = calcFlattenOptions();
  if (!allRows.length) return `<div class="calc-empty">${esc(t.calcNoOptions)}</div>`;

  const groupFilterOpts = (calculatorData.groups || []).map((g, gi) =>
    `<option value="${gi}"${calcOverviewGroupFilter === String(gi) ? ' selected' : ''}>${esc(calcLang(g.label, lang) || g.id)}</option>`
  ).join('');

  const filtered = calcFilteredRows();
  const body = filtered.length
    ? filtered.map((row, idx) => {
      const { gi, oi, opt, group } = row;
      const name = calcLang(opt.title, lang) || opt.id;
      const groupName = calcLang(group.label, lang) || group.id;
      const payShort = calcPaymentTypeShort(opt.paymentType, t);
      return `
        <tr class="calc-overview-row" data-gi="${gi}" data-oi="${oi}" data-search="${esc(name.toLowerCase())}" draggable="true">
          <td class="calc-row-num"><span class="calc-drag-handle">⋮⋮</span>${idx + 1}</td>
          <td class="calc-icon-cell">${opt.icon || '📦'}</td>
          <td>${esc(name)}</td>
          <td>${esc(groupName)}</td>
          <td>${esc(calcPriceDisplay(opt))}</td>
          <td>${esc(payShort)}</td>
          <td class="calc-toggle-cell">
            <input type="checkbox" class="calc-overview-active" data-gi="${gi}" data-oi="${oi}" ${opt.active !== false ? 'checked' : ''}>
          </td>
          <td class="calc-req-cell">${opt.required ? '☑' : '☐'}</td>
          <td class="calc-actions-cell">
            <button type="button" class="calc-icon-btn calc-overview-edit" data-gi="${gi}" data-oi="${oi}" title="Edit">✏️</button>
            <button type="button" class="calc-icon-btn calc-overview-del" data-gi="${gi}" data-oi="${oi}" title="Delete">🗑️</button>
          </td>
        </tr>`;
    }).join('')
    : `<tr><td colspan="9" class="calc-empty">${esc(t.calcNoOptions)}</td></tr>`;

  const totalSum = calcTotalActiveSum();
  const totalCosts = calcTotalActiveCosts();
  const margin = totalSum - totalCosts;

  return `
    <div class="calc-overview-filters">
      <input type="search" class="form-input" id="calcOverviewSearch" value="${esc(calcOverviewSearch)}" placeholder="${esc(t.calcSearchPh)}">
      <label style="display:flex;align-items:center;gap:8px;font-size:13px;font-weight:600">
        ${esc(t.calcFilterGroup)}:
        <select class="form-input" id="calcOverviewGroupFilter">
          <option value="all"${calcOverviewGroupFilter === 'all' ? ' selected' : ''}>${esc(t.calcFilterAll)}</option>
          ${groupFilterOpts}
        </select>
      </label>
    </div>
    <div class="calc-table-wrap">
      <table class="calc-table" id="calcOverviewTable">
        <thead>
          <tr>
            <th>${esc(t.calcColNum)}</th>
            <th>${esc(t.calcColIcon)}</th>
            <th>${esc(t.calcColName)}</th>
            <th>${esc(t.calcColGroup)}</th>
            <th>${esc(t.calcColPrice)}</th>
            <th>${esc(t.calcColType)}</th>
            <th>${esc(t.calcColActive)}</th>
            <th>${esc(t.calcColRequired)}</th>
            <th>${esc(t.calcColActions)}</th>
          </tr>
        </thead>
        <tbody>${body}</tbody>
      </table>
    </div>
    <div class="calc-footer-stats">
      <span>${esc(t.calcTotalOpts)}: <strong>${allRows.length}</strong></span>
      <span>${esc(t.calcTotalSum)}: <strong>${totalSum} CHF</strong></span>
      <span>${esc(t.calcTotalCosts)}: <strong>${totalCosts} CHF</strong></span>
      <span>${esc(t.calcTotalMargin)}: <strong>${margin} CHF</strong></span>
    </div>`;
}

function renderCalcEditor(t) {
  const opt = getCalcEditingOption();
  if (!opt) {
    return `<div class="calc-empty">${esc(t.calcNoOptions)} <button type="button" class="btn btn-ghost btn-sm" id="calcEditorBack">${esc(t.calcBackList)}</button></div>`;
  }
  ensureCalcLangFields(opt);
  ensureCalcMetaFields(opt);
  const { gi } = calcEditingRef;
  const lang = calcEditorLang;
  const groups = calculatorData.groups || [];
  const currency = opt.currency || 'CHF';

  const groupOptions = groups.map((g, i) =>
    `<option value="${i}"${i === gi ? ' selected' : ''}>${esc(calcLang(g.label, 'ru') || g.id)}</option>`
  ).join('');

  const emojiBtns = CALC_EMOJIS.map(e =>
    `<button type="button" class="calc-emoji-btn${opt.icon === e ? ' active' : ''}" data-emoji="${e}">${e}</button>`
  ).join('');

  const docListHtml = renderCalcDocList(opt.documents || [], t);

  return `
    <div class="calc-editor-grid">
      <div class="calc-editor-main">
        <div class="form-group" style="margin-bottom:12px">
          <label class="form-label">${esc(t.calcIcon)}</label>
          <input class="form-input" id="calcEditorIcon" value="${esc(opt.icon || '')}" style="max-width:80px;font-size:22px;text-align:center">
          <div class="calc-emoji-grid">${emojiBtns}</div>
        </div>
        <div class="form-group" style="margin-bottom:12px">
          <label class="form-label">${esc(t.calcPrice)}</label>
          <div class="calc-price-compact">
          <input type="number" class="form-input calc-price-input" id="calcEditorPrice" value="${calcPriceAmount(opt)}" min="0" step="50">
          <select class="form-input calc-currency-select" id="calcEditorCurrency">
            <option value="CHF"${currency === 'CHF' ? ' selected' : ''}>CHF</option>
            <option value="USD"${currency === 'USD' ? ' selected' : ''}>USD</option>
            <option value="EUR"${currency === 'EUR' ? ' selected' : ''}>EUR</option>
          </select>
          <select class="form-input calc-payment-select" id="calcEditorPaymentType">
            <option value="one_time"${opt.paymentType === 'one_time' || !opt.paymentType ? ' selected' : ''}>${esc(t.calcPayOneTime)}</option>
            <option value="monthly"${opt.paymentType === 'monthly' ? ' selected' : ''}>${esc(t.calcPayMonthly)}</option>
            <option value="yearly"${opt.paymentType === 'yearly' ? ' selected' : ''}>${esc(t.calcPayYearly)}</option>
          </select>
          </div>
        </div>
        <div style="display:flex;gap:20px;margin-bottom:16px;flex-wrap:wrap">
          <label style="display:flex;align-items:center;gap:6px;font-size:13px;font-weight:600">
            <input type="checkbox" id="calcEditorActive" ${opt.active !== false ? 'checked' : ''}> ${esc(t.calcActive)}
          </label>
          <label style="display:flex;align-items:center;gap:6px;font-size:13px;font-weight:600">
            <input type="checkbox" id="calcEditorRequired" ${opt.required ? 'checked' : ''}> ${esc(t.calcRequired)}
          </label>
        </div>
        <div class="form-group">
          <label class="form-label">${esc(t.calcSelectGroup)}</label>
          <select class="form-input" id="calcEditorGroup">${groupOptions}</select>
        </div>
        <div class="lang-section" style="margin-top:16px">
          <div class="lang-tabs">
            ${SITE_LANGS.map(l => `
              <button type="button" class="lang-tab${l === lang ? ' active' : ''}" data-calc-editor-lang="${l}">${SITE_LANG_LABELS[l]}</button>
            `).join('')}
          </div>
          <div class="lang-fields" style="margin-top:12px">
            <div class="form-group">
              <label class="form-label">${esc(t.calcTitleField)}</label>
              <input class="form-input" id="calcEditorTitle" value="${esc((opt.title && opt.title[lang]) || '')}">
            </div>
            <div class="form-group">
              <label class="form-label">${esc(t.calcDescField)}</label>
              <textarea class="form-textarea" id="calcEditorDesc" rows="3">${esc((opt.desc && opt.desc[lang]) || '')}</textarea>
            </div>
          </div>
        </div>
      </div>
      <div class="calc-editor-notes">
        <div class="calc-editor-notes-title">${esc(t.calcNotesTitle)}</div>
        <div class="calc-editor-notes-body">
          <div class="form-group calc-notes-grow">
            <label class="form-label">${esc(t.calcNotesField)}</label>
            <textarea class="form-textarea" id="calcEditorNotes">${esc(opt.notes || '')}</textarea>
          </div>
          <div class="form-group">
            <label class="form-label">${esc(t.calcInternalCost)}</label>
            <input type="number" class="form-input calc-field-narrow" id="calcEditorInternalCost" value="${parseInt(opt.internalCost, 10) || 0}" min="0" step="10">
            <div class="calc-field-hint">${esc(t.calcInternalCostHint)}</div>
          </div>
          <div class="form-group">
            <label class="form-label">${esc(t.calcDomainField)}</label>
            <input class="form-input calc-field-medium" id="calcEditorDomain" value="${esc(opt.domainWhere || '')}">
          </div>
          <div class="form-group">
            <label class="form-label">${esc(t.calcToolsField)}</label>
            <input class="form-input calc-field-medium" id="calcEditorTools" value="${esc(opt.tools || '')}" placeholder="Figma, Cloudflare, ...">
          </div>
          <div class="form-group">
            <label class="form-label">${esc(t.calcTimeField)}</label>
            <input class="form-input calc-field-medium" id="calcEditorTime" value="${esc(opt.estimateTime || '')}" placeholder="3-5 дней">
          </div>
          <div class="calc-docs-section">
            <div class="form-label">${esc(t.calcDocsTitle)}</div>
            <input type="file" id="calcDocInput" accept=".pdf,.jpg,.jpeg,.png,.docx" hidden>
            <button type="button" class="btn btn-ghost btn-sm" id="calcDocAttach">${esc(t.calcDocsAttach)}</button>
            ${docListHtml}
          </div>
        </div>
      </div>
    </div>
    <div class="calc-editor-footer">
      <button type="button" class="btn btn-ghost btn-sm" id="calcEditorBack">${esc(t.calcBackList)}</button>
      <button type="button" class="btn btn-success btn-sm" id="calcEditorSave">${esc(t.calcSaveOption)}</button>
    </div>`;
}

function renderCalcGroups(t) {
  const groups = calculatorData.groups || [];
  if (!groups.length) return `<div class="calc-empty">${esc(t.calcNoGroups)}</div>`;

  const rows = groups.map((group, gi) => {
    ensureCalcGroupFields(group);
    const count = (group.options || []).length;
    const ruName = (group.label && group.label.ru) || '';
    const isEditing = calcGroupEditGi === gi;
    const selType = group.selectionType || 'multiple';
    const mainRow = `
      <tr class="calc-group-row" data-gi="${gi}" draggable="true">
        <td class="calc-row-num"><span class="calc-drag-handle">⋮⋮</span>${gi + 1}</td>
        <td><code style="font-size:12px">${esc(group.id || '')}</code></td>
        <td>${esc(ruName)}</td>
        <td>${count}</td>
        <td class="calc-actions-cell">
          <button type="button" class="calc-icon-btn calc-group-edit" data-gi="${gi}">✏️</button>
          <button type="button" class="calc-icon-btn calc-group-del" data-gi="${gi}">🗑️</button>
        </td>
      </tr>`;
    const expandRow = isEditing ? `
      <tr class="calc-group-expand"><td colspan="5">
        <div class="lang-section-label" style="margin-bottom:8px">${esc(t.calcGroupLabel)}</div>
        <div class="lang-fields">
          ${SITE_LANGS.map(l => `
            <div class="form-group">
              <label class="form-label">${SITE_LANG_LABELS[l]}</label>
              <input class="form-input calc-group-inline" data-gi="${gi}" data-lang="${l}" value="${esc((group.label && group.label[l]) || '')}">
            </div>
          `).join('')}
        </div>
        <div class="calc-group-sel-type">
          <div class="lang-section-label">${esc(t.calcGroupSelType)}</div>
          <label><input type="radio" name="calcGroupSelType_${gi}" class="calc-group-seltype" data-gi="${gi}" value="multiple"${selType === 'multiple' ? ' checked' : ''}> ${esc(t.calcGroupSelMultiple)}</label>
          <label><input type="radio" name="calcGroupSelType_${gi}" class="calc-group-seltype" data-gi="${gi}" value="single"${selType === 'single' ? ' checked' : ''}> ${esc(t.calcGroupSelSingle)}</label>
        </div>
      </td></tr>` : '';
    return mainRow + expandRow;
  }).join('');

  return `
    <div class="calc-table-wrap">
      <table class="calc-table">
        <thead>
          <tr>
            <th>${esc(t.calcColNum)}</th>
            <th>${esc(t.calcGroupColId)}</th>
            <th>${esc(t.calcGroupColName)}</th>
            <th>${esc(t.calcGroupColCount)}</th>
            <th>${esc(t.calcColActions)}</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    </div>
    <button type="button" class="btn btn-ghost btn-sm" id="calcGroupsAddBtn" style="margin-top:12px">${esc(t.calcAddGroup)}</button>`;
}

function snapshotCalcEditorFields() {
  const opt = getCalcEditingOption();
  if (!opt || calcActiveTab !== 'editor') return;
  const lang = calcEditorLang;
  const icon = document.getElementById('calcEditorIcon');
  const priceEl = document.getElementById('calcEditorPrice');
  const currencyEl = document.getElementById('calcEditorCurrency');
  const paymentType = document.getElementById('calcEditorPaymentType');
  const active = document.getElementById('calcEditorActive');
  const required = document.getElementById('calcEditorRequired');
  const groupSel = document.getElementById('calcEditorGroup');
  const title = document.getElementById('calcEditorTitle');
  const desc = document.getElementById('calcEditorDesc');
  const notes = document.getElementById('calcEditorNotes');
  const internalCost = document.getElementById('calcEditorInternalCost');
  const domain = document.getElementById('calcEditorDomain');
  const tools = document.getElementById('calcEditorTools');
  const time = document.getElementById('calcEditorTime');

  if (icon) opt.icon = icon.value;
  if (priceEl) opt.price = parseInt(priceEl.value, 10) || 0;
  if (currencyEl) opt.currency = currencyEl.value || 'CHF';
  if (paymentType) opt.paymentType = paymentType.value;
  if (active) opt.active = active.checked;
  if (required) opt.required = required.checked;
  if (title) { if (!opt.title) opt.title = {}; opt.title[lang] = title.value; }
  if (desc) { if (!opt.desc) opt.desc = {}; opt.desc[lang] = desc.value; }
  if (notes) opt.notes = notes.value;
  if (internalCost) opt.internalCost = parseInt(internalCost.value, 10) || 0;
  if (domain) opt.domainWhere = domain.value;
  if (tools) opt.tools = tools.value;
  if (time) opt.estimateTime = time.value;

  if (groupSel && calcEditingRef) {
    const newGi = parseInt(groupSel.value, 10);
    const oldGi = calcEditingRef.gi;
    const oi = calcEditingRef.oi;
    if (!isNaN(newGi) && newGi !== oldGi && calculatorData.groups[oldGi]?.options?.[oi]) {
      const [moved] = calculatorData.groups[oldGi].options.splice(oi, 1);
      if (!calculatorData.groups[newGi].options) calculatorData.groups[newGi].options = [];
      calculatorData.groups[newGi].options.push(moved);
      calcEditingRef = { gi: newGi, oi: calculatorData.groups[newGi].options.length - 1 };
    }
  }
}

function bindCalcOverviewDrag(container) {
  let dragGi = null;
  let dragOi = null;
  container.querySelectorAll('.calc-overview-row').forEach(row => {
    row.draggable = false;
    const handle = row.querySelector('.calc-drag-handle');
    if (handle) {
      handle.draggable = true;
      handle.addEventListener('dragstart', e => {
        e.stopPropagation();
        dragGi = +row.dataset.gi;
        dragOi = +row.dataset.oi;
        e.dataTransfer.effectAllowed = 'move';
      });
    }
    row.addEventListener('dragover', e => {
      e.preventDefault();
      if (+row.dataset.gi === dragGi) row.classList.add('calc-drag-over');
    });
    row.addEventListener('dragleave', () => row.classList.remove('calc-drag-over'));
    row.addEventListener('drop', e => {
      e.preventDefault();
      row.classList.remove('calc-drag-over');
      const targetGi = +row.dataset.gi;
      const targetOi = +row.dataset.oi;
      if (targetGi !== dragGi || dragOi === targetOi) return;
      const opts = calculatorData.groups[dragGi]?.options;
      if (!opts) return;
      const [item] = opts.splice(dragOi, 1);
      opts.splice(targetOi, 0, item);
      if (calcEditingRef?.gi === dragGi) calcEditingRef.oi = opts.indexOf(item);
      markUnsaved();
      renderCalculatorAdmin();
    });
    row.addEventListener('dragend', () => {
      container.querySelectorAll('.calc-drag-over').forEach(r => r.classList.remove('calc-drag-over'));
    });
  });
}

function remapGiAfterGroupMove(from, to) {
  const remap = gi => {
    if (gi === from) return to;
    if (from < to && gi > from && gi <= to) return gi - 1;
    if (from > to && gi >= to && gi < from) return gi + 1;
    return gi;
  };
  if (calcEditingRef) calcEditingRef.gi = remap(calcEditingRef.gi);
  if (calcGroupEditGi !== null) calcGroupEditGi = remap(calcGroupEditGi);
}

function bindCalcGroupsDrag(container) {
  let dragGi = null;
  container.querySelectorAll('.calc-group-row').forEach(row => {
    row.draggable = false;
    const handle = row.querySelector('.calc-drag-handle');
    if (handle) {
      handle.draggable = true;
      handle.addEventListener('dragstart', e => {
        e.stopPropagation();
        dragGi = +row.dataset.gi;
        e.dataTransfer.effectAllowed = 'move';
      });
    }
    row.addEventListener('dragover', e => {
      e.preventDefault();
      row.classList.add('calc-drag-over');
    });
    row.addEventListener('dragleave', () => row.classList.remove('calc-drag-over'));
    row.addEventListener('drop', e => {
      e.preventDefault();
      row.classList.remove('calc-drag-over');
      const targetGi = +row.dataset.gi;
      if (dragGi === targetGi) return;
      const [item] = calculatorData.groups.splice(dragGi, 1);
      calculatorData.groups.splice(targetGi, 0, item);
      remapGiAfterGroupMove(dragGi, targetGi);
      markUnsaved();
      renderCalculatorAdmin();
    });
    row.addEventListener('dragend', () => {
      container.querySelectorAll('.calc-drag-over').forEach(r => r.classList.remove('calc-drag-over'));
    });
  });
}

function bindCalculatorAdminEvents(container) {
  const t = u();

  document.getElementById('calcVisible')?.addEventListener('change', e => {
    calculatorData.visible = e.target.checked;
    syncPremiumToggle('calcVisible');
    markUnsaved();
  });
  syncPremiumToggle('calcVisible');

  document.getElementById('calcToolbarSave')?.addEventListener('click', async () => {
    snapshotCalcEditorFields();
    markSaving();
    if (await saveCalculator({ silent: true })) await markSavedSuccess();
    else markSaveError(t.saveError);
  });
  document.getElementById('calcToolbarAddOpt')?.addEventListener('click', () => addCalcOption());
  document.getElementById('calcToolbarAddGroup')?.addEventListener('click', () => addCalcGroup());
  document.getElementById('calcFullscreenBtn')?.addEventListener('click', toggleCalcFullscreen);
  document.getElementById('calcFullscreenClose')?.addEventListener('click', toggleCalcFullscreen);

  document.getElementById('calcOverviewSearch')?.addEventListener('input', e => {
    calcOverviewSearch = e.target.value;
    const pos = e.target.selectionStart;
    renderCalculatorAdmin();
    const el = document.getElementById('calcOverviewSearch');
    if (el) { el.focus(); el.setSelectionRange(pos, pos); }
  });
  document.getElementById('calcOverviewGroupFilter')?.addEventListener('change', e => {
    calcOverviewGroupFilter = e.target.value;
    renderCalculatorAdmin();
  });

  container.querySelectorAll('[data-calc-tab]').forEach(btn => {
    btn.addEventListener('click', () => {
      if (calcActiveTab === 'editor') snapshotCalcEditorFields();
      calcActiveTab = btn.dataset.calcTab;
      renderCalculatorAdmin();
    });
  });

  container.querySelectorAll('.calc-overview-row').forEach(row => {
    row.addEventListener('click', e => {
      if (e.target.closest('.calc-actions-cell, .calc-toggle-cell, .calc-drag-handle')) return;
      openCalcEditor(+row.dataset.gi, +row.dataset.oi);
    });
  });
  container.querySelectorAll('.calc-overview-edit').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      openCalcEditor(+btn.dataset.gi, +btn.dataset.oi);
    });
  });
  container.querySelectorAll('.calc-overview-del').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const gi = +btn.dataset.gi;
      const oi = +btn.dataset.oi;
      calculatorData.groups[gi]?.options?.splice(oi, 1);
      if (calcEditingRef?.gi === gi && calcEditingRef?.oi === oi) calcEditingRef = null;
      markUnsaved();
      renderCalculatorAdmin();
    });
  });
  container.querySelectorAll('.calc-overview-active').forEach(el => {
    el.addEventListener('click', e => e.stopPropagation());
    el.addEventListener('change', e => {
      e.stopPropagation();
      const opt = calculatorData.groups[+e.target.dataset.gi]?.options?.[+e.target.dataset.oi];
      if (opt) { opt.active = e.target.checked; markUnsaved(); }
    });
  });
  bindCalcOverviewDrag(container);

  document.getElementById('calcEditorBack')?.addEventListener('click', () => {
    snapshotCalcEditorFields();
    calcActiveTab = 'overview';
    renderCalculatorAdmin();
  });
  document.getElementById('calcEditorSave')?.addEventListener('click', async () => {
    snapshotCalcEditorFields();
    markUnsaved();
    markSaving();
    if (await saveCalculator({ silent: true })) {
      await markSavedSuccess();
      showToast(t.saved, 'success');
    } else markSaveError(t.saveError);
  });
  container.querySelectorAll('[data-calc-editor-lang]').forEach(btn => {
    btn.addEventListener('click', () => {
      snapshotCalcEditorFields();
      calcEditorLang = btn.dataset.calcEditorLang;
      renderCalculatorAdmin();
    });
  });
  container.querySelectorAll('.calc-emoji-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const opt = getCalcEditingOption();
      const iconInput = document.getElementById('calcEditorIcon');
      if (opt && iconInput) {
        opt.icon = btn.dataset.emoji;
        iconInput.value = btn.dataset.emoji;
        markUnsaved();
        container.querySelectorAll('.calc-emoji-btn').forEach(b => b.classList.toggle('active', b === btn));
      }
    });
  });
  ['calcEditorIcon', 'calcEditorPrice', 'calcEditorCurrency', 'calcEditorPaymentType',
    'calcEditorActive', 'calcEditorRequired', 'calcEditorGroup', 'calcEditorTitle', 'calcEditorDesc',
    'calcEditorNotes', 'calcEditorInternalCost', 'calcEditorDomain', 'calcEditorTools', 'calcEditorTime'
  ].forEach(id => {
    document.getElementById(id)?.addEventListener('input', markUnsaved);
    document.getElementById(id)?.addEventListener('change', markUnsaved);
  });

  document.getElementById('calcDocAttach')?.addEventListener('click', () => {
    document.getElementById('calcDocInput')?.click();
  });
  document.getElementById('calcDocInput')?.addEventListener('change', e => {
    const opt = getCalcEditingOption();
    const file = e.target.files?.[0];
    if (opt && file) attachCalcDocument(file, opt);
    e.target.value = '';
  });
  container.querySelectorAll('.calc-doc-del').forEach(btn => {
    btn.addEventListener('click', () => {
      const opt = getCalcEditingOption();
      if (!opt?.documents) return;
      const id = btn.dataset.docId;
      opt.documents = opt.documents.filter(d => d.id !== id);
      markUnsaved();
      renderCalculatorAdmin();
    });
  });
  container.querySelectorAll('.calc-doc-open-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const opt = getCalcEditingOption();
      const doc = opt?.documents?.find(d => d.id === btn.dataset.docId);
      if (doc) openStoredDocument(doc);
    });
  });

  container.querySelectorAll('.calc-group-edit').forEach(btn => {
    btn.addEventListener('mousedown', e => e.stopPropagation());
    btn.addEventListener('click', e => {
      e.preventDefault();
      e.stopPropagation();
      const gi = +btn.dataset.gi;
      calcGroupEditGi = calcGroupEditGi === gi ? null : gi;
      renderCalculatorAdmin();
    });
  });
  container.querySelectorAll('.calc-group-del').forEach(btn => {
    btn.addEventListener('mousedown', e => e.stopPropagation());
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const gi = +btn.dataset.gi;
      calculatorData.groups.splice(gi, 1);
      if (calcGroupEditGi === gi) calcGroupEditGi = null;
      if (calcEditingRef?.gi === gi) calcEditingRef = null;
      markUnsaved();
      renderCalculatorAdmin();
    });
  });
  container.querySelectorAll('.calc-group-inline').forEach(el => {
    el.addEventListener('input', e => {
      const g = calculatorData.groups[+e.target.dataset.gi];
      if (!g) return;
      if (!g.label) g.label = {};
      g.label[e.target.dataset.lang] = e.target.value;
      markUnsaved();
    });
  });
  container.querySelectorAll('.calc-group-seltype').forEach(el => {
    el.addEventListener('change', e => {
      const g = calculatorData.groups[+e.target.dataset.gi];
      if (g) { g.selectionType = e.target.value; markUnsaved(); }
    });
  });
  bindCalcGroupsDrag(container);
  document.getElementById('calcGroupsAddBtn')?.addEventListener('click', () => addCalcGroup());
}

function renderCalculatorAdmin() {
  const container = document.getElementById('calculatorSection');
  if (!container) return;
  const t = u();
  const wrap = document.getElementById('calcSectionWrap');
  if (wrap) wrap.classList.toggle('calc-fullscreen', calcFullscreen);
  document.body.classList.toggle('calc-fullscreen-open', calcFullscreen);

  container.innerHTML = `
    <div class="calc-panel-inner">
      <div class="calc-sticky-head">
        ${renderCalcToolbar(t)}
        <div class="calc-nav-tabs">
          <button type="button" class="admin-tab${calcActiveTab === 'overview' ? ' active' : ''}" data-calc-tab="overview">${esc(t.calcTabOverview)}</button>
          <button type="button" class="admin-tab${calcActiveTab === 'editor' ? ' active' : ''}" data-calc-tab="editor">${esc(t.calcTabEditor)}</button>
          <button type="button" class="admin-tab${calcActiveTab === 'groups' ? ' active' : ''}" data-calc-tab="groups">${esc(t.calcTabGroups)}</button>
        </div>
      </div>
      <div class="calc-tab-panel calc-tab-panel--${calcActiveTab}">
        ${calcActiveTab === 'overview' ? renderCalcOverview(t) : ''}
        ${calcActiveTab === 'editor' ? renderCalcEditor(t) : ''}
        ${calcActiveTab === 'groups' ? renderCalcGroups(t) : ''}
      </div>
    </div>`;

  bindCalculatorAdminEvents(container);
}

// ── Clients ───────────────────────────────────────────────────────────────────
function clientStatusLabel(status, t) {
  const map = {
    in_progress: t.clientStatusInProgress,
    completed: t.clientStatusCompleted,
    support: t.clientStatusSupport,
    paused: t.clientStatusPaused,
  };
  return map[status] || map.in_progress;
}

function clientTypeLabel(type, t) {
  const map = {
    landing: t.clientTypeLanding,
    multipage: t.clientTypeMultipage,
    mobile: t.clientTypeMobile,
    motion: t.clientTypeMotion,
    other: t.clientTypeOther,
  };
  return map[type] || map.other;
}

function formatClientListDate(dateStr) {
  if (!dateStr) return '—';
  const p = dateStr.split('-');
  if (p.length >= 2) return `${p[1]}.${p[0]}`;
  return dateStr;
}

function createEmptyClient() {
  return {
    id: 'client_' + Date.now(),
    name: '', contact: '', email: '', phone: '',
    status: 'in_progress', dateStart: '', dateEnd: '',
    project: { name: '', type: 'landing', url: '', budget: 0, currency: 'CHF', services: [] },
    technical: {
      domainProvider: '', domainLogin: '', domainPassword: '',
      hosting: '', cmsUrl: '', cmsLogin: '', cmsPassword: '', extraAccess: '',
    },
    notes: '', history: [], documents: [],
  };
}

function normalizeClient(c) {
  const client = { ...createEmptyClient(), ...c };
  client.project = { ...createEmptyClient().project, ...(c.project || {}) };
  client.technical = { ...createEmptyClient().technical, ...(c.technical || {}) };
  if (!Array.isArray(client.history)) client.history = [];
  if (!Array.isArray(client.documents)) client.documents = [];
  if (!Array.isArray(client.project.services)) client.project.services = [];
  return client;
}

function getEditingClient() {
  if (!clientsEditingId) return null;
  return clientsData.find(c => c.id === clientsEditingId) || null;
}

function getCalcServiceOptions() {
  const opts = [];
  (calculatorData.groups || []).forEach(g => {
    (g.options || []).forEach(o => {
      if (o.active === false) return;
      opts.push({ id: o.id, label: calcLang(o.title, 'ru') || o.id });
    });
  });
  return opts;
}

function updateClientsBadge() {
  const badge = document.getElementById('clientsCountBadge');
  if (badge) badge.textContent = String(clientsData.length);
}

async function loadClientsAdmin() {
  try {
    const res = await fetch(API_CLIENTS);
    if (res.ok) {
      const data = await res.json();
      clientsData = (Array.isArray(data.clients) ? data.clients : []).map(normalizeClient);
    }
  } catch (_) {}
  updateClientsBadge();
  renderClientsAdmin();
}

async function saveClients({ silent } = {}) {
  try {
    const res = await fetch(API_CLIENTS, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password: ADMIN_PASSWORD, clients: clientsData }),
    });
    if (!res.ok) throw new Error((await res.json().catch(() => ({}))).error || 'error');
    if (!silent) showToast(u().saved, 'success');
    return true;
  } catch (e) {
    if (!silent) showToast(u().saveError, 'error');
    return false;
  }
}

function attachClientDocument(file, client) {
  attachDocument(file, client, () => renderClientsAdmin());
}

function snapshotClientCard() {
  const client = getEditingClient();
  if (!client || clientsView !== 'card') return;
  const g = id => document.getElementById(id);
  if (g('clientName')) client.name = g('clientName').value;
  if (g('clientContact')) client.contact = g('clientContact').value;
  if (g('clientEmail')) client.email = g('clientEmail').value;
  if (g('clientPhone')) client.phone = g('clientPhone').value;
  if (g('clientStatus')) client.status = g('clientStatus').value;
  if (g('clientDateStart')) client.dateStart = g('clientDateStart').value;
  if (g('clientDateEnd')) client.dateEnd = g('clientDateEnd').value;
  if (g('clientProjectName')) client.project.name = g('clientProjectName').value;
  if (g('clientProjectType')) client.project.type = g('clientProjectType').value;
  if (g('clientProjectUrl')) client.project.url = g('clientProjectUrl').value;
  if (g('clientBudget')) client.project.budget = parseInt(g('clientBudget').value, 10) || 0;
  if (g('clientBudgetCurrency')) client.project.currency = g('clientBudgetCurrency').value || 'CHF';
  const svcSel = g('clientServices');
  if (svcSel) client.project.services = Array.from(svcSel.selectedOptions).map(o => o.value);
  const tech = client.technical;
  if (g('clientDomainProvider')) tech.domainProvider = g('clientDomainProvider').value;
  if (g('clientDomainLogin')) tech.domainLogin = g('clientDomainLogin').value;
  if (g('clientDomainPass')) tech.domainPassword = g('clientDomainPass').value;
  if (g('clientHosting')) tech.hosting = g('clientHosting').value;
  if (g('clientCmsUrl')) tech.cmsUrl = g('clientCmsUrl').value;
  if (g('clientCmsLogin')) tech.cmsLogin = g('clientCmsLogin').value;
  if (g('clientCmsPass')) tech.cmsPassword = g('clientCmsPass').value;
  if (g('clientExtraAccess')) tech.extraAccess = g('clientExtraAccess').value;
  if (g('clientNotes')) client.notes = g('clientNotes').value;
}

function renderClientsList(t) {
  if (!clientsData.length) return `<div class="calc-empty">${esc(t.clientsEmpty)}</div>`;
  const rows = clientsData.map((c, i) => {
    const meta = CLIENT_STATUS_META[c.status] || CLIENT_STATUS_META.in_progress;
    const site = c.project?.url || c.project?.name || '—';
    return `
      <tr class="calc-overview-row" data-client-id="${esc(c.id)}">
        <td class="calc-row-num">${i + 1}</td>
        <td>${esc(c.name || '—')}</td>
        <td>${esc(site)}</td>
        <td><span class="client-status-badge ${meta.cls}">${meta.icon} ${esc(clientStatusLabel(c.status, t))}</span></td>
        <td>${esc(formatClientListDate(c.dateEnd))}</td>
        <td class="calc-actions-cell">
          <button type="button" class="calc-icon-btn client-edit-btn" data-client-id="${esc(c.id)}">✏️</button>
          <button type="button" class="calc-icon-btn client-del-btn" data-client-id="${esc(c.id)}">🗑️</button>
        </td>
      </tr>`;
  }).join('');
  return `
    <div class="clients-toolbar">
      <button type="button" class="btn btn-primary btn-sm" id="clientAddBtn">${esc(t.clientsAdd)}</button>
    </div>
    <div class="calc-table-wrap">
      <table class="calc-table">
        <thead>
          <tr>
            <th>${esc(t.clientsColNum)}</th>
            <th>${esc(t.clientsColName)}</th>
            <th>${esc(t.clientsColSite)}</th>
            <th>${esc(t.clientsColStatus)}</th>
            <th>${esc(t.clientsColDate)}</th>
            <th>${esc(t.calcColActions)}</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    </div>`;
}

function renderClientCard(t) {
  const client = getEditingClient();
  if (!client) return renderClientsList(t);
  const p = client.project;
  const tech = client.technical;
  const svcOpts = getCalcServiceOptions();
  const svcSelected = new Set(p.services || []);
  const svcOptions = svcOpts.map(o =>
    `<option value="${esc(o.id)}"${svcSelected.has(o.id) ? ' selected' : ''}>${esc(o.label)}</option>`
  ).join('');
  const history = (client.history || []).slice().reverse().map(h =>
    `<li><strong>${esc(formatDocDate(h.date))}</strong> — ${esc(h.text)}</li>`
  ).join('');
  const docListHtml = renderCalcDocList(client.documents || [], t);

  return `
    <div class="client-card-grid">
      <div class="client-card-main">
        <div class="form-group"><label class="form-label">${esc(t.clientsName)}</label><input class="form-input" id="clientName" value="${esc(client.name)}"></div>
        <div class="form-group"><label class="form-label">${esc(t.clientsContact)}</label><input class="form-input calc-field-medium" id="clientContact" value="${esc(client.contact)}"></div>
        <div class="item-fields">
          <div class="form-group"><label class="form-label">${esc(t.clientsEmail)}</label><input type="email" class="form-input calc-field-medium" id="clientEmail" value="${esc(client.email)}"></div>
          <div class="form-group"><label class="form-label">${esc(t.clientsPhone)}</label><input class="form-input calc-field-medium" id="clientPhone" value="${esc(client.phone)}"></div>
        </div>
        <div class="item-fields">
          <div class="form-group"><label class="form-label">${esc(t.clientsStatus)}</label>
            <select class="form-input" id="clientStatus">
              <option value="in_progress"${client.status === 'in_progress' ? ' selected' : ''}>${esc(t.clientStatusInProgress)}</option>
              <option value="completed"${client.status === 'completed' ? ' selected' : ''}>${esc(t.clientStatusCompleted)}</option>
              <option value="support"${client.status === 'support' ? ' selected' : ''}>${esc(t.clientStatusSupport)}</option>
              <option value="paused"${client.status === 'paused' ? ' selected' : ''}>${esc(t.clientStatusPaused)}</option>
            </select>
          </div>
          <div class="form-group"><label class="form-label">${esc(t.clientsDateStart)}</label><input type="date" class="form-input" id="clientDateStart" value="${esc(client.dateStart)}"></div>
          <div class="form-group"><label class="form-label">${esc(t.clientsDateEnd)}</label><input type="date" class="form-input" id="clientDateEnd" value="${esc(client.dateEnd)}"></div>
        </div>
        <div class="client-section-title">Проект</div>
        <div class="form-group"><label class="form-label">${esc(t.clientsProjectName)}</label><input class="form-input" id="clientProjectName" value="${esc(p.name)}"></div>
        <div class="form-group"><label class="form-label">${esc(t.clientsProjectType)}</label>
          <select class="form-input calc-field-medium" id="clientProjectType">
            <option value="landing"${p.type === 'landing' ? ' selected' : ''}>${esc(t.clientTypeLanding)}</option>
            <option value="multipage"${p.type === 'multipage' ? ' selected' : ''}>${esc(t.clientTypeMultipage)}</option>
            <option value="mobile"${p.type === 'mobile' ? ' selected' : ''}>${esc(t.clientTypeMobile)}</option>
            <option value="motion"${p.type === 'motion' ? ' selected' : ''}>${esc(t.clientTypeMotion)}</option>
            <option value="other"${p.type === 'other' ? ' selected' : ''}>${esc(t.clientTypeOther)}</option>
          </select>
        </div>
        <div class="form-group"><label class="form-label">${esc(t.clientsProjectUrl)}</label><input class="form-input calc-field-medium" id="clientProjectUrl" value="${esc(p.url)}"></div>
        <div class="calc-price-compact" style="margin-bottom:12px">
          <label class="form-label" style="width:100%;margin-bottom:6px">${esc(t.clientsBudget)}</label>
          <input type="number" class="form-input calc-price-input" id="clientBudget" value="${parseInt(p.budget, 10) || 0}" min="0" step="100">
          <select class="form-input calc-currency-select" id="clientBudgetCurrency">
            <option value="CHF"${(p.currency || 'CHF') === 'CHF' ? ' selected' : ''}>CHF</option>
            <option value="USD"${p.currency === 'USD' ? ' selected' : ''}>USD</option>
            <option value="EUR"${p.currency === 'EUR' ? ' selected' : ''}>EUR</option>
          </select>
        </div>
        <div class="form-group"><label class="form-label">${esc(t.clientsServices)}</label>
          <select class="form-input client-services-select" id="clientServices" multiple>${svcOptions}</select>
        </div>
        <div class="client-section-title">${esc(t.clientsNotesTitle)}</div>
        <div class="form-group"><label class="form-label">${esc(t.clientsNotes)}</label><textarea class="form-textarea" id="clientNotes" rows="5">${esc(client.notes)}</textarea></div>
        ${history ? `<div class="form-label">${esc(t.clientsHistory)}</div><ul class="client-history">${history}</ul>` : ''}
        <div class="calc-docs-section">
          <div class="form-label">${esc(t.calcDocsTitle)}</div>
          <input type="file" id="clientDocInput" accept=".pdf,.jpg,.jpeg,.png,.docx" hidden>
          <button type="button" class="btn btn-ghost btn-sm" id="clientDocAttach">${esc(t.calcDocsAttach)}</button>
          ${docListHtml}
        </div>
      </div>
      <div class="client-card-tech">
        <div class="calc-editor-notes-title">${esc(t.clientsTechTitle)}</div>
        <div class="form-group"><label class="form-label">${esc(t.clientsDomainProvider)}</label><input class="form-input calc-field-medium" id="clientDomainProvider" value="${esc(tech.domainProvider)}"></div>
        <div class="form-group"><label class="form-label">${esc(t.clientsDomainLogin)}</label><input class="form-input calc-field-medium" id="clientDomainLogin" value="${esc(tech.domainLogin)}"></div>
        <div class="form-group"><label class="form-label">${esc(t.clientsDomainPass)}</label>
          <div class="pw-wrap"><input type="password" class="form-input calc-field-medium" id="clientDomainPass" value="${esc(tech.domainPassword)}"><button type="button" class="pw-toggle" data-target="clientDomainPass">👁</button></div>
        </div>
        <div class="form-group"><label class="form-label">${esc(t.clientsHosting)}</label><input class="form-input calc-field-medium" id="clientHosting" value="${esc(tech.hosting)}"></div>
        <div class="form-group"><label class="form-label">${esc(t.clientsCmsUrl)}</label><input class="form-input calc-field-medium" id="clientCmsUrl" value="${esc(tech.cmsUrl)}"></div>
        <div class="form-group"><label class="form-label">${esc(t.clientsCmsLogin)}</label><input class="form-input calc-field-medium" id="clientCmsLogin" value="${esc(tech.cmsLogin)}"></div>
        <div class="form-group"><label class="form-label">${esc(t.clientsCmsPass)}</label>
          <div class="pw-wrap"><input type="password" class="form-input calc-field-medium" id="clientCmsPass" value="${esc(tech.cmsPassword)}"><button type="button" class="pw-toggle" data-target="clientCmsPass">👁</button></div>
        </div>
        <div class="form-group"><label class="form-label">${esc(t.clientsExtraAccess)}</label><textarea class="form-textarea" id="clientExtraAccess" rows="4">${esc(tech.extraAccess)}</textarea></div>
      </div>
    </div>
    <div class="calc-editor-footer">
      <button type="button" class="btn btn-ghost btn-sm" id="clientBackBtn">${esc(t.clientsBack)}</button>
      <button type="button" class="btn btn-success btn-sm" id="clientSaveBtn">${esc(t.clientsSave)}</button>
    </div>`;
}

function bindClientsEvents(container) {
  const t = u();
  document.getElementById('clientAddBtn')?.addEventListener('click', () => {
    const c = createEmptyClient();
    clientsData.unshift(c);
    clientsEditingId = c.id;
    clientsView = 'card';
    markUnsaved();
    renderClientsAdmin();
  });
  container.querySelectorAll('.calc-overview-row[data-client-id]').forEach(row => {
    row.addEventListener('click', e => {
      if (e.target.closest('.calc-actions-cell')) return;
      clientsEditingId = row.dataset.clientId;
      clientsView = 'card';
      renderClientsAdmin();
    });
  });
  container.querySelectorAll('.client-edit-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      clientsEditingId = btn.dataset.clientId;
      clientsView = 'card';
      renderClientsAdmin();
    });
  });
  container.querySelectorAll('.client-del-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const id = btn.dataset.clientId;
      clientsData = clientsData.filter(c => c.id !== id);
      if (clientsEditingId === id) { clientsEditingId = null; clientsView = 'list'; }
      markUnsaved();
      updateClientsBadge();
      renderClientsAdmin();
    });
  });
  document.getElementById('clientBackBtn')?.addEventListener('click', () => {
    snapshotClientCard();
    clientsView = 'list';
    clientsEditingId = null;
    renderClientsAdmin();
  });
  document.getElementById('clientSaveBtn')?.addEventListener('click', async () => {
    snapshotClientCard();
    const client = getEditingClient();
    if (client) {
      const today = new Date().toISOString().slice(0, 10);
      client.history.push({ date: today, text: 'Изменения сохранены' });
    }
    markUnsaved();
    markSaving();
    if (await saveClients({ silent: true })) {
      await markSavedSuccess();
      showToast(t.saved, 'success');
    } else markSaveError(t.saveError);
  });
  document.getElementById('clientDocAttach')?.addEventListener('click', () => {
    document.getElementById('clientDocInput')?.click();
  });
  document.getElementById('clientDocInput')?.addEventListener('change', e => {
    const client = getEditingClient();
    const file = e.target.files?.[0];
    if (client && file) attachClientDocument(file, client);
    e.target.value = '';
  });
  container.querySelectorAll('.calc-doc-del').forEach(btn => {
    btn.addEventListener('click', () => {
      const client = getEditingClient();
      if (!client?.documents) return;
      client.documents = client.documents.filter(d => d.id !== btn.dataset.docId);
      markUnsaved();
      renderClientsAdmin();
    });
  });
  container.querySelectorAll('.calc-doc-open-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const client = getEditingClient();
      const doc = client?.documents?.find(d => d.id === btn.dataset.docId);
      if (doc) openStoredDocument(doc);
    });
  });
  container.querySelectorAll('#clientsSection .pw-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const input = document.getElementById(btn.dataset.target);
      if (!input) return;
      input.type = input.type === 'password' ? 'text' : 'password';
    });
  });
  container.querySelectorAll('#clientsSection input, #clientsSection select, #clientsSection textarea').forEach(el => {
    el.addEventListener('input', markUnsaved);
    el.addEventListener('change', markUnsaved);
  });
}

function renderClientsAdmin() {
  const container = document.getElementById('clientsSection');
  if (!container) return;
  const t = u();
  updateClientsBadge();
  container.innerHTML = clientsView === 'card' ? renderClientCard(t) : renderClientsList(t);
  bindClientsEvents(container);
}

