import React from 'react';
import {Row,Col, Menu, Icon} from 'antd';
import {
    HomeOutlined,
    YoutubeOutlined,
    SmileOutlined,
  } from '@ant-design/icons';
import styles from '../styles/components/header.module.css';

const Header = () => (
  <div className={styles.header}>
    <Row type="flex" justify="center">
        <Col  xs={24} sm={24} md={10} lg={15} xl={12}>
            <span className={styles.headerLogo}>小怪88</span>
            <span className={styles.headerTxt}>专场</span>
        </Col>
        <Col className={styles.memuDiv} xs={0} sm={0} md={14} lg={8} xl={6}>
            <Menu  mode="horizontal">
                <Menu.Item key="home">
                    <HomeOutlined style={{marginRight:'5px'}} />
                    首页
                </Menu.Item>
                <Menu.Item key="video">
                <YoutubeOutlined style={{marginRight:'5px'}} />
                    视频
                </Menu.Item>
                <Menu.Item key="life">
                <SmileOutlined style={{marginRight:'5px'}} />
                    生活
                </Menu.Item>
            </Menu>
        </Col>
    </Row>
 </div>
)

export default Header