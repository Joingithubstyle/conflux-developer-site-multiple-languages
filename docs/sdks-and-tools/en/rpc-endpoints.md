---
id: conflux_rpcs
title: Public RPCs endpoints
custom_edit_url: https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/sdks-and-tools/en/rpc-endpoints.md
keywords:
  - endpoints
---

Public available Conflux network RPC endpoints

| Network | Chain ID | Explorer | Endpoint | 
| -------- | -------- | --------| -------- |
| Mainnet | 1029 | https://confluxscan.io | https://main.confluxrpc.com <br/> wss://main.confluxrpc.com/ws |
| Testnet | 1 | https://testnet.confluxscan.io |https://test.confluxrpc.com <br/> wss://test.confluxrpc.com/ws |

## Notes

* The `cfx_getLogs` method's `max epoch gap` is configured to `1000`.
* To ensure the service availability, we have set http's rate limit to [`rate=100r/s burst=80 nodelay`](https://www.nginx.com/blog/rate-limiting-nginx/). If the request ratio succeed the limit, the service will return `503`. If you have requirement to send a lot transaction, one solution is send transaction in batch.

## Backup RPC Endpoints

* Mainnet: https://main.confluxrpc.org
* Testnet: https://test.confluxrpc.org