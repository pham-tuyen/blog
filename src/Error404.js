import { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import PageTitle from "./components/PageTitle"

export default function Error404() {
  const navigate = useNavigate()
  var [time, setTime] = useState(5)
  useEffect(() => {
    if(time === 0) navigate("/")
    setTimeout(() => {setTime(time - 1)}, 1000)
  }, [time, navigate])
  return (
    <>
      <PageTitle name="404"/>
      <h1 className="d-flex justify-content-center my-5">Oops, bạn vào nhầm trang rồi.</h1>
      <h2 className="d-flex justify-content-center my-5">Bạn sẽ được chuyển hướng đến<Link to="/">&nbsp;trang chủ&nbsp;</Link>sau {time} giây nữa.</h2>
    </>
  )
}