from fastapi import APIRouter
router = APIRouter()
@router.get('/')
def get_accounts():
    return {'status': 'ok'}
