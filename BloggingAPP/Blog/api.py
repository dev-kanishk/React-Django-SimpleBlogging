from .models import Blog
from rest_framework import viewsets, permissions
from .serializer import BlogSerializer


class BlogViewSet2(viewsets.ModelViewSet):
    
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = BlogSerializer
    def get_queryset(self):
        print("yup lead2")
        return Blog.objects.all().order_by('created_at').reverse()


class BlogViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = BlogSerializer

    def get_queryset(self):
        print("REQUET")
        # qset =  Lead.objects.all().order_by('created_at').reverse()
        # print(qset)
        # return qset
        query_result = Blog.objects.filter(owner = self.request.user).all()
        # return self.request.user.leads.all()
        return query_result
        # return self.request.user.leads.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)