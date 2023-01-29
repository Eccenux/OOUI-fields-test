var fieldset = new OO.ui.FieldsetLayout({
	label: 'Test numeric field'
});
$("#hook").append(fieldset.$element);

// HorizontalLayout with a text input and a label.
var layout = new OO.ui.HorizontalLayout({
	items: [
		new OO.ui.LabelWidget({
			label: 'NumberInputWidget'
		}),
		new OO.ui.NumberInputWidget(),
	]
});
$("#hook").append(layout.$element);

var layout = new OO.ui.HorizontalLayout({
	items: [
		new OO.ui.LabelWidget({
			label: 'NumberInputWidget'
		}),
		new OO.ui.NumberInputWidget({
			value: '12'
		}),
		new OO.ui.LabelWidget({
			label: '(with start value)'
		}),
	]
});
$("#hook").append(layout.$element);

var layout = new OO.ui.HorizontalLayout({
	items: [
		new OO.ui.LabelWidget({
			label: 'NumberInputWidget'
		}),
		new OO.ui.NumberInputWidget({
			min: 0,
			max: 10,
			step: 2,
		}),
		new OO.ui.LabelWidget({
			label: '(step = 2)'
		}),
	]
});
$("#hook").append(layout.$element);