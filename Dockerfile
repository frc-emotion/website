FROM node:22
WORKDIR /usr/src/app
COPY package*.json ./

# next, postcss, tailwind
COPY *.config.js ./
COPY tsconfig.json ./
COPY .eslintrc.json ./

COPY /public ./public
COPY /src ./src

RUN npm install
RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]
