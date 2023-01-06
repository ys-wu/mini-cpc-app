from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from utils import get_rpi_ethernet_ips


app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/ping")
async def ping():
    return {"ping": "pong"}


@app.get("/api/eip")
async def ethernet_ip():
    ips = get_rpi_ethernet_ips()
    return {"ips": ips}
