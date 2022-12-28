"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Curator__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "OwnershipTransferred",
        type: "event",
    },
    {
        inputs: [],
        name: "hasRootRouter",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "owner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "rootRouter",
        outputs: [
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
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "ttl",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "newTtl",
                type: "uint256",
            },
        ],
        name: "setTtl",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "newChainId",
                type: "uint256",
            },
            {
                internalType: "string",
                name: "newAdr",
                type: "string",
            },
        ],
        name: "setRootRouter",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "cleanRootRouter",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "getRootRouter",
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
                        internalType: "enum Curator.CodeMode",
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
                        internalType: "struct Curator.Router",
                        name: "router",
                        type: "tuple",
                    },
                ],
                internalType: "struct Curator.NodeData",
                name: "",
                type: "tuple",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
class Curator__factory {
    static abi = _abi;
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.Curator__factory = Curator__factory;
