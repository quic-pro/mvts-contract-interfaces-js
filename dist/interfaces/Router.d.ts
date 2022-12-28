import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export declare namespace Router {
    type RouterStruct = {
        chainId: PromiseOrValue<BigNumberish>;
        poolCodeLength: PromiseOrValue<BigNumberish>;
        adr: PromiseOrValue<string>;
    };
    type RouterStructOutput = [BigNumber, BigNumber, string] & {
        chainId: BigNumber;
        poolCodeLength: BigNumber;
        adr: string;
    };
    type NodeDataStruct = {
        responseCode: PromiseOrValue<BigNumberish>;
        ttl: PromiseOrValue<BigNumberish>;
        mode: PromiseOrValue<BigNumberish>;
        sipUri: PromiseOrValue<string>;
        router: Router.RouterStruct;
    };
    type NodeDataStructOutput = [
        BigNumber,
        BigNumber,
        number,
        string,
        Router.RouterStructOutput
    ] & {
        responseCode: BigNumber;
        ttl: BigNumber;
        mode: number;
        sipUri: string;
        router: Router.RouterStructOutput;
    };
}
export interface RouterInterface extends utils.Interface {
    functions: {
        "getNodeData(uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "getNodeData"): FunctionFragment;
    encodeFunctionData(functionFragment: "getNodeData", values: [PromiseOrValue<BigNumberish>]): string;
    decodeFunctionResult(functionFragment: "getNodeData", data: BytesLike): Result;
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
        getNodeData(code: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[Router.NodeDataStructOutput]>;
    };
    getNodeData(code: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<Router.NodeDataStructOutput>;
    callStatic: {
        getNodeData(code: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<Router.NodeDataStructOutput>;
    };
    filters: {};
    estimateGas: {
        getNodeData(code: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        getNodeData(code: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
