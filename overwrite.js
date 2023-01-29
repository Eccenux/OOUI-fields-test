// overwrite
OO.ui.InputWidget.prototype.onEdit = function () {
	var widget = this;
	if (!this.isDisabled()) {
		// Allow the stack to clear so the value will be updated
		setTimeout(function () {
			//widget.setValue( widget.$input.val() );
			var value = widget.$input.val();
			if (!value || !value.length) {
				console.warn('[InputWidget]', '[onEdit]', 'empty value');
			}
			widget.setValue(value);
		});
	}
};