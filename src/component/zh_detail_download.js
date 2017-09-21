/*
    详情页的下载组件
*/
import React from 'react';
import qrDownload from '../style/images/qr_download.png';

class DetailPageDownload extends React.Component {

    render() {
        return (

            <div>
                <div className="download">
                    <h2 className="dl_title">扫描二维码下载知乎日报</h2>
                    <p className="dl_sub_title">支持 iOS 和 Android</p>
                    <img src={qrDownload} alt="qrDownload" />
                </div>
            </div>

        );
    }
}

export default DetailPageDownload;
