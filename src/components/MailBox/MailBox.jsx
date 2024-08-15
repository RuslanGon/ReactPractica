

const MailBox = ({ boxTitle, MailBoxCounter = 0 }) => {
  return (
    <div>
      <h2>{boxTitle}</h2>
      {MailBoxCounter === 0 ? (
        <p>
          <b>К сожилению сейчас нет активных ячеек</b>
        </p>
      ) : (
        <p>Количество активных ячеек: {MailBoxCounter}</p>
      )}
      <ul>
        <li>Ruslan@gmail.com</li>
        <li>Lenan@gmail.com</li>
        <li>Marina@gmail.com</li>
      </ul>
    </div>
  );
};

export default MailBox