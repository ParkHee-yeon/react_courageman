import React, { Component } from 'react';
import '../../css/join.css';
import Postcode from '../Postcode'; // 주소검색 팝업창이 필요하기 때문에 임포트


class JoinComponent extends Component {
  constructor(props){
    super(props); // this를 사용하기 위해 super(props);가 무조건 필요함
    this.state = {
      아이디:'',
      비밀번호:'',
      비밀번호확인:'',
      이름:'',
      이메일:'',
      휴대폰:'',

      // 중복확인 및 인증번호받기 버튼의 정규표현식 조건 체크
      아이디검증:false,
      비밀번호1검증:false,
      비밀번호2검증:false,
      비밀번호3검증:false,
      이메일검증:false,
      휴대폰검증:false,

      // 아이디 중복확인버튼 클릭 유무
      아이디중복확인:false,

      // 휴대폰 인증번호 관련 속성
      휴대폰인증번호:'',
      인증키:'123456', // 휴대폰으로 전송된 인증번호 변수
      classPhoneNum:true,
      phoneNumOpen:false,
      disabledPhone:false,
      disabledPhoneNum:false,
      counterTimerOpen:true,
      counterTimerStart:false,
      minutes:2,
      seconds:59,

      우편번호:'',
      도로명주소:'',
      세부주소:'',
      주소:'',
      addressBtn:false, // 주소검색버튼 클릭유무 => 사용자가 주소검색버튼을 누를경우 true로 변환되면서 주소팝업창이 열림
      inputShow:false, // 주소 입력창 보여주기 유무 => 사용자가 주소를 선택했을경우, 주소입력창이 보여진다.

      약관동의:[], // 약관동의는 체크박스이며, 다중선택이 가능하기 때문에 배열로 선언 

      // 가이드텍스트 노출 유무
      showId:false,
      showPwd:false,
      showPwdOk:false,

      // 클래스를 '', success, error 중 결정해주는 변수
      classId:'',
      classIdCheck:'',
      classPwd1:'',
      classPwd2:'',
      classPwd3:'',
      classPwdOk:'',
      classEmail:'',
      classPhone:false,

      // 중복확인 버튼을 눌렀을 경우, 나타나는 팝업창의 노출 유무
      popupShow:false,
      // 팝업창 내의 가이드텍스트 내용 => 아이디, 이메일 중복확인 및 휴대폰 인증번호받기 버튼
      popupText:''
    } // 객체로 등록
  } // constructor은 모든 멤버변수를 관리
  // constructor와 render()함수 사이에는 연결되는 메소드를 관리
  
  // onChangeId(): 사용자가 아이디를 입력하면, 그 값을 받는 메소드
  onChangeId=(value)=>{
    this.setState({아이디:value}); // 사용자가 키보드로 입력한 값을 '아이디' 객체 값으로 수정하라는 의미
    this.idValue = value; // 입력값 전달

    // 정규표현식(regExp) 생성 : 글자길이가 6자 이상, 영문 혹은 영문과 숫자조합
    /* 
      - 정규표현식은 시작과 끝을 슬래쉬(/)로 감싸준다
      - 슬래쉬(/) 앞과 뒤에는 ^는 시작점, $는 끝점을 붙여준다.
      - 조건 뒤에 붙은 +는 한글자 이상, *는 0자 이상(입력을 안해도 상관없음)
      - 범위가 하나 일 경우에는, ()를 써도 상관없음
      - .는 모든 문자를 의미 즉, [A-Za-z\d]와 같은 의미
      - (?=.*[a-zA-Z])는 영문 1문자를 의미
      - (?=.*\d)는 숫자 1문자를 의미

      - []는 텍스트의 범위
        => \d는 0-9를 의미
        => [a-zA-Z0-9]는 영어 혹은 숫자만 들어가면 true

      - {}는 텍스트 길이의 범위를 의미 
        => 6자 이상이므로, {6,}이다. 뒤에 공백은 무한대를 의미
    */ 
    const regExp = /^(?=.*[a-zA-Z])+(?=.*\d)*[A-Za-z\d]{6,}$/;
    
    /*
      사용자가 입력한 값인 value가 공백이면, classId는 공백 (즉, 클래스는 공백)
      공백이 아니라면, 정규표현식을 통해 조건을 점검 
      => test() 메소드를 사용 
      => test()는 정규표현식의 true와 false를 판단하는 메소드
      test() 메소드를 통해 정규표현식의 true와 false를 판단했을때,
      true이면 sucess 클래스 추가, false이면 error 클래스 추가
    */
    if(value===''){
      this.setState({
        classId:'',
        아이디검증:false
      });
    }
    else{
      if(regExp.test(value)){
        this.setState({
          classId:true,
          아이디검증:true
        });
      }
      else{
        this.setState({
          classId:false,
          아이디검증:false
        });
      }
    }
  } // 위의 코드는 onChange={(e)=>this.onChangeId(e.target.value)}에서 value에 보내준 값으로 수정해주는 메소드
  onChangePwd=(value)=>{
    this.setState({비밀번호:value});

    /* 
      1. 10자 이상 조건문
      - .은 모든글자를 의미
    */
    const regExp10 = /.{10,}/; 
    if(value===''){
      this.setState({
        classPwd1:'',
        비밀번호1검증:false
      });
    }
    else{
      if(regExp10.test(value)){
        this.setState({
          classPwd1:true,
          비밀번호1검증:true
        });
      }
      else{
        this.setState({
          classPwd1:false,
          비밀번호1검증:false
        });
      }
    }

    /*
      2. 영문/숫자/특수문자(공백제외)만 허용하며,2개 이상 조합
      - 영문은 필수
      - (영문+숫자), (영문+특수문자), (영문+숫자+특수문자)
      - 숫자 혹은 특수문자가 한글자 이상 와야하므로 |+를 사용 
      - [^\s]는 공백을 허용하지 않는다는 의미
      - [] 안에 있는 ^은 공백
    */
    const regExpEnNuSp = /((?=.*[A-Za-z])+((?=.*[0-9])+|(?=.*[!@#$%&*-_])+)+)[^\s][A-Za-z0-9!@#$%&*-_]{10,}/;
    if(value===''){
      this.setState({
        classPwd2:'',
        비밀번호2검증:false
      });
    }
    else{
      if(regExpEnNuSp.test(value)){
        this.setState({
          classPwd2:true,
          비밀번호2검증:true
        });
      }
      else{
        this.setState({
          classPwd2:false,
          비밀번호2검증:false
        });
      }
    }
    /* 
      3. 동일한 숫자 3개 이상 연속 사용 불가
      - 횟수제한을 둘 경우 .을 소괄호로 꼭 묶어줘야함 => (.)
      - \1만 쓰면 2회 연속, \1\1을 쓰면 3회 연속, \1\1\1을 쓰면 4회 연속
      - 3회연속일경우, 결과값은 false로 나와야함
    */
    const regExpRept3 = /(.)\1\1/;
    if(value===''){
      this.setState({
        classPwd3:'',
        비밀번호3검증:false
      });
    }
    else{
      if(regExpRept3.test(value)){
        this.setState({
          classPwd3:false,
          비밀번호3검증:false
        });
      }
      else{
        this.setState({
          classPwd3:true,
          비밀번호3검증:true
        });
      }
    }
  }
  onChangePwdOk=(value)=>{
    this.setState({비밀번호확인:value});

    if(value===''){
      this.setState({classPwdOk:''});
    }
    // 저장된 비밀번호와 입력한 비밀번호확인이 같은지 확인
    else{
      if(this.state.비밀번호===value){
        this.setState({classPwdOk:true});
      }
      else{
        this.setState({classPwdOk:false});
      }
    }
  }
  onChangeName=(value)=>{
    /* 
      이름 정규표현식 조건: 한글, 영문, 공백만 입력 나머지 모두 자동 삭제
      - replace(): 정규표현식이 true이면, 자동으로 삭제해주는 메소드이다.
      => 문자열.replace(/정규표현식/g, '')
    */
    this.setState({이름:value.replace(/[^A-Za-z가-힣ㄱ-ㅎㅏ-ㅣ\s]/g, '')});
  }
  onChangeEmail=(value)=>{
    /* 
      this는 생성자를 의미, 즉 전역변수
      emailValue는 사용자가 이메일 입력칸에 입력한 값
    */ 
    this.emailValue = value; 
    
    this.setState({이메일:value});
    /*
      이메일 정규표현식
      - 영어 필수 
      - 특수문자(.-_) 0글자 이상
      - @ 필수 
    */
    const regExp = /^[A-Za-z0-9-_]+(.[A-Za-z0-9-_])*@[A-Za-z0-9-_]+(.[A-Za-z])*.[A-Za-z]{2,3}$/;
    if(value===''){
      this.setState({
        classEmail:'',
        이메일검증:false
      });
    }
    else{
      if(regExp.test(value)){
        this.setState({
          classEmail:true,
          이메일검증:true
        });
      }
      else{
        this.setState({
          classEmail:false,
          이메일검증:false
        });
      }
    }
  }
  onChangePhone=(value)=>{
    this.phoneValue = value;
    let result = value.replace(/[^0-9]/g, '');
    this.setState({휴대폰: result });
    
    // 휴대폰 번호가 10자리 이상이면, 우측 버튼(인증번호 받기) 활성화
    if(value.length>=10){
      this.setState({classPhone:true});
    }
    else{
      this.setState({classPhone:false});
    }
  }
  onChangePhoneNum=(value)=>{
    this.phoneNumValue = value;
    this.setState({휴대폰인증번호:value});
  }

  // 주소 관련 메소드(PostNum은 우편번호, Address1은 도로명주소, Address2는 세부주소)
  onChangePostNum = (value) => {
    this.setState({우편번호:value});
  }
  onChangeAddress1 = (value) => {
    this.setState({도로명주소:value});
    this.setState({addressBtn:false}); // 사용자가 도로명주소 검색을 완료하면, 팝업창이 닫히도록 설정
    this.setState({inputShow:true});
  } 
  onChangeAddress2 = (value) => {
    this.setState({세부주소:value});
  }

  // 주소 검색 버튼 클릭 이벤트 메소드
  onClickAddress = (e) => {
    e.preventDefault(); // 새로고침 방지
    this.setState({addressBtn:true});
  }


  // 체크박스[] 전송메소드
  /*
    onChangeCheckEvent() 메소드:
    체크상태(true)이면, 약관동의에 값을 추가(누적)하고
    체크상태가 아니라면(false), 약관동의에서 값을 삭제하고 나머지 값을 보관 
  */
  onChangeCheckEvent=(checked, value)=>{
    let result = ''; // 제거할땐 임시 변수인 result를 사용해줘야함

    if(checked){ // checked===true와 같은 의미
      // 조건문: SMS & 이메일
      if(value==='SMS' && this.state.약관동의.includes('이메일')){
        this.setState({약관동의:[...this.state.약관동의, 'SMS', `무료배송, 할인쿠폰 등 혜택/정보 수신 동의 (선택)`]});
      }
      /* 
        방금 'SMS'이 체크가 되었고, 이미 약관동의 안에 '이메일'이 포함이 되어있으면, 
        `무료배송, 할인쿠폰 등 혜택/정보 수신 동의 (선택)` 값을 약관동의 배열에 누적되도록 설정
        => 방금 체크가 된 value 값은 임의적으로 약관동의 배열 안에 넣어줘야함
      */
      else if(value==='이메일' && this.state.약관동의.includes('SMS')){
        this.setState({약관동의:[...this.state.약관동의, '이메일', `무료배송, 할인쿠폰 등 혜택/정보 수신 동의 (선택)`]});
      }
      else if(value==='무료배송, 할인쿠폰 등 혜택/정보 수신 동의 (선택)' && this.state.약관동의.includes('SMS') && !this.state.약관동의.includes('이메일')){
        this.setState({약관동의:[...this.state.약관동의, '무료배송, 할인쿠폰 등 혜택/정보 수신 동의 (선택)', '이메일']});
      }
      else if(value==='무료배송, 할인쿠폰 등 혜택/정보 수신 동의 (선택)' && this.state.약관동의.includes('이메일') && !this.state.약관동의.includes('SMS')){
        this.setState({약관동의:[...this.state.약관동의, '무료배송, 할인쿠폰 등 혜택/정보 수신 동의 (선택)', 'SMS']});
      }
      else if(value==='무료배송, 할인쿠폰 등 혜택/정보 수신 동의 (선택)' && this.state.약관동의.includes('SMS') && this.state.약관동의.includes('이메일')){
        this.setState({약관동의:[...this.state.약관동의, '무료배송, 할인쿠폰 등 혜택/정보 수신 동의 (선택)']});
      }
      else if(value==='무료배송, 할인쿠폰 등 혜택/정보 수신 동의 (선택)' && !this.state.약관동의.includes('SMS') && !this.state.약관동의.includes('이메일')){
        this.setState({약관동의:[...this.state.약관동의, '무료배송, 할인쿠폰 등 혜택/정보 수신 동의 (선택)', 'SMS', '이메일']});
      }
      else{
        this.setState({약관동의:[...this.state.약관동의, value]}); // ...this.state.약관동의는 value를 누적된 값에 추가하라는 의미
      }
    }
    
    else{
      // 조건문: SMS/이메일
      /*
        '무료배송, 할인쿠폰 등 혜택/정보 수신 동의 (선택)' 체크박스가 해제된다면, 'SMS'과 '이메일' 체크박스 모두 해제 
        아래의 코드는 '무료배송, 할인쿠폰 등 혜택/정보 수신 동의 (선택)' 체크가 해제된다면, 
        result 변수에서 value값인 ''무료배송, 할인쿠폰 등 혜택/정보 수신 동의 (선택)'를 걸러내고, 
        'SMS'와 '이메일'을 모두 걸러낸다. 
      */
      if(value==='무료배송, 할인쿠폰 등 혜택/정보 수신 동의 (선택)'){
        result = this.state.약관동의.filter((item) => {return item!==value});
        result = result.filter((item) => {return item!=='SMS'});
        result = result.filter((item) => {return item!=='이메일'});
      }
      /*
        'SMS' 체크박스가 해제된다면, value값인 'SMS'와 '무료배송, 할인쿠폰 등 혜택/정보 수신 동의 (선택)' 을 result 변수에서 걸러낸다. 
      */
      else if(value==='SMS'){
        result = this.state.약관동의.filter((item) => item!==value);
        result = result.filter((item) => item!=='무료배송, 할인쿠폰 등 혜택/정보 수신 동의 (선택)');
      }
      /*
        '이메일' 체크박스가 해제된다면, value값인 '이메일'와 '무료배송, 할인쿠폰 등 혜택/정보 수신 동의 (선택)' 을 result 변수에서 걸러낸다. 
      */
      else if(value==='이메일'){
        result = this.state.약관동의.filter((item) => item!==value);
        result = result.filter((item) => item!=='무료배송, 할인쿠폰 등 혜택/정보 수신 동의 (선택)');
      }
      else{
        result = this.state.약관동의.filter((item) => item!==value);   
        // item은 this.state.약관동의에 저장된 값들
        // result는 value가 아닌 것을 item 항목 중에 걸러서 저장
        // 중괄호를 사용한 경우에는, return문을 무조건 작성해줘야함 
      }
    
      this.setState({약관동의: result });
    }
  }

  /*
    onChangeCheckEventAll() 메소드:
    '전체동의합니다.'를 체크한다면, 모든 체크박스가 체크된다.
  */
  onChangeCheckEventAll=(checked, value)=>{
    let allcheck = [
      `이용약관동의 (필수)`,
      `개인정보 수집·이용 동의 (필수)`,
      `개인정보 수집·이용 동의 (선택)`,
      `무료배송, 할인쿠폰 등 혜택/정보 수신 동의 (선택)`,
      `SMS`,
      `이메일`,
      `본인은 만 14세 이상입니다. (필수)`
    ];
    if(checked){
      this.setState({약관동의:allcheck});
    }
    else{
      this.setState({약관동의:[]}); // `전체동의합니다` 체크를 해제하면, 모든 체크박스 해제
    }
  }

  
  // 아이디 중복확인 중복확인 버튼 누르면 팝업창 노출 메소드
  onClickIdPopupEvent = (e) => {
    e.preventDefault();
    this.setState({popupShow:true});
    if(this.state.아이디===''){
      this.setState({
        popupText:'아이디를 입력해 주세요.',
        아이디검증:false
      });
    }
    else{
      if(this.state.classId===false){
        this.setState({
          popupText:'아이디는 6자 이상의 영문 혹은 영문과 숫자 조합만 가능합니다.',
          아이디검증:false
        });
      }
      else{
        /*
          아이디 중복확인 반복처리문
          1. 아이디 입력값 === 저장된 아이디와 비교
          2. 로컬스토레이지(데이터베이스) 데이터 전체 추출
          3. 추출한 데이터에서 아이디만 추출
          4. 반복처리로 비교하고 같은 아이디가 있다면 true로 변환
          5. 결과가 true이면, 등록된 아이디입니다. 팝업창 출력
          6. 결과가 false이면, 사용가능한 아이디입니다. 팝업창 출력 
        */
        let imsiDb=[]; // 데이터베이스 임시객체
        for(let i=0;i<localStorage.length;i++){
          imsiDb.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }

        // 데이터베이스에 저장된 값과 입력된 값을 비교 => true이면 같은 아이디가 있다는 의미, false이면 없다는 의미
        let result=imsiDb.map((item)=>item.아이디===this.idValue);      
        if(result.includes(true)){
          this.setState({
            popupText:'중복된 아이디입니다.',
            아이디검증:false,
            아이디중복확인:false,
            classIdCheck:false
          });
        }
        else{
          this.setState({
            popupText:'사용 가능한 아이디입니다.',
            아이디검증:true,
            아이디중복확인:true,
            classIdCheck:true
          });
        }
        
      }
    }
  }

  // 이메일 중복확인 버튼 누르면 팝업창 노출 메소드
  onClickEmailPopupEvent = (e) => {
    e.preventDefault();
    const regExp = /^[A-Za-z0-9-_]+(.[A-Za-z0-9-_])*@[A-Za-z0-9-_]+(.[A-Za-z])*.[A-Za-z]{2,3}$/;
    this.setState({popupShow:true});

    /*
      this.state.이메일로 할 경우, 이메일을 정상적으로 입력하고 중복확인 버튼을 누르고나서
      수정할 때 잘못된 형식으로 입력한 뒤 중복확인 버튼을 누르면 정상적인 이메일이라고 뜬다 => 한템포 느리기 때문에
      그렇기 때문에 사용자가 이메일 입력칸에 입력한 값을 즉각적으로 가져오는 전역변수를 생성해 조건에 넣어줘야한다.
    */
    if(this.emailValue===''){
      this.setState({
        popupText:'이메일을 입력해 주세요.',
        이메일검증:false
      });
    }
    else{
      if(regExp.test(this.emailValue)===false){
        this.setState({
          popupText:'잘못된 이메일 형식입니다.',
          이메일검증:false
        });
      }
      else{
        let imsiDb=[];
        for(let i=0;i<localStorage.length;i++){
          imsiDb.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }

        let result=imsiDb.map((item)=>item.이메일===this.emailValue);
        if(result.includes(true)){
          this.setState({
            popupText:'중복된 이메일입니다.',
            이메일검증:false
          });
        }
        else{
          this.setState({
            popupText:'사용 가능한 이메일입니다.',
            이메일검증:true
          })
        }
      }
    }
  }

  // 휴대폰 인증번호 받기 버튼 이벤트
  onClickPhonePopupEvent = (e) => {
    e.preventDefault();
    if(this.phoneValue!==undefined){
      if(this.phoneValue.length<10){
        return; // 버튼비활성화
      }
      else{
        if(!/^01[016789]{1}[0-9]{3,4}[0-9]{4}$/g.test(this.state.휴대폰)){
          this.setState({
            popupShow:true,
            popupText:'잘못된 휴대폰 번호입니다. 확인 후 다시 시도 해 주세요.',
            휴대폰검증:false
          });
          return;
        }
        else{
          this.setState({
            popupShow:true,
            popupText:'인증번호가 발송되었습니다.',
            휴대폰검증:true,
            phoneNumOpen:true,
            disabledPhone:true,
            // 인증번호 버튼을 누르면, counterTimer 메소드 실행
            counterTimerStart:true,
            classPhone:false
          });
          // 카운터 타이머 함수 호출
          this.counterTimer();
        }
      }
    }
  }
  // 인증번호 확인 버튼 이벤트
  onClickPhoneNumEvent = (e) => {
    e.preventDefault();
    if(this.phoneNumValue===this.state.인증키){
      this.setState({
        popupShow:true,
        popupText:'인증이 완료 되었습니다.',
        counterTimerOpen:false, // 카운터타이머 숨기기
        disabledPhoneNum:true,
        classPhoneNum:false,
        휴대폰:this.state.휴대폰.replace(/^(01[016789]{1})([0-9]{3,4})([0-9]{4})$/g, '$1-$2-$3')
      });
      // 카운터타이머 메소드 중지
      clearInterval(this.setId);
    }
    else{
      this.setState({
        popupShow:true,
        popupText:'인증번호를 잘못 입력하셨습니다.',
        counterTimerOpen:true,
        disabledPhoneNum:false
      });
    }
  } 

  // 휴대폰 인증번호 타이머 함수
  counterTimer(){ 
    this.setId = setInterval(()=>{
      // 초(seconds) 감소
      this.setState({seconds:this.state.seconds-1});
      // 초가 0보다 작거나 같아진다면, 초는 59초로 초기화하고 분은 -1 감소
      if(this.state.seconds<=0){
        this.setState({
          seconds:59,
          minutes:this.state.minutes-1 
        });
        // 타이머 종료
        if(this.state.minutes<=0){
          // 타이머(setInterval)를 종료하기위해선, setId가 필요
          clearInterval(this.setId);
          this.setState({
            seconds:0,
            minutes:0
          });
        }
      }
    },1000); // 1초에 한번씩 카운터실행
  }
  
  // 렌더링 이후에 동작하는 메소드 => componentDidMount()
  componentDidMount(){
    // 인증번호받기 버튼을 누르기 전까지는 메소드 중지
    this.state.counterTimerStart && this.counterTimer();
  }

  // 마우스 이벤트 
  onFocusId = (e) => {
    e.preventDefault();
    this.setState({showId:true});
  }
  onFocusPwd = (e) => {
    e.preventDefault();
    this.setState({showPwd:true});
  }
  onFocusPwdOk = (e) => {
    e.preventDefault();
    this.setState({showPwdOk:true});
  }
  // 팝업창에서 엑스버튼이나 닫힘 버튼을 누르면 팝업창 사라지는 메소드
  onClickClosePopup = (e) => {
    e.preventDefault();
    this.setState({popupShow:false});
  }


  // <form> 전송메소드
  /*
    onSubmitEvent
    - 따로 메소드를 만들어서 입력된 값을 보내주지 않아도 되지만, 
      입력값을 스스로 보내는 과정에서 새로고침이 발생하므로, 새로고침이 발생하지 않도록 e.preventDefault()를 실행시켜줘야한다.
    - 아이디 ~ 이용약관까지 모두 검증하고 검증된 데이터를 전송 즉, 저장한다.
    - 전송하고나선, 다음 입력을 위해 모든 속성을 초기화
    - 중복데이터 검증: 아이디 , 이메일  
  */
  onSubmitEvent=(e)=>{
    e.preventDefault();

    // 필수사항 구조분할할당
    const {
      아이디, 비밀번호, 이름, 이메일, 휴대폰, 우편번호, 도로명주소, 세부주소, 약관동의,
      아이디검증, 비밀번호1검증, 비밀번호2검증, 비밀번호3검증, 이메일검증, 휴대폰검증,
      아이디중복확인
    } = this.state;
    
    // 필수사항 조건에 입력이 안되있으면(공백), 전송이 안되도록 설정 => return으로 입력취소
    if(아이디==='' || 비밀번호==='' || 이름==='' || 이메일==='' || 휴대폰==='' || 도로명주소==='' || 세부주소 ===''){
      if(아이디===''){    
        this.setState({
          popupShow:true,
          popupText:'아이디를 입력해주세요.'
        });
      }
      else if(비밀번호===''){
        this.setState({
          popupShow:true,
          popupText:'비밀번호를 입력해주세요.'
        });
      }
      else if(이름===''){
        this.setState({
          popupShow:true,
          popupText:'이름을 입력해주세요.'
        });
      }
      else if(이메일===''){
        this.setState({
          popupShow:true,
          popupText:'이메일을 입력해주세요.'
        });
      }
      else if(휴대폰===''){
        this.setState({
          popupShow:true,
          popupText:'휴대폰 번호를 입력해주세요.'
        });
      }
      else if(도로명주소===''){
        this.setState({
          popupShow:true,
          popupText:'주소를 검색해주세요.'
        });
      }
      else if(세부주소===''){
        this.setState({
          popupShow:true,
          popupText:'세부주소를 입력해주세요.'
        });
      }
      return;
    } 
    else{
      // 중복확인 클릭 시, 정규표현식 규칙을 어기면 입력취소
      if(아이디검증===false|| 비밀번호1검증===false || 비밀번호2검증===false || 비밀번호3검증===false || 이메일검증===false || 휴대폰검증===false || 아이디중복확인===false){
        if(아이디검증===false){
          this.setState({
            popupShow:true,
            popupText:'아이디는 6자 이상의 영문 혹은 영문과 숫자 조합만 가능합니다'
          });
        }
        else if(이메일검증===false){
          this.setState({
            popupShow:true,
            popupText:'잘못된 이메일 형식입니다.'
          });
        }
        return;
      }
      else{
        // 약관동의(필수조건 3개) 체크 중 하나라도 하지 않으면, 전송X
        let cnt=0;

        for(let i=0;i<약관동의.length;i++){
          if(약관동의[i].indexOf('필수')!==-1){ // 약관동의에서 '필수'를 찾지 못했다면 cnt -1을 의미
            cnt++;
          }
        }

        if(cnt<3){
          this.setState({
            popupShow:true,
            popupText:'약관동의 필수 선택사항을 선택하세요.'
          });
          return;
        }

        // 정상데이터 전송
        else{
          const 회원정보 = {
            아이디:아이디,
            비밀번호:비밀번호,
            이름:이름,
            이메일:이메일,
            휴대폰:휴대폰,
            주소:`${우편번호} ${도로명주소} ${세부주소}`,
            약관동의:약관동의,
            가입일자:`${new Date().getFullYear()}-0${new Date().getMonth()+1}-0${new Date().getDay()}`
          }

          // 데이터를 문자열로 저장
          localStorage.setItem(회원정보.아이디, JSON.stringify(회원정보));
  
          // 초기화
          this.setState({
            아이디:'',
            비밀번호:'',
            비밀번호확인:'',
            이름:'',
            이메일:'',
            휴대폰:'',

            아이디검증:false,
            비밀번호1검증:false,
            비밀번호2검증:false,
            비밀번호3검증:false,
            이메일검증:false,
            휴대폰검증:false,
      
            아이디중복확인:false,
      
            휴대폰인증번호:'',
            인증키:'123456',
            classPhoneNum:true,
            phoneNumOpen:false,
            disabledPhone:false,
            disabledPhoneNum:false,
            counterTimerOpen:true,
            counterTimerStart:false,
            minutes:2,
            seconds:59,
      
            우편번호:'',
            도로명주소:'',
            세부주소:'',
            주소:'',
            addressBtn:false, 
            inputShow:false,
      
            약관동의:[], 
      
            showId:false,
            showPwd:false,
            showPwdOk:false,

            classId:'',
            classIdCheck:'',
            classPwd1:'',
            classPwd2:'',
            classPwd3:'',
            classPwdOk:'',
            classEmail:'',
            classPhone:false,
      
            popupShow:false,
            popupText:''
          });
        }
      }
    }
  }


  render() {
    return (
      <div id='main'>
        <section id="join">
          <div className="container">
            <div className="gap">
              <div className="wrap">
                <form id="form" onSubmit={this.onSubmitEvent}> 
                {/* onSubmit 이벤트는 onChange처럼 메소드를 따로 만들지 않아도, 알아서 값을 보내줌 */}
                  <div className="title_box">
                    <h1><img src="./img/메인화면/courageman_favicon.png" alt="용기맨로고" /></h1>
                    <h2>회원가입</h2>
                  </div>
                  <div className="content_box">
                    <h4><span><i>*</i>필수입력사항</span></h4>
                    <ul>
                        <li>
                          <div className="gap">
                            <div className="label_box">
                              <span>아이디<i>*</i></span>
                            </div>
                            <div className="input_box">
                              <input 
                                type="text"
                                placeholder="6자 이상의 영문 혹은 영문과 숫자를 조합" 
                                maxLength="15"
                                className="inputText" 
                                id="inputId"
                                value={this.state.아이디} 
                                onChange={(e)=>this.onChangeId(e.target.value)}
                                onFocus={(e)=>this.onFocusId(e)}
                              />
                              {/* 
                                - maxLength 속성은 글자 길이 제한
                                - value 속성은 input에 입력된 값을 쉽게 가져오기 위한 속성
                                - onChange 속성은 사용자의 입력이 어떤 식으로든 변경될 때 발생 
                                  => value 속성만 쓴다면, 사용자가 아무리 입력을 해도 입력되지않음 
                                    onChange 속성을 통해 사용자의 입력을 받는 상태로 변경해주는 것!
                              */}
                              <button className="w120-btn" onClick={this.onClickIdPopupEvent}>중복확인</button>
                              {
                                this.state.showId && (
                                  <>
                                    <p className={
                                      (
                                        // 정규표현식(regExp) 멤버변수
                                        /*
                                          classId가 공백이라면, 공백이고 그렇지않고 true라면 success 클래스추가
                                          false이면, error 클래스 추가
                                        */
                                        this.state.classId === '' ? '' : (this.state.classId===true?'success':'error')
                                      )
                                    }>6자 이상의 영문 혹은 영문과 숫자를 조합</p>
                                    <p className={
                                      (
                                        this.state.classIdCheck === '' ? '' : (this.state.classIdCheck===true?'success':'error')
                                      )
                                    }>아이디 중복확인</p>
                                  </>
                                )
                              }
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="gap">
                            <div className="label_box">
                              <span>비밀번호<i>*</i></span>
                            </div>
                            <div className="input_box">
                              <input 
                                type="text" 
                                placeholder="비밀번호를 입력해주세요" 
                                maxLength="15"
                                className="inputText" 
                                id="inputPwd"
                                value={this.state.비밀번호}
                                onChange={(e)=>this.onChangePwd(e.target.value)}
                                onFocus={(e)=>this.onFocusPwd(e)}
                              />
                              {
                                this.state.showPwd && (
                                  <>
                                    <p className={
                                      (
                                        this.state.classPwd1 === '' ? '' : (this.state.classPwd1===true?'success':'error')
                                      )
                                    }>10자 이상 입력</p>
                                    <p className={
                                      (
                                        this.state.classPwd2 === '' ? '' : (this.state.classPwd2===true?'success':'error')
                                      )
                                    }>영문/숫자/특수문자(공백제외)만 허용하며,2개 이상 조합</p>
                                    <p className={
                                      (
                                        this.state.classPwd3 === '' ? '' : (this.state.classPwd3===true?'success':'error')
                                      )
                                    }>동일한 숫자 3개 이상 연속 사용 불가</p>
                                  </>
                                )
                              }
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="gap">
                            <div className="label_box">
                              <span>비밀번호확인<i>*</i></span>
                            </div>
                            <div className="input_box">
                              <input 
                                type="password" 
                                placeholder="비밀번호를 한번 더 입력해주세요" 
                                maxLength="15"
                                className="inputText" 
                                id="inputPwdOk" 
                                value={this.state.비밀번호확인}
                                onChange={(e)=>{this.onChangePwdOk(e.target.value)}}
                                onFocus={(e)=>this.onFocusPwdOk(e)}
                              />
                              {
                                this.state.showPwdOk && (
                                  <>
                                    <p className={
                                      (
                                        this.state.classPwdOk === '' ? '' : (this.state.classPwdOk===true?'success':'error')
                                      )
                                    }>동일한 비밀번호를 입력해주세요.</p>
                                  </>
                                )
                              } 
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="gap">
                            <div className="label_box">
                              <span>이름<i>*</i></span>
                            </div>
                            <div className="input_box">
                              <input 
                                type="text" 
                                placeholder="이름을 입력해주세요" 
                                className="inputText" 
                                id="inputName" 
                                value={this.state.이름}
                                onChange={(e)=>this.onChangeName(e.target.value)}
                              />
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="gap">
                            <div className="label_box">
                              <span>이메일<i>*</i></span>
                            </div>
                            <div className="input_box">
                              <input 
                                type="email"
                                placeholder="예: courageman@courage.com" 
                                className="inputText" 
                                id="inputEmail" 
                                value={this.state.이메일}
                                onChange={(e)=>this.onChangeEmail(e.target.value)}
                              />
                              <button className="w120-btn" onClick={this.onClickEmailPopupEvent}>중복확인</button>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="gap">
                            <div className="label_box">
                              <span>휴대폰<i>*</i></span>
                            </div>
                            <div className="input_box">
                              <input 
                                type="text" 
                                placeholder="숫자만 입력해주세요" 
                                maxLength="11"
                                className="inputText" 
                                id="inputPhone" 
                                value={this.state.휴대폰}
                                onChange={(e)=>this.onChangePhone(e.target.value)}
                                disabled={this.state.disabledPhone}
                              />
                              <button 
                                className={`w120-btn ${this.state.classPhone === true ? '' : 'phone'}`}
                                onClick={this.onClickPhonePopupEvent}
                              >인증번호 받기</button>
                              
                              {/* 인증번호 확인 */}
                              {
                                this.state.phoneNumOpen && (
                                  <>
                                    <input
                                    type="text"
                                    placeholder="인증번호를 입력해주세요"
                                    maxLength="6"
                                    className="inputText phoneNum-input"
                                    id="inputPhoneNum"
                                    value={this.state.휴대폰인증번호}
                                    onChange={(e)=>this.onChangePhoneNum(e.target.value)}
                                    disabled={this.state.disabledPhoneNum}
                                    />
                                    <button
                                      className={`w120-btn phoneNum-btn ${this.state.classPhoneNum === true ? '' : 'phone'}`}
                                      onClick={this.onClickPhoneNumEvent}
                                    >인증번호 확인</button>
                                    {
                                      this.state.counterTimerOpen && (
                                        <span className="counter-timer-box">{this.state.minutes}:{this.state.seconds<10? `0${this.state.seconds}`:this.state.seconds}</span>
                                      )
                                    }
                                  </>
                                )
                              }
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="gap">
                            <div className="label_box">
                              <span>주소<i>*</i></span>
                            </div>
                            <div className="input_box">
                            { 
                              this.state.inputShow && ( 
                                  <>
                                  <input 
                                    style={{margin:'0 0 5px 0'}}
                                    type="text"
                                    className="inputText"
                                    id="inputPostNum"
                                    value={this.state.우편번호}
                                    onChange={(e)=>this.onChangePostNum(e.target.value)}
                                  />
                                  <input
                                    type="text"
                                    className="inputText"
                                    id="inputAddress1"
                                    value={this.state.도로명주소}
                                    onChange={(e)=>this.onChangeAddress1(e.target.value)}
                                  /> 
                                  <input
                                    style={{margin:'5px 0'}}
                                    type="text"
                                    placeholder="세부주소를 입력하세요."
                                    className="inputText"
                                    id="inputAddress2"
                                    value={this.state.세부주소}
                                    onChange={(e)=>this.onChangeAddress2(e.target.value)}
                                  />
                                  </>
                              ) 
                            }
                              {/* Address1은 도로명주소를 받아오는 값이고, Address2는 세부주소를 사용자가 입력하는 것 */}
                              <button 
                                type="button" 
                                className={`inputText addr ${this.state.inputShow ? ` on` : ``}`} 
                                id="inputAddr" 
                                onClick={this.onClickAddress}
                              >
                                <img src='./img/회원가입/ico_search.svg' alt='주소검색'/>
                                <span>
                                  {this.state.inputShow === true ? '재검색' : '주소검색'}
                                </span>
                              </button>
                              <span className="address_info">배송지에 따라 상품 정보가 달라질 수 있습니다.</span>                              
                              {/* 
                                  주소검색 팝업창 즉, 주소검색컴포넌트 연결
                                  {this.state.addressBtn && (<Postcode onChangeAddress1 = {this.state.onChangeAddress1})}은
                                  삼항연산자 즉, addressBtn이 true이면, Postcode 컴포넌트를 실행하라는 의미(주소팝업창 오픈)
                              */}  
                              {
                                this.state.addressBtn && (
                                  <div id="postcode">
                                    <Postcode 
                                      onChangeAddress1={this.onChangeAddress1}
                                      onChangePostNum={this.onChangePostNum}
                                    />
                                    {/* 사용자가 주소팝업창에 입력한 도로명주소는 '도로명주소'값으로 전달해줌 */}  
                                  </div>
                                )
                              }                             
                            </div>
                          </div>
                        </li>
                        <li>
                          <hr />
                        </li>
                        <li className="service">
                          <div className="gap">
                            <div className="label_box">
                              <span>이용약관동의<i>*</i></span>
                            </div>
                            <div className="input_box check_box">
                              <dl>
                                <dt>
                                  <label>
                                    <input 
                                      type="checkbox" 
                                      value={`전체 동의합니다.`}
                                      onChange={(e)=>this.onChangeCheckEventAll(e.target.checked, e.target.value)}
                                      checked={this.state.약관동의.length>=7?true:false} // 약관동의 배열의 길이가 7개 이상이면 true, 아니면 false
                                    />
                                    {/*
                                      - checked는 약관동의 배열의 개수가 7개 이상이면, `전체동의합니다.` 체크란에 체크가 되도록 설정 
                                        그렇지 않으면, 체크가 되지 않도록 설정
                                    */}
                                    <span>전체 동의합니다.</span>
                                  </label>
                                  <p>선택항목에 동의하지 않은 경우도 회원가입 및 일반적인 서비스를 이용할 수 있습니다.</p>
                                </dt>
                                <dd>
                                  <label>
                                    <input 
                                      type="checkbox"
                                      id="check1"
                                      value={`이용약관동의 (필수)`}
                                      onChange={(e)=>this.onChangeCheckEvent(e.target.checked, e.target.value)}
                                      checked={this.state.약관동의.includes(`이용약관동의 (필수)`)}
                                    />
                                    {/* 
                                      id 속성은 checkbox의 각 요소마다 고유한 id를 부여해줘야함
                                      value 속성은 checkbox이므로 다중선택이 가능, 즉 배열이기 때문에 ``(백틱)을 사용해 내용을 작성
                                      onChange 속성은 체크된지 확인할 수 있는 checked, 입력값을 value를 매개변수로 잡아줘야함 
                                      checked 속성은 배열값 안에서 value값과 동일한 값을 찾아 체크 해주라는 의미 
                                    */}
                                    <span>이용약관동의 (필수)</span>
                                  </label>
                                  <span>
                                    <a href="#!">약관보기 <i>&gt;</i></a>
                                  </span>
                                </dd>
                                <dd>
                                  <label>
                                    <input 
                                      type="checkbox"
                                      id="check2"
                                      value={`개인정보 수집·이용 동의 (필수)`}
                                      onChange={(e)=>this.onChangeCheckEvent(e.target.checked, e.target.value)}
                                      checked={this.state.약관동의.includes(`개인정보 수집·이용 동의 (필수)`)}
                                    />
                                    <span>개인정보 수집·이용 동의 (필수)</span>
                                  </label>
                                  <span>
                                    <a href="#!">약관보기 <i>&gt;</i></a>
                                  </span>
                                </dd>
                                <dd>
                                  <label>
                                    <input
                                      type="checkbox"
                                      id="check3"
                                      value={`개인정보 수집·이용 동의 (선택)`}
                                      onChange={(e)=>this.onChangeCheckEvent(e.target.checked, e.target.value)}
                                      checked={this.state.약관동의.includes(`개인정보 수집·이용 동의 (선택)`)}
                                    />
                                    <span>개인정보 수집·이용 동의 (선택)</span>
                                  </label>
                                  <span>
                                    <a href="#!">약관보기 <i>&gt;</i></a>
                                  </span>
                                </dd>
                                <dd>
                                  <label>
                                    <input
                                      type="checkbox"
                                      id="check4"
                                      value={`무료배송, 할인쿠폰 등 혜택/정보 수신 동의 (선택)`}
                                      onChange={(e)=>this.onChangeCheckEvent(e.target.checked, e.target.value)}
                                      checked={this.state.약관동의.includes(`무료배송, 할인쿠폰 등 혜택/정보 수신 동의 (선택)`)}
                                    />
                                    <span>무료배송, 할인쿠폰 등 혜택/정보 수신 동의 (선택)</span>
                                  </label>
                                  <div className="sub_checkbox">
                                    <div>
                                      <label>
                                        <input 
                                          type="checkbox"
                                          id="check5"
                                          value={`SMS`}
                                          onChange={(e)=>this.onChangeCheckEvent(e.target.checked, e.target.value)}
                                          checked={this.state.약관동의.includes(`SMS`)}
                                        />
                                        <span>SMS</span>
                                      </label>
                                      <label>
                                        <input 
                                          type="checkbox"
                                          id="check6"
                                          value={`이메일`}
                                          onChange={(e)=>this.onChangeCheckEvent(e.target.checked, e.target.value)}
                                          checked={this.state.약관동의.includes(`이메일`)}
                                        />
                                        <span>이메일</span>
                                      </label>
                                    </div>
                                    <p>동의 시 한 달간 [5%적립] + [2만원 이상 무료배송] 첫 주문 후 안내</p>
                                  </div>
                                </dd>
                                <dd>
                                  <label>
                                    <input 
                                      type="checkbox"
                                      id="check7"
                                      value={`본인은 만 14세 이상입니다. (필수)`}
                                      onChange={(e)=>this.onChangeCheckEvent(e.target.checked, e.target.value)}
                                      checked={this.state.약관동의.includes(`본인은 만 14세 이상입니다. (필수)`)}
                                    />
                                    <span>본인은 만 14세 이상입니다. (필수)</span>
                                  </label>
                                </dd>
                              </dl>
                            </div>
                          </div>
                        </li>
                    </ul>
                  </div>
                  <div className="button_box">
                    <button type="submit">가입하기</button>
                  </div>
                </form>
                {/* 아이디, 이메일, 휴대폰 중복확인 버튼을 눌렀을 경우, 나타나는 팝업창 */}
                {
                  this.state.popupShow && (
                    <div className="popup">
                      <div className="popup-container">
                        <div className="content-box">
                          <ul>
                            <li>
                              <h2>알림메세지</h2>
                              <span>
                                <a href="#!" title="Close" onClick={this.onClickClosePopup}><img src="./img/회원가입/ico_close_999_32x32.png" alt="닫힘버튼"></img></a>
                              </span>
                            </li>
                            <li>
                              <p>{this.state.popupText}</p>
                            </li>
                          </ul>
                        </div>
                        <div className="button-box">
                          <button className="ok-btn" title="확인" onClick={this.onClickClosePopup}>확인</button>
                        </div>
                      </div>
                    </div>
                  )
                }
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default JoinComponent;