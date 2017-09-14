#!/usr/bin/env node

const bitcore = require('bitcore-lib')

import { getPoetData } from './poet'
import { fetchRawBlockByHash } from './insight'

async function main(blockHash: string) {
  if (!blockHash) {
    console.log('Must pass blockHash')
    return
  }

  console.log('Retrieving block', blockHash)
  const rawblock = await fetchRawBlockByHash(blockHash)

  const block = bitcore.Block(Buffer.from(rawblock, 'hex'))

  const poetDatas = block.transactions
    .map(getPoetData)
    .filter(_ => _)

  console.log()

  if (poetDatas && poetDatas.length) {
    console.log('Found Po.et data:')
    console.log(JSON.stringify(poetDatas, null, 2))
  } else {
    console.log('Did not find Po.et data.')
  }

}

main(process.argv[2])