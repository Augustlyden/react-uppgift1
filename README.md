# RPG Inventory & Shop Manager

### August Lydén

---

## Projektbeskrivning
En applikation för att hantera en karaktärs utrustning och trollformler. Appen låter användaren utforska föremål via ett externt API, köpa dem till sin ryggsäck, samt skapa och redigera egna unika föremål.
Detta projekt är byggt som en Single Page Application (SPA) med React. Syftet är att ge användaren ett smidigt gränssnitt för att hantera ett inventory. Appen kombinerar data från ett publikt D&D-API med en egen databas (Supabase) för att skapa en dynamisk upplevelse där användaren kan blanda officiellt innehåll med egna skapelser.

---

## API-Referens
Applikationen använder följande datakällor:
*   **[D&D 5e API](https://www.dnd5eapi.co/api/2014)**: Används i shoppen för att hämta officiella spells och equipment.
*   **Supabase (PostgreSQL)**: Används som backend för att spara användarens personliga inventory (CRUD).

---

## Implementerade Features
*   **Fullständig CRUD**: Skapa, läsa, uppdatera och radera föremål i inventory.
*   **Kategorisering**: Filtrering mellan "Spells" och "Equipment" på alla sidor.
*   **Smart Shop**: Logik för att lägga till nya föremål eller öka antal (quantity) om föremålet redan ägs.
*   **Formulärhantering**: Avancerat formulär för att både skapa och redigera föremål med dynamiska fält baserat på typ.

---

## Instruktioner för att köra projektet

1.  **Klona repot:**
    ```bash
    git clone https://github.com/Augustlyden/react-uppgift1.git
    ```
2.  **Installera dependencies:**
    ```bash
    npm install
    ```
3.  **Konfigurera miljövariabler:**
    Skapa en `.env`-fil i roten och lägg till dina Supabase-uppgifter:
    ```env
    VITE_SUPABASE_URL=din_url
    VITE_SUPABASE_ANON_KEY=din_key
    ```
4.  **Starta utvecklingsservern:**
    ```bash
    npm run dev
    ```

---

## Kända begränsningar
*   Applikationen kräver en internetuppkoppling för att hämta data från D&D-API:et.
*   *Begränsning:* Just nu finns ingen sökfunktion i shoppen, utan användaren navigerar via kategorier.
*   Långa laddningstider kan förekomma och vid uppstart av appen ser inventory ut att vara tom innan alla föremål visas

---

