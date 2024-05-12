import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const businessList = [
    {
        title: "POOL CLEANING",
        id: 1,
        Image: "/red-hearts-pools/pool-clening.png",
        text: "Our expert team ensures your pool remains spotless and hygienic, providing comprehensive cleaning and professional vacuuming for constant enjoyment."
    },
    {
        title: "REPAIR & MAINTENANCE",
        id: 1,
        Image: "/red-hearts-pools/repair-maintanance.png",
        text: "We provide fast, professional repairs, prioritizing minimal downtime to swiftly return your pool to optimal conditions."
    },
    {
        title: "POOL LEAK DETECTION",
        id: 1,
        Image: "/red-hearts-pools/Leak-detection.png",
        text: "Our specialized service works to identify and remedy unnoticed leaks early, saving on costly future repairs and preventing major damage."
    },
    {
        title: "Equipment Repairs",
        id: 1,
        Image: "/red-hearts-pools/equipment.png",
        text: "Our specialized service works to identify and remedy unnoticed leaks early, saving on costly future repairs and preventing major damage."
    },
    {
        title: "Pool Construction & Deck Remodeling",
        id: 1,
        Image: "/red-hearts-pools/mremodeling.jpeg",
        text: "Our specialized service works to identify and remedy unnoticed leaks early, saving on costly future repairs and preventing major damage."
    },
    {
        title: "Equipment Upgrades and Installations",
        id: 1,
        Image: "/red-hearts-pools/maintanance.png",
        text: "Our specialized service works to identify and remedy unnoticed leaks early, saving on costly future repairs and preventing major damage."
    },
    {
        title: "And All the Pool Services",
        id: 1,
        Image: "/red-hearts-pools/cycle2.jpeg",
        text: "Our specialized service works to identify and remedy unnoticed leaks early, saving on costly future repairs and preventing major damage."
    },



];

function AllPoolServices() {
    return (
        <div className='mt-[4rem] pt-[4rem] px-[2rem] md:px-[8rem] '>

            <h3 className="text-blue-400 text-[18px] md:text-center">ALL OUR SERVICES</h3>
            <h3 className="text-[26px] md:text-center font-extrabold py-3">Our World-Class Pool Services Like No One Else</h3>
            <p className="text-[17px] md:text-[18px] md:text-center py-4 leading-8">Imagine you&apos;re all set for a chill weekend by the pool, but then you find clouded water and broken equipment. Don&apos;t worry - that&apos;s where Read Hearts Pools comes in as Gauteng&apos;s go-to for pool service near me. We are no ordinary pool cleaning company in Miami. We have garnered 15 years of extensive experience and BBB accreditation; we are the one-stop solution to your pool problems. Count on us for reliable maintenance, quick repairs,
                and professional guidance to ensure your pool is pristine.</p>
            <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6 mt-5 '>
                {businessList.length > 0 ? businessList.map((business, index) => (
                    <div key={business.id} className='shadow-md rounded-lg hover:shadow-lg cursor-pointer hover:shadow-primary hover:scale-105 transition-all ease-in-out'>
                        <Image src={business.Image} alt={business.title} width={500} height={200} className='h-[200px] md:h-[170px] object-cover rounded-lg' />
                        <div className='flex flex-col items-baseline p-3 gap-1'>
                            <h2 className='font-bold text-lg'>{business.title}</h2>
                            <h2 className='p-1  text-primary  px-2 text-[15px]'>{business.text}</h2>

                            <button className="bg-blue-500 no-underline group w-[9rem] cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block">
                                <span className="absolute inset-0 overflow-hidden rounded-full">
                                    <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                                </span>
                                <div className="relative flex space-x-2 items-center z-10 rounded-full bg-blue-900 py-1 px-1 ring-1 ring-white/10">
                                    <Link
                                        href="/"
                                        className="text-center mx-auto"
                                    >
                                        Learn More
                                    </Link>
                                    <svg
                                        fill="none"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        width="16"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M10.75 8.75L14.25 12L10.75 15.25"
                                            stroke="orange"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                        />
                                    </svg>
                                </div>
                                <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-yellow-400/0 via-yellow-400/90 to-yellow-400/0 transition-opacity duration-500 group-hover:opacity-40" />
                            </button>
                        </div>
                    </div>
                )) :
                    [1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
                        <div key={index} className='w-full h-[300px] bg-slate-200 rounded-lg animate-pulse'></div>
                    ))
                }
            </div>
            <div className='py-[3rem] md:pt-[5rem]'>
                <h3 className="text-blue-400 text-[18px] text-center">OUR 3-STEP PROCESS</h3>
                <h3 className="text-[26px] text-center font-extrabold py-3">Top Pool Service Near Me For Unbeatable Pricing And Quality</h3>
                <p className="text-[17px] md:text-[18px]  py-4 leading-8">If you are looking for the best pool service near me, Red Hearts Pools is the perfect choice. We have the most competitive prices and the best quality. We deliver excellence without a sky-high price. We do not have hidden fees; our prices are transparent and upfront. You can count on us to give you great value for your money. With our complete range of services, we&apos;ve got everything covered - from regular maintenance to quick repairs and helpful advice.</p>

                <section className='grid grid-cols-1 md:grid-cols-3 gap-6 py-6'>
                    <div>
                        <h3 className='text-[17px] font-bold md:text-[18px] py-3 leading-7'> STEP 1 Pool chemical balancing clipboard icon
                            Assessment and Analysis</h3>
                        <p className='text-[15px] leading-7'>We first inspect your pool to determine its current condition. Our specialists examine everything in detail—the water, the equipment, the problems. We test the water chemistry and inspect the equipment to ensure it works. We also check the pool&apos;s structure for anything that needs to be fixed. It&apos;s all about improving your pool and keeping it in top shape.
                        </p>
                    </div>
                    <div>
                        <h3 className='text-[17px] font-bold md:text-[18px] py-3 leading-7'> STEP 2 Customized Solutions
                      .</h3>
                        <p className='text-[15px] leading-7'>
                        We analyze everything and create a plan, especially for you. We cater to your pool&apos;s needs, whether regular check-ups, equipment repairs, or a revamp. We aim to find the most optimal solutions to make your pool perform well, be used longer, and provide safety while swimming
                        </p>
                    </div>
                    <div>
                        <h3 className='text-[17px] font-bold md:text-[18px] py-3 leading-7'> STEP 3 Execution and Follow-Up
                </h3>
                        <p className='text-[15px] leading-7'>We move to the implementation phase after our strategic plan is completed. Our qualified technicians either upgrade, perform routine checkups, or install equipment according to the manufacturer&apos;s instructions and recommended practices. You can rely on us all the way. Feel free to call us, as we will be at your service to determine whether you are satisfied with our job and help you with any other tasks you may be having difficulties with.
                        </p>
                    </div>



                </section>



            </div>


        </div>
    );
}

export default AllPoolServices;