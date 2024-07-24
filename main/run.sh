#!/usrb/bin/sh

python manage.py migrate
python manage.py collectstatic --link --no-input
python manage.py runserver --insecure 0.0.0.0:8000