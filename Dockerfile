FROM node:latest 

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

EXPOSE 5173

RUN "npm run build"

CMD ["sh","-c", "npm run preview && npm run preview"]
