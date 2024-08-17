import React from 'react'
import { setSheet } from '../API/PAGEController';
import { AppDispatch } from '../API/store';
import { useDispatch } from 'react-redux';
import Main from './Main';


const Menu: any = ((e: any) => {
    const dispath = useDispatch<AppDispatch>();
    let sheet = 0;
    return (
        <div>
            <div >

                <div className="w-screen flex justify-center px-4 py-4 mr-2 text-2xl font-bold text-green-800">Fredit</div>
                <div className=" flex justify-center">
                    <div className="  flex px-4 py-4 mr-2 bg-white border-gray-500 border-1 hover:bg-gray-600 hover:text-white shadow-lg font-semibold text-lg rounded-md" onClick={(e) => { dispath(setSheet(1)); }}>
                        계산
                    </div>
                    <div className="  flex px-4 py-4 mr-2 bg-white border-gray-500 border-1 hover:bg-gray-600 hover:text-white shadow-lg font-semibold text-lg rounded-md" onClick={() => { dispath(setSheet(2)); }}>
                        수정
                    </div>
                    <div className="  flex px-4 py-4 mr-2 bg-white border-gray-500 border-1 hover:bg-gray-600 hover:text-white shadow-lg font-semibold text-lg rounded-md" onClick={() => { dispath(setSheet(3)); }}>
                        일 조회
                    </div>
                    <div className="  flex px-4 py-4 mr-2 bg-white border-gray-500 border-1 hover:bg-gray-600 hover:text-white shadow-lg font-semibold text-lg rounded-md" onClick={() => { dispath(setSheet(4)); }}>
                        월 조회
                    </div>
                </div>
            </div>
            <br />
            <Main />
        </div >


    )
}
);

export default Menu;