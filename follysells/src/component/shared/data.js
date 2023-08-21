// const navItems = ['Home', 'About', 'Contact','Logout'];
// const pages = ['Everything', 'Products', 'Blog'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
import Image from 'next/image'
import * as Img from '../images/Image'
import FooterContact from './FooterContact'
import Footsocial from './footsocial';
import {Facebook, Instagram, Twitter, YouTube} from '@mui/icons-material';
import Dashboard from './Dashboard';
const Pages = [
    {
        page:'Everything',
        path:'/everything'
    },
    {
        page:'Products',
        path:'/product'
    },
    {
        page:'Blog',
        path:'/blog'
    },
]
const NavItems = [
    {
        page:'About',
        path:'/about'
    },
    {
        page:<Dashboard/>,
    } 
    
]

const NavMobile=[
    {
        page:'Everything',
        path:'/everything'
    },
    {
        page:'Products',
        path:'/product'
    },
    {
        page:'Blog',
        path:'/blog'
    },
    {
        page:'About',
        path:'/about'
    },
    {
        page:'Member',
        path:'/member'
    },
    {
        page:'Contact',
        path:'/contact'
    },
]

const footDatas =[
    {
        id:1,
        content: <Image src={Img.logo1} alt='logo' width={'30px'} height={'30px'}/>,
    },
    {
        id:2,
        content: <FooterContact/>,
    },
    {
        id:3,
        content:[
            {
                id:1,
                icon:<Twitter/>,
                path:''
            },
            {
                id:2,
                icon:<Facebook/>,
                path:''
            },
            {
                id:3,
                icon:<Instagram/>,
                path:''
            },
            {
                id:4,
                icon:<YouTube/>,
                path:''
            },
        ],
    },
]
const footDatass = [
    {
      id: 1,
      content: <Image src={Img.logo1} alt='logo' width={'30px'} height={'30px'} />, // Make sure Img.logo1 is defined and imported
    },
    {
      id: 2,
      content: <FooterContact />,
    },
    {
      id: 3,
      content: [
        {
          id: 1,
          icon: <Twitter />,
          path: '',
        },
        {
          id: 2,
          icon: <Facebook />,
          path: '',
        },
        {
          id: 3,
          icon: <Instagram />,
          path: '',
        },
        {
          id: 4,
          icon: <YouTube />,
          path: '',
        },
      ] 
    },
  ];

  const footData = [
    {
      id: 1,
      content: <Image src={Img.logo1} alt='logo' width={70} height={70} />,
    },
    {
      id: 2,
      content: <Footsocial />,
    },
    {
      id: 3,
      content: [
        {
          id: 1,
          icon: <Twitter />,
          path: '',
        },
        {
          id: 2,
          icon: <Facebook />,
          path: '',
        },
        {
          id: 3,
          icon: <Instagram />,
          path: '',
        },
        {
          id: 4,
          icon: <YouTube />,
          path: '',
        },
      ],
    },
  ];
  


export {
    Pages,NavItems,NavMobile,footData
}