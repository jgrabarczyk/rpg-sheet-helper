import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackpackComponent, TableData } from './backpack.component';
interface TestType {
  wierdKey: string;
}

const tableData: TableData<TestType> = {
  data: [{ wierdKey: 'a' }, { wierdKey: 'b' }],
  headers: [{ key: 'wierdKey', value: 'headerText' }]
};

describe('BackpackComponent', () => {
  let component: BackpackComponent<TestType>;
  let fixture: ComponentFixture<BackpackComponent<TestType>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackpackComponent<TestType>]
    }).compileComponents();

    fixture = TestBed.createComponent(BackpackComponent<TestType>);
    component = fixture.componentInstance;
    component.table = tableData;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
