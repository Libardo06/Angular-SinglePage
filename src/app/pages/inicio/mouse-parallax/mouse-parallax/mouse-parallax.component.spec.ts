import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MouseParallaxComponent } from './mouse-parallax.component';

describe('MouseParallaxComponent', () => {
  let component: MouseParallaxComponent;
  let fixture: ComponentFixture<MouseParallaxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MouseParallaxComponent]
    });
    fixture = TestBed.createComponent(MouseParallaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
