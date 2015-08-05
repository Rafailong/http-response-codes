FROM    ubuntu

RUN apt-get update

RUN apt-get install -y git git-core nodejs npm

# app source
COPY . /src

# app dependencies
RUN cd /src/src; npm install

EXPOSE  8080
