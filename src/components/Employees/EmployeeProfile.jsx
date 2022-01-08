import styles from '../../App.css'

export default function Profile({employee}) {
    return (
        <div className={styles.card}>
            <div className={styles.cardheader}>
                <p>{employee.name}</p>
                <p>{employee.email}</p>
                <p>{employee.birthday}</p>
            </div>

            <div className={styles.cardbody}>
                <p>{employee.bio}</p>
            </div>

        </div>
    )
}
