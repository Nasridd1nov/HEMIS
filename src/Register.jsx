import React from "react";
import Logo from "./assets/images/logo.jpg"
function Register(){
    return(
        <>
        <div className="Register bg-[#fff] w-[550px] h-[400px] text-center mx-auto mt-[150px] bg-[#fff] border-t-[3px] border-black mb-[200px]">
            <img src={Logo} alt="" className="w-[120px] h-[120px] ml-[220px] pt-[20px]"/>
            <h1 className="text-[25px] mt-[10px]">Namangan Davlat Universtiteti</h1>
            <h2 className="text-[18px] mt-[5px]">HIMES Student Axborot tizimi</h2>
            <div className="input">
            <input type="text" placeholder="Talaba ID" className="w-[90%] border-[2px] border-black mt-[10px]"/>
            <i class='bx bx-envelope left-[-30px] relative'></i>
            <input type="text" placeholder="Parol" className="w-[90%] mt-[10px] border-[2px] border-black"/>
            <i class='bx bx-lock-alt relative left-[-30px]'></i>
            <div className="button py-3 border-t-[1px] border-black flex justify-between px-[20px] mt-[70px] border-top-[3px]">
                <div className="chekbox flex">
                <input type="checkbox" />
                <h3 className="pl-[5px]">Eslab Qolish</h3>
                </div>
                <button className="bg-[blue] w-[200px] h-[30px] text-[#fff]">Kirish</button>
            </div>
            </div>
        </div>
        </>
    )
}

export default Register;