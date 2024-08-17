
import css from '../MailBoxItem/MailBoxItem.module.css'

const MailBoxItem = ({ user, onDeleteUser }) => {
  return (
    <li className={css.itemli} key={user.id}>
      <p className={css.itemtext}>
        <b>email</b>: {user.userEmail}
      </p>
      <p className={css.itemtext}>
        <b>name</b>: {user.userName}
      </p>
      <button type='submit' onClick={() => onDeleteUser(user.id)}>❌ User</button>
    </li>
  );
};

export default MailBoxItem