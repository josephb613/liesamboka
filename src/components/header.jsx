import React from 'react';
import logo from '../assets/header-img/image 5.png'

function Header() {
    return (
        <div className='fixed'>
            <div className=" h-20 bg-[#006537] flex justify-center gap-80 items-center">
                <div>
                    <input type="text" placeholder='rechercher' />
                </div>

                <div className='w-24 h-24  mt-6'>
                    <img src={logo} alt="logo" />
                </div>

                <div className='flex gap-4'>
                    <button className=' text-white  py-2 px-4 rounded-full'>S’enregistrer</button>
                    <button className='bg-white text-green-900   py-2 px-4 rounded-full'>S'identifier</button>
                </div>
            </div>



            <div className="inline-flex flex-col h-[59px] items-center justify-center relative ">

                <div className="relative w-[1440px] h-[76px] mt-[-8.50px] mb-[-8.50px] bg-[#006537]">
                    <div className="left-[508px] opacity-50 [font-family:'Outfit-Regular',Helvetica] font-normal absolute top-[27px] text-white text-[14px] text-center tracking-[0] leading-[normal]">
                        Vedettes
                    </div>
                    <div className="left-[780px] opacity-50 [font-family:'Outfit-Regular',Helvetica] font-normal absolute top-[27px] text-white text-[14px] text-center tracking-[0] leading-[normal]">
                        Livraison
                    </div>
                    <div className="left-[898px] opacity-50 [font-family:'Outfit-Regular',Helvetica] font-normal absolute top-[27px] text-white text-[14px] text-center tracking-[0] leading-[normal]">
                        Blog
                    </div>
                    <div className="absolute top-[27px] left-[975px] opacity-50 [font-family:'Outfit-Regular',Helvetica] font-normal text-white text-[14px] text-center tracking-[0] leading-[normal]">
                        Contactez-nous
                    </div>
                    <div className="left-[400px] [font-family:'Outfit-Bold',Helvetica] font-bold absolute top-[27px] text-white text-[14px] text-center tracking-[0] leading-[normal]">
                        Accueil
                    </div>
                    <div className="absolute w-[90px] h-[26px] top-[20px] left-[630px]">
                        <div className="absolute top-[8px] left-0 opacity-50 [font-family:'Outfit-Regular',Helvetica] font-normal text-white text-[14px] text-center tracking-[0] leading-[normal]">
                            Produit
                        </div>
                        <div className="absolute w-[38px] h-[17px] top-0 left-[52px]">
                            <div className="relative w-[36px] h-[17px] bg-[#ccedff] rounded-[5.23px]">
                                <div className="absolute top-px left-[4px] [font-family:'Outfit-Regular',Helvetica] font-normal text-[#00a3ff] text-[10px] text-center tracking-[0] leading-[normal]">
                                    2,000
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;