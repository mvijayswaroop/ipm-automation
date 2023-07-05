***Settings*** 
Library         IonwebLibrary    WITH NAME  ionweb
Library         SeleniumLibrary  WITH NAME  selenium 
Test Setup      Test Setup
Test Teardown   Test Teardown
 
***Keywords*** 
Test Setup 
	ionweb.Set Default URL   http://localhost:8080/ionweb/client/html5/html5.jsp
	ionweb.Set Browser Type  chrome
	ionweb.Download WebDriver  chrome
 
Test Teardown
	selenium.Close All Browsers

 
***Test Cases*** 
Test that we are able to start a component
	ionweb.Open Web Client
	ionweb.Authenticate Web Client  mkv  mkvpwd
	ionweb.Wait Scenario Loaded
	ionweb.Set Webcomponent Test Environment    ${true}
	selenium.Maximize Browser Window
	ionweb.Click Dashboard Tab	Platform Management
	ionweb.Wait Scenario Loaded
	ionweb.Set Active Component	Component Management
	ionweb.Bring Component Into View
	@{Selection}=    Create List	ROUTER_M_EXT_Cloned    AcompName
	ionweb.Select Cells In Grid    2    ${Selection}
	ionweb.Wait For Data Shown In Grid
	selenium.Capture Page Screenshot
	BuiltIn.Sleep    10s
	# ionweb.Click On Action Item	\.cmicon run