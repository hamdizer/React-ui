import "./Menu.css"
import {useState} from "react";
 const Menu=(props)=>{
     const [clickedElementId, setClickedElementId] = useState(null);
     const [clickedElementStyle, setClickedElementStyle] = useState({});
     const handleClick = (event) => {
         const elementsWithSpecificTag = document.getElementsByTagName('svg');
           for(let i=0;i<elementsWithSpecificTag.length;i++) {
               elementsWithSpecificTag[i].style.backgroundColor = "transparent";
           }
           const id = event.target.id;
         const selectedElement=document?.getElementById(id)
         if(selectedElement) {
             selectedElement.style.backgroundColor = "#6950f3";
             selectedElement.style.borderRadius = "20px";
         }




     };

    return <div className="content">
     <div onClick={handleClick} className="link">
        <svg id="element1"   className="icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M10.989 2.905a1.5 1.5 0 0 1 2.022 0l7.51 6.825A1.528 1.528 0 0 1 21 10.816V19.5a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 19.5v-8.684A1.528 1.528 0 0 1 3.48 9.73l7.51-6.825Zm-6.487 7.924L12 4l7.498 6.83.002 8.67h-15l.002-8.67Z" clip-rule="evenodd"></path></svg>
     </div>
        <div onClick={handleClick} className="link">
        <svg id="element2"  className="icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M7.5 1.5a.75.75 0 0 1 .75.75V3h7.5v-.75a.75.75 0 0 1 1.5 0V3h2.25A1.5 1.5 0 0 1 21 4.5v15a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 19.5v-15A1.5 1.5 0 0 1 4.5 3h2.25v-.75a.75.75 0 0 1 .75-.75Zm-.75 3H4.5v3h15v-3h-2.25v.75a.75.75 0 0 1-1.5 0V4.5h-7.5v.75a.75.75 0 0 1-1.5 0V4.5ZM19.5 9h-15v10.5h15V9Z" clip-rule="evenodd"></path></svg>
        </div>
        <div onClick={handleClick}  className="link">
            <svg id="element3"  className="icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M11.359 1.692a1.5 1.5 0 0 1 1.35.412l9.784 9.785a1.49 1.49 0 0 1 0 2.125l-8.479 8.48a1.49 1.49 0 0 1-2.125 0l-9.784-9.785a1.5 1.5 0 0 1-.413-1.35v-.003l1.51-7.565a.75.75 0 0 1 .589-.589l7.565-1.51h.003Zm.288 1.472L4.575 4.575l-1.41 7.072 9.787 9.788 8.483-8.483-9.787-9.787Z" clip-rule="evenodd"></path><path d="M7.875 9a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z"></path></svg>
        </div>
        <div onClick={handleClick}    className="link">
        <svg id="element4"  className="icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.625 11.25a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25ZM15.375 11.25a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z"></path><path fill-rule="evenodd" d="M12 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5ZM2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm5.473 1.601a.75.75 0 0 1 1.026.272 3.76 3.76 0 0 0 6.502 0 .75.75 0 1 1 1.298.754 5.26 5.26 0 0 1-9.098 0 .75.75 0 0 1 .272-1.026Z" clip-rule="evenodd"></path></svg>
        </div>
        <div  onClick={handleClick} className="link">
            <svg id="element5"   className="icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.625 11.25a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25ZM15.375 11.25a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z"></path><path fill-rule="evenodd" d="M12 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5ZM2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm5.473 1.601a.75.75 0 0 1 1.026.272 3.76 3.76 0 0 0 6.502 0 .75.75 0 1 1 1.298.754 5.26 5.26 0 0 1-9.098 0 .75.75 0 0 1 .272-1.026Z" clip-rule="evenodd"></path></svg>
        </div>
        <div onClick={handleClick}  className="link">
            <svg id="element6"  className="icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.625 11.25a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25ZM15.375 11.25a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z"></path><path fill-rule="evenodd" d="M12 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5ZM2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm5.473 1.601a.75.75 0 0 1 1.026.272 3.76 3.76 0 0 0 6.502 0 .75.75 0 1 1 1.298.754 5.26 5.26 0 0 1-9.098 0 .75.75 0 0 1 .272-1.026Z" clip-rule="evenodd"></path></svg>
        </div>
        <div  onClick={handleClick}  className="link">
            <svg id="element7"  className="icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.625 11.25a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25ZM15.375 11.25a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z"></path><path fill-rule="evenodd" d="M12 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5ZM2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm5.473 1.601a.75.75 0 0 1 1.026.272 3.76 3.76 0 0 0 6.502 0 .75.75 0 1 1 1.298.754 5.26 5.26 0 0 1-9.098 0 .75.75 0 0 1 .272-1.026Z" clip-rule="evenodd"></path></svg>
        </div>
        <div onClick={handleClick}   className="link">

        <svg id="element8"   className="icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.625 11.25a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25ZM15.375 11.25a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z"></path><path fill-rule="evenodd" d="M12 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5ZM2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm5.473 1.601a.75.75 0 0 1 1.026.272 3.76 3.76 0 0 0 6.502 0 .75.75 0 1 1 1.298.754 5.26 5.26 0 0 1-9.098 0 .75.75 0 0 1 .272-1.026Z" clip-rule="evenodd"></path></svg>
        </div>
        <div  onClick={handleClick} className="link">

            <svg id="element9"  className="icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.625 11.25a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25ZM15.375 11.25a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z"></path><path fill-rule="evenodd" d="M12 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5ZM2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm5.473 1.601a.75.75 0 0 1 1.026.272 3.76 3.76 0 0 0 6.502 0 .75.75 0 1 1 1.298.754 5.26 5.26 0 0 1-9.098 0 .75.75 0 0 1 .272-1.026Z" clip-rule="evenodd"></path></svg>
        </div>
        <div  onClick={handleClick} className="link">

        <svg  id="element10"  className="icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.625 11.25a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25ZM15.375 11.25a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z"></path><path fill-rule="evenodd" d="M12 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5ZM2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm5.473 1.601a.75.75 0 0 1 1.026.272 3.76 3.76 0 0 0 6.502 0 .75.75 0 1 1 1.298.754 5.26 5.26 0 0 1-9.098 0 .75.75 0 0 1 .272-1.026Z" clip-rule="evenodd"></path></svg>
        </div>
        <div onClick={handleClick}  className="link">

        <svg id="element11"  className="icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.625 11.25a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25ZM15.375 11.25a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z"></path><path fill-rule="evenodd" d="M12 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5ZM2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm5.473 1.601a.75.75 0 0 1 1.026.272 3.76 3.76 0 0 0 6.502 0 .75.75 0 1 1 1.298.754 5.26 5.26 0 0 1-9.098 0 .75.75 0 0 1 .272-1.026Z" clip-rule="evenodd"></path></svg>
        </div>
        <div onClick={handleClick}    className="link">
        <svg id="element12"  className="icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.625 11.25a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25ZM15.375 11.25a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z"></path><path fill-rule="evenodd" d="M12 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5ZM2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm5.473 1.601a.75.75 0 0 1 1.026.272 3.76 3.76 0 0 0 6.502 0 .75.75 0 1 1 1.298.754 5.26 5.26 0 0 1-9.098 0 .75.75 0 0 1 .272-1.026Z" clip-rule="evenodd"></path></svg>
        </div>
    </div>
}
export default Menu