class Skeleton extends HTMLElement {
  constructor(height, width) {
    super();
    this._height = height || this.getAttribute("data-height");
    this._width = width || this.getAttribute("data-width");

    this.init();
  }

  set height(height) {
    this._height = height;
    this.init();
  }

  set width(width) {
    this._width = width;
    this.init();
  }

  init() {
    this.style.height = this._height;
    this.style.width = this._width;
    this.classList.add("skeleton");
  }
}

export default Skeleton;
