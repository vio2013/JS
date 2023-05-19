import { type } from "os";

let msg: "Hello" = "Hello";
msg = "Hello";

type Config = {protocol: "https" | "http"; port: 3000 | 3001};

const serverConfig : Config = {
    protocol: "https",
    port: 3001,
}
const backupConfig : Config = {
    protocol: "http",
    port: 3000,
}
