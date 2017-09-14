#!/usr/bin/env node

const bitcore = require('bitcore-lib')

import { getPoetData } from './poet'
import { fetchTxByHash } from './insight'

async function main(txId: string) {
  if (!txId) {
    console.log('Must pass txId')
    return
  }

  console.log('Retrieving transaction', txId)
  const rawtx = await fetchTxByHash(txId)
  const tx = bitcore.Transaction(rawtx)
  console.log('Transaction retrieved successfully.')
  console.log()

  console.log('Scanning transaction...')
  const poetData = getPoetData(tx)

  console.log()

  if (poetData) {
    console.log('Found Po.et data:')
    console.log(JSON.stringify(poetData, null, 2))
  } else {
    console.log('Did not find Po.et data.')
  }

}

main(process.argv[2])