import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { DeployFunction } from 'hardhat-deploy/types'

import factorys from '../constants/factorys'

const func: DeployFunction = async function ({ deployments, getNamedAccounts, network }: HardhatRuntimeEnvironment) {
    const { deploy, get } = deployments
    const { deployer } = await getNamedAccounts()

    const weth = await get("WETH9")
    const factory = factorys[network.name] || "";
    await deploy("UniswapV2Router02", {
        from: deployer,
        args: [factory, weth.address],
        log: true
    })
}

func.tags = ["RouterV2"]
export default func

