interface Server {
    name: string;
    ip: string;
    status: "online" | "offline";
}

export type {
    Server
}