import logo from './logo.svg';
import './App.css';
import { IoSearchOutline } from "react-icons/io5";
import { FaCalendarAlt } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";

function App() {
  return (
    <div className="App">
     <nav id="nav">
<div id='nav1'>
<span id='search'>
     <IoSearchOutline />
     </span>
<div  id='main-head'>
Money Tracker
</div>
<span id='cal'>
<FaCalendarAlt />
</span>
</div>
<div id='nav2'>
<div id='date'>
<span id='head'>
  2024
</span><br/>
<span id='day'>
Jul <span id='day1'><IoMdArrowDropdown /></span><span id="day2">|</span>
</span>
</div>
<div id='exx' >
<span id='ex'>
Expenses  
</span><br/>
<span id='ex1'>
  0
</span>

</div>


<div id='inn' >
<span id='in'>
Income  
</span><br/>
<span id='in1'>
  0
</span>

</div>


<div id='ball' >
<span id='bal'>
Balance  
</span><br/>
<span id='bal1'>
  0
</span>

</div>
</div>
     </nav>
     <div id="navv">
ddnsv
</div>
    </div>
  );
}

export default App;
