import "../styles/serverlist.css";
import { Server } from "../utils/Server";
function ServerList() {
  let servers : Server[] = [
    { name: "dev1::auto-created", ip: "localhost:3000", status: "online" },
  ];

  const createNewServerRef = () => {
    console.log("creating new server ref")
  }
  return (
    <div className="list-container">
      
    </div>
  );
}

export default ServerList;