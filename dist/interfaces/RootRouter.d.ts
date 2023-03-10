import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export declare namespace RootRouter {
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
    type CodeDataStruct = {
        status: PromiseOrValue<BigNumberish>;
        isVerified: PromiseOrValue<boolean>;
        subscriptionEndTime: PromiseOrValue<BigNumberish>;
        holdEndTime: PromiseOrValue<BigNumberish>;
        mode: PromiseOrValue<BigNumberish>;
        sipDomain: PromiseOrValue<string>;
        router: RootRouter.RouterStruct;
    };
    type CodeDataStructOutput = [
        number,
        boolean,
        BigNumber,
        BigNumber,
        number,
        string,
        RootRouter.RouterStructOutput
    ] & {
        status: number;
        isVerified: boolean;
        subscriptionEndTime: BigNumber;
        holdEndTime: BigNumber;
        mode: number;
        sipDomain: string;
        router: RootRouter.RouterStructOutput;
    };
    type NodeDataStruct = {
        responseCode: PromiseOrValue<BigNumberish>;
        ttl: PromiseOrValue<BigNumberish>;
        mode: PromiseOrValue<BigNumberish>;
        sipUri: PromiseOrValue<string>;
        router: RootRouter.RouterStruct;
    };
    type NodeDataStructOutput = [
        BigNumber,
        BigNumber,
        number,
        string,
        RootRouter.RouterStructOutput
    ] & {
        responseCode: BigNumber;
        ttl: BigNumber;
        mode: number;
        sipUri: string;
        router: RootRouter.RouterStructOutput;
    };
}
export interface RootRouterInterface extends utils.Interface {
    functions: {
        "POOL_SIZE()": FunctionFragment;
        "approve(address,uint256)": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "baseUri()": FunctionFragment;
        "changeCodeMode(uint256)": FunctionFragment;
        "clearCodeRouter(uint256)": FunctionFragment;
        "clearCodeSipDomain(uint256)": FunctionFragment;
        "defaultSipDomain()": FunctionFragment;
        "getApproved(uint256)": FunctionFragment;
        "getCodeData(uint256)": FunctionFragment;
        "getCodeStatus(uint256)": FunctionFragment;
        "getCodeStatuses()": FunctionFragment;
        "getNodeData(uint256)": FunctionFragment;
        "getOwnerCodes(address)": FunctionFragment;
        "getPoolCodes()": FunctionFragment;
        "hasOwner(uint256)": FunctionFragment;
        "holdDuration()": FunctionFragment;
        "isApprovedForAll(address,address)": FunctionFragment;
        "mint(uint256)": FunctionFragment;
        "mintPrice()": FunctionFragment;
        "modeChangePrice()": FunctionFragment;
        "name()": FunctionFragment;
        "owner()": FunctionFragment;
        "ownerOf(uint256)": FunctionFragment;
        "renewSubscription(uint256)": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "renounceOwnershipOfCode(uint256)": FunctionFragment;
        "safeTransferFrom(address,address,uint256)": FunctionFragment;
        "safeTransferFrom(address,address,uint256,bytes)": FunctionFragment;
        "setApprovalForAll(address,bool)": FunctionFragment;
        "setBaseUri(string)": FunctionFragment;
        "setCodeBlockedStatus(uint256,bool)": FunctionFragment;
        "setCodeHoldEndTime(uint256,uint256)": FunctionFragment;
        "setCodeRouter(uint256,uint256,string,uint256)": FunctionFragment;
        "setCodeSipDomain(uint256,string)": FunctionFragment;
        "setCodeSubscription(uint256,uint256,uint256)": FunctionFragment;
        "setCodeSubscriptionEndTime(uint256,uint256)": FunctionFragment;
        "setCodeVerifiedStatus(uint256,bool)": FunctionFragment;
        "setDefaultSipDomain(string)": FunctionFragment;
        "setHoldDuration(uint256)": FunctionFragment;
        "setMintPrice(uint256)": FunctionFragment;
        "setModeChangePrice(uint256)": FunctionFragment;
        "setSubscriptionDuration(uint256)": FunctionFragment;
        "setSubscriptionPrice(uint256)": FunctionFragment;
        "setTtl(uint256)": FunctionFragment;
        "setVerificationOperator(address)": FunctionFragment;
        "subscriptionDuration()": FunctionFragment;
        "subscriptionPrice()": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
        "symbol()": FunctionFragment;
        "tokenURI(uint256)": FunctionFragment;
        "transferFrom(address,address,uint256)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "ttl()": FunctionFragment;
        "verificationOperator()": FunctionFragment;
        "withdraw()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "POOL_SIZE" | "approve" | "balanceOf" | "baseUri" | "changeCodeMode" | "clearCodeRouter" | "clearCodeSipDomain" | "defaultSipDomain" | "getApproved" | "getCodeData" | "getCodeStatus" | "getCodeStatuses" | "getNodeData" | "getOwnerCodes" | "getPoolCodes" | "hasOwner" | "holdDuration" | "isApprovedForAll" | "mint" | "mintPrice" | "modeChangePrice" | "name" | "owner" | "ownerOf" | "renewSubscription" | "renounceOwnership" | "renounceOwnershipOfCode" | "safeTransferFrom(address,address,uint256)" | "safeTransferFrom(address,address,uint256,bytes)" | "setApprovalForAll" | "setBaseUri" | "setCodeBlockedStatus" | "setCodeHoldEndTime" | "setCodeRouter" | "setCodeSipDomain" | "setCodeSubscription" | "setCodeSubscriptionEndTime" | "setCodeVerifiedStatus" | "setDefaultSipDomain" | "setHoldDuration" | "setMintPrice" | "setModeChangePrice" | "setSubscriptionDuration" | "setSubscriptionPrice" | "setTtl" | "setVerificationOperator" | "subscriptionDuration" | "subscriptionPrice" | "supportsInterface" | "symbol" | "tokenURI" | "transferFrom" | "transferOwnership" | "ttl" | "verificationOperator" | "withdraw"): FunctionFragment;
    encodeFunctionData(functionFragment: "POOL_SIZE", values?: undefined): string;
    encodeFunctionData(functionFragment: "approve", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "baseUri", values?: undefined): string;
    encodeFunctionData(functionFragment: "changeCodeMode", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "clearCodeRouter", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "clearCodeSipDomain", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "defaultSipDomain", values?: undefined): string;
    encodeFunctionData(functionFragment: "getApproved", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getCodeData", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getCodeStatus", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getCodeStatuses", values?: undefined): string;
    encodeFunctionData(functionFragment: "getNodeData", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getOwnerCodes", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getPoolCodes", values?: undefined): string;
    encodeFunctionData(functionFragment: "hasOwner", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "holdDuration", values?: undefined): string;
    encodeFunctionData(functionFragment: "isApprovedForAll", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "mint", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "mintPrice", values?: undefined): string;
    encodeFunctionData(functionFragment: "modeChangePrice", values?: undefined): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "ownerOf", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "renewSubscription", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnershipOfCode", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "safeTransferFrom(address,address,uint256)", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "safeTransferFrom(address,address,uint256,bytes)", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "setApprovalForAll", values: [PromiseOrValue<string>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "setBaseUri", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setCodeBlockedStatus", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "setCodeHoldEndTime", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setCodeRouter", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "setCodeSipDomain", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setCodeSubscription", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "setCodeSubscriptionEndTime", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setCodeVerifiedStatus", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "setDefaultSipDomain", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setHoldDuration", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setMintPrice", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setModeChangePrice", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setSubscriptionDuration", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setSubscriptionPrice", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setTtl", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setVerificationOperator", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "subscriptionDuration", values?: undefined): string;
    encodeFunctionData(functionFragment: "subscriptionPrice", values?: undefined): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    encodeFunctionData(functionFragment: "tokenURI", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "ttl", values?: undefined): string;
    encodeFunctionData(functionFragment: "verificationOperator", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdraw", values?: undefined): string;
    decodeFunctionResult(functionFragment: "POOL_SIZE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "baseUri", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeCodeMode", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "clearCodeRouter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "clearCodeSipDomain", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "defaultSipDomain", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getApproved", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCodeData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCodeStatus", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCodeStatuses", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getNodeData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getOwnerCodes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPoolCodes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "holdDuration", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isApprovedForAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mintPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "modeChangePrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ownerOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renewSubscription", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnershipOfCode", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safeTransferFrom(address,address,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safeTransferFrom(address,address,uint256,bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setApprovalForAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setBaseUri", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setCodeBlockedStatus", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setCodeHoldEndTime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setCodeRouter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setCodeSipDomain", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setCodeSubscription", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setCodeSubscriptionEndTime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setCodeVerifiedStatus", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setDefaultSipDomain", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setHoldDuration", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMintPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setModeChangePrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setSubscriptionDuration", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setSubscriptionPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setTtl", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setVerificationOperator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "subscriptionDuration", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "subscriptionPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokenURI", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ttl", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "verificationOperator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
    events: {
        "Approval(address,address,uint256)": EventFragment;
        "ApprovalForAll(address,address,bool)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "Transfer(address,address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ApprovalForAll"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}
export interface ApprovalEventObject {
    owner: string;
    approved: string;
    tokenId: BigNumber;
}
export type ApprovalEvent = TypedEvent<[
    string,
    string,
    BigNumber
], ApprovalEventObject>;
export type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;
export interface ApprovalForAllEventObject {
    owner: string;
    operator: string;
    approved: boolean;
}
export type ApprovalForAllEvent = TypedEvent<[
    string,
    string,
    boolean
], ApprovalForAllEventObject>;
export type ApprovalForAllEventFilter = TypedEventFilter<ApprovalForAllEvent>;
export interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface TransferEventObject {
    from: string;
    to: string;
    tokenId: BigNumber;
}
export type TransferEvent = TypedEvent<[
    string,
    string,
    BigNumber
], TransferEventObject>;
export type TransferEventFilter = TypedEventFilter<TransferEvent>;
export interface RootRouter extends BaseContract {
    contractName: "RootRouter";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: RootRouterInterface;
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
        POOL_SIZE(overrides?: CallOverrides): Promise<[BigNumber]>;
        approve(to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        balanceOf(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        baseUri(overrides?: CallOverrides): Promise<[string]>;
        changeCodeMode(code: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        clearCodeRouter(code: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        clearCodeSipDomain(code: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        defaultSipDomain(overrides?: CallOverrides): Promise<[string]>;
        getApproved(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        getCodeData(code: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[RootRouter.CodeDataStructOutput]>;
        getCodeStatus(code: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[number]>;
        getCodeStatuses(overrides?: CallOverrides): Promise<[number[]]>;
        getNodeData(code: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[RootRouter.NodeDataStructOutput]>;
        getOwnerCodes(adr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean[]]>;
        getPoolCodes(overrides?: CallOverrides): Promise<[boolean[]]>;
        hasOwner(code: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[boolean]>;
        holdDuration(overrides?: CallOverrides): Promise<[BigNumber]>;
        isApprovedForAll(owner: PromiseOrValue<string>, operator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        mint(code: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        mintPrice(overrides?: CallOverrides): Promise<[BigNumber]>;
        modeChangePrice(overrides?: CallOverrides): Promise<[BigNumber]>;
        name(overrides?: CallOverrides): Promise<[string]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        ownerOf(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        renewSubscription(code: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        renounceOwnershipOfCode(code: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "safeTransferFrom(address,address,uint256)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "safeTransferFrom(address,address,uint256,bytes)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, code: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setApprovalForAll(operator: PromiseOrValue<string>, approved: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setBaseUri(newBaseUri: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setCodeBlockedStatus(code: PromiseOrValue<BigNumberish>, newBlockedStatus: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setCodeHoldEndTime(code: PromiseOrValue<BigNumberish>, newHoldEndTime: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setCodeRouter(code: PromiseOrValue<BigNumberish>, newChainId: PromiseOrValue<BigNumberish>, newAdr: PromiseOrValue<string>, newPoolCodeLength: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setCodeSipDomain(code: PromiseOrValue<BigNumberish>, newSipDomain: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setCodeSubscription(code: PromiseOrValue<BigNumberish>, newSubscriptionEndTime: PromiseOrValue<BigNumberish>, newHoldEndTime: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setCodeSubscriptionEndTime(code: PromiseOrValue<BigNumberish>, newSubscriptionEndTime: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setCodeVerifiedStatus(code: PromiseOrValue<BigNumberish>, newVerifiedStatus: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setDefaultSipDomain(newDefaultSipDomain: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setHoldDuration(newHoldDuration: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setMintPrice(newMintPrice: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setModeChangePrice(newModeChangePrice: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setSubscriptionDuration(newSubscriptionDuration: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setSubscriptionPrice(newSubscriptionPrice: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setTtl(newTtl: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setVerificationOperator(newVerificationOperator: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        subscriptionDuration(overrides?: CallOverrides): Promise<[BigNumber]>;
        subscriptionPrice(overrides?: CallOverrides): Promise<[BigNumber]>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
        symbol(overrides?: CallOverrides): Promise<[string]>;
        tokenURI(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, code: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        ttl(overrides?: CallOverrides): Promise<[BigNumber]>;
        verificationOperator(overrides?: CallOverrides): Promise<[string]>;
        withdraw(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    POOL_SIZE(overrides?: CallOverrides): Promise<BigNumber>;
    approve(to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    balanceOf(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    baseUri(overrides?: CallOverrides): Promise<string>;
    changeCodeMode(code: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    clearCodeRouter(code: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    clearCodeSipDomain(code: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    defaultSipDomain(overrides?: CallOverrides): Promise<string>;
    getApproved(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    getCodeData(code: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<RootRouter.CodeDataStructOutput>;
    getCodeStatus(code: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<number>;
    getCodeStatuses(overrides?: CallOverrides): Promise<number[]>;
    getNodeData(code: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<RootRouter.NodeDataStructOutput>;
    getOwnerCodes(adr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean[]>;
    getPoolCodes(overrides?: CallOverrides): Promise<boolean[]>;
    hasOwner(code: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
    holdDuration(overrides?: CallOverrides): Promise<BigNumber>;
    isApprovedForAll(owner: PromiseOrValue<string>, operator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    mint(code: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    mintPrice(overrides?: CallOverrides): Promise<BigNumber>;
    modeChangePrice(overrides?: CallOverrides): Promise<BigNumber>;
    name(overrides?: CallOverrides): Promise<string>;
    owner(overrides?: CallOverrides): Promise<string>;
    ownerOf(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    renewSubscription(code: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    renounceOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    renounceOwnershipOfCode(code: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "safeTransferFrom(address,address,uint256)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "safeTransferFrom(address,address,uint256,bytes)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, code: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setApprovalForAll(operator: PromiseOrValue<string>, approved: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setBaseUri(newBaseUri: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setCodeBlockedStatus(code: PromiseOrValue<BigNumberish>, newBlockedStatus: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setCodeHoldEndTime(code: PromiseOrValue<BigNumberish>, newHoldEndTime: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setCodeRouter(code: PromiseOrValue<BigNumberish>, newChainId: PromiseOrValue<BigNumberish>, newAdr: PromiseOrValue<string>, newPoolCodeLength: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setCodeSipDomain(code: PromiseOrValue<BigNumberish>, newSipDomain: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setCodeSubscription(code: PromiseOrValue<BigNumberish>, newSubscriptionEndTime: PromiseOrValue<BigNumberish>, newHoldEndTime: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setCodeSubscriptionEndTime(code: PromiseOrValue<BigNumberish>, newSubscriptionEndTime: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setCodeVerifiedStatus(code: PromiseOrValue<BigNumberish>, newVerifiedStatus: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setDefaultSipDomain(newDefaultSipDomain: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setHoldDuration(newHoldDuration: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setMintPrice(newMintPrice: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setModeChangePrice(newModeChangePrice: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setSubscriptionDuration(newSubscriptionDuration: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setSubscriptionPrice(newSubscriptionPrice: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setTtl(newTtl: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setVerificationOperator(newVerificationOperator: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    subscriptionDuration(overrides?: CallOverrides): Promise<BigNumber>;
    subscriptionPrice(overrides?: CallOverrides): Promise<BigNumber>;
    supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    symbol(overrides?: CallOverrides): Promise<string>;
    tokenURI(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, code: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    ttl(overrides?: CallOverrides): Promise<BigNumber>;
    verificationOperator(overrides?: CallOverrides): Promise<string>;
    withdraw(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        POOL_SIZE(overrides?: CallOverrides): Promise<BigNumber>;
        approve(to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        balanceOf(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        baseUri(overrides?: CallOverrides): Promise<string>;
        changeCodeMode(code: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        clearCodeRouter(code: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        clearCodeSipDomain(code: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        defaultSipDomain(overrides?: CallOverrides): Promise<string>;
        getApproved(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        getCodeData(code: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<RootRouter.CodeDataStructOutput>;
        getCodeStatus(code: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<number>;
        getCodeStatuses(overrides?: CallOverrides): Promise<number[]>;
        getNodeData(code: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<RootRouter.NodeDataStructOutput>;
        getOwnerCodes(adr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean[]>;
        getPoolCodes(overrides?: CallOverrides): Promise<boolean[]>;
        hasOwner(code: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        holdDuration(overrides?: CallOverrides): Promise<BigNumber>;
        isApprovedForAll(owner: PromiseOrValue<string>, operator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        mint(code: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        mintPrice(overrides?: CallOverrides): Promise<BigNumber>;
        modeChangePrice(overrides?: CallOverrides): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
        ownerOf(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        renewSubscription(code: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        renounceOwnershipOfCode(code: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        "safeTransferFrom(address,address,uint256)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        "safeTransferFrom(address,address,uint256,bytes)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, code: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        setApprovalForAll(operator: PromiseOrValue<string>, approved: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        setBaseUri(newBaseUri: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setCodeBlockedStatus(code: PromiseOrValue<BigNumberish>, newBlockedStatus: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        setCodeHoldEndTime(code: PromiseOrValue<BigNumberish>, newHoldEndTime: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setCodeRouter(code: PromiseOrValue<BigNumberish>, newChainId: PromiseOrValue<BigNumberish>, newAdr: PromiseOrValue<string>, newPoolCodeLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setCodeSipDomain(code: PromiseOrValue<BigNumberish>, newSipDomain: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setCodeSubscription(code: PromiseOrValue<BigNumberish>, newSubscriptionEndTime: PromiseOrValue<BigNumberish>, newHoldEndTime: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setCodeSubscriptionEndTime(code: PromiseOrValue<BigNumberish>, newSubscriptionEndTime: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setCodeVerifiedStatus(code: PromiseOrValue<BigNumberish>, newVerifiedStatus: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        setDefaultSipDomain(newDefaultSipDomain: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setHoldDuration(newHoldDuration: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setMintPrice(newMintPrice: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setModeChangePrice(newModeChangePrice: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setSubscriptionDuration(newSubscriptionDuration: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setSubscriptionPrice(newSubscriptionPrice: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setTtl(newTtl: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setVerificationOperator(newVerificationOperator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        subscriptionDuration(overrides?: CallOverrides): Promise<BigNumber>;
        subscriptionPrice(overrides?: CallOverrides): Promise<BigNumber>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        symbol(overrides?: CallOverrides): Promise<string>;
        tokenURI(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, code: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        ttl(overrides?: CallOverrides): Promise<BigNumber>;
        verificationOperator(overrides?: CallOverrides): Promise<string>;
        withdraw(overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "Approval(address,address,uint256)"(owner?: PromiseOrValue<string> | null, approved?: PromiseOrValue<string> | null, tokenId?: PromiseOrValue<BigNumberish> | null): ApprovalEventFilter;
        Approval(owner?: PromiseOrValue<string> | null, approved?: PromiseOrValue<string> | null, tokenId?: PromiseOrValue<BigNumberish> | null): ApprovalEventFilter;
        "ApprovalForAll(address,address,bool)"(owner?: PromiseOrValue<string> | null, operator?: PromiseOrValue<string> | null, approved?: null): ApprovalForAllEventFilter;
        ApprovalForAll(owner?: PromiseOrValue<string> | null, operator?: PromiseOrValue<string> | null, approved?: null): ApprovalForAllEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        "Transfer(address,address,uint256)"(from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, tokenId?: PromiseOrValue<BigNumberish> | null): TransferEventFilter;
        Transfer(from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, tokenId?: PromiseOrValue<BigNumberish> | null): TransferEventFilter;
    };
    estimateGas: {
        POOL_SIZE(overrides?: CallOverrides): Promise<BigNumber>;
        approve(to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        balanceOf(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        baseUri(overrides?: CallOverrides): Promise<BigNumber>;
        changeCodeMode(code: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        clearCodeRouter(code: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        clearCodeSipDomain(code: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        defaultSipDomain(overrides?: CallOverrides): Promise<BigNumber>;
        getApproved(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getCodeData(code: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getCodeStatus(code: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getCodeStatuses(overrides?: CallOverrides): Promise<BigNumber>;
        getNodeData(code: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getOwnerCodes(adr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getPoolCodes(overrides?: CallOverrides): Promise<BigNumber>;
        hasOwner(code: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        holdDuration(overrides?: CallOverrides): Promise<BigNumber>;
        isApprovedForAll(owner: PromiseOrValue<string>, operator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        mint(code: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        mintPrice(overrides?: CallOverrides): Promise<BigNumber>;
        modeChangePrice(overrides?: CallOverrides): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        ownerOf(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        renewSubscription(code: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        renounceOwnershipOfCode(code: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "safeTransferFrom(address,address,uint256)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "safeTransferFrom(address,address,uint256,bytes)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, code: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setApprovalForAll(operator: PromiseOrValue<string>, approved: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setBaseUri(newBaseUri: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setCodeBlockedStatus(code: PromiseOrValue<BigNumberish>, newBlockedStatus: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setCodeHoldEndTime(code: PromiseOrValue<BigNumberish>, newHoldEndTime: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setCodeRouter(code: PromiseOrValue<BigNumberish>, newChainId: PromiseOrValue<BigNumberish>, newAdr: PromiseOrValue<string>, newPoolCodeLength: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setCodeSipDomain(code: PromiseOrValue<BigNumberish>, newSipDomain: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setCodeSubscription(code: PromiseOrValue<BigNumberish>, newSubscriptionEndTime: PromiseOrValue<BigNumberish>, newHoldEndTime: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setCodeSubscriptionEndTime(code: PromiseOrValue<BigNumberish>, newSubscriptionEndTime: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setCodeVerifiedStatus(code: PromiseOrValue<BigNumberish>, newVerifiedStatus: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setDefaultSipDomain(newDefaultSipDomain: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setHoldDuration(newHoldDuration: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setMintPrice(newMintPrice: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setModeChangePrice(newModeChangePrice: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setSubscriptionDuration(newSubscriptionDuration: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setSubscriptionPrice(newSubscriptionPrice: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setTtl(newTtl: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setVerificationOperator(newVerificationOperator: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        subscriptionDuration(overrides?: CallOverrides): Promise<BigNumber>;
        subscriptionPrice(overrides?: CallOverrides): Promise<BigNumber>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<BigNumber>;
        tokenURI(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, code: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        ttl(overrides?: CallOverrides): Promise<BigNumber>;
        verificationOperator(overrides?: CallOverrides): Promise<BigNumber>;
        withdraw(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        POOL_SIZE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        approve(to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        balanceOf(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        baseUri(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        changeCodeMode(code: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        clearCodeRouter(code: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        clearCodeSipDomain(code: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        defaultSipDomain(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getApproved(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getCodeData(code: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getCodeStatus(code: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getCodeStatuses(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getNodeData(code: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getOwnerCodes(adr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPoolCodes(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        hasOwner(code: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        holdDuration(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isApprovedForAll(owner: PromiseOrValue<string>, operator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        mint(code: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        mintPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        modeChangePrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        ownerOf(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renewSubscription(code: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        renounceOwnershipOfCode(code: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "safeTransferFrom(address,address,uint256)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "safeTransferFrom(address,address,uint256,bytes)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, code: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setApprovalForAll(operator: PromiseOrValue<string>, approved: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setBaseUri(newBaseUri: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setCodeBlockedStatus(code: PromiseOrValue<BigNumberish>, newBlockedStatus: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setCodeHoldEndTime(code: PromiseOrValue<BigNumberish>, newHoldEndTime: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setCodeRouter(code: PromiseOrValue<BigNumberish>, newChainId: PromiseOrValue<BigNumberish>, newAdr: PromiseOrValue<string>, newPoolCodeLength: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setCodeSipDomain(code: PromiseOrValue<BigNumberish>, newSipDomain: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setCodeSubscription(code: PromiseOrValue<BigNumberish>, newSubscriptionEndTime: PromiseOrValue<BigNumberish>, newHoldEndTime: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setCodeSubscriptionEndTime(code: PromiseOrValue<BigNumberish>, newSubscriptionEndTime: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setCodeVerifiedStatus(code: PromiseOrValue<BigNumberish>, newVerifiedStatus: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setDefaultSipDomain(newDefaultSipDomain: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setHoldDuration(newHoldDuration: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setMintPrice(newMintPrice: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setModeChangePrice(newModeChangePrice: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setSubscriptionDuration(newSubscriptionDuration: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setSubscriptionPrice(newSubscriptionPrice: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setTtl(newTtl: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setVerificationOperator(newVerificationOperator: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        subscriptionDuration(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        subscriptionPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tokenURI(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, code: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        ttl(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        verificationOperator(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        withdraw(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
