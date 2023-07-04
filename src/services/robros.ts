import type { AxiosRequestConfig } from 'axios';
import ApiService from ".";

const robros = new ApiService('https://staging-hcnchms.robros.dev/api/v2/pages/')

const getPage = (url: string, additionalUrlParams?: AxiosRequestConfig) => robros.get({
    url: url,
    params: additionalUrlParams,
})

export {
    getPage,
}