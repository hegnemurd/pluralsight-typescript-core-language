export interface Size {
    width: number;
    height: number;
}
export interface Constraint {
    width?: number;
    height?: number;
}
export declare enum LayerType {
    Text = 0,
    Image = 1
}
export interface Position {
    x: number;
    y: number;
}
export interface Layer {
    id: string;
    type: LayerType;
    rotation: number;
    position: Position;
}
export interface TextLayer extends Layer {
    type: LayerType.Text;
    text: string;
    color: string;
    fontSize: string;
    maxWidth: number;
}
export interface ImageLayer extends Layer {
    type: LayerType.Image;
    src: string;
    maxBounds: Constraint;
}
export interface Project {
    layers: Layer[];
    size: Size;
}
