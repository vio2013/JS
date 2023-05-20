import { type } from "os";

let msg: "Hello" = "Hello";
msg = "Hello";

type Config = {protocol: "https" | "http"; port: 3000 | 3001};
type Role = {
    role:string
}
type ConfigWithRole = Config & Role;
const serverConfig : ConfigWithRole = {
    protocol: "https",
    port: 3001,
    role: "admin",
}
const backupConfig : ConfigWithRole = {
    protocol: "http",
    port: 3000,
    role: "syadmin"
}

