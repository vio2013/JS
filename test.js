var serverNewConfig = {
    protocol: "https",
    port: 3001,
    role: "admin",
};
var backupConfig = {
    protocol: "http",
    port: 3000
};
var startNewServer = function (config) {
    console.log("Server started on ".concat(config.protocol, "://server:").concat(config.port));
    return "Server started";
};
startNewServer(serverNewConfig);
startNewServer(backupConfig);
startNewServer(backupConfig);
