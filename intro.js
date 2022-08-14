let firstName = document.getElementById('fn'),
    lastName = document.getElementById('ln'),
    emailAddress = document.getElementById('ea'),
    passWord = document.getElementById('pw'),
    btn = document.getElementById('btn'),
    myForm = document.forms[0],
    myInputs = document.querySelectorAll('input'),
    speciaLabel = document.getElementById('speciaLabel'),
    passLabel = document.getElementById('passLabel'),
    myLabels = document.querySelectorAll('label'),
    fnLabel = document.getElementById('fnLabel'),
    lnLabel = document.getElementById('lnLabel'),
    myStyle = `
    background-image: url(images/icon-error.svg);
    background-repeat: no-repeat;
    background-position: 33em;
    border: 2px solid hsl(0, 100%, 74%);`,
    myLabStyle = `
    display: block;
    top: -1.5em;
    right: -13.5em;
    `

window.onload = function () {
    firstName.focus()
}

myForm.onsubmit = (e) => {
    e.preventDefault()
}


btn.onclick = function () {

    // Start the emptyness statement for all inputs

    if (firstName.value == "" && lastName.value == "" && emailAddress.value == "" && passWord.value == "") {

        // Show error

        myInputs.forEach((e) => {
            e.style.cssText = myStyle
            e.placeholder = "";
            e.onfocus = function () {
                e.style.border = '2px solid hsl(248, 32%, 49%)';
                e.style.cssText = 'none';
                e.nextElementSibling.style.display = 'none';
            }
            e.onblur = function () {
                e.style.border = '1px solid #e0e0e0';
        }
        })

        myLabels.forEach((e) => {
            e.style.display = 'block';

        })
        
        myForm.style.gap = "10px";

    }
     else if (firstName.value == "" || lastName.value == "" || emailAddress.value == "" || passWord.value == "") {

        // If the firstName or the lastName or the emailAddress or the passWord value was not existed

        if (firstName.value == "") {

            firstName.style.cssText = myStyle;
            fnLabel.style.cssText = myLabStyle;
            fnLabel.nextElementSibling.style.marginTop = '-2em';

        }
        if (lastName.value == "") {

            lastName.style.cssText = myStyle;
            lnLabel.style.cssText = myLabStyle;
            lnLabel.nextElementSibling.style.marginTop = '-2em';

        }
        if (emailAddress.value == "") {

            emailAddress.style.cssText = myStyle;
            speciaLabel.style.cssText = myLabStyle;
            speciaLabel.nextElementSibling.style.marginTop = '-2em';

        }
        if (passWord.value == "") {

            passWord.style.cssText = myStyle;
            passLabel.style.cssText = myLabStyle;
            passLabel.nextElementSibling.style.marginTop = '-2em';

        }

    }
     else if (emailAddress.value || passWord.value) {
        

        if (emailAddress.value) {

            let myReg = /(www.)?\w+\d+@gmail.com/g;
            if (!myReg.test(emailAddress.value)) {

                emailAddress.style.cssText = myStyle;
                speciaLabel.textContent = `Looks like this is not an email`;
                speciaLabel.style.cssText = myLabStyle;
                speciaLabel.nextElementSibling.style.marginTop = '-2em';


            } else {

                emailAddress.style.cssText = 'none';
                speciaLabel.style.display = 'none';
                speciaLabel.nextElementSibling.style.marginTop = '0';

            }

        }

        if (passWord.value) {

            if (passWord.value.length < 8 || passWord.value.length > 20) {

                passWord.style.cssText = myStyle;
                passLabel.textContent = `Password must be between 8 to 20 charachter`;
                passLabel.style.cssText = myLabStyle;
                passLabel.style.right = "-9.5em";
                passLabel.nextElementSibling.style.marginTop = '-2em';

            } else {

                passWord.style.cssText = 'none';
                passLabel.style.display = 'none';
                passLabel.nextElementSibling.style.marginTop = '0';

            }

        }

    }

    }