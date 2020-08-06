from django.shortcuts import render
from django.core.serializers import serialize
from django.http import JsonResponse
from .models import Manager
from EmployeeManagement.models import Employee
from PayslipManagement.models import Payslip

#don't check token
def EmployeeList_view(request,token,id):

    manager=Manager.objects.get(EmployeeID=Employee.objects.get(ID=id))
    employees=list(manager.Manager_ShowEmployee())
    data={}
    i=0
    data['count']=len(employees)
    for emp in employees:
        data[str(i)]={
            'Name':emp.Name,
            'LastName':emp.LastName,
            'PersonnelCode':emp.PersonnelCode
        }
        i=i+1
    return JsonResponse(data)

def DeletePayslip_view(request,payslipID,token,id):
    manager=Manager.objects.get(EmployeeID=Employee.objects.get(ID=id))
    manager.Manager_DeletePayslip(payslipID)
    return JsonResponse({'ACK':1})
    #return Ack

def ShowPayslip_view(request,employeeID,date,token,id):
    manager=Manager.objects.get(EmployeeID=Employee.objects.get(ID=id))
    emp=Employee.objects.get(EmployeeID=employeeID)
    data={
        'PayslipID':Payslip.objects.get(EmployeeID=employeeID,Date=date).PayslipID,
        'Data':emp.Employee_GetPayslip()
        
    }
    return JsonResponse(data)



def GetId_view (request,name):
    emp=Employee.objects.get(Name=name)
    data={
        'id':emp.ID
    }
    return JsonResponse(data)
