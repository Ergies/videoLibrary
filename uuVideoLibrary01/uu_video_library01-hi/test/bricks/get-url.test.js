import UuVideoLibrary01 from "uu_video_library01-hi";
import { testProperties } from "uu5g05-test";

const CONFIG = {
  props: {
    // left: {
    //   values: ["Left as text", <span key="l">Left as JSX</span>, 0],
    // },
  },
  requiredProps: {
    // children: "Children content",
  },
};

describe(`UuVideoLibrary01.Bricks.GetUrl`, () => {
  testProperties(UuVideoLibrary01.Bricks.GetUrl, CONFIG);
});
