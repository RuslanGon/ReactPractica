

const MailBoxItem = ({user}) => {
  return (
    <li key={user.id}>
            <p>email: {user.userEmail}</p>
            <p>name: {user.userName}</p>
          </li>
  )
}


export default MailBoxItem