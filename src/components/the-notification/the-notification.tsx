import css from './the-notification.module.css'

const TheNotification = () => {
    return (
        <div className={css.container}>
        <p className={css.message}>No feedback yet</p>
        </div>
    );
};


export default TheNotification;