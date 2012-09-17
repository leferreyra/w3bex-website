
$(document).ready(function(){

	// Setting up paper

	var canvas = document.getElementById('workflow-canvas');
	paper.setup(canvas);


	// Drawing the gray donnut

	var radius1 = 230 / 2;
	var radius2 = radius1 * 0.55;
	var marginLeft = 20;

	var c1 = new paper.Point( radius1 + marginLeft, paper.view.center.y ); // c1 is the far left circle center.
	var c2 = new paper.Point( c1.x + 164, c1.y )
	var outerCircle = new paper.Path.Circle( c1 , radius1 );
	var innerCircle = new paper.Path.Circle( c1, radius2 );
	
	var grayCircle = new paper.CompoundPath([outerCircle,innerCircle]);
	grayCircle.fillColor = new paper.RGBColor( 0,0,0, 0.1);


	// Drawing a single step

	var stepsRadius1 = radius1 - 7;
	var stepsRadius2 = radius2 - 7;

	var k = Math.PI / 180;

	p1 = new paper.Point( c1.x + stepsRadius1 * Math.cos(60*k + Math.PI) , c1.y + stepsRadius1 * Math.sin(60*k + Math.PI));
	p2 = new paper.Point( c1.x , c1.y + stepsRadius1 * Math.sin(90*k + Math.PI));
	p3 = new paper.Point( c1.x + stepsRadius1 * Math.cos(120*k + Math.PI) , c1.y + stepsRadius1 * Math.sin(120*k + Math.PI));
	p4 = new paper.Point( c1.x + stepsRadius2 * Math.cos(120*k + Math.PI) , c1.y + stepsRadius2 * Math.sin(120*k + Math.PI));
	p5 = new paper.Point( c1.x , c1.y + stepsRadius2 * Math.sin(90*k + Math.PI));
	p6 = new paper.Point( c1.x + stepsRadius2 * Math.cos(60*k + Math.PI) , c1.y + stepsRadius2 * Math.sin(60*k + Math.PI));

	var topArc = paper.Path.Arc(p1, p2, p3);
	var bottomArc = paper.Path.Arc(p4, p5, p6);

	var step = new paper.Path();
	step.addSegments(topArc.segments);
	step.addSegments(bottomArc.segments);

	step.closed = 'true';


	// Drawing the other steps

	var step2 = step.clone();
	var step3 = step.clone();
	var step4 = step.clone();
	var step5 = step.clone();
	
	step2.rotate(-60, c1);
	step3.rotate(-120, c1);
	step4.rotate(-180, c1);
	step5.rotate(-240, c1);


	// Drawing second circle steps

	var step6 = step2.clone();
	step6.translate(new paper.Point( 164, 0 ));

	var step7 = step6.clone();
	var step8 = step6.clone();
	
	step7.rotate(60, c2);
	step8.rotate(120, c2);

	var step9 = step3.clone();
	step9.translate(new paper.Point( 328, 0 ));


	// Add the step shapes to a list

	var steps = [step, step2, step3, step4, step5, step6, step7, step8, step9];
	
	var stepColors = ["1a1a1a","0055d4","00aad4","aad400","44aa00","ffcc00","ff0000","ff6600","800080"];


	// Asign colors
	
	$.each(steps, function(index, s){
		s.fillColor = '#' + stepColors[index];
	});


	// Insert text (number) in the center of the Circle (1).

	var number = new paper.PointText(new paper.Point(c1.x - 17, c1.y + 26));
	number.content = "1";

	number.characterStyle = {
		fontSize: 72,
		fillColor: stepColors[0],
		font: "exo",
		strokeColor: stepColors[0],
		strokeWidth: 5
	}


	// Trigger drawing

	paper.view.draw();

});

