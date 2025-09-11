FROM node:lts-slim
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . /app

ARG VITE_API_URL
ARG VITE_API_KEY

# ustawienie ENV w obrazie
ENV VITE_API_URL=$VITE_API_URL
ENV VITE_API_KEY=$VITE_API_KEY

RUN npm run build
EXPOSE 3000
CMD ["node", "build/index.js"]
