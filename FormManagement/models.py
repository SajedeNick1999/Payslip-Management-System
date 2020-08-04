from django.db import models
from django.contrib.postgres.fields import ArrayField

#from CompanyManagement.models import Company
# Create your models here.

class Form(models.Model):
    ID 			  = models.UUIDField(primary_key=True,)
    CompanyID 	  = models.ForeignKey('CompanyManagement.Company',on_delete=models.CASCADE,)
    Field         =ArrayField(ArrayField(models.CharField(max_length=100)))

    def Form_AddField(self):
        pass
    def Form_EditField(self):
        pass
    def Form_DeleteField(self):
        pass
    def Form_GetForm(self):
        pass
