import { Statistic } from "antd";
import moment from "moment";
import React, { useState } from "react";

const clock: React.FC = () => {
    const [timestamp, setTimestamp] = useState<any>(moment());

    setInterval(() => setTimestamp(moment()), 1000);

    return <>
        <Statistic
            valueStyle={{ color: 'white' }}
            title={<span style={{ color: 'white' }}>Local Time</span>}
            value={timestamp}
        />
    </>;
};

export default clock;