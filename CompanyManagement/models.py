from django.db import models
from ManagerManagement.models import Manager
from FormManagement.models import Form

class Company(models.Model):
	ID 			= models.UUIDField(primary_key=True,)
	Name 		= models.CharField(max_length=100,)
	ManagerID	= models.ForeignKey('ManagerManagement.Manager',on_delete=models.CASCADE,)
	FormID 		= models.ForeignKey('FormManagement.Form',on_delete=models.CASCADE,)
	MaxEmployee = models.DecimalField(max_digits=10, decimal_places=0,)

	def Company_GetFormID(self):
		pass

	def Company_GetProfile(self):
		pass

	def Company_CheckMaxEmployee(self):
		pass