# Polpoo Portal

Dashboard web para visualizar rutas de reparto, vehículos y estado de entregas integradas con la plataforma **Polpoo**.

El proyecto está construido con **React + TypeScript + Leaflet** y está pensado para integrarse con la API de Polpoo.

---

# Características

- Visualización de flota en mapa
- Filtro por camión
- Visualización de rutas
- Timeline de entregas
- Tabla de pedidos
- Sistema de datos **Mock / API**
- Actualización automática cada **5 minutos**

---

# Tecnologías

- React
- TypeScript
- Leaflet
- TailwindCSS
- Vite

---

# Instalación

```bash
git clone https://github.com/TomasMarquez81/polpoo-portal
cd polpoo-portal
npm install
npm run dev
```

---

# Configuración

Archivo `.env`

```
VITE_USE_MOCK=true
VITE_POLPOO_API_URL=https://api.polpoo.com
```

### Modo desarrollo

```
VITE_USE_MOCK=true
```

Usa datos simulados.

### Modo producción

```
VITE_USE_MOCK=false
```

Conecta con la API real.

---

# Arquitectura

```
components → UI
hooks → lógica de datos
services → conexión API
mocks → datos simulados
```

---

# Próximas mejoras

- Integración completa con API Polpoo
- Autenticación OAuth
- Mejoras de visualización en mapa
- Dashboard de métricas logísticas

---

# Autor

Tomás Márquez
