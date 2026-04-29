from fastapi import APIRouter
from app.api.v1.endpoints import (
    auth, landingzones, accounts, policies, compliance, cost, security, network, dashboard
)

api_router = APIRouter()
api_router.include_router(auth.router, prefix="/auth", tags=["auth"])
api_router.include_router(landingzones.router, prefix="/landingzones", tags=["landingzones"])
api_router.include_router(accounts.router, prefix="/accounts", tags=["accounts"])
api_router.include_router(policies.router, prefix="/policies", tags=["policies"])
api_router.include_router(compliance.router, prefix="/compliance", tags=["compliance"])
api_router.include_router(cost.router, prefix="/cost", tags=["cost"])
api_router.include_router(security.router, prefix="/security", tags=["security"])
api_router.include_router(network.router, prefix="/network", tags=["network"])
api_router.include_router(dashboard.router, prefix="/dashboard", tags=["dashboard"])
