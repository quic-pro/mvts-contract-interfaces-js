"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Router__factory = exports.RootRouter__factory = exports.Curator__factory = exports.factories = void 0;
exports.factories = __importStar(require("./factories"));
var Curator__factory_1 = require("./factories/Curator__factory");
Object.defineProperty(exports, "Curator__factory", { enumerable: true, get: function () { return Curator__factory_1.Curator__factory; } });
var RootRouter__factory_1 = require("./factories/RootRouter__factory");
Object.defineProperty(exports, "RootRouter__factory", { enumerable: true, get: function () { return RootRouter__factory_1.RootRouter__factory; } });
var Router__factory_1 = require("./factories/Router__factory");
Object.defineProperty(exports, "Router__factory", { enumerable: true, get: function () { return Router__factory_1.Router__factory; } });
