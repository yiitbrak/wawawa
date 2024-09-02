FROM alpine:3.20.1

WORKDIR /example
RUN apk add py3-django py3-django-rest-framework py3-cairo py3-psycopg2 py3-pip
RUN pip install --break-system-packages django-csp
COPY . .


# CMD ["sleep", "99999"]
RUN chmod +x run.sh
CMD ["/bin/sh","run.sh"]