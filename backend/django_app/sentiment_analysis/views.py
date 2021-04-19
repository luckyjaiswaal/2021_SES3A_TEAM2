from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
import json
from django.http import HttpResponse

# Create your views here.
from django.views.decorators.csrf import csrf_exempt
@csrf_exempt
def my_api(request):
    dic = {}
    if request.method == 'GET':
        dic['message'] = 0
        return HttpResponse(json.dumps(dic))
    else:
        dic['message'] = 'error'
        return HttpResponse(json.dumps(dic, ensure_ascii=False))
