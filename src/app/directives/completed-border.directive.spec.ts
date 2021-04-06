import { CompletedBorderDirective } from './completed-border.directive';

describe('CompletedBorderDirective', () => {
  it('should create an instance', () => {
    let elRefMock = {
      nativeElement: document.createElement('div'),
    };

    const directive = new CompletedBorderDirective(elRefMock);
    expect(directive).toBeTruthy();
  });
});
