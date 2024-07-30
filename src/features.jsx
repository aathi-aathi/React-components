import './App.css'

function Features({model,imgstyle,style,des_content}){
    return(
        <div className={style}>
            <img src={model.img} style={imgstyle}/>
            <div className={des_content}>
                <h2>{model.name}</h2>
                <p>{model.description}</p>
            </div>
        </div>
    )
}
export default Features; 