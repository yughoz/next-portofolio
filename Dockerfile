# Build stage
FROM oven/bun:1 AS builder

WORKDIR /app

# Install dependencies
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

# Copy source files
COPY . .

# Build the application
RUN bun run build

# Production stage
FROM oven/bun:1 AS runner

WORKDIR /app

ENV NODE_ENV=production

# bun user exists in oven/bun image with uid 1000
# We can use it or root. Let's use bun for security if possible, 
# but we need to ensure permissions are correct.
# For simplicity and robustness with standalone output, we often stick to root or adjust chown.
# Let's try using the 'bun' user.

COPY --from=builder --chown=bun:bun /app/public ./public
COPY --from=builder --chown=bun:bun /app/.next/standalone ./
COPY --from=builder --chown=bun:bun /app/.next/static ./.next/static

USER bun

EXPOSE 3005

ENV PORT=3005
ENV HOSTNAME="0.0.0.0"

CMD ["bun", "server.js"]
