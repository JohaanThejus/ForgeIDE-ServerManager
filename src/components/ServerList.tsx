import "../styles/serverlist.css";
import { Server } from "../utils/Server";
import { ServerRef } from "./ServerRef";
function ServerList() {
  let servers : Server[] = [
    { name: "dev1::auto-created", ip: "localhost:3000", connected: true, id: "1"},
    { name: "dev1::auto-created", ip: "localhost:3000", connected: true, id: "1"},
    { name: "dev1::auto-created", ip: "localhost:3000", connected: true, id: "1"},
    { name: "dev1::auto-created", ip: "localhost:3000", connected: true, id: "1"},
    { name: "dev1::auto-created", ip: "localhost:3000", connected: true, id: "1"},
    { name: "dev1::auto-created", ip: "localhost:3000", connected: true, id: "1"},
    { name: "dev1::auto-created", ip: "localhost:3000", connected: true, id: "1"},
    { name: "dev1::auto-created", ip: "localhost:3000", connected: true, id: "1"},
    { name: "dev1::auto-created", ip: "localhost:3000", connected: true, id: "1"},
    { name: "dev1::auto-created", ip: "localhost:3000", connected: true, id: "1"},
    { name: "dev1::auto-created", ip: "localhost:3000", connected: true, id: "1"},
    { name: "dev1::auto-created", ip: "localhost:3000", connected: true, id: "1"},
    { name: "dev1::auto-created", ip: "localhost:3000", connected: true, id: "1"},
    { name: "dev1::auto-created", ip: "localhost:3000", connected: true, id: "1"},
    { name: "dev1::auto-created", ip: "localhost:3000", connected: true, id: "1"},
    { name: "dev1::auto-created", ip: "localhost:3000", connected: true, id: "1"},
    { name: "dev1::auto-created", ip: "localhost:3000", connected: true, id: "1"},
    { name: "dev1::auto-created", ip: "localhost:3000", connected: true, id: "1"},
    { name: "dev1::auto-created", ip: "localhost:3000", connected: true, id: "1"},
    { name: "dev1::auto-created", ip: "localhost:3000", connected: true, id: "1"},
    { name: "dev1::auto-created", ip: "localhost:3000", connected: true, id: "1"},
    
  ];


//   const createNewServerRef = () => {
//     console.log("creating new server ref")
//   }
  return (
    <div className="list-container">
        {servers.map((server, index) => (
            <ServerRef key={index} server={server}/>
        ))}
    </div>
  );
}

export default ServerList;