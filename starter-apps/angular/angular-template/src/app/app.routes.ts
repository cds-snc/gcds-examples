import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { TopicComponent } from './pages/about/topic/topic.component';
import { HomeComponent } from './pages/home/home.component';
import { ReportABugComponent } from './pages/report-a-bug/report-a-bug.component';

export const routes: Routes = [
  {
    path: '',
    title: $localize`:@@common.pageTitle.home:Home`,
    component: HomeComponent,
  },
  {
    path: 'about',
    title: $localize`:@@common.pageTitle.about:About`,
    children: [
      {
        path: '',
        component: AboutComponent,
      },
      {
        path: 'topic',
        title: $localize`:@@common.pageTitle.about.topic:Topic`,
        component: TopicComponent,
      },
    ],
  },
  {
    path: 'report-a-bug',
    title: $localize`:@@common.pageTitle.reportABug:Report a Bug`,
    component: ReportABugComponent,
  },
];
