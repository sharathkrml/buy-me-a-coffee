import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const deployBuyMeACoffee: DeployFunction = async function (
  hre: HardhatRuntimeEnvironment
) {
  const { deployments, getNamedAccounts } = hre;
  const { deployer } = await getNamedAccounts();
  const { deploy, log } = deployments;
  const buyMeACoffee = await deploy("BuyMeACoffee", {
    from: deployer,
    log: true,
  });
};
export default deployBuyMeACoffee;
deployBuyMeACoffee.tags = ["all"];
