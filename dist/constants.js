"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ROOT_ROUTER_POOL_SIZE = exports.ROOT_ROUTER_POOL_CODE_LENGTH = exports.ROOT_ROUTER_ERC721_SYMBOL = exports.ROOT_ROUTER_ERC721_NAME = exports.ResponseCode = exports.CodeStatus = exports.CodeMode = void 0;
var CodeMode;
(function (CodeMode) {
    CodeMode[CodeMode["Number"] = 0] = "Number";
    CodeMode[CodeMode["Pool"] = 1] = "Pool";
})(CodeMode = exports.CodeMode || (exports.CodeMode = {}));
var CodeStatus;
(function (CodeStatus) {
    CodeStatus[CodeStatus["AvailableForMinting"] = 0] = "AvailableForMinting";
    CodeStatus[CodeStatus["Active"] = 1] = "Active";
    CodeStatus[CodeStatus["Held"] = 2] = "Held";
    CodeStatus[CodeStatus["Blocked"] = 3] = "Blocked";
})(CodeStatus = exports.CodeStatus || (exports.CodeStatus = {}));
var ResponseCode;
(function (ResponseCode) {
    ResponseCode[ResponseCode["OK"] = 200] = "OK";
    ResponseCode[ResponseCode["ERROR"] = 400] = "ERROR";
})(ResponseCode = exports.ResponseCode || (exports.ResponseCode = {}));
exports.ROOT_ROUTER_ERC721_NAME = 'MetaVerse Telecom Service';
exports.ROOT_ROUTER_ERC721_SYMBOL = 'MVTS';
exports.ROOT_ROUTER_POOL_CODE_LENGTH = 3;
exports.ROOT_ROUTER_POOL_SIZE = 1000;
