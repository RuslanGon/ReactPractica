

const MAilBoxForm = () => {
  return (
    <form>
      <h2>Add new MailBox user</h2>
      <label>
        <span>User email</span>
        <br />
        <input type="email" name="userEmail" placeholder="email" required />
        <br />
        <button>Create new user 👱</button>
      </label>
    </form>
  );
};

export default MAilBoxForm