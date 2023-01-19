import React from 'react'
function FoodItem(props) {
    // {console.log(props)}
    return (
        <>
        <div className='row d-flex'>
        {props.sample.map((element)=>{
            return (
            
            
            <div className="card-container my-3 " style={{ width: "18rem" }}  key={element.id} spellCheck={props.category===element.category}>
                <img src={element.img} className="card-img-top" alt="image of a food" />
                <span className="card-body">
                    <h5 className="card-title">{element.id}</h5>
                    <h5 className="card-title">{element.name}</h5>
                    <h5 className="card-title">{element.category}</h5>
                    <p className="card-text">{element.desc}</p>
                    <p>Rs {element.price}/-</p>
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </span>
            </div>
                
        
            )
        })}
            </div>
        </>
    )
}

export default FoodItem

