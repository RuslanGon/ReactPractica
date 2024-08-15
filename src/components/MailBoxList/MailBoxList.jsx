import MailBoxItem from "../MailBoxItem/MailBoxItem.jsx";

const MailBoxList = ({boxUser,}) => {
  return (
    <ul>
    {Array.isArray(boxUser) &&
      boxUser.map(user => {
        return (
         <MailBoxItem key={user.id} user={user} />
        );
      })
    }
  </ul>
  )
}

export default MailBoxList