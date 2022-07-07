import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data.js"

export default function App() {
  const adData = data.map(item =>
    <div key={item.id}>
      <Card
        {...item}

      />
    </div>
  )
  return (

    <div className="full--card">
      <Navbar />
      <Hero />
      <section className="card-list">
        {adData}
      </section>
    </div >
  )
}