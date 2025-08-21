# Crypto Lietuva

Moderni kripto bendruomenės platforma, kuri apima:

- Realiu laiku veikiantį chat’ą, panašų į Discord
- Signalų kanalą, kuriame AI botas ir administratoriai gali siųsti prekybos signalus
- Kripto valiutų žvakių grafikus iš TradingView

## Projekto Struktūra

- `backend/`: Node.js, Express, ir Socket.io serveris.
- `frontend/`: React aplikacija (sukurta su Vite).
- `bot/`: AI botas, kuris siunčia prekybos signalus.

## Paleidimas

1. Įdiegti visas priklausomybes:
   ```bash
   npm run install-all
   ```

2. Paleisti visą projektą (backend, frontend, ir bot):
   ```bash
   npm start
   ```

Frontend veiks ant `http://localhost:5173` (arba kitas prievadas, jei 5173 užimtas).
Backend veiks ant `http://localhost:3001`.
