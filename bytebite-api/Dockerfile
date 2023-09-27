FROM python:3.11.5

ENV PYTHONUNBUFFERED=1

WORKDIR /bytebite-api

RUN pip install django django-cors-headers

# copy from the current directory of the Dockerfile to /bytebite-api in the image
COPY . . 

EXPOSE 8000

