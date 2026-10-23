import { Routes } from '@angular/router';

import { NotFound } from './error-routing/not-found/not-found';
import { UncaughtError } from './error-routing/error/uncaught-error';
import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';
import { EditorWorkspaceComponent } from './editor-workspace/editor-workspace.component';
import { AICopilotComponent } from './ai-copilot/ai-copilot.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home-dashboard', pathMatch: 'full' },
  { path: 'error', component: UncaughtError },
  { path: 'home-dashboard', component: HomeDashboardComponent, data: { text: 'Home-Dashboard' } },
  { path: 'editor-workspace', component: EditorWorkspaceComponent, data: { text: 'Editor-Workspace' } },
  { path: 'ai-copilot', component: AICopilotComponent, data: { text: 'Aicopilot' } },
  { path: '**', component: NotFound } // must always be last
];
