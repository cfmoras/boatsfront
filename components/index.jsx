
import styles from '../styles/Home.module.css'

export default function Home() {
    const router = useRouter()

    return (
        <div className={styles.container}>
            <head>
                <title> Barcos </title>
                <meta name="description" content='Barcos' />
            </head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Barcos
                </h1>

                <div className={styles.grid}>
                    
                    <h2> Barcos &rarr;</h2>
                </div>

            </main>

        </div>

    )
}