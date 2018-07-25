/// <reference types="node" />
import { Server } from 'http';
declare type TServerListenCallback = () => void;
declare class CStaticServer {
    useStatic(path: string, localPath?: string): this;
    listen(port: number, domain?: string | TServerListenCallback | null, callback?: TServerListenCallback): Server;
}
declare const StaticServer: CStaticServer;
export default StaticServer;
