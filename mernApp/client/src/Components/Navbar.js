import React from 'react'
import {AppBar, Tab, Tabs} from "@material-ui/core"

const Navbar = () => {
    const [value, setValue] = React.useState(0)
    const handleChange = (e,val) => {
        console.warn(val)
        setValue(val)
    }
    return (
        <div>
            <AppBar position="static" color="default">
  <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" >
    <Tab label="Home" />
  </Tabs>
</AppBar>
<TabPanel value={value} index={0}>
</TabPanel>

        </div>
    )
}
// TabPanel 
function TabPanel(props)
{
const {children, value, index} = props;
return(
    <div>
        { value === index &&
         (<h2>{children}</h2>)  
         }
   
    </div>
)
}
export default Navbar
