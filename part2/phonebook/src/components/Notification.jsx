const Notification = ({alertMessage}) => {
    return (
        <div className={`notification ${alertMessage.type}`}>
            {alertMessage.text}
        </div>
    )
}

export default Notification;