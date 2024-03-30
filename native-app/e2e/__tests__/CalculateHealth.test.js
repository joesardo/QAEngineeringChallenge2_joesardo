import Base from '../base.page';

// NOTE: This test should only be run on iOS, since it uses the .setColumnToValue() method, which is only supported for iOS.
// There is a workaround for Android, but I wanted to comply with the time restrictions and it would have taken longer to implement.

describe('Calculate Health', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  describe('Save Log Part Data', () => {
    it('should navigate to the log part tab', async () => {
      await Base.Elements.logPart.tap();
    });

    it('should enter machine name', async () => {
      await expect(Base.Elements.machineNameField).toBeVisible();
      await Base.Elements.selectMachineEntry.atIndex(0).tap();
      await element(by.type('UIPickerView')).setColumnToValue(0, 'Welding Robot');
      await Base.Elements.doneBtn.tap();
    });

    it('should enter part name', async () => {
      await expect(Base.Elements.partNameField).toBeVisible();
      await Base.Elements.selectMachineEntry.atIndex(0).tap();
      await element(by.type('UIPickerView')).setColumnToValue(0, 'Arc Stability');
      await Base.Elements.doneBtn.tap();
    });

    it('should enter part value', async () => {
      await expect(Base.Elements.partValueField).toBeVisible();
      // Could not validate this part of the form due to the following error from the native code:
      // First responder “(null)” does not conform to “UITextInput” protocol
      // await Base.Elements.partValueEntry.typeText('0.25');
    });

    it('should save form', async () => {
      await Base.Elements.saveBtn.tap();
    });
  });

  describe('Calculate Health & Reset Form', () => {
    it('should navigate back to machine state screen', async () => {
      await Base.Elements.machineState.tap();
    });

    it('should calculate health', async () => {
      await Base.Elements.calculateHealthBtn.tap();
    });

    it('should expect machine health scores to appear', async () => {
      await expect(Base.Elements.machineHealthScores).toBeVisible();
      await expect(element(by.text('Welding Robot'))).toBeVisible();
    });

    it('should reset form', async () => {
      await Base.Elements.resetMachineDataBtn.tap();

      await expect(Base.Elements.machineHealthScores).not.toBeVisible();
      await expect(element(by.text('Welding Robot'))).not.toBeVisible();
      await expect(Base.Elements.instructions).toBeVisible();
    });
  })
});