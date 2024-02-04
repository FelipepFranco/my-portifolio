import Image from "next/image";
import "./information.scss"
import { SectionTitle } from "../sectionTitle/section-title";

export function Info() {
    return (
        <div className="information">
            <SectionTitle text="Languages"/>
            <div className="languages-info">
                <span>
                    <Image
                        src="/usa.png"
                        alt="usa Logo"
                        width={16}
                        height={16}
                        priority
                    />
                     EN - Intermediare
                </span>
                <span>
                    <Image
                        src="/brazil.png"
                        alt="brazil Logo"
                        width={16}
                        height={16}
                        priority
                    />
                     PT-Br - Native Speaker
                </span>
            </div>
            <SectionTitle text="Eduacation"/>
            <div className="eductional-info">
                <span>
                    <Image
                        src="/graduation-hat.png"
                        alt="graduation-hat Logo"
                        width={16}
                        height={16}
                        priority
                    />
                </span>
                <span>Analysis and Systems Development - UniFecaf de Taboão da Serra - SP</span>
            </div>

        </div>
    )
}