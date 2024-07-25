FROM node:22-alpine

WORKDIR /next_project
EXPOSE 8080
COPY . .
RUN npm install && \
    npm run build
CMD [ "npm", "run", "start", "--", "-H", "0.0.0.0", "-p", "8080" ]