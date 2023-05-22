FROM node:18.15.0
WORKDIR /usr/local/app
ENV NODE_ENV=production
ENV PORT=4000
ENV PASSWORD_REDIS=J2rdnMXNTjk91RK3loz4c4zyxZ4tMQJi
COPY package.json package-lock.json /usr/local/app/
RUN npm install && npm cache clean --force
COPY ./ ./
CMD ["npm", "start"]
