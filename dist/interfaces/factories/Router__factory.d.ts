import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { Router, RouterInterface } from "../Router";
export declare class Router__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "code";
            readonly type: "uint256";
        }];
        readonly name: "getNodeData";
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
                readonly internalType: "enum Router.CodeMode";
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
                readonly internalType: "struct Router.Router";
                readonly name: "router";
                readonly type: "tuple";
            }];
            readonly internalType: "struct Router.NodeData";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): RouterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Router;
}
