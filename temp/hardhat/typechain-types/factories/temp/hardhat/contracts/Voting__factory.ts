/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type {
  Voting,
  VotingInterface,
} from "../../../../temp/hardhat/contracts/Voting";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "userId",
        type: "string",
      },
      {
        internalType: "string",
        name: "eventId",
        type: "string",
      },
      {
        internalType: "string",
        name: "candidateId",
        type: "string",
      },
    ],
    name: "castVote",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "userId",
        type: "string",
      },
      {
        internalType: "string",
        name: "eventId",
        type: "string",
      },
      {
        internalType: "string",
        name: "candidateId",
        type: "string",
      },
    ],
    name: "getVote",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "userId",
            type: "string",
          },
          {
            internalType: "string",
            name: "eventId",
            type: "string",
          },
          {
            internalType: "string",
            name: "candidateId",
            type: "string",
          },
        ],
        internalType: "struct Voting.Vote",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "hasVoted",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "votes",
    outputs: [
      {
        internalType: "string",
        name: "userId",
        type: "string",
      },
      {
        internalType: "string",
        name: "eventId",
        type: "string",
      },
      {
        internalType: "string",
        name: "candidateId",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080604052348015600f57600080fd5b50610fb78061001f6000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80631b4613cb146100515780632b38cd9614610081578063cf95a070146100b3578063e5e525cb146100cf575b600080fd5b61006b60048036038101906100669190610725565b6100ff565b604051610078919061076d565b60405180910390f35b61009b60048036038101906100969190610725565b61011f565b6040516100aa93929190610818565b60405180910390f35b6100cd60048036038101906100c89190610999565b6102e1565b005b6100e960048036038101906100e49190610999565b6104a6565b6040516100f69190610ae8565b60405180910390f35b60016020528060005260406000206000915054906101000a900460ff1681565b600060205280600052604060002060009150905080600001805461014290610b39565b80601f016020809104026020016040519081016040528092919081815260200182805461016e90610b39565b80156101bb5780601f10610190576101008083540402835291602001916101bb565b820191906000526020600020905b81548152906001019060200180831161019e57829003601f168201915b5050505050908060010180546101d090610b39565b80601f01602080910402602001604051908101604052809291908181526020018280546101fc90610b39565b80156102495780601f1061021e57610100808354040283529160200191610249565b820191906000526020600020905b81548152906001019060200180831161022c57829003601f168201915b50505050509080600201805461025e90610b39565b80601f016020809104026020016040519081016040528092919081815260200182805461028a90610b39565b80156102d75780601f106102ac576101008083540402835291602001916102d7565b820191906000526020600020905b8154815290600101906020018083116102ba57829003601f168201915b5050505050905083565b60008383836040516020016102f893929190610ba6565b60405160208183030381529060405280519060200120905060008484604051602001610325929190610bd7565b6040516020818303038152906040528051906020012090506000806000848152602001908152602001600020600001805461035f90610b39565b9050146103a1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161039890610c47565b60405180910390fd5b6001600082815260200190815260200160002060009054906101000a900460ff1615610402576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103f990610cd9565b60405180910390fd5b60405180606001604052808681526020018581526020018481525060008084815260200190815260200160002060008201518160000190816104449190610eaf565b50602082015181600101908161045a9190610eaf565b5060408201518160020190816104709190610eaf565b50905050600180600083815260200190815260200160002060006101000a81548160ff0219169083151502179055505050505050565b6104ae6106ba565b60008484846040516020016104c593929190610ba6565b60405160208183030381529060405280519060200120905060008082815260200190815260200160002060405180606001604052908160008201805461050a90610b39565b80601f016020809104026020016040519081016040528092919081815260200182805461053690610b39565b80156105835780601f1061055857610100808354040283529160200191610583565b820191906000526020600020905b81548152906001019060200180831161056657829003601f168201915b5050505050815260200160018201805461059c90610b39565b80601f01602080910402602001604051908101604052809291908181526020018280546105c890610b39565b80156106155780601f106105ea57610100808354040283529160200191610615565b820191906000526020600020905b8154815290600101906020018083116105f857829003601f168201915b5050505050815260200160028201805461062e90610b39565b80601f016020809104026020016040519081016040528092919081815260200182805461065a90610b39565b80156106a75780601f1061067c576101008083540402835291602001916106a7565b820191906000526020600020905b81548152906001019060200180831161068a57829003601f168201915b5050505050815250509150509392505050565b60405180606001604052806060815260200160608152602001606081525090565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b610702816106ef565b811461070d57600080fd5b50565b60008135905061071f816106f9565b92915050565b60006020828403121561073b5761073a6106e5565b5b600061074984828501610710565b91505092915050565b60008115159050919050565b61076781610752565b82525050565b6000602082019050610782600083018461075e565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156107c25780820151818401526020810190506107a7565b60008484015250505050565b6000601f19601f8301169050919050565b60006107ea82610788565b6107f48185610793565b93506108048185602086016107a4565b61080d816107ce565b840191505092915050565b6000606082019050818103600083015261083281866107df565b9050818103602083015261084681856107df565b9050818103604083015261085a81846107df565b9050949350505050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6108a6826107ce565b810181811067ffffffffffffffff821117156108c5576108c461086e565b5b80604052505050565b60006108d86106db565b90506108e4828261089d565b919050565b600067ffffffffffffffff8211156109045761090361086e565b5b61090d826107ce565b9050602081019050919050565b82818337600083830152505050565b600061093c610937846108e9565b6108ce565b90508281526020810184848401111561095857610957610869565b5b61096384828561091a565b509392505050565b600082601f8301126109805761097f610864565b5b8135610990848260208601610929565b91505092915050565b6000806000606084860312156109b2576109b16106e5565b5b600084013567ffffffffffffffff8111156109d0576109cf6106ea565b5b6109dc8682870161096b565b935050602084013567ffffffffffffffff8111156109fd576109fc6106ea565b5b610a098682870161096b565b925050604084013567ffffffffffffffff811115610a2a57610a296106ea565b5b610a368682870161096b565b9150509250925092565b600082825260208201905092915050565b6000610a5c82610788565b610a668185610a40565b9350610a768185602086016107a4565b610a7f816107ce565b840191505092915050565b60006060830160008301518482036000860152610aa78282610a51565b91505060208301518482036020860152610ac18282610a51565b91505060408301518482036040860152610adb8282610a51565b9150508091505092915050565b60006020820190508181036000830152610b028184610a8a565b905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610b5157607f821691505b602082108103610b6457610b63610b0a565b5b50919050565b600081905092915050565b6000610b8082610788565b610b8a8185610b6a565b9350610b9a8185602086016107a4565b80840191505092915050565b6000610bb28286610b75565b9150610bbe8285610b75565b9150610bca8284610b75565b9150819050949350505050565b6000610be38285610b75565b9150610bef8284610b75565b91508190509392505050565b7f566f746520616c72656164792065786973747300000000000000000000000000600082015250565b6000610c31601383610793565b9150610c3c82610bfb565b602082019050919050565b60006020820190508181036000830152610c6081610c24565b9050919050565b7f557365722068617320616c726561647920766f74656420696e2074686973206560008201527f76656e7400000000000000000000000000000000000000000000000000000000602082015250565b6000610cc3602483610793565b9150610cce82610c67565b604082019050919050565b60006020820190508181036000830152610cf281610cb6565b9050919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302610d5b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610d1e565b610d658683610d1e565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b6000610dac610da7610da284610d7d565b610d87565b610d7d565b9050919050565b6000819050919050565b610dc683610d91565b610dda610dd282610db3565b848454610d2b565b825550505050565b600090565b610def610de2565b610dfa818484610dbd565b505050565b5b81811015610e1e57610e13600082610de7565b600181019050610e00565b5050565b601f821115610e6357610e3481610cf9565b610e3d84610d0e565b81016020851015610e4c578190505b610e60610e5885610d0e565b830182610dff565b50505b505050565b600082821c905092915050565b6000610e8660001984600802610e68565b1980831691505092915050565b6000610e9f8383610e75565b9150826002028217905092915050565b610eb882610788565b67ffffffffffffffff811115610ed157610ed061086e565b5b610edb8254610b39565b610ee6828285610e22565b600060209050601f831160018114610f195760008415610f07578287015190505b610f118582610e93565b865550610f79565b601f198416610f2786610cf9565b60005b82811015610f4f57848901518255600182019150602085019450602081019050610f2a565b86831015610f6c5784890151610f68601f891682610e75565b8355505b6001600288020188555050505b50505050505056fea26469706673582212200bb27993d3c0475b3da5e075e871779f049fc306f025bedd5d530e81ad1161f964736f6c634300081b0033";

type VotingConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: VotingConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Voting__factory extends ContractFactory {
  constructor(...args: VotingConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      Voting & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Voting__factory {
    return super.connect(runner) as Voting__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VotingInterface {
    return new Interface(_abi) as VotingInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Voting {
    return new Contract(address, _abi, runner) as unknown as Voting;
  }
}
