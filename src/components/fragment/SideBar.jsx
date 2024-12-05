import React, {useContext} from "react";
import "../assets/scss/SideBar.scss";
import SideBarOptions from "./SideBarOptions";
import {ThemeContext} from "../../api/Theme";
import {ExploreOutlined, HomeOutlined, PlaylistPlay, SearchOutlined, EmojiPeopleOutlined} from "@material-ui/icons";

function SideBar() {
    const useStyle = useContext(ThemeContext);
    return (
        <aside style={useStyle.component} className={"aside-bar"}>
            <div className="aside-bar-container">
                <p className={"p1"}>
                    <span>LIBRARY</span>
                </p>
                <SideBarOptions className={"lib-sub"} Icon={HomeOutlined} href={"/home"} title={"Home"} />
                <SideBarOptions className={"lib-sub"} Icon={ExploreOutlined} href={"/home/about"}  title={"About"}/>
                <SideBarOptions className={"lib-sub"} Icon={SearchOutlined} href={"/home/search"}  title={"Search"}/>
                {/* <SideBarOptions className={"lib-sub"} Icon={AlbumIcon} href={"/home/album"}  title={"Album"}/> */}
                <SideBarOptions className={"lib-sub"} Icon={EmojiPeopleOutlined} href={"/home/artist"}  title={"Artist"}/>
            </div>
            <div className="aside-bar-container playlist">
                <p className={"p1"}>
                    <span>ARTISTS</span>
                </p>
                <SideBarOptions className={"lib-sub"} Icon={PlaylistPlay} href={"/home/playlist/Arijit_Singh"}  title={"Arijit_Singh"}/>
                <SideBarOptions className={"lib-sub"} Icon={PlaylistPlay} href={"/home/playlist/Atif_Aslam"}  title={"Atif_Aslam"}/>
                <SideBarOptions className={"lib-sub"} Icon={PlaylistPlay} href={"/home/playlist/MC_STAN"}  title={"MC_STAN"}/>

            </div>
        </aside>
    );
}

/*
*
* */
export default SideBar;