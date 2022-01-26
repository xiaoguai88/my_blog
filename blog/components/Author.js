import {Avatar,Divider} from 'antd'
import styles from '../styles/components/author.module.css';

const Author =()=>{

    return (
        <div className={styles.authorDiv}>
            <div> <Avatar size={100} src='https://gw.alipayobjects.com/mdn/rms_5bc6a4/afts/img/A*D8qzRb58ooAAAAAAAAAAAABkARQnAQ'  /></div>
            <div className={styles.authorIntroduction}>
                光头程序员，专注于WEB和移动前端开发。要录1000集免费前端视频的傻X。此地维权无门，此时无能为力，此心随波逐流。
                <Divider>社交账号</Divider>
                <Avatar size={28} icon="github" className={styles.account}  />
                <Avatar size={28} icon="qq"  className={styles.account} />
                <Avatar size={28} icon="wechat"  className={styles.account}  />
            </div>
        </div>
    )

}

export default Author