import React from "react";
import Link from "next/link";

function HomePage() {
    return (
        <>
            <li>
                <Link href={"/home"}>home으로 이동합니다!</Link>
            </li>
            <li>
                <Link href={"/about"}>about으로 이동합니다!</Link>
            </li>
        </>
    );
}

export default HomePage;
