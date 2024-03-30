export default class Elements {
  // Machine State Screen
  get machineState() {
		return element(by.text('Machine State'));
	}

  get instructions() {
		return element(by.text('Please log a part to check machine health'));
	}

  get calculateHealthBtn() {
		return element(by.text('Calculate Health'));
	}

  get resetMachineDataBtn() {
		return element(by.text('Reset Machine Data'));
	}

  // Log Part Screen
  get logPart() {
		return element(by.text('Log Part'));
	}

  get machineNameField() {
		return element(by.text('Machine Name'));
	}

  get partNameField() {
		return element(by.text('Part Name'));
	}

  get selectMachineEntry() {
		return element(by.text('Select a machine'));
	}

  get partValueField() {
		return element(by.text('Part Value'));
	}

  get partValueEntry() {
		return element(by.text('Enter part value'));
	}

  get saveBtn() {
		return element(by.text('Save'));
	}
}
