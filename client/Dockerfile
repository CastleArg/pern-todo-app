FROM node:12
WORKDIR /app

COPY package.json /app
COPY package-lock.json /app
RUN npm install
#RUN npm install react-scripts@3.4.1 -g
EXPOSE 3000
# add app
COPY . /app

# start app
CMD ["npm", "start"]