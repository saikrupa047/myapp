import './Notify.css';
import notification from './notification.gif';
function Notify()
{
  return(
    <span className="icon_with_label">
    <input className="bell_icon" type="image" name="notifications" src={notification} alt=""></input>
    <label className="bell_icon_label">Notifications</label>
    </span>
  );
}

export default Notify;