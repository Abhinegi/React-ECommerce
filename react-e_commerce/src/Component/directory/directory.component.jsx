import React from 'react'
import MenuItem from '../menu-items/menu-items.component'
export class Directory extends React.Component
{
    constructor(props){
        super(props);
        this.state={
            sections:[
                {
                    "title":"Sony Playstation",
                    "imageUrl":"https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2018/10/PlayStation-Logo-796x416.jpg",
                    "id":1,
                    "linkUrl":"playstation"
                },
                {
                    "title":"Microsoft XBox",
                    "imageUrl":"https://sm.pcmag.com/t/pcmag_in/review/x/xbox/xbox_b245.1920.jpg",
                    "id":2,
                    "linkUrl":"xbox"
                },
                {
                    "title":"Gaming PCs",
                    "imageUrl":"https://i.pinimg.com/originals/1d/87/27/1d8727d6e95f2b9bd2429dd6df983714.jpg",
                    "id":3,
                    "linkUrl":"gaming-pc"
                },
                {
                    "title":"Gaming Laptops",
                    "imageUrl":"https://i.redd.it/4er2tyzfm3521.jpg",
                    "id":4,
                    "linkUrl":"gaming-laptop"
                },
                {
                    "title":"Gaming DVDs",
                    "imageUrl":"https://i.pinimg.com/originals/72/3d/0a/723d0af616b1fe7d5c7e56a3532be3cd.png",
                    "id":5,
                    "linkUrl":"gaming-disk"
                }
            ]
        }
    }

    render(){
        return <>{
            this.state.sections.map((section)=><MenuItem key={section.id}  {...section} />        )
        }
        </>
    }
}