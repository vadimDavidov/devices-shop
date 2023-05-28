FROM node:18-alpine

ENV NODE_ENV=production

WORKDIR /app

COPY . .

RUN npm install --omit=dev

RUN npm run build

CMD [ "npm", "start" ]

# CLI - commands:
# docker build -t nextjs-docker-devicesshop .
# docker run -dp 3000:3000 nextjs-docker-devicesshop
# docker ps
# docker stop <id>