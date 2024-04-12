FROM node:18.20.2-alpine 

WORKDIR /app

COPY package*.json ./

RUN npm install -g pnpm && pnpm install 

COPY . .

RUN pnpm run build

EXPOSE 3000 

CMD ["pnpm", "start"]

