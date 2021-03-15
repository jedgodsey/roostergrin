from django.shortcuts import render
from django.http import HttpResponse

def home(request):
    return HttpResponse('hitting it')

def get_content(request):
    content = Content.objects.get(location=request.location)
    found_content = {
        'id': content.id,
        'location': content.location,
        'title': content.title,
        'text': content.text
    }
    response = json.dumps(found_content)
    return HttpResponse(response, content_type='text/json')


def update_content(request):
    found_content = Content.objects.get(location=request.location)
    new_content = Content(json.loads(request.body))
    updated_content = new_content.save()
    return HttpResponse(updated_content, content_type='text/json')
