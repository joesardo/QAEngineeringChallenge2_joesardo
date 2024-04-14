import Elements from "./elements.page";
import Requests from "./requests.page";

class Base {
  get Elements() {
    return new Elements();
  }

  get Requests() {
    return new Requests();
  }
}

export default new Base();
