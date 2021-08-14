const Msg = ({ message, day }) => {
  const { user, body, uid, photoURL, createdAt } = message;
  return (
    <div>
      {day && (
        <div className="day">{`${createdAt.split(" ")[0]} ${
          createdAt.split(" ")[2]
        } ${createdAt.split(" ")[3]}`}</div>
      )}
      <div data-id={uid} className="msg">
        <img src={photoURL} alt="" />
        <div className="msg-value">
          <p>{body}</p>
        </div>
        <div className="infos">
          {user}-
          {createdAt.split(" ")[4].split(":")[0] +
            ":" +
            createdAt.split(" ")[4].split(":")[1]}
        </div>
      </div>
    </div>
  );
};

export default Msg;
