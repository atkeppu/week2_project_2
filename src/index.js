import "./styles.css";

document.getElementById("add-comment").addEventListener('click', AddUnsortList)
document.getElementById("remove-comments").addEventListener('click', RemoveAllComments)

function AddUnsortList() {
        var ul = document.getElementById("UnsortList");
        var textare = document.getElementById("textare");                    
        ul.innerHTML += '<li>' +textare.value +' </li>';        
      };

      function RemoveAllComments() 
      {  
        //alert('22');
        const temp =  document.getElementsByClassName("editor-mode")[0];
        temp.style.visibility = 'visible';  
        /*
        if (confirm("Do you really wants to delete all the comments?") == true) 
        {
          
          var ul = document.getElementById("UnsortList");
          ul.innerHTML = '';
        } 
        else {}
        */
      };


      document.getElementById("menu-table").style.width = "100%";

      document.getElementById("add-rates").addEventListener('click', AddRates)

      function AddRates() 
      {
        var e = document.getElementById("Rates");
        //var strUser = e.value;
        var strUser = e.options[e.selectedIndex].text;

        document.getElementsByClassName("comment-rating")[0].textContent = strUser;    
        var textare = document.getElementById("textare");      
        document.getElementsByClassName("comment-text")[0].textContent = textare.value;
      };

      document.getElementById("remove-comment").addEventListener('click', RemoveComment)

      function RemoveComment() 
      {
        //alert('22');
        document.getElementsByClassName("comment-text")[0].textContent = '';
        document.getElementsByClassName("comment-rating")[0].textContent = '';    
        const temp =  document.getElementsByClassName("editor-mode")[0];
        temp.style.visibility = 'hidden';  
      }