import axios from 'axios';
import type { AxiosInstance, AxiosResponse, AxiosRequestConfig} from 'axios';


class ApiService {
    baseUrl: string;
    service: AxiosInstance;

    constructor(url: string) {
        this.baseUrl = url;
        
        const service = axios.create({
            baseURL: this.baseUrl,
            headers: {
                'Content-type': 'application/json',
                // 'Access-Control-Allow-Origin': '*',
                // 'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                // 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
            }
        })

        service.interceptors.response.use(this.handleSuccess)

        this.service = service;
    }

    handleSuccess(response: AxiosResponse) {
        console.log('test12')
        return response;
    }

    get(args: AxiosRequestConfig) {
        const url = args.url ?? ''
        return this.service.get(url, args);
    }

    post(args: AxiosRequestConfig) {
        const url = args.url ?? ''
        return this.service.post(url, args);
    }
    
}

export default ApiService;
