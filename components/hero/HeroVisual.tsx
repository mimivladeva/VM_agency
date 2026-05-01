"use client"

import { motion } from "framer-motion"
import ParticlesBurst from "@/components/hero/particlesHero"
import {useState} from "react";

export function HeroVisual() {
    const [burst, setBurst] = useState(false)
    return (
        <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">

            {/* ===================== */}
            {/* 🖐 MANO IZQUIERDA */}
            {/* ===================== */}
            <motion.img
                src="/images/human-hand.png"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
                className="
                    absolute
                    left-1/2 top-[65%]
                    -translate-x-[95%]
                    -translate-y-1/2

                    w-[85%]

                    /* 🔥 DESKTOP OVERRIDE */
                    md:left-[-15vw]
                    md:top-auto
                    md:bottom-[-5%]
                    md:translate-x-0
                    md:translate-y-0
                    md:w-[55vw]

                    lg:left-[-10vw]
                "
            />

            {/* ===================== */}
            {/* 🤖 MANO DERECHA */}
            {/* ===================== */}
            <motion.img
                src="/images/robot-hand.png"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="
                    absolute
                    left-1/2 top-[45%]
                    translate-x-[-5%]
                    -translate-y-1/2

                    w-[85%]

                    /* 🔥 DESKTOP OVERRIDE */
                    md:left-auto
                    md:right-[-15vw]
                    md:top-[5%]
                    md:translate-x-0
                    md:translate-y-0
                    md:w-[55vw]

                    lg:right-[-10vw]
                "
            />

            {/* ===================== */}
            {/* 🔵 BOLA */}
            {/* =====================
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                onAnimationComplete={() => setBurst(true)} // 🔥 AQUÍ DISPARAS
                className="
                    absolute
                    left-1/2 top-1/2
                    -translate-x-1/2 -translate-y-1/2
                    scale-30 sm:scale-75 md:scale-100
                "
            >
                <EnergyBall />
            </motion.div>*/}
            {/* 🔵 BOLA */}


            {/* 💥 PARTICLES BURST <ParticlesBurst trigger={burst} /> */}


        </div>
    )
}