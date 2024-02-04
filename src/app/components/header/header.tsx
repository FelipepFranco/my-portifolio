import Image from "next/image"

import "./header.scss"


export function Header() {

    return (
        <div className="header">
            <div>
                <h1>Hi, I'm Felipe
                <Image
                src="/hi.png"
                alt="hi Logo"
                width={40}
                height={40}
                priority
              />
                </h1>
                <h2>Front-end Developer</h2>
            </div>
            <Image className="img"
                src="/me.jpeg"
                alt="Vercel Logo"
                width={324}
                height={310}
                priority
            />
        </div>

    )
}