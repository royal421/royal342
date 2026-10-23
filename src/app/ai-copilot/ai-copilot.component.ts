import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IGX_INPUT_GROUP_DIRECTIVES, IGX_LIST_DIRECTIVES, IgxAvatarComponent, IgxBadgeComponent, IgxButtonDirective, IgxIconComponent } from 'igniteui-angular';

@Component({
  selector: 'app-ai-copilot',
  imports: [IGX_INPUT_GROUP_DIRECTIVES, IGX_LIST_DIRECTIVES, IgxAvatarComponent, IgxIconComponent, IgxButtonDirective, IgxBadgeComponent, FormsModule],
  templateUrl: './ai-copilot.component.html',
  styleUrls: ['./ai-copilot.component.scss']
})
export class AICopilotComponent {
  public ingredientsListSelectedItem?: string;
  public value = 'Meri car video ko dark cinematic phonk style do.';
}
