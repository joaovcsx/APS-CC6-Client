export interface IFingerprint {
    name?: string;
    count?: number;
    level?: number;
    photo_url?: string;
    quadrants?: IQuadrant;
    valid?: boolean;
}

export interface IQuadrants {
    quadrants: IQuadrant[]
}

export interface IQuadrant {
    quadrants: IPixels[]
}

export interface IPixels {
    x: number,
    y: number
}

export interface IParamsFingerprintExists {
    uploadFile?: File;
    name?: string;
    level?: number;
}