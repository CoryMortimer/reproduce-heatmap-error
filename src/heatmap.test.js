import { testLayer } from "@deck.gl/test-utils";
import { HeatmapLayer } from "@deck.gl/aggregation-layers";

describe("Heatmap", () => {
  test("initial render", () => {
    testLayer({
      Layer: HeatmapLayer,
      testCases: [
        {
          props: {},
          onAfterUpdate({ subLayers }) {
            expect(subLayers.length).toBe(1);
          }
        }
      ]
    });
  });
});
