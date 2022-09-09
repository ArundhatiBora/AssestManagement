
 //add assets

 const assets = e => {
             let formData = {
                 catagories: document.getElementById('catagories').value,
                 assetId: document.getElementById('assetId').value,
                 nameOfAsset: document.getElementById('nameOfAsset').value,
                 dateOfAssignment: document.getElementById('dateOfAssignment').value,
                 assetStatus: document.getElementById('assetStatus').value
             }
             localStorage.setItem('formData', JSON.stringify(formData));
             dispData();
             e.preventDefault();
             console.log('Success');
         }
         function dispData() {
             if(localStorage.getItem('formData')){
             let{catagories,assetId,nameOfAsset,dateOfAssignment,assetStatus} =JSON.parse(localStorage.getItem('formData'));
             var output = document.getElementById('output');
             output.innerHTML = `
             <table>
             <tbody>
             <tr>
             <td>Catagories</td>
             <td>${catagories}</td>
             </tr>
             <tr>
             <td>Asset ID</td>
             <td>${assetId}</td>`;
         }
     }

//toggle password eye

const togglePassword = document
            .querySelector('#togglePassword');
  
        const password = document.querySelector('#password');
  
        togglePassword.addEventListener('click', () => {
  
            // Toggle the type attribute using
            // getAttribure() method
            const type = password
                .getAttribute('type') === 'password' ?
                'text' : 'password';
                  
            password.setAttribute('type', type);
  
            // Toggle the eye and fa-eye icon
            password.classList.toggle('fa-eye');
        });

//toggle re enter password

const reEnterPassword = document
            .querySelector('#reEnterPassword');

        const repassword = document.querySelector('#password');
  
        reEnterPassword.addEventListener('click', () => {
  
            // Toggle the   password field  when    the password    field is clicked
            const type = repassword
                .getAttribute('type') === 'repassword' ?
                'text' : 'password';
                  
            password.setAttribute('type', type);
  
            // Toggle the eye and fa-eye icon
            password.classList.toggle('fa-eye');
        });

        //add assets

        const assetsADD = e => {
            let formData = {
                catagories: document.getElementById('catagories').value,
                assetId: document.getElementById('assetId').value,
                nameOfAsset: document.getElementById('nameOfAsset').value,
                dateOfAssignment: document.getElementById('dateOfAssignment').value,
                assetStatus: document.getElementById('assetStatus').value
            }
            localStorage.setItem('formData', JSON.stringify(formData));
            dispData();
            preventDefault();
        }
        function dispData() {
            if(localStorage.getItem('formData')){
            let{catagories,assetId,nameOfAsset,dateOfAssignment,assetStatus} =JSON.parse(localStorage.getItem('formData'));
            var output = document.getElementById('output');
            output.innerHTML = `
            <table>
            <tbody>
            <tr>
            <td>Catagories</td>
            <td>${catagories}</td>
            </tr>
            <tr>
            <td>Asset ID</td>
            <td>${assetId}</td>`;
        }
    }