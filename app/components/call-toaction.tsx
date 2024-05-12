"use client"

import Image from "next/image";
import Link from "next/link";

import PoolImage from "../../public/red-hearts-pools/pool-hero.jpg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Button from "./ui/button";



export default function CallToAction() {
    const phoneNumber = '+27 83 300 0705';
    const [ref, inView] = useInView({
        triggerOnce: false,
    });

    return (

        <div className="px-[2rem] mt-[-13rem] md:mt-1 md:px-[6rem] flex flex-col justify-center mx-auto items-center">
            <h3 className="text-blue-400 text-[18px] text-center">YOUR TRUSTED POOL SERVICE COMPANY</h3>
            <h3 className="text-[20px] md:text-[26px] text-center font-extrabold py-3">Read Hearts Pool Trusted Choice For Pool Service Near Me</h3>
            <p className="text-[17px] md:text-[18px] md:text-center py-4 leading-8">Imagine you&apos;re 
            all set for a chill weekend by the pool, but then you find clouded water 
            and broken equipment. Don&APOS;t worry - that&APOS;s where FloPool comes in as Red Hearts go-to for pool service near me. We are no ordinary pool cleaning company in Gauteng. We have garnered 15 years of extensive experience and BBB accreditation; we are the one-stop solution to your pool problems. Count on us for reliable maintenance, quick repairs, and professional guidance to ensure your pool is pristine.</p>
            <Button />
        </div>
    )
}