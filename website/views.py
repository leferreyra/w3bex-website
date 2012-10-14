from django.shortcuts import render_to_response
from website.models import *
from django.template import RequestContext
from django.http import HttpResponse
from django.core.mail import send_mail
from random import sample

def index(request):
    
    imgs = ['space.jpg', 'green.jpeg', 'river.jpeg', 'colors.jpeg']
    splash_background_image = sample(imgs, 1)[0];

    return render_to_response('index.html', { "splash_background":splash_background_image }, context_instance=RequestContext(request))


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
		
		mailbody = 'Nombre: %s\nEmpresa:: %s\nProyecto: %s\n' % (request.POST['nombre'],request.POST['empresa'],request.POST['descripcion'])
		
		if request.POST['mailcopy'] == 'on':
			send_mail('Copia del proyecto enviado a w3bex.com', 
				mailbody,
				'noreply@w3bex.com', 
				[request.POST['email']]);
		
		# Enviar una notificacion al correo
		send_mail('Nuevo proyecto recibido.', mailbody, 'noreply@w3bex.com' , ['leferreyra@gmail.com']);
	else:
		return 	HttpResponse("ERROR");
	
	return HttpResponse("OK");

