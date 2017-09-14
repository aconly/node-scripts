# Po.et Node Scripts

### How to Install
Install this package globally and it'll link some utils that you can run from your shell.

`npm i -g poet-node scripts`

Currently hardcoded to use https://test-insight.bitpay.com/ for all the requests.

### How to Use

#### Scan a Transaction for Po.et Data

`scan-tx <tx-id>`

For example:

```
$ scan-tx 1bc4a6f0e1d4aeb0f38c09c685fe9228f4bf6a0b5e91dabbf89b7f0f0a3e983b
Retrieving transaction 1bc4a6f0e1d4aeb0f38c09c685fe9228f4bf6a0b5e91dabbf89b7f0f0a3e983b
Transaction retrieved successfully.

Scanning transaction...

Found Po.et data:
{
  "transactionHash": "1bc4a6f0e1d4aeb0f38c09c685fe9228f4bf6a0b5e91dabbf89b7f0f0a3e983b",
  "outputIndex": 0,
  "prefix": "POET",
  "version": "0,0,0,2",
  "torrentHash": "9e392e799f338a6beb0ff0b76d119790c4156119"
}

```


#### Scan a Block for Po.et Data

Same as `scan-tx`, but runs for all transactions in the block.

Example:

```$xslt
$ scan-block 000000000003900fe3cc34621ff6e2c0e91bd92ab26b20f990ad338367d99ca2
Retrieving block 000000000003900fe3cc34621ff6e2c0e91bd92ab26b20f990ad338367d99ca2

Found Po.et data:
[
  {
    "transactionHash": "3a2419a13c5f5b437587dbcb57ae95dc2420cf4c92124f4ebc4be7d9a6d865a4",
    "outputIndex": 0,
    "prefix": "POET",
    "version": "0,0,0,2",
    "torrentHash": "f22c2b6b5d67d168ef414610dc14b0f046d37d0d"
  },
  ...
]
```