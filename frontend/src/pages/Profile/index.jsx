import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import api from '../../services/api'


import { FiPower,  FiTrash2 } from "react-icons/fi"

import './styles.css'

import logoImg from "../../assets/logo.svg"


export default function Profile() {
  const [incidents, setIncidents] = useState([])

  const history = useHistory()

  const incidentId = localStorage.getItem('incidentID')
  const ong_id = localStorage.getItem('ongId')
  const ongName = localStorage.getItem('ongName')

  useEffect(() => {
    api.get('profile',  {
      headers: {
        Authorization: ong_id
      }
    }).then(response => {
      setIncidents(response.data)
    })
  }, [ong_id])

  async function handleDeleteIncident(id) {
    try {
      await api.delete(`incidents/${id}`, {
        headers: {
          Authorization: incidents[0].ong_id
        }
      })
      setIncidents(incidents.filter(incident => incident.id !== id))
    } catch (e) {
      alert('Erro ao deletar caso, tente novamente.')
    }
  }

  function handleLogout() {
    localStorage.clear()
    history.push('/')
  }

  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be The Hero" />
        <span>Bem vinda, {ongName}</span>

        <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
        <button type="button" onClick={handleLogout}>
          <FiPower  size="18" color="e01041" />
        </button>
      </header>

      <h1>Casos cadastrados</h1>

      <ul>
        {incidents.map(incident => (
          <li key={incident.id}>
            <strong>CASO:</strong>
            <p>{incident.title}</p>

            <strong>DESCRIÇÕES:</strong>
            <p>{incident.description}</p>

            <strong>VALOR:</strong>
            <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}</p>

            <button type="button" onClick={() => handleDeleteIncident(incident.id)}>
              <FiTrash2 size="20" color="a8a8b3" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
