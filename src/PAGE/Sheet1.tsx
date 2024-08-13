import { data, Getsheet, inupsheet } from "../API/Product";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../API/store";
import { useEffect } from "react";
import "../Asset/excel.css";

const Sheet1: any = ((e: any) => {
    const dispath = useDispatch<AppDispatch>();
    const setting: any = useSelector((state: RootState) => state.Product);
    useEffect(() => {
        dispath(Getsheet());
        dispath(inupsheet(setting));
    }, []);
    if(setting.data.data === undefined)
        return ;
    const handleChange = (e : any) =>{
        console.log(e.target.value);
    }
    return (
        <div>
            <table>
                <thead>                
                    <tr>
                        <th className="unused">이름</th>
                        <th className="unused">가격</th>
                        <th className="unused">수량</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        
                        setting.data.data.map((data : any)=>(
                            <tr key={data.p_id}>
                                <td>{data.p_name}</td>
                                <td>{data.value}</td>
                                <td onChange={handleChange}>{data.quatity}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
})

export default Sheet1;