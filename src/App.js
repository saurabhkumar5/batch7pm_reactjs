import momo from './bmw.png';
import home from './home.png';
import video from "./video.mp4"
import './App.css'

      function App(){
 
          
        return (
            
           <div>
             <h1 style={{backgroundColor:'yellow',color:'red',textAlign:'center'}}>helllo reactjs</h1>
             <h1>kullu</h1>
             <p>hello how are you</p>
             <a href="https://saurabhkumar9493.netlify.app/">click here</a>
             <img src={momo}/>
             <img src={home}/>
             <img src="https://img1.wsimg.com/isteam/ip/1172a89b-094a-415b-99fe-cc1e7d3cd9b0/blob-24cc2f2.png/:/cr=t:6.5%25,l:19.37%25,w:42.38%25,h:84.75%25/rs=w:365,h:487,cg:true,m/qt=q:51"/>
             <img src='https://saurabhkumar9493.netlify.app/static/media/me-about.f4fedfbe5bd6bd897a07.png'/>
             <video src={video} controls></video>
            </div>
        )
      }

      export default App;