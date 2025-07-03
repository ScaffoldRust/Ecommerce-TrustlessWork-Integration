'use client'
import Link from "next/link";
import {Zap, Shield, Globe, DollarSign, ArrowRight} from "lucide-react"


export default function Hero() {
  return (

    <section className="max-w-[90rem] h-screen pt-20 pb-[80px] bg-[#EFF6FF] overflow-hidden">
        <div className="max-w-[56.125rem] mt-16 h-[27.75rem] mx-auto">
            <div className="w-80 h-9 gap-2 pl-3 py-2 rounded-full bg-[#DBEAFE] mx-auto flex">
                    < Shield color="#2563EB" size={16}/>
                <h4 className="w-[16.5rem] h-5 font-[inter] font-medium text-sm leading-5 track-[0%] align-middle text-[#1E40AF]">Blockchain-Powered Escrow Protection</h4>{/* left: 288.21px; */}
            </div>
            <div className="max-w-4xl h-[7.5rem] mt-6">
                <h1 className="font-[Inter] font-bold text-6xl leading-[3.75rem] text-center align-middle text-[#111827]">Launch Secure E-commerce<span className="text-[#2563EB]"> in Minutes</span></h1>
            </div>

            <div className=" max-w-3xl h-14 mt-5 mx-auto">
                <p className="font-[Inter] font-normal text-xl leading-7 text-center align-middle text-[#4B5563]">The complete e-commerce template with built-in escrow protection. Secure
                    milestone-based payments, zero custodians, maximum flexibility.
                </p>
            </div>
            
            <div className="w-[26.875rem] mx-auto mt-7 flex justify-between">
                <Link href="">
                   <button className="w-56 h-11 py-2 px-8 inline-flex rounded-[10px] bg-[#2563EB] transition-all duration-500 hover:bg-blue-800 text-[#F8FAFC]">
                       <h3 className="w-[130px] font-[Inter] font-medium text-[16px] leading-7 text-center align-middle">Start Shopping</h3>
                        <div className="w-4 h-full">
                         <ArrowRight/>
                       </div>
                    </button>
                </Link>

                <Link href="">
                    <button className="w-[180px] h-11 py-2 px-8 inline-flex rounded-[10px] bg-[#FFFFFF] transition-all duration-500 hover:bg-gray-300">
                        <h3 className="w-[130px] font-[Inter] font-medium text-[16px] leading-7 text-center align-middle text-[#020817]">How It Works</h3>
                    </button>
                </Link>
            </div>

            <div className="w-[768px] h-[60px] mx-auto mt-12 flex justify-between">
                <div className="flex flex-col">
                    <div className="mx-auto mb-2">
                      <Zap color="#2563EB" size={32}/>
                    </div>
                      <h3 className="w-[122.54931640625px] h-5 font-medium text-[14px] leading-5 text-center align-middle text-[#111827]">Launch in Minutes</h3>
                </div>

                <div className="flex flex-col">
                    <div className="mx-auto mb-2">
                      <Shield size={32} color="#2563EB"/>
                    </div>
                     <h3 className="w-[142.800537109375px] h-5 font-medium text-[14px] leading-5 text-center align-middle text-[#111827]">Secure Infrastructure</h3>
                </div>

                <div className="flex flex-col">
                    <div className="mx-auto mb-2">
                        <DollarSign color="#2563EB" size={32} />
                    </div>
                      <h3 className="w-[122.54931640625px] h-5 font-medium text-[14px] leading-5 text-center align-middle text-[#111827]">Save on Costs</h3>
                </div>

                <div className="flex flex-col">
                    <div className="mx-auto mb-2">
                      <Globe color="#2563EB" size={32}/>
                    </div>
                    <h3 className="w-[122.54931640625px] h-5 font-medium text-[14px] leading-5 text-center align-middle text-[#111827]">Global Payments</h3>
                </div>
            </div>
        </div> 
    </section>
  )
}
