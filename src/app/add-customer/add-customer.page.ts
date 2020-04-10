import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-add-customer",
  templateUrl: "./add-customer.page.html",
  styleUrls: ["./add-customer.page.scss"]
})
export class AddCustomerPage implements OnInit {
  name_customer = "";
  desc_customer = "";

  constructor() {}

  ngOnInit() {}

  createdProses = () => {
    console.log({ name: this.name_customer, desc: this.desc_customer });
  };
}
