import { Getsheet} from "../API/Product";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../API/store";
import { useEffect } from "react";
import "../Asset/excel.css";
import 'react-calendar/dist/Calendar.css';
import Sheet1 from "./Sheet1";
import Sheet2 from "./Sheet2";
import Sheet3 from "./Sheet3";
import Sheet4 from "./Sheet4";


const Main: any = ((e: any) => {
    const dispath = useDispatch<AppDispatch>();
    const setting: any = useSelector((state: RootState) => state.Product);
    const sheet: any = useSelector((state: RootState) => state.PAGEController);
    
    useEffect(() => {
        //dispath(GetDATAsheet());
        dispath(Getsheet());
    }, [sheet]);
    
    if (setting.odata === undefined || setting.data === undefined)
        return <div>에러 페이지</div>;
    if (sheet.sheetnum == 1) {
        return (
            <Sheet1 />
        );
    }
    else if (sheet.sheetnum == 2) {
        return (
            <Sheet2 />
        );
    }

    else if (sheet.sheetnum == 3) {
        return (
            <Sheet3 />
        );
    }
    else if (sheet.sheetnum == 4) {
        return (
            <Sheet4 />
        );
    }
})

export default Main;