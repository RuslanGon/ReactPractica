import MailBoxList from "../MailBoxList/MailBoxList.jsx";
import css from '../MailBox/MailBox.module.css'
import clsx from 'clsx'

const MailBox = ({ boxTitle, MailBoxCounter = 0, boxUser }) => {

  const isMailBoxCounterFull = MailBoxCounter === 0

  return (
    <div className={clsx(css.maildiv, {
     [css.full] : isMailBoxCounterFull
    })}>
      <h2 className={css.title}>{boxTitle}</h2>
      {MailBoxCounter === 0 ? (
        <p className={css.text}>
          <b>К сожалению, сейчас нет активных ячеек</b>
        </p>
      ) : (
        <p className={css.text}>Количество активных ячеек: {MailBoxCounter}</p>
      )}
      <MailBoxList boxUser={boxUser} />
    </div>
  );
};

export default MailBox;
