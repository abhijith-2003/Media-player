import React from 'react';
import { Card, Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function Landingpage() {
  const navigateByUrl = useNavigate()
  return (
    <>
      <Row className='mt-5 align-items-center justify-content-between w-100'>
        <Col></Col>
        <Col lg={5}>
          <h1 style={{ fontSize: '40px' }}>Welcome to <span className='text-warning'>Media-Player</span></h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia doloremque eum rerum aut, nisi incidunt minus fugit, vel voluptas illum deleniti ullam dicta, repellat error officiis aliquam laudantium minima deserunt!
            Voluptatem et dolorem aut fuga sunt facere, doloremque minus, libero rem dolorum cupiditate quo itaque est excepturi voluptates tempore voluptatum! Voluptate perferendis eos doloribus vel nobis quidem eaque praesentium animi.
            Commodi unde qui architecto voluptatibus tempora aliquid, sit iste, enim, eaque nihil reprehenderit. Fugit, molestias esse veritatis et necessitatibus deleniti perferendis ratione nesciunt aperiam cupiditate amet, nulla, earum culpa ducimus.</p>
          <button onClick={() => navigateByUrl('/home')} className='btn btn-info mt-4'>Get Started</button>
        </Col>
        <Col lg={5}>
          <img src="https://backiee.com/static/wallpapers/560x315/169552.jpg" alt="" />
        </Col>
        <Col></Col>
      </Row>

      <div className='container mb-5 mt-5 d-flex align-item-center justify-content-center flex-column'>
        <h3>Features</h3>
        <div className='cards mb-5 mt-5 d-flex align-item-center justify-content-between w-100'>
          <Card style={{ width: '22rem' }} className='p-4 bg-info'>

            <Card.Img variant='top' height={"300px"} width={'300px'} src='https://i.pinimg.com/originals/75/c9/fa/75c9fadc0994d63049a0982026f2b2b6.gif' />
            <Card.Body>
              <Card.Title className='text-primary fw-bolder'>Play Everything</Card.Title>
              <Card.Text>
                some quick example text to build on the card title and  make up the bulk of the card
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: '22rem' }} className='p-4 bg-info'>

            <Card.Img variant='top' height={"300px"} width={'300px'} src='https://i.pinimg.com/originals/e6/58/e8/e658e8998f13909eae69aa262214f667.gif' />
            <Card.Body>
              <Card.Title className='text-primary fw-bolder'>Categorize Videos</Card.Title>
              <Card.Text>
                some quick example text to build on the card title and  make up the bulk of the card
              </Card.Text>
            </Card.Body>
          </Card>


          <Card style={{ width: '22rem' }} className='p-4 bg-info'>

            <Card.Img variant='top' height={"300px"} width={'300px'} src='https://i.gifer.com/embedded/download/Eypk.gif' />
            <Card.Body>
              <Card.Title className='text-primary fw-bolder'>Managing Video</Card.Title>
              <Card.Text>
                some quick example text to build on the card title and  make up the bulk of the card
              </Card.Text>
            </Card.Body>
          </Card>

        </div>
      </div>

      <div className='container border rounded p-5 border-light mb-5 d-flex align-items-center justify-content-between w-100'>
        <div className='col-lg-5'>
          <h4 className='text-warning'>Simple,Powerful & Fest</h4>

          <h6 className='mb-5 mt-5'><span className='text-warning fw-bolder'>Play Everything</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, maiores nam! Minus tenetur quod temporibus in nesciunt, sunt laborum delectus iusto et error ipsam recusandae, sequi hic ea ut. Cum.
            Facilis amet omnis eius iusto necessitatibus officia perspiciatis consequuntur esse facere, alias eaque quod iste corporis earum maiores inventore tempora molestiae fuga enim voluptas exercitationem ipsum. Obcaecati ipsam eius illo?
            Iusto nobis facere cum sunt a veniam officia pariatur eaque soluta dolorum harum saepe obcaecati consectetur, necessitatibus deserunt corrupti, ex ratione doloremque tempora molestiae veritatis ipsam ea! Voluptates, suscipit sit.</h6>

          <h6 className='mb-5 mt-5'><span className='text-warning fw-bolder'>Categorize Videos</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, maiores nam! Minus tenetur quod temporibus in nesciunt, sunt laborum delectus iusto et error ipsam recusandae, sequi hic ea ut. Cum.
            Facilis amet omnis eius iusto necessitatibus officia perspiciatis consequuntur esse facere, alias eaque quod iste corporis earum maiores inventore tempora molestiae fuga enim voluptas exercitationem ipsum. Obcaecati ipsam eius illo?
            Iusto nobis facere cum sunt a veniam officia pariatur eaque soluta dolorum harum saepe obcaecati consectetur, necessitatibus deserunt corrupti, ex ratione doloremque tempora molestiae veritatis ipsam ea! Voluptates, suscipit sit.</h6>

          <h6 className='mb-5 mt-5'><span className='text-warning fw-bolder'>Managing videos</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, maiores nam! Minus tenetur quod temporibus in nesciunt, sunt laborum delectus iusto et error ipsam recusandae, sequi hic ea ut. Cum.
            Facilis amet omnis eius iusto necessitatibus officia perspiciatis consequuntur esse facere, alias eaque quod iste corporis earum maiores inventore tempora molestiae fuga enim voluptas exercitationem ipsum. Obcaecati ipsam eius illo?
            Iusto nobis facere cum sunt a veniam officia pariatur eaque soluta dolorum harum saepe obcaecati consectetur, necessitatibus deserunt corrupti, ex ratione doloremque tempora molestiae veritatis ipsam ea! Voluptates, suscipit sit.</h6>
        </div>
        <div className='Video col-lg-5'>
          <iframe width="500" height="315" src="https://www.youtube.com/embed/S2kymv60ndQ?si=TE_co7m1xvm1qxkV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>

      </div>

    </>
  )
}
export default Landingpage