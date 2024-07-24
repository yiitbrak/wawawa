FROM alpine:3.20.1

WORKDIR /example
RUN apk add py3-django py3-django-rest-framework py3-cairo py3-psycopg2
COPY . .
EXPOSE 8000


# CMD ["sleep", "99999"]
RUN chmod +x run.sh
CMD ["/bin/sh","run.sh"]