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
        readonly name: "getNextNode";
        readonly outputs: readonly [{
            readonly internalType: "string[5]";
            readonly name: "";
            readonly type: "string[5]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): RouterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Router;
}
