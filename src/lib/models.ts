export interface SrcOptions {
  jpgQuality?: number;
  type?: string;
}

export interface ResizeOptions {
  maxWidth: number;
  maxHeight: number;
}

export interface SharpenOptions {
  sharpness?: number;
}

export interface Base64ImageData {
  width: number;
  height: number;
  imgElement: HTMLImageElement;
}

export interface OperatorFunction {
  (blob?: string): Promise<void>;
}

export interface RotateOptions {
  degree?: number;
  clockwise?: boolean;
}
