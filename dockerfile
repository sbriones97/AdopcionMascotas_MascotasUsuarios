FROM python:3.8-alpine
LABEL autor="Salvado Briones y Victoria"
WORKDIR /usr/src/app
COPY package*.json ./
COPY . . 
CMD ["python"]