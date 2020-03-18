import React, { Component } from 'react'
import Card from './Card'
import baracktocat from '../images/baracktocat.jpg'
import carlostocat from '../images/carlostocat.gif'
import daftpunktocat from '../images/daftpunktocat-thomas.gif'
import fintechtocat from '../images/Fintechtocat.png'
import justicetocat from '../images/justicetocat.jpg'
import labtocat from '../images/labtocat.png'
import nyantocat from '../images/nyantocat.gif'
import privateinvestocat from '../images/privateinvestocat.jpg'
import scubatocat from '../images/scubatocat.png'
import sentrytocat from '../images/Sentrytocat_octodex.jpg'
import vinyltocat from '../images/vinyltocat.png'
import surftocat from '../images/surftocat.png'

export class Octocats extends Component {
  render() {
    const octocats = [
      { name: 'Baracktocat', url: baracktocat, number: '#56' },
      { name: 'Carlostocat', url: carlostocat, number: '#111' },
      { name: 'Daftpunktocat-Thomas', url: daftpunktocat, number: '#101' },
      { name: 'Fintechtocat', url: fintechtocat, number: '#146' },
      { name: 'Justicetocat', url: justicetocat, number: '#134' },
      { name: 'Labtocat', url: labtocat, number: '#105' },
      { name: 'Nyantocat', url: nyantocat, number: '#46' },
      { name: 'Privateinvestocat', url: privateinvestocat, number: '#121' },
      { name: 'Scubatocat', url: scubatocat, number: '#138' },
      { name: 'Sentrytocat', url: sentrytocat, number: '#143' },
      { name: 'Vinyltocat', url: vinyltocat, number: '#137' },
      { name: 'Surftocat', url: surftocat, number: '#140' },
    ]
    return (
      <main>
        {octocats.map(cat => {
          return <Card name={cat.name} imgUrl={cat.url} number={cat.number} />
        })}
      </main>
    )
  }
}

export default Octocats
