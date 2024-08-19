import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';
import {environment} from "@/environment/environment";

class Client {
    clientInstance: AxiosInstance;

    constructor() {
        this.clientInstance = axios.create({
            baseURL: environment.apiBaseUrl,
            timeout: 5000, // Timeout if necessary
        });
    }

    get = (args: {url: string; config?: AxiosRequestConfig<any>}) => {
        return this.clientInstance.get(args.url, args.config);
    };

    post = (args: {
        url: string;
        data?: any;
        config?: AxiosRequestConfig<any>;
    }) => {
        return this.clientInstance.post(args.url, args.data, args.config);
    };

    put = (args: {url: string; data?: any; config?: AxiosRequestConfig<any>}) => {
        return this.clientInstance.put(args.url, args.data, args.config);
    };

    delete = (args: {url: string; config?: AxiosRequestConfig<any>}) => {
        return this.clientInstance.delete(args.url, args.config);
    };

    patch = (args: {
        url: string;
        data?: any;
        config?: AxiosRequestConfig<any>;
    }) => {
        return this.clientInstance.patch(args.url, args.data, args.config);
    };
}

export default new Client();
