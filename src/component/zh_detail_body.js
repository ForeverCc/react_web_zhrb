/*
    详情页面的开发
*/
import React from 'react';
import 'whatwg-fetch';
import DetailPageDownload from './zh_detail_download.js';


class DatailContent extends React.Component {
    constructor(){
        super();
        this.state = {
            isLoading: true,
            data: '',
            message: "网页正在加载中，请稍候"
        };
        this.createMarkup = this.createMarkup.bind(this);
    }
    componentDidMount(){
        //console.log(window.location.search)
        //console.log(this.props.location.query.id);
        var path =  '/api/2/news/' + this.props.location.query.id;
        console.log(path)
        fetch(path)
            .then(response => response.json())
            .then(json => {
                //console.log(json.css);
                this.setState({
                    isLoading: false,
                    data: json
                });

            })
            .catch( error => {
                this.setState({
                    message: "资源请求失败"
                });
            });
    }

    //将请求到的html解析,可以考虑使用模版字符串··
    createMarkup(){
        //css文件添加到head中
        var oLink = document.createElement('link');
        var html = ""; //存放标签文本
        oLink.rel = 'stylesheet';
        oLink.href = this.state.data.css[0];
        document.head.appendChild(oLink);


        html += this.state.data.body;
    //替换后台的html结构  插入一些标签
        var innerContent = '<img style="width: 100%;height:375px;" src="' + this.state.data.image +'"/>';

        html = html.replace("<div class=\"img-place-holder\"></div>",
         "<div style=\"height: 375px;overflow:hidden;position:relative;\" class=\"img-place-holder\">"+ innerContent  +"</div>");

        return { __html: html };
    }
    render() {

        if (this.state.isLoading) {
            return (
                <div id="dt_main">
                    <div className="dt_container">
                        <p style={{ fontSize: '36px', textAlign: 'center'}}>{this.state.message}</p>
                    </div>
                </div>
            );
        }
        return (
            <div>
                <div id="dt_main">
                    <div className="dt_container">
                        {/* <img src={this.state.data.image}/> */}
                        <div dangerouslySetInnerHTML={this.createMarkup()}></div>
                        <DetailPageDownload />
                    </div>
                </div>
            </div>
        );
    }
}

export default DatailContent;
