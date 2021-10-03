import { List, Comment, Card, Avatar, Select, Typography, Tag } from "antd";
import { useTracker } from "meteor/react-meteor-data";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { RepositoryCollection } from '../../../db/RepositoryCollection';
import colors from '../../utils/colors';
import UserTag from '../UserTag';
import { Tracker } from 'meteor/tracker'

interface UserConsole {
    user?: Meteor.User;
}

const userConsole: React.FC<UserConsole> = (props) => {
    const { user } = props;
    const { Option } = Select;
    const { Text } = Typography;

    const [selectedKeys, setSelectedKeys] = useState<any>([user._id]);

    const users = useTracker(() => {
        const sub = Meteor.subscribe('users');

        if (sub.ready())
            return Meteor.users.find({}).fetch();
        else
            return undefined;
    });

    const repository = useTracker(() => {
        const sub = Meteor.subscribe('repository');

        // console.log(selectedKeys)

        if (sub.ready())
            return RepositoryCollection.find({}).fetch();
        else
            return undefined;
    });

    useEffect(() => { if (!repository) Meteor.call('openConsole'); }, [repository]);

    useEffect(() => {
        if (user && repository) {

            const element = document.getElementById('console-logs');
            element.scrollTop = element.scrollHeight - element.clientHeight;
        }
    }, [repository]);

    const getUserOption = (user: Meteor.User, index: number) => {
        const name = (user.profile.name as string).split(" ")[0];

        return <>
            <Option key={index} label={name} value={`${user._id} ${index}`}>
                <span style={{ color: colors[index] }}>{name} - {user._id}</span>
            </Option>
        </>;
    };

    const parseKeys = (values: any) => values.map((key: string) => (key.split(" ")[0]));

    return <>
        <Card className='console'>
            <Text ><b>Live Console</b></Text>

            <div style={{ marginTop: 5, borderBottom: '1px solid whitesmoke' }} />

            <Select
                mode="multiple"
                allowClear
                style={{ width: '100%' }}
                placeholder="Track other users"
                onChange={keys => setSelectedKeys([user._id, ...parseKeys(keys)])}
                optionLabelProp="label"
                maxTagCount={7}
                tagRender={(props) => (<UserTag props={props} />)}
                disabled={repository ? false : true}
            >
                {users && users.map((user, index) => (getUserOption(user, index)))}
            </Select>

            <div style={{ marginTop: 5, borderBottom: '1px solid whitesmoke' }} />

            <List loading={repository ? false : true} id='console-logs'>
                {repository &&
                    repository.map((log, index) => (
                        <List.Item key={index}>
                            <Comment
                                author={log.autor.name}
                                avatar={
                                    <Avatar
                                        alt={log.autor.name}
                                        style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>
                                        {log.autor.name[0]}
                                    </Avatar>
                                }
                                content={<p>{log.text || log.description}</p>}
                                datetime={moment(log.createdAt).format('YYYY-MM-DD HH:mm:ss')}
                            />
                        </List.Item>
                    ))}
            </List>
        </Card>
    </>;
};

export default userConsole;