import { Outlet } from "react-router-dom";

export default function Root () {
    return (
        <>
            < Outlet/>
            <p>RootLayout</p>
        </>
    )
}