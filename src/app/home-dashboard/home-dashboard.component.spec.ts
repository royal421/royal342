import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IgxButtonDirective, IgxIconComponent, IGX_CARD_DIRECTIVES, IgxAvatarComponent, IGX_LIST_DIRECTIVES } from 'igniteui-angular';
import { HomeDashboardComponent } from './home-dashboard.component';

describe('HomeDashboardComponent', () => {
  let component: HomeDashboardComponent;
  let fixture: ComponentFixture<HomeDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeDashboardComponent, NoopAnimationsModule, FormsModule, ReactiveFormsModule, HttpClientTestingModule, IgxButtonDirective, IgxIconComponent, IGX_CARD_DIRECTIVES, IgxAvatarComponent, IGX_LIST_DIRECTIVES]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
