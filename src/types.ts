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

// src/types.ts

// 1. Tipo que viene de /players (si en un futuro lo usaras)
export interface PlayerFromAPI {
  _id: string;
  userId: string;
  playerName: string;
  displayName: string;
  elo: number;
}

// 2. Tipo para cada partida que viene de /matches
export interface MatchFromAPI {
  _id: string;
  game_number: number;
  thread_id: string;
  map: string; // Ej: "Arena", "Arabia"
  team1: Array<{ id: string; name: string }>;
  team2: Array<{ id: string; name: string }>;
  team1_civs: Record<
    string,
    {
      main: string;
      main_score: number;
      alt: string;
      alt_score: number;
    }
  >;
  team2_civs: Record<
    string,
    {
      main: string;
      main_score: number;
      alt: string;
      alt_score: number;
    }
  >;
  status: string; // p. ej. "completed", "ongoing"
  winner: 1 | 2; // 1 → ganó team1, 2 → ganó team2
  createdAt?: string; // ISO string
  finishedAt?: string; // ISO string
}

// 3. Tipo para cada mapa que viene de /maps
export interface MapFromAPI {
  _id: string;
  civ_rating: Record<string, number>;
  name: string; // nombre de mapa, ej. "Arabia", "Arena"
  chance: number; // probabilidad de aparición (ej. 20 para 20%)
  type: string; // tipo de mapa, p. ej. "classic"
  chosen_times: number; // cuántas veces se eligió
}
