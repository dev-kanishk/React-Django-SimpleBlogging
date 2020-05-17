from rest_framework import serializers
from Blog.models import Blog

class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields=['name', 'title','content','created_at','id']
        