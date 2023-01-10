FROM node:14-alpine3.15
COPY package-lock.json package.json 
RUN npm install
COPY . .
RUN npm run build
CMD ["npm","start"]