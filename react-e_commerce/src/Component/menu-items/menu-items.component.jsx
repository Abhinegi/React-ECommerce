import './menu-items.scss';
import {withRouter} from 'react-router-dom';
const MenuItem = (props)=>{
    return (
        <>
        <div className="menu-item" style={{backgroundImage: 'url('+props.imageUrl+')'}} 
        onClick={()=>props.history.push(`${props.match.url}${props.linkUrl}`)}>
            <div className="title">
             <h3>{props.title.toUpperCase()}</h3>
            </div>
        </div>
        </>
    );
}

export default withRouter(MenuItem);