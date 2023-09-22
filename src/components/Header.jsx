function Header() {
  // const [count, setCount] = useState(0)

  return (
    <>
        <div style="width: 1500px; padding-left: 127px; padding-right: 127px; padding-top: 30px; padding-bottom: 30px; left: 0px; top: 50px; position: absolute; background: white; justify-content: space-between; align-items: center; display: inline-flex">
            <img style="width: 192px; height: 36px" src="./assets/images/clarifion-logo.png" />
            <div style="justify-content: flex-start; align-items: flex-start; gap: 32px; display: flex">

                <div style="width: 88px; height: 32px; position: relative">
                    <img style="width: 88px; height: 32px; left: 0px; top: 0px; position: absolute" src="./assets/images/Frame 1484578055.svg" />
                </div>
                
                <div style="width: 82px; height: 32px; position: relative">
                    <img style="width: 88px; height: 32px; left: 0px; top: 0px; position: absolute" src="./assets/images/norton-antivirus-logo 1.svg" />
                </div>
            </div>
        </div>
    </>
  )
}

export default Header
