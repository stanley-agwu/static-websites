import React from 'react'
import Layout from '../../components/Layout'
import * as styles from "../../styles/games.module.css"

export default function Games() {
    return (
        <Layout>
            <div className={styles.portfolio}>
                <h2>Games Portfolio</h2>
                <h3>These are the games we have available!</h3>
            </div>
        </Layout>
    )
}
