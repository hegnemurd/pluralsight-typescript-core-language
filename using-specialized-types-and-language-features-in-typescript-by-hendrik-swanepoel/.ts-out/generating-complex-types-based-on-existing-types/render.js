"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const types_1 = require("./types");
const canvas_1 = require("canvas");
const process_1 = tslib_1.__importDefault(require("process"));
const fs_1 = tslib_1.__importDefault(require("fs"));
const open_1 = tslib_1.__importDefault(require("open"));
const probe = require("probe-image-size");
const BASE_IMAGE_PATH = `${process_1.default.env.ROOT}/lessons/common/images`;
function isTextLayer(layer) {
    return layer.type === types_1.LayerType.Text;
}
function isImageLayer(layer) {
    return layer.type === types_1.LayerType.Image;
}
function renderImage(canvas, layer) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const ctx = canvas.getContext("2d");
        const imagePath = `${BASE_IMAGE_PATH}/${layer.src}`;
        const fileBuffer = fs_1.default.readFileSync(imagePath);
        const image = yield canvas_1.loadImage(fileBuffer);
        const imageSize = probe.sync(fileBuffer);
        const maxScaleSize = {
            width: layer.maxBounds.width || imageSize.height,
            height: layer.maxBounds.height || imageSize.height,
        };
        const scale = Math.min(maxScaleSize.height / imageSize.height, maxScaleSize.width / imageSize.width);
        ctx.drawImage(image, layer.position.x, layer.position.y, scale * imageSize.width, scale * imageSize.height);
    });
}
function renderText(canvas, layer) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const ctx = canvas.getContext("2d");
        ctx.font = `${layer.fontSize}px Helvetica Arial`;
        ctx.fillStyle = layer.color;
        ctx.fillText(layer.text, layer.position.x, layer.position.y, layer.maxWidth);
    });
}
function exportPng(canvas) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve) => {
            const fileName = __dirname + "/../../out.png";
            const out = fs_1.default.createWriteStream(fileName);
            const stream = canvas.createPNGStream();
            stream.pipe(out);
            out.on("finish", () => open_1.default(fileName).then(resolve));
        });
    });
}
function renderAsync(project) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const canvas = canvas_1.createCanvas(project.size.width, project.size.height);
        for (const layer of project.layers) {
            try {
                if (isTextLayer(layer)) {
                    yield renderText(canvas, layer);
                }
                if (isImageLayer(layer)) {
                    yield renderImage(canvas, layer);
                }
            }
            catch (err) {
                console.error(`Could not render layer with id ${layer.id}:`);
                console.error(err.stack);
                process_1.default.exit(1);
            }
        }
        yield exportPng(canvas);
    });
}
function render(project) {
    renderAsync(project)
        .then(() => console.log("finished rendering"))
        .catch((err) => console.error(err));
}
exports.render = render;
//# sourceMappingURL=render.js.map