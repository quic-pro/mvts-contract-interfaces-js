import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface RouterInterface extends utils.Interface {
    functions: {
        "getNextNode(uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "getNextNode"): FunctionFragment;
    encodeFunctionData(functionFragment: "getNextNode", values: [PromiseOrValue<BigNumberish>]): string;
    decodeFunctionResult(functionFragment: "getNextNode", data: BytesLike): Result;
    events: {};
}
export interface Router extends BaseContract {
    contractName: "Router";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: RouterInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        getNextNode(code: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[[string, string, string, string, string]]>;
    };
    getNextNode(code: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string, string, string, string, string]>;
    callStatic: {
        getNextNode(code: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string, string, string, string, string]>;
    };
    filters: {};
    estimateGas: {
        getNextNode(code: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        getNextNode(code: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
