# @mvts/contract-interfaces-js

A set of interfaces for working with smart contracts of the routing system.

***

Interfaces for working with smart contracts:

| Name       | Description                                                                              |
|------------|------------------------------------------------------------------------------------------|
| Curator    | Fully complies with the smart contract. Stores information about the actual root router. |
| Router     | Fully compliant with the router smart contract standard. Used to work with any router.   |
| RootRouter | Fully complies with the smart contract. The root router of the system.                   |

Detailed description of smart contracts and their methods: [MVTS Documentation](https://docs.mvts.io/smart-contracts)

***

For convenience, you can use factories that store the ABI of the corresponding smart contract:
```javascript
const curator = Curator__factory.connect(address, provider);
const router = Router__factory.connect(address, provider);
const rootRouter = RootRouter__factory.connect(address, provider);
```