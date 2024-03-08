import { Menu } from '@mui/material'
import React from 'react'

const FileMenu = ({anchorE1}) => {
  return (
     <Menu anchorEl={anchorE1} open={false}>
      <div
       style={{
         width:"10rem"
       }}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Voluptate quo optio beatae quibusdam reiciendis non magni at sed voluptatum. 
        At quaerat placeat, repellendus in assumenda omnis qui ab deserunt fugiat?
      </div>

     </Menu>
  )
}

export default FileMenu