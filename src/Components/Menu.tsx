import React from 'react'
import Sheet1 from './Sheet1';
import { setSheet } from '../API/PAGEController';
import { AppDispatch } from '../API/store';
import { useDispatch } from 'react-redux';


const Menu: any = ((e: any) => {
    const dispath = useDispatch<AppDispatch>();
    let sheet = 0;
    return (
        <div>
            <div >

                <div className="w-screen flex justify-center px-4 py-4 mr-2 text-3xl">프레딧</div>
                <div className=" flex justify-center">
                    <div className="  flex px-4 py-4 mr-2 bg-white border-gray-500 border-1 hover:bg-gray-600 hover:text-white shadow-lg font-semibold text-lg rounded-md" onClick={(e)=>{dispath(setSheet(1));}}>
                        계산
                    </div>
                    <div className="  flex px-4 py-4 mr-2 bg-white border-gray-500 border-1 hover:bg-gray-600 hover:text-white shadow-lg font-semibold text-lg rounded-md" onClick={()=>{dispath(setSheet(2));}}>
                        수정
                    </div>
                    <div className="  flex px-4 py-4 mr-2 bg-white border-gray-500 border-1 hover:bg-gray-600 hover:text-white shadow-lg font-semibold text-lg rounded-md">
                        조회
                    </div>
                </div>
            </div>
            <span></span>
            <Sheet1/>
        </div >
        
            
    )
}
);

export default Menu;