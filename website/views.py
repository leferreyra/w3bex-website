from django.shortcuts import render_to_response
from website.models import *
from django.template import RequestContext


def index(request):

    return render_to_response('index.html', {}, context_instance=RequestContext(request))


def send_project(request):
	

