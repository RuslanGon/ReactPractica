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
    <ul>
        {Array.isArray(boxUser) &&
          boxUser.map(user => {
            return (
              <li key={user.id}>
                <p>email: {user.userEmail}</p>
                <p>name: {user.userName}</p>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
};

export default MailBox;