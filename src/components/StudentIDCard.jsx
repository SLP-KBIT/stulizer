import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios';
import slpLogo from '../img/SLP.png'

const FETCH_ENDPOINT = 'http://localhost:4000'

const StudentIDCard = () => {
    const [data, setData] = useState({
        id: '-',
        name: '-',
        balance: 0,
    })

    useEffect(() => {
        const fetchCardData = async () => {
            const result = await axios(FETCH_ENDPOINT)
            console.log(result)
            setData(result.data)
        }
        fetchCardData()
    }, [])

    return (
        <IDCardContaier>
            <div className="box">
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
        </IDCardContaier>
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

export default StudentIDCard
