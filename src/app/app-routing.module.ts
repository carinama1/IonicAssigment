import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "customer", pathMatch: "full" },
  {
    path: "customer",
    loadChildren: () =>
      import("./customer/customer.module").then(m => m.CustomerPageModule)
  },
  {
    path: "addcustomer",
    loadChildren: () =>
      import("./add-customer/add-customer.module").then(
        m => m.AddCustomerPageModule
      )
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
