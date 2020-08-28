import React from 'react'
import "./Sidebar.css"
import SidebarRow from "./SidebarRow"
import LocalHospitalIcon from '@material-ui/icons/LocalHospital'
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StoreFrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow src='https://lh3.googleusercontent.com/a-/AOh14GgFG3-2Q8NqgOHpHJhjXNNt3NuC8pIJ19dto6vafnk=s88-c-k-c0x00ffffff-no-rj-mo' title='Justin Philip'/>
            <SidebarRow Icon={LocalHospitalIcon} title='COVID-19 Info Center'/>
            <SidebarRow Icon={EmojiFlagsIcon} title='Pages'/>
            <SidebarRow Icon={PeopleIcon} title='Friends'/>
            <SidebarRow  Icon={ChatIcon} title='Messenger'/>
            <SidebarRow  Icon={StoreFrontIcon} title='MarketPlace'/>
            <SidebarRow  Icon={VideoLibraryIcon} title='Videos'/>

        </div>
    )
}

export default Sidebar
