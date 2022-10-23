import express from 'express';
import router from './Routes/items.route';
import cors from 'cors';

export default class Server {

    private app;
    private port: string;
    private apiPath = {
        items: '/api/items'
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8080';

        this.middlewares();
        this.loadRoutes();
    }

    private middlewares(): void {
        this.app.use(cors());
        this.app.use(express.json())
    }

    private loadRoutes(): void {
        this.app.use(this.apiPath.items, router)
    }

    public listen(): void {
        this.app.listen(this.port, () => {
            console.log(this.port);
        })
    }
}
