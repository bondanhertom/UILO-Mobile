FROM node:18.15.0
WORKDIR /usr/local/app
ENV NODE_ENV=production
ENV PORT=4001
ENV DATABASE_URL=mongodb+srv://bondanhertom:Smpn13depok!@cluster0.gzwlyem.mongodb.net/?retryWrites=true&w=majority
COPY package.json package-lock.json /usr/local/app/
RUN npm install && npm cache clean --force
COPY ./ ./
CMD ["npm", "start"]