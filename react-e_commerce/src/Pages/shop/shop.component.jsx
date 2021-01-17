import React from 'react';
import SHOP_DATA from './shop.data.js';
import CollectionPreview from '../../Component/collection-preview/collectionpreview.component'

class Shop extends React.Component{
    constructor(props){
        super(props);
        this.state={
            collections: SHOP_DATA
        }
    }

    render(){
        
        return (<>
        <div className="ml-lg-5 mr-lg-5">
        {
            this.state.collections.map(collection=>
                <CollectionPreview key={collection.id} {...collection}/>
            )
        }
        </div>
        </>);
    }
}

export default Shop;
