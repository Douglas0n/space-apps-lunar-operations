import React from "react";

interface BasicLayout {
    content: () => any;
}

const basicLayout: React.FC<BasicLayout> = (props) => {
    const { content } = props;

    return <>
        <main className='layout-container' style={{ padding: 20 }}>
            {content()}
        </main>
    </>;
};

export default basicLayout;