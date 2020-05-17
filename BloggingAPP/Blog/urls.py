from rest_framework import routers
from .api import BlogViewSet,BlogViewSet2

router = routers.DefaultRouter()
router.register('api/Blog', BlogViewSet, 'Blog')
router.register('api/Blogs2', BlogViewSet2, 'Blog2')


urlpatterns =  router.urls