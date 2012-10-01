
$(document).ready(function(){

	var stage = new Kinetic.Stage({
	
		container: "workflow-canvas",
		width: 460,
		height: 270
	
	});	

	var layer = new Kinetic.Layer();

	var line = new Kinetic.Line({
		points: [100,100,200,200],
		stroke: "red",
		strokeWidth: "15"
	});

	layer.add(line);
	stage.add(layer);

});

