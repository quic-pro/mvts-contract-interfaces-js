import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export declare namespace Curator {
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
        router: Curator.RouterStruct;
    };
    type NodeDataStructOutput = [
        BigNumber,
        BigNumber,
        number,
        string,
        Curator.RouterStructOutput
    ] & {
        responseCode: BigNumber;
        ttl: BigNumber;
        mode: number;
        sipUri: string;
        router: Curator.RouterStructOutput;
    };
}
export interface CuratorInterface extends utils.Interface {
    functions: {
        "hasRootRouter()": FunctionFragment;
        "owner()": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "rootRouter()": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "ttl()": FunctionFragment;
        "setTtl(uint256)": FunctionFragment;
        "setRootRouter(uint256,string)": FunctionFragment;
        "cleanRootRouter()": FunctionFragment;
        "getRootRouter()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "hasRootRouter" | "owner" | "renounceOwnership" | "rootRouter" | "transferOwnership" | "ttl" | "setTtl" | "setRootRouter" | "cleanRootRouter" | "getRootRouter"): FunctionFragment;
    encodeFunctionData(functionFragment: "hasRootRouter", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "rootRouter", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "ttl", values?: undefined): string;
    encodeFunctionData(functionFragment: "setTtl", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setRootRouter", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "cleanRootRouter", values?: undefined): string;
    encodeFunctionData(functionFragment: "getRootRouter", values?: undefined): string;
    decodeFunctionResult(functionFragment: "hasRootRouter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rootRouter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ttl", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setTtl", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setRootRouter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cleanRootRouter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRootRouter", data: BytesLike): Result;
    events: {
        "OwnershipTransferred(address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}
export interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface Curator extends BaseContract {
    contractName: "Curator";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: CuratorInterface;
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
        hasRootRouter(overrides?: CallOverrides): Promise<[boolean]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        rootRouter(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            string
        ] & {
            chainId: BigNumber;
            poolCodeLength: BigNumber;
            adr: string;
        }>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        ttl(overrides?: CallOverrides): Promise<[BigNumber]>;
        setTtl(newTtl: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setRootRouter(newChainId: PromiseOrValue<BigNumberish>, newAdr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        cleanRootRouter(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getRootRouter(overrides?: CallOverrides): Promise<[Curator.NodeDataStructOutput]>;
    };
    hasRootRouter(overrides?: CallOverrides): Promise<boolean>;
    owner(overrides?: CallOverrides): Promise<string>;
    renounceOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    rootRouter(overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        string
    ] & {
        chainId: BigNumber;
        poolCodeLength: BigNumber;
        adr: string;
    }>;
    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    ttl(overrides?: CallOverrides): Promise<BigNumber>;
    setTtl(newTtl: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setRootRouter(newChainId: PromiseOrValue<BigNumberish>, newAdr: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    cleanRootRouter(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getRootRouter(overrides?: CallOverrides): Promise<Curator.NodeDataStructOutput>;
    callStatic: {
        hasRootRouter(overrides?: CallOverrides): Promise<boolean>;
        owner(overrides?: CallOverrides): Promise<string>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        rootRouter(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            string
        ] & {
            chainId: BigNumber;
            poolCodeLength: BigNumber;
            adr: string;
        }>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        ttl(overrides?: CallOverrides): Promise<BigNumber>;
        setTtl(newTtl: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setRootRouter(newChainId: PromiseOrValue<BigNumberish>, newAdr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        cleanRootRouter(overrides?: CallOverrides): Promise<void>;
        getRootRouter(overrides?: CallOverrides): Promise<Curator.NodeDataStructOutput>;
    };
    filters: {
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
    };
    estimateGas: {
        hasRootRouter(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        rootRouter(overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        ttl(overrides?: CallOverrides): Promise<BigNumber>;
        setTtl(newTtl: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setRootRouter(newChainId: PromiseOrValue<BigNumberish>, newAdr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        cleanRootRouter(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getRootRouter(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        hasRootRouter(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        rootRouter(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        ttl(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setTtl(newTtl: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setRootRouter(newChainId: PromiseOrValue<BigNumberish>, newAdr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        cleanRootRouter(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getRootRouter(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
