import { data, Getsheet, inupsheet, setD } from "../API/Product";
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
    if(setting == undefined)
        return <div>에러 페이지</div>;
    
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
                                <td><input value={data.quantity} onChange={(e:any) => {
                                    
                                    const input = {
                                        p_id : data.p_id,
                                        col : "quantity",
                                        data : e.target.value
                                    };
                                    console.log(input);
                                    //setD(input);
                                }}/></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
})

export default Sheet1;