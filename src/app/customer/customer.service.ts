import { Injectable } from "@angular/core";
import axios from "axios";

@Injectable({
  providedIn: "root"
})
export class CustomerServices {
  getCustomers = async () => {
    return await axios
      .get("http://localhost/Project/Ionic/database/customer.php")
      .then(data => {
        return data.data;
      });
  };
}
