import axios, { AxiosInstance } from 'axios'

// TODO: Optimize backend - favorites
let instance = axios.create({
    timeout: 5000
})

type AxiosConfig = {
    services: {
        btApiGateway: {
            clientId: string;
            timeout: number;
        };
    };
};

class BTApiGatewayAxiosUtils {
    static config: {
        services?: {
            clientId: string;
            timeout: number;
            url?: string;
        };
    };

    static initAxiosConfig(appConfig: AxiosConfig): void {
        // Overwrite timeout after app config api loads
        instance = axios.create({
            timeout: appConfig.services.btApiGateway.timeout || 5000
        })
        this.config = {}
        this.config.services = appConfig.services.btApiGateway
        instance.defaults.headers['x-ibm-client-id'] =
            appConfig.services.btApiGateway.clientId
    }

    static getInstance(): AxiosInstance {
        return instance
    }

    static buildUrl(basePathURl: string): undefined | string {
        if (typeof this.config.services !== 'undefined')
            return `${this.config.services.url}${basePathURl}`
    }
}
export default BTApiGatewayAxiosUtils
