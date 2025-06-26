import React, { useState } from "react";
import Button from "../components/common/Button";
import checkImg from "../assets/images/png/checkout-img.png";
import creditCard from '../assets/images/svg/credit-card.svg';
import information from '../assets/images/svg/information.svg';
import paypal from '../assets/images/svg/paypal.svg';
import under from '../assets/images/svg/under.svg';

const CheckOut = () => {
    const [checked, setChecked] = useState(false);
    const [selected, setSelected] = useState("");
    const [couponApplied, setCouponApplied] = useState(false);
    const [coupon, setCoupon] = useState("");

    const handleApplyCoupon = () => {
        if (coupon.trim() !== "") {
            setCouponApplied(true);
            setTimeout(() => {
                setCouponApplied(false);
            }, 1000);
        }
    };

    return (
        <>
            <div className="min-h-screen py-[120px] overflow-hidden">
                <div className="max-w-[1140px] mx-auto px-3">
                    <div className="flex flex-col lg:flex-row gap-6">
                        <div className="w-full lg:w-8/12">
                            <div className="flex flex-wrap justify-between">
                                <p className="font-bold text-2xl leading-[120%] text-[#112D49]">Contact</p>
                                <Button btnText="Log in" btnClass="!py-[8px] !px-[26px] font-semibold" />
                                <div className="flex justify-between items-center bg-[#F4F8F7] py-[13px] px-[26px] rounded-xl w-full mt-[20px]">
                                    <div className="flex-col flex w-full">
                                        <label className="text-xs leading-[150%] text-[#8393A0]">Email or mobile phone number</label>
                                        <input type="text" placeholder="tim.jennings@example.com" className="outline-0 text-[#112D49]" />
                                    </div>
                                    <img src={under} alt="under" className="hidden sm:block" />
                                </div>
                            </div>
                            <p className="font-bold text-2xl leading-[120%] text-[#112D49] pt-[35px]">Delivery</p>
                            <div className="flex flex-col bg-[#F4F8F7] py-[13px] px-[26px] rounded-xl w-full mt-[20px]">
                                <label className="text-xs leading-[150%] text-[#8393A0]">Country/ Region</label>
                                <input type="text" placeholder="Guinea" className="outline-0 text-[#112D49]" />
                            </div>

                            <div className="flex flex-col md:flex-row gap-[30px] mt-[26px]">
                                {["First name", "Last name"].map((label, index) => (
                                    <div key={index} className="flex-col flex bg-[#F4F8F7] py-[13px] px-[26px] rounded-xl w-full">
                                        <label className="text-xs leading-[150%] text-[#8393A0]">{label} (Optional)</label>
                                        <input type="text" placeholder={label} className="outline-0 text-[#112D49]" />
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-col bg-[#F4F8F7] py-[13px] px-[26px] rounded-xl w-full mt-[20px]">
                                <label className="text-xs leading-[150%] text-[#8393A0]">Address</label>
                                <input type="text" placeholder="tim.jennings@example.com" className="outline-0 text-[#112D49]" />
                            </div>

                            <div className="flex gap-[8px] pt-[16px] items-center">
                                <img src={information} alt="information" />
                                <p className="text-[#41576D] leading-[150%]">Add a house number if you have one</p>
                            </div>

                            <div className="flex flex-col bg-[#F4F8F7] py-[13px] px-[26px] rounded-xl w-full mt-[42px]">
                                <label className="text-xs leading-[150%] text-[#8393A0]">Apartment, Suit, etc. (optional)</label>
                                <input type="text" placeholder="2464 Royal Ln. Mesa, New Jersey 45463" className="outline-0 text-[#112D49]" />
                            </div>

                            <div className="flex flex-col md:flex-row gap-[30px] mt-[26px]">
                                {["City", "Emirate"].map((label, index) => (
                                    <div key={index} className="flex-col flex bg-[#F4F8F7] py-[13px] px-[26px] rounded-xl w-full">
                                        <label className="text-xs leading-[150%] text-[#8393A0]">{label}</label>
                                        <input type="text" placeholder={label === "City" ? "Ajman" : "Abu Dhabi"} className="outline-0 text-[#112D49]" />
                                    </div>
                                ))}
                            </div>

                            <div className="flex gap-[8px] items-center pt-[16px]">
                                <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} />
                                <p className="leading-[150%] text-[#41576D]">Save this information for next time</p>
                            </div>
                            <p className="text-lg leading-[150%] text-[#112D49] pt-[42px]">Shipping method</p>
                            <div className="flex justify-between items-center bg-[#F4F8F7] py-[13px] px-[26px] rounded-xl w-full mt-[20px]">
                                <input type="text" placeholder="Standard (Example)" className="outline-0 text-[#112D49] w-full" />
                                <p className="font-semibold leading-[150%] text-[#112D49] whitespace-nowrap ml-4">AED 20.00</p>
                            </div>
                            <p className="font-bold text-2xl leading-[120%] text-[#112D49] pt-[42px]">Payment</p>
                            <p className="leading-[150%] text-[#41576D] pt-[4px]">All transactions are secure and encrypted.</p>
                            <div className="border border-[#E8EBED] py-[20px] px-[28px] mt-[20px]">
                                <div className="flex justify-between flex-wrap">
                                    <div className="flex gap-[8px] items-center">
                                        <label className="inline-flex items-center cursor-pointer">
                                            <input type="radio" name="payment" value="paypal" checked={selected === "paypal"} onChange={() => setSelected("paypal")} className="sr-only" />
                                            <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-200 ${selected === "paypal" ? "border-4 border-blue-400" : "border-2 border-gray-300"}`}>
                                                {selected === "paypal" && <div className="w-3 h-3 bg-blue-400 rounded-full" />}
                                            </div>
                                        </label>
                                        <img src={paypal} alt="paypal" />
                                    </div>
                                    <img src={creditCard} alt="creditCard" />
                                </div>
                                <div className="flex gap-[8px] items-center pt-[34px]">
                                    <label className="inline-flex items-center cursor-pointer">
                                        <input type="radio" name="payment" value="card" checked={selected === "card"} onChange={() => setSelected("card")} className="sr-only" />
                                        <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-200 ${selected === "card" ? "border-4 border-blue-400" : "border-2 border-gray-300"}`}>
                                            {selected === "card" && <div className="w-3 h-3 bg-blue-400 rounded-full" />}
                                        </div>
                                    </label>
                                    <p className="leading-[150%] text-[#40566D]">Credit Card/ Debit Card</p>
                                </div>
                                {selected === "card" && (
                                    <>
                                        <div className="flex flex-col md:flex-row justify-between gap-[28px]">
                                            <div className="w-full">
                                                <p className="font-bold text-lg text-[#112D49] pt-[35px]">Card Number</p>
                                                <input type="number" placeholder="1234 5678 9012 3456" className="bg-[#F4F8F7] rounded-[12px] h-[52px] w-full mt-[14px]" />
                                            </div>
                                            <div className="w-full">
                                                <p className="font-bold text-lg text-[#112D49] pt-[35px]">Name on Card</p>
                                                <input type="text" placeholder="Full Name" className="bg-[#F4F8F7] rounded-[12px] h-[52px] w-full mt-[14px]" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col md:flex-row justify-between gap-[28px]">
                                            <div className="w-full">
                                                <p className="font-bold text-lg text-[#112D49] pt-[35px]">Expire Date</p>
                                                <input type="text" placeholder="MM/YY" className="bg-[#F4F8F7] rounded-[12px] h-[52px] w-full mt-[14px]" />
                                            </div>
                                            <div className="w-full">
                                                <p className="font-bold text-lg text-[#112D49] pt-[35px]">CVC</p>
                                                <input type="text" placeholder="123" className="bg-[#F4F8F7] rounded-[12px] h-[52px] w-full mt-[14px]" />
                                            </div>
                                        </div>
                                    </>
                                )}
                                <div className="flex items-center gap-[8px] mt-[48px]">
                                    <label className="inline-flex items-center cursor-pointer">
                                        <input type="radio" name="payment" value="bank" checked={selected === "bank"} onChange={() => setSelected("bank")} className="sr-only" />
                                        <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-200 ${selected === "bank" ? "border-4 border-blue-400" : "border-2 border-gray-300"}`}>
                                            {selected === "bank" && <div className="w-3 h-3 bg-blue-400 rounded-full" />}
                                        </div>
                                    </label>
                                    <p>Bank Transfer</p>
                                </div>

                                {selected === "bank" && (
                                    <div className="mt-[30px]">
                                        {["Account Holder Name", "Bank Name", "Account Number", "IFSC / SWIFT Code"].map((label, i) => (
                                            <div className="mb-[20px]" key={i}>
                                                <label className="block font-semibold text-[#112D49] mb-[6px]">{label}</label>
                                                <input type={label.includes("Number") ? "number" : "text"} placeholder={label} className="bg-[#F4F8F7] rounded-[12px] h-[52px] w-full px-[16px] text-[#112D49]" />
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="w-full lg:w-4/12 relative overflow-visible mt-10 lg:mt-0">
                            <div className={`absolute top-[-50px] right-0 bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded-md shadow-md text-sm z-10 transition-transform duration-500 ease-out ${couponApplied ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}>
                                Coupon Applied Successfully!
                            </div>
                            <div className="p-3.5 shadow-lg rounded-[8px]">
                                <div className="flex items-center justify-between pb-[26px]">
                                    <div className="flex gap-[9px] items-center">
                                        <img src={checkImg} alt="checkout-img" className="w-full max-w-[45px]" />
                                        <p className="leading-[150%] text-[#112D49]">Gaming Chair</p>
                                    </div>
                                    <p className="leading-[150%] text-[#112D49]">AED 357.99</p>
                                </div>
                                <a className="text-[#73A4E0] text-[13px] font-medium leading-[150%]" href="#">Have a coupon? Click here to enter your code</a>
                                <div className="flex flex-col sm:flex-row justify-between gap-[10px] mt-[10px]">
                                    <input type="text" placeholder="Coupon code" value={coupon} onChange={(e) => setCoupon(e.target.value)} className="outline-0 text-[#112D49] bg-[#F4F8F7] py-[13px] px-[26px] rounded-full w-full" />
                                    <button onClick={handleApplyCoupon} className="font-medium text-[#112D49] border border-[#112D49] max-w-[119px] w-full whitespace-nowrap py-2 px-[15px] rounded-[93px] hover:bg-[#112D49] hover:text-white transition-all ease-linear duration-200">Apply Now</button>
                                </div>
                                <Button btnClass="hover:bg-[#112D49] hover:text-white !text-dark-blue !w-full !max-w-[330px] mt-[20px]" btnText="Buy Now" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CheckOut;
