# React Post Form

## Descrizione
Questo progetto consiste nella creazione di un form multifield in React per inviare dati tramite **POST** ad un’API.  
L’obiettivo è creare un nuovo post all’interno di un blog, gestendo i dati dell’autore, titolo, contenuto e stato del post.

---

## Dati del form
Il form deve raccogliere e inviare i seguenti campi:

- **author** (string) - L’autore del post
- **title** (string) - Il titolo del post
- **body** (string) - Il contenuto del post
- **public** (boolean) - Stato del post: pubblico (`true`) o bozza (`false`)

---

## Endpoint
L’endpoint a cui inviare i dati è:

https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts

In caso di successo, l’API restituisce i dati inviati.  
Verificare la risposta stampandola in console.

---

## Funzionalità

### Milestone 1
- Creare un form React con tutti i campi richiesti.
- Gestire lo stato dei campi tramite `useState`.

### Milestone 2
- Al submit del form, inviare i dati all’API tramite **fetch** o **axios**.
- Stampare la risposta in console per confermare l’invio.

### Bonus
- Mostrare un feedback all’utente dopo l’invio del form, ad esempio un alert o un messaggio in pagina, per indicare il successo o eventuali errori.

---

## Tecnologie utilizzate
- React.js
- JavaScript (ES6+)
- HTML / CSS
- Vite come tool di build

---

## Come eseguire il progetto
1. Clonare la repo:
```bash
git clone https://github.com/mendozagianfranco/react-post-form.git
```
2. Installare le dipendenze:

```bash
npm install
```
3. Avviare il progetto con Vite:
```bash
npm run dev
```
4. Aprire l’applicazione nel browser all’indirizzo indicato da Vite.

## Obiettivi di apprendimento

- Gestire più campi di input in un form React.
- Gestire lo stato dei campi tramite useState.
- Effettuare chiamate POST ad un’API esterna.
- Fornire feedback all’utente dopo l’invio dei dati.
