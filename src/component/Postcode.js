import React, { Component } from 'react';
import DaumPostcode from 'react-daum-postcode';

class Postcode extends Component {
  
  // 정해진 메소드이므로 메소드 이름을 임의로 수정 불가능
  onCompletePost = (data) => {
    this.props.onChangePostNum(data.zonecode);
    this.props.onChangeAddress1(data.address);
    // data.address 사용자가 팝업창에 검색한 도로명주소를 가져오는 변수 
    // <Postcode onChangeAddress1={this.onChangeAddress1}/>에 data.address값을 전달
  }

  render() {
    
    const postStyle = {
      position:'fixed',
      top:'50%',
      left:'50%',
      width:'400px',
      height:'500px',
      background:'#fff',
      zIndex:'2',
      border:'1px solid #ccc',
      marginTop:'-250px',
      marginLeft:'-200px'
    }

    return (
      <div>
        <DaumPostcode 
          style={postStyle}
          autoClose
          onComplete={this.onCompletePost}
        />
        {/* 
            autoClose는 사용자가 주소값을 모두 입력하였을때, 자동으로 팝업창을 닫아주는 기능
            onComplete는 주소 입력이 완료되었을때, data 매개변수로 주소값을 보내줌
        */}
      </div>
    );
  }
}

export default Postcode;