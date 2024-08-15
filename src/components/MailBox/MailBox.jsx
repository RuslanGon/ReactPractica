import MailBoxList from "../MailBoxList/MailBoxList.jsx";

const MailBox = ({ boxTitle, MailBoxCounter = 0, boxUser }) => {
  return (
    <div>
      <h2>{boxTitle}</h2>
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
