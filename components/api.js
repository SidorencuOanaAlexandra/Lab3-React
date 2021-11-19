import axions from "axios";

export const getAll = async () =>{
    return await axions.get(`${process.env.REACT_APP_API}`);
}