import '../css/BoxListBackGround.css'
import NoteBox from './NoteBox'
import AddBox from './AddBox'

export default function BoxListBackGround(){
    return(
        <div className="boxList_backGround">   
            <h1 className="titulo">Lista de Atividade</h1> 
            <NoteBox/>
            <AddBox/>
        </div>
    )
}