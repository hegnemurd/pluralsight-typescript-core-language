"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
const render_1 = require("./render");
const projectSize = {
    width: 512,
    height: 250,
};
const textLayer = {
    type: types_1.LayerType.Text,
    maxWidth: 1000,
    position: { x: 128, y: 208 },
    color: "#e8166d",
    id: "10",
    rotation: 0,
    text: "Advanced TypeScript",
    fontSize: "20px",
};
const imageLayer = {
    type: types_1.LayerType.Image,
    position: { x: 0, y: 0 },
    id: "20",
    rotation: 0,
    src: "ps-dark.png",
    maxBounds: { width: projectSize.width },
};
function setTextLayerProps(project, id, props) {
    const layer = project.layers.find((l) => l.id === id);
    if (layer) {
        Object.entries(props).forEach(([k, v]) => {
            layer[k] = v;
        });
    }
}
const project = {
    layers: [imageLayer, textLayer],
    size: projectSize,
};
setTextLayerProps(project, "10", {
    text: "hello",
});
render_1.render(project);
//# sourceMappingURL=1-generating-complex-types-based-on-existing-types.js.map