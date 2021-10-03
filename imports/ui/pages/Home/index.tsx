import { Col, Row, Statistic } from "antd";
import React from "react";
import { useTracker } from 'meteor/react-meteor-data';
import Clock from "../../components/Clock";
import UserConsole from "../../components/UserConsole";
import Form from "../../components/Form";

const home: React.FC = () => {

    const user = useTracker(() => Meteor.user());
    const logout = () => Meteor.logout(() => location.href = "/");

    return (
        <div>
            {user && <>
                <div className='default-header'>
                    <Row gutter={24}>
                        <Col span={6} >
                            <img className='home-logo' height={55} src='https://images.spaceappschallenge.org/images/tBloUSwnTqJFpGa_Jt5kHaukBNU=/9879/width-352/' />
                            <h3 className='home-title'>Lunar Surface Operations</h3>
                        </Col>

                        <Col span={6}>
                            <Clock />
                        </Col>
                        <Col span={5}>
                            <Statistic
                                valueStyle={{ color: 'white' }}
                                title={<span style={{ color: 'white' }}>User Name</span>}
                                value={user.profile.name}
                            />
                            <a onClick={logout}>Logout</a>
                        </Col>
                        <Col span={6}>
                            <Statistic
                                valueStyle={{ color: 'white' }}
                                title={<span style={{ color: 'white' }}>Identity</span>}
                                value={user._id}
                            />
                        </Col>
                    </Row>
                </div>

                <br />

                <div className='home-workspace'>
                    <UserConsole user={user} />
                    <Form />
                </div>
            </>}

            <br />
            {!user && <Row gutter={24}>
                <Col span={12} > <a href="/"> &#60;&#60; Login page</a></Col>
            </Row>}
        </div>
    );
};

export default home;