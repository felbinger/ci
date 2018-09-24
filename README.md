# Challenge Interface

## Features

- Startseite
  - Statistiken
  - Chat
- Challenges in dynamischen Kategorien (aktuell Coding/Hacking/Special) auflisten
  - Bereits gelöste Challenges markieren (Farblich anders darstellen)
  - Flags übermitteln
- Admin: Dashboard
  - Account Verwaltung
    - existierende darstellen (Tabelle)
      - Username
      - E-Mail
      - Tabelle: gelöste Challenges mit Zeitangabe
      - Datum der Accounterstellung
      - Datum des letzten Logins
    - Account erstellen
    - Account bearbeiten (Username, E-Mail, Password, Role)
    - Account löschen
  - Rollenverwaltung
    - existierende darstellen (Tabelle)
    - Rolle erstellen
    - Rolle bearbeiten (description)
    - Rolle löschen
  - Challenge Verwaltung
    - existierende darstellen (Tabelle)
    - Challenge erstellen
    - Challenge bearbeiten
      - YouTube Challenge/Solution Video ID bearbeiten
      - URL's hinzufügen/bearbeiten/löschen
  - Verwaltung der Kategorien
    - existierende darstellen (Tabelle)
    - Kategorie erstellen
    - Kategorie bearbeiten (description)
    - Kategorie löschen
- Account Seite
  - für das Ändern von E-Mail und Passwort
  - zum einsehen der bereits gelösten Challenges

## CLI

### Abhängigkeiten installieren

```Bash
npm install
```

### Kompilieren

```Bash
npm run serve
```

### Kompilieren für die Production

```Bash
npm run build
```

### Korrektur

```Bash
npm run lint
```
