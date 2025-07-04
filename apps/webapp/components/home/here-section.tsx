'use client'
import Link from "next/link";
import {Zap, Shield, Globe, DollarSign, ArrowRight} from "lucide-react"


export default function Hero() {
  return (

    <section className="w-full xl:h-screen max-lg:h-full pt-20 bg-[#EFF6FF] gap-7">
        <div className="max-w-[56.125rem] mt-16 max-lg:mt-0 xl:h-[27.75rem] mx-auto">
            <div className="w-80 h-9 gap-2 pl-3 py-2 rounded-full bg-[#DBEAFE] mx-auto flex">
                    < Shield color="#2563EB" size={16}/>
                <h4 className="w-[16.5rem] h-5 font-[inter] font-medium text-sm leading-5 track-[0%] align-middle text-[#1E40AF]">Blockchain-Powered Escrow Protection</h4>{/* left: 288.21px; */}
            </div>
            <div className="max-w-4xl lg:h-[7.5rem] max-lg:w-[100%] md:mx-auto mt-6 sm:mb-2">
                <h1 className="font-[Inter] font-bold lg:text-6xl  leading-[3.75rem] text-center align-middle max-lg:text-4xl text-[#111827]">Launch Secure E-commerce<span className="text-[#2563EB]"> in Minutes</span></h1>
            </div>

            <div className=" max-w-3xl h-14 lg:mt-5 max-md:mt-5 mx-auto">
                <p className="font-[Inter] font-normal text-xl max-lg:w-[100%] max-lg:px-4 flex justify-center items-center max-md:text-base leading-7 text-center align-middle text-[#4B5563]">The complete e-commerce template with built-in escrow protection. Secure
                    milestone-based payments, zero custodians, maximum flexibility.
                </p>
            </div>
            
            <div className="max-w-[26.875rem] mx-auto mt-7 max-lg:mt-14 flex justify-between">
                <Link href="">
                   <button className="w-56 h-11 py-2 px-8 inline-flex justify-center items-center rounded-[10px] bg-[#2563EB] transition-all duration-500 hover:bg-blue-800 text-[#F8FAFC]">
                       <h3 className="w-[130px] font-[Inter] font-medium text-[16px] leading-7 text-center align-middle items-center">Start Shopping</h3>
                         <ArrowRight size={16}/>
                    </button>
                </Link>

                <Link href="">
                    <button className="w-[180px] h-11 py-2 px-8 inline-flex rounded-[10px] bg-[#FFFFFF] transition-all duration-500 hover:bg-gray-300">
                        <h3 className="w-[130px] font-[Inter] font-medium text-[16px] leading-7 text-center align-middle text-[#020817]">How It Works</h3>
                    </button>
                </Link>
            </div>
            {/*  */}
            <div className="max-w-[768px] mx-auto my-12 flex max-md:flex-wrap justify-evenly gap-6">
                <div className="flex flex-col max-md:w-5/12 text-center justify-center align-middle">
                    <div className="mx-auto mb-2">
                      <Zap color="#2563EB" size={32}/>
                    </div>
                      <h3 className="font-medium text-[14px] leading-5 text-center align-middle text-[#111827]">Launch in Minutes</h3>
                </div>

                <div className="flex flex-col max-md:w-5/12" >
                    <div className="mx-auto mb-2">
                      <Shield size={32} color="#2563EB"/>
                    </div>
                     <h3 className="font-medium text-[14px] leading-5 text-center align-middle text-[#111827]">Secure Infrastructure</h3>
                </div>

                <div className="flex flex-col max-md:w-5/12">
                    <div className="mx-auto mb-2">
                        <DollarSign color="#2563EB" size={32} />
                    </div>
                      <h3 className=" h-5 font-medium text-[14px] leading-5 text-center align-middle text-[#111827]">Save on Costs</h3>
                </div>

                <div className="flex flex-col max-md:w-5/12">
                    <div className="mx-auto mb-2">
                      <Globe color="#2563EB" size={32}/>
                    </div>
                    <h3 className="h-5 font-medium text-[14px] leading-5 text-center align-middle text-[#111827]">Global Payments</h3>
                </div>
            </div>
        </div> 
    </section>
  )
}
