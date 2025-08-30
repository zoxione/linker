FROM public.ecr.aws/docker/library/node:22.14.0-alpine AS base


FROM base AS builder
WORKDIR /app

RUN npm install --g turbo

COPY . .

RUN turbo prune @repo/api --docker


FROM base AS installer
WORKDIR /app

RUN npm install --g pnpm

COPY --from=builder /app/out/json/ .
RUN pnpm install

COPY --from=builder /app/out/full/ .
RUN pnpm --filter @repo/api run db:generate
RUN pnpm turbo build


FROM base AS runner
WORKDIR /app

RUN npm install --g pnpm

COPY --from=installer /app .

EXPOSE 8080

CMD ["pnpm", "start", "--filter=@repo/api"]
