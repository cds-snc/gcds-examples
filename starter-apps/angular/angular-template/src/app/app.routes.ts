import { Routes } from '@angular/router';
import { About } from './pages/about/about';
import { Topic } from './pages/about/topic/topic';
import { Home } from './pages/home/home';
import { ReportABug } from './pages/report-a-bug/report-a-bug';

export const routes: Routes = [
  {
    path: '',
    title: $localize`:@@common.pageTitle.home:Home`,
    component: Home,
  },
  {
    path: 'about',
    title: $localize`:@@common.pageTitle.about:About`,
    children: [
      {
        path: '',
        component: About,
      },
      {
        path: 'topic',
        title: $localize`:@@common.pageTitle.about.topic:Topic`,
        component: Topic,
      },
    ],
  },
  {
    path: 'report-a-bug',
    title: $localize`:@@common.pageTitle.reportABug:Report a Bug`,
    component: ReportABug,
  },
];
