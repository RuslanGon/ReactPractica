import MailBoxList from "../MailBoxList/MailBoxList.jsx";
import css from '../MailBox/MailBox.module.css'


const MailBox = ({ boxTitle, boxUser }) => {

  return (
    <div className={css.maildiv}>
      <h2 className={css.title}>{boxTitle}</h2>
      <MailBoxList boxUser={boxUser} />
    </div>
  );
};

export default MailBox;
