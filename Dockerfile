## Build Environment
FROM node:16

# Build steps
ADD . /app
WORKDIR /app

RUN npm install
#RUN npm run build

## Run Environment
#FROM nginx:alpine
# Copy build artefacts
COPY package.json package*.json ./

CMD ["node", "index.js"];
#COPY --from=build-env /build /usr/share/nginx/html
#COPY /nginx/nginx.config /etc/nginx/conf.d/default.conf