import Base from './base.page';

describe('Smoke', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it('should confirm all initial elements have loaded correctly', async () => {
    await expect(Base.Elements.machineState.atIndex(0)).toBeVisible();
    await expect(Base.Elements.instructions).toBeVisible();
    await expect(Base.Elements.calculateHealthBtn).toBeVisible();
    await expect(Base.Elements.resetMachineDataBtn).toBeVisible();
    await expect(Base.Elements.logPartTab).toBeVisible();
  });
});
