
interface IconTogleMenuProps {
    icon: string;
    title: string;
    children?: React.ReactNode;
}

const IconTogleMenu: React.FC<IconTogleMenuProps> = ({ icon, title }) => {

    return (
        <>
            <img style={{ height: '30px', width: '30px' }} src={icon} alt="logo"></img>
            <span style={{ marginLeft: '10px' }}>{title}</span>
        </>
    )
}

export default IconTogleMenu