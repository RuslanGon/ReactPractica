import { useDispatch, useSelector } from "react-redux"
import { selectFilter } from "../../redux/mailbox/selectors.js"
import { setFilter } from "../../redux/mailbox/mailboxReduser.js"

const MailBoxFilter = () => {

const dispatch = useDispatch()
const filter = useSelector(selectFilter)

  const onChangeFilter = (event) => {

    dispatch(setFilter(event.target.value))

    // setFilter(event.target.value)
  }

  return (
    <div>
    <h3>Search user by name or emaile</h3>
    <input
      type="text"
      placeholder="🔍  search..."
      value={filter}
      onChange={onChangeFilter}
    />
  </div>
  )
}

export default MailBoxFilter