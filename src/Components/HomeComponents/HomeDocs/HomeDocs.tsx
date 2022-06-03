import React from 'react'
import { Button, Container } from '../../../uikit/uikit'
import { OurTeamTitle } from '../OurTeam/OurTeamSC'
import PdfToImage from '../PdfToImage/PdfToImage'
import { HomeDocsLink, HomeDocsLinkTile, HomeDocsNav, HomeDocsSC } from './HomeDocsSC'

const HomeDocs:React.FC = () => {
    const doc = require('../../../Assets/Docs/Кодекс корпоративного управления.pdf')
  return (
    <HomeDocsSC>
        <Container>
            <OurTeamTitle>
                Документы
            </OurTeamTitle>

            <HomeDocsNav>
                <HomeDocsLink target='_blank' href={doc}>
                    <PdfToImage file={doc}/>

                    <HomeDocsLinkTile>
                        Methodology of Securities 
                    </HomeDocsLinkTile>

                    <a href='#' download>
                        <Button>Скаачать</Button>
                    </a>
                </HomeDocsLink>

                <HomeDocsLink target='_blank' href={doc}>
                    <PdfToImage file={doc}/>

                    <HomeDocsLinkTile>
                        Methodology of Securities 
                    </HomeDocsLinkTile>

                    <a href='#' download>
                        <Button>Скаачать</Button>
                    </a>
                </HomeDocsLink>

                <HomeDocsLink target='_blank' href={doc}>
                    <PdfToImage file={doc}/>

                    <HomeDocsLinkTile>
                        Methodology of Securities 
                    </HomeDocsLinkTile>

                    <a href='#' download>
                        <Button>Скаачать</Button>
                    </a>
                </HomeDocsLink>

                <HomeDocsLink target='_blank' href={doc}>
                    <PdfToImage file={doc}/>

                    <HomeDocsLinkTile>
                        Methodology of Securities 
                    </HomeDocsLinkTile>

                    <a href='#' download>
                        <Button>Скаачать</Button>
                    </a>
                </HomeDocsLink>



            </HomeDocsNav>
            
        </Container>
    </HomeDocsSC>
  )
}

export default HomeDocs