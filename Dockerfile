FROM    ubuntu

RUN apt-get update

RUN apt-get install -y git git-core nodejs npm

EXPOSE  8080
 # run with sudo docker run -it -v /home/ravila/Development/http-response-codes/:/src -p 9000:8080 -d ravila/node-http-codes:latest
