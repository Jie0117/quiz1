function change() { 
            var header=$("hid123")[0];     
            header.innerHTML = "CSIE@CGU";
            var para=$("pid123")[0];
                
            para.innerHTML = "怎麼那麼棒！！.";   
        }   
            function myFunction() 
            {   
                 var btn = document.createElement("BUTTON");   
                 btn.innerHTML = "Change this document."; 
                 document.body.appendChild(btn).addEventListener("click", change); 
                 
            }
