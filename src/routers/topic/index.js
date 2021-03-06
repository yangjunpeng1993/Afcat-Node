import { Row, Col } from "antd";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLoadTopic,useLoadViewCount } from "../../store/action/topic";
import { useLocation } from "react-router-dom";
import TopicComment from "./topicComment";
import TopComment from "./topComment";
import AddTopicComment from "./addTopicComment";
import GitLogin from '../../component/indexComponent/gitLogin';
import Friends from '../../component/indexComponent/friends';
import "../../static/css/topic.css";


function TopicPage(props) {
    const id = useLocation().pathname.split('/')[2];
    const { data } = useSelector(state => state.topic);
    const getViewCount = useLoadViewCount();
    const getData = useLoadTopic();
    useEffect(() => {
        getViewCount(id);
    }, [id])
    useEffect(() => {
        getData(id);
    }, [id])
    if (!data) {
        return <div>暂无数据</div>
    }
    
    return <Row span={18} justify="space-around">
        <Col span={18}>
            <div className="view">
                <div>
 
                    <TopComment
                        data={data}
                    />
                    <TopicComment
                        data={data}
                    />

                    <AddTopicComment
                        data={data}
                    />
                </div>

            </div>
             
        </Col>
        <Col span={5}>
            <GitLogin />
            <Friends />
        </Col>
    </Row>



}
export default TopicPage;




