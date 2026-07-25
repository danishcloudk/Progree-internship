
FROM node:18-alpine AS builder

WORKDIR /usr/src/app

COPY app/package*.json ./
RUN npm install --omit=dev

COPY app/ .

FROM node:18-alpine

ENV NODE_ENV=production
ENV PORT=8080

RUN addgroup -S appgroup && adduser -S appuser -G appgroup

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app ./

RUN chown -R appuser:appgroup /usr/src/app

USER appuser

EXPOSE 8080
CMD ["npm", "start"]
