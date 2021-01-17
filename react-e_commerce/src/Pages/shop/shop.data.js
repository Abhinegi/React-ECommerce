const SHOP_DATA = [
    {
      id: 1,
      title: 'Sony Playstation',
      routeName: 'playstation',
      items: [
        {
          id: 1,
          name: 'Playstation 1',
          imageUrl: 'https://media.takealot.com/covers_tsins/56001675/L-angle-pdpxl.jpg',
          price: 100
        },
        {
          id: 2,
          name: 'Playstation 2',
          imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41kHbtvS%2BJL._AC_UL600_SR600,600_.jpg',
          price: 150
        },
        {
          id: 3,
          name: 'Playstation 3',
          imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/91UX9xN6xbL._SL1500_.jpg',
          price: 200
        },
        {
          id: 4,
          name: 'Playstation 4 Pro',
          imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71jN27mYlhL._AC_SL1500_.jpg',
          price: 300
        },
        {
          id: 5,
          name: 'Sony Dual Shock Playstation Controllers',
          imageUrl: 'https://moddedzone.eu/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/0/10_9.jpg',
          price: 20
        },
        {
          id: 6,
          name: 'Sony Playstation Headphones',
          imageUrl: 'https://www.arabiacart.com/image/cache/catalog/product-5019/Xu8Tic9osl-81EquGCWtFL._AC_SL1500_-700x755.jpg',
          price: 50
        }
      ]
    },
    {
      id: 2,
      title: 'Microsoft XBox',
      routeName: 'xbox',
      items: [
        {
          id: 1,
          name: 'X Box One X',
          imageUrl: 'https://cdn.mos.cms.futurecdn.net/Vcd9HPKL55gZmRrH7D6dEN.png',
          price: 220
        },
        {
          id: 2,
          name: 'X Box One - 1 TB Edition',
          imageUrl: "https://www.cihanscenter.com/images/detailed/1/i.jpg",
          price: 280
        },
        {
          id: 3,
          name: 'X Box Controller',
          imageUrl: 'https://productimages.hepsiburada.net/s/2/500/9560092475442.jpg',
          price: 20
        },
        {
          id: 4,
          name: 'X Box S',
          imageUrl: 'https://technotoday.com.tr/wp-content/uploads/2019/06/62854C52-47B5-4DB5-B396-00885A9C584A.jpeg',
          price: 160
        },
        {
          id: 5,
          name: 'X Box 360',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjIplAp30kmrojXS2t3wjX3QodeNRMkrXS2g&usqp=CAU',
          price: 160
        },
        {
          id: 6,
          name: 'X Box Headset',
          imageUrl: 'https://brain-images-ssl.cdn.dixons.com/2/0/10011302/l_10011302_001.jpg',
          price: 50
        }
      ]
    },
    {
      id: 3,
      title: 'Gaming PCs',
      routeName: 'gaming-pc',
      items: [
        {
          id: 1,
          name: 'Asus Gaming PC Setup',
          imageUrl: 'https://i.pinimg.com/originals/9a/d6/d6/9ad6d673353da38a77a09ee06b09511d.jpg',
          price: 200
        },
        {
          id: 2,
          name: 'Corsair Desktop Gaming Setup',
          imageUrl: 'https://i.pinimg.com/originals/1f/de/7f/1fde7f8df9ec5a6a289f261e115cfba9.jpg',
          price: 900
        },
        {
          id: 3,
          name: 'Acer Predator Cave',
          imageUrl: 'https://i.ytimg.com/vi/r-3iathMo7o/maxresdefault.jpg',
          price: 900
        },
        {
          id: 4,
          name: 'Razor Gaming PC',
          imageUrl: 'https://pbs.twimg.com/media/BH_V9uTCcAAQpQG.jpg',
          price: 400
        },
        {
          id: 5,
          name: 'MSI Gaming Setup',
          imageUrl: 'https://i.pinimg.com/originals/69/9a/35/699a35a34bf53133183593254190425f.png',
          price: 500
        }
      ]
    },
    {
      id: 4,
      title: 'Gaming Laptops',
      routeName: 'gaming-laptop',
      items: [
        {
          id: 1,
          name: 'ASUS ROG',
          imageUrl: 'https://ifpnews.com/wp-content/uploads/2020/03/What-Are-Best-Gaming-Laptops-A-Buyers-Guide.jpg',
          price: 300
        },
        {
          id: 2,
          name: 'Acer Predator',
          imageUrl: 'https://i.pinimg.com/originals/3a/06/3e/3a063ef0c77a14bd00ff8fdf992489ec.jpg',
          price: 500
        },
        {
          id: 3,
          name: 'HP Pavillion',
          imageUrl: 'https://i.pinimg.com/originals/4d/86/02/4d86027507b7f2f004b7c3bdf3ae4a52.jpg',
          price: 230
        },
        {
          id: 4,
          name: 'Razor',
          imageUrl: 'https://burnpedia.com/wp-content/uploads/2020/07/Gaming-Laptops-For-Tech-Savvy-Entrepreneurs.jpg',
          price: 80
        },
        {
          id: 5,
          name: 'MSI',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCnejJaPydjtODHJTxRJUFQ3exoK8DNrnkjQ&usqp=CAU',
          price: 450
        },
        {
          id: 6,
          name: 'Dell G7' ,
          imageUrl: 'https://i.dell.com/sites/csimages/Video_Imagery/all/laptops-g-series-g7-17-7700-gaming-notebook-thumbnail-1280x720.jpg',
          price: 135
        },
        {
          id: 7,
          name: 'Alienware 17',
          imageUrl: 'https://i.dell.com/is/image/DellContent//content/dam/global-site-design/product_images/dell_client_products/notebooks/alienware_notebooks/alienware_17_r5_non_touch/spi/ng/notebook-alienware-17-r5-campaign-hero-504x350-ng.psd?fmt=jpg&wid=570&hei=400',
          price: 800
        }
      ]
    },
    {
      id: 5,
      title: 'Gaming DVDs',
      routeName: 'gaming-disk',
      items: [
        {
          id: 1,
          name: 'FIFA 16 PS DVD',
          imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51ZlMq6fvrL.jpg',
          price: 40
        },
        {
          id: 2,
          name: 'Last of us 2 PS4 DVD',
          imageUrl: 'https://www.bigw.com.au/medias/sys_master/images/images/hf9/h68/15905832632350.jpg',
          price: 20
        },
        {
          id: 3,
          name: 'Uncharted 4 PS4',
          imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/91hfZvix6TL._SL1500_.jpg',
          price: 25
        },
        {
          id: 4,
          name: 'WWE 2k18 PS4',
          imageUrl: 'https://cdn.alzashop.com/ImgW.ashx?fd=f3&cd=MSX0821',
          price: 25
        },
        {
          id: 5,
          name: 'Prince of Persia Warrior Within PC ',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL94zbHLdlnjH3d2LZE6ud12RQ0bx0pQBnHQ&usqp=CAU',
          price: 40
        }
      ]
    }
  ]


  export default SHOP_DATA;