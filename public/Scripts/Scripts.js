(function(){

    //config firebase variable
    const Config = {
        apiKey: "AIzaSyDRtStIXO5JzRbeBxE5lcwD6x7EGo-jGiA",
        authDomain: "noge-f518e.firebaseapp.com",
        databaseURL: "https://noge-f518e.firebaseio.com",
        projectId: "noge-f518e",
        storageBucket: "noge-f518e.appspot.com",
        messagingSenderId: "439536248479",
        appId: "1:439536248479:web:fcdd98469ad398de1364aa",
        measurementId: "G-GNL4BDEDGL"
      };

      // Initialize Firebase
      firebase.initializeApp(Config);
      firebase.analytics();

    //list of variables that has been used through the code
    const txtEmail= document.getElementById('txtEmail');
    const txtPassword = document.getElementById('txtPassword');
    const btnLogin = document.getElementById('btnLogin');
    const btnSignup = document.getElementById('btnSignup');
    const btnLogout = document.getElementById('btnLogout');
    const txtNote = document.getElementById('txtNote');
    const txtName =document.getElementById('txtName');
    const txtDate = document.getElementById('txtDate');
    const btnSave = document.getElementById('btnSave');
    const form = document.getElementById('form');
   const database = firebase.firestore();
    const NotesCollection = database.collection('Notas');
    const NoteData = document.getElementById('Notes-list');

    //login event 
    btnLogin.addEventListener('click', e => {
        //Getting the email and password
        const email = txtEmail.value;
        const password = txtPassword.value;
        const auth = firebase.auth();

        //doing the sign in
        const promise = auth.signInWithEmailAndPassword(email, password);
        promise.catch((e) => alert(e.message));
        txtPassword.value = "";
    });

    //Sign Up event
    btnSignup.addEventListener('click', e => {
         //Getting the email and password
        const email = txtEmail.value;
    
        const password = txtPassword.value;
        const auth = firebase.auth();

        //doing the sign in
        const promise = auth.createUserWithEmailAndPassword(email, password);
        promise.catch((e) => alert(e.message));
        txtPassword.value = "";
    });


   

    //realtime listener
    firebase.auth(). onAuthStateChanged(firebaseUser =>{
        /*in that case, I'm hidding the elements of login page and showing up the elements
        from the note place
        */
        if(firebaseUser)
        {
           
           txtEmail.style.display = "none";
           txtPassword.style.display = "none";
           btnLogin.style.display = "none";
           btnSignup.style.display = "none";
            form.style.display = "block"
        }
        else
        {
            txtEmail.style.display = "inline";
           txtPassword.style.display = "inline  ";
           btnLogin.style.display = "inline";
           btnSignup.style.display = "inline";
            form.style.display="none";
        }
    });

    //Log out event    
    btnLogout.addEventListener('click', e=>{
        firebase.auth().signOut();
         
    });


    //Save event
    btnSave.addEventListener('click', e=>{
        e.preventDefault();
       if((txtDate.value != "") && (txtNote.value != "") && (txtName.value != "" ))
        {
            NotesCollection.doc().set({
            date: txtDate.value,
            Note: txtNote.value,
            name: txtName.value
        })
        .catch(error=>{alert(error)});
        }
        else
        {
            window.alert("Campo vazio");
        }
        //cleaning the input field
        txtDate.value = "";
        txtNote.value = "";
        txtName.value = "";
    });
    
    
    //creating elements and render notesCollection
    function renderNotes(doc){
        //creating the list of notes
        let li = document.createElement('li');
        let name = document.createElement('span');
        let Date = document.createElement('span');
        let Note = document.createElement('span');
        let cross = document.createElement('div');

        //setting the values from db into the list
        li.setAttribute('data-id', doc.id);
        name.textContent = doc.data().name;
        Date.textContent = doc.data().date;
        Note.textContent = doc.data().Note;
        cross.textContent = 'x';
        li.appendChild(name);
        li.appendChild(Date);
        li.appendChild(Note);
        li. appendChild(cross);

        NoteData.appendChild(li);

        //deleting database
        cross.addEventListener('click', (e) =>{
            e.stopPropagation();
            let id = e.target.parentElement.getAttribute('data-id');
            NotesCollection.doc(id).delete();
        }
        )
    }

    //real time listener
    getRealTimeDataUpdate = function(){
        NotesCollection.orderBy('date', 'desc').onSnapshot(snapshot => {
            let changes = snapshot.docChanges();
            changes.forEach(change => {
                if(change.type === 'added'){
                    renderNotes(change.doc);
                }else if(change.type === 'removed'){
                    let li = NoteData.querySelector('[data-id='+change.doc.id+']');
                    NoteData.removeChild(li);
                }
            })
        })
           
      
    
    }

    getRealTimeDataUpdate();
    
      
}());




function MudarFundo(info) {
  
    document.body.style.backgroundColor=info;  
}

function DarkMode(checkboxElement) {
  
    if(checkboxElement.checked) {
    
        setTimeout("MudarFundo('rgb(25, 133, 127')", 300)     
        setTimeout("MudarFundo('rgb(24, 126, 121')", 310) 
        setTimeout("MudarFundo('rgb( 22, 117, 113')", 320)     
        setTimeout("MudarFundo('rgb( 19, 105, 101')", 330)     
        setTimeout("MudarFundo('rgb(17, 92, 88')", 360)    
        setTimeout("MudarFundo('rgb(16, 83, 80')", 390)     
        setTimeout("MudarFundo('rgb(11, 63, 60')", 420)   
        setTimeout("MudarFundo('rgb(5, 27, 26')", 450) 
        setTimeout("MudarFundo('rgb(0, 0, 0')", 480) 
        

        setTimeout("MudarSection('rgb(27, 139, 134')", 300)     
        setTimeout("MudarSection('rgb(27, 139, 134')", 310) 
        setTimeout("MudarSection('rgb(27, 139, 134')", 320)     
        setTimeout("MudarSection('rgb(27, 139, 134')", 330)     
        setTimeout("MudarSection('rgb(27, 139, 134')", 360)    
        setTimeout("MudarSection('rgb(27, 139, 134')", 390)     
        setTimeout("MudarSection('rgb(27, 139, 134')", 420)   
        setTimeout("MudarSection('#D9D9D9')", 450) 
        
        
  
    }else{
        
        setTimeout("MudarFundo('rgb(24, 126, 121')",  420) 
        setTimeout("MudarFundo('rgb( 22, 117, 113')", 390)     
        setTimeout("MudarFundo('rgb( 19, 105, 101')", 360)     
        setTimeout("MudarFundo('rgb(17, 92, 88')", 330)    
        setTimeout("MudarFundo('rgb(16, 83, 80')", 320)     
        setTimeout("MudarFundo('rgb(11, 63, 60')", 310)   
        setTimeout("MudarFundo('rgb(5, 27, 26')", 300) 
        setTimeout("MudarFundo('rgb(25, 133, 127')", 450)    
        setTimeout("MudarFundo('rgb(27, 139, 134)')", 480)
    }
}

 