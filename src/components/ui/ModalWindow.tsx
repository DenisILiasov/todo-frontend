import { FC } from 'react'
import './modal.css'

interface IModal{
    children: React.ReactNode
    openModal: boolean
    clouse: () => void
}

const ModalWindow: FC<IModal> = ({children, openModal, clouse}) => {
    const clases = ['modaleWrapp']

    if(openModal){
        clases.push('active')
    }
    return(
        <div onClick={clouse} className={clases.join(' ')}>
            <div onClick={e => e.stopPropagation()} className='modaleContent'>
                {children}
                <div onClick={clouse} className= 'modaleClouse'>X</div>
            </div>
        </div>
    )
}

export default ModalWindow;