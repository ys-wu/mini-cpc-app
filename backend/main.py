from fastapi import FastAPI

from utils import get_rpi_ethernet_ips


app = FastAPI()


@app.get("/api/ping")
async def ping():
    return {"ping": "pong"}


@app.get("/api/eip")
async def ethernet_ip():
    ip = get_rpi_ethernet_ips()
    return {"ip": ip}
