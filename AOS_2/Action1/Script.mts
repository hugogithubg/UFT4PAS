Const desiredScore = 9.0
Browser("Advantage Shopping").Page("Advantage Shopping").Link("HeadphonesCategory").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").Link("HeadphonesCategory")_;_script infofile_;_ZIP::ssf1.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Beats Studio 2 Over-Ear").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Beats Studio 2 Over-Ear")_;_script infofile_;_ZIP::ssf2.xml_;_
foo = Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("score").Exist (20) @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("9.3")_;_script infofile_;_ZIP::ssf3.xml_;_
CurrentScore = cDbl(Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("score").GetROProperty("innerhtml"))
print currentScore &"|"& desiredScore &"|"& currentScore > desiredScore
If CurrentScore >= desiredScore Then
	Reporter.ReportEvent micPass, "checkScore", "Score exceeded the value of" & desiredScore
else
	Reporter.ReportEvent micFail, "checkScore", "Score exceeded is too low. Found " & currentScore & " and need " & desiredScore
End If
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("save_to_cart").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("save to cart")_;_script infofile_;_ZIP::ssf4.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").Link("ShoppingCart").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").Link("ShoppingCart")_;_script infofile_;_ZIP::ssf5.xml_;_
