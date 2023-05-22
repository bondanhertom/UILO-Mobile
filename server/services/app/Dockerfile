FROM node:18.15.0
WORKDIR /usr/local/app
ENV NODE_ENV=production
ENV PORT=4002
ENV SECRET=rahasia
ENV DATABASE_URL=postgresql://postgres:Smpn13depok!@db.qxaqvpcqbddqwntfvvla.supabase.co:5432/postgres
COPY package.json package-lock.json /usr/local/app/
RUN npm install && npm cache clean --force
COPY ./ ./
CMD ["npm", "start"]