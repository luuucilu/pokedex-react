import React from 'react';
import LeftScreen from './components/LeftScreen';
import './reset.css';
import './styles.css';

function App() {
  return (
    <div className="outsideContainer">
        
    <div className="left">
        <div className="topSide">
            <div className="blueCircle">
                <div className="glow"></div>
            </div>
            <div className="circlesWrapper">
                <div className="redCircle"></div>
                <div className="yellowCircle"></div>
                <div className="greenCircle"></div>
            </div>
        </div>
    
      <LeftScreen />
        
        <div className="bottomLeftWrapper">
            <div className="leftBottomButton">
                <button className="blackLeftButton"></button>
            </div>

            <div className="centralBottomButton">
                <div className="bottomButtonsWrapper">
                    <div className="redBottomButton"></div>
                    <div className="blueBottomButton"></div>
                </div>

                <div className="greenScreen"></div>
            </div>

            <div className="cross">
                <div className="topCross">
                    <div className="topButtonCross"></div>
                </div>
                <div className="middleCrossWrapper">
                    <div className="leftCross"></div>
                    <div className="middleCross"></div>
                    <div className="rightCross"></div>
                </div>
                <div className="bottomCrossWrapper">
                    <div className="bottomCross"></div>
                </div>
            </div>

        </div>    

        
        
     </div> {/*<!--  PARTE IZQUIERDA   --> */}
    
    <div className="middle">

    </div>

    <div className="right">
        <div className="rightScreen"></div>
        <div className="buttonsContainer">
            <div className="buttonsTopContainer">
                <div className="blueButton"></div>
                <div className="blueButton"></div>
                <div className="blueButton"></div>
                <div className="blueButton"></div>
                <div className="blueButton"></div>
            </div>
            <div className="buttonsBottomContainer">
                <div className="blueButton"></div>
                <div className="blueButton"></div>
                <div className="blueButton"></div>
                <div className="blueButton"></div>
                <div className="blueButton"></div>
            </div>
        </div>

        <div className="bottomContainer">
            <div className="leftWrapper">
                <div className="circleButtonContainer">
                    <div className="circleButton"></div>
                    <div className="circleButton"></div>
                </div>

                <div className="whiteButtonContainer">
                    <div className="whiteButton"></div>
                    <div className="whiteButton"></div>
                </div>

                <div className="blackScreen"></div>
            </div>

            <div className="rightWrapper">
                <div className="blackButtonsWrapper">
                    <div className="blackButton"></div>
                    <div className="blackButton"></div>
                </div>

                <div className="goldenButton"></div>
                <div className="blackScreen"></div>
            </div>
        </div>
        
    </div>

</div>
  );
}

export default App;
