from django.db import models
from django.contrib.postgres.fields import JSONField
# from CompanyManagement.models import Company
# from EmployeeManagement.models import Employee

class Payslip(models.Model):
	PayslipID  		 = models.UUIDField(primary_key=True,)
	CompanyID  		 = models.ForeignKey('CompanyManagement.Company',on_delete=models.CASCADE,default=0)
	Date 	   		 = models.DateField(auto_now=False, auto_now_add=True,)
	EmployeeID 		 = models.ForeignKey('EmployeeManagement.Employee',on_delete=models.CASCADE,default=0)
	LastModifiedDate = models.DateField(auto_now=True, auto_now_add=False,)
	Data 			 = JSONField()

	def Payslip_Add(self,employeeID,date,data):
		employee = Employee.objects.get(ID=self.EmployeeID)
		payslip = Payslip(CompanyID=employee.CompanyID,Date=date,EmployeeID=employeeID,LastModifiedDate="time",Data=data)
		payslip.save()

	def Payslip_Edit(self,payslipID,employeeID,date,data):
		employee = Employee.objects.get(ID=self.EmployeeID)
		payslip = Payslip(PayslipID=payslipID,CompanyID=employee.CompanyID,Date=date,EmployeeID=employeeID,LastModifiedDate="time",Data=data)
		payslip.save()

	def Payslip_Show(self):
		return self.Data