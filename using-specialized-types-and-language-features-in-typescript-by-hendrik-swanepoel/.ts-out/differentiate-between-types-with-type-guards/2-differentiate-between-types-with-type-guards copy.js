"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
const render_1 = require("./render");
const projectSize = {
    width: 512,
    height: 250,
};
const textLayer1 = {
    type: types_1.LayerType.Text,
    maxWidth: 1000,
    position: { x: 128, y: 208 },
    color: "#e8166d",
    id: "10",
    rotation: 0,
    text: "Advanced TypeScript",
    fontSize: "20px",
};
const textLayer2 = {
    type: types_1.LayerType.Text,
    maxWidth: 1000,
    position: { x: 128, y: 240 },
    color: "blue",
    id: "30",
    rotation: 0,
    text: "Is powerful",
    fontSize: "10px",
};
const imageLayer = {
    type: types_1.LayerType.Image,
    position: { x: 0, y: 0 },
    id: "20",
    rotation: 0,
    src: "ps-dark.png",
    maxBounds: { width: projectSize.width },
};
function isTextLayer(layer) {
    return layer.type === types_1.LayerType.Text;
}
function setFontSize(layer, value) {
    if (typeof value === "number") {
        layer.fontSize = `${value}px`;
    }
    else {
        layer.fontSize = value;
    }
}
function setFontSizeOnSelection(layers, value) {
    layers.forEach((layer) => {
        if (isTextLayer(layer)) {
            setFontSize(layer, value);
        }
    });
}
const project = {
    layers: [imageLayer, textLayer1, textLayer2],
    size: projectSize,
};
setFontSizeOnSelection(project.layers, "20px");
render_1.render(project);
//# sourceMappingURL=2-differentiate-between-types-with-type-guards copy.js.map