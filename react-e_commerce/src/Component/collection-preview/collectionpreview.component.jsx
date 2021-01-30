import CollectionItem from "../collection-item/collection-item.component";
import './collection-preview.scss';

const CollectionPreview = (props)=>{
    
    return (<>
        <div className='collection-preview'>
            <h1 className='title'>{props.title}</h1>
            <div className='preview'>
                {
                    props.items
                        .map(item =>
                            <CollectionItem key={item.id} item={item}/>
                        )
                }
            </div>
        </div>
    </>);
}
export default CollectionPreview;