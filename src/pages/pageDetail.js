import React from 'react';
import DatailContent from '../component/zh_detail_body.js';
import DetailPageFooter from '../component/zh_detail_footer.js';
import DatailPageHeader from '../component/zh_detail_header.js';
import '../style/css/public.css';
import '../style/css/zh_detail.css';

class PageDetail extends React.Component {

    render() {
        return (
            <div>
                <DatailPageHeader />
                <DatailContent location={this.props.location} />
                <DetailPageFooter />
            </div>
        );
    }
}

export default PageDetail;
