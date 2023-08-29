import { Header } from "./components/Header"
import { Main } from "./components/Main"
import { Sidebar } from "./components/Sidebar"
import { useHeader } from "./hook/useHeader"

//import Image from 'next/image'


//TfiMenu


export default function Home() {
  
  return (
    <main>

      <Header/>
      
        <Sidebar></Sidebar>
             
      <Main></Main>

    </main>
  )
}