/*
    知乎主页主体部分  三部分组成
*/
import React from 'react';
import ContentTitle from './zh_content_header.js';
import ContentBody from './zh_content_body.js';
import ContentFooter from './zh_content_footer.js';

import '../style/css/zh_content.css';

class MainContent extends React.Component {
    render() {
        return (
            <div>
                <div id = "main_content">
                    <div className="content_wrap">
                        <ContentTitle />
                        <ContentBody />
                        <ContentFooter />
                    </div>
                </div>
            </div>
        );
    }
}

export default MainContent;
