"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
const render_1 = require("./render");
const projectSize = {
    width: 512,
    height: 250,
};
function createLayer(type) {
    if (type === types_1.LayerType.Text) {
        return {
            color: "#fff",
            fontSize: "10px",
            id: new Date().toISOString(),
            maxWidth: 10000,
            position: { x: 10, y: 10 },
            rotation: 0,
            text: "This is the default text",
            type: types_1.LayerType.Text,
        };
    }
    return {
        id: new Date().toISOString(),
        maxBounds: { width: 400 },
        position: { x: 0, y: 0 },
        rotation: 0,
        src: "ps-dark.png",
        type: types_1.LayerType.Image,
    };
}
const textLayer = createLayer(types_1.LayerType.Text);
textLayer.text = "can set this";
textLayer.fontSize = "20px";
textLayer.position.y += 20;
const project = {
    layers: [createLayer(types_1.LayerType.Image), textLayer],
    size: projectSize,
};
render_1.render(project);
//# sourceMappingURL=2-making-your-types-more-flexible-with-conditional-types.js.map