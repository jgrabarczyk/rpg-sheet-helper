import { Observable, of } from 'rxjs';

export type DialogOpenSpy = {
  open: jasmine.Spy<jasmine.Func>;
};

export type DialogCloseSpy = {
  close: jasmine.Spy<jasmine.Func>;
};

export function dialogClose(): DialogCloseSpy {
  return {
    close: jasmine.createSpy('close')
  };
}

export function dialogOpen(afterCloseData: unknown): DialogOpenSpy {
  return {
    open: jasmine.createSpy().and.returnValue({
      afterClosed: () => of(afterCloseData)
    })
  };
}

type AfterClosedSpy = {
  afterClosed: () => Observable<unknown>;
};

export function dialogOpenReturnMultipleValues(afterCloseData: unknown[]): DialogOpenSpy {
  const values: AfterClosedSpy[] = afterCloseData.map(data => ({ afterClosed: () => of(data) }));
  return { open: jasmine.createSpy().and.returnValues(...values) };
}
