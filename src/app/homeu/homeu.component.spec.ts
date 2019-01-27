import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeuComponent } from './homeu.component';

describe('HomeuComponent', () => {
  let component: HomeuComponent;
  let fixture: ComponentFixture<HomeuComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
