"use client"

export default function BackgroundImage() {
    return (
        <>
            <div className="bg-image-wrapper">
                <div className="bg-image" />
            </div>

            <style jsx global>{`
                .bg-image-wrapper {
                    position: fixed;
                    inset: 0;
                    z-index: -20;
                    overflow: hidden;
                    pointer-events: none;
                }

                .bg-image {
                    position: absolute;
                    inset: -10%; /* margen extra para que no se vean bordes al mover */

                    background-image: url("/images/fondo_fibra.png");
                    background-repeat: no-repeat;
                    background-position: center top;
                    background-size: cover;

                    opacity: 0.3;
                    filter: blur(0px);

                    will-change: transform;

                    animation: bgFlowDesktop 15s linear infinite;
                }

                /* DESKTOP */
                @keyframes bgFlowDesktop {
                    0% {
                        transform: translateY(0%);
                    }
                    50% {
                        transform: translateY(-10%);
                    }
                    100% {
                        transform: translateY(0%);
                    }
                }

                /* MOBILE FIX */
                @media (max-width: 768px) {
                    .bg-image {
                        animation: bgFlowMobile 20s linear infinite;
                        background-size: 120%;
                    }

                    @keyframes bgFlowMobile {
                        0% {
                            transform: translateY(0%);
                        }
                        50% {
                            transform: translateY(-15%);
                        }
                        100% {
                            transform: translateY(0%);
                        }
                    }
                }
            `}</style>
        </>
    )
}