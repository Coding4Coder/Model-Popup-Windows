

import React, {useState} from 'react';
import "../../style/global.css";
import Model from "./Model";

const App = () => {

    const[isOpen, setIsOpen] = useState(false);

        const btnModel = {
            width: 200,
        }

        const btnOpenModel = () => {
            setIsOpen(true);
        }
        const closeModel = () =>{
            setIsOpen(false);
        }
    return (
        <div className="row txt-sm bdr-btm g-0">
        
            <div className="col-sm-12 model-wrap">
                  <button onClick={btnOpenModel} className="btn btn-primary" style={btnModel}>Open Model</button>
                  <Model open={isOpen} onClose={closeModel}>
                      <p className="model-text">Sandals South Coast, set within a 500-acre nature preserve, is perfectly positioned along a two-mile stretch of unspoiled beach where you can view both the sunrise and the sunset each day. The serenity along this stretch of natural coastline is ideally suited both to relaxation and romance savored beneath the shade of an almond tree.</p>
                  </Model>
            </div>
           
    </div>
    );
}
export default App;
