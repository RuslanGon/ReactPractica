import MailBoxList from "../MailBoxList/MailBoxList.jsx";
import css from '../MailBox/MailBox.module.css'

const MailBox = ({ boxTitle, MailBoxCounter = 0, boxUser }) => {
  return (
    <div className={css.maildiv}>
      <h2 className={css.title}>{boxTitle}</h2>
      {MailBoxCounter === 0 ? (
        <p>
          <b>К сожалению, сейчас нет активных ячеек</b>
        </p>
      ) : (
        <p>Количество активных ячеек: {MailBoxCounter}</p>
      )}
      <MailBoxList boxUser={boxUser} />
    </div>
  );
};

export default MailBox;
