import {calculatePartHealth, calculateMachineHealth} from '../calculations';
import {
  MachineType,
  PaintingStationPart,
  partInfo,
} from '../../native-app/data/types';

describe('Painting Station', () => {
  describe('Part Health', () => {
    it('should calculate part health correctly', () => {
      const machineName: MachineType = MachineType.PaintingStation;
      const part: partInfo = {name: PaintingStationPart.NozzleCondition, value: 0.25};
      const expectedHealth = 62.5;
  
      const result = calculatePartHealth(machineName, part);
      expect(result).toBe(expectedHealth);
    });
  });
  
  describe('Machine Health', () => {
    it('should calculate machine health correctly', () => {
      const machineName: MachineType = MachineType.PaintingStation;
      const parts = [
        {name: PaintingStationPart.FlowRate, value: 25.0},
        {name: PaintingStationPart.Pressure, value: 43.5},
        {name: PaintingStationPart.ColorConsistency, value: 0.8},
        {name: PaintingStationPart.NozzleCondition, value: 10.0},
      ];
      const expectedHealth = 43.75;
  
      const result = calculateMachineHealth(machineName, parts);
      expect(result).toBe(expectedHealth);
    });
  });
});
