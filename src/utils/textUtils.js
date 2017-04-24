import { fromWei } from '../api/web3Api';

export function getAccountString(account) {
    return account.address + " (" + fromWei(account.balance) + " ETH)"
}