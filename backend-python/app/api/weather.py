from fastapi import APIRouter, HTTPException
import requests

router = APIRouter()

@router.get("/{city}")
async def get_weather(city: str):
    """
    Obter informações de clima (exemplo de integração com API externa)
    Em produção, use uma API real como OpenWeatherMap
    """
    
    # Simulação de dados de clima
    weather_data = {
        "city": city,
        "temperature": 25,
        "condition": "Ensolarado",
        "humidity": 60,
        "wind_speed": 15,
        "description": "Céu limpo com algumas nuvens"
    }
    
    return weather_data

@router.get("/forecast/{city}")
async def get_forecast(city: str):
    """Obter previsão do tempo para os próximos dias"""
    
    forecast = {
        "city": city,
        "forecast": [
            {"day": "Segunda", "temp": 26, "condition": "Ensolarado"},
            {"day": "Terça", "temp": 24, "condition": "Parcialmente nublado"},
            {"day": "Quarta", "temp": 22, "condition": "Chuvoso"},
            {"day": "Quinta", "temp": 23, "condition": "Nublado"},
            {"day": "Sexta", "temp": 25, "condition": "Ensolarado"}
        ]
    }
    
    return forecast
