

const Msg = ({message}) => {
    const { user, body, uid, photoURL, createdAt } = message;
    return (
        <div>
            <div>
                <img src={photoURL} alt="" />
            </div>
            <div>
                <h5>{user}</h5>
                <p>{body}</p>
            </div>
        </div>
    )
}

export default Msg;