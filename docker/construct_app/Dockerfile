FROM tiangolo/uvicorn-gunicorn-fastapi:python3.7

ADD requirements.txt .
# requirements.txtにリストされたパッケージをインストールする
RUN pip install --trusted-host pypi.python.org -r requirements.txt
