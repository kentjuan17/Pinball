import decomp from "poly-decomp";
import { Common } from "matter-js";

export default function Poly(path) {
  decomp.makeCCW(path);
  return Common.setDecomp(path);

  //   return decomp.quickDecomp(convertPath);
}
