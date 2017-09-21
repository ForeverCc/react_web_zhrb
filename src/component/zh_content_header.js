/*
    主页主体头部
*/
import React from 'react';


class ContentTitle extends React.Component {
    render() {
        return (
            <div>
                <div className="content_title clearfix">
                    <div className="newest">最新内容</div>
                    <div className="read">浏览内容</div>
                </div>
            </div>
        );
    }
}

export default ContentTitle;
