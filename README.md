# Dashboard AOE - Estadísticas de Partidas y Jugadores

Este proyecto es un dashboard interactivo construido con **Astro** para visualizar estadísticas de partidas, mapas y jugadores de Age of Empires II, utilizando datos en tiempo real desde la API pública [https://apibot.server211.ovh](https://apibot.server211.ovh).

## 🚀 Características principales

- **Estadísticas generales**: KPIs de partidas jugadas, jugadores activos, mapa más jugado, jugador con más victorias, etc.
- **Gráficos interactivos**: Distribución de partidas por mapa y civilizaciones más usadas.
- **Tabla de jugadores**: Listado de jugadores con enlaces a su perfil individual.
- **Página de jugador**: Estadísticas individuales, winrate, mapas jugados, civilizaciones más usadas y últimas partidas.
- **Navegación entre jugadores**: Flechas para ir al jugador anterior/siguiente desde la página de perfil.
- **Detalle de partidas**: Visualización de partidas recientes y detalles de cada match.
- **Modal de civilizaciones**: Consulta de ratings y distribución de civilizaciones por mapa.

## 📦 Estructura del proyecto

```
/
├── public/
├── src/
│   ├── components/
│   │   ├── MatchCard.astro
│   │   ├── PlayersTable.astro
│   │   ├── CivModal.astro
│   │   └── ...
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       ├── index.astro
│       ├── players.astro
│       └── players/
│           └── [id].astro
└── package.json
```

## 🔗 APIs utilizadas

- **Partidas:** `https://apibot.server211.ovh/matches`
- **Mapas:** `https://apibot.server211.ovh/maps`
- **Jugadores:** `https://apibot.server211.ovh/players`
- **Jugador individual:** `https://apibot.server211.ovh/players/[id]`

## 🧑‍💻 Instalación y uso

1. Instala dependencias:
   ```sh
   npm install
   ```
2. Inicia el servidor de desarrollo:
   ```sh
   npm run dev
   ```
3. Accede a [http://localhost:4321](http://localhost:4321) para ver el dashboard.

## 📊 Ejemplo de uso

- Ve estadísticas generales en la página principal.
- Haz clic en un jugador para ver su perfil y estadísticas detalladas.
- Navega entre jugadores usando las flechas en la página de perfil.
- Consulta las civilizaciones y mapas más jugados.

## 📚 Más información

- [Documentación de Astro](https://docs.astro.build)
- [API pública de datos](https://apibot.server211.ovh)

---

Proyecto desarrollado para visualizar y analizar partidas y jugadores de Age of Empires II de manera moderna y responsiva.
