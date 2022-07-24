import {render, screen} from "@testing-library/react"
import "@testing-library/jest-dom"
import Loading from "./Components/Loading/Loading"

test("render loading component", ()=>{
   render(<Loading/>)
   const linkElement = screen.getByText(
      /Tunggu Sebentar/i
   ) 
   expect(linkElement).toBeInTheDocument()
})
