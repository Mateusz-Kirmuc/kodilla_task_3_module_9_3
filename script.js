var text =
	'Velociraptor is a genus of herbivorous \
	ceratopsid dinosaur that first appeared \
	during the late Maastrichtian stage of the \
	late Cretaceous period.';

var dinosaur = 'triceratops'.toUpperCase();

var new_text = text.replace('Velociraptor', dinosaur);

console.log(new_text.substr(0, new_text.length / 2));
