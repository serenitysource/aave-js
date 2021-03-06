/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { ILendToAaveMigrator } from "../ILendToAaveMigrator";

export class ILendToAaveMigrator__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ILendToAaveMigrator {
    return new Contract(address, _abi, signerOrProvider) as ILendToAaveMigrator;
  }
}

const _abi = [
  {
    inputs: [],
    name: "LEND",
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
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "migrateFromLEND",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
