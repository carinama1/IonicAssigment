import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CustomerServices } from "./customer.service";

@Component({
  selector: "app-customer",
  templateUrl: "./customer.page.html",
  styleUrls: ["./customer.page.scss"]
})
export class CustomerPage implements OnInit {
  customers = []
  constructor(private router: Router, private cs: CustomerServices) {}

  ngOnInit() {
    this.cs.getCustomers().then(data => {
      this.customers = data.customers
    });
  }

  addCustomer() {
    this.router.navigate(["/addcustomer"]);
  }
}
