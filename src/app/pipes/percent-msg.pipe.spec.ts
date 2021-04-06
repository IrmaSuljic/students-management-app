import { PercentMsgPipe } from './percent-msg.pipe';

describe('PercentMsgPipe', () => {
  let pipe: any;

  beforeEach(() => {
    pipe = new PercentMsgPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('create msg - TO-DO', () => {
    const actual = pipe.transform(0, '-');
    const expected = '- TO-DO';
    expect(actual).toEqual(expected);
  });

  it('create msg - Completed', () => {
    const actual = pipe.transform(1, '-');
    const expected = '- Completed';
    expect(actual).toEqual(expected);
  });

  it('create msg - In Progress', () => {
    const actual = pipe.transform(0.5, '-');
    const expected = '- In Progress';
    expect(actual).toEqual(expected);
  });

  it('create msg In Progress', () => {
    const actual = pipe.transform(0.5);
    const expected = ' In Progress';
    expect(actual).toEqual(expected);
  });

  it('create msg empty string', () => {
    const actual = pipe.transform(20);
    const expected = '';
    expect(actual).toEqual(expected);
  });
});
