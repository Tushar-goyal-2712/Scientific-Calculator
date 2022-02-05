let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
clickcount = 0;
expandcount = 0;
inversecount = 0;
nbtn = document.getElementsByClassName('nbtn');
obtn = document.getElementsByClassName('obtn');
exb = document.getElementsByClassName('exb');

for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'AC') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == 'C') {
            // click count
            this.clickCount++;
            setTimeout(() => {
                if (this.clickCount === 1) {
                    screenValue = screenValue.slice(0, -1);
                    screen.value = screenValue;
                } else if (this.clickCount === 2) {
                    screenValue = "";
                    screen.value = screenValue;
                }
                this.clickCount = 0;
            }, 250)
        }
        else if (buttonText == '%') {
            buttonText = '%';
            screen.value = eval(screenValue) / 100;
        }
        else if (buttonText == 'x') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        // Expand Button Functions
        else if (buttonText == 'Ex') {
            // expand count
            this.expandcount++;
            setTimeout(() => {
                if (this.expandcount === 1) {
                    document.getElementById("screen").style.width = "320px";
                    let exb = document.getElementsByClassName("exb");
                    for (i = 0; i < exb.length; i++) {
                        exb[i].style.display = "block";
                    }
                }
                else if (this.expandcount === 2) {
                    document.getElementById("screen").style.width = "260px";
                    let exb = document.getElementsByClassName("exb");
                    for (i = 0; i < exb.length; i++) {
                        exb[i].style.display = "none";
                    }
                }
                this.expandcount = 0;
            }, 250)
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == 'e') {
            buttonText = 'Math.E';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'π') {
            buttonText = 'Math.PI';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == '1/x') {
            buttonText = '1/';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == '!') {
            buttonText = '!';
            screenValue += buttonText;
            f = 1;
            size = screenValue.length;
            n = Number(screenValue.substring(0, size - 1));
            for (i = 2; i <= n; i++) {
                f = f * i;
            }
            screenValue = f;
            screen.value = screenValue;
        }
        else if (buttonText == '√x') {
            buttonText = 'Math.sqrt(';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == '^') {
            buttonText = 'Math.pow(';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'lg') {
            buttonText = 'Math.log10(';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'ln') {
            buttonText = 'Math.log(';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'sin') {
            buttonText = 'Math.sin(';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'cos') {
            buttonText = 'Math.cos(';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'tan') {
            buttonText = 'Math.tan(';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        // Inverse Function
        else if (buttonText == "2nd") {
            // inverse count
            this.inversecount++;
            setTimeout(() => {
                if (this.inversecount === 1) {
                    document.getElementById('sin').innerHTML = 'sin-1';
                    document.getElementById('cos').innerHTML = 'cos-1';
                    document.getElementById('tan').innerHTML = 'tan-1';
                }
                else if (this.inversecount === 2) {
                    document.getElementById('sin').innerHTML = 'sin';
                    document.getElementById('cos').innerHTML = 'cos';
                    document.getElementById('tan').innerHTML = 'tan';
                }
                this.inversecount = 0;
            }, 250)
        }
        else if (buttonText == "sin-1") {
            screenValue = "Math.asin(";
            screen.value = screenValue;
        }
        else if (buttonText == "cos-1") {
            screenValue = "Math.acos(";
            screen.value = screenValue;
        }
        else if (buttonText == "tan-1") {
            screenValue = "Math.tan(";
            screen.value = screenValue;
        }
        // Equal Function
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
            screenValue = "";
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}