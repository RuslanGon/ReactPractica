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
        {Array.isArray(boxUser) ? (
          boxUser.map(user => (
            <li key={user.id}>
              <p>Email: {user.userEmail}</p>
              <p>Name: {user.userName}</p>
            </li>
          ))
        ) : (
          <p>boxUser должен быть массивом</p>
        )}
      </ul>
    </div>
  );
};

export default MailBox;