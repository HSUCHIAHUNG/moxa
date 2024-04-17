import { Link, NavLink } from 'react-router-dom'

function HomePage() {
    return (
        <>
            <Link to='/page1'>Link</Link>
            <br/>
            <NavLink to='/page1'>NavLink</NavLink>
        </>

    )

}
export default HomePage;