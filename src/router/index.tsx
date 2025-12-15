import { Routes, Route } from 'react-router-dom'

import { About, ContactUs, Home ,Projects,ProjectDetails} from '../pages'

import Error from '../components/Error'

export const Router = () => {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/projects/:slug' element={<ProjectDetails/>}/>
      <Route path="*" element={<Error statusCode={404} />} />
    </Routes>
  )
}
