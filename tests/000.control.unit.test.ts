import { initControl } from '../000.control/00.control.unit/buz/0.control.buzz';
import { ControlModel } from '../000.control/00.control.unit/control.model';
import ControlBit from '../000.control/00.control.unit/fce/control.bit';
import State from '../000.control/99.core/state';

describe('Control Unit', () => {
  it('should initialize control', async () => {
    // Mock dependencies
    const cpy: ControlModel = {} as ControlModel;
    const bal: ControlBit = { slv: jest.fn() } as unknown as ControlBit;
    const ste: State = {} as State;

    const result = await initControl(cpy, bal, ste);

    // Add assertions
    expect(bal.slv).toHaveBeenCalledWith({ intBit: { idx: "init-control" } });
    expect(result).toBe(cpy);
  });
});
