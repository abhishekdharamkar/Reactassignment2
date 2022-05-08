import {useState, useEffect} from 'react';
import DetailCard from '../detailCard';
import {Grid, Button} from '@material-ui/core';
import { useNavigate } from "react-router-dom";
import ToggleSwitch from '../ToggleSwitch/ToggleSWitch';

function Display(props) {
    const navigate = useNavigate();
    const [userList, setUserList] = useState([])

    useEffect(()=>{
        let userArr = JSON.parse(localStorage.getItem("userList"))

        if(userArr){
            setUserList(userArr)  
        }
    }, [])
    const clearList = () => {
        setUserList([])
        localStorage.setItem("userList", JSON.stringify([]))
    }
    return (
        <div style={{padding: "0 50px"}}>
            <Button variant="contained" color="secondary"
                style={{width: "200px", marginTop: "20px", marginBottom: "50px"}}
                onClick={()=>{clearList()}}
            >
                CLEAR USER LIST
            </Button>
            <br/>
            {userList.length ? 
                <Grid container spacing={2}>
                <ToggleSwitch />
                    {userList.map(user=>{
                        return ( 
                            
                            <Grid item key={user.email} xl={3} lg={3} md={4} sm={6} xs={12}>
                                <DetailCard user={user} />
                            </Grid>
                        )
                    })}
                </Grid> : 
            <h1>There i no data</h1>}
        </div>
    )
}

export default Display;