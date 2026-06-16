# ТЗ: Вкладка "Material Bestellungen" в SchichtPlan

## Контекст проекта
- Сайт: `korsmotion.ch` → Cloudflare Pages
- Репо: `korsmotion/korsmotion-site`
- Build output: `site-cloudflare/`
- KV namespace: `kors_motiondata` (ID: `9a8f79d609684edeb2e43f14038f8db3`)
- Worker API: `_worker.js` — уже есть `/api/data` и `/api/save`
- Акцент: `#7C3AED`, стиль: glassmorphism, шрифт Inter
- Существующие вкладки SchichtPlan: Wochenplan, Maschinen-Display, Bilder, Reihenfolge

---

## Задача
Добавить новую вкладку **"Material Bestellungen"** в SchichtPlan Admin.

Внутри вкладки — переключатель роли (3 кнопки):
- 📦 Lager
- 👷 Produktion  
- 🚚 Logistik

---

## Реальный бизнес-процесс (важно для понимания)

```
СКЛАД (10 км от завода)
  → собирает палеты для производства
  → присваивает каждой палете номер (Pal.Nr.)
  → вносит в систему: материал + Pal.Nr. + количество
  ↓
PRODUKTION (рабочий у машины Waldner 10.3)
  → видит список своих материалов на день
  → когда нужен материал — нажимает "Anfordern" + вводит Pal.Nr.
  → видит статус: Angefordert / Unterwegs / Geliefert
  ↓
LOGISTIK (внутренняя, на территории завода)
  → видит запросы от рабочих
  → видит Pal.Nr. крупно — берёт нужную палету со двора
  → везёт в цех → нажимает "Geliefert"
  → рабочий видит статус обновился
```

**Что убираем:** ламинированный бумажный листок "Bestellung / Waldner 10.3 / Palette Nr.___ / Bestellzeit:___"

---

## Три вида (роли)

### 📦 Lager (Склад)
**Задача:** внести палеты которые подготовлены для производства

**UI элементы:**
- Заголовок: "Palette erfassen — Waldner 10.3"
- Форма добавления палеты:
  - `Materialnummer` (7 цифр, JetBrains Mono)
  - `Materialbezeichnung` (текст — название материала)
  - `Pal.Nr.` (число 1-999, крупно, оранжевый акцент)
  - `Menge` (число + единица ST/KG/L)
  - `BedZeit` (время когда нужно — HH:MM)
  - Кнопка "Palette hinzufügen +"
- Список добавленных палет на сегодня (таблица)
  - Колонки: Matnr | Bezeichnung | Pal.Nr. | Menge | BedZeit | Aktion
  - Кнопка удалить на каждой строке
- Кнопка "An Produktion senden" (зелёная, внизу) — публикует список

**Цвет акцента роли:** оранжевый `#f97316` (палета = склад)

---

### 👷 Produktion (Рабочий)
**Задача:** видеть материалы на день, запрашивать когда нужно

**UI элементы:**
- Машина: "Waldner 10.3" (badge сверху)
- Сводка: Gesamt / Offen / Angefordert / Geliefert (4 карточки)
- Фильтры: Alle / Offen / Angefordert / Unterwegs / Geliefert
- Список карточек материалов:
  - Materialnummer (моно, серый)
  - Название материала (жирный)
  - Menge (крупно, акцент)
  - BedZeit (время когда нужно)
  - Pal.Nr. — показывается ТОЛЬКО если склад внёс (оранжевый badge)
  - Статус badge
  - Кнопка "Anfordern" (фиолетовая) если статус Offen
    → при нажатии открывается модалка:
      - Показывает название материала
      - Поле ввода Pal.Nr. (если не пришло от склада)
      - Кнопка подтвердить → статус → Angefordert
- Секция-заголовки группируют по статусу

**Внизу sticky bar:** "Alle offenen anfordern" (фиолетовая кнопка)

**Цвет акцента роли:** фиолетовый `#7C3AED`

---

### 🚚 Logistik (Внутренняя логистика)
**Задача:** получать запросы, видеть Pal.Nr., подтверждать доставку

**UI элементы:**
- Header: тёмно-синий градиент "Logistik Eingang — Live"
- Статистика: Ausstehend / Unterwegs / Geliefert heute
- Список входящих запросов (только Angefordert + Unterwegs):
  - Machine badge "Waldner 10.3"
  - Время запроса
  - Название материала
  - Menge
  - **Pal.Nr. КРУПНО** (оранжевый блок, font-size 28px) — это главное что нужно логистику
  - Кнопка "Abholen & liefern" → статус Unterwegs
  - Кнопка "Als geliefert markieren" → статус Geliefert
- Выполненные заказы (Geliefert) показываются серо внизу

**Цвет акцента роли:** синий `#1d4ed8`

---

## Данные (Cloudflare KV)

### Ключи KV:
```
bestellungen:waldner_10_3:paletten   → список палет внесённых складом (JSON array)
bestellungen:waldner_10_3:orders     → список запросов от рабочего (JSON array)
```

### Структура палеты (от склада):
```json
{
  "id": "pal_1718000000000",
  "matnr": "1333416",
  "name": "VP KARTST 6er Lassi/Jog weiss 238x154",
  "palNr": 8,
  "menge": 10608,
  "einheit": "ST",
  "bedZeit": "12:28",
  "datum": "2026-06-15",
  "status": "verfuegbar"
}
```

### Структура заказа (от рабочего):
```json
{
  "id": "ord_1718000000001",
  "paletteId": "pal_1718000000000",
  "matnr": "1333416",
  "name": "VP KARTST 6er Lassi/Jog weiss 238x154",
  "palNr": 8,
  "menge": 10608,
  "einheit": "ST",
  "maschine": "Waldner 10.3",
  "status": "angefordert",
  "angefordertAt": "2026-06-15T10:30:00Z",
  "geliefertAt": null
}
```

### Статусы заказа:
```
verfuegbar → angefordert → unterwegs → geliefert
```

### API вызовы (через существующий _worker.js):
```javascript
// Читать палеты
GET /api/data?key=bestellungen:waldner_10_3:paletten

// Сохранить палеты  
POST /api/save
body: { key: "bestellungen:waldner_10_3:paletten", value: JSON.stringify(paletten) }

// Читать заказы
GET /api/data?key=bestellungen:waldner_10_3:orders

// Сохранить заказы
POST /api/save  
body: { key: "bestellungen:waldner_10_3:orders", value: JSON.stringify(orders) }

// Пароль для /api/save: "korsmotion2026"
```

### Polling (обновление без WebSocket):
- Logistik и Produktion делают `fetchOrders()` каждые **10 секунд**
- Показывать индикатор "🔴 Live" когда polling активен

---

## Переключатель ролей (UI)

```html
<!-- Три кнопки в верхней части вкладки -->
<div class="role-switcher">
  <button class="role-btn active" data-role="lager">📦 Lager</button>
  <button class="role-btn" data-role="produktion">👷 Produktion</button>
  <button class="role-btn" data-role="logistik">🚚 Logistik</button>
</div>
```

Стиль переключателя — такой же как существующие табы в SchichtPlan.

---

## Стиль (соответствует существующему сайту)

```css
/* Переменные уже есть в SchichtPlan */
--accent: #7C3AED;
--accent-light: #ede9fe;
--surface: rgba(255,255,255,0.75);
--glass: rgba(255,255,255,0.55);
--border: rgba(124,58,237,0.12);
--text: #1e1b4b;
--muted: #7c6fa0;
--radius: 14px;

/* Дополнительные для этой вкладки */
--lager-color: #f97316;      /* оранжевый — склад */
--lager-bg: #fff7ed;
--logistik-color: #1d4ed8;   /* синий — логистика */
--logistik-bg: #eff6ff;
--green: #16a34a;
--green-bg: #dcfce7;
```

**Карточки:** glassmorphism — `background: rgba(255,255,255,0.72); backdrop-filter: blur(16px);`

**Pal.Nr. блок** (самый важный элемент у логистика):
```css
.pal-nr-big {
  background: #fff3e0;
  border: 2px solid #f97316;
  border-radius: 12px;
  padding: 8px 16px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 28px;
  font-weight: 900;
  color: #ea580c;
  text-align: center;
}
```

---

## Файловая структура

```
site-cloudflare/
  schichtplan/
    index.html          ← существующий файл SchichtPlan
                          ДОБАВИТЬ: вкладку "Material Bestellungen"
                          ДОБАВИТЬ: весь JS для трёх ролей
                          ДОБАВИТЬ: KV polling каждые 10 сек
```

Всё в одном файле `schichtplan/index.html` — отдельных файлов не создавать.

---

## Порядок внедрения для Cursor

1. Найти в `schichtplan/index.html` блок с табами (Wochenplan / Maschinen-Display / Bilder / Reihenfolge)
2. Добавить таб "Material Bestellungen" в конец списка
3. Добавить HTML секцию для этой вкладки с role-switcher внутри
4. Добавить CSS для трёх ролей (в существующий `<style>`)
5. Добавить JS: `initBestellungen()`, `switchRole()`, `fetchPaletten()`, `fetchOrders()`, `saveOrders()`, polling
6. В существующую логику переключения табов добавить вызов `initBestellungen()` при активации этой вкладки

---

## Демо-данные (для первого запуска если KV пустой)

```javascript
const DEMO_PALETTEN = [
  { id:'pal_1', matnr:'1333416', name:'VP KARTST 6er Lassi/Jog weiss 238x154', palNr:3, menge:10608, einheit:'ST', bedZeit:'12:28', status:'verfuegbar' },
  { id:'pal_2', matnr:'1339535', name:'VP Den Bio Las ErdHim LF 1.5% D75 250g', palNr:7, menge:9450, einheit:'ST', bedZeit:'05:31', status:'verfuegbar' },
  { id:'pal_3', matnr:'1341648', name:'VP PLA MOBi Las neutral D95 400g', palNr:12, menge:1348, einheit:'ST', bedZeit:'02:04', status:'verfuegbar' },
  { id:'pal_4', matnr:'1347666', name:'VP BE Aln Bio HaferDes Nat D95 400g', palNr:5, menge:2742, einheit:'ST', bedZeit:'14:00', status:'verfuegbar' },
  { id:'pal_5', matnr:'1348184', name:'VP BE BI BIO JOG ERD LAKF D73 125G', palNr:9, menge:4848, einheit:'ST', bedZeit:'17:53', status:'verfuegbar' },
  { id:'pal_6', matnr:'1325884', name:'VP PLA MOBi Bio Jog Van lakf ALU 73mm', palNr:2, menge:6865, einheit:'ST', bedZeit:'12:25', status:'verfuegbar' },
];
```

---

## QR-СКАНИРОВАНИЕ (дополнение к ТЗ)

### Структура QR-кода на этикетке Greiner/Emmi
```
Artikel:  1359426
Name:     VP BE CO PG COLDCOF CAPPU PPD75 330M
MnG:      600 ST
Los-Nr.:  1004550391
MHD:      01.05.27
SSCC:     17610900049039364 37  ← уникальный ID коробки/палеты
```

SSCC (Serial Shipping Container Code) = главный уникальный идентификатор.
Используется как первичный ключ во всех операциях.

---

### Обновлённая структура палеты (KV)
```json
{
  "id": "pal_1718000000000",
  "sscc": "17610900049039364 37",
  "artikel": "1359426",
  "name": "VP BE CO PG COLDCOF CAPPU PPD75 330M",
  "mng": 600,
  "einheit": "ST",
  "losNr": "1004550391",
  "mhd": "2027-05-01",
  "maschine": "Waldner 10.3",
  "bedZeit": "12:28",
  "datum": "2026-06-15",
  "scans": [
    {
      "rolle": "lager",
      "aktion": "erfasst",
      "timestamp": "2026-06-15T06:00:00Z",
      "ok": true
    },
    {
      "rolle": "logistik",
      "aktion": "abgeholt",
      "timestamp": "2026-06-15T10:15:00Z",
      "ok": true
    },
    {
      "rolle": "produktion",
      "aktion": "empfangen",
      "timestamp": "2026-06-15T10:45:00Z",
      "ok": true
    }
  ],
  "status": "geliefert"
}
```

---

### QR-Scan Logik pro Rolle

#### 📦 Lager — beim Einpacken
1. Klick auf "📷 QR scannen"
2. Kamera öffnet sich (jsQR library)
3. QR wird gescannt → Felder automatisch befüllt:
   - Artikel, Name, MnG, Los-Nr., MHD, SSCC
4. Rarbeit wählt: Maschine + BedZeit
5. Klick "Bestätigen" → gespeichert in KV
6. Scan wird geloggt: `{ rolle: "lager", aktion: "erfasst", timestamp }`

#### 🚚 Logistik — beim Abholen
1. Bestellung kommt rein (von Produktion)
2. Logistik geht zur Palette → klickt "📷 Scannen & abholen"
3. QR scannen → System vergleicht SSCC mit Bestellung
4. ✅ MATCH: "Richtig! Waldner 10.3 — VP BE CO PG..." → Status → Unterwegs
5. ❌ KEIN MATCH: "⚠️ Falsche Palette! Erwartet SSCC ...437, gescannt ...999"
6. Scan geloggt: `{ rolle: "logistik", aktion: "abgeholt", timestamp }`

#### 👷 Produktion — beim Empfangen
1. Logistik bringt Palette → Rarbeit klickt "📷 Empfang scannen"
2. QR scannen → System vergleicht mit angefordertem Material
3. ✅ MATCH: "✅ Das ist dein Material! 600 ST VP BE CO PG..." → Status → Geliefert
4. ❌ KEIN MATCH: "⚠️ Falsches Material!" → Rarbeit lehnt ab
5. Scan geloggt: `{ rolle: "produktion", aktion: "empfangen", timestamp }`

---

### QR Scanner Implementation
```javascript
// Library: jsQR (CDN)
// <script src="https://cdnjs.cloudflare.com/ajax/libs/jsQR/1.4.0/jsQR.min.js"></script>

async function startQRScan(rolle, expectedSSCC = null) {
  // 1. Kamera öffnen
  const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' }});
  // 2. Video → Canvas → jsQR loop
  // 3. Bei Erfolg: parseQRData(result.data)
  // 4. Wenn expectedSSCC: vergleichen → Feedback
}

function parseQRData(raw) {
  // QR enthält GS1-128 Format oder plain text
  // Felder extrahieren: Artikel, Name, MnG, Los-Nr., MHD, SSCC
  // Return: { artikel, name, mng, einheit, losNr, mhd, sscc }
}

function validateScan(scanned, expected) {
  if (scanned.sscc === expected.sscc) {
    return { ok: true, message: '✅ Richtig!' };
  }
  return { ok: false, message: `⚠️ Falsche Palette! Erwartet ${expected.sscc}` };
}
```

---

### Scan-History Anzeige (alle drei Rollen sehen)
```
📦 Lager      06:00  Erfasst     ✅
🚚 Logistik   10:15  Abgeholt    ✅
👷 Produktion 10:45  Empfangen   ✅
```
Jede Palette hat vollständige Bewegungshistorie.
Timeline wird in der Karte angezeigt (klein, unter den Hauptinfos).

---

### KV Keys (ergänzt)
```
bestellungen:waldner_10_3:paletten    → Paletten vom Lager
bestellungen:waldner_10_3:orders      → Anforderungen von Produktion
bestellungen:scan_log                 → alle Scans (alle Maschinen)
```

### Neue Felder in UI (alle Karten zeigen)
- **SSCC** (JetBrains Mono, klein, grau — eindeutige ID)
- **Los-Nr.** (Chargennummer)
- **MHD** (Mindesthaltbarkeitsdatum)
- **Scan-Timeline** (3 Punkte: Lager ✅ / Logistik ⏳ / Produktion ⏳)

---

## ВАЖНО: Одна палета = несколько артикулов

### Проблема
Логистика собирает палету с несколькими разными продуктами.
Палета имеет **один Pal.Nr.** но содержит **несколько Artikel** каждый со своим QR/SSCC.

### Пример:
```
Pal.Nr. 8
├── SSCC 17610900049039364 37  · Artikel 1359426 · VP BE CO PG COLDCOF CAPPU · 600 ST
├── SSCC 17610900004903936437  · Artikel 1333416 · VP KARTST 6er Lassi/Jog   · 1.200 ST
└── SSCC 17610900049039364 99  · Artikel 1341648 · VP PLA MOBi Las neutral    · 400 ST
```

### Обновлённая структура палеты (KV)
```json
{
  "palNr": 8,
  "maschine": "Waldner 10.3",
  "datum": "2026-06-15",
  "status": "unterwegs",
  "artikel": [
    {
      "sscc": "17610900049039364 37",
      "artikel": "1359426",
      "name": "VP BE CO PG COLDCOF CAPPU PPD75 330M",
      "mng": 600,
      "einheit": "ST",
      "losNr": "1004550391",
      "mhd": "2027-05-01",
      "status": "geliefert",
      "scans": { "lager": "...", "logistik": "...", "produktion": "..." }
    },
    {
      "sscc": "17610900004903936437",
      "artikel": "1333416",
      "name": "VP KARTST 6er Lassi/Jog weiss 238x154",
      "mng": 1200,
      "einheit": "ST",
      "losNr": "1004550388",
      "mhd": "2027-08-15",
      "status": "unterwegs",
      "scans": { "lager": "...", "logistik": "...", "produktion": null }
    },
    {
      "sscc": "17610900049039364 99",
      "artikel": "1341648",
      "name": "VP PLA MOBi Las neutral D95 400g",
      "mng": 400,
      "einheit": "ST",
      "losNr": "1004550392",
      "mhd": "2027-05-01",
      "status": "angefordert",
      "scans": { "lager": "...", "logistik": null, "produktion": null }
    }
  ]
}
```

### Scan-Logik bei gemischter Palette

#### 📦 Lager — Palette zusammenstellen
1. Lager erstellt neue Palette: gibt Pal.Nr. ein
2. Scannt ersten Artikel → fügt zur Palette hinzu
3. Scannt zweiten Artikel → fügt zur Palette hinzu
4. Scannt dritten Artikel → fügt zur Palette hinzu
5. Klick "Palette abschliessen" → an Produktion senden

UI zeigt Liste der gescannten Artikel mit:
- Häkchen wenn gescannt ✓
- Möglichkeit einzelne Artikel zu entfernen
- Gesamtübersicht: "3 Artikel · Pal.Nr. 8"

#### 🚚 Logistik — Palette abholen
1. Sieht Bestellung: "Pal.Nr. 8 → Waldner 10.3"
2. Sieht ALLE Artikel auf dieser Palette (Liste)
3. Scannt QR von jedem Artikel einzeln → jeder bekommt ✓
4. Oder: scannt einen → System fragt "Noch 2 Artikel auf dieser Palette — auch scannen?"
5. Wenn alle gescannt: Status → Unterwegs

#### 👷 Produktion — Empfang
1. Palette kommt an
2. Scannt jeden Artikel einzeln
3. System zeigt: "Artikel 1 von 3 ✓ · Artikel 2 von 3 ✓ · Artikel 3 von 3 ..."
4. Kann einzelne Artikel ablehnen: "Falscher Artikel — zurückschicken"
5. Wenn alle bestätigt: Palette gilt als vollständig geliefert

### UI Änderungen

#### Lager — neue Palette Panel:
```
Pal.Nr.: [ 8 ]    Maschine: [ Waldner 10.3 ▾ ]

Artikel auf dieser Palette:
┌─────────────────────────────────────────────┐
│ ✓ 1359426 · VP BE CO PG COLDCOF · 600 ST   │
│ ✓ 1333416 · VP KARTST 6er Lassi · 1.200 ST │
│ + [📷 Weiteren Artikel scannen]              │
└─────────────────────────────────────────────┘
[Palette abschliessen & senden →]
```

#### Logistik — Palette abholen:
```
Pal.Nr. 8 → Waldner 10.3
┌─────────────────────────────────────────────┐
│ ☐ 1359426 · VP BE CO PG COLDCOF · 600 ST   │ [📷]
│ ✓ 1333416 · VP KARTST 6er Lassi · 1.200 ST │ gescannt
│ ☐ 1341648 · VP PLA MOBi Las     · 400 ST   │ [📷]
└─────────────────────────────────────────────┘
[Alle gescannt — Unterwegs markieren →]
```

#### Produktion — Empfang:
```
Palette Pal.Nr. 8 angekommen
┌─────────────────────────────────────────────┐
│ ✓ 1359426 · VP BE CO PG COLDCOF · 600 ST   │ ✅
│ ✓ 1333416 · VP KARTST 6er Lassi · 1.200 ST │ ✅  
│ ☐ 1341648 · VP PLA MOBi Las     · 400 ST   │ [📷 scannen]
└─────────────────────────────────────────────┘
Fortschritt: 2/3 bestätigt
```
