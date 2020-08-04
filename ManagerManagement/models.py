from django.db import models
#from CompanyManagement.models import Company
from EmployeeManagement.models import Employee
from FormManagement.models import Form
from PayslipManagement.models import Payslip
# Create your models here.
class Manager(models.Model):
    EmployeeID      =models.ForeignKey('EmployeeManagement.Employee',on_delete=models.CASCADE,)

# for phase 2
    # def Manager_AddEmployeeByFile(self):
    #     pass
    # def Manager_AddEmployeeManual(self):
    #     pass
    # def Manager_DeleteEmployee(self):
    #     pass
    # def Manager_EditEmployee(self):
    #     pass
    def Manager_ShowEmployee(self):
        obj=Employee.objects.get(ID=self.EmployeeID)
        emps=Employee.objects.filter(CompanyID=obj.CompanyID)
        return emps;

    def Manager_AddField(self,name,type):
        obj=Employee.objects.get(ID=self.EmployeeID)
        comForm=Form.objects.get(CompanyID=obj.CompanyID)
        comForm.Form_AddField(name,type)

    def Manager_EditField(self,id,name):
        obj=Employee.objects.get(ID=self.EmployeeID)
        comForm=Form.objects.get(CompanyID=obj.CompanyID)
        comForm.Form_EditField(id,name)

    def Manager_DeleteField(self,id):
        obj=Employee.objects.get(ID=self.EmployeeID)
        comForm=Form.objects.get(CompanyID=obj.CompanyID)
        comForm.Form_DeleteField(id)

    def Manager_AddPayslipByFile(self):
        pass

    def Manager_AddPayslipManual(self,empId,date,data):
        obj=Employee.objects.get(ID=self.EmployeeID)
        #LastModifiedDate
        #PayslipID
        #without using payslip functions
        pay=Payslip(CompanyID=obj.CompanyID,Date=date,EmployeeID=empId,LastModifiedDate="time",Data=data)
        p.save()

    def Manager_EditPayslip(self,payId,empId,date,data):
        #without using payslip functions
        obj=Employee.objects.get(ID=self.EmployeeID)
        pay=Payslip(PayslipID=payId,CompanyID=obj.CompanyID,Date=date,EmployeeID=empId,LastModifiedDate="time",Data=data)
        p.save()

    def Manager_DeletePayslip(payId):
        obj=Payslip.objects.get(PayslipID=payId)
        obj.delete()

    def Manager_GetCompanyID(self):
        obj=Employee.objects.get(ID=self.EmployeeID)
        return obj.CompanyID

    def Manager_ShowForm(self):
        form=Form.objects.get(CompanyID=self.Manager_GetCompanyID())
        return form.Form_GetForm()

    def Manager_CheckPayslipField(self):
        #don't know
        pass
