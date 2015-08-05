FROM    ubuntu

RUN apt-get update

RUN apt-get install -y git git-core nodejs npm

EXPOSE  8080
