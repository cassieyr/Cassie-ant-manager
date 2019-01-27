import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { HomezComponent } from './homez.component';

describe('HomezComponent', () => {
  let component: HomezComponent;
  let fixture: ComponentFixture<HomezComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomezComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomezComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
