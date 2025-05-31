// src/types.ts
export interface PlayerFromAPI {
  _id: string;
  userId: string;
  playerName: string;
  displayName: string;
  elo: number;
}

export interface MatchFromAPI {
  _id: string;
  game_number: number;
  map: string;
  team1: Array<{ id: string; name: string }>;
  team2: Array<{ id: string; name: string }>;
  status: string; // esperamos "completed"
  winner: 1 | 2; // 1 → ganó team1, 2 → ganó team2
  // (además vienen createdAt, finishedAt, etc. que no usaremos aquí)
}

export interface PlayerStats {
  rank: number; // 1, 2, 3, …
  userId: string; // clave primaria para “linkear”
  displayName: string; // ej. "Juampiq"
  playerName: string; // ej. "juampi3616"
  rating: number; // el elo proveniente de /players
  games: number; // total de partidas jugadas
  wins: number; // cuántas partidas ganó
  losses: number; // cuántas partidas perdió
  winrate: number; // wins / games, p. ej. 0.65 → 65.00%
  delta7: number; // placeholder (puedes calcularlo luego si quieres)
  performance: number; // placeholder (ej. 0..100, o lo calculas luego)
  performanceDelta: number; // placeholder (cambio en performance)
  lastGame: string; // texto tipo “3 days ago” (también placeholder)
  onFire?: boolean; // si el jugador está en racha (opcional)
  lastResults: boolean[]; // true for win, false for loss
}
