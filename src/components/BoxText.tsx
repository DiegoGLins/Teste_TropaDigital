import * as B from './BoxTextStyle'
import { } from '../App.css'

interface BoxTextProps {
    text: string;
}

const BoxText: React.FC<BoxTextProps> = ({ text }) => {
    return (
        <B.BoxTextStyle >
            <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '46px', fontWeight: 700 }}>{text}</p>
        </B.BoxTextStyle>
    )
}

export default BoxText