"use client"
import React, { useState } from 'react'
import ProjectHeader from '../ProjectHeader'
import Board from '../BoardView'

type Props = {
  params:{
    id:string
  }
}

const Projects = ({params}: Props) => {
  const {id} = params;
  const [activeTab,setActiveTab]=useState("Board")
  const [isModalNewTaskOpen,setIsModalNewTaskOpen]=useState(false)
  return (
    <div>
      {/* {modal new tasks} */}
      <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab}/>
      {activeTab ==="Board" && (
        <Board id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
      )}

    </div>
  )
}

export default Projects