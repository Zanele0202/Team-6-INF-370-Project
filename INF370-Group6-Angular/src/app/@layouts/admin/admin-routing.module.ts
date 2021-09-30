



import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';

import { AuthGuard } from 'src/app/shared/guards/auth-guard.service';
import { AdminDashboardComponent } from './layout/admin-dashboard/admin-dashboard.component';
import { ListAppRolesComponent } from './pages/app-roles/list-app-roles/list-app-roles.component';
import { ListEmployeeTypesComponent } from './pages/employees/manage-employee-types/list-employee-types/list-employee-types.component';
import { ListEmployeesComponent } from './pages/employees/manage-employees/list-employees/list-employees.component';
import { ListProjectsComponent } from './pages/projects/manage-projects/list-projects/list-projects.component';
import { ListProjectStatusesComponent } from './pages/projects/project-statuses/list-project-statuses/list-project-statuses.component';
import { ListPhasesComponent } from './pages/phases/manage-phases/list-phases/list-phases.component';
import { ListPhaseStatusesComponent } from './pages/phases/statuses/list-phase-statuses/list-phase-statuses.component';
import { ListTaskStatusesComponent } from './pages/tasks/task-statuses/list-task-statuses/list-task-statuses.component';
import { RentalComponent} from './pages/rentals/rental/rental.component'
import { RentalStatusComponent} from './pages/rentals/rental-status/rental-status.component'
import { ReportMainComponent}  from './pages/reports/report-main/report-main.component'
import { MonthlyrentalreportComponent} from './pages/reports/monthlyrentalreport/monthlyrentalreport.component'
import { ProjectprogressreportComponent } from './pages/reports/projectprogressreport/projectprogressreport.component';
import { InventoryreportComponent } from './pages/reports/inventoryreport/inventoryreport.component';
import { ExpensereportComponent } from './pages/reports/expensereport/expensereport.component';
import { SubcontractoreportComponent } from './pages/reports/subcontractoreport/subcontractoreport.component';



const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'dashboard', component: AdminDashboardComponent },
      { path: 'app-roles', component: ListAppRolesComponent },
      { path: 'employees', component: ListEmployeesComponent },
      { path: 'employee-types', component: ListEmployeeTypesComponent },
      { path: 'projects', component: ListProjectsComponent },
      { path: 'project-statuses', component: ListProjectStatusesComponent },
      { path: 'phase-statuses', component: ListPhaseStatusesComponent },
      { path: 'task-statuses', component: ListTaskStatusesComponent },
      { path: 'rental-status', component: RentalStatusComponent },
      { path: 'rental', component: RentalComponent },
      { path: 'report-main', component: ReportMainComponent },
      { path: 'monthlyrentalreport', component: MonthlyrentalreportComponent },
      { path: 'projectprogressreport', component: ProjectprogressreportComponent },
      { path: 'inventoryreport', component: InventoryreportComponent },
      { path: 'expensereport', component: ExpensereportComponent },
      { path: 'subcontractoreport', component: SubcontractoreportComponent },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
