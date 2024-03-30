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
  get logPartTab() {
		return element(by.text('Log Part'));
	}
}
