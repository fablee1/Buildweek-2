import feed from './feed.json'
import styles from './News.module.css'
import {Col,Row} from 'react-bootstrap'


function Feed (props) {

    return(
        <div className={styles.infoCard}>
            <Row className='justify-content-between'>
                <img src ={props.news.text} className={styles.ppputin} />
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                </svg>
            </Row>

        </div>
    )

}
export default Feed