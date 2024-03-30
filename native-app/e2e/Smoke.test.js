describe('Smoke', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it('should confirm all elements have loaded correctly', async () => {
    await expect(element(by.text('Machine State')).atIndex(0)).toBeVisible();
    await expect(element(by.text('Please log a part to check machine health'))).toBeVisible();
    await expect(element(by.text('Calculate Health'))).toBeVisible();
    await expect(element(by.text('Reset Machine Data'))).toBeVisible();
  });
});
