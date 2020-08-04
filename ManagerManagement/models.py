from django.db import models
#from CompanyManagement.models import Company
#from EmployeeManagement.models import Employee
# Create your models here.
class Manager(models.Model):
    EmployeeID      =models.ForeignKey('EmployeeManagement.Employee',on_delete=models.CASCADE,default=0,)

    def Manager_AddEmployeeByFile(self):
        pass
    def Manager_AddEmployeeManual(self):
        pass
    def Manager_DeleteEmployee(self):
        pass
    def Manager_EditEmployee(self):
        pass
    def Manager_ShowEmployee(self):
        pass
    def Manager_AddField(self):
        pass
    def Manager_EditField(self):
        pass
    def Manager_DeleteField(self):
        pass
    def Manager_AddPayslipByFile(self):
        pass
    def Manager_AddPayslipManual(self):
        pass
    def Manager_EditPayslip(self):
        pass
    def Manager_DeletePayslip(self):
        pass
    def Manager_GetCompanyID(self):
        pass
    def Manager_ShowForm(self):
        pass
    def Manager_CheckPayslipField(self):
        pass
