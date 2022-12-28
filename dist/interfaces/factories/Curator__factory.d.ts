import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { Curator, CuratorInterface } from "../Curator";
export declare class Curator__factory {
    static readonly abi: readonly [{
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "previousOwner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "OwnershipTransferred";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "hasRootRouter";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "owner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "renounceOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "rootRouter";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "chainId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "poolCodeLength";
            readonly type: "uint256";
        }, {
            readonly internalType: "string";
            readonly name: "adr";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "transferOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "ttl";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "newTtl";
            readonly type: "uint256";
        }];
        readonly name: "setTtl";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "newChainId";
            readonly type: "uint256";
        }, {
            readonly internalType: "string";
            readonly name: "newAdr";
            readonly type: "string";
        }];
        readonly name: "setRootRouter";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "cleanRootRouter";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getRootRouter";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "responseCode";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "ttl";
                readonly type: "uint256";
            }, {
                readonly internalType: "enum Curator.CodeMode";
                readonly name: "mode";
                readonly type: "uint8";
            }, {
                readonly internalType: "string";
                readonly name: "sipUri";
                readonly type: "string";
            }, {
                readonly components: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "chainId";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "poolCodeLength";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "string";
                    readonly name: "adr";
                    readonly type: "string";
                }];
                readonly internalType: "struct Curator.Router";
                readonly name: "router";
                readonly type: "tuple";
            }];
            readonly internalType: "struct Curator.NodeData";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): CuratorInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Curator;
}
