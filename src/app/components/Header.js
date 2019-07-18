import React from "react";


// stateless component - becasue i dont need state
export const Header = (props) => { 
        return(
            <div>
              <p>{props.homeLink}</p>
            </div>
        );
};
