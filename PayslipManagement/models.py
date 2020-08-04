from django.db import models
from django.contrib.postgres.fields import JSONField
from CompanyManagement.models import Company
from EmployeeManagement.models import Employee

class Payslip(models.Model):
	PayslipID  		 = models.UUIDField(primary_key=True,)
	CompanyID  		 = models.ForeignKey('CompanyManagement.Company',on_delete=models.CASCADE,)
	Date 	   		 = models.DateField(auto_now=False, auto_now_add=True,)
	EmployeeID 		 = models.ForeignKey('EmployeeManagement.Employee',on_delete=models.CASCADE,)
	LastModifiedDate = models.DateField(auto_now=True, auto_now_add=False,)
	Data 			 = JSONField()

	def Payslip_Add(self):
		pass

	def Payslip_Edit(self):
		pass

	def Payslip_Show(self):
		pass