import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { IgxAvatarComponent, IgxIconComponent, IGX_INPUT_GROUP_DIRECTIVES, IgxButtonDirective, IgxBadgeComponent, IGX_LIST_DIRECTIVES } from 'igniteui-angular';
import { AICopilotComponent } from './ai-copilot.component';

describe('AICopilotComponent', () => {
  let component: AICopilotComponent;
  let fixture: ComponentFixture<AICopilotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AICopilotComponent, NoopAnimationsModule, FormsModule, ReactiveFormsModule, IgxAvatarComponent, IgxIconComponent, IGX_INPUT_GROUP_DIRECTIVES, IgxButtonDirective, IgxBadgeComponent, IGX_LIST_DIRECTIVES]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AICopilotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
