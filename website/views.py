from django.shortcuts import render_to_response
from website.models import *
from django.template import RequestContext
from django.http import HttpResponse
from django.core.mail import send_mail

def index(request):

    return render_to_response('index.html', {}, context_instance=RequestContext(request))


def send_project(request):
	
	if request.method == 'POST':
		
		new_project = Project(	nombre = request.POST['nombre'],
					empresa = request.POST['empresa'],
					telefono = request.POST['telefono'],
					email = request.POST['email'],
					descripcion = request.POST['descripcion'],
					tiempo = request.POST['tiempo'],
					presupuesto = request.POST['presupuesto']  );

		new_project.save();
		
		
		# Si la opcion esta activada, enviamos una copia al email.
		#if request.POST['mailcopy'] == 'on':
		#	
		#	send_mail('Copia del proyecto enviado a w3bex.com', 
		#		"Nombre: %s\nEmpresa: %s\nTelefono: %s\nProyecto: %s" % (nombre,empresa,telefono,descripcion), 
		#		'noreply@w3bex.com', 
		#		[email]);
		
	else:

		return 	HttpResponse("ERROR");

	return HttpResponse("OK");

