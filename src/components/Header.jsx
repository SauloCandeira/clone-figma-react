import ClarifionLogo from './../assets/images/clarifion-logo.png'
import McafeeLogo from './../assets/images/Mcafee.svg'
import NortonLogo from './../assets/images/Norton.svg'

function Header() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="width: 1500px; padding-left: 127px; padding-right: 127px; padding-top: 30px; padding-bottom: 30px; left: 0px; top: 50px; position: absolute; background: white; justify-content: space-between; align-items: center; display: inline-flex">

          <img className="width: 192px; height: 36px" src={ClarifionLogo} />

          <div className="justify-content: flex-start; align-items: flex-start; gap: 32px; display: flex">

              <div className="width: 88px; height: 32px; position: relative">
                  {/* <img style="width: 88px; height: 32px; left: 0px; top: 0px; position: absolute" src=''/> */}
                  <img src={McafeeLogo} className="width: 88px; height: 32px; left: 0px; top: 0px; position: absolute" alt="Mcafee logo" />
              </div>
              
              <div className="width: 82px; height: 32px; position: relative">
                  <img src={NortonLogo} className="width: 88px; height: 32px; left: 0px; top: 0px; position: absolute" alt="Norton logo" />
                  {/* <img style="width: 88px; height: 32px; left: 0px; top: 0px; position: absolute" src='./../assets/images/Norton.svg' /> */}
              </div>
          </div>
      </div>
    </>
  )
}

export default Header
