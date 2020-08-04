from django.db import models
from .models import Company

class Employee(models.Model):
	ID 			  = models.UUIDField(primary_key=True,)
	Name  		  = models.CharField(max_length=100)
	LastName 	  = models.CharField(max_length=100)
	CompanyID 	  = models.ForeignKey('Company',on_delete=models.CASCADE,)
	PersonnelCode = models.DecimalField(max_digits=10, decimal_places=0,)
	AccountNumber = models.DecimalField(max_digits=10, decimal_places=0,)
	PhoneNumber   = models.DecimalField(max_digits=10, decimal_places=0,)
	EmailAddress  = models.EmailField(max_length=254)
	Token 		  = models.CharField(max_length=200)

	def Employee_SetToken(self):
		pass 

	def Employee_DeleteToken(self):
		pass

	def Employee_GetPayslip(self):
		pass

	def Employee_GetReport(self):
		pass

	def Employee_Create(self):
		pass

	def Employee_Edit(self):
		pass

	def Employee_GetProfile(self):
		pass

	def Employee_CountEmployees(self):
		pass