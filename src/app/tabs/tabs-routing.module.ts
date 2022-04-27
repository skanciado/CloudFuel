import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () =>
          import('../tab1/tab1.module').then((m) => m.Tab1PageModule),
      },
      {
        path: 'route',
        loadChildren: () =>
          import('../tab2/route.module').then((m) => m.RoutePageModule),
      },
      {
        path: 'navigate',
        loadChildren: () =>
          import('../navigate/navigate.module').then(
            (m) => m.NavigatePageModule
          ),
      },
      {
        path: '',
        redirectTo: '/tabs/route',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/navigate',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
