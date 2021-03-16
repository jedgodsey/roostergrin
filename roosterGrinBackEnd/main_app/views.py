from django.shortcuts import render
from .models import Content
from django.http import HttpResponse
import json

def home(request):
    return HttpResponse('hitting it')

def get_content(request, location):
    content = Content.objects.get(location=location)
    found_content = {
        'id': content.id,
        'location': content.location,
        'title': content.title,
        'text': content.text
    }
    response = json.dumps(found_content)
    return HttpResponse(response, content_type='text/json')


def update_content(request, location):
    new_content = json.loads(request.body)
    found_content = Content.objects.get(location=location)
    new_content['id'] = found_content.id
    print('new content: ', new_content)

    updated_content = Content(new_content)
    print('updated content: ', updated_content)

    # new_content = Content(json.loads(request.body))
    updated_content.save()
    print('four')
    return HttpResponse(updated_content, content_type='text/json')
