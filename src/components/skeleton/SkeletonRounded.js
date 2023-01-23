import Skeleton from "./Skeleton";

class SkeletonRounded extends Skeleton {
  init() {
    super.init();
    this.classList.add("skeleton--rounded");
  }
}

customElements.define("skeleton-rounded", SkeletonRounded);
export default SkeletonRounded;
