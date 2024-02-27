
//import { useCallback } from "react"
import IconTogleMenu from "./IconTogleMenu"
import { IconTogleMenuStyle } from "./IconTogleMenuStyle"
import { SideBarStyle } from "./SideBarStyle"
import { Divider, Grid } from "@mui/material"
import circleUser from '/circle-user.png'
import documents from '/document.png'
import chat from '/duplechat-1.png'
import newFile from '/new-file.png'
import IconDashboardBlack from '/iconDashboardBlack.svg'
import InfoProfile from "./InfoProfile"
import IconLogout from "/iconLogout.png"
import { useNavigate } from "react-router-dom"

const Sidebar: React.FC = () => {
    const navigate = useNavigate()
    const navUrl = (url: string) => {
        navigate(url)
    }

    return (
        <>
            <div style={{ display: 'flex', height: '100vh', overflow: 'auto' }}>
                <SideBarStyle>
                    <InfoProfile name="Maria Helena S." email={'teste@tropadigital.com'} avatar={''} />
                    <div style={{ height: '100vh', paddingTop: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <div style={{ height: '100%' }} >
                            <IconTogleMenuStyle onClick={() => console.log()} className="iconTogleButton">
                                <IconTogleMenu icon={IconDashboardBlack} title={"Dashboard"} />
                            </IconTogleMenuStyle>
                            <Grid item style={{ padding: '28px 0px 18px 38px' }}>
                                <Divider style={{ width: '85%' }} />
                            </Grid>
                            <IconTogleMenuStyle onClick={() => console.log()} className="iconTogleButton">
                                <IconTogleMenu icon={newFile} title={"LoremIpsum"} />
                            </IconTogleMenuStyle>
                            <IconTogleMenuStyle onClick={() => console.log()} className="iconTogleButton">
                                <IconTogleMenu icon={documents} title={"LoremIpsum"} />
                            </IconTogleMenuStyle>
                            <IconTogleMenuStyle onClick={() => console.log()} className="iconTogleButton">
                                <IconTogleMenu icon={chat} title={"LoremIpsum"} />
                            </IconTogleMenuStyle>
                            <Grid item style={{ padding: '18px 0px 18px 38px' }}>
                                <Divider style={{ width: '85%' }} />
                            </Grid>
                            <IconTogleMenuStyle onClick={() => console.log()} className="iconTogleButton">
                                <IconTogleMenu icon={circleUser} title={"LoremIpsum"} />
                            </IconTogleMenuStyle>
                        </div>
                        <div style={{ display: 'flex', margin: '0px 35px 35px 0px', justifySelf: 'end', alignSelf: 'end' }}>
                            <button className="buttonLogout" onClick={() => navUrl('/')}><img style={{ width: '27.5px', height: '28px' }} src={IconLogout} /></button>
                        </div>
                    </div>
                </SideBarStyle>
            </div>
        </>
    )
}

export default Sidebar