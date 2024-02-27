import { InfoProfileStyle } from "./InfoProfileStyle"
import IconTogle from '/iconTogle.png'

interface infoProfileProps {
    name: string;
    email: string
    avatar: string
}

const infoProfile: React.FC<infoProfileProps> = ({ name, email, avatar }) => {
    return (
        <>
            <InfoProfileStyle>
                <button className="styleIconTogle"><img src={IconTogle} /></button>
                <p className="styleNameInfo">{name}</p>
                <p className="styleEmailInfo">{email}</p>
                <img className="cicleProfileUser" src={avatar} />
            </InfoProfileStyle>
        </>
    )
}

export default infoProfile