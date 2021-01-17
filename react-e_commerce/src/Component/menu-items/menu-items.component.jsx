import './menu-items.scss';
const MenuItem = (props)=>{
    return (
        <>
        <div class="menu-item" style={{backgroundImage: 'url('+props.imageUrl+')'}}>
            <div class="title">
             <h3>{props.title.toUpperCase()}</h3>
            </div>
        </div>
        </>
    );
}

export default MenuItem;