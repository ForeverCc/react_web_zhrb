/*
    详情页的头部
*/
import React from 'react';
import { Link } from 'react-router';



class DatailPageHeader extends React.Component {
    render() {
        return (
            <div>
                <div id="dt_header">
                    <div className="dt_hd_wrap">
                        <h1><Link className="logo_bg" href="/" target="_self"></Link></h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default DatailPageHeader;
