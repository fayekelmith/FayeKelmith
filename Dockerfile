FROM node:18.20.2-alpine 

WORKDIR /app

COPY package*.json ./

RUN npm install -g pnpm && pnpm install 

COPY . .

#start a development environment
CMD ["pnpm", "run","dev"]

