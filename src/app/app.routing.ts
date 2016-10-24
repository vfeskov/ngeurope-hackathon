import { RouterModule, Routes } from '@angular/router';

import { RecordsComponent } from './records/records.component';

const routes: Routes = [
  { path: '', component: RecordsComponent }
];

export const routing = RouterModule.forRoot(routes);
