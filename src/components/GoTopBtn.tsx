import { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

const StyledBtn = styled(Button)`
  position: fixed;
  bottom: 20px;
  right: 20px;
`
export default function GoTopBtn() {
  const [float, setFloat] = useState<boolean>(false)
  useEffect(() => {
    document.addEventListener('scroll', scrollFunction)
    return () => document.removeEventListener('scroll', scrollFunction)
  })

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      setFloat(true)
    } else {
      setFloat(false)
    }
  }

  function backToTop() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }

  return (
    <StyledBtn
      type="button"
      className={`btn-danger btn-floating btn-lg ${float ? 'visible' : 'invisible'}`}
      onClick={backToTop}
    >
      <FontAwesomeIcon icon={faArrowUp} />
    </StyledBtn>
  )
}
