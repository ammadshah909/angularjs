import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Studenttables } from './studenttables';

describe('Studenttables', () => {
  let component: Studenttables;
  let fixture: ComponentFixture<Studenttables>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Studenttables],
    }).compileComponents();

    fixture = TestBed.createComponent(Studenttables);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
