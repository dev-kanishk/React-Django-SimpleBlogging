from rest_framework import serializers
from leads.models import Blog

class LeadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields=['name', 'title','content','created_at','id']
        