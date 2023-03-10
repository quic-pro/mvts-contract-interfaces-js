"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Router__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "uint256",
                name: "code",
                type: "uint256",
            },
        ],
        name: "getNodeData",
        outputs: [
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "responseCode",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "ttl",
                        type: "uint256",
                    },
                    {
                        internalType: "enum Router.CodeMode",
                        name: "mode",
                        type: "uint8",
                    },
                    {
                        internalType: "string",
                        name: "sipUri",
                        type: "string",
                    },
                    {
                        components: [
                            {
                                internalType: "uint256",
                                name: "chainId",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "poolCodeLength",
                                type: "uint256",
                            },
                            {
                                internalType: "string",
                                name: "adr",
                                type: "string",
                            },
                        ],
                        internalType: "struct Router.Router",
                        name: "router",
                        type: "tuple",
                    },
                ],
                internalType: "struct Router.NodeData",
                name: "",
                type: "tuple",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
class Router__factory {
    static abi = _abi;
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.Router__factory = Router__factory;
