import pathlib

from fastapi import FastAPI
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi import APIRouter
from fastapi.responses import FileResponse

some_file_path = "./static/templates/index.html"
app = FastAPI()




# @router.get("/", tags=["/"])
# async def read_root():
#     return [{"username": "root"}, {"username": "Morty"}]

# @router.get("/users/", tags=["users"])
# async def read_users():
#     return [{"username": "Rick"}, {"username": "Morty"}]

app.mount("/static", StaticFiles(directory="static"), name="static")

@app.get("/")
async def main():
    return FileResponse(some_file_path)
router = APIRouter()
