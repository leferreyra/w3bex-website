from django.db import models

# Model to store, every project sent.

class Project(models.Model):
	
	nombre = models.CharField(max_length=100);
	empresa = models.CharField(max_length=50, blank=True);
	telefono = models.CharField(max_length=50);
	email = models.EmailField();
	descripcion = models.TextField();
	presupuesto = models.IntegerField();
	tiempo = models.IntegerField();

	def __unicode__(self):
		
		if self.empresa != '':
			return self.empresa
		else:
			return self.nombre
		

