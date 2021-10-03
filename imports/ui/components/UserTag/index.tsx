import { Tag } from "antd";
import React from "react";
import colors from "../../utils/colors";

interface UserTag {
    props: {
        label: React.ReactNode;
        value: any;
        disabled: boolean;
        onClose: (event?: any) => void;
        closable: boolean;
    }
}

const userTag: React.FC<UserTag> = (UserTagProps) => {
    const { label, value, closable, onClose } = UserTagProps.props;
    const index = value.split(' ')[1];

    const onPreventMouseDown = (event: any) => {
        event.preventDefault();
        event.stopPropagation();
    };

    return <>
        <Tag
            color={colors[Number(index)]}
            onMouseDown={onPreventMouseDown}
            closable={closable}
            onClose={onClose}
            style={{ marginRight: 3 }}
        >
            {label}
        </Tag>
    </>;
};

export default userTag;