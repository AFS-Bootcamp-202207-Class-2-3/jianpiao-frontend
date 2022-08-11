import React from 'react';
import "./footer.css";
import { Row, Col } from 'antd';

const Footer = () => {
    return (
        <footer className='footer'>
            <div>
                <div className='footer-text'>
                    <h5>关于我们</h5>
                    <p>简票电影票购票系统——科技赋能票务引领者</p>
                </div>
                <Row className='footer-row'>
                    <Col span={12}>
                        <dl>
                            <dt style={{color: "#eee"}}>我的团队</dt>
                            <dd>BABY</dd>
                            <dd>BERLIN</dd>
                            <dd>RYAN</dd>
                            <dd>JIM</dd>
                            <dd>CHEERY</dd>
                            <dd>AEO</dd>
                            <dd>SHAUN</dd>
                        </dl>
                    </Col>
                    <Col span={12}>
                        <dl>
                            <dt style={{color: "#eee"}}>相关技术</dt>
                            <dd>React</dd>
                            <dd>Spring Boot</dd>
                            <dd>Swagger</dd>
                            <dd>JPA</dd>
                            <dd>Flyway</dd>
                            <dd>Postgre</dd>
                            <dd>Heroku</dd>
                        </dl>
                    </Col>
                </Row>
            </div>
            <div className="footer-bottom">
                <div className="footer-bottom-container">
                    Made with 
                    <span style={{color: "rgb(255, 255, 255)"}}>❤</span> 
                    by <span style={{color: "white"}}>Natural Curly</span>
                </div>
            </div>

        </footer>
    );
}


export default Footer;