//1. ID를 입력 후 다음 양식으로 커서를 옮기면 입력한 ID를 자동으로 대문자로 변경
function fnUpperCase(){
    inputid = document.f.id
    inputid.value = inputid.value.toUpperCase()
}

//2. Email이 제대로 입력되었는지 체크 잘못 입력되었을 경우 "올바르게 입력하세요" 라는 메시지를 출력

inputEmail = document.f.email
const emailPattern = new RegExp('^[a-zA-Z0-9]+@[a-z]+\.[a-z]{2,3}$');

inputEmail.addEventListener("change", ev => {
    if (!emailPattern.test(ev.target.value)) {
        alert('올바르게 입력하세요');
    }
})


//3. 패스워드에 반드시 4글자 이상 입력되도록 한다.
inputpw = document.f.pw
inputpw.addEventListener("change", () => {
    if(inputpw.value.length < 4) {
        alert("패스워드는 4글자 이상 입력해야 합니다.")
        inputpw.value = ""
        inputpw.focus()
    }
})

//4. 주민번호 뒷자리의 첫글자 1 또는 3이면 남자 라디오박스에 (자동으로)체크되게 하고 2 또는 4이면 여자 라디오에 체크
ssn1El = document.f.ssn1
ssn2El = document.f.ssn2 
boyE1 = document.f.gender[0] 
girlEl = document.f.gender[1]

ssn2El.addEventListener("change", ()=>{
    if (ssn2El.value[0] === "1"|| ssn2El.value[0]==="3" ) {
        boyE1.checked = true 
    } else {girlEl.checked = true}
})

//5. 각 항 공통으로 값을 입력하지 않으면 "반드시 값을 입력" 라는 메시지를 출력하도록 한다.(함수로) 버튼눌렀을때 입력하지 않은 값 체크할수있도록
function validForm() {
    const id = document.f.id.value;
    const email = document.f.email.value;
    const pw = document.f.pw.value;
    const ssn2 = document.f.ssn2.value;

    // 5. 각 항 공통으로 값을 입력하지 않으면 "반드시 값을 입력" 라는 메시지를 출력하도록 한다.
    if (id === "" || email === "" || pw === "" || ssn2 === "") {
        alert("반드시 값을 입력하세요.");
        return false;
    }
}