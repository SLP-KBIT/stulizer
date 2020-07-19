import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import axios from 'axios';
import slpLogo from '../img/SLP.png'

const FETCH_ENDPOINT = 'http://localhost:4000'

const useBackendAPI = () => {
    const [data, setData] = useState({
        id: '-',
        name: '-',
        balance: 0,
    })
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [time, setTime] = useState(Date.now())

    useEffect(() => {
        const fetchCardData = async () => {
            setError(false)
            setLoading(true)

            try {
                const result = await axios(FETCH_ENDPOINT)
                console.log(result)
                setData(result.data)
            } catch(error) {
                setData({
                    id: '-',
                    name: '-',
                    balance: 0,
                })
                setError(true)
            }
            setLoading(false)
        }

        fetchCardData()
    }, [time])

    return [{data, loading, error}, setTime]
}

const StudentIDCard = () => {
    const [{ data, loading, error}, getData] = useBackendAPI()
    const intervalID = useRef(null)
    const [request, onRequest] = useState(false)
    
    const handleOnClick = () => {
        clearInterval(intervalID.current)
        onRequest(true)
        getData(Date.now())
        handleOnInterval()
    }
    
    const handleOnInterval = () => {
        intervalID.current = setInterval(() => {
            onRequest(false)
            getData(Date.now())
        }, 5000)
    }

    useEffect(() => {
        handleOnInterval()
        
        return () => {
            clearInterval(intervalID.current)
        }
    }, [])
    
    return (
        <>
            {
                error
                ? (
                    <div className="notification is-danger">
                        <button className="delete"></button>
                        サーバからデータが取得できませんでした😇
                    </div>
                ) : <></>

            }
            <IDCardContaier>
                <div className="box">
                    {
                        loading && request
                        ? <progress className="progress is-small is-primary" max="100">15%</progress>
                        : <></>
                    }
                    <article className="media">
                        <div className="media-left">
                            <figure className="image is-64x64">
                                <img src={slpLogo} alt="logo" />
                            </figure>
                        </div>
                        <div className="media-content">
                            <table className="table">
                                <tbody>
                                    <tr><td>学籍番号</td><td>{data.id}</td></tr>
                                    <tr><td>名前</td><td>{data.name}</td></tr>
                                    <tr><td>IC残高</td><td>{data.balance}</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </article>
                </div>
                <UpdateButton className="button is-primary is-fullwidth" onClick={handleOnClick}>
                    更新
                </UpdateButton>
            </IDCardContaier>
        </>
    )
}

const IDCardContaier = styled.div`
    height: 200px;
    width: 320px;
    margin-top: 10px;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 10px
`

const UpdateButton = styled.a``

export default StudentIDCard
