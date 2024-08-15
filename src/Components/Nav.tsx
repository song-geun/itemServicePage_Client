import { useNavigate } from "react-router-dom";

const Nav: any = ((e: object) => {
    let navigate = useNavigate();   
    return (
        <div className="flex-row w-screen">
            <div className="flex w-screen justify-between">
                <span className="text-2xl font-bold text-green-800">Fredit</span>
                <div className="flex justify-end">

                </div>
            </div>
        </div>
    )
}
);

export default Nav;