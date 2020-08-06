from django.shortcuts import render
from django.http import JsonResponse
from .models import Company


# Create your views here.
def CompanyAdd_view(request,name):
    obj=Company.objects.get(Name=name)
    data={
        'name':obj.Name,
        'max':obj.MaxEmployee
    }
    return JsonResponse(data)
