import * as fetch from 'isomorphic-fetch'

const insightApiUrl = 'https://test-insight.bitpay.com/api'

export function fetchTxByHash(txHash: string): Promise<any> {
  const url = `${insightApiUrl}/rawtx/${txHash}`

  return fetch(url)
    .then((response: Response) => response.json())
    .then((json: any) => json.rawtx)
}

export function fetchRawBlockByHash(hash: string): Promise<string> {
  return fetch(`${insightApiUrl}/rawblock/${hash}`)
    .then((response: Response) => response.json())
    .then(json => json.rawblock as string)
}

function fetchBlockHash(height: number): Promise<string> {
  return fetch(`${fetchTxByHash}/block-index/${height}`)
    .then((response: Response) => response.json())
    .then(json => json.blockHash as string)
}

function fetchBlockHeight(hash: string): Promise<number> {
  return fetch(`${fetchTxByHash}/block/${hash}`)
    .then((response: Response) => response.json())
    .then(json => json.height)
}

