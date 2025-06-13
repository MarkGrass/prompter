FROM node:22.16.0-alpine
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN ["corepack", "enable"]

WORKDIR /app
COPY . .
RUN ["pnpm", "install", "--ignore-scripts"]
RUN ["pnpm", "build"]