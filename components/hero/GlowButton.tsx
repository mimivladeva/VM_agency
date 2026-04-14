import { JSX } from "react";
import "./GlowButton.css";

type Props = {
    text?: string;
};

export default function GlowButton({
                                       text = "Agenda tu llamada",
                                   }: Props): JSX.Element {
    return (
        <div className="glow-wrapper">

            <div className="glow-aura" />

            <div className="glow-border" />

            <button className="glow-button">
                <span>{text}</span>

                <span className="glow-shine" />
            </button>

        </div>
    );
}