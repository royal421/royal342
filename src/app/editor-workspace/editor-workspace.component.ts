import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IGX_ACCORDION_DIRECTIVES, IGX_BUTTON_GROUP_DIRECTIVES, IGX_CHIPS_DIRECTIVES, IGX_EXPANSION_PANEL_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_LIST_DIRECTIVES, IGX_SELECT_DIRECTIVES, IGX_SLIDER_DIRECTIVES, IgxAvatarComponent, IgxButtonDirective, IgxIconButtonDirective, IgxIconComponent, IgxSwitchComponent } from 'igniteui-angular';

@Component({
  selector: 'app-editor-workspace',
  imports: [IGX_EXPANSION_PANEL_DIRECTIVES, IGX_BUTTON_GROUP_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_ACCORDION_DIRECTIVES, IGX_SLIDER_DIRECTIVES, IGX_SELECT_DIRECTIVES, IGX_CHIPS_DIRECTIVES, IGX_LIST_DIRECTIVES, IgxIconButtonDirective, IgxButtonDirective, IgxIconComponent, IgxAvatarComponent, IgxSwitchComponent, FormsModule],
  templateUrl: './editor-workspace.component.html',
  styleUrls: ['./editor-workspace.component.scss']
})
export class EditorWorkspaceComponent {
  public mediaAssetsSelectedItem?: string;
  public value = 45;
  public value1 = 100;
  public checked = true;
  public checked1 = true;
}
