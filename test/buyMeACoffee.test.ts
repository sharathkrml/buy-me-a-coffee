import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { deployments, ethers } from "hardhat";
import { describe } from "mocha";
import { BuyMeACoffee } from "../typechain-types";

describe("BuyMeACoffee Test!!", () => {
  let buyMeACoffee: BuyMeACoffee;
  let accounts: SignerWithAddress[];
  const tip = { value: ethers.utils.parseEther("1") };

  beforeEach(async () => {
    await deployments.fixture(["all"]);
    accounts = await ethers.getSigners();
    buyMeACoffee = await ethers.getContract("BuyMeACoffee");
  });
});
