
import css from '../MailBoxItem/MailBoxItem.module.css'

const MailBoxItem = ({user}) => {
  return (
    <li key={user.id}>
            <p className={css.itemtext}>email:{user.userEmail}</p>
            <p className={css.itemtext}>name: {user.userName}</p>
          </li>
  )
}

export default MailBoxItem