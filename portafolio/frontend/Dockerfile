# --- Base stage ---
FROM node:20-alpine AS base
WORKDIR /app
COPY portafolio-frontend/package*.json ./

# --- Dependencies stage ---
FROM base AS deps
RUN npm ci

# --- Build stage ---
FROM base AS build
COPY --from=deps /app/node_modules ./node_modules
COPY portafolio-frontend .
RUN npm run build

# --- Runtime stage ---
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
EXPOSE 3000

# Copy build artifacts
COPY --from=build /app/public ./public
COPY --from=build /app/.next ./.next
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package*.json ./

CMD ["npm", "start"]
