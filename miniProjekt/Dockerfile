# Korzystając z wersji node 14
FROM node:14




RUN mkdir -p /usr/src/app
# w jakim katalogu zbudować aplikację
WORKDIR /usr/src/app

# Do katalogu app zostanie skopiowany plik
COPY package.json /usr/src/app

RUN npm install
# instalacja wszystkich zależności
RUN npm install

# skopiowanie pozostałych plików serwera (w tym index.js)
COPY . /usr/src/app

# ustawienie portu na kontenerze
EXPOSE 8081
# ustawienie komendy startu serwera
CMD [ "node", "index.js" ]
