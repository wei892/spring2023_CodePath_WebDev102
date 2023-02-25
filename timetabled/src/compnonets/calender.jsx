import React from "react";
import Event from "./Event";

const Calendar =() => {
return(
    <div className="Calendar">
        <table>
            <thead>
                <tr>
                    <th></th>
                    <th> Sunday </th>
                    <th> Monday </th>
                    <th> Tuesday </th>
                    <th> Wednesday </th>
                    <th> Thursday </th>
                    <th> Friday </th>
                    <th> Saturday </th>
                </tr>
            </thead>
            <tbody>
                <td className="time"> 8 am </td>
                <Event event='Fancy Dinner' color='green'/>
                <Event event='Class' color='pink' /> 
                <Event event='Class' color='pink' />               
                <Event event='Class' color='pink' /> 
                <Event event='Class' color='pink' /> 
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tbody>
            <tbody>
                <td className="time"> 9 am </td>
                <td></td>
                <Event event='Class' color='pink' />
                <Event event='Class' color='pink' /> 
                <Event event='Class' color='pink' /> 
                <Event event='Class' color='pink' /> 
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tbody>
            <tbody>
                <td className="time"> 10 am </td>
                <td></td>
                <td></td>
                <td></td>                
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tbody>
            <tbody>
                <td className="time"> 11 am </td>
                <td></td>
                <td></td>
                <td></td>                
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tbody>
            <tbody>
                <td className="time"> 12 pm </td>
                <td></td>
                <Event event='Study' color='blue' location ='library' /> 
                <Event event='Study' color='blue'location='Blue Cafe'/>                 
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tbody>
            <tbody>
                <td className="time"> 1 pm </td>
                <td></td>
                <td></td>
                <td></td>                
                <Event event='Study' color='blue'/> 
                <Event event='Study' color='blue'/> 
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tbody>
            <tbody>
                <td className="time"> 2 pm </td>
                <td></td>
                <td></td>
                <td></td>                
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tbody>
            <tbody>
                <td className="time"> 3 pm </td>
                <td></td>
                <td></td>
                <td></td>                
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tbody>
            <tbody>
                <td className="time"> 4 pm </td>
                <td></td>
                <td></td>
                <td></td>                
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tbody>
            <tbody>
                <td className="time"> 5 pm </td>
                <td></td>
                <td></td>
                <td></td>                
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tbody>
        </table>
    </div>

)
}

export default Calendar;