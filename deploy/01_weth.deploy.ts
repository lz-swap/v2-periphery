import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { DeployFunction } from 'hardhat-deploy/types'

const func: DeployFunction = async function ({ deployments, getNamedAccounts }) {
    const { deploy } = deployments
    const { deployer } = await getNamedAccounts()
    await deploy("WETH9", {
        from: deployer,
        args: [],
        log: true
    })
}

func.tags = ["WETH9"]
export default func

