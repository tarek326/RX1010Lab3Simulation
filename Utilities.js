var intQuestionCounter = 0,
    ASCII_QUESTION = 63;

function CheckForDebugCommand(e) 
{
    var intKeyCode = 0;
    if (window.event) 
	{
		e = window.event;
		intKeyCode = e.keyCode;
    } 
	else 
	{
        intKeyCode = e.which;
    }

    if (intKeyCode == ASCII_QUESTION) 
	{
        intQuestionCounter++;
        if (intQuestionCounter == 3) 
		{
            intQuestionCounter = 0;
			ShowDebugWindow();
        }
    } 
	else if (intKeyCode != 0) 
	{ 
	    /*in FireFox, the shift key comes through as a 
	    keypress with code of 0...we want to ignore this */
        intQuestionCounter = 0;
    }
}

function DoCPExit()
{
	if( window.parent )
		window.parent.GetControlWindow().Control.TriggerReturnToLMS();
}

function trace( msg )
{
	if(msg) WriteToDebug("CP:"+msg);
}
		
		