import * as B from './BoxParagraphStyle'
import { } from '../App.css'

interface BoxParagraphProps {
    text: string;
}

const BoxParagraph: React.FC<BoxParagraphProps> = ({ text }) => {
    return (
        <B.BoxParagraphStyle >
            <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '26px', fontWeight: '400px' }}>{text}</p>
        </B.BoxParagraphStyle>
    )
}

export default BoxParagraph