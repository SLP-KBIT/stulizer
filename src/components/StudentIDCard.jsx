import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios';
import slpLogo from '../img/SLP.png'

const StudentIDCard = () => {
    const [id, setId] = useState('-')
    const [name, setName] = useState('-')
    const [balance, setBalance] = useState('0')

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
                                <tr><td>学籍番号</td><td>{id}</td></tr>
                                <tr><td>名前</td><td>{name}</td></tr>
                                <tr><td>IC残高</td><td>{balance}</td></tr>
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
