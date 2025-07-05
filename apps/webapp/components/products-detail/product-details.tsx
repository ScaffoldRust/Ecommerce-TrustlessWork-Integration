"use client"
import { ChevronLeft, CircleCheckBig, Dot, RotateCcw, Shield, Truck } from "lucide-react";
import { FaRegStar, FaStar } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import Link from "next/link"

export const ProductDetail = () => {

    type Product = {
        id: number;
        title: string;
        subtitle: string;
        price: string;
    }

    const details: Product[] = [
        { id: 1, title: "Order confirmation", subtitle: "20% of total", price: "$59.99" },
        { id: 2, title: "Item shipped", subtitle: "30% of total", price: "$89.99" },
        { id: 3, title: "Item delivered", subtitle: "50% of total", price: "$149.99" },
    ]

    return (
        <div className="px-6 lg:px-12 py-4 lg:py-8">
            <span className="flex items-center text-sm">
                <Link href="/" className="cursor-pointer flex"> <ChevronLeft size={18} /> Back to Products </Link> &nbsp; / Product Details
            </span>

            <div className="flex flex-col lg:flex-row gap-10">
                {/* left section  */}
                <div className="flex flex-col w-full lg:w-[50%]">
                    <div className=" relative w-full lg:w-full h-full lg:h-[660px] shadow-md rounded-lg">
                        <div className="absolute top-4 left-4 flex items-center justify-center gap-2 px-2 py-1 mt-3 rounded-xl bg-blue-600 text-white text-sm font-medium"><Shield className="text-white" size={20} /> <span>Escrow Protected</span></div>
                        <img src="https://cdn-img.oraimo.com/fit-in/600x600/AE/product/2023/12/29/OHP-610S-A1-680.jpg" alt="" />
                    </div>
                    <div className="mt-5">
                        <span className="shadow-sm p-1 lg:p-2 text-xs lg:text-base rounded-md bg-gray-300">Electronics</span>
                        <h3 className="my-3 font-bold text-black text-xl lg:text-3xl">Premium Wireless Headphones</h3>

                        {/* rating stars */}
                        <div className="flex items-center gap-2">
                            <span className="flex gap-1">
                                <FaStar className="text-yellow-600 text-sm lg:text-xl" />
                                <FaStar className="text-yellow-600  text-sm lg:text-xl" />
                                <FaStar className="text-yellow-600  text-sm lg:text-xl" />
                                <FaStar className="text-yellow-600  text-sm lg:text-xl" />
                                <FaRegStar className="text-gray-600  text-sm lg:text-xl" />
                            </span>
                            <span className="text-gray-600 text-sm lg:text-xl">4.8 (124 reviews)</span>
                        </div>

                        {/* product price */}
                        <h3 className="font-bold text-black text-lg lg:text-xl my-2">$299.99</h3>

                        <p className="text-sm lg:text-base text-gray-600">Experience superior sound quality with our premium wireless headphones featuring advanced noise cancellation technology.</p>

                        <h4 className="text-black font-semibold my-3">Key Features:</h4>
                        <ul className="flex flex-col gap-2">
                            <li className="flex items-center gap-1 text-sm text-gray-600"><GoDotFill size={15} className="text-blue-600" />Active Noise Cancellation</li>
                            <li className="flex items-center gap-1 text-sm text-gray-600"><GoDotFill size={15} className="text-blue-600" /> 30-hour battery life</li>
                            <li className="flex items-center gap-1 text-sm text-gray-600"><GoDotFill size={15} className="text-blue-600" />Premium leather comfort</li>
                            <li className="flex items-center gap-1 text-sm text-gray-600"><GoDotFill size={15} className="text-blue-600" />Hi-Res Audio certified</li>
                            <li className="flex items-center gap-1 text-sm text-gray-600"><GoDotFill size={15} className="text-blue-600" />Quick charge technology</li>

                        </ul>
                        <div className="flex gap-5 my-5">
                            <span className="flex items-center gap-1 text-sm text-gray-600"><Truck size={18} />Free shipping</span>
                            <span className="flex items-center gap-1 text-sm text-gray-600"><RotateCcw size={18} />30-day returns</span>
                        </div>
                    </div>
                </div>

                {/* right section  */}
                <div className="flex flex-col gap-8 w-full lg:w-[50%]">

                    <div className="border-[1px] border-[#E2E8F0] p-5 rounded-xl">
                        <h3 className="flex items-center justify-center gap-2 font-bold text-xl lg:text-3xl"><Shield className="text-blue-600" />Escrow Protection</h3>

                        <div className="flex items-center gap-3 bg-[#EFF6FF] p-4 rounded-lg mt-8">
                            <Shield className="text-blue-600" />
                            <div className="">
                                <h5 className="text-[#1E3A8A] font-semibold text-lg lg:text-xl">Secure Payment</h5>
                                <p className="text-[#1D4ED8] text-xs lg:text-lg">Your payment is held securely until all milestones are completed.</p>
                            </div>
                        </div>


                        <h4 className="text-black text-lg lg:text-xl my-3 lg:my-6 font-semibold">Payment Milestones</h4>


                        <div className="flex flex-col gap-4">
                            {details.map((item, index) => (
                                <div key={index} className="flex items-center justify-between gap-4 p-4 rounded-lg border-[1px] border-[#E2E8F0]">
                                    <div className=" flex items-center gap-4">
                                        <p className="flex items-center justify-center h-7 lg:h-9 w-7 lg:w-9 rounded-full text-blue-600 bg-blue-300/50">{item.id}</p>
                                        <div className="flex flex-col gap-1">
                                            <h4 className="text-black text-sm lg:text-md lg:text-lg font-semibold">{item.title}</h4>
                                            <p className="text-gray-600 text-sm lg:text-md">{item.subtitle}</p>
                                        </div>
                                    </div>
                                    <h4 className="text-md lg:text-xl font-medium">{item.price}</h4>
                                </div>
                            ))}
                        </div>


                    </div>

                    <div className="border-[1px] border-[#E2E8F0] p-5 rounded-xl">
                        <h3 className="flex items-center justify-center gap-2 font-bold text-xl lg:text-3xl"><Shield className="text-blue-600" />Purchase with Escrow</h3>

                        <div className="mt-5">
                            <h6 className="text-black text-sm lg:text-sm font-medium">Your Wallet Address</h6>
                            <input type="text" placeholder="0x..." id="" className="outline-none text-gray-600 rounded-md border-[1px] border-gray-300 p-[6px] w-full mt-1 text-sm lg:text-base" />
                        </div>

                        <div className="mt-5">
                            <h6 className="text-black text-sm lg:text-sm font-medium">Special Instructions (Optional)</h6>
                            <textarea placeholder="Any special delivery instructions or requirements..." rows={3} className="outline-none text-gray-600 rounded-md text-sm lg:text-base border-[1px] border-gray-300 p-[6px] w-full mt-1 resize-none"></textarea>
                        </div>

                        <div className="bg-[#F9FAFB] rounded-lg p-2 lg:p-3 mt-2">
                            <div className="border-b-[1px] border-[#add3fa]">
                                <div className="flex items-center justify-between my-2">
                                    <p className="text-xs lg:text-sm">Product Price</p>
                                    <p className="text-xs lg:text-sm">$299.99</p>
                                </div>
                                <div className="flex items-center justify-between my-2">
                                    <p className="text-xs lg:text-sm">Escrow Fee</p>
                                    <p className="text-xs lg:text-sm">$2.99</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-between my-2">
                                <p className="text-sm lg:text-base font-medium">Total</p>
                                <p className="text-sm lg:text-base font-medium">$302.98</p>
                            </div>
                        </div>

                        <Link href="" className="flex items-center justify-center gap-2 px-4 py-[10px] mt-3 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors">
                            <Shield className="text-white" size={20} /> <span>Create Escrow Contract</span>
                        </Link>
                        <p className="text-xs lg:text-sm text-gray-600 text-center mt-4">By proceeding, you agree to our Terms of Service and Escrow Agreement</p>
                    </div>

                    <div className="flex items-center border-[1px] border-[#E2E8F0] p-3 rounded-xl">
                        <span className="flex items-center justify-center px-2 py-1 w-[3rem] h-[3rem] rounded-full bg-green-50 text-5xl font-extrabold mb-3"><CircleCheckBig size={17} className="text-green-500 font-bold" /> </span>

                        <div className="">
                            <h5 className="text-sm lg:text-lg font-medium">Powered by Trustless Work</h5>
                            <p className="text-xs lg:text-md text-gray-600">Blockchain-powered escrow with zero custodians</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

