import Elements from "./elements.page";

class Base {
  get Elements() {
    return new Elements();
  }
}

export default new Base();
