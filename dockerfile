FROM nginx

WORKDIR app/

RUN echo "Installing Deps"
RUN apt-get update -y && apt-get install nodejs npm -y
COPY portfolio/ .
RUN ls
RUN npm install
RUN echo "Building the site..."
RUN npm run build
RUN cp -r build/* /usr/share/nginx/html
