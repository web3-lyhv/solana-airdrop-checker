import axios, { AxiosInstance, AxiosResponse } from 'axios'
import * as fs from 'fs';
import _ from 'lodash';
const outputPath = "output.json"
interface Eligibility {
    protocol: string;
    ticker: string;
    eligible: boolean;
    amount: number;
}

interface AddressData {
    address: string;
    eligibility: Eligibility[];
}


async function fetchAirdrop(api: AxiosInstance, addresses: string[]): Promise<AddressData[]> {
    const params = addresses.join(',')
    const response = await api.get('', {
        params: {
            addresses: params,
        }
    })
    return response.data as AddressData[]
}
(async () => {
    const argv = require("yargs").string("wn").parserConfiguration({
        "parse-numbers": false,
    }).argv;
    const addressPath = argv.addresses;
    const api = axios.create({
        baseURL: 'https://sac-api.solworks.dev/addresses',
        headers: {
            'accept-language': 'en-US,en;q=0.9,vi;q=0.8',
            'content-type': 'application/json',
            'x-api-key': argv.apikey
        }
    });
    const checkAddress = fs.readFileSync(addressPath, 'utf-8').split('\n').filter(line => line.trim() !== '');
    const addressList = _.chunk(checkAddress, 5);
    const eligibilityList: any[] = []
    for (const chunkAddress of addressList) {
        const eligibilities = await fetchAirdrop(api, chunkAddress);
        console.log(`Loaded address: ${JSON.stringify(checkAddress)}`)
        for (const item of eligibilities) {
            const json = { address: item.address } as any
            const listDrop = item.eligibility
            for (let index = 0; index < listDrop.length; index++) {
                const element = listDrop[index];
                json[element.ticker] = element.amount.toLocaleString()
            }
            eligibilityList.push(json)
        }
    }
    console.table(eligibilityList)
    console.log(`Output eligible airdrop path: ${__dirname}/${outputPath} `)
    fs.writeFileSync(outputPath, JSON.stringify(eligibilityList), 'utf-8')
})().then(() => {
    process.exit(0)
}).catch((err) => {
    console.log(err)
    process.exit(1)
})