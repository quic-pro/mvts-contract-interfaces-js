export enum CodeMode {
    Number,
    Pool,
}

export enum CodeStatus {
    AvailableForMinting,
    Active,
    Held,
    Blocked,
}

export enum ResponseCode {
    OK = 200,
    ERROR = 400,
}

export const ROOT_ROUTER_ERC721_NAME = 'MetaVerse Telecom Service';
export const ROOT_ROUTER_ERC721_SYMBOL = 'MVTS';
export const ROOT_ROUTER_POOL_CODE_LENGTH = 3;
export const ROOT_ROUTER_POOL_SIZE = 1000;
