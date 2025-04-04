import { Getsheet} from "../API/Product";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../API/store";
import { useEffect } from "react";
import "../Asset/excel.css";
import '../Asset/calendar.css';
import Sheet1 from "./Sheet1";
import Sheet2 from "./Sheet2";
import Sheet3 from "./Sheet3";
import Sheet4 from "./Sheet4";
import Sheet5 from "./Sheet5";
import Sheet0 from "./Sheet0";



const Main: any = ((e: any) => {
    const dispath = useDispatch<AppDispatch>();
    const setting: any = useSelector((state: RootState) => state.Product);
    const sheet: any = useSelector((state: RootState) => state.PAGEController);
    
    useEffect(() => {
        dispath(Getsheet());
    }, []);
    
    if (setting.odata === undefined || setting.data === undefined)
        return <div>에러 페이지</div>;
    if (sheet.sheetnum == 0) {
        return (
            <Sheet0 />
        );
    }
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
    else if (sheet.sheetnum == 5) {
        return (
            <Sheet5 />
        );
    }
})

export default Main;