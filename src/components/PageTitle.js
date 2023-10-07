import { Helmet } from "react-helmet";

export default function PageTitle(props) {
    return (
        <Helmet>
            <title>{props.name}</title>
        </Helmet>
    )
}