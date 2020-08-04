from django.db import models
from django.contrib.postgres.fields import JSONField
from .models import Company,Employee

class Payslip(models.Model):
	PayslipID  = models.UUIDField(primary_key=True,)
	CompanyID  = models.ForeignKey('Company',on_delete=models.CASCADE,)
	Date 	   = models.DateField(auto_now=False, auto_now_add=True,)
	EmployeeID = models.ForeignKey('Employee',on_delete=models.CASCADE,)
	LastModifiedDate = models.DateField(auto_now=True, auto_now_add=False,)
	Data 			 = JSONField()

	def Payslip_Add(self):
		pass

	def Payslip_Edit(self):
		pass

	def Payslip_Show(self):
		pass