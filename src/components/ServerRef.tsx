
import '../styles/serverref.css'
import { Server } from "../utils/Server";

function ServerRef(props: {server: Server}) {
  return (
    <div className='server-container'>
      <div className='server-info'>
        <div className='server-name'>{props.server.name} </div>
        <div className='server-ip'>{props.server.ip}</div>
      </div>
    </div>
  );
}

export { ServerRef };
