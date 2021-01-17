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
                    "id":1
                },
                {
                    "title":"Microsoft XBox",
                    "imageUrl":"https://sm.pcmag.com/t/pcmag_in/review/x/xbox/xbox_b245.1920.jpg",
                    "id":2
                },
                {
                    "title":"Gaming PCs",
                    "imageUrl":"https://www.wepc.com/wp-content/uploads/2018/02/william2006523-1.jpg",
                    "id":3
                },
                {
                    "title":"Gaming Laptops",
                    "imageUrl":"https://i.redd.it/4er2tyzfm3521.jpg",
                    "id":4
                },
                {
                    "title":"Gaming DVDs",
                    "imageUrl":"https://i.pinimg.com/originals/72/3d/0a/723d0af616b1fe7d5c7e56a3532be3cd.png",
                    "id":5
                }
            ]
        }
    }

    render(){
        return <>{
            this.state.sections.map((section)=>(     <MenuItem  {...section} />        ))
        }
        </>
    }
}