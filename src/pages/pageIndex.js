import React from 'react';
import Header from '../component/zh_header.js';
import Banner from '../component/zh_banner.js';
import Footer from '../component/zh_footer.js';
import MainContent from '../component/zh_content.js';


class PageIndex extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Banner />
                <MainContent />
                <Footer />
            </div>
        );
    }
}

export default PageIndex;
