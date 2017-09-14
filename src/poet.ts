const bitcore = require('bitcore-lib')

export const PREFIX_POET = Buffer.from('POET')
export const PREFIX_BARD = Buffer.from('BARD')

export function getPoetData(tx: any): any {
  function isOutputDataOut(output: any) {
    return output.script.classify() === bitcore.Script.types.DATA_OUT
  }

  function isOutputCorrectNetworkAndVersion(output: any) {
    const data: Buffer = output.script.getData()
    return data.indexOf(PREFIX_POET) === 0
      || data.indexOf(PREFIX_BARD) === 4
  }

  const output = tx.outputs
    .filter(isOutputDataOut)
    .find(isOutputCorrectNetworkAndVersion)

  const data: Buffer = output && output.script.getData()

  return data && {
    transactionHash: tx.hash,
    outputIndex: tx.outputs.indexOf(output),
    prefix: data.slice(0, 4).toString(),
    version: Array.from(data.slice(4, 8)).join(),
    torrentHash: data.slice(8).toString('hex')
  }
}