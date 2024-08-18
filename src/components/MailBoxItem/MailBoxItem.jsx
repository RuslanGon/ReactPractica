import css from '../MailBoxItem/MailBoxItem.module.css'

const MailBoxItem = ({ user, onDeletUser }) => {
  return (
    <li>
    <p>Email: {user.userEmail}</p>
    <p className={css.name}>Name: <span style={{backgroundColor: user.favColor}} className={css.color} /> {user.userName}</p>
    <button type="button" onClick={() => onDeletUser(user.id)}>❌ Delete user</button>
  </li>
  );
};


export default MailBoxItem


