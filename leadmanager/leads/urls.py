from rest_framework import routers
from .api import LeadViewSet,LeadViewSet2

router = routers.DefaultRouter()
router.register('api/leads', LeadViewSet, 'leads')
router.register('api/leads2', LeadViewSet2, 'leads2')


urlpatterns =  router.urls