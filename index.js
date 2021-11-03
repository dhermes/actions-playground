/**
 * Copyright (c) 2021 - Present. Blend Labs, Inc. All rights reserved
 * Blend Confidential - Restricted
 */

const childProcess = require('child_process')
const os = require('os')
const process = require('process')

const VERSION = '47fb33e06eb82728bb4cb8172138563b04b3b38f'

function chooseBinary() {
    const platform = os.platform()
    const arch = os.arch()

    if (platform === 'darwin' && arch === 'x64') {
        return `main-darwin-amd64-${VERSION}`
    }
    if (platform === 'darwin' && arch === 'arm64') {
        return `main-darwin-arm64-${VERSION}`
    }
    if (platform === 'linux' && arch === 'x64') {
        return `main-linux-amd64-${VERSION}`
    }
    if (platform === 'linux' && arch === 'arm64') {
        return `main-linux-arm64-${VERSION}`
    }
    if (platform === 'windows' && arch === 'x64') {
        return `main-windows-amd64-${VERSION}`
    }
    if (platform === 'windows' && arch === 'arm64') {
        return `main-windows-arm64-${VERSION}`
    }

    console.error(`Unsupported platform (${platform}) and architecture (${arch})`)
    process.exit(1)
}

function main() {
    const binary = chooseBinary()
    const mainScript = `${__dirname}/${binary}`
    const spawnSyncReturns = childProcess.spawnSync(mainScript, { stdio: 'inherit' })
    const status = spawnSyncReturns.status
    if (typeof status === 'number') {
        process.exit(status)
    }
    process.exit(1)
}

if (require.main === module) {
    main()
}
