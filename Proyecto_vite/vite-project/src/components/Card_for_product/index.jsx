import React from "react";
import '.styels.css'

const Card_for_product = () =>{
    return(
        <>
            <div>
                <div>
                    <img src="" alt="" />
                </div>
                <div>
                    <div>
                        <p>Tenis x</p>
                        <p>Precio</p>
                        <p>Color</p>
                    </div>
                    <div>
                        <div> 
                            <div>
                                <button>map de tallas</button>
                            </div>
                            <div>
                                <select multiple name="drawfs" id="drawfs">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            </select>
                            </div> 
                        </div>
                    </div>
                    <div>
                        <button type="Text"></button>
                        <i></i>
                    </div>
                </div>
            </div>
        </>
    )
}
export{Card_for_product}