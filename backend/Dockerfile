# ---------- Etapa 1: dependencias ----------
FROM node:18-alpine AS deps
WORKDIR /app
COPY package*.json ./
# Solo dependencias de producción (imagen final más liviana y segura).
RUN npm install --omit=dev

# ---------- Etapa 2: ejecución ----------
FROM node:18-alpine AS runtime
WORKDIR /app
ENV NODE_ENV=production
# Usuario no-root (buena práctica de seguridad).
RUN addgroup -S app && adduser -S app -G app
COPY --from=deps /app/node_modules ./node_modules
COPY app.js server.js ./
COPY package*.json ./
USER app
EXPOSE 3001
CMD ["node", "server.js"]
