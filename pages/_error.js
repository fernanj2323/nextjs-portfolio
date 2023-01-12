
import Layout from "../components/Layout";

const _error = ({statusCode}) => {
    return (
        <Layout>
            {
                statusCode ? (
                    <p className="text-center"> Cloud not load your page: Status code {statusCode} </p>
                ): (
                    <p className="text-center"> Cloud not load your page </p>
                )
            }
        </Layout>
    )
}

export default _error