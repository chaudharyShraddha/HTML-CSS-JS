function answer(){
	
	var total= 5;
	var score= 0;
	
	//get user input
	var q1=document.forms["quizform"]["q1"].value;
	var q2=document.forms["quizform"]["q2"].value;
	var q3=document.forms["quizform"]["q3"].value;
	var q4=document.forms["quizform"]["q4"].value;
	var q5=document.forms["quizform"]["q5"].value;
	
	//Validation
	for(i = 1;i <= total;i++)
	{
		if(eval('q'+i) == null || eval('q'+i) == '')
		{
			alert('You missed question '+ i);
			return false;
		}
	}
	
	//set correct answer
	var answer=["b","a","d","b","d"]
	
	//cheack answer
	if(q1==answer[0])
		score++;
	
	if(q2==answer[1])
		score++;
	
	if(q3==answer[2])
		score++;
	
	if(q4==answer[3])
		score++;
	
	if(q5==answer[4])
		score++;
	
	
	alert("You scored "+score+"out of "+total);
}