import { TypeAnimation } from 'react-type-animation';

export default function Text(props) {
    return <TypeAnimation sequence={[props.text]} speed={50}/>
}