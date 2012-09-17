from django.db import models


# Model to store, every project sent.

class Project(models.Model):
	
	nombre = models.CharField(max_length=100);
	empresa = models.CharField(max_length=50, blank=True);
	telefono = models.CharField(max_length=50);
	email = models.EmailField();
	descripcion = models.TextField();

	def __unicode__(self):
		
		return self.nombre;

