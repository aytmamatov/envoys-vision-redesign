import React from 'react'
import { useSearchParams } from 'react-router-dom'
import DRCBargaining from '../DisclosureRoolsComponents/DRCBargaining/DRCBargaining'
import DRCClearing from '../DisclosureRoolsComponents/DRCClearing/DRCClearing'
import DRCDoc from '../DisclosureRoolsComponents/DRCDoc/DRCDoc'
import DRCListing from '../DisclosureRoolsComponents/DRCListing/DRCListing'

interface DRCProps {
    path: string
}

const DisclosureRoolsContent:React.FC<DRCProps> = ({path}) => {
    const [activeHeader, setActiveHeader] = React.useState('all')

    const [searchParams] = useSearchParams()

    React.useEffect(() => {
        let path = searchParams.get('header')
        if(path) setActiveHeader(path)


    }, [searchParams])

    if(activeHeader === 'listing') return <DRCListing/>
    if(activeHeader === 'doc') return <DRCDoc/>
    if(activeHeader === 'clearing') return <DRCClearing/>
    return <DRCBargaining/>
}

export default DisclosureRoolsContent