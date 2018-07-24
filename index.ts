import express from 'express';
import { Server } from 'http';
const app = express();

type TServerListenCallback = () => void;

class CStaticServer {
    public useStatic(path: string, localPath?: string) {
        if (!localPath) {
            app.use(express.static(path));
        } else {
            app.use(path, express.static(localPath));
        }

        return this;
    }

    public listen(port: number, domain?: string | TServerListenCallback | null, callback?: TServerListenCallback) {
        if (!callback && !!domain && domain instanceof Function) {
            callback = domain;
            domain = null;
        }

        const onListen = () => {
            if (!!callback) {
                callback();
            }
        }

        if (!!domain) {
            return app.listen(port, domain as string, onListen);
        } else {
            return app.listen(port, onListen);
        }
    }
};

const StaticServer = new CStaticServer();

export default StaticServer;
