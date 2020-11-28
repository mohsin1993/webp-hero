import {Webp} from "../libwebp/dist/webp.js";

export type DetectWebpImage = (image: HTMLImageElement) => Promise<boolean>;

export interface WebpMachineOptions {
    webp?: Webp;
    webpSupport?: Promise<boolean>;
    detectWebpImage?: DetectWebpImage;
}

export interface PolyfillDocumentOptions {
    document?: Document;
}
