import React,{useState} from 'react'
import { Drawer } from '@mui/material';
import { NavLink, Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../images/Dixon research group.png'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import BiotechOutlinedIcon from '@mui/icons-material/BiotechOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import ThunderstormOutlinedIcon from '@mui/icons-material/ThunderstormOutlined';


const DrawerMenu = () => {
    const [openDrawer, setOpenDrawer] = useState(false)

    const HideDrawer = () => {
        setOpenDrawer(false)
    }
  return (
    <div>
        <Drawer
        open={openDrawer}
        onClose={()=>setOpenDrawer(false)}
        PaperProps={{sx: {width: '80vw'}}}
        >
            <div className='p-4 border-b-2 border-slate-500'>
                <div className='w-full flex-2 items-center justify-center'>
                    <Link  className=" flex items-center px-5 ">
                        <img src={logo} alt="research group logo"  className='h-28 w-52 '/>
                    </Link>
                </div>
            </div>
            <div className="py-3 font-semibold font-serif">
                <nav className='flex flex-col gap-3 items-start justify-center p-3'>            
                    <div><HomeOutlinedIcon /><NavLink to='/' className='navlink' onClick={HideDrawer}>Home</NavLink> </div>
                    <div><BiotechOutlinedIcon/><NavLink to='/research' className='navlink' onClick={HideDrawer}>Research</NavLink></div>
                    <div><PeopleOutlineOutlinedIcon/><NavLink to='/Peoples' className='navlink' onClick={HideDrawer}>People</NavLink></div>
                    <div><PublicOutlinedIcon/><NavLink to='/Publications' className='navlink' onClick={HideDrawer}>Publications</NavLink></div> 
                    <div><SchoolOutlinedIcon/><NavLink to='/Teaching' className='navlink' onClick={HideDrawer}>Teaching</NavLink> </div>
                    <div><AddShoppingCartOutlinedIcon/><NavLink to='/Opportunities' className='navlink' onClick={HideDrawer}>Opportunities</NavLink> </div>       
                    <div><ThunderstormOutlinedIcon/><NavLink to='/News' className='navlink' onClick={HideDrawer}>News</NavLink></div>
                </nav>
            </div>
        </Drawer>
            <div onClick={() => setOpenDrawer(true)} className='p-5 '>
                <MenuIcon fontSize='large' className=''/>
            </div>
    </div>
  )
}

export default DrawerMenu