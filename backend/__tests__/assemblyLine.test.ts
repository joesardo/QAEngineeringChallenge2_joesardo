import {calculatePartHealth, calculateMachineHealth} from '../calculations';
import {
  MachineType,
  AssemblyLinePart,
  partInfo,
} from '../../native-app/data/types';

describe('Assembly Line', () => {
  describe('Part Health', () => {
    it('should calculate part health correctly', () => {
      const machineName: MachineType = MachineType.AssemblyLine;
      const part: partInfo = {name: AssemblyLinePart.Speed, value: 0.1};
      const expectedHealth = 100;
  
      const result = calculatePartHealth(machineName, part);
      expect(result).toBe(expectedHealth);
    });
  });
  
  describe('Machine Health', () => {
    it('should calculate machine health correctly', () => {
      const machineName: MachineType = MachineType.AssemblyLine;
      const parts = [
        {name: AssemblyLinePart.AlignmentAccuracy, value: 34.0},
        {name: AssemblyLinePart.BeltSpeed, value: 9.5},
        {name: AssemblyLinePart.FittingTolerance, value: 9.0},
        {name: AssemblyLinePart.Speed, value: 0.1},
      ];
      const expectedHealth = 25;
  
      const result = calculateMachineHealth(machineName, parts);
      expect(result).toBe(expectedHealth);
    });
  });
});
