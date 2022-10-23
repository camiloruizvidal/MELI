import dotenv from 'dotenv';
import Server from './src/app/Server'

dotenv.config();

const server: Server = new Server();
server.listen()


