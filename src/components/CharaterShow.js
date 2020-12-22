import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
const CharaterShow = ({ match, location }) => {
    const [res, setRes] = useState([])
    const [isloading, setIsloading] = useState(true)
    useEffect(() => {
       const path = location.pathname.slice(5)
        const fetchData = async () => {
            const val = await axios(
                `https://www.breakingbadapi.com/api/characters${path}`
            )
            await setRes(val.data)
            await setIsloading(false)
        }
        fetchData()

    }, [])
    if(isloading){
        return(
        <div className="mt-5"><h1 className="text-center"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-arrow-repeat text-center mt-3" viewBox="0 0 16 16">
            <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/>
            <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/>
          </svg> Loading</h1>
        </div>
        )
    }
    else
    return (
            <div className="container-fluid ">
                <div className="row p-5">
                    <div className="col-5">
                       <div className="card m-auto" style={{ width: "18rem" }}>
                            <img src={res[0].img} className="card-img-top" alt="..." />
                        </div>
                    </div>
                    <div className="col-5">
                        <div className="card-body">
                            <h3 className="card-title text-danger font-weight-bold">{res[0].name}</h3>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li className="list-group-item text-success">Date of Birth: <span className="text-primary">{res[0].birthday}</span></li>
                            <li className="list-group-item text-success">Occupation: <span className="text-primary">{res[0].occupation}</span></li>
                            <li className="list-group-item text-success">Status: <span className="text-primary">{res[0].status}</span></li>
                            <li className="list-group-item text-success">Nickname: <span className="text-primary">{res[0].nickname}</span></li>
                            <li className="list-group-item text-success">Seasons: <span className="text-primary">{res[0].appearance.map((season) => (
                                season + ', '
                            ))}</span></li>
                            <li className="list-group-item text-success">Actor/Actress name: <span className="text-primary">{res[0].portrayed}</span></li>
                        </ul>
                    </div>
                </div>
            </div>

        )
}

export default CharaterShow
