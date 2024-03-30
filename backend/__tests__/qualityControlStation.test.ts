import {calculatePartHealth, calculateMachineHealth} from '../calculations';
import {
  MachineType,
  QualityControlStationPart,
  partInfo,
} from '../../native-app/data/types';

describe('Quality Control Station', () => {
  describe('Part Health', () => {
    it('should calculate part health correctly', () => {
      const machineName: MachineType = MachineType.QualityControlStation;
      const part: partInfo = {name: QualityControlStationPart.CameraCalibration, value: 0.25};
      const expectedHealth = 62.5;
  
      const result = calculatePartHealth(machineName, part);
      expect(result).toBe(expectedHealth);
    });
  });
  
  describe('Machine Health', () => {
    it('should calculate machine health correctly', () => {
      const machineName: MachineType = MachineType.QualityControlStation;
      const parts = [
        {name: QualityControlStationPart.CameraCalibration, value: 0.25},
        {name: QualityControlStationPart.CriteriaSettings, value: 4.5},
        {name: QualityControlStationPart.LightIntensity, value: 1.0},
        {name: QualityControlStationPart.SoftwareVersion, value: 13.0},
      ];
      const expectedHealth = 15.625;
  
      const result = calculateMachineHealth(machineName, parts);
      expect(result).toBe(expectedHealth);
    });
  });
});
