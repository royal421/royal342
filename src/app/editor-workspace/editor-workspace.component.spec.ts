import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { IgxButtonDirective, IgxIconComponent, IGX_LIST_DIRECTIVES, IgxAvatarComponent, IGX_CHIPS_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_SLIDER_DIRECTIVES, IgxIconButtonDirective, IGX_ACCORDION_DIRECTIVES, IGX_EXPANSION_PANEL_DIRECTIVES, IGX_BUTTON_GROUP_DIRECTIVES, IgxSwitchComponent, IGX_SELECT_DIRECTIVES } from 'igniteui-angular';
import { EditorWorkspaceComponent } from './editor-workspace.component';

describe('EditorWorkspaceComponent', () => {
  let component: EditorWorkspaceComponent;
  let fixture: ComponentFixture<EditorWorkspaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditorWorkspaceComponent, NoopAnimationsModule, FormsModule, ReactiveFormsModule, IgxButtonDirective, IgxIconComponent, IGX_LIST_DIRECTIVES, IgxAvatarComponent, IGX_CHIPS_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_SLIDER_DIRECTIVES, IgxIconButtonDirective, IGX_ACCORDION_DIRECTIVES, IGX_EXPANSION_PANEL_DIRECTIVES, IGX_BUTTON_GROUP_DIRECTIVES, IgxSwitchComponent, IGX_SELECT_DIRECTIVES]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditorWorkspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
