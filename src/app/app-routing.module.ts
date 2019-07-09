import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/main' },
  { path: 'setup', pathMatch: 'full', redirectTo: '/setup' },
  { path: 'main', pathMatch: 'full', redirectTo: '/main' },
  { path: 'setting', pathMatch: 'full', redirectTo: '/setting' },
  { path: 'summary', pathMatch: 'full', redirectTo: '/summary' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  // { path: 'setup', loadChildren: () => import('./pages/setup/setup.module').then(m => m.SetupModule)},
  // { path: 'main', loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule)},
  // { path: 'setting', loadChildren: () => import('./pages/setting/setting.module').then(m => m.SettingModule)},
  // { path: 'summary', loadChildren: () => import('./pages/summary/summary.module').then((m => m.SummaryModule))}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
