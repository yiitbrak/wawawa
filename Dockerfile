FROM alpine:3.20.1

WORKDIR /example
RUN apk add py3-django py3-django-rest-framework py3-cairo &&\
    ./manage.py migrate
COPY . .
EXPOSE 8000


# CMD ["sleep", "99999"]
CMD ["/usr/bin/python", "manage.py", "runserver", "0.0.0.0:8000"]