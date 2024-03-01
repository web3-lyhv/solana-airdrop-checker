# Solana Airdrop checker

## Prerequisite

- Node

## Install

```
npm install
```

## Run

```
ts-node src/index.ts --addresses [your_path].txt
```

> **_NOTE:_**  
> `[your_path].txt` is the path to the file containing the list of addresses to check, that contains one address per line.
>
> Example:
>
> ```
> EtfaPcTB9xt4QD4ixdmffU7SLYraKXnDM6YMxpgoaz1o
> EoJLNYSqtc36po2sD3NKZpv1NEu4UmNWTdG84uJVhNkU
> ```

## Example

```
ts-node src/index.ts --addresses ./addresses.txt

Result:
┌─────────┬────────────────────────────────────────────────┬───────────┬─────┬──────┬─────────┬─────┬─────┬──────┬──────┬─────┬──────┬─────────────┐
│ (index) │ address                                        │ WEN       │ JTO │ HXRO │ PYTH    │ JUP │ LFG │ BONK │ FOMO │ RKT │ PONK │ BSKT        │
├─────────┼────────────────────────────────────────────────┼───────────┼─────┼──────┼─────────┼─────┼─────┼──────┼──────┼─────┼──────┼─────────────┤
│ 0       │ 'EtfaPcTB9xt4QD4ixdmffU7SLYraKXnDM6YMxpgoaz1o' │ '643,652' │ '0' │ '0'  │ '1,000' │ '0' │ '0' │ '0'  │ '0'  │ '0' │ '0'  │ '1,150,000' │
│ 1       │ 'EoJLNYSqtc36po2sD3NKZpv1NEu4UmNWTdG84uJVhNkU' │ '643,652' │ '0' │ '0'  │ '0'     │ '0' │ '0' │ '0'  │ '0'  │ '0' │ '0'  │ '400,000'   │
└─────────┴────────────────────────────────────────────────┴───────────┴─────┴──────┴─────────┴─────┴─────┴──────┴──────┴─────┴──────┴─────────────┘
Output eligible airdrop path: /Users/lyhv/Documents/crypto/solana_check_airdrop/src/output.json
```
## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)