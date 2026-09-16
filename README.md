# Confluence — Futures Signal Terminal

A single-page futures scanner that runs entirely in your browser. No backend,
no account, no API keys, no install. It reads public market data directly from
MEXC, Binance, OKX, or Bitget and computes everything locally.

## Put it online (free, ~2 minutes)

1. Create a new GitHub repository (public).
2. Upload all four files from this folder: `index.html`, `manifest.json`,
   `icon.svg`, `sw.js`.
3. Repo **Settings → Pages → Source: Deploy from a branch → `main` / root** → Save.
4. Wait ~1 minute. Your app is live at
   `https://<your-username>.github.io/<repo-name>/`

Open that link on your phone → Chrome menu → **Install app** (Android), or
Safari → Share → **Add to Home Screen** (iPhone). You get an app icon and a
full-screen experience.

## What it does

- **11 weighted strategies** vote on each coin: EMA crossover, 200-EMA trend
  filter, RSI, MACD, Bollinger Bands, Donchian breakout (ADX-gated), RSI-2
  mean reversion, Stochastic, VWAP, consecutive-candle reversion, RSI/price
  divergence.
- **Dual long/short scoring** — both sides always shown, including when the
  market is genuinely unclear (both low).
- **Market Scanner** — top-20 long and short candidates, ranked.
- **Search Any Coin** — all six horizons (15m/30m/45m/60m/4h/1d) at once, live.
- **Live chart** — TradingView's open-source Lightweight Charts, with entry
  zone, profit/loss zone boxes, and support/resistance from swing pivots.
- **AI Brain** — a paper-trading engine (see below).

## The AI Brain

Press **Start AI Brain** and it will, on its own:

1. Pick the 25 most-traded futures coins on the selected exchange.
2. Scan them every 60 seconds.
3. Open a **simulated** trade when one clears the confidence bar, sized to
   risk 1% of a $10,000 virtual balance. Max 5 open at a time.
4. Watch live prices until each trade genuinely hits take-profit or stop-loss.
5. Credit or blame the strategies that voted for that call, shifting their
   influence (0.7×–1.3×) based on their real record.
6. Stop opening new trades for the day if losses reach **-6%**.

Everything it does is logged in plain language in the Learning Log.

**No real money is ever involved. There is no exchange login, no API key, and
no code path that can place a real order.**

## Honest limitations

- **It only runs while the tab is open.** A browser page cannot run in the
  background, overnight, or while your phone is locked. GitHub Pages serves
  static files — it does not run your bot on a server.
- **Nothing persists between sessions.** Close the tab and the paper balance,
  trade history, and learned weights all reset. There is no database.
- **Paper results are optimistic.** No fees, no slippage, no partial fills,
  and it assumes your limit entry always fills. Real results are worse — often
  substantially.
- **This is not financial advice, and it is not a profit engine.** It is a
  research tool for seeing whether a strategy mix has any edge at all before
  risking anything. Futures are leveraged and can lose more than your deposit.

## Local use

You can also just download `index.html` and double-click it. Everything works
except the mobile "Install" prompt, which needs real hosting.
