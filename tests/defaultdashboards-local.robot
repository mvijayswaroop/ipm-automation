***Settings*** 
Library    IonwebLibrary    WITH NAME  ionweb
Library    SeleniumLibrary  WITH NAME  selenium 
Library    IPMLibrary    WITH NAME    ipmautomation 
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
Test that We can login to IPM, close all dashboards and launch dashboards by name 
	ionweb.Open Web Client
	ionweb.Authenticate Web Client  mkv  mkvpwd
	ionweb.Wait Scenario Loaded
	ionweb.Set Webcomponent Test Environment    ${true}
	selenium.Maximize Browser Window
	ionweb.Close All Dashboards
	ionweb.Open Dashboard By Name	Platform Management
	ionweb.Open Dashboard By Name	Security Management
	ionweb.Click Dashboard Tab	Platform Management
	ionweb.Set Active Component	Component Management
	ipmautomation.Start Component    ROUTER_M_EXT_Cloned