import React, { useState, useEffect } from "react";
import axios from "axios";
import SingleHoliday from "./SingleHoliday";
const url = "https://react--course-api.herokuapp.com/api/v1/data/vacanze";

const Holiday = () => {

    const [data, setData] = useState([])
    const [selected, setSelected] = useState(1)

    const getData = async () => {
        try {
            const response = await axios.get(url)
            setData(response.data)
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
      getData()
    }, [])
    
    if(data.success) {
        return(
            <>
                {
                    data.data.length > 0 ? <SingleHoliday {...data.data[selected]}/> : <h4>No Vacanze</h4>
                }
            </>
        );
    } else {
        return (
            <h2>Loading...</h2>
        );
    }
};

export default Holiday;