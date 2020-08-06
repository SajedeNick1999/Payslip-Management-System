from django.shortcuts import render
from django.core.serializers import serialize
from django.http import JsonResponse
from .models import Manager
from EmployeeManagement.models import Employee
from PayslipManagement.models import Payslip

#don't check token
def EmployeeList_view(request,token,id):

    manager=Manager.objects.get(EmployeeID=Employee.objects.get(ID=id))
    if manager == None:
        return JsonResponse({'ACK':0,'status':404}) # user not found
    elif manager.EmployeeID.Token != token:
        return JsonResponse({'ACK':0,'status':403}) # user is not authorized
    else:
        employees=list(manager.Manager_ShowEmployee())
        data={}
        i=0
        data['count']=len(employees)
        data['status']=200
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
    if manager == None:
        return JsonResponse({'ACK':0,'status':404}) # user not found
    elif manager.EmployeeID.Token != token:
        return JsonResponse({'ACK':0,'status':403}) # user is not authorized
    else:
        manager.Manager_DeletePayslip(payslipID)
        return JsonResponse({'ACK':1,'status':200})


def ShowPayslip_view(request,employeeID,date,token,id):
    manager=Manager.objects.get(EmployeeID=Employee.objects.get(ID=id))
    if manager == None:
        return JsonResponse({'ACK':0,'status':404}) # user not found
    elif manager.EmployeeID.Token != token:
        return JsonResponse({'ACK':0,'status':403}) # user is not authorized
    else:
        emp=Employee.objects.get(EmployeeID=employeeID)
        data={
            'PayslipID':Payslip.objects.get(EmployeeID=employeeID,Date=date).PayslipID,
            'Data':emp.Employee_GetPayslip(),
            'status':200
        }
        return JsonResponse(data)



def GetId_view (request,name):
    emp=Employee.objects.get(Name=name)
    data={
        'id':emp.ID
    }
    return JsonResponse(data)

def AddPayslipManual_view(request):
    obj=request.GET.dict()
    manager=Manager.objects.get(EmployeeID=Employee.objects.get(ID=obj['id']))
    if manager == None:
        return JsonResponse({'ACK':0,'status':404}) # user not found
    elif manager.EmployeeID.Token != obj['token']:
        return JsonResponse({'ACK':0,'status':403}) # user is not authorized
    else:
        manager.Manager_AddPayslipManual(obj['EmployeeID'],obj['Date'],obj['JsonData'])
        return JsonResponse({'ACK':1,'status':200})

def EditPayslip_view(request):
    obj=request.GET.dict()
    manager=Manager.objects.get(EmployeeID=Employee.objects.get(ID=obj['id']))
    if manager == None:
        return JsonResponse({'ACK':0,'status':404}) # user not found
    elif manager.EmployeeID.Token != obj['token']:
        return JsonResponse({'ACK':0,'status':403}) # user is not authorized
    else:
        manager.Manager_EditPayslip(obj['PayslipID'],obj['JsonData'])
        return JsonResponse({'ACK':1,'status':200})
